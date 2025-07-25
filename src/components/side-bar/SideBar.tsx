import { Box } from "@mui/material";
import IconWrapper from "./IconWrapper";

const ICONS = [
  "/assets/icons/sidebar-icon-1.svg",
  "/assets/icons/sidebar-icon-2.svg",
  "/assets/icons/sidebar-icon-3.svg",
  "/assets/icons/sidebar-icon-4.svg",
  "/assets/icons/sidebar-icon-5.svg",
];

const SideBar = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 16,
        width: "64px",
        height: "100vh",
        pb: { xs: "20px", lg: "48px" },
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "8px",
        }}
      >
        {ICONS.map((icon, index) => (
          <IconWrapper icon={icon} key={index} isFirst={index === 0} />
        ))}
      </Box>

      <Box>
        <IconWrapper icon="/assets/icons/chat.svg" isFirst={false} />
      </Box>
    </Box>
  );
};

export default SideBar;
