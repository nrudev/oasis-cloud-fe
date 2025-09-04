import { Box, Divider, Stack, Typography } from "@mui/material";

import Logo from "@/components/Logo";
import FooterBreadcrumbs from "@/layouts/Footer/FooterBreadcrumbs";

interface FooterProps {
  color: LayoutColorType;
}

const style = {
  white: "text-white",
  black: "text-black",
};

export default function Footer({ color }: FooterProps) {
  return (
    <Box className={`w-full ${style[color]}`}>
      <Divider className="bg-white" />
      <Stack direction="row" className="mx-4 my-4 items-center justify-between md:mx-32">
        <Stack direction="row" className="items-start gap-8">
          <Logo color={color} size="S" />
          <Stack className="my-0.5 gap-2">
            <FooterBreadcrumbs color={color} />
            <Typography variant="200R">Copyright@2024 OASIS. All Rights reserved.</Typography>
          </Stack>
        </Stack>
        <Stack direction="column" className="gap-1">
          <Typography variant="200R">
            상호명 : 옵티머스 오아시스(주) | 대표자 이주원 | 사업자번호 : 726-81-03772
          </Typography>
          <Typography variant="200R">주소 : 서울 구로구 디지털로31길 12 2F 42</Typography>

          {/* {(["facebook", "linkedin", "naver", "kakao"] as SocialType[]).map(
            social => (
              <SocialIcon key={social} social={social} color={color} />
            ),
          )} */}
        </Stack>
        <Stack direction="column" className="gap-1">
          <Typography variant="200B">고객센터</Typography>
          <Typography variant="200R">영업시간 : 상시</Typography>
          <Typography variant="200R">이메일 : oasis_bot@oasisbot24.com</Typography>
          <Typography variant="200R">전화번호 :010-5802-4827</Typography>
        </Stack>
      </Stack>
    </Box>
  );
}
