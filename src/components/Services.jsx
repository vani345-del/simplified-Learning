import { motion } from "framer-motion";
import rapid from '../assets/rapid.jpg';


const Services = () => {
  return (
    <section id="services" className="py-12 sm:py-16 md:py-20 bg-gray-100 from-background via-background to-primary/5">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Image Section */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-1 w-full"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-primary opacity-20 rounded-lg blur-xl group-hover:opacity-30 transition-opacity duration-300"></div>
              <img
                src={rapid}
                alt="eLearning Illustration"
                className="relative w-full max-w-md mx-auto rounded-lg shadow-card hover:shadow-glow transition-all duration-300 hover:scale-105"
              />
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex-1 w-full text-center lg:text-left"
          >
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold  mb-4 sm:mb-6 bg-gradient-primary bg-clip-text text-indigo-700"
            >
              Our Services
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-4 sm:space-y-5"
            >
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                We provide tailor-made eLearning solutions designed to customize your learning experience with innovative and creative visual designs. Our template-based development utilizes various authoring tools that help deliver quick and effective training solutions to meet immediate business needs.
              </p>
              
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                We specialize in reengineering legacy content to ensure smooth performance across multiple devices and browsers, restructuring layouts with modern standards and enhanced user experience. Additionally, our translation and localization services help globalize your content by converting courses into 30 international languages, expanding your reach globally.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="mt-6 sm:mt-8"
            >
             <button
  type="button"
  size="lg"
  className="shadow-glow hover:shadow-xl transition-all duration-300 hover:scale-105 bg-indigo-700 text-white px-6 py-3 rounded-md"
>
  Learn More
</button>

            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services