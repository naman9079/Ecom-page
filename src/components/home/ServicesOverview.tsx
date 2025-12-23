import { Link } from "react-router-dom";
import { 
  Megaphone, 
  TrendingUp, 
  Store, 
  Rocket, 
  Calculator,
  ArrowRight,
  Globe 
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Megaphone,
    title: "Social Media Marketing",
    description: "Build brand presence and engage audiences across all social platforms with strategic content and campaigns.",
    features: ["Content Creation", "Community Management", "Influencer Marketing"],
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "Drive traffic and conversions with data-driven paid ads, SEO/SEM, and performance marketing strategies.",
    features: ["Paid Advertising", "SEO/SEM", "Analytics & Reporting"],
  },
  {
    icon: Store,
    title: "Marketplace Onboarding",
    description: "Seamless launch and setup on all major marketplaces with optimized listings and catalog management.",
    features: ["Account Setup", "Catalog Management", "Listing Optimization"],
  },
  {
    icon: Rocket,
    title: "Ecommerce Growth",
    description: "Accelerate sales with marketplace SEO, inventory strategy, automation, and performance optimization.",
    features: ["Marketplace SEO", "Inventory Strategy", "Sales Automation"],
  },
  {
    icon: Calculator,
    title: "Accounts & Finance",
    description: "Complete financial management including reconciliation, payment tracking, and GST compliance.",
    features: ["Reconciliation", "Payment Tracking", "GST Compliance"],
  },
  {
    icon: Globe,
    title: "Website Development",
    description: "Build a stunning, high-performance website that converts visitors into customers with responsive design.",
    features: ["Custom Design", "E-commerce Integration", "SEO Optimization"],
  },
];

export const ServicesOverview = () => {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Comprehensive <span className="gradient-text">Ecommerce Services</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to launch, manage, and scale your online business across all major platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="glass border-border/50 hover:border-primary/50 transition-all duration-300 group"
            >
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="text-sm text-muted-foreground flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg" className="group">
            <Link to="/services">
              Explore All Services
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
