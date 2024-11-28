'use client';

import Image from 'next/image';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import FormationLi from '@/shared/components/ui/FormationLi';
import { sessions } from './infoData';

export default function InfoTeraphy() {
  return (
    <section id='atendimento' className='p-3'>
      <motion.article
        className='bg-primary w-full rounded-md p-2 md:p-4 gap-4 flex flex-col lg:flex-row'
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <motion.header
          className=''
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <Image
            src='/images/horizontal2.jpg'
            width={500}
            height={500}
            alt=''
            className='w-full rounded-md object-cover'
          />
        </motion.header>
        <div className='w-full'>
          <div className='bg-white rounded-md p-2 md:p-4 text-center text-primary'>
            <h1 className='text-2xl md:text-4xl'>Atendimento</h1>
          </div>
          <div className='flex flex-col'>
            <div className='text-white flex flex-col gap-2 items-center mt-5'>
              <h2 className='text-xl md:text-3xl'>
                Como funcionam minhas sessões!
              </h2>
              <p>
                A sessão ocorre exclusivamente de forma online, com todo sigilo
                e segurança.
              </p>
            </div>
            <div className='flex flex-col md:flex-row md:justify-evenly md:items-center gap-5'>
              <ul className='list-none p-0 mt-4 flex flex-col gap-4'>
                {sessions.map((session, index) => (
                  <motion.ul
                    key={session.id} // Usamos el id como key
                    className='flex gap-2 text-white text-sm lg:text-lg'
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.6,
                      ease: 'easeOut',
                      delay: index * 0.1
                    }}
                  >
                    <FormationLi item={session} />
                  </motion.ul>
                ))}
              </ul>
              <div className='text-center'>
                <div className='flex justify-center gap-4 items-center mb-4'>
                  <motion.a
                    href='https://www.instagram.com/psi.nicoleaugustaitis/'
                    target='_blank'
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    whileHover={{ scale: 1.1 }}
                  >
                    <FaInstagram className='text-white text-2xl' />
                  </motion.a>
                  <motion.a
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    whileHover={{ scale: 1.1 }}
                    href='https://wa.me/5511948642252'
                    target='_blank'
                  >
                    <FaWhatsapp className='text-white text-2xl' />
                  </motion.a>
                </div>
                <a href='https://wa.me/5511948642252' target='_blank'>
                  <motion.button
                    className='bg-white text-primary font-semibold text-sm lg:text-lg p-2 md:p-4 rounded-md text-center'
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    whileHover={{ scale: 1.1 }}
                  >
                    Agende uma sessão
                  </motion.button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.article>
    </section>
  );
}
