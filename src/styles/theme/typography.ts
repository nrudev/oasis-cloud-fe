import { TypographyOptions } from "@mui/material/styles/createTypography";

interface CustomTypography {
  display1: React.CSSProperties;
  display2: React.CSSProperties;
  display3: React.CSSProperties;
  bodyXL: React.CSSProperties;
  bodyL: React.CSSProperties;
  bodyDF: React.CSSProperties;
  bodyS: React.CSSProperties;
  bodyNC: React.CSSProperties;
  "500B": React.CSSProperties;
  "500M": React.CSSProperties;
  "500R": React.CSSProperties;
  "400B": React.CSSProperties;
  "400M": React.CSSProperties;
  "400R": React.CSSProperties;
  "300B": React.CSSProperties;
  "300M": React.CSSProperties;
  "300R": React.CSSProperties;
  "200B": React.CSSProperties;
  "200M": React.CSSProperties;
  "200R": React.CSSProperties;
  "100B": React.CSSProperties;
  "100M": React.CSSProperties;
  "100R": React.CSSProperties;
}

declare module "@mui/material/styles" {
  interface TypographyVariants extends CustomTypography {}
  interface TypographyVariantsOptions extends CustomTypography {}
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    subtitle1: false;
    subtitle2: false;
    body1: false;
    body2: false;
    button: false;
    caption: false;
    overline: false;
    display1: true;
    display2: true;
    display3: true;
    bodyXL: true;
    bodyL: true;
    bodyDF: true;
    bodyS: true;
    bodyNC: true;
    "500B": true;
    "500M": true;
    "500R": true;
    "400B": true;
    "400M": true;
    "400R": true;
    "300B": true;
    "300M": true;
    "300R": true;
    "200B": true;
    "200M": true;
    "200R": true;
    "100B": true;
    "100M": true;
    "100R": true;
  }
}

const fontFamily = ["Spoqa Han Sans Neo", "Roboto", "sans-serif"].join(",");

const typographyOptions: TypographyOptions = {
  fontFamily,
  h1: {
    fontSize: "48px",
    lineHeight: "62px",
    fontWeight: 700,
  },
  h2: {
    fontSize: "38px",
    lineHeight: "46px",
    fontWeight: 700,
  },
  h3: {
    fontSize: "32px",
    lineHeight: "40px",
    fontWeight: 700,
  },
  h4: {
    fontSize: "28px",
    lineHeight: "36px",
    fontWeight: 700,
  },
  h5: {
    fontSize: "26px",
    lineHeight: "34px",
    fontWeight: 700,
  },
  h6: {
    fontSize: "20px",
    lineHeight: "28px",
    fontWeight: 700,
  },
  display1: {
    fontSize: "58px",
    lineHeight: "76px",
    fontWeight: 700,
    fontFamily,
  },
  display2: {
    fontSize: "48px",
    lineHeight: "64px",
    fontWeight: 700,
    fontFamily,
  },
  display3: {
    fontSize: "40px",
    lineHeight: "52px",
    fontWeight: 700,
    fontFamily,
  },
  bodyXL: {
    fontSize: "24px",
    lineHeight: "32px",
    fontWeight: 400,
    fontFamily,
  },
  bodyL: {
    fontSize: "20px",
    lineHeight: "28px",
    fontWeight: 400,
    fontFamily,
  },
  bodyDF: {
    fontSize: "18px",
    lineHeight: "26px",
    fontWeight: 400,
    fontFamily,
  },
  bodyS: {
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: 400,
    fontFamily,
  },
  bodyNC: {
    fontFamily: "Pretendard",
    fontSize: 14,
    fontWeight: 400,
    lineHeight: "160%",
    fontStyle: "Regular",
    whiteSpace: "pre-line",
  },
  "500B": {
    fontSize: "24px",
    lineHeight: "26px",
    fontWeight: 700,
    fontFamily,
  },
  "500M": {
    fontSize: "24px",
    lineHeight: "26px",
    fontWeight: 500,
    fontFamily,
  },
  "500R": {
    fontSize: "24px",
    lineHeight: "26px",
    fontWeight: 400,
    fontFamily,
  },
  "400B": {
    fontSize: "20px",
    lineHeight: "24px",
    fontWeight: 700,
    fontFamily,
  },
  "400M": {
    fontSize: "20px",
    lineHeight: "24px",
    fontWeight: 500,
    fontFamily,
  },
  "400R": {
    fontSize: "20px",
    lineHeight: "24px",
    fontWeight: 400,
    fontFamily,
  },
  "300B": {
    fontSize: "16px",
    lineHeight: "18px",
    fontWeight: 700,
    fontFamily,
  },
  "300M": {
    fontSize: "16px",
    lineHeight: "18px",
    fontWeight: 500,
    fontFamily,
  },
  "300R": {
    fontSize: "16px",
    lineHeight: "18px",
    fontWeight: 400,
    fontFamily,
  },
  "200B": {
    fontSize: "14px",
    lineHeight: "16px",
    fontWeight: 700,
    fontFamily,
  },
  "200M": {
    fontSize: "14px",
    lineHeight: "16px",
    fontWeight: 500,
    fontFamily,
  },
  "200R": {
    fontSize: "14px",
    lineHeight: "16px",
    fontWeight: 400,
    fontFamily,
  },
  "100B": {
    fontSize: "12px",
    lineHeight: "14px",
    fontWeight: 700,
    fontFamily,
  },
  "100M": {
    fontSize: "12px",
    lineHeight: "14px",
    fontWeight: 500,
    fontFamily,
  },
  "100R": {
    fontSize: "12px",
    lineHeight: "14px",
    fontWeight: 400,
    fontFamily,
  },
};

export default typographyOptions;
