"use client";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/shared/components/ui/carousel";
import { reviews } from "./reviewsData";
import { renderStars } from "./components/RenderStars";
import Link from "next/link";

export default function ReviewsCarousel() {
  return (
    <section className="flex flex-col items-center gap-4 p-4" id="depoimentos">
      <header className="text-center">
        <h2 className="text-3xl font-semibold text-primary">Depoimentos</h2>
      </header>
      <Carousel opts={{ loop: true }} className="relative w-full max-h-[400px] mt-4">
        <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-primary text-white p-2 rounded-full shadow-md" />
        <CarouselContent className="flex w-full">
          {reviews.map((review, index) => (
            <CarouselItem key={index} className="flex flex-col items-center p-4 bg-white rounded-lg shadow-lg">
              <div className="mt-4">{renderStars(review.rating)}</div>
              <p className="font-semibold p-2">Avaliações 5.0 dos meus pacientes</p>

              {/* Condicional para truncar textos que superen 400 caracteres */}
              <Link
                href='https://www.google.com/search?q=nicole+augustaitis&rlz=1C1GCEA_enBR1087BR1087&oq=nico&gs_lcrp=EgZjaHJvbWUqCAgAEEUYJxg7MggIABBFGCcYOzIGCAEQRRg5MhIIAhAuGEMYxwEY0QMYgAQYigUyDAgDEC4YFBiHAhiABDIMCAQQLhgUGIcCGIAEMg0IBRAuGMcBGNEDGIAEMgcIBhAAGIAEMg0IBxAuGMcBGNEDGIAEMgcICBAAGIAEMgcICRAAGIAE0gEJMTc5NGowajE1qAIIsAIB&sourceid=chrome&ie=UTF-8#lrd=0xb30feaf6baa5325:0x9bfe145cd6ad7a33,1,,,,'
                target="_blank"
                rel="noopener noreferrer"
                
              >
              <p
                className={`
                  mt-2 text-xs lg:text-xl px-12 text-primary 
                  ${review.text.length > 350 ? 'line-clamp-6' : ''}  // Aplicar truncado solo si el texto es largo
                  md:line-clamp-none  // No truncar en desktop
                  sm:text-base
                `}
              >
                {review.text}
              </p>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-primary text-white p-2 rounded-full shadow-md" />
      </Carousel>
    </section>
  );
}
