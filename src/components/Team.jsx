import { Linkedin, Mail } from "lucide-react";

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "CEO & Founder",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    bio: "15+ years of experience in EdTech and digital transformation",
    linkedin: "#",
    email: "sarah@company.com"
  },
  {
    name: "Michael Chen",
    role: "CTO",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    bio: "Tech innovator specializing in learning management systems",
    linkedin: "#",
    email: "michael@company.com"
  },
  {
    name: "Emily Rodriguez",
    role: "Head of Design",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    bio: "Creative director with a passion for user-centered design",
    linkedin: "#",
    email: "emily@company.com"
  },
  {
    name: "David Park",
    role: "Lead Developer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    bio: "Full-stack expert building scalable educational platforms",
    linkedin: "#",
    email: "david@company.com"
  }
];

const Team = () => {
  return (
    <section id="team" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-indigo-700 to-cyan-500 bg-clip-text text-transparent">
            Meet Our Team
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Talented professionals dedicated to transforming education through innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative bg-gray-100 backdrop-blur-sm rounded-xl p-6 border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Profile Image */}
              <div className="relative mb-4 overflow-hidden rounded-xl">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full aspect-square object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Info */}
              <div className="text-center mb-4">
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
              </div>

              {/* Social Links */}
              <div className="flex justify-center gap-3">
                <a
                  href={member.linkedin}
                  className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors"
                  aria-label={`${member.name}'s LinkedIn`}
                >
                  <Linkedin className="w-4 h-4 text-primary" />
                </a>
                <a
                  href={`mailto:${member.email}`}
                  className="p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors"
                  aria-label={`Email ${member.name}`}
                >
                  <Mail className="w-4 h-4 text-primary" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
