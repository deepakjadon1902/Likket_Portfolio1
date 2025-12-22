import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Code, Globe, Smartphone, Database, Cloud, Shield, ArrowRight } from "lucide-react";
import webDevImg from "@/assets/web-dev.jpg";
import ProjectCardStack from "@/components/ui/project-card-stack";

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
    id: 1,
    title: "E-Commerce Platform",
    client: "Fashion Forward",
    description: "A complete e-commerce solution with 10,000+ products and seamless checkout.",
    fullDescription: "We developed a comprehensive e-commerce platform for Fashion Forward, one of India's leading fashion retailers. The platform features advanced product filtering, wishlist functionality, real-time inventory management, and a seamless checkout experience with multiple payment gateways including UPI, credit cards, and cash on delivery.",
    image: webDevImg,
    technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Stripe", "Redis"],
    results: [
      "300% increase in online sales within 6 months",
      "50% reduction in cart abandonment rate",
      "99.9% uptime with zero downtime during sales events",
      "2-second average page load time",
    ],
    link: "https://fashionforward.example.com",
  },
  {
    id: 2,
    title: "Corporate Website Redesign",
    client: "TechStart India",
    description: "Modern corporate website with integrated CRM and lead management.",
    fullDescription: "TechStart India approached us to completely redesign their outdated corporate website. We created a modern, professional design that reflects their innovative brand identity. The website includes an integrated CRM system, automated lead capture forms, and a comprehensive analytics dashboard for tracking visitor behavior.",
    image: webDevImg,
    technologies: ["Next.js", "TypeScript", "Prisma", "Tailwind CSS", "HubSpot API"],
    results: [
      "200% increase in qualified leads",
      "40% improvement in user engagement metrics",
      "65% faster page load times compared to old site",
      "SEO ranking improved from page 5 to page 1",
    ],
    link: "https://techstart.example.com",
  },
  {
    id: 3,
    title: "SaaS Analytics Dashboard",
    client: "GrowthHub",
    description: "Complex analytics dashboard with real-time data visualization.",
    fullDescription: "GrowthHub needed a powerful analytics platform to help their clients track marketing performance. We built a sophisticated SaaS dashboard featuring real-time data visualization, custom report generation, automated alerts, and white-label capabilities. The platform processes millions of data points daily.",
    image: webDevImg,
    technologies: ["React", "D3.js", "Python", "FastAPI", "TimescaleDB", "Docker"],
    results: [
      "99.99% uptime since launch",
      "5-second improvement in average load time",
      "10x faster report generation than competitors",
      "Serving 500+ enterprise clients globally",
    ],
  },
  {
    id: 4,
    title: "Healthcare Portal",
    client: "MediCare Plus",
    description: "Secure patient portal with telemedicine and appointment booking.",
    fullDescription: "We developed a HIPAA-compliant healthcare portal for MediCare Plus that enables patients to book appointments, conduct video consultations, access medical records, and manage prescriptions. The platform includes integration with major insurance providers and electronic health record systems.",
    image: webDevImg,
    technologies: ["Vue.js", "Node.js", "MongoDB", "WebRTC", "Twilio", "AWS"],
    results: [
      "70% reduction in appointment no-shows",
      "50,000+ telemedicine consultations in first year",
      "HIPAA compliant with zero security incidents",
      "Patient satisfaction score of 4.8/5",
    ],
  },
  {
    id: 5,
    title: "Real Estate Marketplace",
    client: "PropertyHub",
    description: "Property listing platform with virtual tours and mortgage calculator.",
    fullDescription: "PropertyHub wanted to disrupt the traditional real estate market with a modern platform. We built a comprehensive marketplace featuring 360° virtual property tours, AI-powered property recommendations, integrated mortgage calculators, and direct messaging between buyers and agents.",
    image: webDevImg,
    technologies: ["Next.js", "Three.js", "Python", "TensorFlow", "PostgreSQL", "Mapbox"],
    results: [
      "1 million+ property listings",
      "Average deal closure time reduced by 40%",
      "2 million monthly active users",
      "Featured in TechCrunch and Forbes India",
    ],
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
                whileHover={{ 
                  y: -10,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
                className="card-premium p-6"
                style={{
                  transformStyle: "preserve-3d",
                  perspective: "1000px",
                }}
              >
                <motion.div 
                  className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-highlight flex items-center justify-center mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  style={{
                    boxShadow: "0 10px 30px -10px hsl(210 100% 45% / 0.4)",
                  }}
                >
                  <service.icon className="w-7 h-7 text-accent-foreground" />
                </motion.div>
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
                whileHover={{ 
                  scale: 1.1,
                  y: -5,
                }}
                className="px-6 py-3 rounded-full bg-card border border-border text-foreground font-medium hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-300 cursor-default"
                style={{
                  boxShadow: "0 4px 15px -3px hsl(215 50% 23% / 0.1)",
                }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Projects - 3D Stacked Cards */}
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
              <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
                Click on a card to view project details, or cycle through our portfolio
              </p>
            </motion.div>
          </div>

          <ProjectCardStack projects={projects} />
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
