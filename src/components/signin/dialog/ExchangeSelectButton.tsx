import { ButtonBase, Typography } from "@mui/material";

import ExchangeIcon from "@/components/Icon/ExchangeIcon";

interface ExchangeSelectButtonProps {
  type: ExchangeType;
  onClick?: (type: ExchangeType) => void;
}

function ExchangeSelectButton({ type, onClick }: ExchangeSelectButtonProps) {
  return (
    <ButtonBase
      className="flex w-full items-center gap-2 rounded-full border-neutral-400 py-4 text-font-2 hover:border-brand hover:text-brand"
      sx={{
        border: "1px solid",
      }}
      onClick={() => onClick && onClick(type)}
    >
      <ExchangeIcon exchange={type} />
      <Typography variant="bodyS">{type.toUpperCase()}</Typography>
    </ButtonBase>
  );
}

export default ExchangeSelectButton;
