import { Stack } from "@mui/material";
import { useAtomValue } from "jotai";

import OasisBotTotalCard from "@/cards/oasisbot/OasisBotTotalCard/index";
import exchangeAtom from "@/datas/exchange";
import { useBotData } from "@/hooks/query/useOasisBot";
import { exchangeToKorean } from "@/libs/string";

function OasisBotTotalCardList() {
  const exchange = useAtomValue(exchangeAtom);
  const { botDataQuery } = useBotData();

  return (
    <Stack spacing={2}>
      <OasisBotTotalCard
        id="total"
        title="실시간 총 거래금액"
        subtitle="7일 기준"
        color="#223CE9"
        value={botDataQuery.data?.totalTradePrice.value ?? 0}
        unit={exchange === "bithumb" ? "원" : "$"}
        difference={botDataQuery.data?.totalTradePrice.difference}
        arrow
      />
      <OasisBotTotalCard
        id="bot-transaction"
        title="실시간 총 거래횟수"
        subtitle="7일 기준"
        color="#2BB7F5"
        value={botDataQuery.data?.totalTradeCount.value ?? 0}
        unit="회"
        difference={botDataQuery.data?.totalTradeCount.difference ?? 0}
        arrow
      />
      <OasisBotTotalCard
        id="profit-rate"
        title="나의 봇 수익률 Top 1"
        subtitle={
          !!botDataQuery.data?.maxProfitRate.presetName &&
          !!botDataQuery.data?.maxProfitRate.coinName
            ? `${exchangeToKorean(exchange)} 거래소의 ${botDataQuery.data?.maxProfitRate.presetName} - ${botDataQuery.data?.maxProfitRate.coinName}`
            : "ㅤ"
        }
        color="#F46565"
        value={botDataQuery.data?.maxProfitRate.rate ?? 0}
        unit="%"
        arrow
        mention="7일 동안 수익률이 제일 높아요"
      />
      <OasisBotTotalCard
        id="winning-rate"
        title="나의 봇 승률 Top 1"
        subtitle={
          !!botDataQuery.data?.maxWinRate.presetName && botDataQuery.data?.maxWinRate.coinName
            ? `${exchangeToKorean(exchange)} 거래소의 ${botDataQuery.data?.maxWinRate.presetName} - ${botDataQuery.data?.maxWinRate.coinName}`
            : "ㅤ"
        }
        color="#223CE9"
        value={botDataQuery.data?.maxWinRate.rate ?? 0}
        unit="%"
        arrow
        mention="7일 동안 승률이 제일 높아요"
      />
      <OasisBotTotalCard
        id="copied-presets"
        title="실시간 운용자산"
        subtitle={`${exchangeToKorean(exchange)} 거래소 기준`}
        color="#2BB7F5"
        value={(exchange === "bithumb" ? "₩" : "$") + (botDataQuery.data?.totalTradeBalance ?? "")}
        unit=""
        mention="OASIS 님의 운용자산"
      />
    </Stack>
  );
}

export default OasisBotTotalCardList;
