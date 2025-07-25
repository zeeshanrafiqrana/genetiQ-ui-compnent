import { Box, IconButton, Stack, Typography } from "@mui/material";

const NavIcons = () => {
  return (
    <Stack flexDirection="row" gap="4px" alignItems="center">
      <IconButton
        sx={{
          backgroundColor: "#F6F6F6",
          borderRadius: "44px",
          padding: "12px",
          "&:hover": {
            backgroundColor: "#F6F6F6",
          },
        }}
      >
        <Box component="img" src="/assets/icons/bell.svg" />
      </IconButton>

      <IconButton
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          backgroundColor: "#F6F6F6",
          borderRadius: "44px",
          padding: "12px",
          "&:hover": {
            backgroundColor: "#F6F6F6",
          },
        }}
      >
        <Box component="img" src="/assets/icons/shopping-cart.svg" />

        <Typography
          sx={{
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "24px",
            letterSpacing: 0,
          }}
        >
          5
        </Typography>
      </IconButton>

      <IconButton
        sx={{
          backgroundColor: "#93BEF4",
          borderRadius: "44px",
          padding: "12px",
          "&:hover": {
            backgroundColor: "#93BEF4",
          },
        }}
      >
        <Box component="img" src="/assets/icons/user.svg" />
      </IconButton>
    </Stack>
  );
};

export default NavIcons;
