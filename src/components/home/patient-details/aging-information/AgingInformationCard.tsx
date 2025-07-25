import { Box, Stack, Typography } from "@mui/material";
import InformationCardWrapper from "../../../common/InformationCardWrapper";

interface LeftSideContentTypes {
  icon: string;
  title: number | string;
}

interface RightSideContentTypes {
  title: string;
  description: string;
}
interface AgingInformationCardProps {
  heading: string;
  years?: boolean;
  leftSideContent: LeftSideContentTypes;
  rightSideContent: RightSideContentTypes;
}

const AgingInformationCard = ({
  heading,
  years,
  leftSideContent,
  rightSideContent,
}: AgingInformationCardProps) => {
  return (
    <InformationCardWrapper
      sx={{
        boxShadow: `
      inset 0px 0px 8px 0px #FFFFFF,
      0px 10px 12px 0px #EBEBEB,
      0px 3px 4px 0px #EBEBEB
    `,
        borderRadius: "16px",
        cursor: "pointer",
        transition: "transform 0.3s ease-in-out",
        "&:hover": {
          transform: "scale(1.02)",
        },
      }}
    >
      <Box
        sx={{ display: "flex", gap: "6px", alignItems: "baseline", mb: "8px" }}
      >
        <Typography
          sx={{
            fontWeight: 500,
            fontSize: "16px",
            lineHeight: "24px",
            letterSpacing: 0,
          }}
        >
          {heading}
        </Typography>
        <Box
          component="img"
          alt="Information Icon"
          src="/assets/icons/info.svg"
          width={12}
          height={12}
        />
      </Box>

      <Stack direction="row" alignItems="center" flexWrap="wrap" gap="8px">
        <Box sx={{ display: "flex", gap: "8px", alignItems: "baseline" }}>
          <Box component="img" src={leftSideContent.icon} />

          <Box
            sx={{
              display: "flex",
              gap: "2px",
              alignItems: "baseline",
              pr: "8px",
              borderRight: "1px solid #EBEBEB",
            }}
          >
            <Typography
              sx={{
                fontWeight: 500,
                fontSize: { xs: "26px", md: "36px" },
                lineHeight: "16px",
                letterSpacing: 0,
              }}
            >
              {leftSideContent.title}
            </Typography>

            {years && (
              <Typography
                sx={{
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: "14px",
                  letterSpacing: 0,
                  color: "#746C7A",
                }}
              >
                yrs
              </Typography>
            )}
          </Box>
        </Box>
        <Box sx={{}}>
          <Typography
            sx={{
              fontWeight: 500,
              fontSize: "13px",
              lineHeight: "20px",
              letterSpacing: 0,
            }}
          >
            {rightSideContent.title}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              fontWeight: 400,
              fontSize: "13px",
              lineHeight: "20px",
              letterSpacing: 0,
              color: "#575757",
            }}
          >
            {rightSideContent.description}
          </Typography>
        </Box>
      </Stack>
    </InformationCardWrapper>
  );
};

export default AgingInformationCard;
