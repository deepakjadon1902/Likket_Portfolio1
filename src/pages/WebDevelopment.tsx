import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Code, Globe, Smartphone, Database, Cloud, Shield, ArrowRight, CheckCircle } from "lucide-react";
import webDevImg from "@/assets/web-dev.jpg";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description: "Custom websites that are visually stunning, fast-loading, and SEO-optimized.",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description: "Mobile-first designs that look perfect on all devices and screen sizes.",
  },
  {
    icon: Code,
    title: "Web Applications",
    description: "Complex web applications with modern frameworks and technologies.",
  },
  {
    icon: Database,
    title: "CMS Development",
    description: "Content management systems that make updating your site a breeze.",
  },
  {
    icon: Cloud,
    title: "E-Commerce Solutions",
    description: "Online stores with secure payment integration and inventory management.",
  },
  {
    icon: Shield,
    title: "Maintenance & Support",
    description: "Ongoing support, updates, and security monitoring for your website.",
  },
];

const technologies = [
  "React", "Next.js", "Vue.js", "Angular", "Node.js", "Python",
  "TypeScript", "PostgreSQL", "MongoDB", "AWS", "Tailwind CSS", "WordPress",
];

const projects = [
  {
    title: "E-Commerce Platform",
    client: "Fashion Forward",
    description: "A complete e-commerce solution with 10,000+ products and seamless checkout.",
    results: ["300% increase in online sales", "50% reduction in cart abandonment"],
  },
  {
    title: "Corporate Website",
    client: "TechStart India",
    description: "Modern corporate website with integrated CRM and lead management.",
    results: ["200% increase in leads", "40% improvement in user engagement"],
  },
  {
    title: "SaaS Dashboard",
    client: "GrowthHub",
    description: "Complex analytics dashboard with real-time data visualization.",
    results: ["99.9% uptime", "5-second load time improvement"],
  },
];

const WebDevelopment = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="hero-gradient section-padding pt-32">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-accent/20 text-accent-foreground text-sm font-medium mb-6">
                Web Development
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
                Build Powerful
                <span className="block text-highlight">Digital Experiences</span>
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80 mb-8">
                From simple websites to complex web applications, our expert developers create solutions that drive results and exceed expectations.
              </p>
              <Link to="/contact" className="btn-accent">
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={webDevImg}
                  alt="Web development workspace"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-card section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-accent font-medium">Our Services</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
                Web Development Services
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
                Comprehensive web development solutions tailored to your business needs.
              </p>
            </motion.div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-premium p-6"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="section-gradient section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-accent font-medium">Technologies</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
                Technologies We Use
              </h2>
            </motion.div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="px-6 py-3 rounded-full bg-card border border-border text-foreground font-medium hover:bg-accent hover:text-accent-foreground transition-colors cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="bg-card section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-accent font-medium">Our Work</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
                Featured Projects
              </h2>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-premium p-6"
              >
                <div className="text-sm text-accent font-medium mb-2">{project.client}</div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <ul className="space-y-2">
                  {project.results.map((result, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                      <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                      {result}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="hero-gradient section-padding">
        <div className="container-max text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Ready to Build Your Website?
            </h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              Let's discuss your project and create something amazing together.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 rounded-lg bg-primary-foreground text-primary font-medium hover:scale-105 transition-transform"
            >
              Get a Free Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WebDevelopment;
