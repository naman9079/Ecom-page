import { Layout } from "@/components/layout/Layout";
import { 
  Megaphone, 
  TrendingUp, 
  Store, 
  Rocket, 
  Calculator,
  CheckCircle2,
  Globe
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  {
    icon: Megaphone,
    title: "Social Media Marketing",
    description: "Build a powerful brand presence and engage your target audience across all social platforms.",
    features: [
      "Content Strategy & Creation",
      "Community Management",
      "Influencer Marketing",
      "Social Media Advertising",
      "Brand Voice Development",
      "Performance Analytics",
    ],
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "Drive qualified traffic and maximize conversions with data-driven digital marketing strategies.",
    features: [
      "Google Ads & PPC Campaigns",
      "SEO & SEM Optimization",
      "Email Marketing Automation",
      "Conversion Rate Optimization",
      "Retargeting Campaigns",
      "Marketing Analytics & Reporting",
    ],
  },
  {
    icon: Store,
    title: "Marketplace Onboarding",
    description: "Launch your brand on major marketplaces with expert setup and optimization.",
    features: [
      "Account Registration & Setup",
      "Product Cataloging",
      "Listing Optimization",
      "Brand Registry Assistance",
      "Compliance Documentation",
      "Initial Inventory Planning",
    ],
  },
  {
    icon: Rocket,
    title: "Ecommerce Growth Services",
    description: "Accelerate your sales and market share with comprehensive growth strategies.",
    features: [
      "Marketplace SEO",
      "Inventory & Supply Chain Strategy",
      "Pricing Optimization",
      "A+ Content Creation",
      "Review Management",
      "Sales Automation Tools",
    ],
  },
  {
    icon: Calculator,
    title: "Accounts & Finance Management",
    description: "Complete financial management to keep your business compliant and profitable.",
    features: [
      "Payment Reconciliation",
      "Commission & Fee Tracking",
      "GST Filing & Compliance",
      "Financial Reporting",
      "Profitability Analysis",
      "Cash Flow Management",
    ],
  },
  {
    icon: Globe,
    title: "Website Development",
    description: "Build a stunning, high-performance website that converts visitors into customers.",
    features: [
      "Custom Website Design",
      "Responsive Mobile Development",
      "E-commerce Integration",
      "SEO Optimization",
      "Fast Loading & Performance",
      "Ongoing Maintenance & Support",
    ],
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Comprehensive ecommerce solutions designed to help your brand thrive across all major online platforms.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {services.map((service, index) => (
              <Card key={service.title} className="glass border-border/50 overflow-hidden">
                <div className={`grid md:grid-cols-2 gap-8 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                  <CardHeader className="p-8">
                    <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-2xl md:text-3xl mb-4">{service.title}</CardTitle>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {service.description}
                    </p>
                  </CardHeader>
                  <CardContent className="p-8 bg-secondary/30">
                    <h4 className="font-semibold mb-6 text-lg">What's Included:</h4>
                    <ul className="space-y-4">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
