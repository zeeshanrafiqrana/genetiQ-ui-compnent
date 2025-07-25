import { Container, Grid } from "@mui/material";
import PatientAvatar from "../components/home/patient-avatar/PatientAvatar";
import PatientDetails from "../components/home/patient-details/PatientDetails";

const HomePage = () => {
  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{
        paddingTop: "24px",
        maxWidth: "1560px",
        maxHeight: { xs: "auto", xls: "92.7vh", xl: "unset" },
        overflow: { xs: "unset", xls: "hidden", xl: "unset" },
      }}
    >
      <Grid container>
        <Grid size={{ xs: 12, md: 6 }}>
          <PatientAvatar />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <PatientDetails />
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage;
