import { Stack } from "@mui/material";

import ConnectOasisBotRunCard from "./ConnectOasisBotRunCard";
import NotConnectCard from "./NotConnectCard";

interface Props {
  isConnected: boolean;
}

function OasisBotRunCard({ isConnected }: Props) {
  return (
    <Stack className="h-full w-full">
      {isConnected === true ? <ConnectOasisBotRunCard /> : <NotConnectCard />}
    </Stack>
  );
}

export default OasisBotRunCard;
