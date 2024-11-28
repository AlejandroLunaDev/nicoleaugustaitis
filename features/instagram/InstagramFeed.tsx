import Script from 'next/script';
import { FaInstagram } from 'react-icons/fa';
import Link from 'next/link';
import MotionWrapper from '@/shared/components/ui/MotionWrapper';

export default function InstagramFeed() {
  return (
    <MotionWrapper
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ amount: 0.16 }}
      className='p-3'
    >
      <section id='instagram'>
        <Script
          strategy='afterInteractive'
          src='https://cdn.lightwidget.com/widgets/lightwidget.js'
        />

        <Link
          target='_blank'
          href='https://www.instagram.com/psi.nicoleaugustaitis/'
          className='flex gap-2 items-center mb-4'
        >
          <FaInstagram className='text-lg md:text-4xl text-primary' />
          <p className='text-xl md:text-3xl '>psi.nicoleaugustaitis</p>
        </Link>
        <iframe
          src='//lightwidget.com/widgets/2a9beb4f818459cbbb19d2578fce56ae.html'
          className='lightwidget-widget'
          scrolling='no'
          style={{ width: '100%', border: 0, overflow: 'hidden' }}
        ></iframe>
      </section>
    </MotionWrapper>
  );
}
