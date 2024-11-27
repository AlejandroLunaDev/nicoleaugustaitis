'use client';

import Image from 'next/image';
import { FaCheck } from 'react-icons/fa';

export default function InfoTeraphy() {
  const sessions = [
    'Individual para adultos',
    '50 minutos de sessão',
    'Atendimento semanal',
    'via Whatsapp',
  ];

  return (
    <section id='sessoes' className='flex flex-col md:flex items-center p-3 relative'>
      <article className='bg-primary w-full rounded-md p-2 '>
        <header className=''>
          <Image
            src="/images/horizontal2.jpg"
            width={500}
            height={500}
            alt=""
            className='w-full rounded-md object-cover'
          />
        </header>
        <div className='bg-white rounded-md p-2 text-center  text-primary'>
          <h1 className='text-2xl'>Atendimento</h1>
        </div>
        <div className='flex flex-col'>
          <div className='text-white flex flex-col gap-2 items-center  mt-5'>
            <h2 className='text-xl'>Como funcionam minhas sessões!</h2>
            <p>A sessão ocorre exclusivamente de forma online, com todo sigilo e segurança.</p>
          </div>
          <ul className="list-none p-0 mt-4 flex flex-col gap-4">
            {sessions.map((session, index) => (
              <li key={index} className="flex  gap-2 text-white text-sm lg:text-lg">
                <div className='bg-white rounded-md p-1'>
                  <FaCheck className="text-accent" />
                </div>
                {session}
              </li>
            ))}
          </ul>
        </div>
      </article>
    </section>
  );
}
