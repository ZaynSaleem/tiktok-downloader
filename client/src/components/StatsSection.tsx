import { useEffect, useState, useRef } from "react";

interface StatProps {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  color: "green" | "purple" | "pink";
}

function StatCounter({ value, label, prefix = "", suffix = "", color }: StatProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);
  
  useEffect(() => {
    if (!isVisible) return;
    
    const duration = 2000; // ms
    const frameDuration = 1000 / 60; // 60fps
    const totalFrames = Math.round(duration / frameDuration);
    const countIncrement = value / totalFrames;
    
    let frame = 0;
    const counter = setInterval(() => {
      frame++;
      const newCount = Math.min(countIncrement * frame, value);
      setCount(Math.floor(newCount));
      
      if (frame === totalFrames) {
        clearInterval(counter);
      }
    }, frameDuration);
    
    return () => clearInterval(counter);
  }, [isVisible, value]);
  
  const colorClasses = {
    green: "text-glow-green",
    purple: "text-glow-purple",
    pink: "text-glow-pink"
  };
  
  return (
    <div ref={ref} className="text-center">
      <p className={`text-4xl lg:text-5xl font-bold ${colorClasses[color]}`}>
        {prefix}{count.toLocaleString()}{suffix}
      </p>
      <p className="mt-2 text-gray-300">{label}</p>
    </div>
  );
}

export default function StatsSection() {
  const stats = [
    {
      value: 1000000,
      label: "Videos Downloaded",
      prefix: "",
      suffix: "+",
      color: "green" as const
    },
    {
      value: 99,
      label: "Success Rate",
      prefix: "",
      suffix: "%",
      color: "purple" as const
    },
    {
      value: 50000,
      label: "Happy Users",
      prefix: "",
      suffix: "+",
      color: "pink" as const
    },
    {
      value: 24,
      label: "Hours Support",
      prefix: "",
      suffix: "/7",
      color: "green" as const
    }
  ];
  
  return (
    <section className="py-12 px-6 md:px-12 bg-gradient-to-b from-dark-900 to-dark-800 relative">
      <div className="absolute inset-0 bg-[url('https://assets.codepen.io/12005/grid.svg')] bg-repeat opacity-5"></div>
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
          {stats.map((stat, index) => (
            <StatCounter key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}