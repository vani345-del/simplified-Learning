import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 border-t border-border/30">
      <div className="absolute inset-0 bg-indigo-700 from-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center font-bold text-sm">
              S
            </div>
            <span className="font-semibold">
              <span className="text-gradient">Simplified Learning Solutions</span>
            </span>
          </div>

          <div className="text-center md:text-left">
            <p className="text-muted-foreground flex items-center gap-2 justify-center md:justify-start">
              Made with <Heart className="w-4 h-4 text-accent fill-accent" /> for better learning experiences
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              © {currentYear} Simplified Learning Solutions. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
