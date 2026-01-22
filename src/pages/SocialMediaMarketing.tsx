import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Users, Heart, Share2, MessageCircle, TrendingUp, Camera, ArrowRight, CheckCircle, Star, Quote, Zap, Target, BarChart3 } from "lucide-react";
import socialMediaImg from "@/assets/social-media.jpg";

const services = [
  {
    icon: Users,
    title: "Social Media Management",
    description: "We handle everything — posting, replying to comments, and keeping your profiles active so you don't have to.",
  },
  {
    icon: Heart,
    title: "Content Creation",
    description: "No more staring at a blank screen. We create posts, graphics, and videos that your audience actually wants to see.",
  },
  {
    icon: Share2,
    title: "Influencer Partnerships",
    description: "Connect with the right voices in your industry to reach new audiences who already trust them.",
  },
  {
    icon: MessageCircle,
    title: "Community Building",
    description: "Turn casual followers into loyal fans who advocate for your brand and come back again and again.",
  },
  {
    icon: TrendingUp,
    title: "Performance Tracking",
    description: "See exactly what's working with clear reports — not vanity metrics, but real business results.",
  },
  {
    icon: Camera,
    title: "Social Advertising",
    description: "Reach people who are actually interested in what you offer, not just random scrollers.",
  },
];

const platforms = [
  "Facebook", "Instagram", "Twitter/X", "LinkedIn", "YouTube", "Pinterest", "TikTok", "WhatsApp Business",
];

const workTypes = [
  {
    icon: Zap,
    title: "Brand Awareness",
    description: "Get your name out there. We help people discover your business and remember you.",
    features: ["Shareable Content", "Brand Storytelling", "Hashtag Strategies", "Trend Participation"],
  },
  {
    icon: Target,
    title: "Lead Generation",
    description: "Turn followers into customers with content that makes them want to take action.",
    features: ["Valuable Free Offers", "Sales Funnels", "Retargeting Campaigns", "Direct Response Ads"],
  },
  {
    icon: BarChart3,
    title: "Performance Campaigns",
    description: "Every rupee tracked. We show you exactly what your social media investment returns.",
    features: ["Split Testing", "Conversion Tracking", "ROI Reports", "Monthly Strategy Calls"],
  },
];

const caseStudies = [
  {
    title: "Fashion Brand Launch",
    client: "StyleHub",
    description: "A new fashion brand with zero following. We built their social presence from scratch.",
    results: ["500K+ people reached in month one", "10,000 new followers", "15% of followers became buyers"],
  },
  {
    title: "Restaurant Chain",
    client: "FoodiesDelight",
    description: "Multiple locations but empty tables. Social media brought customers through the door.",
    results: ["50% more walk-in customers", "10K+ posts from happy diners", "35% increase in orders"],
  },
  {
    title: "B2B Tech Startup",
    client: "InnovateTech",
    description: "Selling software is hard. We made LinkedIn work for lead generation.",
    results: ["300 qualified sales leads", "25% more demo requests", "Partnerships with industry influencers"],
  },
];

const customerReviews = [
  {
    name: "Neha Sharma",
    company: "StyleHub",
    role: "Brand Manager",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    review: "Liklet's social media strategy was exactly what we needed for our brand launch. The results exceeded all our expectations with incredible engagement rates.",
  },
  {
    name: "Rahul Verma",
    company: "FoodiesDelight",
    role: "Marketing Head",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    review: "Our social media presence has never been better. The team understands our brand voice perfectly and creates content that our customers love.",
  },
  {
    name: "Kavita Nair",
    company: "BeautyBliss",
    role: "Founder",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    review: "Working with Liklet transformed our Instagram presence. We went from 5K to 100K followers in just 8 months with genuine engagement.",
  },
  {
    name: "Sanjay Mehta",
    company: "InnovateTech",
    role: "CEO",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    review: "Their B2B social strategy is outstanding. We've generated more quality leads through LinkedIn than any other channel.",
  },
];

const stats = [
  { value: "10M+", label: "Impressions Generated" },
  { value: "500K+", label: "Followers Grown" },
  { value: "25%", label: "Avg Engagement Rate" },
  { value: "95%", label: "Client Retention" },
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
                For Busy Business Owners
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
                Social Media That
                <span className="block text-highlight">Actually Sells</span>
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80 mb-8">
                You know you should be posting more, but who has the time? We take social media off your plate completely — creating content, growing your following, and turning followers into paying customers.
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

      {/* Work Types */}
      <section className="bg-card section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-accent font-medium">What We Do</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
                Types of Campaigns We Run
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
                From brand awareness to lead generation, we've got you covered.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {workTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="card-premium p-6"
              >
                <motion.div 
                  className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-highlight flex items-center justify-center mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
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
                whileHover={{ y: -10 }}
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
      <section className="bg-card section-padding">
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
                whileHover={{ scale: 1.1, y: -5 }}
                className="px-6 py-3 rounded-full bg-background border border-border text-foreground font-medium hover:bg-accent hover:text-accent-foreground transition-colors cursor-default"
              >
                {platform}
              </motion.span>
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
                Client Reviews & Ratings
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
                See what our clients say about our social media marketing services.
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {customerReviews.map((review, index) => (
              <motion.div
                key={review.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-premium p-5 relative"
              >
                <Quote className="absolute top-3 right-3 w-6 h-6 text-accent/20" />
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-accent"
                  />
                  <div>
                    <h4 className="font-semibold text-foreground text-sm">{review.name}</h4>
                    <p className="text-xs text-muted-foreground">{review.company}</p>
                  </div>
                </div>
                <div className="flex gap-0.5 mb-2">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-highlight text-highlight" />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm italic">"{review.review}"</p>
              </motion.div>
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
              Stop Struggling With Social Media
            </h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              Let's talk about what's not working and how we can fix it. Free consultation, no pressure.
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
