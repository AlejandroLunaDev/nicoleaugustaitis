import Image from 'next/image';
import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';
import AboutText from './components/AboutText';
import FormationList from './components/FormationList';
import MotionWrapper from '@/shared/components/ui/MotionWrapper';
import { Button } from '@/shared/components/ui/button';

export default function About() {
  return (
    <section
    id='sobremim'
      className='px-5'
    >
      <div className='text-3xl lg:text-5xl text-center py-5'>
        <Link href='/' className='font-parisienne font-semibold capitalize text-primary'>
          nicole augustaitis
        </Link>
      </div>
      <div className='bg-primary text-white rounded-md p-5 lg:p-10'>
        <MotionWrapper
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ amount: 0.2 }}
        >
          <AboutText />
        </MotionWrapper>
        <MotionWrapper
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ amount: 0.2 }}
          className='flex flex-col lg:flex-row gap-8 mt-8'
        >
          <div className='w-full lg:h-[600px] flex h-auto flex-col lg:flex-row gap-4 bg-white shadow-lg rounded-lg text-black'>
            <div className='relative w-full h-80 lg:h-full md:h-[500px]'>
              <Image
                src='/images/nilivroup.png'
                alt='Nicole Augustaitis'
                className='rounded-md object-cover'
                fill
                style={{ objectPosition: 'top center' }}
              />
            </div>
            <div className='p-5'>
              <h4 className='text-lg lg:text-3xl mb-4 font-semibold'>
                Minha formação
              </h4>
              <FormationList />
              <a href='https://wa.me/5511948642252' className='hover:underline'>
                <Button
                  variant='default'
                  size='default'
                  className='text-white w-full mt-5 lg:mt-20'
                >
                  <FaWhatsapp className='h-5 w-5' />
                  Agendar consulta
                </Button>
              </a>
            </div>
          </div>
        </MotionWrapper>
      </div>
    </section>
  );
}
