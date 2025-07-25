import { Box, Typography } from "@mui/material";
import InformationCardWrapper from "../../../common/InformationCardWrapper";

interface LifeDataInformationCardProps {
  icon: string;
  title: string;
  value: string | number;
  valueUnit: string;
}

const LifeDataInformationCard = ({
  icon,
  title,
  value,
  valueUnit,
}: LifeDataInformationCardProps) => {
  return (
    <InformationCardWrapper
      sx={{
        boxShadow: `
    inset 0px 0px 8px 0px #FFFFFF,
    0px 10px 12px 0px #EBEBEB,
    0px 3px 4px 0px #EBEBEB
  `,
        borderRadius: "16px",
        padding: { xs: "12px", md: "20px" },
        display: "flex",
        flexDirection: "column",
        gap: { xs: "10px", md: "18px" },
        cursor: "pointer",
        transition: "transform 0.3s ease-in-out",
        "&:hover": {
          transform: "scale(1.03)",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: { xs: "8px", md: "16px" },
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            borderRadius: "15px",
            padding: "15px",
            bgcolor: "#FFFFFF",
            boxShadow: "2.51px 7.54px 27.93px -3.63px rgba(22, 52, 80, 0.10)",
            maxWidth: "56px",
            maxHeight: "56px",
          }}
        >
          <Box component="img" src={icon} alt={title} />
        </Box>

        <Typography
          sx={{
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "100%",
            letterSpacing: 0,
          }}
        >
          {title}
        </Typography>
      </Box>

      <Box sx={{ display: "flex", alignItems: "baseline", gap: "4px" }}>
        <Typography
          sx={{
            fontWeight: 500,
            fontSize: { xs: "22px", md: "32px" },
            lineHeight: "100%",
            letterSpacing: 0,
            color: "#272927",
          }}
        >
          {value}
        </Typography>
        <Typography
          sx={{
            fontWeight: 500,
            fontSize: "16px",
            lineHeight: "100%",
            letterSpacing: 0,
            color: "#818181",
          }}
        >
          {valueUnit}
        </Typography>
      </Box>
    </InformationCardWrapper>
  );
};

export default LifeDataInformationCard;
