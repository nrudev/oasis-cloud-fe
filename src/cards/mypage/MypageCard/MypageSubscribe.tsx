import { useRouter } from "next/router";
import { useState } from "react";

import { ButtonBase, Stack, Typography } from "@mui/material";

import MypageInfo from "@/cards/mypage/MypageCard/MypageInfo";
import MySubscribeDialog from "@/components/dialog/MySubscribeDialog";
import useDialogGlobal from "@/components/dialog/useDialogGlobal";
import { useSubscribeQuery, useSuspendedSubscribeQuery } from "@/hooks/query/useSubcribe";
import CustomAccordion from "@/components/common/CustomAccordion";
import SupportCard from "@/cards/mypage/MypageCard/SupportCard";
import SuspendedSubscribeCard from "@/cards/subscribe/SubscribeCard/SuspendedSubscribeCard";

export default function MypageSubscribe() {
  const { push } = useRouter();
  const [flag, setFlag] = useState(true);

  const {
    subscribeQuery: { data: subscribeData },
  } = useSubscribeQuery();

  const { openDialog } = useDialogGlobal();

  return (
    <Stack className="w-full gap-4">
      <MypageInfo
        title="구독권"
        buttonText="변경하기"
        onClick={() => {
          push("/subscribe");
        }}
      >
        <Typography variant="300M" className="text-font-2">
          {subscribeData?.productName}
        </Typography>
      </MypageInfo>
      {subscribeData?.expiryDate && (
        <Stack direction="row" className="h-full w-full items-center justify-between">
          <Typography variant="200M" className="text-brand">
            {subscribeData.useCoupon ? "쿠폰 만료일" : "다음 결제일"}: {subscribeData.expiryDate.slice(0, 10)}
          </Typography>
          <ButtonBase
            onClick={() => {
              openDialog(<MySubscribeDialog />);
            }}
          >
            <Typography variant="200M" className="text-neutral-600 underline">
              구독 해지하기
            </Typography>
          </ButtonBase>
        </Stack>
      )}
      {subscribeData?.useCoupon && <CustomAccordion title="기존 구독권 보기" contents={<SuspendedSubscribeCard />} />}
    </Stack>
  );
}
