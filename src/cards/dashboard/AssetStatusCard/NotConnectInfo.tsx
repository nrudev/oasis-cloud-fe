import { useRouter } from "next/router";

import { ButtonBase, Stack, Typography } from "@mui/material";
import { useAtom } from "jotai";

import DisplayPL from "@/cards/dashboard/AssetStatusCard/DisplayPL";
import authAtom from "@/datas/auth";

export default function NotConnectInfo() {
  const [user] = useAtom(authAtom);
  const { push } = useRouter();
  const userName = user.name;

  return (
    <Stack className="h-full w-full justify-between">
      <Stack direction="column" className="gap-1">
        <Typography variant="400M" className="text-neutral-100">
          Hi! {userName}님
        </Typography>
        <Typography variant="200R" className="leading-[160%] tracking-tighter text-white">
          아직 거래소가 연동되지 않았어요. 1분만에 연동을 마치고 자산 현황과 수익률을 바로
          확인해보세요
        </Typography>
      </Stack>
      <Stack>
        <ButtonBase
          className="flex rounded-full border-neutral-400 py-2"
          sx={{
            border: "1px solid",
          }}
          onClick={() => push("/api-connection")}
        >
          <Typography variant="400M" className="text-white">
            거래소 연동하기
          </Typography>
        </ButtonBase>
      </Stack>
      <Stack direction="row" className="w-full">
        <Stack direction="column" className="w-1/2 gap-1">
          <Typography variant="300R" className="text-neutral-200">
            총현황
          </Typography>
          <DisplayPL pl={0} />
        </Stack>
        <Stack direction="column" className="w-1/2 gap-1">
          <Typography variant="300R" className="text-neutral-200">
            승률
          </Typography>
          <DisplayPL pl={0} />
        </Stack>
      </Stack>
    </Stack>
  );
}
