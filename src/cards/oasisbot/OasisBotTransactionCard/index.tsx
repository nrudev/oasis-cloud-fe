import Card from "@/cards/Card";
import CardHeader from "@/cards/CardHeader";
import BotTransaction from "@/cards/oasisbot/OasisBotTransactionCard/BotTransaction";

interface Props {
  isConnected: boolean;
}
function OasisBotTransactionCard({ isConnected }: Props) {
  return (
    <Card>
      <CardHeader id="history" title="오아시스 Bot 실시간 거래내역" />

      {/* <Warning /> */}
      <BotTransaction isConnected={isConnected} />
    </Card>
  );
}

export default OasisBotTransactionCard;
