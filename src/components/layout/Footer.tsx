import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link
              to="/"
              className="inline-flex items-center overflow-hidden rounded-lg bg-gradient-to-r from-purple-700/30 via-violet-600/25 to-indigo-600/30 px-1 py-0.5 md:px-1.5 md:py-0.5 border border-primary/25"
            >
              <img src="/logo/logo.jpg?v=20260317" alt="DA ECOM" className="h-12 md:h-14 w-auto object-contain scale-[1.28]" />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Empowering brands to accelerate their ecommerce growth with data-driven strategies and dedicated account management.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  Social Media Marketing
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  Marketplace Onboarding
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  Ecommerce Growth
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  Accounts & Finance
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:info@daecomstudio.com" className="hover:text-primary transition-colors">
                  info@daecomstudio.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:+919358223445" className="hover:text-primary transition-colors">
                  +91 93582 23445
                </a>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                <span>Jaipur, Rajasthan, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} DA ECOM. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/daecom.studio_/"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-8 h-8" />
              </a>
            </div>
            <div className="flex items-center gap-4 md:gap-6 text-sm text-muted-foreground border-t md:border-t-0 md:border-l border-border pt-4 md:pt-0 md:pl-6 w-full md:w-auto justify-center md:justify-start">
              <Link to="/terms" className="hover:text-primary transition-colors">Terms &amp; Conditions</Link>
              <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
