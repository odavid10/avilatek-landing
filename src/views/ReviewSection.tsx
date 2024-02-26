// material-ui
import { Box, Grid, Rating, Typography, useTheme } from "@mui/material";

// project imports
import { radius, spacing, weight } from "../UI";

export const ReviewSection = () => {
  const theme = useTheme();

  return (
    <Box
      borderRadius={radius["4xl"]}
      bgcolor={theme.palette.primary.main}
      height={"448px"}
      maxWidth={"90%"}
      marginX={"auto"}
      mb={"160px"}
    >
      <Grid container>
        <Grid item xs={12} sm={6} md={4}>
          <img
            src="./assets/img/Image6.png"
            alt="Renee Wells"
            style={{
              width: "100%",
              height: "448px",
              borderTopLeftRadius: radius["4xl"],
              borderBottomLeftRadius: radius["4xl"],
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6} md={8} padding={spacing["7xl"]}>
          <Grid container>
            <Grid item xs={12}>
              <Rating name="review" value={5} readOnly />
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="h2"
                color="#FFF"
                fontWeight={weight.medium}
                mb={"32px"}
                maxWidth={"630px"}
              >
                Love the simplicity of the service and the prompt customer
                support. We can’t imagine working without it.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="subtitle1"
                color="#FFF"
                fontWeight={weight["semi-bold"]}
                mb={"48px"}
              >
                — Renee Wells
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="h4"
                color="#FFF"
                fontWeight={weight.regular}
                mb={"48px"}
              >
                Product Designer, Quotient
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
