import { Box, Stack } from "@mui/material";

import MypageCard from "@/cards/mypage/MypageCard";
import MypageTitleCard from "@/cards/mypage/MypageTitleCard";
import Layout from "@/layouts/Layout";

function MyPage() {
  return (
    <Layout>
      <Box className="h-[530px] w-full">
        <MypageTitleCard />
      </Box>
      <Stack className="relative mt-[-250px] items-center justify-start pb-4">
        <Box className="w-[480px]">
          <MypageCard />
        </Box>
      </Stack>
    </Layout>
  );
}

export default MyPage;
