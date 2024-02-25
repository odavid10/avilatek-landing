import { Box, useTheme, Typography, Grid } from "@mui/material";

// project imports
import { UIButton, UITextfield, radius, spacing, weight } from "../UI";

// assests
import { Grafico } from "../assets";

export const MainSection = () => {
  const theme = useTheme();

  return (
    <Box
      borderRadius={radius["4xl"]}
      bgcolor={theme.palette.primary.main}
      height={"674px"}
      marginX={"120px"}
      marginTop={"32px"}
      sx={{
        padding: `${spacing["9xl"]} ${spacing["4xl"]} 192px ${spacing["4xl"]}`,
      }}
    >
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        mb={"96px"}
      >
        <Grid item xs={12}>
          <Typography
            variant="h1"
            color="#FFF"
            fontWeight={weight["semi-bold"]}
            maxWidth={"768px"}
            align="center"
            marginBottom={"24px"}
          >
            Grow your users. Smarter.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="h3"
            color="#FFF"
            fontWeight={weight.regular}
            maxWidth={"768px"}
            align="center"
            marginBottom={"48px"}
          >
            Powerful, self-serve product and growth analytics to help you
            convert, engage, and retain more users. Trusted by over 4,000
            startups.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={8}>
              <UITextfield
                fullWidth
                id="email"
                placeholder="Enter your email"
                sx={{
                  backgroundColor: "#FFF",
                  borderRadius: radius.md,
                  marginBottom: "6px",
                  "& .MuiInputBase-input": {
                    height: "18px",
                  },
                }}
              />
              <Typography variant="h5" color="#FFF" width={"335px"}>
                We care about your data in our{" "}
                <span style={{ textDecorationLine: "underline" }}>
                  privacy policy
                </span>
                .
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <UIButton
                fullWidth
                variant="contained"
                color="secondary"
                sx={{ marginLeft: "16px", height: "48px" }}
              >
                <Typography
                  variant="h5"
                  color="#FFF"
                  fontWeight={weight["semi-bold"]}
                  sx={{ textTransform: "none" }}
                >
                  Get started
                </Typography>
              </UIButton>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        direction={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Grid xs={12}>
          <Grafico />
        </Grid>
      </Grid>
    </Box>
  );
};
