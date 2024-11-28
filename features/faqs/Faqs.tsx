'use client';

import { Accordion } from '@/shared/components/ui/accordion';
import AccordionItemComponent from './components/AccordionItemComponent';
import { faqs } from './faqsData';

export default function Faqs() {
  const accordionItems = faqs.map((faq, index) => (
    <AccordionItemComponent
      key={index}
      question={faq.question}
      answer={faq.answer}
      index={index}
    />
  ));

  return (
    <section id='faq' className='p-5 bg-white rounded-md shadow-md'>
      <header className='text-center mb-6'>
        <h2 className='text-3xl font-semibold text-accent'>Faq</h2>
        <p className='text-lg'>Principais dúvidas que recebo</p>
      </header>
      <Accordion type='single' collapsible className='px-8 space-y-4'>
        {accordionItems} {/* Aquí colocamos los elementos mapeados */}
      </Accordion>
    </section>
  );
}
