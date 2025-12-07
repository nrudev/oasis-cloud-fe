import { ButtonBase, Stack, Typography } from "@mui/material";

import Icon from "@/components/Icon/index";

interface NotificationBadgeProps {
  onClick?: () => void;
}
export default function NotificationBadge({ onClick }: NotificationBadgeProps) {
  return (
    <ButtonBase
      sx={{
        background: "linear-gradient(111.59deg, #223CE9 14.14%, #2BB7F5 123.41%)",
        boxShadow: "0px 4px 34px 0px #0F148B6B",
      }}
      className="rounded-full px-4 py-2.5"
      onClick={onClick}
    >
      <Stack direction="row" className="items-center gap-1">
        <Icon src="/icons/basic/notification.png" width={24} height={24} />
        <Typography fontWeight={700} fontSize="14px" lineHeight="16px" className="text-white">
          24
        </Typography>
      </Stack>
    </ButtonBase>
  );
}
