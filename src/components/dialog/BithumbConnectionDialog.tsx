import { useState } from "react";

import Image from "next/image";

import { ButtonBase, InputBase, InputLabel, Stack, Typography } from "@mui/material";

import BithumbConnectionGuideDialog from "@/components/dialog/BithumbConnectionGuideDialog";
import useDialogGlobal from "@/components/dialog/useDialogGlobal";

function BithumbConnectionDialog() {
  const [apiKey, setApiKey] = useState("");
  const [secretKey, setSecretKey] = useState("");

  const { openDialog } = useDialogGlobal();

  return (
    <Stack className="w-[800px] rounded-[28px] bg-white">
      <Stack className="gap-4 rounded-t-[28px] bg-brand p-8">
        <Typography variant="400B" className="text-white">
          API 관리
        </Typography>
        <Stack className="mb-4 gap-1">
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
        </Stack>
      </Stack>
      <Stack direction="row" className="w-full gap-4 p-5">
        <ButtonBase
          className="w-full rounded-full border border-solid border-neutral-500 bg-white py-3"
          onClick={() => openDialog(<BithumbConnectionGuideDialog />)}
        >
          <Typography variant="300B" className="text-neutral-500">
            뒤로 가기
          </Typography>
        </ButtonBase>
        <ButtonBase
          className="w-full rounded-full bg-brand py-3"
          onClick={() => console.log(`API Key: ${apiKey}, Secret Key: ${secretKey}`)}
        >
          <Typography variant="300B" className="text-white">
            API 저장
          </Typography>
        </ButtonBase>
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
