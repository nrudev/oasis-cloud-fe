import Image from "next/image";
import { Box, CardContent, Stack } from "@mui/material";
import AssetStatusInfo from "@/cards/AssetStatusCard/AssetStatusInfo";
import Card from "@/cards/Card";
import CardHeader from "@/cards/CardHeader";
import CharacterIcon from "@/components/Icon/CharacterIcon";
import useTradeStyle from "@/hooks/query/useTradeStyle";

function calculateHappiness(totalProfitLossRate: number) {
  if (totalProfitLossRate <= -11) return 1;
  if (totalProfitLossRate <= -5) return 2;
  if (totalProfitLossRate < 0) return 3;
  if (totalProfitLossRate === 0) return 4;
  if (totalProfitLossRate < 5) return 5;
  if (totalProfitLossRate < 11) return 6;
  return 7;
}

export default function AssetStatusCard() {
  const { tradeStyleQuery } = useTradeStyle();
  const { data: tradeStyleData } = tradeStyleQuery;
  return (
    <Card sx={{ background: "url('/assetstatus/bg.png')" }}>
      <CardHeader id="rise-arrow" title="실시간 종합 자산현황" isDark />
      <CardContent className="flex flex-row w-full h-full max-h-[260px]">
        <Box className="w-1/2 shrink-0">
          <AssetStatusInfo tradeStyleData={tradeStyleData} />
        </Box>
        <Box className="w-1/2 relative">
          <Stack
            direction="column"
            className="h-full justify-center items-center"
          >
            <CharacterIcon
              happiness={calculateHappiness(
                tradeStyleData?.totalProfitLossRate ?? 0,
              )}
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
