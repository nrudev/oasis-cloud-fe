import { Box, Stack, Typography } from "@mui/material";

import Icon from "@/components/Icon";

export default function Description({
  title,
  label,
  content,
}: {
  title: string;
  label: React.ReactNode;
  content: string;
}) {
  return (
    <Stack className="ml-5 mt-5 h-[110px] justify-between gap-2 rounded-2xl bg-neutral-200 p-6">
      <Stack className="items-center justify-between" direction="row">
        <Stack className="shrink-0 gap-2" direction="row">
          <Icon src="/icons/control/info.png" alt="info" width={16} height={16} />
          <Typography variant="300M" className="text-font-1">
            {title}
          </Typography>
        </Stack>
        <Stack className="shrink-0 gap-2" direction="row">
          {label}
        </Stack>
      </Stack>
      <Box className="h-full">
        <Typography
          className="text-font-2"
          sx={{
            lineHeight: "18px",
            fontSize: "14px",
            fontFamily: "Inter",
            fontWeight: 700,
            letterSpacing: "-2%",
            textAlign: "justify",
            whiteSpace: "pre-line",
          }}
        >
          {content}
        </Typography>
      </Box>
    </Stack>
  );
}
