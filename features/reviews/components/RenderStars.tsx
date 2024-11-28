import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

export const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - Math.ceil(rating);
  
    return (
      <div className='flex justify-center gap-3 py-2'>
        {[...Array(fullStars)].map((_, index) => (
          <FaStar key={`full-${index}`} className='text-yellow-500' />
        ))}
        {halfStar && <FaStarHalfAlt className='text-yellow-500' />}
        {[...Array(emptyStars)].map((_, index) => (
          <FaRegStar key={`empty-${index}`} className='text-yellow-500' />
        ))}
      </div>
    );
  };