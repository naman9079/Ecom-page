import React from "react";

const platforms = [
  { name: "Amazon", logo: "https://cdn.worldvectorlogo.com/logos/amazon-1.svg", color: "#FF9900" },
  { name: "Flipkart", logo: "https://images.seeklogo.com/logo-png/31/1/flipkart-logo-png_seeklogo-318406.png", color: "#2874F0" },
  { name: "Myntra", logo: "https://images.seeklogo.com/logo-png/35/1/myntra-logo-png_seeklogo-355038.png", color: "#FF3F6C" },
  { name: "Ajio", logo: "https://cdn.worldvectorlogo.com/logos/ajio.svg", color: "#C8313A" },
  { name: "TataCliq", logo: "https://images.seeklogo.com/logo-png/40/1/tata-cliq-logo-png_seeklogo-405612.png", color: "#1A1A1A" },
  { name: "Meesho", logo: "https://images.seeklogo.com/logo-png/50/1/meesho-logo-png_seeklogo-507117.png", color: "#6C2D9A" },
  { name: "Shopify", logo: "https://cdn.worldvectorlogo.com/logos/shopify.svg", color: "#96BF48" },
  { name: "Walmart", logo: "https://images.seeklogo.com/logo-png/15/1/walmart-logo-png_seeklogo-151324.png", color: "#0071CE" },
  { name: "eBay", logo: "https://cdn.worldvectorlogo.com/logos/ebay-2.svg", color: "#E53238" },
  { name: "Noon", logo: "https://images.seeklogo.com/logo-png/46/1/noon-com-logo-png_seeklogo-467331.png", color: "#FFC400" },
  { name: "Jiomart", logo: "https://images.seeklogo.com/logo-png/46/1/jiomart-logo-png_seeklogo-469685.png", color: "#0057A0" },
  { name: "Glowroad", logo: "https://cdn.worldvectorlogo.com/logos/glowroad.svg", color: "#FF6B6B" },
  { name: "FlowerAura", logo: "https://cdn.worldvectorlogo.com/logos/floweraura.svg", color: "#E91E63" },
  { name: "ETSY", logo: "https://images.seeklogo.com/logo-png/28/1/etsy-logo-png_seeklogo-288522.png", color: "#000000" },
  
];

const LogoCard = ({ name, logo, color }: { name: string; logo: string; color: string }) => {
  const [imageError, setImageError] = React.useState(false);
  
  return (
    <div className="glass rounded-lg hover:border-primary/50 transition-all duration-300 flex items-center justify-center w-[200px] h-[120px] bg-white hover:shadow-lg overflow-hidden p-4">
      {!imageError ? (
        <img 
          src={logo}
          alt={`${name} logo`}
          className="w-full h-full object-contain"
          onError={() => setImageError(true)}
        />
      ) : (
        <span 
          className="text-2xl font-bold tracking-tight"
          style={{ color: color }}
        >
          {name}
        </span>
      )}
    </div>
  );
};

export const PlatformCarousel = () => {
  return (
    <section className="py-16 bg-card/50 border-y border-border overflow-hidden">
      <div className="container mx-auto px-4 mb-8">
        <p className="text-center text-muted-foreground text-sm uppercase tracking-wider">
          Trusted Partners Across Major Marketplaces
        </p>
      </div>

      <div className="relative">
        <div className="flex animate-scroll">
          {[...platforms, ...platforms].map((platform, index) => (
            <div
              key={`${platform.name}-${index}`}
              className="flex-shrink-0 mx-6 flex items-center justify-center"
            >
              <LogoCard name={platform.name} logo={platform.logo} color={platform.color} />
            </div>
          ))}
        </div>

        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent pointer-events-none" />
      </div>
    </section>
  );
};
