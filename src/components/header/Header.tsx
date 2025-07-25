import { useState } from "react";
import { NavLink } from "react-router-dom";
import NavLinks from "./NavLinks";

import { Box, Container, Drawer, Stack } from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import NavIcons from "./NavIcons";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = (open: boolean) => {
    setIsMenuOpen(open);
  };

  return (
    <Container
      maxWidth={false}
      sx={{
        paddingTop: "24px",
        // maxWidth: "1560px",
      }}
    >
      <Stack
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          position: "relative",
          zIndex: 5,
        }}
      >
        <Stack
          flexDirection="row"
          gap="16px"
          justifyContent="center"
          alignItems="center"
        >
          <MenuRoundedIcon
            onClick={() => toggleMenu(true)}
            sx={{
              cursor: "pointer",
              color: "black",
              display: {
                xs: "inline",
                md: "none",
              },
            }}
          />
          <Box component={NavLink} to="/">
            <Box component="img" src="/assets/icons/logo.svg" alt="Logo" />
          </Box>
        </Stack>

        <Box
          sx={{
            display: {
              xs: "none",
              md: "inline",
            },
          }}
        >
          <NavLinks />
        </Box>

        <Box sx={{ display: { xs: "none", sm: "inline" } }}>
          <NavIcons />
        </Box>
      </Stack>

      {/* mobile nav */}
      <Drawer
        anchor="left"
        open={isMenuOpen}
        onClose={() => {
          toggleMenu(false);
        }}
        PaperProps={{
          sx: {
            width: "70vw",
            bgcolor: "#ffffff",
            color: "#000000",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            padding: "16px",
          }}
        >
          <CloseRoundedIcon
            onClick={() => toggleMenu(false)}
            sx={{ cursor: "pointer" }}
          />
        </Box>
        <Stack
          sx={{
            paddingInline: "20px",
            paddingBlock: "40px",
            height: "100%",
            display: {
              xs: "flex",
              md: "none",
            },
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          {/* Top: Nav Links */}
          <NavLinks toggleMenu={() => toggleMenu(false)} />

          {/* Bottom: Nav Icons */}
          <Box sx={{ display: { xs: "block", sm: "none" } }}>
            <NavIcons />
          </Box>
        </Stack>
      </Drawer>
    </Container>
  );
};

export default Header;
