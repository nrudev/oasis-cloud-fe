import React from "react";
import { Stack } from "@mui/material";
import SectionHeader from "@/components/common/SectionHeader";
import SalesRatioSetting from "@/components/preset/SalesRatioSetting";
import SalesRatioTip from "@/components/preset/SalesRatioTip";

function SalesRatio() {
  return (
    <Stack direction="row" className="gap-4 mt-10">
      <Stack direction="column" className="grow basis-3/4 gap-4">
        <SectionHeader>프리셋 설정</SectionHeader>
        <SalesRatioSetting />
      </Stack>

      <Stack direction="column" className="grow basis-1/4 gap-4">
        <SectionHeader>(TD Sequential) 보조지표 설명</SectionHeader>
        <SalesRatioTip />
      </Stack>
    </Stack>
  );
}

export default SalesRatio;
