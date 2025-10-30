import { Mail, Phone, MapPin, Send } from "lucide-react";


const Contactus = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/10 to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Let's <span className="text-indigo-700">Get Started</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Ready to transform your learning experience? Contact us today
            </p>
          </div>

          <div className="glass-strong rounded-3xl p-8 md:p-12  bg-gray-100">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="space-y-8 ">
                <div>
                  <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                  <p className="text-muted-foreground">
                    Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-indigo-700 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Email</div>
                      <a href="mailto:info@simplifiedlearning.in" className="text-muted-foreground hover:text-primary transition-colors">
                        info@simplifiedlearning.in
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl  bg-indigo-700 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Phone</div>
                      <div className="text-muted-foreground">
                        Available Monday - Friday, 9am - 6pm
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl  bg-indigo-700 from-secondary to-primary flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Location</div>
                      <div className="text-muted-foreground">
                        Serving clients worldwide
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col justify-center space-y-6">
                <div className="glass rounded-2xl p-6 space-y-4">
                  <h4 className="text-xl font-bold">Ready to Start?</h4>
                  <p className="text-muted-foreground">
                    Let's discuss your eLearning needs and create something amazing together.
                  </p>
                  <button
  size="lg"
  className="bg-indigo-700 hover:opacity-90 shadow-glow w-full group flex items-center justify-center px-4 py-3 rounded-md text-white transition-all duration-300"
  onClick={() => window.location.href = "mailto:info@simplifiedlearning.in"}
>
  Send us a Message
  <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
</button>

                </div>

                <div className="glass rounded-2xl p-6 border-2 border-accent/30">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-accent text-xl">★</span>
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Premium Support</div>
                      <p className="text-sm text-muted-foreground">
                        We provide dedicated support throughout your project lifecycle
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactus;
