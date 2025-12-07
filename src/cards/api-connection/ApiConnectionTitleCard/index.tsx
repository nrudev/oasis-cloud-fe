import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Box, ButtonBase, Stack, Typography } from "@mui/material";

import Card from "@/cards/Card";
import CardHeader from "@/cards/CardHeader";
import bg from "@/cards/api-connection/ApiConnectionTitleCard/bg.png";
import Icon from "@/components/Icon";
import Logo from "@/components/Logo";

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

export default function ApiConnectionTitleCard() {
  return (
    <Card sx={{ backgroundImage: `url(${bg.src})`, backgroundSize: "cover" }}>
      <Stack className="w-full items-center md:px-32 xl:px-64">
        <Stack direction="row" className="w-full items-center justify-between">
          <CardHeader title="API 연결" id="bar-graph" isDark />
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
        <Typography variant="h4" className="mt-6 text-white">
          연결할 거래소를 선택해 주세요.
        </Typography>
        <Typography variant="300R" className="mt-2 text-white">
          아직 2개 거래소만 연결이 가능합니다.
        </Typography>
        <Typography variant="300R" className="text-white">
          추가로 원하시는 거래소가 있으시면 요청해 주세요.
        </Typography>
        <ButtonBase
          className="mt-6 flex gap-2 rounded-full border border-solid border-white px-3 py-1.5"
          onClick={() => {
            window.open("https://open.kakao.com/me/Oasisbot");
          }}
        >
          <Typography variant="200B" className="text-white">
            거래소 지원 요청
          </Typography>
          <KeyboardArrowRightIcon fontSize="small" className="text-white" />
        </ButtonBase>
      </Stack>
    </Card>
  );
}
