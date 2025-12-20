import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Users, Heart, Share2, MessageCircle, TrendingUp, Camera, ArrowRight, CheckCircle } from "lucide-react";
import socialMediaImg from "@/assets/social-media.jpg";

const services = [
  {
    icon: Users,
    title: "Social Media Management",
    description: "Complete management of your social media profiles across all platforms.",
  },
  {
    icon: Heart,
    title: "Content Creation",
    description: "Engaging posts, graphics, and videos that resonate with your audience.",
  },
  {
    icon: Share2,
    title: "Influencer Marketing",
    description: "Strategic partnerships with influencers to amplify your brand reach.",
  },
  {
    icon: MessageCircle,
    title: "Community Management",
    description: "Building and nurturing your online community for lasting engagement.",
  },
  {
    icon: TrendingUp,
    title: "Social Analytics",
    description: "Data-driven insights to optimize your social media strategy.",
  },
  {
    icon: Camera,
    title: "Social Advertising",
    description: "Targeted ad campaigns on Facebook, Instagram, LinkedIn, and more.",
  },
];

const platforms = [
  "Facebook", "Instagram", "Twitter/X", "LinkedIn", "YouTube", "Pinterest", "TikTok", "WhatsApp Business",
];

const caseStudies = [
  {
    title: "Fashion Brand Launch",
    client: "StyleHub",
    description: "Complete social media strategy for a new fashion brand launch.",
    results: ["500K+ impressions in first month", "200% growth in followers", "15% engagement rate"],
  },
  {
    title: "Restaurant Chain",
    client: "FoodiesDelight",
    description: "Social media management for a multi-location restaurant chain.",
    results: ["50% increase in foot traffic", "10K+ user-generated content", "35% boost in orders"],
  },
  {
    title: "Tech Startup",
    client: "InnovateTech",
    description: "B2B social media marketing for a SaaS startup.",
    results: ["300 qualified leads", "25% increase in demo requests", "Industry influencer partnerships"],
  },
];

const SocialMediaMarketing = () => {
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
                Social Media Marketing
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
                Grow Your Brand
                <span className="block text-highlight">On Social Media</span>
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80 mb-8">
                Strategic social media marketing that builds engaged communities, increases brand awareness, and drives measurable business results.
              </p>
              <Link to="/contact" className="btn-accent">
                Boost Your Social Presence
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
                  src={socialMediaImg}
                  alt="Social media marketing"
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
                Social Media Services
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
                End-to-end social media solutions to elevate your brand presence.
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

      {/* Platforms */}
      <section className="section-gradient section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-accent font-medium">Platforms</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
                Platforms We Manage
              </h2>
            </motion.div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {platforms.map((platform, index) => (
              <motion.span
                key={platform}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="px-6 py-3 rounded-full bg-card border border-border text-foreground font-medium hover:bg-accent hover:text-accent-foreground transition-colors cursor-default"
              >
                {platform}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-card section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-accent font-medium">Case Studies</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
                Success Stories
              </h2>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-premium p-6"
              >
                <div className="text-sm text-accent font-medium mb-2">{study.client}</div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {study.title}
                </h3>
                <p className="text-muted-foreground mb-4">{study.description}</p>
                <ul className="space-y-2">
                  {study.results.map((result, i) => (
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
              Ready to Dominate Social Media?
            </h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              Let's create a social media strategy that drives engagement and growth.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 rounded-lg bg-primary-foreground text-primary font-medium hover:scale-105 transition-transform"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SocialMediaMarketing;
