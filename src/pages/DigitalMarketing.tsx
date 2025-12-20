import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Search, BarChart3, Mail, Target, Megaphone, LineChart, ArrowRight, CheckCircle } from "lucide-react";
import digitalMarketingImg from "@/assets/digital-marketing.jpg";

const services = [
  {
    icon: Search,
    title: "Search Engine Optimization",
    description: "Improve your search rankings and drive organic traffic to your website.",
  },
  {
    icon: Target,
    title: "Pay-Per-Click Advertising",
    description: "Targeted ad campaigns on Google, Bing, and social platforms.",
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description: "Automated email campaigns that nurture leads and drive conversions.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description: "Data-driven insights with comprehensive monthly reporting.",
  },
  {
    icon: Megaphone,
    title: "Content Marketing",
    description: "Strategic content creation that attracts and engages your audience.",
  },
  {
    icon: LineChart,
    title: "Conversion Optimization",
    description: "A/B testing and UX improvements to maximize your ROI.",
  },
];

const strategies = [
  "SEO Strategy", "Google Ads", "Facebook Ads", "LinkedIn Ads", "Content Strategy",
  "Email Automation", "Retargeting", "Landing Page Optimization", "Analytics Setup",
];

const results = [
  {
    title: "SEO Campaign",
    client: "LegalExperts",
    description: "Comprehensive SEO strategy for a law firm.",
    metrics: ["500% increase in organic traffic", "Top 3 rankings for 50+ keywords", "200% increase in leads"],
  },
  {
    title: "PPC Campaign",
    client: "HomeSolutions",
    description: "Google Ads campaign for a home services company.",
    metrics: ["400% ROAS", "Cost per lead reduced by 60%", "1000+ conversions in 6 months"],
  },
  {
    title: "Email Marketing",
    client: "EduTech Pro",
    description: "Automated email nurture sequence for an EdTech startup.",
    metrics: ["45% open rate", "15% click-through rate", "30% conversion rate"],
  },
];

const DigitalMarketing = () => {
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
                Digital Marketing
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
                Data-Driven
                <span className="block text-highlight">Marketing Excellence</span>
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80 mb-8">
                Strategic digital marketing solutions that deliver measurable results. From SEO to PPC, we help you reach the right audience at the right time.
              </p>
              <Link to="/contact" className="btn-accent">
                Grow Your Business
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
                  src={digitalMarketingImg}
                  alt="Digital marketing analytics"
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
                Digital Marketing Services
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
                Comprehensive digital marketing solutions to accelerate your growth.
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

      {/* Strategies */}
      <section className="section-gradient section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-accent font-medium">Our Approach</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
                Marketing Strategies We Deploy
              </h2>
            </motion.div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {strategies.map((strategy, index) => (
              <motion.span
                key={strategy}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="px-6 py-3 rounded-full bg-card border border-border text-foreground font-medium hover:bg-accent hover:text-accent-foreground transition-colors cursor-default"
              >
                {strategy}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="bg-card section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-accent font-medium">Results</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
                Proven Results
              </h2>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {results.map((result, index) => (
              <motion.div
                key={result.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-premium p-6"
              >
                <div className="text-sm text-accent font-medium mb-2">{result.client}</div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {result.title}
                </h3>
                <p className="text-muted-foreground mb-4">{result.description}</p>
                <ul className="space-y-2">
                  {result.metrics.map((metric, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                      <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                      {metric}
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
              Ready to Scale Your Marketing?
            </h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              Let's create a data-driven marketing strategy that delivers real results.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 rounded-lg bg-primary-foreground text-primary font-medium hover:scale-105 transition-transform"
            >
              Request a Strategy Call
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default DigitalMarketing;
