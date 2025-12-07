import Image from "next/image";

import { Stack, Typography } from "@mui/material";

import ProfitChip from "@/components/chip/ProfitChip";

interface Props {
  coinName: string;
  presetName: string;
  totalProfit: number;
  totalProfitRate: number;
  exchange: ExchangeType;
}

export default function PanelDescription({
  coinName,
  presetName,
  totalProfit,
  totalProfitRate,
  exchange,
}: Props) {
  const changeIcon = (name: string) => {
    switch (name) {
      case "upbit":
        return "/icons/exchange/iconUPBIT.png";
      case "okx":
        return "/icons/exchange/iconOKX.png";
      case "bithumb":
        return "/icons/exchange/iconBITHUMB.png";
      default:
        return "";
    }
  };
  return (
    <Stack direction="row" className="w-full items-center justify-between">
      <Stack direction="row" spacing={1}>
        {/* <DashboardIcon id="bar-graph" /> */}
        <Image
          src={changeIcon(exchange)}
          alt="btc"
          width={exchange == "bithumb" ? 35 : 45}
          height={45}
        />

        <Stack className="gap-2">
          <Typography variant="300B" className="text-[#FFFFFF]">
            {coinName}
          </Typography>
          <Typography variant="200R" className="text-[#FFFFFF]">
            {presetName}
          </Typography>
        </Stack>
      </Stack>
      <Stack className="items-end gap-1">
        <Typography
          variant="200R"
          fontFamily="SF Pro Display"
          fontWeight={600}
          fontSize={18}
          lineHeight="22px"
          className="text-white"
        >
          {exchange === "bithumb" ? "₩" : "$"} {totalProfit}
        </Typography>
        <ProfitChip rate={totalProfitRate} />
      </Stack>
    </Stack>
  );
}
