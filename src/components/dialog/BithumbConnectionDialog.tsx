import { useState } from "react";

import Image from "next/image";

import { Button, ButtonBase, InputBase, InputLabel, Stack, Typography } from "@mui/material";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import Icon from "@/components/Icon";
import BithumbConnectionGuideDialog from "@/components/dialog/BithumbConnectionGuideDialog";
import useDialogGlobal from "@/components/dialog/useDialogGlobal";
import api from "@/libs/network";

function BithumbConnectionDialog({ isConnected }: { isConnected: boolean }) {
  const [apiKey, setApiKey] = useState("");
  const [secretKey, setSecretKey] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const queryClient = useQueryClient();

  const { openDialog, closeDialog } = useDialogGlobal();

  const postBithumbApiConnectionMutation = useMutation({
    mutationFn: async () => {
      await api.post<ResponseT<void>>("/user/apikey/bithumb", {
        accessKey: apiKey,
        secretKey,
      });
    },
    mutationKey: ["postBithumbApiConnection"],
    onSuccess: () => {
      closeDialog();
      queryClient.invalidateQueries({ queryKey: ["getUserExchanges"] });
    },
    onError: () => {
      setErrorMessage("API Key 또는 Secret Key가 유효하지 않습니다.");
    },
  });

  const deleteBithumbApiConnectionMutation = useMutation({
    mutationFn: async () => {
      await api.delete<ResponseT<void>>("/user/apikey/bithumb");
    },
    mutationKey: ["deleteBithumbApiConnection"],
    onSuccess: () => {
      closeDialog();
      queryClient.invalidateQueries({ queryKey: ["getUserExchanges"] });
    },
  });

  return (
    <Stack className="w-[800px] rounded-[28px] bg-white">
      <Stack className="gap-4 rounded-t-[28px] bg-brand p-8 pb-1">
        <Typography variant="400B" className="text-white">
          API 관리
        </Typography>
        <Stack className="mb-4 mt-2 gap-1">
          <Typography variant="300R" className="text-sm text-white">
            ※ 거래소에서 발급받은 API Key는 꼭 복사 후 붙여넣기 방법으로 등록해 주십시오.
          </Typography>
          <Typography variant="300R" className="text-sm text-white">
            ※ 빗썸 API 발급 시 안내되어 있는 IP를 사용해야지만 오아시스봇을 정상적으로 이용할 수
            있습니다.
          </Typography>
          <Typography variant="300R" className="text-sm text-white">
            ※ API 삭제시 해당 API로 운영중인 봇이 있을 경우 삭제에 유의해야 합니다.
          </Typography>
          <Typography variant="300R" className="text-sm text-white">
            ※ 회원님의 API Key는 2중 암호와 망분리된 시스템에서 관리됩니다.
          </Typography>
        </Stack>
      </Stack>
      <Stack className="w-full gap-4 p-6 pb-0">
        <Image
          src="/icons/exchange/bithumb2.png"
          alt="bithumb"
          width={200}
          height={55}
          className="m-3"
        />
        {!isConnected ? (
          <Stack className="w-full">
            <BithumbKeyTextField
              id="bithumb-api-key"
              label="API KEY"
              value={apiKey}
              setValue={setApiKey}
            />
            <BithumbKeyTextField
              id="bithumb-secret-key"
              label="SECRET KEY"
              value={secretKey}
              setValue={setSecretKey}
            />
            {errorMessage && (
              <Typography className="mt-2 text-center text-red-600">{errorMessage}</Typography>
            )}
          </Stack>
        ) : (
          <Stack className="event-section w-full items-center gap-4 rounded-2xl bg-neutral-200 px-4 py-6">
            <Stack direction="row" className="gap-2">
              <Icon src="/icons/control/info.png" width={16} height={16} />
              <Typography variant="300M" className="text-font-1">
                현재 등록된 API는 정상적으로 사용 중입니다.
              </Typography>
            </Stack>
            <Stack className="w-full items-center">
              <Typography variant="200R" className="mb-1 text-font-2">
                보안 정책상 API Key / Secret Key는 다시 표시되지 않습니다
              </Typography>
              <Typography variant="200R" className="text-font-2">
                API 키 변경이 필요하신 경우,
                <span className="font-bold text-red-600">삭제 후 재등록</span>해 주세요.
              </Typography>
            </Stack>
          </Stack>
        )}
      </Stack>
      <Stack direction="row" className="w-full gap-4 p-5">
        {isConnected ? (
          <>
            <ButtonBase
              className="w-full rounded-full border border-solid border-red-600 bg-red-600 py-3"
              onClick={() => deleteBithumbApiConnectionMutation.mutate()}
            >
              <Typography variant="300B" className="text-white">
                삭제
              </Typography>
            </ButtonBase>
            <ButtonBase
              className="w-full rounded-full border border-solid border-neutral-500 bg-neutral-500 py-3"
              onClick={() => closeDialog()}
            >
              <Typography variant="300B" className="text-white">
                닫기
              </Typography>
            </ButtonBase>
          </>
        ) : (
          <>
            <ButtonBase
              className="w-full rounded-full border border-solid border-neutral-500 bg-white py-3"
              onClick={() => openDialog(<BithumbConnectionGuideDialog />)}
            >
              <Typography variant="300B" className="text-neutral-500">
                뒤로 가기
              </Typography>
            </ButtonBase>
            <Button
              className="w-full rounded-full bg-brand py-3"
              onClick={() => {
                setErrorMessage("");
                postBithumbApiConnectionMutation.mutate();
              }}
              loading={queryClient.isMutating() > 0}
            >
              <Typography variant="300B" className="text-white">
                API 저장
              </Typography>
            </Button>
          </>
        )}
      </Stack>
    </Stack>
  );
}

interface BithumbKeyTextFieldProps {
  id: string;
  label: string;
  value: string;
  setValue: (value: string) => void;
}

function BithumbKeyTextField({ id, label, value, setValue }: BithumbKeyTextFieldProps) {
  return (
    <Stack className="mb-5 w-full">
      <InputLabel htmlFor={id}>
        <div className="flex flex-row">
          <Typography variant="100R" className="text-neutral-600 hover:cursor-pointer">
            {label}
          </Typography>
        </div>
      </InputLabel>
      <InputBase
        id={id}
        placeholder={`${label}를 입력해주세요.`}
        fullWidth
        classes={{
          input:
            "h-[30px] p-1 flex-0 items-center justify-center leading-[16px] text-[14px] border-solid border-b-[1px] border-x-0 border-t-0 border-neutral-300 font-[500] text-font-2 bg-neutral-200",
          disabled: "cursor-not-allowed bg-neutral-200 text-neutral-600",
        }}
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </Stack>
  );
}

export default BithumbConnectionDialog;
