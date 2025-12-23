import { useEffect, useRef } from "react";

const partners = [
  { name: "Klishaa Art", logo: "/partners/download.png", rating: 5 },
  { name: "Shinisha", logo: "/partners/download (1).png", rating: 5 },
  { name: "Daysan", logo: "/partners/474119759_1840880520053550_5864754678302908218_n.jpg", rating: 5 },
  { name: "Jonaya by Lekhani", logo: "/partners/562424037_17845546695582905_8874993699207679515_n.jpg", rating: 5 },
  { name: "Leelavati", logo: "/partners/download (2).png", rating: 5 },
  { name: "House of Comfort", logo: "/partners/images (1).jpg", rating: 5 },
];

export const TrustedPartners = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;

    const scroll = () => {
      scrollPosition += 0.5;
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }
      scrollContainer.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Trusted <span className="text-primary">Clients</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Brands that trust us to scale their business
          </p>
        </div>

        <div
          ref={scrollRef}
          className="overflow-hidden whitespace-nowrap"
          style={{ scrollBehavior: "auto" }}
        >
          <div className="inline-flex gap-16 animate-scroll">
            {/* First set */}
            {partners.map((partner, index) => (
              <div
                key={`partner-1-${index}`}
                className="inline-flex flex-col overflow-hidden rounded-lg border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg w-[200px] h-[140px] bg-card"
              >
                <div className="flex-1 flex items-center justify-center overflow-hidden p-4">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center gap-1 py-2 bg-background/80">
                  {[...Array(partner.rating)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-yellow-400" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {partners.map((partner, index) => (
              <div
                key={`partner-2-${index}`}
                className="inline-flex flex-col overflow-hidden rounded-lg border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg w-[200px] h-[140px] bg-card"
              >
                <div className="flex-1 flex items-center justify-center overflow-hidden p-4">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-full h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="flex items-center justify-center gap-1 py-2 bg-background/80">
                  {[...Array(partner.rating)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-yellow-400" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
