import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const services = [
  "Social Media Marketing",
  "Digital Marketing",
  "Marketplace Onboarding",
  "Ecommerce Growth Services",
  "Accounts & Finance Management",
  "Multiple Services",
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create WhatsApp message
    const whatsappMessage = `*New Contact Form Submission*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Company:* ${formData.company}%0A*Service:* ${formData.service}%0A*Message:* ${formData.message}`;
    
    // WhatsApp number (your number: 8094223445)
    const whatsappNumber = "918094223445";
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
    
    // Small delay for better UX
    await new Promise((resolve) => setTimeout(resolve, 500));
    
    // Open WhatsApp
    window.open(whatsappURL, '_blank');

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: "Redirecting to WhatsApp!",
      description: "Your message is ready to send via WhatsApp.",
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Ready to scale your ecommerce business? Let's discuss how we can help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Form */}
            <Card className="glass border-border/50">
              <CardContent className="p-8">
                {isSubmitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-6">
                      <CheckCircle2 className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-2">Thank You!</h3>
                    <p className="text-muted-foreground">
                      We've received your message and will get back to you within 24 hours.
                    </p>
                    <Button
                      className="mt-6"
                      onClick={() => {
                        setIsSubmitted(false);
                        setFormData({
                          name: "",
                          email: "",
                          company: "",
                          service: "",
                          message: "",
                        });
                      }}
                    >
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={(e) => handleChange("name", e.target.value)}
                          required
                          className="bg-secondary/50"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@company.com"
                          value={formData.email}
                          onChange={(e) => handleChange("email", e.target.value)}
                          required
                          className="bg-secondary/50"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="company">Company Name</Label>
                        <Input
                          id="company"
                          placeholder="Your Company"
                          value={formData.company}
                          onChange={(e) => handleChange("company", e.target.value)}
                          className="bg-secondary/50"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="service">Service Interest *</Label>
                        <Select
                          value={formData.service}
                          onValueChange={(value) => handleChange("service", value)}
                          required
                        >
                          <SelectTrigger className="bg-secondary/50">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            {services.map((service) => (
                              <SelectItem key={service} value={service}>
                                {service}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your project and goals..."
                        value={formData.message}
                        onChange={(e) => handleChange("message", e.target.value)}
                        required
                        className="bg-secondary/50 min-h-[150px]"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-primary hover:bg-primary/90"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 w-5 h-5" />
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Let's Connect</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Whether you're looking to launch on new marketplaces, scale your existing operations, or optimize your digital presence, we're here to help.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email Us</h4>
                    <a href="mailto:ecomstudiio@gmail.com" className="text-muted-foreground hover:text-primary transition-colors block">
                      ecomstudiio@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Call Us</h4>
                    <a href="tel:+918094223445" className="text-muted-foreground hover:text-primary transition-colors block">
                      +91 80942 23445
                    </a>
                    <p className="text-muted-foreground">Mon-Fri, 9am-6pm IST</p>
                  </div>
                </div>
              </div>

              {/* Quick Response Promise */}
              <div className="glass p-6 rounded-xl">
                <h4 className="font-semibold mb-2">Quick Response Promise</h4>
                <p className="text-sm text-muted-foreground">
                  We respond to all inquiries within 24 hours. For urgent matters, please call us directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
