import { useEffect, useState } from "react";

import { CardContent, InputAdornment, Stack } from "@mui/material";
import { useIsMutating } from "@tanstack/react-query";
import { useAtom } from "jotai";

import Card from "@/cards/Card";
import CardButton from "@/cards/CardButton";
import CardFooter from "@/cards/CardFooter";
import CardHeader from "@/cards/CardHeader";
import ExchangeChip from "@/components/chip/ExchangeChip";
import FormTextField from "@/components/form/FormTextField";
import exchangeAtom from "@/datas/exchange";
import { selectedBotRowAtom } from "@/datas/oasisbotTransaction";
import useBotCommand from "@/hooks/card/useBotCommand";
import { useBotDetailQuery, useBotInfo } from "@/hooks/query/useOasisBot";
import { DEFAULT_BALANCE } from "@/libs/balance";

function OasisBotSelectCard() {
  const [exchange] = useAtom(exchangeAtom);

  const [startBalance, setStartBalance] = useState<number>(DEFAULT_BALANCE[exchange] || 0);
  const [selectedPreset, setSelectedPreset] = useState<string>("");
  const [selectedTradeItem, setSelectedTradeItem] = useState<string>("");
  const [standardMinute, setStandardMinute] = useState<number>(0);

  const [selectedRow, setSelectedRow] = useAtom(selectedBotRowAtom);

  const {
    botDetailQuery: { data },
  } = useBotDetailQuery(selectedRow[0]);
  const { stopBot, restartBot } = useBotCommand();
  // const { openDialog, closeDialog } = useDialogGlobal();
  const { balanceQuery } = useBotInfo();

  const isStopBotMutating = useIsMutating({ mutationKey: ["stopBot"] });
  const isRestartBotMutating = useIsMutating({ mutationKey: ["restartBot"] });

  const onRemove = () => {
    setSelectedRow([]);
  };

  useEffect(() => {
    if (data) {
      setStartBalance(data.startBalance);
      setSelectedPreset(data.presetName);
      setSelectedTradeItem(data.coinType);
      setStandardMinute(data.standardMinute);
    }
  }, [data]);

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
            inputProps={{
              className: "cursor-not-allowed",
            }}
            readOnly
          />
          <FormTextField
            id="presets"
            label="설정 프리셋"
            placeholder="설정 프리셋을 선택"
            value={selectedPreset}
            readOnly
            inputProps={{
              className: "cursor-not-allowed",
            }}
          />
          <FormTextField
            id="tradeItem"
            label="매매종목"
            placeholder="매매종목을 선택"
            value={selectedTradeItem}
            readOnly
            inputProps={{
              className: "cursor-not-allowed",
            }}
          />
          <FormTextField
            id="tradeItem"
            label="기준 분봉"
            placeholder="분봉 선택"
            value={standardMinute}
            readOnly
            inputProps={{
              className: "cursor-not-allowed",
            }}
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
                  "h-[30px] p-0 flex-0 items-center justify-center leading-[16px] text-[14px] border-solid border-b-[1px] border-x-0 border-t-0 border-neutral-300 font-[500] text-font-2",
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
          className={`mr-1 text-white ${data?.isRunning ? "bg-neutral-400" : "bg-neutral-700"}`}
          onClick={onRemove}
          disabled={!!data?.isRunning}
        />
        {data?.isRunning ? (
          <CardButton
            text="중지"
            className="ml-1 bg-[#F46565] text-white"
            onClick={() =>
              stopBot({
                selected: data.id,
                onSuccess: () => console.log("stop"),
              })
            }
            loading={!!isStopBotMutating}
          />
        ) : (
          <CardButton
            text="재실행"
            className="ml-1 bg-brand text-white"
            onClick={() => restartBot({ selected: data?.id || -1 })}
            loading={!!isRestartBotMutating}
          />
        )}
      </CardFooter>
    </Card>
  );
}

export default OasisBotSelectCard;
