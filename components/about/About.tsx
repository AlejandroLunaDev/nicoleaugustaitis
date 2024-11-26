import Image from 'next/image';
import Link from 'next/link';
import { FaCheck, FaWhatsapp } from 'react-icons/fa';
import { Button } from '../ui/button';

export default function About() {
  return (
    <div className='px-5'>
      <div className='text-3xl lg:text-5xl text-center py-5'>
        <Link href='/' className='font-parisienne capitalize text-primary'>
          nicole augustaitis
        </Link>
      </div>
      <div className='bg-primary text-white rounded-md p-5 lg:p-10'>
        <div className='flex flex-col gap-5'>
          <h2 className='text-4xl lg:text-6xl'>Sobre mim</h2>
          <p className='text-sm lg:text-lg leading-relaxed'>
            Olá, sou Nicole, psicóloga clínica especializada em Terapia
            Cognitivo-Comportamental. Minha trajetória profissional começou na
            área de Recursos Humanos, onde atuei por 13 anos, desenvolvendo um
            olhar sensível para o cuidado e o desenvolvimento das pessoas. Há 10
            anos, realizei meu sonho de migrar para a Psicologia Clínica, e
            desde então, dedico-me a ajudar pacientes a construir uma vida
            emocionalmente mais equilibrada e saudável. Minha abordagem é
            pautada no acolhimento sem julgamentos e na construção de
            estratégias práticas para promover bem-estar mental e emocional. Com
            o avanço dos atendimentos online, percebi que essa modalidade pode
            ser tão eficaz e acolhedora quanto o presencial. Hoje, atendo
            exclusivamente de forma virtual, criando um espaço seguro para
            reflexão e crescimento.
          </p>
        </div>
        <div className='flex flex-col lg:flex-row gap-8 mt-8'>
          <div className='w-full lg:h-[600px]  flex h-auto flex-col lg:flex-row gap-4  bg-white shadow-lg rounded-lg  text-black'>
            <div className='relative w-full h-80 lg:h-full md:h-[500px]	'>
              <Image
                src='/images/librofinal.jpg'
                alt='Nicole Augustaitis'
                className='rounded-md object-cover '
                fill
              />
            </div>
            <div className='p-5'>
              <h2 className='text-lg lg:text-3xl mb-4 text-accent font-semibold'>
                Minha formação
              </h2>
              <div className='flex flex-col gap-4 text-sm lg:text-lg'>
                {[
                  'Graduação em Psicologia',
                  'Formação em Terapia Cognitivo-Comportamental (CETCC/SP)',
                  'Formação em Terapia Cognitivo-Comportamental (Grupo PBE - por Fernanda Landeiro)',
                  'Educação Continuada na Prática Clínica (Fernanda Landeiro - FLNC Cursos Digitais)',
                  'Pós Graduanda em PBE: Terapias Cognitivo-Comportamentais (Grupo PBE - por Fernanda Landeiro)'
                ].map((text, index) => (
                  <div key={index} className='flex items-center gap-3'>
                    <div className='w-6 h-6 lg:w-10 lg:h-10 flex items-center justify-center text-primary bg-white rounded-full'>
                      <FaCheck />
                    </div>
                    <p>{text}</p>
                  </div>
                ))}
              </div>
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
        </div>
      </div>
    </div>
  );
}
