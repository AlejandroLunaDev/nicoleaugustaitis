
import { Button } from '../ui/button';
import { FaWhatsapp } from 'react-icons/fa';
export default function Hero() {
  return (
    <div className=' flex flex-col lg:flex-row gap-2 px-7 py-5 lg:px-3 bg-gradient-to-b from-secondary to-white'>
      <div
        className='relative flex flex-col items-center justify-end h-[400px] lg:h-[650px] lg:w-1/3 rounded-md bg-cover bg-center'
        style={{
          backgroundImage: 'url(/images/NicoleLanding.jpg)'
        }}
      >
        <div className='z-10 text-center flex flex-col gap-3'>
          <h1 className='text-2xl capitalize'>
            terapias cognitivo comportamentais
          </h1>
          <p>CRP 06/91969</p>
        </div>
        {/* Gradiente sobre la imagen */}
        <div className='absolute bottom-0 inset-x-0 bg-gradient-to-b from-transparent to-white h-[30%] rounded-md' />
      </div>
      <div className='text-center lg:text-left lg:justify-center py-4 flex flex-col gap-2 lg:gap-10 lg:w-2/3 lg:px-10'>
        <div className='lg:flex flex-col gap-2 lg:gap-10'>
          <h2 className='text-accent font-semibold lg:text-5xl'>
            Cuidando da sua saúde mental com empatia e ciência
          </h2>
          <p className='text-sm lg:text-lg '>
            Sou <span className='font-bold'>psicóloga clinica</span> com mais de
            10 anos de experiência, especializada em Terapia
            Cognitivo-Comportamental, atendimento{' '}
            <span className='font-bold'>online</span> e acolhimento empático
            para promover bem-estar mental e emocional de forma eficaz e
            respeitosa.
          </p>
        </div>
        <div className='flex flex-col lg:flex-row gap-2 lg:justify-center'>
        <a href='https://wa.me/5511948642252' className='hover:underline'>
          <Button variant='default' size='default' className='text-white w-[200px]'>
            <FaWhatsapp className='h-5 w-5' />
            Agendar consulta
          </Button>
        </a>
        <a href='#sessoes'>
          <Button
            variant='default'
            size='default'
            className='text-primary w-[200px] hover:text-white bg-transparent border border-primary'
          >
            Saiba mais
          </Button>
        </a>
        </div>
      </div>
    </div>
  );
}
