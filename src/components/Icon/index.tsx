import Image from "next/image";

import { Icon as MuiIcon } from "@mui/material";

interface IconProps {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
}

export default function Icon({
  src,
  alt = "icon",
  width = 30,
  height = 30,
  className = "",
}: IconProps) {
  return (
    <MuiIcon
      className={`flex items-center justify-center ${className}`}
      sx={{
        width: width,
        height: height,
      }}
    >
      <Image src={src} alt={alt} width={width} height={height} />
    </MuiIcon>
  );
}
