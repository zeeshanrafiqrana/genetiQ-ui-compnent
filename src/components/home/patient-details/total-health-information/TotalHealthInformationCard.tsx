import { Box, Typography } from "@mui/material";
import InformationCardWrapper from "../../../common/InformationCardWrapper";

interface LifeDataInformationCardProps {
  icon: string;
  ellipseIcon: string;
  title: string;
  value: string | number;
  checkedAgo: string;
}

const TotalHealthInformationCard = ({
  icon,
  ellipseIcon,
  title,
  value,
  checkedAgo,
}: LifeDataInformationCardProps) => {
  return (
    <InformationCardWrapper
      sx={{
        boxShadow: `
inset 0px 0px 8px 0px #FFFFFF,
0px 10px 12px 0px #EBEBEB,
0px 3px 4px 0px #EBEBEB
`,
        border: "0.5px solid #FFFFFF",
        bgcolor: "#FFFFFF4D",
        borderRadius: "16px",
        padding: { xs: "12px", md: "14px" },
        display: "flex",
        flexDirection: "column",
        gap: { xs: "8px", md: "12px" },
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
          gap: { xs: "8px", md: "12px" },
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography
          sx={{
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "24px",
            letterSpacing: 0,
          }}
        >
          {title}
        </Typography>

        <Box component="img" src={icon} alt={title} width={46} height={46} />
      </Box>

      <Box sx={{ display: "flex", alignItems: "baseline", gap: "8px" }}>
        <Box
          component="img"
          src={ellipseIcon}
          alt="Ellipse"
          width={12}
          height={12}
        />
        <Box sx={{ display: "flex", alignItems: "baseline", gap: "2px" }}>
          <Typography
            component="span"
            sx={{
              fontWeight: 500,
              fontSize: { xs: "20px", md: "26px" },
              lineHeight: "22px",
              letterSpacing: 0,
            }}
          >
            {value}
          </Typography>
          <Typography
            component="span"
            sx={{
              fontWeight: 400,
              fontSize: "12px",
              lineHeight: "20px",
              letterSpacing: "-4%",
              color: "#808080",
            }}
          >
            /100
          </Typography>
        </Box>
      </Box>

      <Typography
        sx={{
          fontWeight: 400,
          fontSize: "10px",
          lineHeight: "12.8px",
          letterSpacing: 0,
          color: "#808080",
        }}
      >
        Checked {checkedAgo}
      </Typography>
    </InformationCardWrapper>
  );
};

export default TotalHealthInformationCard;
