import React from "react";
import { Button } from "@mui/material";
import { useAtom } from "jotai";
import Selectbox from "@/components/basic/Selectbox";
import OasisbotInput from "@/components/input/OasisbotInput";
import { selectedPresetAtom } from "@/datas/preset";
import usePreset from "@/hooks/preset/usePreset";

function PresetSetting() {
  const { indicators, isIndicatorsLoading } = usePreset();
  const [selectedPreset, setSelectedPreset] = useAtom(selectedPresetAtom);

  const { updatePresetMutation } = usePreset();

  return (
    <div className="grow p-2.5 bg-white font-roboto font-semibold rounded-sm shadow-md">
      <div className="flex place-content-between">
        <div className="flex items-center">프리셋 이름</div>
        <OasisbotInput
          id="presetName"
          value={selectedPreset.presetName}
          setValue={value =>
            setSelectedPreset({ ...selectedPreset, presetName: value })
          } // 확인
        />
      </div>
      <div className="flex place-content-between mt-4">
        <div className="flex items-center">설정 보조지표</div>
        <Selectbox
          labelId="indicatorName"
          selectLabel=""
          itemList={indicators ?? []}
          state={selectedPreset.indicatorName}
          setState={value =>
            setSelectedPreset({ ...selectedPreset, indicatorName: value })
          }
        />
      </div>
      <div className="flex place-content-between mt-4">
        <div className="flex items-center">진입 포지션</div>
        <Selectbox
          labelId="position"
          selectLabel=""
          itemList={[
            { value: "short", itemLabel: "숏" },
            { value: "long", itemLabel: "롱" },
            { value: "entry", itemLabel: "진입" },
          ]}
          state={selectedPreset.position}
          setState={value =>
            setSelectedPreset({ ...selectedPreset, position: value })
          }
        />
      </div>
      <div className="flex place-content-between mt-4">
        <div className="flex items-center">익절율</div>
        <OasisbotInput
          id="preset"
          value={selectedPreset.profitCutRate}
          setValue={value =>
            setSelectedPreset({
              ...selectedPreset,
              profitCutRate: parseFloat(value),
            })
          }
        />
      </div>
      <div className="flex place-content-between mt-4">
        <div className="flex items-center">손절율</div>
        <OasisbotInput
          id="preset"
          value={selectedPreset.lossCutRate}
          setValue={value =>
            setSelectedPreset({
              ...selectedPreset,
              lossCutRate: parseFloat(value),
            })
          }
        />
      </div>
      <div className="flex place-content-between mt-4">
        <Button onClick={console.log}>세팅 변경</Button>
        <Button
          onClick={() => {
            if (!selectedPreset.id) return;

            updatePresetMutation.mutate({
              presetId: selectedPreset.id,
              body: { ...selectedPreset, presetData: "" },
            });
          }}
        >
          저장
        </Button>
      </div>
    </div>
  );
}

export default PresetSetting;
