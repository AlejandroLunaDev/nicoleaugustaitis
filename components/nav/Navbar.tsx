"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-3 py-3 lg:p-5 text-primary fixed top-0 z-50 bg-white w-full  ">
      <div className="text-xl lg:text-3xl">
        <Link href="/" className="font-parisienne capitalize color-primary">nicole augustaitis</Link>
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger className="md:hidden">
          <Menu className="w-6 h-6" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-primary text-white">
          <DropdownMenuItem asChild>
            <Link href="/">Inicio</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/about">Acerca de</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/contact">Contacto</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <div className="hidden md:flex space-x-4">
        <Link href="/" className="hover:underline">
          Inicio
        </Link>
        <Link href="/about" className="hover:underline">
          Acerca de
        </Link>
        <Link href="/contact" className="hover:underline">
          Contacto
        </Link>
      </div>
    </nav>
  );
}
