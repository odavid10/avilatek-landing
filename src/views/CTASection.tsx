import { Box, useTheme, Grid, Typography } from "@mui/material";

// project imports
import { UIButton, colors, radius, spacing, weight } from "../UI";
import { useMobileDevice } from "../hooks";

export const CTASection = () => {
  const theme = useTheme();
  const { isMobileDevice } = useMobileDevice();

  return (
    <Box
      borderRadius={radius["4xl"]}
      bgcolor={theme.palette.primary.main}
      height={isMobileDevice ? "618px" : "400px"}
      maxWidth={"90%"}
      marginX={"auto"}
      mb={isMobileDevice ? "300px" : "96px"}
    >
      <Grid container>
        <Grid
          item
          xs={12}
          sm={6}
          md={8}
          my={"41px"}
          padding={isMobileDevice ? spacing["3xl"] : spacing["7xl"]}
        >
          <Grid container>
            <Grid item xs={12}>
              <Typography
                variant={isMobileDevice ? "body2" : "h2"}
                color="#FFF"
                fontWeight={weight["semi-bold"]}
                mb={isMobileDevice ? "16px" : "20px"}
              >
                Give us a shot
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant={isMobileDevice ? "subtitle1" : "h3"}
                color="#FFF"
                fontWeight={weight.regular}
                mb={"48px"}
              >
                Join over 4,000+ startups already growing with Untitled.
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
        <Grid item xs={12} sm={6} md={4}>
          <img
            src="./assets/img/Image1.png"
            alt="Give a shot"
            style={{
              width: "100%",
              height: "400px",
              borderTopRightRadius: isMobileDevice ? 0 : radius["4xl"],
              borderBottomRightRadius: radius["4xl"],
              borderBottomLeftRadius: isMobileDevice ? radius["4xl"] : 0,
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};
