// material-ui
import { Box, Grid, Typography } from "@mui/material";

// project imports
import { weight } from "../UI";
import { UIChip } from "../UI/components/Chip";
import { IntegrationsCard } from "../components";
import { IntegrationsProps } from "../interfaces";
import { Chart, Team, Zap } from "../assets";

const features: IntegrationsProps[] = [
  {
    icon: <Team />,
    title: "Share team inboxes",
    subtitle:
      "Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop.",
  },
  {
    icon: <Zap />,
    title: "Deliver instant answers",
    subtitle:
      "An all-in-one customer service platform that helps you balance everything your customers need to be happy.",
  },
  {
    icon: <Chart />,
    title: "Manage your team with reports",
    subtitle:
      "Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks.",
  },
];

export const FeaturesSection = () => {
  return (
    <Box mt={"600px"} paddingX={"14%"}>
      <Grid container direction={"column"} alignItems={"center"} mb={"16px"}>
        <Grid item xs={12}>
          <UIChip>Features</UIChip>
        </Grid>
      </Grid>
      <Typography
        variant="h2"
        color="text.primary"
        fontWeight={weight["semi-bold"]}
        align="center"
        mb={"20px"}
      >
        Cutting-edge features for advanced analytics
      </Typography>

      <Typography
        variant="h5"
        color="text.secondary"
        fontWeight={weight.regular}
        align="center"
        mx={"auto"}
        maxWidth={"768px"}
        mb={"64px"}
      >
        Powerful, self-serve product and growth analytics to help you convert,
        engage, and retain more users. Trusted by over 4,000 startups.
      </Typography>
      <Grid
        container
        spacing={5}
        direction={"row"}
        justifyContent={"center"}
        mb={"100px"}
      >
        {features.map((features, index) => (
          <Grid item xs={12} sm={12} md={4} key={features.title}>
            <IntegrationsCard
              index={index}
              icon={features.icon}
              title={features.title}
              subtitle={features.subtitle}
              textButton="Learn more"
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
