import Link from 'next/link';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';

export default function Contact() {
  return (
    <section id="contact" className="p-2">
      <div
        style={{
          backgroundImage: 'url(/images/fondonicole.png)',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
        className="flex flex-col gap-2 py-20 px-5 shadow-md"
      >
        <article className="bg-white rounded-md flex flex-col items-center gap-2 p-2 shadow-lg">
          <h4 className="text-2xl font-semibold">Vamos conversar</h4>
          <div className="text-xs lg:text-lg lg:text-center flex flex-col gap-2">
            <p>Aprenda a seguir sua vida com leveza e resiliência</p>
            <p>
              Dar o primeiro passo para cuidar de você é um ato de coragem e amor
              próprio. Permita-se explorar novos caminhos e descobrir a
              transformação que pode surgir a partir daqui.
            </p>
          </div>
          <div className="flex items-center gap-4 text-sm lg:text-xl">
            <Link target='_blank' href="https://wa.me/5511948642252" className="flex flex-col lg:flex-row items-center gap-2">
              <FaWhatsapp className="w-6 h-6 lg:w-10 lg:h-10  text-primary" />
              <span className="font-semibold ">(11) 94864-2252</span>
            </Link>
            <Link href="https://www.instagram.com/psi.nicoleaugustaitis/" target='_blank' className="flex flex-col lg:flex-row items-center gap-2">
              <FaInstagram className="w-6 h-6 lg:w-10 lg:h-10 text-primary" />
              <span className="font-semibold">Siga-me</span>
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
}
