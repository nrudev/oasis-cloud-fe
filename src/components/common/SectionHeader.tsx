import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string | undefined;
};

function SectionHeader({ children, className }: Props) {
  return (
    <div
      className={`grow h-5 py-2 px-4 bg-darkBlue text-white font-roboto font-semibold rounded-md ${className}`}
    >
      {children}
    </div>
  );
}

export default SectionHeader;
