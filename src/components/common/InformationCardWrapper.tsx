import { Box, type SxProps, type Theme } from "@mui/material";
import type { ReactNode } from "react";

interface InformationCardWrapperProps {
  children: ReactNode;
  sx?: SxProps<Theme>;
}

const InformationCardWrapper = ({
  children,
  sx,
}: InformationCardWrapperProps) => {
  return (
    <Box
      sx={{
        borderRadius: "24px",
        border: "1px solid #ffffff",
        padding: { xs: "12px", md: "24px" },
        backgroundColor: "#F6F6F605",
        backdropFilter: "blur(24px)",
        boxShadow: `
          0px 9px 26px 0px #0000001F,
          0px 2px 26px 0px #00000014
        `,
        position: "relative",
        width: "100%",
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};

export default InformationCardWrapper;
