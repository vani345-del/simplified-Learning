import { motion } from "framer-motion";
import { Heart, Settings, Wrench, Lightbulb } from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "Customer-Centric Solutions",
    description:
      "We put your needs first, creating personalized learning experiences that truly resonate with your audience.",
  },
  {
    icon: Settings,
    title: "Customized Learning Services",
    description:
      "Every organization is unique. We tailor our solutions to match your specific goals and challenges.",
  },
  {
    icon: Wrench,
    title: "Tool Experts",
    description:
      "Master the latest eLearning technologies and platforms with our expert guidance and support.",
  },
  {
    icon: Lightbulb,
    title: "Innovative Support Team",
    description:
      "Our creative team brings fresh ideas and cutting-edge solutions to transform your learning programs.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose 
            <span className="text-indigo-600">
               Simplified Learning?
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Experience the difference with our comprehensive eLearning expertise
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative backdrop-blur-lg rounded-md p-6 hover:border-primary/50 transition-all duration-300 hover-elevate border-2 border-white  bg-gray-100"
                data-testid={`feature-card-${index}`}
                style={{
                  background:
                    "linear-gradient(135deg, hsl(var(--background) / 0.5), hsl(var(--background) / 0.3))",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-accent/0 group-hover:from-primary/10 group-hover:to-accent/10 rounded-md transition-all duration-300 bg-gray-100" />

                <div className="relative z-10">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-blue/10 group-hover:bg-yellow/20 rounded-full flex items-center justify-center transition-all duration-300">
                      <Icon className="h-8 w-8 text-indigo-600" />
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-foreground mb-3 text-center">
                    {feature.title}
                  </h3>

                  <p className="text-muted-foreground text-center text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
