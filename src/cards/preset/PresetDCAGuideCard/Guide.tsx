import { useState } from "react";

import { Stack } from "@mui/material";

import CardButton from "@/cards/CardButton";
import FormSelect from "@/components/form/FormSelect";
import FormTextField from "@/components/form/FormTextField";

interface Props {
  onDataChange: (price: string, leverage: number, multiple: number, count: number) => void;
}
const leverageList = [
  { label: "8", value: 8 },
  { label: "10", value: 10 },
  { label: "12", value: 12 },
  { label: "15", value: 15 },
  { label: "20", value: 20 },
];

const multipleList = [
  { label: "1.2배수", value: 1.2 },
  { label: "1.5배수", value: 1.5 },
  { label: "2배수", value: 2 },
];

const totalCountList = [
  { label: "6회", value: 6 },
  { label: "7회", value: 7 },
  { label: "8회", value: 8 },
  { label: "9회", value: 9 },
  { label: "10회", value: 10 },
];
export default function Guide({ onDataChange }: Props) {
  const [selectedLeverage, setSelectedLeverage] = useState(leverageList[0].value);
  const [selectedMutiple, setSelectedMultiple] = useState(multipleList[0].value);
  const [selectedTotalCount, setSelectedTotalCount] = useState(totalCountList[0].value);
  const [price, setPrice] = useState("");
  return (
    <Stack className="h-[300px] w-full items-center gap-2">
      <FormTextField
        id="price"
        label="최초 투자 금액"
        value={price}
        setValue={setPrice}
        placeholder="최초 투자 금액 입력"
      />

      <FormSelect
        id="leverage"
        label="레버리지"
        items={leverageList}
        value={selectedLeverage}
        setValue={setSelectedLeverage}
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
        id="totalCount"
        label="총 진입 횟수"
        items={totalCountList}
        value={selectedTotalCount}
        setValue={setSelectedTotalCount}
        variant="standard"
      />

      <CardButton
        text="회차 별 금액 계산"
        className="execute-button mt-9 bg-brand text-white"
        onClick={() => onDataChange(price, selectedLeverage, selectedMutiple, selectedTotalCount)}
      />
    </Stack>
  );
}
