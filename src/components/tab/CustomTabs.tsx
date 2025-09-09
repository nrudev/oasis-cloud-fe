import { ReactNode } from "react";

import { Tabs } from "@mui/material";

interface Props {
  value: number;
  onChange: (event: React.SyntheticEvent, newValue: number) => void;
  children?: ReactNode;
}
export default function CustomTabs({ value, onChange, children }: Props) {
  return (
    <Tabs variant="fullWidth" value={value} onChange={onChange}>
      {children}
    </Tabs>
  );
}
