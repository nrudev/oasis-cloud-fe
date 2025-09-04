import Image from "next/image";

import { Box, CardContent, Stack } from "@mui/material";

import Card from "@/cards/Card";
import CardHeader from "@/cards/CardHeader";
import AssetStatusInfo from "@/cards/dashboard/AssetStatusCard/AssetStatusInfo";
import CharacterIcon from "@/components/Icon/CharacterIcon";
import { useInfoTradeStyle } from "@/hooks/query/useInfo";

import NotConnectInfo from "./NotConnectInfo";

function calculateHappiness(totalProfitLossRate: number) {
  if (totalProfitLossRate <= -11) return 1;
  if (totalProfitLossRate <= -5) return 2;
  if (totalProfitLossRate < 0) return 3;
  if (totalProfitLossRate === 0) return 4;
  if (totalProfitLossRate < 5) return 5;
  if (totalProfitLossRate < 11) return 6;
  return 7;
}

interface Props {
  isConnected: boolean;
}

export default function AssetStatusCard({ isConnected }: Props) {
  const { tradeStyleQuery } = useInfoTradeStyle();
  const { data: tradeStyleData } = tradeStyleQuery;

  return (
    <Card sx={{ background: "url('/assetstatus/bg.png')" }}>
      <CardHeader id="rise-arrow" title="실시간 종합 자산현황" isDark />
      <CardContent className="flex h-full max-h-[260px] w-full flex-row">
        <Box className="w-1/2 shrink-0">
          {isConnected === true ? (
            <AssetStatusInfo tradeStyleData={tradeStyleData} />
          ) : (
            <NotConnectInfo />
          )}
        </Box>
        <Box className="relative w-1/2">
          <Stack direction="column" className="h-full items-center justify-center">
            <CharacterIcon
              happiness={calculateHappiness(tradeStyleData?.totalProfitLossRate ?? 0)}
            />
            <Image
              className="absolute bottom-0"
              src="/assetstatus/chart.png"
              alt="chart"
              width={220}
              height={110}
            />
          </Stack>
        </Box>
      </CardContent>
    </Card>
  );
}
