import { ButtonBase, Stack, Typography } from "@mui/material";
import { sendGAEvent, sendGTMEvent } from "@next/third-parties/google";

import Icon from "@/components/Icon";
import { GA_CTA_EVENTS } from "@/constants/constants";

export default function ExchangeSelectDescription() {
  return (
    <Stack className="event-section w-full items-center gap-4 rounded-2xl bg-neutral-200 px-4 py-6">
      <Stack direction="row" className="gap-2">
        <Icon src="/icons/control/info.png" width={16} height={16} />
        <Typography variant="300M" className="text-font-1">
          오아시스 특별혜택 이벤트
        </Typography>
      </Stack>
      <Stack className="w-full items-center">
        <Typography variant="200R" className="text-font-2">
          아래 링크로 OKX 거래소 가입하여 이용하시면
        </Typography>
        <Typography variant="200R" className="text-font-2">
          <span className="text-brand">수수료 50% 할인혜택</span>을 드립니다.
        </Typography>
      </Stack>
      <ButtonBase
        className="event-button w-full rounded-full bg-brand py-3"
        onClick={() => {
          sendGAEvent("event", GA_CTA_EVENTS.selectExchange, {
            // event: GA_CTA_EVENTS.selectExchange,
            exchange_name: "OKX Event",
          });
          sendGTMEvent({
            event: GA_CTA_EVENTS.selectExchange,
            exchange_name: "OKX Event",
          });
          window.open("https://okx.com/join/OFFICIALOASIS");
        }}
        data-exchange="OKX Event"
      >
        <Typography variant="300B" className="text-white">
          이벤트 이용하기
        </Typography>
      </ButtonBase>
    </Stack>
  );
}
