import { Calculator, MapPin, Phone, Mail } from "lucide-react";

export const FooterSection = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Calculator className="h-8 w-8" />
              <span className="text-xl font-bold">
                Estudio Contable De La Torre
              </span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed mb-4">
              Más de 15 años brindando servicios contables profesionales.
              Confianza, experiencia y dedicación al servicio de nuestros
              clientes.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Liquidación de Impuestos</li>
              <li>Liquidación de Sueldos</li>
              <li>Monotributo</li>
              <li>Sociedades</li>
              <li>Asesoramiento Fiscal</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <div className="space-y-3 text-primary-foreground/80">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span className="text-sm">Av. Corrientes 1234, CABA</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span className="text-sm">+54 11 4567-8900</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span className="text-sm">info@delatorre.com.ar</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
          <p>
            &copy; 2024 Estudio Contable De La Torre. Todos los derechos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
