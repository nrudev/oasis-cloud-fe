import { useState } from "react";

import { Box, CardContent, Divider } from "@mui/material";

import Card from "@/cards/Card";
import CardHeader from "@/cards/CardHeader";

import Guide from "./Guide";
import GuideList from "./GuideList";

export default function PresetDCAGuideCard() {
  const [count, setCount] = useState(0);
  const [price, setPrice] = useState(0);
  const [leverage, setLeverage] = useState(0);
  const [multiple, setMultiple] = useState(0);
  const handleDataChange = (
    priceData: string,
    leverageData: number,
    multipleData: number,
    countData: number,
  ) => {
    if (priceData === "") {
      return;
    }
    setPrice(Number(priceData));
    setLeverage(leverageData);
    setMultiple(multipleData);
    setCount(countData);
  };
  return (
    <Card sx={{ maxWidth: 768 }}>
      <CardHeader id="dca-setting" title="DCA 회차별 매수 금액 가이드" />
      <CardContent className="flex h-full w-full flex-row gap-5">
        <Box className="flex h-full w-1/2">
          <Guide onDataChange={handleDataChange} />
        </Box>
        <Divider orientation="vertical" className="h-[320px]" />
        <Box className="flex h-full w-1/2">
          <GuideList price={price} leverage={leverage} multiple={multiple} count={count} />
        </Box>
      </CardContent>
    </Card>
  );
}
