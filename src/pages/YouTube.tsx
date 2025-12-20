import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Play, Star, Eye, ThumbsUp, MessageCircle, ArrowRight } from "lucide-react";
import youtubeImg from "@/assets/youtube.jpg";

const featuredVideos = [
  {
    title: "Smartphone Review 2024",
    views: "125K",
    likes: "8.5K",
    thumbnail: youtubeImg,
    description: "In-depth review of the latest flagship smartphone with camera tests and performance benchmarks.",
  },
  {
    title: "Best Laptops for Developers",
    views: "98K",
    likes: "6.2K",
    thumbnail: youtubeImg,
    description: "Comprehensive comparison of top laptops for coding, development, and productivity.",
  },
  {
    title: "Smart Home Automation Guide",
    views: "87K",
    likes: "5.8K",
    thumbnail: youtubeImg,
    description: "Complete guide to setting up smart home automation on a budget.",
  },
  {
    title: "Wireless Earbuds Comparison",
    views: "76K",
    likes: "4.9K",
    thumbnail: youtubeImg,
    description: "We test the top 10 wireless earbuds to find the best value for money.",
  },
  {
    title: "4K Monitor Review",
    views: "65K",
    likes: "4.2K",
    thumbnail: youtubeImg,
    description: "Professional review of the best 4K monitors for content creators.",
  },
  {
    title: "Gaming Accessories 2024",
    views: "54K",
    likes: "3.8K",
    thumbnail: youtubeImg,
    description: "Must-have gaming accessories for the ultimate gaming setup.",
  },
];

const categories = [
  "Smartphones", "Laptops", "Smart Home", "Audio", "Gaming", "Cameras", "Accessories", "Tech News",
];

const stats = [
  { icon: Eye, value: "1M+", label: "Total Views" },
  { icon: ThumbsUp, value: "50K+", label: "Total Likes" },
  { icon: MessageCircle, value: "10K+", label: "Comments" },
  { icon: Star, value: "25K+", label: "Subscribers" },
];

const YouTube = () => {
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
                Liklet YouTube Channel
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
                Product Reviews
                <span className="block text-highlight">You Can Trust</span>
              </h1>
              <p className="text-lg md:text-xl text-primary-foreground/80 mb-8">
                Honest, in-depth product reviews to help you make informed purchasing decisions. Subscribe to our channel for the latest tech insights.
              </p>
              <a
                href="https://youtube.com/@liklet"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-accent"
              >
                <Play className="w-5 h-5 mr-2" />
                Subscribe on YouTube
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="aspect-video rounded-2xl overflow-hidden shadow-lg relative group cursor-pointer">
                <img
                  src={youtubeImg}
                  alt="Liklet YouTube studio"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-primary/50 flex items-center justify-center group-hover:bg-primary/40 transition-colors">
                  <div className="w-20 h-20 rounded-full bg-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-accent-foreground ml-1" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
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
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-3">
                  <stat.icon className="w-6 h-6 text-accent" />
                </div>
                <div className="text-2xl md:text-3xl font-display font-bold text-foreground">
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section-gradient section-padding">
        <div className="container-max">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-accent font-medium">Categories</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
                What We Review
              </h2>
            </motion.div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <motion.span
                key={category}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="px-6 py-3 rounded-full bg-card border border-border text-foreground font-medium hover:bg-accent hover:text-accent-foreground transition-colors cursor-pointer"
              >
                {category}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Videos */}
      <section className="bg-card section-padding">
        <div className="container-max">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-accent font-medium">Latest Videos</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
                Featured Product Reviews
              </h2>
            </motion.div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredVideos.map((video, index) => (
              <motion.div
                key={video.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-premium overflow-hidden group cursor-pointer"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center">
                      <Play className="w-6 h-6 text-accent-foreground ml-1" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">{video.description}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      {video.views}
                    </span>
                    <span className="flex items-center gap-1">
                      <ThumbsUp className="w-4 h-4" />
                      {video.likes}
                    </span>
                  </div>
                </div>
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
              Want Your Product Featured?
            </h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              Partner with us for honest, comprehensive product reviews that reach thousands of potential customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://youtube.com/@liklet"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-primary-foreground text-primary font-medium hover:scale-105 transition-transform"
              >
                <Play className="w-5 h-5 mr-2" />
                Visit Our Channel
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg border-2 border-primary-foreground/30 text-primary-foreground font-medium hover:bg-primary-foreground/10 transition-colors"
              >
                Partner With Us
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default YouTube;
