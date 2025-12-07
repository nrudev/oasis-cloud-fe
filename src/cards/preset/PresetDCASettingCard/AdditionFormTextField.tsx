import { Dispatch, SetStateAction, useState } from "react";

import Image from "next/image";

import {
  Button,
  IconButton,
  InputAdornment,
  InputBase,
  InputBaseProps,
  InputLabel,
  InputLabelProps,
  Stack,
  Typography,
} from "@mui/material";

import Icon from "@/components/Icon";

interface FormTextFieldProps<T> {
  id: string;
  label?: string;
  value?: T[];
  setValue?: Dispatch<SetStateAction<T[]>>;
  inputLabelProps?: InputLabelProps;
}

function ButtonIcon() {
  return (
    <div className="flex items-center justify-center">
      <Image src="/icons/basic/plus.png" alt="plus" width={20} height={20} />
    </div>
  );
}

function AdditionFormTextField<T>(props: FormTextFieldProps<T> & Omit<InputBaseProps, "variant">) {
  const { id, label, className, setValue, value = [], inputLabelProps, ...rest } = props;
  const [gap, setGap] = useState(value.length || 1);
  const plusButtonClick = () => {
    setGap(prev => prev + 1);
    setValue && setValue(prev => [...(prev || []), "" as T]); // 새로운 빈 값 추가
  };
  const minusButtonClick = (index: number) => {
    if (gap > 1) {
      setGap(prev => prev - 1);
      setValue && setValue(prev => prev.filter((_, i) => i !== index));
    }
  };
  return (
    <Stack className={`w-full ${className}`}>
      {label && (
        <InputLabel htmlFor={id} {...inputLabelProps}>
          <Typography variant="100R" className="text-neutral-600">
            {label}
          </Typography>
        </InputLabel>
      )}
      {Array(gap)
        .fill(null)
        .map((_, index) => (
          <div key={index}>
            <InputBase
              {...rest} // setValue 제외
              fullWidth
              value={value[index] ?? ""}
              sx={{
                borderBottom: "1px solid #d1d5db",
                px: 0,
                py: 1,
                fontSize: "14px",
                lineHeight: "16px",
                color: "#404040",
                fontWeight: 500,
                "& input": {
                  textAlign: "center",
                },
              }}
              startAdornment={<InputAdornment position="start">{index + 1}회차</InputAdornment>}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton onClick={() => minusButtonClick(index)}>
                    <Icon src="/icons/control/close-dark.png" width={20} height={20} />
                  </IconButton>
                </InputAdornment>
              }
              onChange={e => {
                const v = e.target.value;
                // const val: T = typeof v === "number" ? (Number(v) as T) : (v as T);
                setValue &&
                  setValue(prev => {
                    const newArr = [...(prev || [])];
                    newArr[index] = typeof v === "number" ? (Number(v) as T) : (v as T);
                    return newArr;
                  });
              }}
            />
          </div>
        ))}
      <Button
        variant="outlined"
        startIcon={<ButtonIcon />}
        onClick={plusButtonClick}
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
