import { Dispatch, SetStateAction } from "react";

import {
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
  placeholder?: string;
  setValue?: Dispatch<SetStateAction<T>>;
  inputLabelProps?: InputLabelProps;
}

function FormTextField<T>(props: FormTextFieldProps<T> & Omit<InputBaseProps, "variant">) {
  const { id, label, className, placeholder, setValue, inputLabelProps, ...rest } = props;

  return (
    <Stack className={`w-full ${className}`}>
      {label && (
        <InputLabel htmlFor={id} {...inputLabelProps}>
          <Typography variant="100R" className="text-neutral-600">
            {label}
          </Typography>
        </InputLabel>
      )}
      <InputBase
        {...rest}
        fullWidth
        classes={{
          input:
            "h-[30px] p-0 flex-0 items-center justify-center leading-[16px] text-[14px] border-solid border-b-[1px] border-x-0 border-t-0 border-neutral-300 font-[500] text-font-2",
        }}
        placeholder={placeholder}
        onChange={e => {
          const v = e.target.value;
          const val: T = typeof v === "number" ? (Number(v) as T) : (v as T);
          setValue && setValue(val);
        }}
      />
    </Stack>
  );
}

export default FormTextField;
