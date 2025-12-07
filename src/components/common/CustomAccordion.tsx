import React, { useState } from "react";

import { Stack, Typography } from "@mui/material";

import Icon from "@/components/Icon";

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
          <Icon src="/icons/arrow/right.png" width={28} height={28} />
        ) : (
          <Icon src="/icons/arrow/down.png" width={28} height={28} />
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
  );
}

export default CustomAccordion;
