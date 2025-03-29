import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import FAQitems from "@/(assets)/FAQ.json"

interface FAQItem {
  question: string;
  answer: string | React.ReactNode;
}
export default function FAQ(){
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold text-center mb-8 text-black">Frequently Asked Questions (FAQ)</h1>
      <div className="w-full max-w-6xl mx-auto rounded-lg overflow-hidden shadow-md bg-white p-6">
          {FAQitems.map((item, index) => (
            <Accordion key={index}>
              <AccordionSummary
                expandIcon={<ArrowDownwardIcon />}
                aria-controls="panel1-content"
                id="panel1-header" 
                className="border-b border-gray-200"
              >
                <Typography component="span">{item.question}</Typography>
              </AccordionSummary>

              <AccordionDetails className="text-left text-md bg-neutral-100 font-medium text-gray-900 py-4">
                <Typography className="text-gray-600 text-md pt-2 pb-4">
                  {item.answer}
                </Typography>
              </AccordionDetails>
              </Accordion>
          ))}
      </div>
    </div>
  );
};

