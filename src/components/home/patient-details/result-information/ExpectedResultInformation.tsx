import { Box, Grid, Stack, Typography } from "@mui/material";
import InformationCardWrapper from "../../../common/InformationCardWrapper";

const ExpectedResultInformation = ({ daysLeft }: { daysLeft: number }) => {
  return (
    <InformationCardWrapper
      sx={{ padding: { xs: "12px 12px", md: "6px 24px" } }}
    >
      <Grid container alignItems="center" justifyContent="space-between">
        <Grid size={{ xs: 12, md: 6 }}>
          <Stack flexDirection="row" gap="10px">
            <Box component="img" src="/assets/icons/stay-tuned.svg" />
            <Box>
              <Typography
                sx={{
                  fontWeight: 500,
                  fontSize: "16px",
                  lineHeight: "24px",
                  letterSpacing: 0,
                }}
              >
                Stay tuned
              </Typography>
              <Typography
                fontSize="14px"
                color="#6B7280"
                sx={{
                  color: "#746C7A",
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: "20px",
                  letterSpacing: 0,
                }}
              >
                We are checking your
                <Typography
                  component="span"
                  sx={{
                    fontWeight: 400,
                    fontSize: "14px",
                    lineHeight: "20px",
                    letterSpacing: 0,
                  }}
                >
                  {" "}
                  Results
                </Typography>
              </Typography>
            </Box>
          </Stack>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <InformationCardWrapper
            sx={{
              padding: "12px 14px",
              cursor: "pointer",
              boxShadow: `
      0px 10px 12px 0px #EBEBEB,
      0px 3px 4px 0px #EBEBEB
    `,
              borderRadius: "16px",
              transition: "transform 0.3s ease-in-out", // smooth animation
              "&:hover": {
                transform: "scale(1.03)", // scale up by 5%
              },
            }}
          >
            <Stack
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
              gap="6px"
              flexWrap="wrap"
            >
              <Box>
                <Typography
                  sx={{
                    fontWeight: 500,
                    fontSize: "16px",
                    lineHeight: "24px",
                    letterSpacing: 0,
                  }}
                >
                  Expected Results
                </Typography>
                <Typography
                  fontSize="14px"
                  color="#6B7280"
                  sx={{
                    color: "#746C7A",
                    fontWeight: 400,
                    fontSize: "14px",
                    lineHeight: "150%",
                    letterSpacing: 0,
                  }}
                >
                  approximate time
                </Typography>
              </Box>

              <Stack flexDirection="row" gap="12px" alignItems="center">
                <Box component="img" src="/assets/icons/timer.svg" />
                <Stack flexDirection="row" gap="4px" alignItems="center">
                  <Typography
                    sx={{
                      fontWeight: 500,
                      fontSize: "22px",
                      lineHeight: "130%",
                      letterSpacing: 0,
                    }}
                  >
                    {daysLeft}
                  </Typography>
                  <Typography
                    component="span"
                    sx={{
                      fontWeight: 400,
                      fontSize: "14px",
                      lineHeight: "150%",
                      letterSpacing: 0,
                      color: "#746C7A",
                    }}
                  >
                    days left
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          </InformationCardWrapper>
          <Grid />
        </Grid>
      </Grid>
    </InformationCardWrapper>
  );
};

export default ExpectedResultInformation;
