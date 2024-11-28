// components/AccordionItemComponent.tsx

import { AccordionItem, AccordionTrigger, AccordionContent } from '@/shared/components/ui/accordion';

interface AccordionItemProps {
  question: string;
  answer: string;
  index: number;
}

const AccordionItemComponent = ({ question, answer, index }: AccordionItemProps) => {
  return (
    <AccordionItem value={`faq-${index}`}>
      <AccordionTrigger className="text-lg font-semibold no-underline hover:no-underline focus:no-underline hover:bg-primary hover:text-white rounded-md px-2 shadow">
        {question}
      </AccordionTrigger>
      <AccordionContent className="text-primary whitespace-pre-line">
        {answer}
      </AccordionContent>
    </AccordionItem>
  );
};

export default AccordionItemComponent;
