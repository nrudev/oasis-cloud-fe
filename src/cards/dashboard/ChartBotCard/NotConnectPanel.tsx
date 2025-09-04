import { CardHeader as MuiCardHeader, Stack, Typography } from "@mui/material";

import DashboardIcon from "@/components/Icon/DashboardIcon";

export default function NotConnectPanel() {
  return (
    <MuiCardHeader
      sx={{
        "& .MuiCardHeader-action": {
          margin: "auto 0",
        },
      }}
      avatar={<DashboardIcon id="bar-graph" />}
      title={
        <Stack className="gap-1">
          <Typography variant="300B" className="text-font-1">
            아직 거래소가 연결되지 않았어요.
          </Typography>
          <Typography
            sx={{
              fontFamily: "Pretendard",
              fontSize: 14,
              fontWeight: 400,
              lineHeight: "160%",
              fontStyle: "Regular",
            }}
          >
            여러 거래소의 자산을 한눈에 확인하고 더 효율적으로 관리해 보세요
          </Typography>
        </Stack>
      }
    />
  );
}
