import { Box } from "@mui/material";
import OptionsMenu from "./OptionsMenu";

const PatientAvatar = () => {
  return (
    <Box>
      <Box
        sx={{
          px: { xs: "16px", sm: "24px" },
        }}
      >
        <OptionsMenu />
      </Box>

      <Box
        sx={{
          backgroundImage: "url(/assets/images/patient.png)",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: "100%",
          height: { xs: "80vh", md: "100vh" },
          maxHeight: "1000px",
          position: "relative",
        }}
      >
        <Box
          component="img"
          src="/assets/images/heatmap.svg"
          sx={{
            position: "absolute",
            right: { xs: 16, sm: 40, md: 60, lg: 90, xl: 220 },
            bottom: { xs: 40, sm: 60, md: 80, lg: 100 },
            width: { xs: "100px", sm: "120px", md: "150px", lg: "190px" },
            height: "auto",
            maxHeight: "184px",
            objectFit: "contain",
          }}
        />
      </Box>
    </Box>
  );
};

export default PatientAvatar;
