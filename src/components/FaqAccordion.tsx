import { useState } from "react";

// material-ui
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";

// project imports
import { MinusIcon, PlusIcon } from "../assets";
import { weight } from "../UI";
import { Faqs } from "../interfaces";

interface Props {
  faq: Faqs;
}

export const FaqAccordion = ({ faq }: Props) => {
  const [expanded, setExpanded] = useState<string | false>(
    `panel-Is there a free trial available?`
  );

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Accordion
      expanded={expanded === `panel-${faq.title}`}
      onChange={handleChange(`panel-${faq.title}`)}
      sx={{ boxShadow: "none" }}
    >
      <AccordionSummary
        aria-controls="panel1-content"
        id={faq.title}
        expandIcon={
          expanded === `panel-${faq.title}` ? <MinusIcon /> : <PlusIcon />
        }
        sx={{
          "& .MuiAccordionSummary-root": {
            minHeight: "84px",
          },
        }}
      >
        <Typography
          variant="subtitle1"
          color="text.primary"
          fontWeight={weight.medium}
          my={"24px"}
        >
          {faq.title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography
          variant="h4"
          color={"text.secondary"}
          fontWeight={weight.regular}
        >
          {faq.detail}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};
