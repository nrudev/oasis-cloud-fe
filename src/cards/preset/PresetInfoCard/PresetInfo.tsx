import { useEffect } from "react";

import { Stack } from "@mui/material";
import { useAtom } from "jotai";
import { RESET } from "jotai/utils";

import FormTextField from "@/components/form/FormTextField";
import exchangeAtom from "@/datas/exchange";
import { presetAtom } from "@/datas/preset";

export default function PresetInfo() {
  const [preset, setPreset] = useAtom(presetAtom);
  const [exchange] = useAtom(exchangeAtom);

  useEffect(() => {
    return () => setPreset(RESET);
  }, []);

  return (
    <Stack className="w-full items-center gap-4">
      <FormTextField id="name" label="설정 보조지표" value={preset?.indicatorName ?? ""} readOnly />
      {exchange === "bithumb" ? (
        <FormTextField
          id="indicator"
          label="진입 포지션"
          disabled
          value="bithumb에서는 지원하지 않습니다."
        />
      ) : (
        <FormTextField id="indicator" label="진입 포지션" value={preset?.position ?? ""} readOnly />
      )}
      <FormTextField id="profitRate" label="익절률" value={preset?.profitCutRate ?? ""} readOnly />
      <FormTextField id="lossRate" label="손절률" value={preset?.lossCutRate ?? ""} readOnly />
    </Stack>
  );
}
