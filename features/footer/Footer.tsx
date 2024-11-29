import Link from 'next/link';
import React from 'react';

export default function Footer() {
  return (
    <footer className='p-2 flex flex-col items-center justify-center gap-2'>
      <Link href='/' className='font-parisienne text-2xl lg:text-4xl text-primary capitalize color-primary'>
        nicole augustaitis
      </Link>
      <div className='flex flex-col lg:flex-row items-center justify-evenly w-full'>
      <small>Copyright © 2025. Todos os direitos reservados.</small>
      <small>Desenvolvido por: <Link href='https://www.linkedin.com/in/alejandro-luna-dev/' target='_blank' className='text-primary'>Alejandro Luna</Link> </small>

      </div>
    </footer>
  );
}
