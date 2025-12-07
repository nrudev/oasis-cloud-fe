import { Box } from "@mui/material";
import { useAtomValue } from "jotai";

import { BaseCircle, CenterCircle, ElementCircle } from "@/cards/dashboard/ChartAssetCard/Circle";
import exchangeAtom from "@/datas/exchange";
import { numberSlice, numberToCurrency } from "@/libs/string";

interface CircleChartProps {
  coinRatioList?: Account.HoldingCoinRatioT[];
  focus?: string;
}

const coinColors = [
  {
    fillColorStart: "#22A1E9",
    fillColorEnd: "#7AD3FF",
  },
  {
    fillColorStart: "#FEBD38",
    fillColorEnd: "#FFD572",
  },
  {
    fillColorStart: "#223CE9",
    fillColorEnd: "#223CE9",
  },
];

export default function CircleChart({ coinRatioList, focus }: CircleChartProps) {
  const exchange = useAtomValue(exchangeAtom);

  const coinRatioPercentList = [0];
  let sum = 0;
  coinRatioList?.forEach(coinRatio => {
    sum += coinRatio.ratio;
    coinRatioPercentList.push(Math.round(sum) * 3.6);
  });
  let focusIndex = coinRatioList?.findIndex(coinRatio => coinRatio.name === focus) ?? -1;
  if (focusIndex === -1) focusIndex = 0;
  return (
    <Box className="relative h-[260px] w-[260px]">
      <BaseCircle />
      {coinRatioList?.map(
        (coinRatio, index) =>
          coinRatio.ratio >= 0.01 && (
            <ElementCircle
              key={coinRatio.name}
              fillColorStart={coinColors[index % 3].fillColorStart}
              fillColorEnd={coinColors[index % 3].fillColorEnd}
              size={100 - 2 * index + (focusIndex === index ? 4 : -4)}
              startAngle={coinRatioPercentList[index]}
              endAngle={coinRatioPercentList[index + 1]}
            />
          ),
      )}
      <CenterCircle
        percent={coinRatioList?.[focusIndex]?.ratio}
        amount={numberToCurrency(
          numberSlice(coinRatioList?.[focusIndex]?.price, 2),
          exchange === "bithumb" ? "₩" : "$",
        )}
      />
    </Box>
  );
}
