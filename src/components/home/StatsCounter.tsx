import { useEffect, useState, useRef } from "react";

const stats = [
  { value: 100, suffix: "+", label: "Brands Served" },
  { value: 1, suffix: "Cr+", label: "Revenue Generated", prefix: "₹" },
  { value: 14, suffix: "+", label: "Platforms" },
  { value: 5, suffix: "", label: "Years" },
];

const useCountAnimation = (target: number, duration: number = 2000, shouldStart: boolean) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      setCount(Math.floor(progress * target));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [target, duration, shouldStart]);

  return count;
};

export const StatsCounter = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-background to-accent/10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Numbers That <span className="gradient-text">Speak</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Our track record of delivering exceptional results for brands worldwide.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} isVisible={isVisible} delay={index * 200} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface StatCardProps {
  stat: { value: number; suffix: string; label: string; prefix?: string };
  isVisible: boolean;
  delay: number;
}

const StatCard = ({ stat, isVisible, delay }: StatCardProps) => {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const count = useCountAnimation(stat.value, 2000, shouldAnimate);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => setShouldAnimate(true), delay);
      return () => clearTimeout(timer);
    }
  }, [isVisible, delay]);

  return (
    <div className="glass p-8 rounded-2xl text-center hover:border-primary/50 transition-all duration-300 group">
      <div className="text-4xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform">
        <span className="gradient-text">
          {stat.prefix}
          {count}
          {stat.suffix}
        </span>
      </div>
      <p className="text-muted-foreground">{stat.label}</p>
    </div>
  );
};
