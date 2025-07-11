import { useRouter } from "next/router";

import { InputBase, Stack, Typography } from "@mui/material";
import { useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useAtom } from "jotai";

import Card from "@/cards/Card";
import MypageExchange from "@/cards/mypage/MypageCard/MypageExchange";
import MypageInfo from "@/cards/mypage/MypageCard/MypageInfo";
import MypageSubscribe from "@/cards/mypage/MypageCard/MypageSubscribe";
import SupportCard from "@/cards/mypage/MypageCard/SupportCard";
import Icon from "@/components/Icon/index";
import PromotionDialog from "@/components/dialog/PromotionDialog";
import useDialogGlobal from "@/components/dialog/useDialogGlobal";
import authAtom from "@/datas/auth";
import { promotionCodeAtom } from "@/datas/subscribe";
import { usePaymentMethodQuery } from "@/hooks/query/usePayment";
import { usePromotionMutation } from "@/hooks/query/useSubcribe";
import CustomAccordion from "@/components/common/CustomAccordion";

export default function MypageCard() {
  const [auth] = useAtom(authAtom);
  const [promotionCode, setPromotionCode] = useAtom(promotionCodeAtom);
  const { openDialog } = useDialogGlobal();
  const queryClient = useQueryClient();
  const {
    paymentMethodQuery: { data: paymentMethodData },
  } = usePaymentMethodQuery();
  const { postPromotionMutation } = usePromotionMutation();

  const { push } = useRouter();

  const applyPromotionCode = () => {
    postPromotionMutation.mutate(
      { body: { code: promotionCode } },
      {
        onSuccess: res => {
          // console.log(res);
          openDialog(<PromotionDialog result={res.data} />);
        },
        onError: err => {
          const axiosError = err as AxiosError<ResponseT<Subscribe.SubscribeT>>;
          openDialog(<PromotionDialog result={axiosError.response?.data} />);
        },
      },
    );
  };

  const logout = () => {
    queryClient.clear();
    localStorage.removeItem("authorization");
    localStorage.removeItem("authorizationrefresh");
    push("/");
  };
  return (
    <Card>
      <Stack className="h-full w-full items-center justify-between gap-12 px-4 py-16 md:px-8 xl:px-16">
        <MypageInfo title="계정" buttonText="로그아웃" onClick={logout}>
          <Typography variant="300M" className="text-font-2">
            {auth.email}
          </Typography>
        </MypageInfo>
        <MypageExchange />
        <MypageSubscribe />
        <Stack className="w-full gap-4">
          <MypageInfo
            title="결제 수단"
            buttonText="변경하기"
            onClick={() => {
              push("/payment");
            }}
          >
            <Typography variant="300M" className="text-font-2">
              {paymentMethodData?.cardNumber ? "**** **** **** " : "카드를 등록해 주세요"}
              {paymentMethodData?.cardNumber}
            </Typography>
          </MypageInfo>
          <CustomAccordion title="지원중인 카드사" contents={<SupportCard />} />
        </Stack>
        <MypageInfo title="프로모션 코드" buttonText="적용하기" onClick={applyPromotionCode}>
          <InputBase
            className="h-full w-full"
            disabled={!paymentMethodData?.cardNumber}
            value={paymentMethodData?.cardNumber ? promotionCode : "카드 등록이 필요합니다."}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setPromotionCode(event.target.value);
            }}
          />
        </MypageInfo>
      </Stack>
    </Card>
  );
}
