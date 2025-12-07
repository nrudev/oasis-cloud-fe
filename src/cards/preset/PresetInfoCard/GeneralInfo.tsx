import { Stack, Typography } from "@mui/material";
import { useAtom } from "jotai";

import exchangeAtom from "@/datas/exchange";
import { useInfoTradeStyle } from "@/hooks/query/useInfo";
import { useSubscribeQuery } from "@/hooks/query/useSubcribe";
import { numberSlice, numberToCurrency } from "@/libs/string";

interface GeneralInfoProps {
  type: "exchange" | "balance" | "subscribe";
}

const label = {
  exchange: "접속거래소",
  balance: "잔고",
  subscribe: "구독권",
};

export default function GeneralInfo({ type }: GeneralInfoProps) {
  const {
    subscribeQuery: { data: subscribeData },
  } = useSubscribeQuery();
  const {
    tradeStyleQuery: { data: tradeStyleData },
  } = useInfoTradeStyle();
  const [exchange] = useAtom(exchangeAtom);
  return (
    <Stack direction="row" className="h-[30px] w-full items-center justify-between gap-8">
      <Typography variant="100R" className="w-[60px] shrink-0 text-neutral-600">
        {label[type]}
      </Typography>
      <Stack
        direction="row"
        className="h-full w-full items-center justify-end border-x-0 border-b-[1px] border-t-0 border-solid border-neutral-300"
      >
        <Typography variant="200M" className="text-font-2">
          {type === "exchange"
            ? exchange.toUpperCase()
            : type === "balance"
              ? numberToCurrency(
                  numberSlice(tradeStyleData?.accountBalance, 2),
                  exchange === "bithumb" ? "₩" : "$",
                ) || "0"
              : subscribeData?.productName || "Free"}
        </Typography>
      </Stack>
    </Stack>
  );
}
