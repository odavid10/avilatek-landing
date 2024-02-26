// material-ui
import { Grid, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

// project import
import { UIButton, weight } from "../UI";
import { IntegrationsProps as Pros } from "../interfaces";

export const IntegrationsCard = ({
  title,
  subtitle,
  icon,
  index = 0,
  textButton,
}: Pros) => {
  return (
    <Grid
      container
      direction={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      spacing={2}
      maxWidth={"384px"}
      mt={index > 2 ? "20px" : 0}
    >
      <Grid item xs={12}>
        {icon}
      </Grid>
      <Grid item xs={12}>
        <Typography
          variant="h3"
          color="textPrimary"
          fontWeight={weight["semi-bold"]}
          align="center"
        >
          {title}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography
          variant="h4"
          color="textPrimary"
          fontWeight={weight.regular}
          align="center"
        >
          {subtitle}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <UIButton
          variant="text"
          sx={{
            width: "156px",
            height: "24px",
            textTransform: "none",
            marginTop: "20px",
          }}
        >
          {textButton} <ArrowForwardIcon style={{ marginLeft: "12px" }} />
        </UIButton>
      </Grid>
    </Grid>
  );
};
