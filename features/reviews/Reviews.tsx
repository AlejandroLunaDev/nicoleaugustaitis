'use client';
import { reviews } from './reviewsData';
import { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { renderStars } from './components/RenderStars';
import { Card } from '@/shared/components/ui/card';
import { Button } from '@/shared/components/ui/button';





export default function ReviewsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(true);

  const handlePrev = () => {
    setDirection(!direction);
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setDirection(!direction);
    setCurrentIndex(prevIndex =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section
      className='flex flex-col items-center gap-4 p-4'
      id='depoimentos'
    >
      <header className='text-center'>
        <h2 className='text-3xl font-semibold text-primary'>Depoimentos</h2>
      </header>
      <Card className='w-full  p-2 text-center overflow-hidden lg:h-[400px]'>
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

            <div
              key={currentIndex}
             
              className='flex flex-col items-center w-full mx-4 max-h-[150px] lg:h-[400px]  overflow-y-scroll lg:overflow-y-auto'
            >
              <p className='mt-2 text-left text-xs lg:text-xl text-primary'>
                {reviews[currentIndex].text}
              </p>
            </div>

            <Button onClick={handleNext} variant='ghost'>
              <FaChevronRight size={24} />
            </Button>
          </div>
        </div>
      </Card>
    </section>
  );
}
