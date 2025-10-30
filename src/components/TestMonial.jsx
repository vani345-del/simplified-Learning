import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";


const testimonials = [
  {
    name: "Haley Horan",
    role: "Program Officer (Learning and Communications)",
    quote: "I have had a positive experience in working with Simplified Learning Solutions in the development of online learning modules. I am happy to recommend them for their skills, speed, flexibility, and reliability.",
  },
  {
    name: "Dave Saben",
    role: "Co-Founder and Board Member",
    quote: "The team at Simplified Learning Solutions are course development ninjas! They consistently meet deadlines and can turn around projects at a speed and quality unlike most in the field.",
  },
  {
    name: "Tom Dupont",
    role: "Owner & President",
    quote: "Simplified Learning Solutions seems to work around the clock. Easy to contact, quick response time, quality work, smart, very good with key software, and good written communications.",
  },
  {
    name: "Sapna Ganeshan",
    role: "President",
    quote: "Simplified Learning Solutions has surpassed all expectations in terms of their level of commitment, quality of work, and timeliness. They have excellent communication skills and keep everyone informed.",
  },
  {
    name: "Brendan Torazzi",
    role: "Director & Founder",
    quote: "I would have no reservations in recommending Simplified Learning Solutions for eLearning work. They are reliable, good for their word, and consistently deliver quality outcomes.",
  },
  {
    name: "Tim Austin",
    role: "Director",
    quote: "Simplified Learning Solutions provides eLearning development services for our company on a regular basis. They are always reliable, articulate, and deliver services that are cost-effective.",
  },
];

const TestMonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 relative">
      <div className="absolute inset-0 bg-gray-100 from-background via-accent/5 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Words from Our <span className="text-indigo-700">Delighted Customers</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glass-strong rounded-3xl p-8 md:p-12 relative overflow-hidden border-3 border-indigo-700">
            {/* Quote decoration */}
            <div className="absolute top-4 left-4 opacity-20">
              <Quote className="w-20 h-20 text-primary" />
            </div>
            <div className="absolute bottom-4 right-4 opacity-20 rotate-180">
              <Quote className="w-20 h-20 text-secondary" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center space-y-6">
              <p className="text-lg md:text-xl leading-relaxed text-foreground/90 italic">
                "{testimonials[currentIndex].quote}"
              </p>
              <div className="pt-6 border-t border-border/30">
                <div className="font-bold text-xl text-gradient">
                  {testimonials[currentIndex].name}
                </div>
                <div className="text-sm text-muted-foreground mt-1">
                  {testimonials[currentIndex].role}
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="rounded-full border-primary/30 hover:border-primary hover:bg-primary/10"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentIndex
                        ? "bg-primary w-8"
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/60"
                    }`}
                    aria-label={`Show testimonial ${index + 1}`}
                    aria-pressed={index === currentIndex}
                  />
                ))}
              </div>

              <button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="rounded-full border-primary/30 hover:border-primary hover:bg-primary/10"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestMonial;
