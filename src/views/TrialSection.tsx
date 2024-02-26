// material-ui
import { Box, Grid, Typography, useTheme } from "@mui/material";

// project imports
import { weight, UIButton, radius, colors } from "../UI";

export const TrialSection = () => {
  const theme = useTheme();

  return (
    <Box
      bgcolor={theme.palette.grey[100]}
      padding={"96px 80px"}
      height={"688px"}
      mb={"100px"}
    >
      <Grid container>
        <Grid
          item
          xs={12}
          sm={6}
          paddingY={"113px"}
          display={"flex"}
          justifyContent={"center"}
        >
          <Grid container maxWidth={"576px"}>
            <Grid item xs={12}>
              <Typography
                variant="body1"
                color="text.primary"
                fontWeight={weight["semi-bold"]}
                mb={"20px"}
              >
                No long-term contracts. No catches.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="h3"
                color="text.secondary"
                fontWeight={weight.regular}
                mb={"48px"}
              >
                Start your 30-day free trial today.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <UIButton
                variant="contained"
                sx={{
                  backgroundColor: "#FFF",
                  marginRight: "12px",
                  color: colors.buttonSecondary,
                  borderRadius: radius.md,
                  height: "48px",
                  maxWidth: "129px",
                  textTransform: "none",
                }}
              >
                Learn more
              </UIButton>
              <UIButton variant="contained" color="secondary">
                Get Started
              </UIButton>
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
                    src="/assets/img/Image2.png"
                    alt="Image2"
                    width={"160px"}
                    height={"160px"}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <img
                    src="/assets/img/Image3.png"
                    alt="Image3"
                    width={"160px"}
                    height={"240px"}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} mt={"16px"}>
              <Grid container spacing={2}>
                <Grid
                  item
                  xs={12}
                  sm={5}
                  display={"flex"}
                  justifyContent={"flex-end"}
                >
                  <img
                    src="/assets/img/Image4.png"
                    alt="Image4"
                    width={"192px"}
                    height={"128px"}
                  />
                </Grid>
                <Grid item xs={12} sm={2}>
                  <img
                    src="/assets/img/Image5.png"
                    alt="Image5"
                    width={"160px"}
                    height={"240px"}
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <img
                    src="/assets/img/Image1.png"
                    alt="Image1"
                    width={"192px"}
                    height={"128px"}
                    style={{ marginLeft: "18px" }}
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
