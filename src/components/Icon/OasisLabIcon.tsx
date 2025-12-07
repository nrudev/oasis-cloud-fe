import { Stack } from "@mui/material";

import Icon from "@/components/Icon/index";

interface OasisLabIconProps {
  id: OasisLabIdType;
}

const iconSrc = {
  set: "/icons/oasislab/setting-price.png",
  current: "/icons/oasislab/current-price.png",
  max: "/icons/oasislab/max-price.png",
};

export default function OasisLabIcon({ id }: OasisLabIconProps) {
  return (
    <Stack className="h-[40px] w-[40px] items-center justify-center rounded-xl bg-brand">
      <Icon src={iconSrc[id]} width={32} height={32} />
    </Stack>
  );
}
