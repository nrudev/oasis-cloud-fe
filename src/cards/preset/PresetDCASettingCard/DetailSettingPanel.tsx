import { useState } from "react";

import { Stack } from "@mui/material";

import FormSelect from "@/components/form/FormSelect";
import FormTextField from "@/components/form/FormTextField";

import AdditionFormTextField from "./AdditionFormTextField";

interface Props {
  value: number;
  index: number;
}

const presetList = [
  { label: "a", value: "a" },
  { label: "b", value: "b" },
  { label: "c", value: "c" },
];
export default function DetailSettingPanel({ value, index }: Props) {
  const [selectedPreset, setSelectedPreset] = useState("");
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
    >
      {value === index && (
        <Stack className="mt-8 w-full items-center gap-4">
          <FormTextField id="name" label="프리셋 이름" value="" readOnly />

          <FormSelect
            id="indicator"
            label="설정 보조 지표"
            items={presetList}
            value={selectedPreset}
            setValue={setSelectedPreset}
            variant="standard"
          />
          <FormSelect
            id="profitRate"
            label="진입 포지션"
            items={presetList}
            value={selectedPreset}
            setValue={setSelectedPreset}
            variant="standard"
          />
          <FormSelect
            id="lossRate"
            label="레버리지"
            items={presetList}
            value={selectedPreset}
            setValue={setSelectedPreset}
            variant="standard"
          />
          <FormSelect
            id="lossRate"
            label="마진 타입"
            items={presetList}
            value={selectedPreset}
            setValue={setSelectedPreset}
            variant="standard"
          />
          <FormSelect
            id="lossRate"
            label="총 진입 잔고(전체의)"
            items={presetList}
            value={selectedPreset}
            setValue={setSelectedPreset}
            variant="standard"
          />
          <FormSelect
            id="lossRate"
            label="추가 진입 배율"
            items={presetList}
            value={selectedPreset}
            setValue={setSelectedPreset}
            variant="standard"
          />
          <AdditionFormTextField id="lossRate" label="추가 진입 간격" value="" readOnly />
          <FormSelect
            id="lossRate"
            label="총 진입 횟수"
            items={presetList}
            value={selectedPreset}
            setValue={setSelectedPreset}
            variant="standard"
          />
          <FormTextField id="lossRate" label="익절율" value="" readOnly />
          <FormTextField id="lossRate" label="손절율" value="" readOnly />
        </Stack>
      )}
    </div>
  );
}
