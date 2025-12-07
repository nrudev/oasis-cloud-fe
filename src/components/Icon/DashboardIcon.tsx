import { Stack } from "@mui/material";

import Icon from "@/components/Icon/index";

interface DashboardIconProps {
  id: DashboardIdType;
}

const iconSrc = {
  "bar-graph": "/icons/dashboard/bar-graph.png",
  "bot-start": "/icons/dashboard/bot-start.png",
  lab: "/icons/dashboard/lab.png",
  "lab-on": "/icons/dashboard/lab-on.png",
  "lab-result": "/icons/dashboard/lab-result.png",
  history: "/icons/dashboard/history.png",
  "pie-chart": "/icons/dashboard/pie-chart.png",
  ranking: "/icons/dashboard/ranking.png",
  "rise-arrow": "/icons/dashboard/rise-arrow.png",
  setting: "/icons/dashboard/setting.png",
  transaction: "/icons/dashboard/transaction.png",
  wallet: "/icons/dashboard/wallet.png",
  counting: "/icons/dashboard/counting.png",
  total: "/icons/dashboard/total.png",
  "bot-transaction": "/icons/dashboard/bot-transaction.png",
  "profit-rate": "/icons/dashboard/profit-rate.png",
  "winning-rate": "/icons/dashboard/winning-rate.png",
  "copied-presets": "/icons/dashboard/copied-presets.png",
  "dca-setting": "/icons/dashboard/dca.png",
};

export default function DashboardIcon({ id }: DashboardIconProps) {
  return (
    <Stack className="h-[44px] w-[44px] shrink-0 items-center justify-center rounded-xl bg-neutral-200">
      <Icon src={iconSrc[id]} width={30} height={30} />
    </Stack>
  );
}
