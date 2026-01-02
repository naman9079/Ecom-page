import { Layout } from "@/components/layout/Layout";
import { Target, Users, BarChart3, Shield, Award, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const values = [
  {
    icon: Target,
    title: "Data-Driven",
    description: "Every decision backed by analytics and insights for measurable results.",
  },
  {
    icon: Users,
    title: "Dedicated Teams",
    description: "Personal account managers committed to your brand's success.",
  },
  {
    icon: BarChart3,
    title: "Transparent Reporting",
    description: "Clear, honest reporting so you always know where you stand.",
  },
  {
    icon: Shield,
    title: "Platform Expertise",
    description: "Deep knowledge of each marketplace's algorithms and best practices.",
  },
  {
    icon: Award,
    title: "Proven Track Record",
    description: "100+ brands scaled with ₹1Cr+ revenue generated.",
  },
  {
    icon: Heart,
    title: "Partnership Approach",
    description: "We grow when you grow - true partnership mindset.",
  },
];

const team = [
  { name: "Leadership", count: "5+", description: "Years avg. industry experience per leader" },
  { name: "Marketing", count: "15+", description: "Digital marketing specialists" },
  { name: "Operations", count: "20+", description: "Marketplace operations experts" },
  { name: "Tech", count: "10+", description: "Developers & analysts" },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="gradient-text">DA ECOM</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              We're a passionate team of ecommerce experts helping brands succeed in the digital marketplace.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Founded in 2020, DA ECOM began with a simple mission: to help brands navigate the complex world of online marketplaces.
                  </p>
                  <p>
                    What started as a small team of marketplace specialists has grown into a full-service ecommerce agency serving 100+ brands across India and beyond.
                  </p>
                  <p>
                    Today, we offer end-to-end solutions covering everything from marketplace onboarding to performance marketing, financial management, and beyond.
                  </p>
                </div>
              </div>
              <div className="glass p-8 rounded-2xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold gradient-text mb-2">12</div>
                    <p className="text-sm text-muted-foreground">Years</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold gradient-text mb-2">100+</div>
                    <p className="text-sm text-muted-foreground">Brands Served</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold gradient-text mb-2">₹1Cr+</div>
                    <p className="text-sm text-muted-foreground">Revenue Generated</p>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold gradient-text mb-2">30+</div>
                    <p className="text-sm text-muted-foreground">Platforms</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              What Sets Us <span className="gradient-text">Apart</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our core values and approach that drive exceptional results for every brand we partner with.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {values.map((value) => (
              <Card key={value.title} className="glass border-border/50">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Our <span className="gradient-text">Team</span>
            </h2>
            <p className="text-muted-foreground">
              A diverse team of experts dedicated to your ecommerce success.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {team.map((dept) => (
              <div key={dept.name} className="glass p-6 rounded-xl text-center">
                <div className="text-3xl font-bold gradient-text mb-2">{dept.count}</div>
                <h4 className="font-semibold mb-1">{dept.name}</h4>
                <p className="text-xs text-muted-foreground">{dept.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
