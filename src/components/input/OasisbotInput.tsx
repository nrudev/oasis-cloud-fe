"use client";

import React from "react";
import { TextField } from "@mui/material";

type Props = {
  id: string;
  value: string | number;
  setValue: (value: string) => void;
};

function OasisbotInput({ id, value, setValue }: Props) {
  return (
    <TextField
      required
      id={id}
      label="직접 입력"
      value={value}
      onChange={e => setValue(e.target.value)}
      size="small"
      className="w-72"
      sx={{
        "& label.Mui-focused": {
          color: "black",
          borderWidth: "0.1px",
        },
        "& .MuiInput-underline:after": {
          borderBottomColor: "black",
        },
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: "black",
          },
          "&:hover fieldset": {
            borderColor: "black",
          },
          "&.Mui-focused fieldset": {
            borderColor: "black",
            borderWidth: "0.1px",
          },
        },
      }}
      focused
    />
  );
}

export default OasisbotInput;
