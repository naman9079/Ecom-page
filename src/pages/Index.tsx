import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/home/Hero";
import { PlatformCarousel } from "@/components/home/PlatformCarousel";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { StatsCounter } from "@/components/home/StatsCounter";
import { TrustedPartners } from "@/components/home/TrustedPartners";
import { CTA } from "@/components/home/CTA";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <TrustedPartners />
      <ServicesOverview />
      <StatsCounter />
      <PlatformCarousel />
      <CTA />
    </Layout>
  );
};

export default Index;
