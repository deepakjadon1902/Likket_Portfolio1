import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Code, Globe, Smartphone, Database, Cloud, Shield, ArrowRight, Star, Quote, Layout, Server, Layers, FileCode, Palette, Monitor } from "lucide-react";
import webDevImg from "@/assets/web-dev.jpg";
import ProjectCardStack from "@/components/ui/project-card-stack";

const services = [
  {
    icon: Globe,
    title: "Business Websites",
    description: "A professional website that makes visitors trust you — fast, mobile-friendly, and built to turn browsers into buyers.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description: "Most people browse on their phones. We make sure your site looks and works perfectly on every screen size.",
  },
  {
    icon: Code,
    title: "Custom Applications",
    description: "Need something specific? We build custom tools that solve your exact business problems.",
  },
  {
    icon: Database,
    title: "Easy Content Updates",
    description: "Update your website yourself — no tech skills needed. We set you up with simple tools you'll actually use.",
  },
  {
    icon: Cloud,
    title: "Online Stores",
    description: "Sell products online with secure checkout. We handle the technical stuff so you can focus on selling.",
  },
  {
    icon: Shield,
    title: "Ongoing Support",
    description: "Websites need care. We keep yours secure, updated, and running smoothly so you don't have to worry.",
  },
];

const projectTypes = [
  {
    icon: Layout,
    title: "Frontend Development",
    description: "The part your customers see. We make it beautiful, fast, and easy to use.",
    features: ["Clean, Modern Design", "Smooth Animations", "Fast Loading", "Works on All Browsers"],
  },
  {
    icon: Server,
    title: "Backend Development",
    description: "The engine under the hood. We build systems that handle your data securely.",
    features: ["Secure Data Handling", "Custom Features", "User Accounts", "Payment Processing"],
  },
  {
    icon: Layers,
    title: "Complete Web Apps",
    description: "Full applications built from scratch — everything from login to checkout.",
    features: ["All-in-One Solutions", "Real-Time Updates", "Third-Party Connections", "Built to Scale"],
  },
  {
    icon: FileCode,
    title: "Landing Pages",
    description: "One-page sites designed with one goal: get visitors to take action.",
    features: ["High Conversion", "Lightning Fast", "SEO Ready", "Trackable Results"],
  },
  {
    icon: Palette,
    title: "Portfolio Sites",
    description: "Showcase your work professionally. Perfect for freelancers and creative agencies.",
    features: ["Stunning Galleries", "Easy Updates", "Contact Forms", "Social Integration"],
  },
  {
    icon: Monitor,
    title: "Corporate Websites",
    description: "Professional sites that build trust and credibility with potential clients.",
    features: ["Team Pages", "Service Showcases", "Case Studies", "Client Testimonials"],
  },
];

const technologies = [
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "Vue.js", category: "Frontend" },
  { name: "Angular", category: "Frontend" },
  { name: "TypeScript", category: "Language" },
  { name: "Node.js", category: "Backend" },
  { name: "Python", category: "Backend" },
  { name: "Django", category: "Backend" },
  { name: "Express.js", category: "Backend" },
  { name: "PostgreSQL", category: "Database" },
  { name: "MongoDB", category: "Database" },
  { name: "Redis", category: "Database" },
  { name: "AWS", category: "Cloud" },
  { name: "Docker", category: "DevOps" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "WordPress", category: "CMS" },
  { name: "Shopify", category: "E-Commerce" },
  { name: "Firebase", category: "Cloud" },
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

const customerReviews = [
  {
    name: "Rajesh Sharma",
    company: "TechStart India",
    role: "CEO",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    review: "Liklet transformed our entire digital presence. The new website increased our leads by 200% and the team was incredibly professional throughout the process. Highly recommended!",
  },
  {
    name: "Priya Patel",
    company: "Fashion Forward",
    role: "Marketing Director",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    review: "The e-commerce platform they built for us is phenomenal. Our online sales have tripled since launch. The attention to detail and user experience is outstanding.",
  },
  {
    name: "Amit Kumar",
    company: "GrowthHub",
    role: "Founder & CTO",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    review: "Working with Liklet on our SaaS dashboard was a game-changer. They understood our complex requirements and delivered a product that exceeded our expectations.",
  },
  {
    name: "Dr. Sneha Reddy",
    company: "MediCare Plus",
    role: "Chief Medical Officer",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    review: "The healthcare portal has revolutionized how we interact with patients. It's secure, user-friendly, and has significantly improved our operational efficiency.",
  },
  {
    name: "Vikram Singh",
    company: "PropertyHub",
    role: "Co-Founder",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    review: "Liklet's technical expertise is unmatched. They built us a platform that handles millions of users without breaking a sweat. Best investment we've ever made.",
  },
  {
    name: "Ananya Gupta",
    company: "EduTech Pro",
    role: "Product Manager",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    review: "From concept to launch, Liklet was with us every step of the way. Their communication is excellent and they always deliver on time. True professionals!",
  },
];

const stats = [
  { value: "150+", label: "Projects Completed" },
  { value: "50+", label: "Happy Clients" },
  { value: "4.9", label: "Average Rating" },
  { value: "99%", label: "Client Satisfaction" },
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
                For Businesses That Want Results
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
                Websites That
                <span className="block text-highlight">Bring You Customers</span>
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80 mb-8">
                A pretty website is nice, but what you really need is a website that works — one that shows up on Google, loads fast on phones, and convinces visitors to contact you.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-2xl md:text-3xl font-bold text-highlight">{stat.value}</div>
                    <div className="text-sm text-primary-foreground/70">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
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

      {/* Project Types */}
      <section className="bg-card section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-accent font-medium">What We Build</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
                Types of Projects We Work On
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
                From simple landing pages to complex enterprise applications, we handle it all.
              </p>
            </motion.div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="card-premium p-6 group"
              >
                <motion.div 
                  className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-highlight flex items-center justify-center mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  style={{ boxShadow: "0 10px 30px -10px hsl(210 100% 45% / 0.4)" }}
                >
                  <type.icon className="w-7 h-7 text-accent-foreground" />
                </motion.div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {type.title}
                </h3>
                <p className="text-muted-foreground mb-4">{type.description}</p>
                <ul className="space-y-2">
                  {type.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-gradient section-padding">
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
      <section className="bg-card section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-accent font-medium">Technologies</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
                Technologies We Master
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
                We use the latest and most reliable technologies to build your projects.
              </p>
            </motion.div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.03 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.1,
                  y: -5,
                }}
                className="group relative"
              >
                <span 
                  className="px-6 py-3 rounded-full bg-background border border-border text-foreground font-medium hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-300 cursor-default inline-block"
                  style={{ boxShadow: "0 4px 15px -3px hsl(215 50% 23% / 0.1)" }}
                >
                  {tech.name}
                </span>
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-primary text-primary-foreground text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {tech.category}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="section-gradient section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-accent font-medium">Testimonials</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
                What Our Clients Say
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
                Don't just take our word for it - hear from our satisfied clients.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {customerReviews.map((review, index) => (
              <motion.div
                key={review.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-premium p-6 relative"
              >
                <Quote className="absolute top-4 right-4 w-8 h-8 text-accent/20" />
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-accent"
                  />
                  <div>
                    <h4 className="font-semibold text-foreground">{review.name}</h4>
                    <p className="text-sm text-muted-foreground">{review.role}, {review.company}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-highlight text-highlight" />
                  ))}
                </div>
                <p className="text-muted-foreground italic">"{review.review}"</p>
              </motion.div>
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
