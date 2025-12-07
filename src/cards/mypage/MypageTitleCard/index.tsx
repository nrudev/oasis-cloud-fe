import { Avatar, Box, Stack, Typography } from "@mui/material";
import { useAtom } from "jotai";

import Card from "@/cards/Card";
import CardHeader from "@/cards/CardHeader";
import bg from "@/cards/mypage/MypageTitleCard/bg.png";
import Icon from "@/components/Icon";
import Logo from "@/components/Logo";
import authAtom from "@/datas/auth";

function Tag({ title, id }: { title: string; id: string }) {
  return (
    <Stack direction="row" className="gap-1">
      <Icon src={`/apiconnection/${id}.png`} width={16} height={16} />
      <Typography variant="100B" className="text-white">
        {title}
      </Typography>
    </Stack>
  );
}

export default function MypageTitleCard() {
  const [auth] = useAtom(authAtom);
  return (
    <Card sx={{ backgroundImage: `url(${bg.src})`, backgroundSize: "cover" }}>
      <Stack className="w-full items-center md:px-32 xl:px-64">
        <Stack direction="row" className="w-full items-center justify-between">
          <CardHeader title="마이페이지" id="bar-graph" isDark />
          <Stack direction="row" className="hidden gap-6 lg:flex">
            <Tag title="The Next" id="1" />
            <Tag title="Wave" id="2" />
            <Tag title="of" id="3" />
            <Tag title="Innovation" id="4" />
          </Stack>
          <Box className="w-[174px] p-4">
            <Box className="ms-auto w-fit rounded-full bg-white px-4 py-1">
              <Logo color="black" size="S" />
            </Box>
          </Box>
        </Stack>
        <Avatar src={auth.picture} className="h-[108px] w-[108px]" />
        <Typography variant="200B" className="mt-4 text-white">
          {auth.name}
        </Typography>
      </Stack>
    </Card>
  );
}
