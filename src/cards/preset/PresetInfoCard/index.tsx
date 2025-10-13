import { Stack } from "@mui/material";

import PresetDCAInfo from "./PresetDCAInfo";
import PresetTDInfo from "./PresetTDInfo";

interface Props {
  isConnected: boolean;
  setting: string;
}
export default function PresetInfoCard({ isConnected, setting }: Props) {
  return (
    <Stack className="h-full w-full">
      {setting === "TD" ? (
        <PresetTDInfo isConnected={isConnected} />
      ) : (
        <PresetDCAInfo isConnected={isConnected} />
      )}
    </Stack>
  );
}
