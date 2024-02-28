import { Box, Typography } from "@mui/material";

// project imports
import { weight } from "../UI";
import { Faqs } from "../interfaces";
import { FaqAccordion } from "../components";
import { useMobileDevice } from "../hooks";

const FAQS: Faqs[] = [
  {
    title: "Is there a free trial available?",
    detail:
      "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    title: "Can I change my plan later?",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
  {
    title: "What is your cancellation policy?",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
  {
    title: "Can other info be added to an invoice?",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
  {
    title: "How does billing work?",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
  {
    title: "How do I change my account email?",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
];

export const FAQSection = () => {
  const { isMobileDevice } = useMobileDevice();

  return (
    <Box paddingX={"14%"} mb={isMobileDevice ? "128px" : "200px"}>
      <Typography
        variant={isMobileDevice ? "body2" : "h2"}
        color="text.primary"
        fontWeight={weight["semi-bold"]}
        align="center"
        mb={"20px"}
      >
        Frequently asked questions
      </Typography>

      <Typography
        variant={isMobileDevice ? "subtitle1" : "h5"}
        color="text.secondary"
        fontWeight={weight.regular}
        align="center"
        mx={"auto"}
        maxWidth={"768px"}
        mb={isMobileDevice ? "48xp" : "64px"}
      >
        Everything you need to know about the product and billing.
      </Typography>

      {FAQS.map((faq) => (
        <FaqAccordion key={faq.title} faq={faq} />
      ))}
    </Box>
  );
};
