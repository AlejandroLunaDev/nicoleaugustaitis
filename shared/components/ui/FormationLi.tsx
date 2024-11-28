import React from 'react';
import { FaCheck } from 'react-icons/fa';

interface FormationLiProps {
  item: { id: number; name: string };
}

export default function FormationLi({ item }: FormationLiProps) {
  return (
    <li className='flex items-center gap-3'>
      <div className='p-1 flex items-center justify-center text-primary bg-white rounded-md'>
        <FaCheck />
      </div>
      {item.name}
    </li>
  );
}
