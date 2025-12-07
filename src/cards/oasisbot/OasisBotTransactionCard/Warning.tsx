import { Stack, Typography } from "@mui/material";

import Icon from "@/components/Icon/index";

export default function Warning() {
  return (
    <Stack>
      <Stack
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Icon src="/icons/oasisbot/warning.png" width={150} height={150} />
      </Stack>
      <Stack
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h6" className="text-[#575757]">
          거래소를 선택해 주세요
        </Typography>
        <Typography variant="300R" className="text-[#575757]">
          선택된 거래소가 없습니다.
        </Typography>
        <Stack direction="row">
          <Typography variant="300R" className="text-[#223CE9]">
            오아시스BOT 실행
          </Typography>
          <Typography variant="300R" className="text-[#575757]">
            에서
          </Typography>
        </Stack>
        <Typography variant="300R" className="text-[#575757]">
          거래소를 선택해 주세요
        </Typography>
      </Stack>
    </Stack>
  );
}
