import { Box, useTheme, Grid, Typography } from "@mui/material";

// project imports
import { UIButton, colors, radius, spacing, weight } from "../UI";

export const CTASection = () => {
  const theme = useTheme();

  return (
    <Box
      borderRadius={radius["4xl"]}
      bgcolor={theme.palette.primary.main}
      height={"400px"}
      maxWidth={"1216px"}
      marginX={"auto"}
      mb={"96px"}
    >
      <Grid container>
        <Grid item xs={12} sm={6} md={8} my={"41px"} padding={spacing["7xl"]}>
          <Grid container>
            <Grid item xs={12}>
              <Typography
                variant="h2"
                color="#FFF"
                fontWeight={weight["semi-bold"]}
                mb={"20px"}
              >
                Give us a shot
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography
                variant="h3"
                color="#FFF"
                fontWeight={weight.regular}
                mb={"48px"}
              >
                Join over 4,000+ startups already growing with Untitled.
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
        <Grid item xs={12} sm={6} md={4}>
          <img
            src="./assets/img/Image1.png"
            alt="Give a shot"
            style={{
              width: "100%",
              maxWidth: "480px",
              height: "400px",
              borderTopRightRadius: radius["4xl"],
              borderBottomRightRadius: radius["4xl"],
              marginLeft: "1px",
            }}
          />
        </Grid>
      </Grid>
    </Box>
  );
};
