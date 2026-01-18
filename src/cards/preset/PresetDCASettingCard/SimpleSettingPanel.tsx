import { useState } from "react";

import { Stack } from "@mui/material";
import { useAtom } from "jotai";

import FormSelect from "@/components/form/FormSelect";
import FormTextField from "@/components/form/FormTextField";
import exchangeAtom from "@/datas/exchange";
import { presetDCAAtom } from "@/datas/preset";

interface Props {
  value: number;
  index: number;
}

const postionList = [
  { label: "Long", value: "Long" },
  { label: "Short", value: "Short" },
];

const leverageList = [
  { label: "8", value: "8" },
  { label: "10", value: "10" },
  { label: "12", value: "12" },
  { label: "15", value: "15" },
  { label: "20", value: "20" },
];

const noLeverage = [
  { label: "업비트 거래소는 레버리지 설정 불가", value: "업비트 거래소는 레버리지 설정 불가" },
];

const marginTypeList = [
  { label: "Cross(교차)", value: "Cross(교차)" },
  { label: "Isolated(격리)", value: "Isolated(격리)" },
];

const totalBalanceList = [
  { label: "30%", value: "30%" },
  { label: "40%", value: "40%" },
  { label: "50%", value: "50%" },
];

const multipleList = [
  { label: "1.2배수", value: "1.2배수" },
  { label: "1.5배수", value: "1.5배수" },
  { label: "2배수", value: "2배수" },
];

const gapList = [
  { label: "-0.5%", value: "-0.5%" },
  { label: "-1.5%", value: "-1.5%" },
  { label: "-2%", value: "-2%" },
  { label: "-3%", value: "-3%" },
  { label: "-4%", value: "-4%" },
];

const totalCountList = [
  { label: "6회", value: "6회" },
  { label: "7회", value: "7회" },
  { label: "8회", value: "8회" },
  { label: "9회", value: "9회" },
  { label: "10회", value: "10회" },
];
export default function SimpleSettingPanel({ value, index }: Props) {
  const [exchange] = useAtom(exchangeAtom);
  const [selectedPostion, setSelectedPosition] = useState(postionList[0].value);
  const [selectedLeverage, setSelectedLeverage] = useState(
    exchange === "upbit" ? noLeverage[0].value : leverageList[0].value,
  );
  const [selectedMarginType, setSelectedMarginType] = useState(marginTypeList[0].value);
  const [selectedTotalBalance, setSelectedTotalBalance] = useState(totalBalanceList[0].value);
  const [selectedMutiple, setSelectedMultiple] = useState(multipleList[0].value);
  const [selectedGap, setSelectedGap] = useState(gapList[0].value);
  const [selectedTotalCount, setSelectedTotalCount] = useState(totalCountList[0].value);

  const [preset, setPreset] = useAtom(presetDCAAtom);

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      className="h-[650px] w-full overflow-y-auto pb-6"
    >
      {value === index && (
        <Stack className="mt-8 w-full items-center gap-4 pr-3">
          <FormTextField
            id="name"
            label="프리셋 이름"
            value={preset?.presetName}
            setValue={v => {
              preset && setPreset({ ...preset, presetName: v as string });
            }}
            placeholder="프리셋 이름 입력"
          />

          <FormTextField id="indicator" label="설정 보조 지표" value="DCA 마틴" readOnly />
          <FormSelect
            id="position"
            label="진입 포지션"
            items={postionList}
            value={selectedPostion}
            setValue={setSelectedPosition}
            variant="standard"
          />
          <FormSelect
            id="leverage"
            label="레버리지"
            items={exchange === "upbit" ? noLeverage : leverageList}
            value={selectedLeverage}
            setValue={setSelectedLeverage}
            variant="standard"
            disabled={exchange === "upbit"}
          />
          <FormSelect
            id="marginType"
            label="마진 타입"
            items={marginTypeList}
            value={selectedMarginType}
            setValue={setSelectedMarginType}
            variant="standard"
          />
          <FormSelect
            id="totalBalance"
            label="총 진입 잔고(전체의)"
            items={totalBalanceList}
            value={selectedTotalBalance}
            setValue={setSelectedTotalBalance}
            variant="standard"
          />
          <FormSelect
            id="multiple"
            label="추가 진입 배율"
            items={multipleList}
            value={selectedMutiple}
            setValue={setSelectedMultiple}
            variant="standard"
          />
          <FormSelect
            id="gap"
            label="추가 진입 간격"
            items={gapList}
            value={selectedGap}
            setValue={setSelectedGap}
            variant="standard"
          />
          <FormSelect
            id="totalCount"
            label="총 진입 횟수"
            items={totalCountList}
            value={selectedTotalCount}
            setValue={setSelectedTotalCount}
            variant="standard"
          />
          <FormTextField
            id="profitRate"
            label="익절률 (%)"
            type="number"
            value={preset?.profitCutRate}
            setValue={v => {
              preset && setPreset({ ...preset, profitCutRate: v as number });
            }}
            placeholder="익절율 입력"
          />
          <FormTextField
            id="lossRate"
            label="손절률 (%)"
            type="number"
            value={preset?.lossCutRate}
            setValue={v => {
              if (!preset) return;
              const str = String(v).trim();
              if (str === "" || str === "-") {
                setPreset({ ...preset, lossCutRate: "" as unknown as number });
                return;
              }

              const negativeValue = -Math.abs(Number(v));
              setPreset({ ...preset, lossCutRate: negativeValue });
            }}
            placeholder="손절율 입력"
          />
        </Stack>
      )}
    </div>
  );
}
