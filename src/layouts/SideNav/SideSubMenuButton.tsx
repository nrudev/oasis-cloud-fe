import { useRouter } from "next/router";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { ButtonBase, Stack, Typography } from "@mui/material";

interface SideMenuButtonProps {
  detail: {
    id: string;
    name: string;
    path: string;
  };
  iconOnly?: boolean;
}

export default function SideSubMenuButton({ detail, iconOnly }: SideMenuButtonProps) {
  const { push } = useRouter();
  const { pathname } = useRouter();

  return (
    <ButtonBase
      className={` ${iconOnly ? "" : "ml-4"} h-[30px] w-full cursor-pointer rounded-xl`}
      onClick={() => push(detail.path)}
    >
      <Stack
        direction="row"
        className={`h-full w-full items-center gap-4 overflow-x-hidden ${iconOnly ? "justify-center" : "px-4"}`}
      >
        <ArrowForwardIosIcon
          sx={{ fontSize: 10, color: `${pathname === detail.path ? "blue" : "#6F6C99"}` }}
        />
        {!iconOnly &&
          (pathname === detail.path ? (
            <Typography variant="200B" className="text-brand">
              {detail.name}
            </Typography>
          ) : (
            <Typography variant="200R" className="text-sub-4">
              {detail.name}
            </Typography>
          ))}
      </Stack>
    </ButtonBase>
  );
}
