import { CardContent } from "@mui/material";

import Card from "@/cards/Card";
import CardHeader from "@/cards/CardHeader";
import NotConnect from "@/components/NotConnect";

export default function NotConnectCard() {
  return (
    <Card sx={{ maxWidth: 768 }}>
      <CardHeader id="setting" title="프리셋 설정" />
      <CardContent sx={{ paddingTop: "0", height: "415px", overflow: "auto" }}>
        <NotConnect
          customMessage={`프리셋을 설정하여 더 큰 수익을 창출해보세요 \n 프리미엄 플랜으로 업그레이드 하면 설정할 수 있어요`}
          isConnected={false}
          hasButton={false}
        />
      </CardContent>
    </Card>
  );
}
