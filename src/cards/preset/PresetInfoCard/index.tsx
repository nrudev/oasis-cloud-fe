import { useState } from "react";

import { CardContent, Divider } from "@mui/material";
import { sendGAEvent, sendGTMEvent } from "@next/third-parties/google";
import { useAtom } from "jotai";

import Card from "@/cards/Card";
import CardButton from "@/cards/CardButton";
import CardFooter from "@/cards/CardFooter";
import CardHeader from "@/cards/CardHeader";
import PresetInfo from "@/cards/preset/PresetInfoCard/PresetInfo";
import UserInfo from "@/cards/preset/PresetInfoCard/UserInfo";
import NotConnect from "@/components/NotConnect";
import RoundSelect from "@/components/common/RoundSelect";
import { GA_CTA_EVENTS } from "@/constants/constants";
import {
  presetAtom,
  presetInit,
  presetMenuAtom,
  presetWeightAtom,
  presetWeightInit,
} from "@/datas/preset";
import { useCombinedPresets, usePresetMutation } from "@/hooks/query/usePreset";
import { useSubscribeQuery } from "@/hooks/query/useSubcribe";
import { isDefaultPreset, presetDataToPresetWeight } from "@/libs/preset";

interface Props {
  isConnected: boolean;
}
export default function PresetInfoCard({ isConnected }: Props) {
  const {
    subscribeQuery: { data: subscribeData },
  } = useSubscribeQuery();

  const { data } = useCombinedPresets();
  const { deletePresetMutation } = usePresetMutation();
  const [isCreate, setIsCreate] = useState(false);
  const [preset, setPreset] = useAtom(presetAtom);
  const [, setPresetMenu] = useAtom(presetMenuAtom);
  const [, setPresetWeight] = useAtom(presetWeightAtom);

  return (
    <Card>
      <CardContent>
        <UserInfo />
      </CardContent>
      <Divider className="my-8 border-0" />
      <CardHeader
        id="setting"
        title="프리셋"
        subtitle={preset ? preset.presetName : "프리셋을 선택해주세요."}
        action={
          !isCreate && (
            <RoundSelect
              label="프리셋선택"
              items={
                data?.map(({ presetName }) => ({
                  label: presetName,
                  value: presetName,
                })) ?? []
              }
              value={preset?.presetName ?? ""}
              onChange={e => {
                const newPreset = data?.find(p => p.presetName === e.target.value) ?? null;
                if (newPreset) {
                  setPreset(newPreset);
                  setPresetWeight(presetDataToPresetWeight(newPreset?.presetData));
                } else {
                  setPreset(null);
                  setPresetWeight(presetWeightInit);
                }
              }}
            />
          )
        }
      />
      <CardContent>
        {/* 1. 플랜 업그레이드 & API 연동 둘 다 없을 경우 or 플랜 업그레이드만 안 되어 있을 경우 */}
        {(!isConnected && !subscribeData?.productName.toLowerCase().includes("premium")) ||
        (isConnected && !subscribeData?.productName.toLowerCase().includes("premium")) ? (
          <NotConnect
            customMessage={`프리셋을 설정하여 더 큰 수익을 창출해보세요\n 프리미엄 플랜으로 업그레이드 하면 설정할 수 있어요`}
            isConnected={false}
            msgButton="플랜 업그레이드"
            link="/subscribe"
          />
        ) : !isConnected ? (
          // 2. API 연동만 안 되어 있을 경우
          <NotConnect
            customMessage={`프리셋을 설정하여 더 큰 수익을 창출해보세요\n 거래소 API를 연동하면 설정할 수 있어요`}
            isConnected={false}
            msgButton="거래소 API 연동"
            link="/api-connection"
          />
        ) : (
          // 3. 둘 다 되어 있을 경우
          <PresetInfo />
        )}
      </CardContent>
      {isConnected && subscribeData?.productName.toLowerCase().includes("premium") && (
        <CardFooter>
          <CardButton
            variant="contained"
            text="삭제"
            className={`${!isDefaultPreset(preset) ? "bg-sub-3" : ""} text-white`}
            onClick={() => {
              if (isDefaultPreset(preset)) return;
              if (!isDefaultPreset(preset) && preset) {
                deletePresetMutation.mutate(preset?.id);
                setPreset(null);
                setPresetMenu("preset");
                setPresetWeight(presetWeightInit);
              }
            }}
            disabled={isDefaultPreset(preset)}
          />
          <CardButton
            text="프리셋 추가"
            className="bg-neutral-700 text-white"
            onClick={() => {
              setIsCreate(true);
              setPreset(presetInit);
              setPresetMenu("preset");
              setPresetWeight(presetWeightInit);
              sendGAEvent("event", GA_CTA_EVENTS.presetAdd1);
              sendGTMEvent({ event: GA_CTA_EVENTS.presetAdd1 });
            }}
          />
        </CardFooter>
      )}
    </Card>
  );
}
