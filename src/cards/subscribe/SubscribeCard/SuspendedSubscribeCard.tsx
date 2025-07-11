import { useSuspendedSubscribeQuery } from '@/hooks/query/useSubcribe';
import { Stack, Typography } from '@mui/material';
import React from 'react'

function SuspendedSubscribeCard() {
  const {
    suspendedSubscribeQuery: { data: suspendedSubscribeData },
  } = useSuspendedSubscribeQuery();

  return (
    <Stack className="h-full w-full" spacing={2} pl={3} mt={1}>
      {suspendedSubscribeData?.expiryDate ?
        <>
          <Typography variant="300M" className="text-font-2">
            {suspendedSubscribeData.productName}
          </Typography>
          {suspendedSubscribeData.productName !== "Free" &&
            <Typography variant="200M" className="text-brand">
              다음 결제일: {suspendedSubscribeData.expiryDate.slice(0, 10)}
            </Typography>}
        </>
        :
        <Typography variant="200M" className="text-sub-3">
          기존 구독 정보가 존재하지 않습니다.
        </Typography>
      }
    </Stack>
  )
}

export default SuspendedSubscribeCard