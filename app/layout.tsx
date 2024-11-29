import type { Metadata } from 'next';
import './globals.css';
import { Montserrat, Playfair_Display, Parisienne } from 'next/font/google';
import { Navbar } from '@/shared/components/ui/nav';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair-display',
});

const parisienne = Parisienne({
  subsets: ['latin'],
  variable: '--font-parisienne',
  weight: '400',
});

export const metadata: Metadata = {
  title: 'Nicole Augustaitis | Psicóloga Terapia Cognitivo-Comportamental Online',
  description:
    'Nicole Augustaitis é psicóloga especializada em Terapia Cognitivo-Comportamental (TCC). Atendimentos psicológicos online para ajudar você a lidar com ansiedade, depressão, autoestima e mais.',
  icons: {
    icon: '/svg/ni.svg',
  },
  openGraph: {
    title: 'Nicole Augustaitis | Psicóloga Terapia Cognitivo-Comportamental Online',
    description:
      'Buscando terapia online? Nicole Augustaitis é psicóloga especializada em Terapia Cognitivo-Comportamental, oferecendo suporte profissional e acolhedor para melhorar sua saúde mental.',
    url: 'https://nicoleaugustaitis.com',
    siteName: 'Nicole Augustaitis',
    images: [
      {
        url: '/images/niheroup.png',
        width: 1200,
        height: 630,
        alt: 'Nicole Augustaitis | Psicóloga Online',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@nicoleaugustaitis',
    title: 'Nicole Augustaitis | Psicóloga Online Especialista em TCC',
    description:
      'Psicóloga especialista em Terapia Cognitivo-Comportamental (TCC) com atendimentos psicológicos online para ajudar na sua saúde mental.',
    images: ['/images/nicole-preview.png'],
  },
  keywords: [
    'Psicóloga online',
    'Terapia cognitivo-comportamental',
    'TCC',
    'Terapia para ansiedade',
    'Terapia para depressão',
    'Psicóloga especialista em TCC',
    'Atendimento psicológico online',
    'Saúde mental',
    'Nicole Augustaitis',
    'Psicoterapia online',
  ],
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${montserrat.variable} ${playfairDisplay.variable} ${parisienne.variable}`}
    >
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
