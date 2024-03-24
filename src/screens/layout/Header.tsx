import { Box, Stack } from "@mui/material";
import Logo from "@/screens/Logo";

interface HeaderProps {
  color: "white" | "black";
}

const style = {
  white: "text-white",
  black: "text-black",
};

function Header({ color }: HeaderProps) {
  return (
    <Box className={`w-full h-[72px] ${style[color]}`}>
      <Stack
        direction="row"
        className="w-full h-full px-4 items-center justify-between"
      >
        <Logo size="L" color="white" />
      </Stack>
    </Box>
  );
}

export default Header;
