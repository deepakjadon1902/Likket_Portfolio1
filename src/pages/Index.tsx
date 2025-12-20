import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Code, Palette, TrendingUp, Users, Play, CheckCircle, Star } from "lucide-react";
import { SparklesCore } from "@/components/ui/sparkles";
import heroBg from "@/assets/hero-bg.jpg";
import webDevImg from "@/assets/web-dev.jpg";
import socialMediaImg from "@/assets/social-media.jpg";
import digitalMarketingImg from "@/assets/digital-marketing.jpg";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Custom websites and web applications built with cutting-edge technologies for optimal performance.",
    link: "/web-development",
    image: webDevImg,
  },
  {
    icon: Users,
    title: "Social Media Marketing",
    description: "Strategic social media campaigns that boost engagement and grow your online presence.",
    link: "/social-media-marketing",
    image: socialMediaImg,
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "Data-driven digital marketing strategies that deliver measurable results and ROI.",
    link: "/digital-marketing",
    image: digitalMarketingImg,
  },
];

const stats = [
  { value: "150+", label: "Projects Completed" },
  { value: "50+", label: "Happy Clients" },
  { value: "5+", label: "Years Experience" },
  { value: "98%", label: "Client Satisfaction" },
];

const testimonials = [
  {
    name: "Rajesh Kumar",
    company: "TechStart India",
    content: "Liklet transformed our online presence. Their web development team delivered beyond expectations.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    company: "Fashion Forward",
    content: "The social media marketing strategies increased our engagement by 300%. Highly recommended!",
    rating: 5,
  },
  {
    name: "Amit Patel",
    company: "GrowthHub",
    content: "Professional team with exceptional digital marketing expertise. Our ROI improved significantly.",
    rating: 5,
  },
];

const Index = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center hero-gradient overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <img
            src={heroBg}
            alt="Digital technology background"
            className="w-full h-full object-cover opacity-30 mix-blend-overlay"
          />
          <SparklesCore
            id="heroSparkles"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className="absolute inset-0 w-full h-full"
            particleColor="#FFFFFF"
            speed={1}
          />
        </div>
        
        {/* Gradient overlays */}
        <div className="absolute inset-x-20 top-1/2 bg-gradient-to-r from-transparent via-highlight/30 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-60 top-1/2 bg-gradient-to-r from-transparent via-accent to-transparent h-[5px] w-1/4 blur-sm" />
        
        <div className="container-max section-padding relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-accent/20 text-accent-foreground text-sm font-medium mb-6">
              Welcome to Liklet
            </span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
              Transforming Ideas Into
              <span className="block text-highlight">Digital Excellence</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              We are a full-service digital agency specializing in web development, social media marketing, and digital strategies that drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-accent text-lg">
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 transition-all duration-300"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-card py-16">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-display font-bold text-accent mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-gradient section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-accent font-medium">What We Do</span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mt-2">
                Our Premium Services
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
                Comprehensive digital solutions tailored to elevate your business to new heights.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link
                  to={service.link}
                  className="card-premium block h-full group overflow-hidden"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                      <service.icon className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <span className="inline-flex items-center text-accent font-medium group-hover:gap-2 transition-all">
                      Learn More <ArrowRight className="w-4 h-4 ml-1" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-card section-padding">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-accent font-medium">Why Choose Liklet</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                We Deliver Results That Matter
              </h2>
              <p className="text-muted-foreground mb-8">
                At Liklet, we combine creativity with technology to create digital experiences that resonate with your audience and drive business growth.
              </p>
              <ul className="space-y-4">
                {[
                  "Expert team with years of industry experience",
                  "Customized solutions tailored to your needs",
                  "Transparent communication throughout the project",
                  "Ongoing support and maintenance",
                  "Results-driven approach with measurable KPIs",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </motion.li>
                ))}
              </ul>
              <Link to="/about" className="btn-accent mt-8 inline-flex">
                About Our Company
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img
                  src={webDevImg}
                  alt="Professional web development"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-display font-bold">5+</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* YouTube Section */}
      <section className="hero-gradient section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-highlight font-medium">Our YouTube Channel</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mt-2">
                Product Reviews & Insights
              </h2>
              <p className="text-primary-foreground/80 max-w-2xl mx-auto mt-4">
                Watch our comprehensive product reviews and stay updated with the latest tech insights.
              </p>
            </motion.div>
          </div>
          <div className="flex justify-center">
            <Link
              to="/youtube"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-primary-foreground text-primary font-medium hover:scale-105 transition-transform"
            >
              <Play className="w-6 h-6" />
              Visit Our Channel
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-card section-padding">
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
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-premium p-6"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-highlight text-highlight" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-accent section-padding">
        <div className="container-max text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-accent-foreground mb-4">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-accent-foreground/80 max-w-2xl mx-auto mb-8">
              Let's discuss how Liklet can help you achieve your business goals with our expert digital solutions.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 rounded-lg bg-primary-foreground text-primary font-medium hover:scale-105 transition-transform"
            >
              Get in Touch
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
