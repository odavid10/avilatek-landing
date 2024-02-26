// project imports
import { Box, Divider, Grid, Typography, useTheme } from "@mui/material";

// project imports
import { weight } from "../weight";
import { spacing } from "../spacing";
import { UIChip } from "./Chip";
import { AppStore, PlayStore } from "../../assets";
import { Logo } from "./Logo";
import { colors } from "../colors";

const productsList: string[] = [
  "Overview",
  "Features",
  "Solutions",
  "Tutorials",
  "Pricing",
  "Releases",
];

const companyList: string[] = [
  "About us",
  "Careers",
  "Press",
  "News",
  "Media kit",
  "Contact",
];

export const Footer = () => {
  const theme = useTheme();

  return (
    <Box height={"400px"} padding={`${spacing["7xl"]} 80px`}>
      <Grid container justifyContent={"space-between"}>
        <Grid item xs={10} display={"flex"}>
          <div style={{ marginRight: "32px" }}>
            <Typography
              variant="h5"
              color="textPrimary"
              fontWeight={weight["semi-bold"]}
              mb={"16px"}
            >
              Product
            </Typography>
            {productsList.map((product) => (
              <Typography
                key={product}
                variant="h5"
                color={theme.palette.primary.dark}
                fontWeight={weight["semi-bold"]}
                mb={"12px"}
                display={product === "Solutions" ? "flex" : ""}
              >
                {product}{" "}
                {product === "Solutions" && (
                  <UIChip
                    width={"42px"}
                    height={"22px"}
                    variant="h6"
                    size="small"
                    style={{ marginLeft: "8px" }}
                  >
                    New
                  </UIChip>
                )}
              </Typography>
            ))}
          </div>
          <div>
            <Typography
              variant="h5"
              color="textPrimary"
              fontWeight={weight["semi-bold"]}
              mb={"16px"}
            >
              Company
            </Typography>
            {companyList.map((company) => (
              <Typography
                key={company}
                variant="h5"
                color={theme.palette.primary.dark}
                fontWeight={weight["semi-bold"]}
                mb={"12px"}
              >
                {company}
              </Typography>
            ))}
          </div>
        </Grid>
        <Grid item xs={1}>
          <Typography
            variant="h5"
            color="textPrimary"
            fontWeight={weight["semi-bold"]}
            mb={"16px"}
          >
            Get the app
          </Typography>

          <AppStore style={{ marginBottom: "16px" }} />
          <PlayStore />
        </Grid>
      </Grid>

      <Divider />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingTop: "36px",
        }}
      >
        <Logo />
        <Typography variant="h4" color={colors.textQuarterary}>
          © 2077 Untitled UI. All rights reserved.
        </Typography>
      </div>
    </Box>
  );
};
