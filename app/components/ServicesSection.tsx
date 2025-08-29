import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Calculator, FileText, Users, Building } from "lucide-react";

const services = [
  {
    icon: Calculator,
    title: "Liquidación de Impuestos",
    description:
      "Gestión completa de obligaciones fiscales, declaraciones juradas y cumplimiento tributario para empresas y particulares.",
  },
  {
    icon: FileText,
    title: "Liquidación de Sueldos",
    description:
      "Administración integral de nóminas, aportes patronales, obra social y ART con total cumplimiento legal.",
  },
  {
    icon: Users,
    title: "Monotributo",
    description:
      "Asesoramiento en categorización, recategorización y gestión completa del régimen simplificado.",
  },
  {
    icon: Building,
    title: "Sociedades",
    description:
      "Constitución, administración contable y cumplimiento de obligaciones societarias para todo tipo de empresas.",
  },
];

export const ServicesSection = () => {
  return (
    <section id="servicios" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Nuestros Servicios
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Ofrecemos soluciones integrales para todas sus necesidades contables
            y fiscales
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-lg transition-shadow duration-300"
            >
              <CardHeader>
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
