import React from "react";
import { Button, Stack } from "@mui/material";
import SectionHeader from "@/components/common/SectionHeader";
import IndicatorExplanation from "@/components/preset/IndicatorExplanation";
import PresetSetting from "@/components/preset/PresetSetting";
import PresetTable from "@/components/preset/PresetTable";
import usePreset from "@/hooks/preset/usePreset";

function MainPreset() {
  const { addPresetMutation } = usePreset();

  return (
    <>
      <Stack direction="column" className="gap-4 mt-10">
        <SectionHeader className="flex justify-between items-center">
          프리셋
          <Button
            variant="contained"
            size="small"
            className="mx-3 bg-mellowYellow text-black"
            onClick={() => addPresetMutation.mutate()}
          >
            프리셋 추가
          </Button>
        </SectionHeader>
        <PresetTable />
      </Stack>
      <Stack direction="row" className="gap-4 mt-10">
        <Stack direction="column" className="grow basis-1/2 gap-4">
          <SectionHeader>프리셋 설정</SectionHeader>
          <PresetSetting />
        </Stack>

        <Stack direction="column" className="grow basis-1/2 gap-4">
          <SectionHeader>(TD Sequential) 보조지표 설명</SectionHeader>
          <IndicatorExplanation />
        </Stack>
      </Stack>
      <Stack direction="row" className="gap-4 mt-2">
        <Stack direction="column" className="grow basis-1/2 gap-4" />
        <Stack direction="column" className="grow basis-1/2 gap-4">
          <div className="grow h-10 py-2 px-4 bg-darkBlue text-white font-roboto font-semibold rounded-sm">
            <div>TD Sequential 보조지표는 대표적인 역추세 보조지표로서</div>
            <div>카운팅이 늘어남에 따라 추세 전환의 확률이 높아집니다.</div>
          </div>
        </Stack>
      </Stack>
    </>
  );
}

export default MainPreset;
