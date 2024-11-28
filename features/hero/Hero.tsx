'use client';
import { Button } from '@/shared/components/ui/button';
import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';

export default function Hero() {
  return (
    <section className='flex flex-col lg:flex-row gap-2 px-7 py-5 lg:px-3 bg-gradient-to-b from-secondary to-white'>
      <div
        className='relative flex flex-col items-center justify-end h-[400px] lg:h-[650px] lg:w-1/3 rounded-md bg-cover bg-center animate-fade-in'
        style={{
          backgroundImage: 'url(/images/NicoleLanding.jpg)'
        }}
      >
        <div className='z-10 text-center flex flex-col gap-3'>
          <h3 className='text-2xl capitalize animate-fade-in-delay'>
            terapias cognitivo comportamentais
          </h3>
          <p className='animate-fade-in-delay'>CRP 06/91969</p>
        </div>
        <div className='absolute bottom-0 inset-x-0 bg-gradient-to-b from-transparent to-white h-[30%] rounded-md' />
      </div>

      <div className='text-center lg:text-left lg:justify-center py-4 flex flex-col gap-2 lg:gap-10 lg:w-2/3 lg:px-10 animate-slide-up'>
        <div className='lg:flex flex-col gap-2 lg:gap-10 animate-slide-up'>
          <h2 className='text-accent font-semibold lg:text-5xl'>
            Cuidando da sua saúde mental com empatia e ciência
          </h2>
          <p className='text-sm lg:text-lg'>
            Sou <span className='font-bold'>psicóloga clínica</span> com mais de
            10 anos de experiência. Especializada em Terapia
            Cognitivo-Comportamental, ofereço atendimento{' '}
            <span className='font-bold'>online</span> com foco no seu bem-estar
            emocional.
          </p>
        </div>

        <div className='flex flex-col lg:flex-row gap-2 lg:justify-center animate-slide-up'>
          <Link
            href='https://wa.me/5511948642252'
            target='_blank'
            className='hover:underline'
          >
            <Button
              variant='default'
              size='default'
              className='text-white w-[200px]'
            >
              <FaWhatsapp className='h-5 w-5' />
              Agendar consulta
            </Button>
          </Link>
          <Link href='#sessoes'>
            <Button
              variant='default'
              size='default'
              className='text-primary w-[200px] hover:text-white bg-transparent border border-primary'
            >
              Saiba mais
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
