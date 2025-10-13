import { useRouter } from "next/router";

import { ButtonBase, Stack, Typography } from "@mui/material";

import SidenavIcon from "@/components/Icon/SidenavIcon";
import { MenuDetail } from "@/layouts/SideNav/sideMenu";

interface SideMenuButtonProps {
  detail: MenuDetail;
  iconOnly?: boolean;
  disabled?: boolean;
}

export default function SideMenuButton({ detail, iconOnly, disabled }: SideMenuButtonProps) {
  const { push } = useRouter();
  const { pathname } = useRouter();

  return (
    <ButtonBase
      className={`h-[50px] w-full rounded-xl ${disabled ? "cursor-not-allowed bg-[#E8E8E8]" : "cursor-pointer"}`}
      onClick={() => push(detail.path)}
      disabled={disabled}
    >
      <Stack
        direction="row"
        className={`h-full w-full items-center gap-4 overflow-x-hidden ${iconOnly ? "justify-center" : "px-4"}`}
      >
        <SidenavIcon
          id={detail.id}
          isFocus={
            pathname === detail.path || (pathname === "/preset-dca" && detail.id === "preset")
          }
        />

        {!iconOnly &&
          (pathname === detail.path || (pathname === "/preset-dca" && detail.id === "preset") ? (
            <Typography variant="300B" className="text-brand">
              {detail.name}
            </Typography>
          ) : (
            <Typography
              variant="300R"
              className={`${disabled ? "text-neutral-600" : "text-sub-4"}`}
            >
              {detail.name}
            </Typography>
          ))}
      </Stack>
    </ButtonBase>
  );
}
