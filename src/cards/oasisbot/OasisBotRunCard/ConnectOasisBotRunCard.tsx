import { useState } from "react";

import { CardContent, InputAdornment, Stack } from "@mui/material";
import { sendGAEvent, sendGTMEvent } from "@next/third-parties/google";
import { useAtom } from "jotai";

import Card from "@/cards/Card";
import CardButton from "@/cards/CardButton";
import CardFooter from "@/cards/CardFooter";
import CardHeader from "@/cards/CardHeader";
import ExchangeChip from "@/components/chip/ExchangeChip";
import InfoDialog from "@/components/dialog/InfoDialog";
import useDialogGlobal from "@/components/dialog/useDialogGlobal";
import FormSelect from "@/components/form/FormSelect";
import FormTextField from "@/components/form/FormTextField";
import { GA_CTA_EVENTS } from "@/constants/constants";
import exchangeAtom from "@/datas/exchange";
import { useBot, useBotInfo } from "@/hooks/query/useOasisBot";
import { usePresetQuery } from "@/hooks/query/usePreset";
import { DEFAULT_BALANCE } from "@/libs/balance";

function ConnectOasisBotRunCard() {
  const [exchange] = useAtom(exchangeAtom);

  const [startBalance, setStartBalance] = useState<number>(DEFAULT_BALANCE[exchange]);
  const [selectedPreset, setSelectedPreset] = useState<number>(0);
  const [selectedTradeItem, setSelectedTradeItem] = useState<number>(1);
  const [standardMinute, setStandardMinute] = useState<number>(1);

  const { openDialog, closeDialog } = useDialogGlobal();
  const { presetQuery } = usePresetQuery();
  const { coinQuery, balanceQuery } = useBotInfo();
  const {
    startBotMutation: { mutate, isSuccess },
  } = useBot();

  const onReset = () => {
    setStartBalance(DEFAULT_BALANCE[exchange]);
    setSelectedPreset(0);
    setSelectedTradeItem(0);
  };

  const presetList: SelectItem[] =
    (presetQuery.data?.map(item => ({
      label: item.presetName,
      value: item.id,
    })) as SelectItem[]) ?? [];
  const coinList = (coinQuery.data as SelectItem[]) ?? [];

  // temp
  const standardMinuteList = [
    { label: "1분봉", value: 1 },
    { label: "3분봉", value: 3 },
    { label: "5분봉", value: 5 },
    { label: "15분봉", value: 15 },
    { label: "30분봉", value: 30 },
    { label: "1시간봉", value: 60 },
  ];

  const runOasisBot = () => {
    if (exchange === "upbit" ? Number(startBalance) < 5000 : Number(startBalance) < 100) {
      openDialog(
        <InfoDialog
          title="거래금액"
          description={[`거래금액은 ${exchange === "upbit" ? "￦5,000" : "$100"} 부터 가능합니다.`]}
          confirmFunc={closeDialog}
        />,
      );
      return;
    }
    if (
      (!!balanceQuery.data?.availableBalance &&
        balanceQuery.data.availableBalance < Number(startBalance)) ||
      !Number(startBalance)
    ) {
      openDialog(
        <InfoDialog
          title="거래금액"
          description={["거래금액은 잔고 이내의 금액을 기입해주세요."]}
          confirmFunc={closeDialog}
        />,
      );
      return;
    }

    if (!selectedPreset) {
      openDialog(
        <InfoDialog
          title="설정 프리셋"
          description={["프리셋을 설정하고 실행해주세요."]}
          confirmFunc={closeDialog}
        />,
      );
      return;
    }

    if (!selectedTradeItem) {
      openDialog(
        <InfoDialog
          title="매매종목 설정"
          description={["매매종목을 설정하고 실행해주세요."]}
          confirmFunc={closeDialog}
        />,
      );
      return;
    }

    if (!Number(standardMinute)) {
      openDialog(
        <InfoDialog
          title="기준 분봉 설정"
          description={["기준분봉을 설정하고 실행해주세요."]}
          confirmFunc={closeDialog}
        />,
      );
      return;
    }

    const body = {
      botName: "bot1",
      presetId: selectedPreset,
      coinId: selectedTradeItem,
      standardMinute: Number(standardMinute),
      startBalance: Number(startBalance),
      leverage: null,
    };

    openDialog(
      <InfoDialog
        title="봇 실행"
        description={["해당 봇을 실행할까요?"]}
        confirmFunc={() => {
          sendGAEvent("event", GA_CTA_EVENTS.startBot1, {
            // event: GA_CTA_EVENTS.startBot1,
            trade_amount: Number(startBalance),
            preset_name: selectedPreset,
            trade_asset: selectedTradeItem,
            timeframe: Number(standardMinute),
            leverage_setting: null,
          });
          sendGTMEvent({
            event: GA_CTA_EVENTS.startBot1,
            trade_amount: Number(startBalance),
            preset_name: selectedPreset,
            trade_asset: selectedTradeItem,
            timeframe: Number(standardMinute),
            leverage_setting: null,
          });

          mutate({ body });
          if (isSuccess) closeDialog();
        }}
        cancelFunc={closeDialog}
        cancellable
      />,
    );
  };

  return (
    <Card>
      <CardHeader
        id="bot-start"
        title="오아시스 BOT 실행"
        subtitle={`주문가능 금액\n${exchange === "upbit" ? "￦" : "$"}${balanceQuery.data?.availableBalance?.toLocaleString() ?? 0}`}
        action={<ExchangeChip />}
      />
      <CardContent>
        <Stack className="gap-2">
          <FormTextField
            id="transactionAmount"
            className="trade-amount"
            label={`거래금액을 입력해 주세요 (최소 ${exchange === "upbit" ? "₩5,000" : "$100"})`}
            type="number"
            value={startBalance}
            setValue={setStartBalance}
            startAdornment={
              <InputAdornment position="start">{exchange === "upbit" ? "￦" : "$"}</InputAdornment>
            }
            inputLabelProps={{
              className: "text-brand opacity-100",
            }}
          />
          <FormSelect
            id="presets"
            className="preset-name"
            label="설정 프리셋"
            variant="standard"
            items={presetList}
            value={selectedPreset}
            setValue={setSelectedPreset}
          />
          <FormSelect
            id="tradeItem"
            className="trade-asset"
            label="매매종목"
            variant="standard"
            items={coinList}
            value={selectedTradeItem}
            setValue={setSelectedTradeItem}
          />
          <FormSelect
            id="tradeItem"
            className="timeframe"
            label="기준 분봉"
            variant="standard"
            items={standardMinuteList}
            value={standardMinute}
            setValue={setStandardMinute}
          />
          {/* <Stack className="w-full">
            <InputLabel htmlFor="leverage">
              <div className="flex flex-row">
                <Icon src="/icons/control/info.png" alt="info" size={12} className="mr-1" />
                <Typography
                  variant="100R"
                  className="text-neutral-600 underline hover:cursor-pointer"
                  onClick={() => openDialog(<LeverageNoticeDialog handleClose={closeDialog} />)}
                >
                  현재 설정 레버리지
                </Typography>
              </div>
            </InputLabel>
            <InputBase
              placeholder={`${exchange === "upbit" ? "업비트 거래소는 레버리지 설정 불가" : "레버리지 고정값"}`}
              fullWidth
              classes={{
                input:
                  "leverage-setting h-[30px] p-0 flex-0 items-center justify-center leading-[16px] text-[14px] border-solid border-b-[1px] border-x-0 border-t-0 border-neutral-300 font-[500] text-font-2",
                disabled: "cursor-not-allowed bg-neutral-200 text-neutral-600",
              }}
              disabled
            />
          </Stack> */}
        </Stack>
      </CardContent>
      <CardFooter className="bottom-2">
        <CardButton
          text="초기화"
          className="reset-button mr-1 bg-neutral-700 text-white"
          onClick={onReset}
        />
        <CardButton
          text="저장 및 실행"
          className="execute-button ml-1 bg-brand text-white"
          onClick={runOasisBot}
        />
      </CardFooter>
    </Card>
  );
}

export default ConnectOasisBotRunCard;
