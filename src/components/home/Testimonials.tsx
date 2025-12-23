import { useState } from "react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Founder, StyleCraft India",
    content: "DA ECOM transformed our online presence. Within 6 months, we saw a 300% increase in sales across Amazon and Flipkart. Their marketplace expertise is unmatched.",
    rating: 5,
  },
  {
    name: "Priya Patel",
    role: "CEO, Artisan Jewels",
    content: "The team's data-driven approach and transparent reporting gave us complete visibility into our growth. We've expanded to 8 new platforms with their support.",
    rating: 5,
  },
  {
    name: "Vikram Singh",
    role: "Director, TechGear Solutions",
    content: "From onboarding to scaling, DA ECOM handled everything. Their finance management services saved us countless hours and ensured full GST compliance.",
    rating: 5,
  },
  {
    name: "Ananya Gupta",
    role: "Co-founder, GreenLife Organics",
    content: "The social media marketing strategy they created drove massive engagement. Our brand awareness increased by 400% in just one quarter.",
    rating: 5,
  },
];

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Success stories from brands we've helped scale.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <Card className="glass border-border/50">
              <CardContent className="p-8 md:p-12">
                <Quote className="w-12 h-12 text-primary/30 mb-6" />
                
                <p className="text-xl md:text-2xl text-foreground mb-8 leading-relaxed">
                  "{testimonials[currentIndex].content}"
                </p>

                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <div className="flex gap-1 mb-2">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                      ))}
                    </div>
                    <h4 className="font-semibold text-lg">{testimonials[currentIndex].name}</h4>
                    <p className="text-muted-foreground">{testimonials[currentIndex].role}</p>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={prev}
                      className="rounded-full"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={next}
                      className="rounded-full"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "w-8 bg-primary"
                      : "bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
