import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Heart, Target, Rocket, Users, ArrowRight } from "lucide-react";
import teamImg from "@/assets/team.jpg";

const values = [
  {
    icon: Heart,
    title: "Passion",
    description: "We pour our heart into every project, treating each client's vision as our own.",
  },
  {
    icon: Target,
    title: "Excellence",
    description: "We strive for perfection in every detail, delivering work that exceeds expectations.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We believe in working closely with our clients to achieve shared success.",
  },
  {
    icon: Rocket,
    title: "Innovation",
    description: "We embrace new technologies and creative approaches to solve complex challenges.",
  },
];

const timeline = [
  { year: "2019", title: "Founded", description: "Liklet was born with a vision to transform digital experiences." },
  { year: "2020", title: "Growth", description: "Expanded our team and services to serve diverse industries." },
  { year: "2021", title: "Recognition", description: "Awarded for excellence in digital marketing and web development." },
  { year: "2022", title: "Expansion", description: "Launched social media marketing and YouTube content services." },
  { year: "2023", title: "Innovation", description: "Introduced cutting-edge AI-powered solutions for clients." },
  { year: "2024", title: "Excellence", description: "Serving 50+ satisfied clients across multiple countries." },
];

const About = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="hero-gradient section-padding pt-32">
        <div className="container-max">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-accent/20 text-accent-foreground text-sm font-medium mb-6">
                About Liklet
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                Welcome to Liklet
                <span className="block text-highlight mt-2">Where Innovation Meets Excellence</span>
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto">
                We are more than a digital agency – we are your partners in growth. At Liklet, we blend creativity, technology, and strategy to create digital experiences that inspire and deliver results.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-gradient section-padding">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <span className="text-accent font-medium">Our Story</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                The Journey of Liklet
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Liklet was founded in 2019 with a simple yet powerful vision: to help businesses thrive in the digital age. What started as a small team of passionate developers and marketers has grown into a full-service digital agency serving clients across the globe.
                </p>
                <p>
                  Our name "Liklet" represents the connection we create – like a thread that weaves together creativity, technology, and business success. We believe that every business deserves a strong digital presence, and we're here to make that happen.
                </p>
                <p>
                  Today, we're proud to have helped over 50 businesses transform their digital presence, increase their online visibility, and achieve measurable growth. Our team combines years of expertise with a relentless pursuit of innovation.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={teamImg}
                  alt="Liklet team"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-card section-padding">
        <div className="container-max">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card-premium p-8"
            >
              <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                To empower businesses with innovative digital solutions that drive growth, enhance brand visibility, and create meaningful connections with their audience. We are committed to delivering excellence in every project we undertake.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="card-premium p-8"
            >
              <div className="w-14 h-14 rounded-lg bg-accent/10 flex items-center justify-center mb-6">
                <Rocket className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-display text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                To be the most trusted digital partner for businesses worldwide, known for our creativity, technical expertise, and unwavering commitment to client success. We envision a world where every business can thrive in the digital landscape.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-gradient section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-accent font-medium">Our Values</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
                What Drives Us
              </h2>
            </motion.div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-accent" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-card section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-accent font-medium">Our Journey</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
                Milestones That Define Us
              </h2>
            </motion.div>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-border hidden md:block" />
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex flex-col md:flex-row items-center gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="flex-1 text-center md:text-right">
                    {index % 2 === 0 && (
                      <div className="card-premium p-6 inline-block">
                        <div className="text-accent font-bold text-lg">{item.year}</div>
                        <h3 className="font-display text-xl font-semibold text-foreground">{item.title}</h3>
                        <p className="text-muted-foreground mt-2">{item.description}</p>
                      </div>
                    )}
                  </div>
                  <div className="w-4 h-4 rounded-full bg-accent relative z-10 hidden md:block" />
                  <div className="flex-1 text-center md:text-left">
                    {index % 2 !== 0 && (
                      <div className="card-premium p-6 inline-block">
                        <div className="text-accent font-bold text-lg">{item.year}</div>
                        <h3 className="font-display text-xl font-semibold text-foreground">{item.title}</h3>
                        <p className="text-muted-foreground mt-2">{item.description}</p>
                      </div>
                    )}
                  </div>
                  {/* Mobile view */}
                  <div className="md:hidden card-premium p-6 w-full">
                    <div className="text-accent font-bold text-lg">{item.year}</div>
                    <h3 className="font-display text-xl font-semibold text-foreground">{item.title}</h3>
                    <p className="text-muted-foreground mt-2">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
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
              Ready to Start Your Journey With Us?
            </h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              Let's create something amazing together. Contact us today to discuss your project.
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

export default About;
