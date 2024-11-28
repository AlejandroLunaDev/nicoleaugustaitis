import React from 'react';
import { formationData } from '../aboutData';
import FormationLi from '@/shared/components/ui/FormationLi';

export default function FormationList() {
  const list = formationData.map(item => (
    <FormationLi key={item.id} item={item} />
  ));

  return (
    <div>
      <ul className='flex flex-col gap-4 text-sm lg:text-lg'>{list}</ul>
    </div>
  );
}
