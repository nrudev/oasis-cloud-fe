import Image from "next/image";

import { Box, Button, Stack, Typography } from "@mui/material";

import Icon from "@/components/Icon";

export default function ServiceCenter({ iconOnly }: { iconOnly?: boolean }) {
  return (
    <Box
      className={`relative shrink-0 overflow-hidden ${iconOnly ? "h-[60px] w-[60px] rounded-full" : "h-[170px] w-full rounded-xl"}`}
    >
      <Image
        src="/nav-cover.png"
        alt="cover"
        className="absolute z-0"
        fill
        style={{
          objectFit: "cover",
        }}
      />
      <Stack
        className={`absolute z-[10] h-full w-full ${iconOnly ? "items-center justify-center" : "justify-between p-4"}`}
      >
        <Stack className="h-[35px] w-[35px] items-center justify-center rounded-xl bg-white">
          <Icon src="/icons/control/info.png" width={18} height={18} />
        </Stack>
        {!iconOnly && (
          <Stack className="gap-3 overflow-x-hidden">
            <Stack className="gap-1">
              <Typography variant="200B" className="text-white">
                도움이 필요하신가요?
              </Typography>
              <Typography variant="100R" className="text-white">
                이용에 어려운 점이 있으시다면,
              </Typography>
            </Stack>
            <Button
              variant="contained"
              className="rounded-lg py-2"
              onClick={() => {
                window.open("https://open.kakao.com/me/Oasisbot");
              }}
            >
              <Typography variant="200R" className="text-white">
                고객센터
              </Typography>
            </Button>
          </Stack>
        )}
      </Stack>
    </Box>
  );
}
