"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Calculator } from "lucide-react";

export const HeaderSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary text-primary-foreground shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Calculator className="h-8 w-8" />
            <span className="text-xl font-bold">
              Estudio Contable De La Torre
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="hover:text-accent transition-colors">
              Inicio
            </a>
            <a
              href="#servicios"
              className="hover:text-accent transition-colors"
            >
              Servicios
            </a>
            <a href="#nosotros" className="hover:text-accent transition-colors">
              Nosotros
            </a>
            <a href="#contacto" className="hover:text-accent transition-colors">
              Contacto
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-primary-foreground hover:bg-primary-foreground/10"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-primary-foreground/20">
            <div className="flex flex-col space-y-4">
              <a
                href="#inicio"
                className="hover:text-accent transition-colors"
                onClick={toggleMenu}
              >
                Inicio
              </a>
              <a
                href="#servicios"
                className="hover:text-accent transition-colors"
                onClick={toggleMenu}
              >
                Servicios
              </a>
              <a
                href="#nosotros"
                className="hover:text-accent transition-colors"
                onClick={toggleMenu}
              >
                Nosotros
              </a>
              <a
                href="#contacto"
                className="hover:text-accent transition-colors"
                onClick={toggleMenu}
              >
                Contacto
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
