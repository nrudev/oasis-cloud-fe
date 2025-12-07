import { Stack, Typography } from "@mui/material";

import ExchangeSelectButton from "@/components/signin/dialog/ExchangeSelectButton";
import ExchangeSelectDescription from "@/components/signin/dialog/ExchangeSelectDescription";

interface ExchangeSelectProps {
  onClick: (type: ExchangeType) => void;
}

export default function ExchangeSelect({ onClick }: ExchangeSelectProps) {
  return (
    <Stack className="min-w-[428px] gap-6">
      <Stack>
        <Typography variant="h6" className="text-font-1">
          거래소 선택
        </Typography>
        <Typography variant="bodyS" className="text-font-3">
          연결을 위해 이용하실 거래소를 선택하여주세요.
        </Typography>
      </Stack>
      <Stack className="gap-4 px-4">
        <ExchangeSelectButton type="okx" onClick={onClick} />
        <ExchangeSelectButton type="bithumb" onClick={onClick} />
        <ExchangeSelectDescription />
      </Stack>
    </Stack>
  );
}
