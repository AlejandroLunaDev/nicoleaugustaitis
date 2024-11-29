"use client";

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/shared/components/ui/carousel";
import { reviews } from "./reviewsData";
import { renderStars } from "./components/RenderStars";

export default function ReviewsCarousel() {
  return (
    <section className="flex flex-col items-center gap-4 p-4" id="depoimentos">
      <header className="text-center">
        <h2 className="text-3xl font-semibold text-primary">Depoimentos</h2>

      </header>
      <Carousel opts={{loop: true}} className="relative w-full max-h-[400px] mt-4">
        <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-primary text-white p-2 rounded-full shadow-md" />
        <CarouselContent className="flex w-full">
          {reviews.map((review, index) => (
            <CarouselItem key={index} className="flex flex-col items-center p-4 bg-white rounded-lg shadow-lg">
              <div className="mt-4">{renderStars(review.rating)}</div>
              <p className="font-semibold p-2">Avaliações 5.0 dos meus pacientes</p>
              <p className="mt-2 text-sm lg:text-xl px-12 text-primary">{review.text}</p>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-primary text-white p-2 rounded-full shadow-md" />
      </Carousel>
    </section>
  );
}
