import { CardContent, Divider, Stack } from "@mui/material";
import { useAtom } from "jotai";

import Card from "@/cards/Card";
import CardHeader from "@/cards/CardHeader";
import UserInfo from "@/cards/preset/PresetInfoCard/UserInfo";
import NotConnect from "@/components/NotConnect";
import FormTextField from "@/components/form/FormTextField";
import { presetDCAAtom } from "@/datas/preset";
import { useSubscribeQuery } from "@/hooks/query/useSubcribe";

interface Props {
  isConnected: boolean;
}
export default function PresetDCAInfo({ isConnected }: Props) {
  const {
    subscribeQuery: { data: subscribeData },
  } = useSubscribeQuery();
  const [preset] = useAtom(presetDCAAtom);

  return (
    <Card>
      <CardContent>
        <UserInfo />
      </CardContent>
      <Divider className="my-8 border-0" />
      <CardHeader id="setting" title="프리셋" subtitle={preset?.presetName} />
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
          <Stack className="w-full items-center gap-4">
            <FormTextField
              id="name"
              label="프리셋 설정"
              value={preset?.dcaSetting === 0 ? "간편설정" : "세부설정"}
              readOnly
            />
            <FormTextField id="indicator" label="설정 보조지표" value="DCA 마틴" readOnly />
            <FormTextField id="profitRate" label="익절률" value={preset?.profitCutRate} readOnly />
            <FormTextField id="lossRate" label="손절률" value={preset?.lossCutRate} readOnly />
          </Stack>
        )}
      </CardContent>
    </Card>
  );
}
