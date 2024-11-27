'use client';

import { useState } from 'react';
import {
  FaChevronLeft,
  FaChevronRight,
} from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { renderStars } from './components/RenderStars';

interface Review {
  author_name: string;
  rating: number;
  text: string;
}

const reviews: Review[] = [
  {
    author_name: 'Anne Izaquiele',
    rating: 5,
    text: 'Faz algum tempo que faço terapia em diferentes momentos da minha vida. Encontrei a Nicole no Instagram, gostei da sua voz suave, das suas publicações e do seu jeito acolhedor... Estava em um processo pessoal, ela me acolheu e me ajudou nesse caminho... O autoconhecimento é fundamental para o nosso crescimento e compreensão dos nossos sentimentos e emoções. Nicole me ajudou a ser mais paciente e, acima de tudo, a não me preocupar tanto com coisas inúteis, a analisar melhor. Também sou psicóloga, e sempre precisamos "nos cuidar primeiro, para cuidar dos outros". Nicole é uma profissional incrível, obrigada por tudo.'
  },
  {
    author_name: 'Julia Vitória',
    rating: 5,
    text: 'Conheci a Nicole pelas redes sociais, seu trabalho foi fundamental para o meu crescimento, ela sempre foi muito dedicada ao trabalho, me ouviu sem me julgar. Minha vida mudou, amadureci, me tornei uma pessoa mais flexível, aprendi muito sobre mim, meus sentimentos, pensamentos e ações. A Nicole foi essencial nesse processo, uma excelente profissional, recomendo sem nenhuma dúvida.'
  },
  {
    author_name: 'Vivian Mamede',
    rating: 5,
    text: 'Nicole é uma profissional doce e excelente. Foi com ela que tive meu primeiro contato com a TCC, e que incrível foi a minha evolução e mudança em tão pouco tempo. Com as tarefas semanais, moldam-se antigos comportamentos e dá-se oportunidade para novos, buscando sempre a nossa melhor versão.'
  },
  {
    author_name: 'Natália Larios',
    rating: 5,
    text: 'Fiz terapia por mais de 3 anos com a Dra. Nicole e recomendo muito. Nesses 3 anos de tratamento, me tornei uma pessoa muito melhor, mais madura, consegui enfrentar muitas situações difíceis graças a todas as sessões que fizemos. Pretendo voltar à terapia e, com certeza, não procuraria outra profissional que não ela, por toda sua profissionalidade e dedicação.'
  }
];




export default function ReviewsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex(prevIndex =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className='flex flex-col items-center gap-4 p-4'>
      <header className='text-center'>
        <h2 className='text-3xl font-semibold text-primary'>Depoimentos</h2>
      </header>
      <Card className='w-full max-w-md p-2 text-center overflow-hidden'>
        <div className='flex flex-col items-center justify-between'>
          <div className='mt-4'>
            {renderStars(reviews[currentIndex].rating)}
          </div>
          <span className='text-xs lg:text-lg font-semibold'>
            Avaliaçao 5.0 dos meus pacientes
          </span>

            <div className='flex items-center overflow-hidden mt-4'>
              <Button onClick={handlePrev} variant='ghost'>
                <FaChevronLeft size={24} />
              </Button>
              
          <motion.div
            key={currentIndex}
            initial={{ x: direction === 1 ? 300 : -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: direction === 1 ? -300 : 300, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 100, damping: 20 }}
            className='flex flex-col items-center w-full mx-4 max-h-[150px] overflow-y-scroll'
          >
              <p className='mt-2 text-left text-xs lg:text-md text-primary'>
                {reviews[currentIndex].text}
              </p>
              </motion.div>
              <Button onClick={handleNext} variant='ghost'>
                <FaChevronRight size={24} />
              </Button>
            </div>
    
        </div>
      </Card>
    </div>
  );
}
