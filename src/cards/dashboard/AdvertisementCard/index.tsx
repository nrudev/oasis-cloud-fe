import { useEffect, useRef, useState } from "react";

import { Stack } from "@mui/material";

import Card from "@/cards/Card";
import AdvertisementIndex from "@/cards/dashboard/AdvertisementCard/AdvertisementIndex";
import AdvertisementInfo from "@/cards/dashboard/AdvertisementCard/AdvertisementInfo";

export default function AdvertisementCard() {
  const MAX_INDEX = 2;
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const startSlider = () => {
    return setInterval(() => {
      setCurrentIndex(prev => (prev + 1 < MAX_INDEX ? prev + 1 : 0));
    }, 5000);
  };

  useEffect(() => {
    if (ref.current) {
      const { width: clientWidth } = ref.current.getBoundingClientRect();
      ref.current.style.marginLeft = `-${(Number(clientWidth) / 2) * currentIndex}px`;
    }
  }, [currentIndex]);

  useEffect(() => {
    const id = startSlider();
    return () => clearInterval(id);
  }, []);

  return (
    <Card>
      <Stack direction="row" className="h-full w-[300%] duration-500" ref={ref}>
        <AdvertisementInfo
          semiTitle="영구적 혜택"
          title={`OKX 수수료\n50% 할인`}
          description={`오아시스 레퍼럴 코드로 가입한 유저에\n한하여 적용됩니다`}
          bgSrc="/advertisement/event1.png"
          btn="OKX 회원가입 하기"
          onClick={() => window.open("https://okx.com/join/OFFICIALOASIS")}
        />

        {/* <AdvertisementInfo
          semiTitle="Smart Access"
          title={`업비트 원클릭\n계정 연동`}
          description={`KYC 2차 인증 완료 후 원클릭 스마트\n엑세스 계정이 연결이 가능합니다`}
          bgSrc="/advertisement/event2.png"
          btn="KYC 2차 인증 하기"
          onClick={() => console.log("자세히보기")}
        /> */}

        <AdvertisementInfo
          semiTitle="Preset Setting"
          title="완벽한 프리셋 설정"
          description={`가이드라인을 통해\n완벽한 프리셋 설정을 세팅해 보세요`}
          bgSrc="/advertisement/event3.png"
          btn="가이드라인 보러가기"
          onClick={() =>
            window.open("https://deep-curler-817.notion.site/13e662dca36580989f1ff551050a21ca")
          }
        />
      </Stack>
      <AdvertisementIndex maxIndex={MAX_INDEX} currentIndex={currentIndex} />
    </Card>
  );
}
