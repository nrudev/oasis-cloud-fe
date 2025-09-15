import { useEffect, useState } from "react";

import { useRouter } from "next/router";

import LockIcon from "@mui/icons-material/Lock";
import { ButtonBase, Card, Typography } from "@mui/material";

import { useUserExchangesQuery } from "@/hooks/query/useApiConnection";

interface CardLockProps {
  msg: string;
  buttonText: string;
  connect: boolean;
}
export default function CardLock({ msg, buttonText, connect }: CardLockProps) {
  const { push } = useRouter();
  const {
    userExchangeQuery: { data },
  } = useUserExchangesQuery();

  const [isConnected, setIsConnected] = useState(true);
  const [page, setPage] = useState("/api-connection");
  useEffect(() => {
    const connection = true;
    // if (!data || data.length === 0) connection = false;
    // else connection = true;
    if (connect && connection) {
      setIsConnected(true);
    } else {
      setIsConnected(false);
      if (!connection) {
        setPage("/api-connection");
        return;
      }

      if (!connect) {
        setPage("/preset");
        return;
      }
    }
  }, [data, connect]);
  return (
    <div>
      {isConnected === false ? (
        <Card className="z-1 absolute left-[50%] top-[1px] flex h-full w-full -translate-x-1/2 flex-col items-center justify-center gap-2 bg-black font-bold text-white opacity-80">
          <LockIcon />
          {msg}
          <ButtonBase
            className="flex items-center rounded-full border-neutral-400 px-6 py-4"
            sx={{
              border: "2px solid",
            }}
            onClick={() => push(page)}
          >
            <Typography variant="bodyS" className="font-bold">
              {buttonText}
            </Typography>
          </ButtonBase>
        </Card>
      ) : (
        <div />
      )}
    </div>
  );
}
