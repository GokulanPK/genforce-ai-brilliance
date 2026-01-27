import { motion, Variants } from "framer-motion";
import { Brain, Code2, Layers, Globe, Plug, Zap } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "AI Solutions & Automation",
    description: "Custom AI integrations, chatbots, and intelligent automation systems that streamline your operations and enhance decision-making.",
  },
  {
    icon: Code2,
    title: "Web Development",
    description: "Full-stack web applications built with modern technologies. From responsive frontends to scalable backend systems.",
  },
  {
    icon: Layers,
    title: "SaaS Product Development",
    description: "End-to-end SaaS solutions with subscription management, multi-tenancy, and enterprise-grade security.",
  },
  {
    icon: Globe,
    title: "Portfolio & Business Websites",
    description: "High-converting landing pages and corporate websites that establish your digital presence and drive growth.",
  },
  {
    icon: Plug,
    title: "API Integrations",
    description: "Seamless third-party integrations including payment gateways, CRMs, analytics, and custom API development.",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Speed optimization, SEO enhancement, and infrastructure scaling to ensure your applications perform at their best.",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const Services = () => {
  return (
    <section id="services" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />
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
          <span className="text-primary font-medium text-sm uppercase tracking-wider">What We Do</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6">
            Services That <span className="gradient-text">Drive Results</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From concept to deployment, we deliver comprehensive solutions tailored to your business needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-card-hover p-8 group"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;