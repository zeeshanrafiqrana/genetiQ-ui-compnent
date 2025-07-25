import { Box, Stack, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { NAV_LINKS } from "../../constants/mockdata";

const NavLinks = ({ toggleMenu }: { toggleMenu?: () => void }) => {
  return (
    <Stack
      flexDirection={{
        xs: "column",
        md: "row",
      }}
      gap={{
        xs: "30px",
        lg: "44px",
      }}
    >
      {NAV_LINKS.map((link, index) => (
        <Box
          component={NavLink}
          key={link?.name}
          to={link?.url}
          sx={{
            textDecoration: "none",
          }}
          onClick={() => toggleMenu?.()}
        >
          <Typography
            component="span"
            sx={{
              position: "relative",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "24px",
              letterSpacing: 0,
              textDecoration: "none",
              color: "#000000",
              transition: "all 0.3s ease",

              "&:hover": {
                color: "primary.main",
              },

              "&::after": {
                content: '""',
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)",
                bottom: -10, // 10px gap from text
                width: "32px",
                height: "2px",
                borderRadius: "1px",
                backgroundColor: index === 0 ? "primary.main" : "transparent",
                transition: "background-color 0.3s ease",
              },

              "&:hover::after": {
                backgroundColor: "primary.main", // Active border color
              },
            }}
          >
            {link?.name}
          </Typography>
        </Box>
      ))}
    </Stack>
  );
};

export default NavLinks;
