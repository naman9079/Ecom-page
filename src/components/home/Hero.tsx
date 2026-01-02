import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/5" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20 animate-fade-up">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium">Trusted by 100+ Brands Worldwide</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Scale Your{" "}
            <span className="gradient-text">Ecommerce</span>
            <br />
            Across All Platforms
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.2s" }}>
            From marketplace onboarding to performance marketing, we help brands launch, manage, and grow on 30+ major platforms with data-driven strategies.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 glow text-lg px-8">
              <Link to="/contact">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-border hover:bg-secondary text-lg px-8">
              <Link to="/services">View Services</Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="pt-12 flex flex-wrap justify-center gap-8 text-muted-foreground animate-fade-up" style={{ animationDelay: "0.4s" }}>
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground">100+</div>
              <div className="text-sm">Brands Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground">₹1Cr+</div>
              <div className="text-sm">Revenue Generated</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground">30+</div>
              <div className="text-sm">Platforms</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-foreground">12</div>
              <div className="text-sm">Years</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
