import { Layout } from "@/components/layout/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const platforms = [
  { name: "Amazon", category: "Global", description: "World's largest online marketplace", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/320px-Amazon_logo.svg.png" },
  { name: "Flipkart", category: "India", description: "India's leading ecommerce platform", logo: "https://static.vecteezy.com/system/resources/previews/020/336/373/non_2x/flipkart-logo-flipkart-icon-free-free-vector.jpg" },
  { name: "Myntra", category: "Fashion", description: "Premium fashion & lifestyle destination", logo: "https://static.vecteezy.com/system/resources/previews/020/336/447/non_2x/myntra-logo-myntra-icon-free-free-vector.jpg" },
  { name: "Ajio", category: "Fashion", description: "Curated fashion from top brands", logo: "https://static.vecteezy.com/system/resources/previews/020/336/208/non_2x/ajio-logo-ajio-icon-free-free-vector.jpg" },
  { name: "TataCliq", category: "Multi-category", description: "Phygital marketplace by Tata", logo: "https://static.vecteezy.com/system/resources/previews/028/766/373/non_2x/tata-cliq-ecommerce-shopping-logo-icon-free-free-vector.jpg" },
  { name: "Walmart", category: "Global", description: "Global retail giant's marketplace", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Walmart_logo.svg/320px-Walmart_logo.svg.png" },
  { name: "eBay", category: "Global", description: "International auction & shopping site", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/EBay_logo.svg/320px-EBay_logo.svg.png" },
  { name: "Meesho", category: "Social Commerce", description: "Social commerce platform", logo: "https://static.vecteezy.com/system/resources/previews/022/227/376/non_2x/meesho-logo-transparent-free-png.png" },
  { name: "Shopify", category: "D2C", description: "Build your own branded store", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Shopify_logo_2018.svg/320px-Shopify_logo_2018.svg.png" },
  { name: "Noon", category: "Middle East", description: "Leading Middle East marketplace", logo: "https://static.vecteezy.com/system/resources/previews/028/766/350/non_2x/noon-ecommerce-shopping-logo-icon-free-free-vector.jpg" },
  { name: "Jiomart", category: "India", description: "Reliance's grocery & retail platform", logo: "https://static.vecteezy.com/system/resources/previews/028/766/377/non_2x/jiomart-ecommerce-shopping-logo-icon-free-free-vector.jpg" },
  { name: "Glowroad", category: "Social Commerce", description: "Reseller-focused platform", logo: "https://static.vecteezy.com/system/resources/previews/028/766/366/non_2x/glowroad-ecommerce-shopping-logo-icon-free-free-vector.jpg" },
  { name: "FlowerAura", category: "Gifting", description: "Flowers & gifts marketplace", logo: "https://static.vecteezy.com/system/resources/previews/028/766/365/non_2x/floweraura-ecommerce-shopping-logo-icon-free-free-vector.jpg" },
  { name: "AzaFashion", category: "Luxury", description: "Premium designer fashion", logo: "https://images.crunchbase.com/image/upload/c_pad,h_256,w_256,f_auto,q_auto:eco,dpr_1/hs8csit4odynfgmhymgi" },
];

const categories = ["All", "Global", "India", "Fashion", "D2C", "Social Commerce", "Luxury", "Multi-category", "Middle East", "Gifting"];

const Platforms = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Supported <span className="gradient-text">Platforms</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              We help brands succeed on 30+ major marketplaces across India, Middle East, and globally.
            </p>
          </div>
        </div>
      </section>

      {/* Platforms Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {platforms.map((platform) => (
              <Card 
                key={platform.name} 
                className="glass border-border/50 hover:border-primary/50 transition-all duration-300 group cursor-pointer"
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-16 h-16 rounded-lg bg-white flex items-center justify-center group-hover:shadow-md transition-shadow p-2">
                      <img 
                        src={platform.logo}
                        alt={`${platform.name} logo`}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          const target = e.currentTarget as HTMLImageElement;
                          target.style.display = 'none';
                          const fallback = document.createElement('span');
                          fallback.className = 'text-xl font-bold text-primary';
                          fallback.textContent = platform.name.charAt(0);
                          target.parentElement?.appendChild(fallback);
                        }}
                      />
                    </div>
                    <span className="text-xs px-2 py-1 rounded-full bg-secondary text-muted-foreground">
                      {platform.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors flex items-center gap-2">
                    {platform.name}
                    <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {platform.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services for Platforms */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              What We Offer on <span className="gradient-text">Each Platform</span>
            </h2>
            <p className="text-muted-foreground">
              Our comprehensive services are tailored to each marketplace's unique requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">Onboarding</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Account setup & verification</li>
                <li>• Brand registry assistance</li>
                <li>• Catalog migration</li>
                <li>• Compliance documentation</li>
              </ul>
            </div>
            <div className="glass p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">Growth</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Listing optimization</li>
                <li>• Marketplace SEO</li>
                <li>• Sponsored ads management</li>
                <li>• A+ content creation</li>
              </ul>
            </div>
            <div className="glass p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">Management</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Inventory management</li>
                <li>• Order fulfillment</li>
                <li>• Returns processing</li>
                <li>• Performance analytics</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Platforms;
