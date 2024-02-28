// material-ui
import { Box, Grid, Rating, Typography, useTheme } from "@mui/material";

// project imports
import { radius, spacing, weight } from "../UI";
import { useMobileDevice } from "../hooks";

export const ReviewSection = () => {
  const theme = useTheme();
  const { isMobileDevice } = useMobileDevice();

  return (
    <Box
      borderRadius={radius["4xl"]}
      bgcolor={theme.palette.primary.main}
      height={isMobileDevice ? "670px" : "448px"}
      maxWidth={"90%"}
      marginX={"auto"}
      mb={isMobileDevice ? "112px" : "160px"}
    >
      <Grid container>
        <Grid item xs={12} sm={6} md={4}>
          <img
            src="./assets/img/Image6.png"
            alt="Renee Wells"
            style={{
              width: "100%",
              height: isMobileDevice ? "280px" : "448px",
              borderTopLeftRadius: radius["4xl"],
              borderBottomLeftRadius: isMobileDevice ? 0 : radius["4xl"],
              borderTopRightRadius: isMobileDevice ? radius["4xl"] : 0,
            }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={8}
          padding={isMobileDevice ? "12px" : spacing["7xl"]}
        >
          <Grid container>
            <Grid item xs={12}>
              <Rating name="review" value={5} readOnly />
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant={isMobileDevice ? "subtitle2" : "h2"}
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
                mb={"4px"}
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
