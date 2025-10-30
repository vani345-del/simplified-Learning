import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Trophy, Users, Briefcase, Globe } from "lucide-react";

const achievements = [
  { icon: Trophy, value: 90, label: "Programs", suffix: "+" },
  { icon: Users, value: 1000, label: "Students", suffix: "+" },
  { icon: Briefcase, value: 100, label: "Workshops", suffix: "+" },
  { icon: Globe, value: 100, label: "International Students", suffix: "+" },
];

function CountUp({ end, duration = 2, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime;
    let animationFrame;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);

      const easeOutQuad = (t) => t * (2 - t);
      const currentCount = Math.floor(easeOutQuad(progress) * end);

      setCount(currentCount);

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, isInView]);

  return (
    <div
      ref={ref}
      className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-primary bg-clip-text text-blue-700"
      data-testid={`counter-value-${end}`}
    >
      {count}
      {suffix}
    </div>
  );
}

export function Achivement() {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block mb-4"
          >
            <div className="flex flex-col items-center text-center px-4">
  <span className="px-4 py-2 bg-primary/10 text-indigo-600 rounded-full text-sm font-semibold">
    Our Impact
  </span>
   


 <div className="w-full flex justify-center">
  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 sm:mb-6">
    Transforming Education
    <span className="bg-gradient-primary bg-clip-text text-indigo-600"> Worldwide</span>
  </h2>
</div>

  <p className="text-muted-foreground text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
    Delivering excellence in eLearning solutions and empowering thousands of learners globally
  </p>
</div>
  </motion.div>


        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative"
                data-testid={`achievement-card-${index}`}
              >
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500 rounded-3xl" />

                <div className="relative bg-white border-3 border-indigo-500 rounded-3xl p-6 sm:p-8 md:p-10 text-center shadow-card hover:shadow-glow transition-all duration-300 backdrop-blur-sm">
                  <motion.div
                    className="flex justify-center mb-4 sm:mb-6"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="relative">
                      <div className="absolute inset-0 bg-blue-300 rounded-2xl blur-md opacity-50 group-hover:opacity-100 transition-opacity duration-300 animate-glow" />

                      <div className="relative w-16 h-16 sm:w-20 sm:h-20 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-lg">
                        <Icon className="h-8 w-8 sm:h-10 sm:w-10 text-primary-foreground drop-shadow-lg" />
                      </div>
                    </div>
                  </motion.div>

                  <CountUp end={achievement.value} suffix={achievement.suffix} />

                  <p className="text-muted-foreground font-semibold mt-3 sm:mt-4 text-base sm:text-lg">
                    {achievement.label}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-12 sm:mt-16 text-center"
        >
          <div className="inline-block w-16 h-1 bg-gradient-primary rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}
