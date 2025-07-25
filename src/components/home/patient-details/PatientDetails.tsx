import { Grid, Stack } from "@mui/material";
import ExpectedResultInformation from "./result-information/ExpectedResultInformation";
import PatientInformationWrapper from "./PatientInformationWrapper";
import AgingInformationCard from "./aging-information/AgingInformationCard";
import LifeDataInformationCard from "./lifedata-information/LifeDataInformationCard";
import TotalHealthInformationCard from "./total-health-information/TotalHealthInformationCard";
import {
  AGEING_DATA,
  LIVE_DATA,
  TOTAL_HEALTH_DATA,
} from "../../../constants/mockdata";

const PatientDetails = () => {
  return (
    <Stack
      gap="16px"
      sx={{
        pr: { xs: "16px", sm: "24px" },
        pt: { xs: "16px", md: 0 },
        pl: { xs: "16px", md: "0px" },
      }}
    >
      <ExpectedResultInformation daysLeft={3} />

      <PatientInformationWrapper
        header={{
          icon: "/assets/icons/aging-icon.svg",
          title: "Aging",
          description: "Tru Diagnostics",
        }}
      >
        <Grid
          container
          spacing={{
            xs: "8px",
            md: "16px",
          }}
        >
          {AGEING_DATA?.map((data, index) => (
            <Grid size={{ xs: 12, lg: 6 }} key={index}>
              <AgingInformationCard
                key={index}
                heading={data.heading}
                years={index === 0}
                leftSideContent={data.leftSideContent}
                rightSideContent={data.rightSideContent}
              />
            </Grid>
          ))}
        </Grid>
      </PatientInformationWrapper>

      <PatientInformationWrapper
        header={{
          icon: "/assets/icons/live-data-icon.svg",
          title: "Live Data",
        }}
      >
        <Grid container spacing={{ xs: "12px", md: "22px" }}>
          {LIVE_DATA?.map((data, index) => (
            <Grid size={{ xs: 12, md: 4 }} key={index}>
              <LifeDataInformationCard
                key={index}
                icon={data.icon}
                title={data.title}
                value={data.value}
                valueUnit={data.valueUnit}
              />
            </Grid>
          ))}
        </Grid>
      </PatientInformationWrapper>

      <PatientInformationWrapper
        header={{
          icon: "/assets/icons/total-health-icon.svg",
          title: "Total Health",
        }}
      >
        <Grid container spacing={{ xs: "8px", md: "16px" }}>
          {TOTAL_HEALTH_DATA?.map((data, index) => (
            <Grid size={{ xs: 12, md: 4 }} key={index}>
              <TotalHealthInformationCard
                icon={data.icon}
                ellipseIcon={data.ellipseIcon}
                title={data.title}
                value={data.value}
                checkedAgo={data.checkedAgo}
              />
            </Grid>
          ))}
        </Grid>
      </PatientInformationWrapper>
    </Stack>
  );
};

export default PatientDetails;
