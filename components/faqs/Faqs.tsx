'use client';

import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';

export default function Faqs() {
  const faqs = [
    {
      question: 'Quando devo procurar a terapia?',
      answer:
        'Quando perceber que sua saúde mental não está bem. A saúde emocional diz respeito à forma como lidamos com nossas emoções difíceis e obstáculos da vida. Esses 4 sinais podem indicar que sua saúde mental não está bem:\n' +
        '1. Dificuldade para lidar com as suas emoções (guardando demais ou expressando de forma muito intensa e desproporcional)\n' +
        '2. Ter sentimentos persistentes de tristeza\n' +
        '3. Isolamento social (se afastando de pessoas que antes gostava de estar perto)\n' +
        '4. Preocupações excessivas (pode indicar ansiedade disfuncional)',
    },
    {
      question: 'O que falar na sessão de terapia?',
      answer:
        'A sessão de terapia é um momento seu e pra você. É aquele momento aonde você para e presta atenção em você mesma, no que você anda pensando, sentindo e fazendo no seu dia a dia. Reflete sobre o que te faz bem e o que não faz, buscando se conhecer e aprender a enfrentar de forma saudável tanto as questões que te incomodam quanto os desafios da vida.',
    },
    {
      question: 'O que é a TCC (Terapia Cognitiva Comportamental)?',
      answer:
        'É um tipo de terapia concentrada no aqui e agora, focada em solução de problemas, e baseada na maneira como o paciente sente, pensa e se comporta com relação a uma situação que causa dor, tristeza ou qualquer outra sensação de incômodo. O objetivo principal é identificar padrões de comportamento, pensamentos e crenças que estão na origem dos problemas, e construir junto do paciente novas formas de pensar. Essas mudanças trazem bem estar mental e emocional.',
    },
    {
      question: 'Por que escolher a TCC?',
      answer:
        'Apresento aqui 04 motivos para você escolher a TCC:\n' +
        '1. Porque é uma terapia com foco na alta, ou seja, o objetivo dessa terapia é que o paciente aprenda a ser seu próprio paciente. Assim, o paciente tem alta quando aprende a lidar com suas questões e se mantém estável.\n' +
        '2. Porque é uma terapia com foco no momento presente. Durante o tratamento, o terapeuta irá ensinar técnicas e orientar mudanças para praticar no dia a dia, incentivando a autoconfiança e o autoconhecimento.\n' +
        '3. Porque apresenta evidência científica. Já houveram mais de 300 estudos científicos que validaram sua eficácia em vários transtornos, como ansiedade e depressão.\n' +
        '4. Porque apresenta resultados mais rápidos, quando comparados a outros tipos de terapia.',
    },
  ];

  return (
    <section className="p-5 bg-white rounded-md shadow-md">
      <header className="text-center mb-6">
        <h2 className="text-3xl font-semibold text-accent">Faq</h2>
        <p className="text-lg">Principais dúvidas que recebo</p>
      </header>
      <Accordion type="single" collapsible className="px-8 space-y-4">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`faq-${index}`}>
            <AccordionTrigger className="text-lg font-semibold no-underline hover:no-underline focus:no-underline hover:bg-primary hover:text-white rounded-md px-2 shadow">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-primary whitespace-pre-line">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
