import { Stack } from "@mui/material";
import Icon from "@/screens/Icon/index";

interface DashboardIconProps {
  id: DashboardIdType;
}

const iconSrc = {
  "bar-graph": "/icons/dashboard/bar-graph.png",
  "bot-start": "/icons/dashboard/bot-start.png",
  history: "/icons/dashboard/history.png",
  "pie-chart": "/icons/dashboard/pie-chart.png",
  ranking: "/icons/dashboard/ranking.png",
  "rise-arrow": "/icons/dashboard/rise-arrow.png",
  setting: "/icons/dashboard/setting.png",
  wallet: "/icons/dashboard/wallet.png",
};

export default function DashboardIcon({ id }: DashboardIconProps) {
  return (
    <Stack className="justify-center items-center rounded-xl bg-neutral-200 w-[44px] h-[44px]">
      <Icon src={iconSrc[id]} size={30} />
    </Stack>
  );
}
