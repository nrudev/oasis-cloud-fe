import ConnectOasisBotRunCard from "./ConnectOasisBotRunCard";
import NotConnectCard from "./NotConnectCard";

interface Props {
  isConnected: boolean;
}

function OasisBotRunCard({ isConnected }: Props) {
  return <div>{isConnected === true ? <ConnectOasisBotRunCard /> : <NotConnectCard />}</div>;
}

export default OasisBotRunCard;
