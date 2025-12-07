import Image from "next/image";

import { ButtonBase, Stack, Typography } from "@mui/material";

interface InfoDialog2Props {
  dialogTitle: string;
  dialogDescription: string[];
  button1Title: string;
  button2Title: string;
  handleButton1Click?: () => void;
  handleButton2Click?: () => void;
}

export default function InfoDialog2({
  dialogTitle,
  dialogDescription,
  button1Title,
  handleButton1Click,
  button2Title,
  handleButton2Click,
}: InfoDialog2Props) {
  return (
    <Stack className="rounded-[28px] bg-white">
      <Image src="/dialog/Dialog.png" alt="Dialogimage" width={410} height={208} />
      <Stack className="items-center gap-4 p-8">
        <Typography variant="400B">{dialogTitle}</Typography>
        <Stack className="mb-4 items-center gap-1">
          {dialogDescription.length === 1 ? (
            <Typography variant="300R" className="text-font-3">
              {dialogDescription[0]}
            </Typography>
          ) : (
            dialogDescription.map((desc, index) => (
              <Typography key={index} variant="300R" className="text-font-3">
                {desc}
              </Typography>
            ))
          )}
        </Stack>

        <Stack direction="row" className="w-full gap-4">
          <ButtonBase
            className="w-full rounded-full border border-solid border-neutral-500 bg-white py-3"
            onClick={handleButton1Click}
          >
            <Typography variant="300B" className="text-neutral-500">
              {button1Title}
            </Typography>
          </ButtonBase>
          <ButtonBase className="w-full rounded-full bg-brand py-3" onClick={handleButton2Click}>
            <Typography variant="300B" className="text-white">
              {button2Title}
            </Typography>
          </ButtonBase>
        </Stack>
      </Stack>
    </Stack>
  );
}
