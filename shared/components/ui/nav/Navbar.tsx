'use client';

import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '../dropdown-menu';
import { navLinks } from './navData';  // Importamos los datos de los enlaces

export default function Navbar() {
  const pathname = usePathname();  // Obtiene la URL actual.
  
  // Función para resaltar el enlace activo comparando la URL actual con el 'id' de la sección.
  const getActiveClass = (section: string) => {
    return pathname === `#${section}` ? 'text-accent' : '';
  };

  return (
    <nav className="flex items-center justify-between px-3 py-3 lg:p-5 text-primary fixed top-0 z-50 bg-white w-full">
      <div className="text-3xl font-semibold">
        <Link href="/" className="font-parisienne capitalize color-primary">
          nicole augustaitis
        </Link>
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger className="md:hidden">
          <Menu className="w-6 h-6" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-white ">
          {navLinks.map((link) => (
            <DropdownMenuItem asChild key={link.href}>
              <Link href={link.href} className={getActiveClass(link.href.slice(1))}>
                {link.label}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>

      <div className="hidden md:flex space-x-4">
        {navLinks.map((link) => (
          <Link href={link.href} key={link.href} className={getActiveClass(link.href.slice(1))}>
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
