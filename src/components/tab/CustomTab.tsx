import { Tab, TabProps } from "@mui/material";

interface CustomeTabProps extends TabProps {
  label: string;
}
export default function CustomTab({ label, ...props }: CustomeTabProps) {
  return (
    <Tab
      sx={{
        fontFamily: "Spoqa Han Sans Neo",
        fontWeight: 500,
        fontSize: "18px",
        lineHeight: "120%",
        letterSpacing: "-2%",
      }}
      disableRipple
      label={label}
      {...props}
    />
  );
}
