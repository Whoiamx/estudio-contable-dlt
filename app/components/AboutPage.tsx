import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import Image from "next/image";

const features = [
  "Profesionales matriculados",
  "Atención personalizada",
  "Confidencialidad garantizada",
  "Tecnología de vanguardia",
];

export const AboutPage = () => {
  return (
    <section id="nosotros" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <Image
              width={500}
              height={500}
              src="/contabilidad.jpg"
              alt="Profesional contable trabajando"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-card-foreground">
              Sobre Nosotros
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Con más de 15 años de experiencia en el mercado, el Estudio
              Contable De La Torre se ha consolidado como un referente en
              servicios contables, ofreciendo soluciones integrales y
              personalizadas para empresas y particulares.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Nuestro equipo de profesionales matriculados se mantiene
              constantemente actualizado en las últimas normativas fiscales y
              contables para brindar el mejor servicio.
            </p>

            <div className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-card-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Conocer más
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
