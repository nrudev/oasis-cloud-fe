import { Dispatch, SetStateAction } from "react";

import {
  Button,
  InputBase,
  InputBaseProps,
  InputLabel,
  InputLabelProps,
  Stack,
  Typography,
} from "@mui/material";

interface FormTextFieldProps<T> {
  id: string;
  label?: string;
  value?: T;
  setValue?: Dispatch<SetStateAction<T>>;
  inputLabelProps?: InputLabelProps;
}

function AdditionFormTextField<T>(props: FormTextFieldProps<T> & Omit<InputBaseProps, "variant">) {
  const { id, label, className, setValue, inputLabelProps } = props;

  return (
    <Stack className={`w-full ${className}`}>
      {label && (
        <InputLabel htmlFor={id} {...inputLabelProps}>
          <Typography variant="100R">{label}</Typography>
        </InputLabel>
      )}
      <InputBase
        {...props}
        fullWidth
        classes={{
          input:
            "h-[30px] p-0 flex-0 items-center justify-center leading-[16px] text-[14px] border-solid border-b-[1px] border-x-0 border-t-0 border-neutral-300 font-[500] text-font-2",
        }}
        onChange={e => {
          const v = e.target.value;
          const val: T = typeof v === "number" ? (Number(v) as T) : (v as T);
          setValue && setValue(val);
        }}
      />
      <Button
        variant="outlined"
        onClick={() => console.log("")}
        sx={{
          borderColor: "#223CE9",
          color: "#223CE9",
          borderRadius: 9999, // For a pill-shaped button
          marginTop: "20px",
          padding: "8px 20px",
        }}
      >
        회차 추가
      </Button>
    </Stack>
  );
}

export default AdditionFormTextField;
