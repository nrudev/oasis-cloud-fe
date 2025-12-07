import { Stack } from "@mui/material";
import { useAtom } from "jotai";

import FormSelect from "@/components/form/FormSelect";
import FormTextField from "@/components/form/FormTextField";
import exchangeAtom from "@/datas/exchange";
import { presetAtom } from "@/datas/preset";
import { useIndicatorQuery } from "@/hooks/query/usePreset";

export default function PresetSetting() {
  const [preset, setPreset] = useAtom(presetAtom);
  const {
    indicatorQuery: { data: indicatorData },
  } = useIndicatorQuery();

  const [exchange] = useAtom(exchangeAtom);
  return (
    <Stack className="preset-container w-full items-center gap-1">
      <FormTextField
        id="presetName"
        className="preset-name"
        label="프리셋이름"
        value={preset?.presetName}
        setValue={v => {
          preset && setPreset({ ...preset, presetName: v as string });
        }}
      />
      <FormSelect
        id="indicator"
        className="indicator"
        label="설정 보조지표"
        items={
          indicatorData?.map(({ indicatorName }) => ({
            label: indicatorName,
            value: indicatorName,
          })) ?? []
        }
        value={preset?.indicatorName}
        setValue={v => {
          preset && setPreset({ ...preset, indicatorName: v as string });
        }}
      />
      {exchange === "bithumb" ? (
        <FormSelect
          id="position"
          className="entry-position"
          label="진입 포지션"
          value="not-supported"
          items={[{ label: "bithumb에서는 지원하지 않습니다.", value: "not-supported" }]}
          disabled
        />
      ) : (
        <FormSelect
          id="position"
          className="entry-position"
          label="진입 포지션"
          items={[
            { label: "long", value: "long" },
            { label: "short", value: "short" },
          ]}
          value={preset?.position}
          setValue={v => {
            preset && setPreset({ ...preset, position: v as string });
          }}
        />
      )}
      <FormTextField
        id="profitRate"
        className="profit-target"
        label="익절률 (%)"
        value={preset?.profitCutRate}
        setValue={v => {
          preset && setPreset({ ...preset, profitCutRate: v as number });
        }}
      />
      <FormTextField
        id="lossRate"
        className="loss-limit"
        label="손절률 (%)"
        value={preset?.lossCutRate}
        setValue={v => {
          preset && setPreset({ ...preset, lossCutRate: v as number });
        }}
      />
    </Stack>
  );
}
