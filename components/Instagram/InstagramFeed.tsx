'use client';

import Script from 'next/script';
import { FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function InstagramFeed() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ amount: 0.2 }}
      className='p-3'
    >
      <Script
        strategy="afterInteractive"
        src="https://cdn.lightwidget.com/widgets/lightwidget.js"
      />

      <header className='flex gap-2 items-center mb-4'>
        <FaInstagram className="text-lg text-primary" />
        <p className="text-xl ">psi.nicoleaugustaitis</p>
      </header>
      <iframe
        src="//lightwidget.com/widgets/2a9beb4f818459cbbb19d2578fce56ae.html"
        scrolling="no"
        allowTransparency={true}
        className="lightwidget-widget"
        style={{ width: '100%', border: 0, overflow: 'hidden' }}
      ></iframe>
    </motion.div>
  );
}
