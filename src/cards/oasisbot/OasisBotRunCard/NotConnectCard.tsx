import { CardContent } from "@mui/material";
import { useAtom } from "jotai";

import Card from "@/cards/Card";
import CardHeader from "@/cards/CardHeader";
import NotConnect from "@/components/NotConnect";
import ExchangeChip from "@/components/chip/ExchangeChip";
import exchangeAtom from "@/datas/exchange";

export default function NotConnectCard() {
  const [exchange] = useAtom(exchangeAtom);

  return (
    <Card>
      <CardHeader
        id="bot-start"
        title="오아시스 BOT 실행"
        subtitle={`주문가능 금액\n${exchange === "bithumb" ? "￦" : "$"} 0`}
        action={<ExchangeChip />}
      />
      <CardContent sx={{ paddingTop: "0", height: "415px", overflow: "auto" }}>
        <NotConnect
          customMessage={`아직 거래소가 연동되지 않았어요\n 거래소를 연동 후 원하는 \n Bot을 설정해 거래소별 자동매매를 시작해 보세요`}
          isConnected={false}
        />
      </CardContent>
    </Card>
  );
}
