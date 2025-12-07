import { Stack, Typography } from "@mui/material";
import { useAtom, useAtomValue } from "jotai";

import DisplayPL from "@/cards/dashboard/AssetStatusCard/DisplayPL";
import authAtom from "@/datas/auth";
import exchangeAtom from "@/datas/exchange";
import { numberSlice, numberToCurrency } from "@/libs/string";

interface AssetStatusInfoProps {
  tradeStyleData?: Account.TradeStyleT;
}
export default function AssetStatusInfo({ tradeStyleData }: AssetStatusInfoProps) {
  const [user] = useAtom(authAtom);
  const exchange = useAtomValue(exchangeAtom);

  const userName = user.name;

  return (
    <Stack className="h-full w-full justify-between">
      <Stack direction="column" className="gap-1">
        <Typography variant="400M" className="text-neutral-100">
          Hi! {userName}님
        </Typography>

        <Stack direction="row" className="gap-1">
          {tradeStyleData?.tag.map(keyword => (
            <Typography key={keyword} variant="200R" className="text-white">
              #{keyword}
            </Typography>
          ))}
        </Stack>
      </Stack>
      <Stack direction="column" className="gap-1">
        <Typography variant="300R" className="text-neutral-200">
          총 자산금액
        </Typography>
        <Typography variant="h4" className="w-[120%] text-white">
          {numberToCurrency(
            numberSlice(tradeStyleData?.accountBalance, 2),
            exchange === "bithumb" ? "₩" : "$",
          )}
        </Typography>
      </Stack>
      <Stack direction="row" className="w-full">
        <Stack direction="column" className="w-1/2 gap-1">
          <Typography variant="300R" className="text-neutral-200">
            총현황
          </Typography>
          <DisplayPL pl={tradeStyleData?.totalProfitLossRate ?? 0} />
        </Stack>
        <Stack direction="column" className="w-1/2 gap-1">
          <Typography variant="300R" className="text-neutral-200">
            승률
          </Typography>
          <DisplayPL pl={tradeStyleData?.winRate ?? 0} />
        </Stack>
      </Stack>
    </Stack>
  );
}
