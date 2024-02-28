import { Box, Grid, Typography } from "@mui/material";

// project imports
import { weight } from "../UI";
import { IntegrationsCard } from "../components";
import { IntegrationsProps } from "../interfaces";
import { Drive, Dropbox, Intercom, Jira, Notion, Slack } from "../assets";
import { UIChip } from "../UI/components/Chip";
import { useMobileDevice } from "../hooks";

const integrations: IntegrationsProps[] = [
  {
    icon: <Notion />,
    title: "Notion integration",
    subtitle:
      "Work faster and smarter by integrating directly with Notion, right in the app.",
  },
  {
    icon: <Slack />,
    title: "Slack integration",
    subtitle:
      "Work faster and smarter by integrating directly with Slack, right in the app.",
  },
  {
    icon: <Drive />,
    title: "Google Drive integration",
    subtitle:
      "Work faster and smarter by integrating directly with Google Drive, right in the app.",
  },
  {
    icon: <Intercom />,
    title: "Intercom integration",
    subtitle:
      "Work faster and smarter by integrating directly with Intercom, right in the app.",
  },
  {
    icon: <Jira />,
    title: "Jira integration",
    subtitle:
      "Work faster and smarter by integrating directly with Jira, right in the app.",
  },
  {
    icon: <Dropbox />,
    title: "Dropbox integration",
    subtitle:
      "Work faster and smarter by integrating directly with Dropbox, right in the app.",
  },
];

export const IntegrationsSection = () => {
  const { isMobileDevice } = useMobileDevice();

  return (
    <Box mt={isMobileDevice ? "500px" : "600px"} paddingX={"14%"}>
      <Grid container direction={"column"} alignItems={"center"} mb={"16px"}>
        <Grid item xs={12}>
          <UIChip>Integrations</UIChip>
        </Grid>
      </Grid>
      <Typography
        variant={isMobileDevice ? "body2" : "h2"}
        color="text.primary"
        fontWeight={weight["semi-bold"]}
        align="center"
        mb={"20px"}
      >
        Get more value from your tools
      </Typography>

      <Typography
        variant={isMobileDevice ? "subtitle1" : "h3"}
        color="text.secondary"
        fontWeight={weight.regular}
        align="center"
        mx={"auto"}
        maxWidth={"768px"}
        mb={"64px"}
      >
        Connect your tools, connect your teams. With over 100 apps already
        available in our directory, your team’s favourite tools are just a click
        away.
      </Typography>
      <Grid
        container
        spacing={5}
        direction={"row"}
        justifyContent={"center"}
        mb={"100px"}
      >
        {integrations.map((app, index) => (
          <Grid item xs={12} sm={12} md={4} key={app.title}>
            <IntegrationsCard
              index={index}
              icon={app.icon}
              title={app.title}
              subtitle={app.subtitle}
              textButton="View integration"
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
