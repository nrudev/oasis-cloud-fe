import React from "react";
import { MenuItem } from "@mui/material";

type Props = {
  children: string;
  onClick?: () => void;
};

function CustomMenuItem({ children, onClick }: Props) {
  return (
    <MenuItem
      onClick={onClick}
      sx={{
        "&:hover": {
          background: "#373B5C",
          color: "#fff",
        },
      }}
    >
      {children}
    </MenuItem>
  );
}

export default CustomMenuItem;
