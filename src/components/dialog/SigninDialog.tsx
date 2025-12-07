import { IconButton, Paper, Stack } from "@mui/material";

import Icon from "@/components/Icon/index";

interface SigninDialogProps {
  onClose: () => void;
  children: React.ReactNode;
}

export default function SigninDialog({ onClose, children }: SigninDialogProps) {
  return (
    <Stack className="fixed left-0 top-0 h-full w-full bg-transparent" onClick={onClose}>
      <Paper
        className="absolute left-1/2 top-1/2 w-fit -translate-x-1/2 -translate-y-1/2 transform rounded-xl bg-white p-4"
        sx={{ boxShadow: "0px 30px 40px 0px #252D3538" }}
        onClick={e => {
          e.stopPropagation();
        }}
      >
        <IconButton className="absolute right-4 top-4" onClick={onClose}>
          <Icon src="/icons/control/close-dark.png" width={32} height={32} />
        </IconButton>
        {children}
      </Paper>
    </Stack>
  );
}
