import { Box } from "@mui/material";
interface IconWrapperProps {
  icon: string;
  isFirst: boolean;
}

const IconWrapper = ({ icon, isFirst }: IconWrapperProps) => {
  return (
    <Box
      sx={{
        padding: "15px",
        border: "0.6px solid #FFFFFF",
        bgcolor: isFirst ? " #0974FB" : "#FFFFFF4D",
        borderRadius: "30px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: `0px 2.38px 4.77px 0px rgba(0, 0, 0, 0.04), 
        inset 0px 0px 9.54px 0px white`,
        backdropFilter: "blur(62.7017px)",
        WebkitBackdropFilter: "blur(62.7017px)",
        cursor: "pointer",
        width: "60px",
        height: "60px",
      }}
    >
      <Box component="img" src={icon} alt="icon" />
    </Box>
  );
};

export default IconWrapper;
