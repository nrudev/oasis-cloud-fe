import React from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { SelectboxItem } from "@/datas/select";

type Props = {
  labelId: string;
  selectLabel: string;
  itemList: SelectboxItem[];
  state: string;
  setState: (value: string) => void;
  className?: string;
  disabled?: boolean;
};

function Selectbox({
  labelId,
  selectLabel,
  itemList,
  state,
  setState,
  className,
  disabled,
}: Props) {
  const handleChange = (event: SelectChangeEvent) => {
    setState(event.target.value as string);
  };

  return (
    <FormControl size="small" className={className} disabled={disabled}>
      <InputLabel
        id={labelId}
        sx={{
          color: "black",
          "&.Mui-focused": {
            color: "black",
          },
        }}
        className="font-bold font-roboto"
      >
        {selectLabel}
      </InputLabel>
      <Select
        labelId={labelId}
        label={selectLabel}
        value={state}
        onChange={handleChange}
        className="w-72 font-bold font-roboto uppercase"
        sx={{
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "black",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "black",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "black",
          },
        }}
      >
        {itemList.length > 0 &&
          itemList.map(({ value, itemLabel }) => (
            <MenuItem
              key={value}
              value={value}
              className="font-bold font-roboto uppercase"
              sx={{
                "&.Mui-selected": {
                  backgroundColor: "#c8c8c8",
                  "&:hover": {
                    backgroundColor: "#c8c8c8",
                  },
                },
              }}
            >
              {itemLabel || value}
            </MenuItem>
          ))}
      </Select>
    </FormControl>
  );
}

export default Selectbox;
