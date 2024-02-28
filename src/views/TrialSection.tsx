// material-ui
import { Box, Grid, Typography, useTheme } from "@mui/material";

// project imports
import { weight, UIButton, radius, colors, spacing } from "../UI";
import { useMobileDevice } from "../hooks";

const widthResponsive = "100%";
const heigthResponsive = "160px";

export const TrialSection = () => {
  const theme = useTheme();
  const { isMobileDevice } = useMobileDevice();

  return (
    <Box
      bgcolor={theme.palette.grey[100]}
      padding={isMobileDevice ? "0 16px" : `${spacing["9xl"]} 80px`}
      minHeight={isMobileDevice ? "1284px" : "688px"}
      mb={isMobileDevice ? "65px" : "100px"}
    >
      <Grid container>
        <Grid
          item
          xs={12}
          sm={6}
          paddingY={isMobileDevice ? spacing["7xl"] : "113px"}
          display={"flex"}
          justifyContent={"center"}
        >
          <Grid container maxWidth={"576px"}>
            <Grid item xs={12}>
              <Typography
                variant={isMobileDevice ? "body2" : "body1"}
                color="text.primary"
                fontWeight={weight["semi-bold"]}
                mb={"20px"}
              >
                No long-term contracts. No catches.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant={isMobileDevice ? "subtitle1" : "h3"}
                color="text.secondary"
                fontWeight={weight.regular}
                mb={"48px"}
              >
                Start your 30-day free trial today.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Grid container>
                <Grid item xs={12} md={3} order={{ xs: 2, md: 1 }}>
                  <UIButton
                    fullWidth={isMobileDevice}
                    variant="contained"
                    sx={{
                      backgroundColor: "#FFF",
                      marginRight: "12px",
                      color: colors.buttonSecondary,
                      borderRadius: radius.md,
                      height: "48px",
                      textTransform: "none",
                      ":hover": { backgroundColor: "#FFF" },
                    }}
                  >
                    Learn more
                  </UIButton>
                </Grid>
                <Grid item xs={12} md={3} order={{ xs: 1, md: 2 }}>
                  <UIButton
                    fullWidth
                    variant="contained"
                    color="secondary"
                    sx={{
                      borderRadius: radius.md,
                      height: "48px",
                      textTransform: "none",
                      maxWidth: isMobileDevice ? "100%" : "129px",
                    }}
                  >
                    Get Started
                  </UIButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Grid container>
            <Grid item xs={12}>
              <Grid container spacing={2}>
                <Grid
                  item
                  xs={12}
                  sm={6}
                  display={"flex"}
                  justifyContent={"flex-end"}
                  alignItems={"flex-end"}
                >
                  <img
                    src={`/assets/img/Image${isMobileDevice ? 7 : 2}.png`}
                    alt="Image2"
                    width={isMobileDevice ? widthResponsive : "160px"}
                    height={heigthResponsive}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <img
                    src={`/assets/img/Image${isMobileDevice ? 8 : 3}.png`}
                    alt="Image3"
                    width={isMobileDevice ? widthResponsive : "160px"}
                    height={isMobileDevice ? heigthResponsive : "240px"}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} mt={"16px"}>
              <Grid container spacing={1}>
                <Grid
                  item
                  xs={12}
                  sm={4}
                  lg={4}
                  display={"flex"}
                  justifyContent={"flex-end"}
                >
                  <img
                    src={`/assets/img/Image${isMobileDevice ? 9 : 4}.png`}
                    alt="Image4"
                    width={"100%"}
                    height={isMobileDevice ? heigthResponsive : "128px"}
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={4}
                  lg={3}
                  display={"flex"}
                  justifyContent={"center"}
                >
                  <img
                    src={`/assets/img/Image${isMobileDevice ? 10 : 5}.png`}
                    alt="Image5"
                    width={"100%"}
                    height={isMobileDevice ? heigthResponsive : "240px"}
                    style={{
                      maxWidth: isMobileDevice ? widthResponsive : "160px",
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={4} lg={4}>
                  <img
                    src={`/assets/img/Image${isMobileDevice ? 11 : 1}.png`}
                    alt="Image1"
                    width={"100%"}
                    height={isMobileDevice ? heigthResponsive : "128px"}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
