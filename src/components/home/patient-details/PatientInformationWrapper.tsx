import { Box, Stack, Typography } from "@mui/material";
import InformationCardWrapper from "../../common/InformationCardWrapper";

interface HeaderTypes {
  icon: string;
  title: string;
  description?: string;
}

interface PatientInformationWrapperProps {
  header: HeaderTypes;
  children?: React.ReactNode;
}

const PatientInformationWrapper = ({
  header,
  children,
}: PatientInformationWrapperProps) => {
  return (
    <InformationCardWrapper sx={{ borderRadius: "16px" }}>
      <Stack gap={{ xs: "20px", md: "30px" }}>
        {/*  Header */}
        <Stack flexDirection="row" gap="12px" alignItems="center">
          <Box
            component="img"
            src={header.icon}
            alt="icon"
            width={36}
            height={36}
          />

          <Box>
            <Typography
              component="span"
              sx={{
                fontWeight: 400,
                fontSize: { xs: "18px", md: "24px" },
                lineHeight: { xs: "24px", md: "32px" },
                letterSpacing: 0,
              }}
            >
              {header.title}
            </Typography>
            {header.description && (
              <Typography
                component="span"
                sx={{
                  fontWeight: 400,
                  fontSize: "14px",
                  lineHeight: { xs: "24px", md: "32px" },
                  letterSpacing: 0,
                  color: "#0000008C",
                  ml: "8px",
                }}
              >
                {header.description}
              </Typography>
            )}
          </Box>
        </Stack>

        {children}
      </Stack>
    </InformationCardWrapper>
  );
};

export default PatientInformationWrapper;
