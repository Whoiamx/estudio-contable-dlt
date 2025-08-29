import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary to-secondary"
    >
      {/* Background Image Overlay */}
      <div
        className="absolute inset-0 bg-black/40"
        style={{
          backgroundImage: `url('/professional-office-with-calculator-and-documents-.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
          Estudio Contable De La Torre
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-balance max-w-3xl mx-auto leading-relaxed">
          Soluciones contables profesionales para empresas y particulares. Más
          de 15 años de experiencia brindando servicios de calidad.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground"
          >
            <Phone className="mr-2 h-5 w-5" />
            Consulta Gratuita
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
          >
            Nuestros Servicios
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};
