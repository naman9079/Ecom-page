import { Link } from "react-router-dom";
import { ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-accent/10" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-accent/30">
            <Zap className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium">Ready to Scale?</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold">
            Let's Grow Your{" "}
            <span className="gradient-text">Ecommerce Empire</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Partner with DA ECOM and unlock your brand's full potential across all major marketplaces. Start your growth journey today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 glow text-lg px-8">
              <Link to="/contact">
                Start Your Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="text-lg px-8">
              <Link to="/about">Learn About Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
