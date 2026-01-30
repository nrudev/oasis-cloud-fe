import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";

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
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (gap > 1) {
      // 초기 렌더링 제외
      const lastIndex = gap - 1;
      const targetInput = inputRefs.current[lastIndex];

      if (targetInput) {
        targetInput.focus();
      }
    }
  }, [gap]);

  const plusButtonClick = () => {
    if (gap < 12) {
      setGap(prev => prev + 1);
      setValue && setValue(prev => [...(prev || [])]); // 새로운 빈 값 추가
    }
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
              value={index === 0 ? "바로진입" : (value[index] ?? "")}
              inputRef={(el: HTMLInputElement | null) => {
                inputRefs.current[index] = el;
              }}
              disabled={index === 0}
              sx={{
                borderBottom: "1px solid #d1d5db",
                px: 0,
                py: 1,
                fontSize: "14px",
                lineHeight: "16px",
                color: "#404040",
                fontWeight: 500,
                "& input": {
                  textAlign: index === 0 ? "center" : "right",
                  "&.Mui-disabled": {
                    color: "#000000",
                    WebkitTextFillColor: "#000000",
                  },
                },
              }}
              startAdornment={<InputAdornment position="start">{index + 1}회차</InputAdornment>}
              endAdornment={
                <InputAdornment position="end" sx={{ minWidth: index !== 0 ? "140px" : "auto" }}>
                  {/* minWidth를 주어 %와 삭제버튼 사이의 최소 거리를 확보합니다 */}
                  <div className="flex w-full items-center justify-between">
                    {index !== 0 && value[index] !== "" && value[index] !== undefined ? (
                      <Typography sx={{ fontSize: "14px", color: "#000000" }}>%</Typography>
                    ) : (
                      <div /> // %가 없을 때 공간 유지
                    )}
                    {index !== 0 && (
                      <IconButton onClick={() => minusButtonClick(index)} sx={{ p: 0.5 }}>
                        <Icon src="/icons/control/close-dark.png" size={20} />
                      </IconButton>
                    )}
                  </div>
                </InputAdornment>
              }
              onChange={e => {
                if (index === 0) return;
                const v = e.target.value.replace(/\D/g, "");
                if (v.length > 2) return;

                if (v === "") {
                  const val = v as T;
                  setValue?.(prev => {
                    const newArr = [...(prev || [])];

                    newArr[index] = val;
                    return newArr;
                  });
                  return;
                }

                setValue &&
                  setValue(prev => {
                    const newArr = [...(prev || [])];

                    newArr[index] = -Math.abs(Number(v)) as T;
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
