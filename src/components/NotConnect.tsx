import { useRouter } from "next/router";

import { Box, Button, Typography } from "@mui/material";

interface NotConnectProps {
  customMessage: string;
  connectedMessage?: string;
  isConnected: boolean;
  hasButton?: boolean;
  msgButton?: string;
  link?: string;
}

export default function NotConnect({
  customMessage,
  connectedMessage,
  isConnected,
  hasButton = true,
  msgButton = "거래소 연동하기",
  link = "/api-connection",
}: NotConnectProps) {
  const router = useRouter();

  if (isConnected) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100%" width="100%">
        <Typography variant="bodyNC" textAlign="center">
          {connectedMessage ?? "No rows"}
        </Typography>
      </Box>
    );
  }

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100%"
      width="100%"
      gap={2}
    >
      <Typography variant="bodyNC" align="center" whiteSpace="pre-line">
        {customMessage}
      </Typography>
      {hasButton && (
        <Button
          variant="outlined"
          onClick={() => router.push(link)}
          sx={{
            borderColor: "#223CE9",
            color: "#223CE9",
            borderRadius: 9999, // For a pill-shaped button
            padding: "8px 20px",
          }}
        >
          {msgButton}
        </Button>
      )}
    </Box>
  );
}
