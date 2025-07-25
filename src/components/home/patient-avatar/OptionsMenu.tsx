import { useState } from "react";
import { Button, Menu, MenuItem, Box, Typography } from "@mui/material";

const OptionsMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedOption, setSelectedOption] = useState("Total Health");

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) =>
    setAnchorEl(event.currentTarget);

  const handleClose = () => setAnchorEl(null);

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    handleClose();
  };

  return (
    <>
      <Button
        onClick={handleClick}
        sx={{
          borderRadius: "36px",
          padding: "12px",
          textTransform: "none",
          boxShadow: "0px 2px 4px 0px #0000000A",
          backgroundColor: "#FFFFFF",
          color: "#000000",
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <Box component="img" src="/assets/icons/options-menu.svg" />
        <Typography
          component="span"
          sx={{
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "24px",
            letterSpacing: 0,
          }}
        >
          {selectedOption}
        </Typography>
        <Box component="img" src="/assets/icons/expand-more.svg" />
      </Button>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        {["Total Health", "My Reports", "Appointments"].map((option) => (
          <MenuItem key={option} onClick={() => handleSelect(option)}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default OptionsMenu;
