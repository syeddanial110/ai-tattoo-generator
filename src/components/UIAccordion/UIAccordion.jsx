import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const UIAccordion = ({ arr }) => {
  return (
    <div className="border-2 border-grey-950 p-5">
      <Accordion type="single" collapsible>
        {arr.map((item, i) => {
          return (
            <AccordionItem value={i + 1} key={i}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
};

export default UIAccordion;
