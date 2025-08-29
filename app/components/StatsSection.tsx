const stats = [
  { number: "15+", label: "Años de experiencia" },
  { number: "500+", label: "Clientes satisfechos" },
  { number: "1000+", label: "Declaraciones procesadas" },
  { number: "24/7", label: "Soporte disponible" },
];

export const StatsSection = () => {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2 text-accent">
                {stat.number}
              </div>
              <div className="text-sm md:text-base text-primary-foreground/80">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
