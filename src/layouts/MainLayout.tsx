import { Outlet } from "react-router-dom";
import { Box, Drawer, Fab } from "@mui/material";
import Header from "../components/header/Header";
import SideBar from "../components/side-bar/SideBar";
import MenuIcon from "@mui/icons-material/Menu";

import { useState } from "react";

const MainLayout = () => {
  const [isSidebarOpen, setSidebarOpen] = useState<boolean>(false);

  const toggleSidebar = (open: boolean) => () => {
    setSidebarOpen(open);
  };
  return (
    <Box sx={{ position: "relative" }}>
      <Header />
      <Box
        component="main"
        sx={{
          overflowX: "hidden",
          bgcolor: "#FFFFFF",
        }}
      >
        <Box sx={{ display: { xs: "none", lg: "block" } }}>
          <SideBar />
        </Box>
        <Outlet />

        {/* Floating Menu Button (only visible on small screens) */}
        <Fab
          onClick={toggleSidebar(true)}
          sx={{
            position: "fixed",
            bottom: 16,
            left: 16,
            display: { xs: "flex", lg: "none" },
            zIndex: 1100,
          }}
          color="primary"
        >
          <MenuIcon />
        </Fab>

        {/* Sidebar Drawer for small screens */}
        <Drawer
          anchor="left"
          open={isSidebarOpen}
          onClose={toggleSidebar(false)}
          sx={{ display: { xs: "block", lg: "none" } }}
          PaperProps={{
            sx: {
              width: "30vw",
              padding: "12px",
            },
          }}
        >
          <SideBar />
        </Drawer>
      </Box>
    </Box>
  );
};

export default MainLayout;
