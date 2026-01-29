import { motion, Variants } from "framer-motion";
import { Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "EdConnect – Mentor Student Collaboration Platform",
    description: "A web platform that connects students with mentors for guidance, doubt solving, project collaboration, and scheduled mentoring sessions. Includes profile management, chat interaction, and structured learning workflows.",
    tags: ["React", "Node.js", "MongoDB", "Socket.io"],
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80",
    github: "https://github.com/yourusername/edconnect",
  },
  {
    title: "Groww Clone – Stock Trading Platform UI",
    description: "A frontend replica of a stock trading and investment platform featuring portfolio visualization, live market UI components, stock listings, charts, and modern fintech dashboard layout.",
    tags: ["React", "Chart.js", "Tailwind", "REST API"],
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    github: "https://github.com/yourusername/groww-clone",
  },
  {
    title: "AquaEase – Water Delivery Management System",
    description: "A delivery management platform for ordering, scheduling, and tracking water supply. Includes customer orders, delivery routing, vendor management, and order history tracking.",
    tags: ["React", "Express", "PostgreSQL", "Maps API"],
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
    github: "https://github.com/yourusername/aquaease",
  },
  {
    title: "AI Assistant – Smart Interface Design",
    description: "A modern AI assistant UI prototype designed for conversational interaction, clean layouts, animations, and futuristic interface concepts.",
    tags: ["React", "Framer Motion", "TypeScript", "OpenAI"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    github: "https://github.com/yourusername/ai-assistant",
  },
  {
    title: "FoodieVerse – Food Discovery & Recommendation Platform",
    description: "A food discovery platform that allows users to explore restaurants, cuisines, trending dishes, and personalized food recommendations with rich UI experience.",
    tags: ["Next.js", "Prisma", "Tailwind", "Zomato API"],
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
    github: "https://github.com/yourusername/foodieverse",
  },
  {
    title: "Nest Verified Living – Property Listing Platform",
    description: "A real estate platform that connects property owners directly with tenants and buyers, enabling verified listings, property browsing, filtering, and direct communication without brokers.",
    tags: ["React", "Node.js", "MongoDB", "Cloudinary"],
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
    github: "https://github.com/yourusername/nest-verified-living",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const Projects = () => {
  return (
    <section id="projects" className="section-padding relative overflow-hidden bg-secondary/30">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-glow-secondary/5 rounded-full blur-[150px]" />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Work</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our portfolio of successful projects delivered for clients across various industries.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-card-hover overflow-hidden group"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button 
                    size="sm" 
                    variant="secondary" 
                    className="opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      View on GitHub
                    </a>
                  </Button>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs font-medium bg-secondary text-muted-foreground rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;