import Icon from '@/components/Icon';
import { Stack, Typography } from '@mui/material'
import React, { useState } from 'react'

interface Props {
  title: string;
  contents: React.ReactNode;
}

function CustomAccordion({ title, contents }: Props) {
  const [flag, setFlag] = useState<boolean>(true);
  const buttonClick = () => {
    setFlag(!flag);
  };

  return (
    <Stack>
      <Stack
        direction="row"
        className="h-full w-full cursor-pointer items-center"
        onClick={buttonClick}
      >
        {flag ? (
          <Icon src="/icons/arrow/right.png" size={28} />
        ) : (
          <Icon src="/icons/arrow/down.png" size={28} />
        )}
        <Typography
          sx={{
            fontFamily: "Spoqa Han Sans Neo",
            fontSize: 16,
            fontWeight: 500,
            lineHeight: "120%",
          }}
        >
          {title}
        </Typography>
      </Stack>
      {flag ? null : contents}
    </Stack>

  )
}

export default CustomAccordion