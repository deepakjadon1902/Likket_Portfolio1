import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Play, Eye, ThumbsUp, Users, Bell, Share2, MoreHorizontal, Clock, ArrowRight } from "lucide-react";
import youtubeImg from "@/assets/youtube.jpg";

const featuredVideos = [
  {
    title: "Smartphone Review 2024 - Is This The Best Phone Ever?",
    views: "125K views",
    timestamp: "2 weeks ago",
    duration: "18:42",
    likes: "8.5K",
    thumbnail: youtubeImg,
    description: "In-depth review of the latest flagship smartphone with camera tests and performance benchmarks.",
  },
  {
    title: "Best Laptops for Developers - Complete Guide",
    views: "98K views",
    timestamp: "3 weeks ago",
    duration: "24:15",
    likes: "6.2K",
    thumbnail: youtubeImg,
    description: "Comprehensive comparison of top laptops for coding, development, and productivity.",
  },
  {
    title: "Smart Home Automation on a Budget",
    views: "87K views",
    timestamp: "1 month ago",
    duration: "15:33",
    likes: "5.8K",
    thumbnail: youtubeImg,
    description: "Complete guide to setting up smart home automation on a budget.",
  },
  {
    title: "Wireless Earbuds - Top 10 Comparison",
    views: "76K views",
    timestamp: "1 month ago",
    duration: "21:07",
    likes: "4.9K",
    thumbnail: youtubeImg,
    description: "We test the top 10 wireless earbuds to find the best value for money.",
  },
  {
    title: "4K Monitor Review for Creators",
    views: "65K views",
    timestamp: "2 months ago",
    duration: "16:44",
    likes: "4.2K",
    thumbnail: youtubeImg,
    description: "Professional review of the best 4K monitors for content creators.",
  },
  {
    title: "Gaming Accessories You NEED in 2024",
    views: "54K views",
    timestamp: "2 months ago",
    duration: "12:28",
    likes: "3.8K",
    thumbnail: youtubeImg,
    description: "Must-have gaming accessories for the ultimate gaming setup.",
  },
];

const playlists = [
  { name: "Smartphone Reviews", count: 24, thumbnail: youtubeImg },
  { name: "Laptop Guides", count: 18, thumbnail: youtubeImg },
  { name: "Smart Home", count: 12, thumbnail: youtubeImg },
  { name: "Audio Reviews", count: 15, thumbnail: youtubeImg },
];

const YouTube = () => {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white overflow-hidden">
      {/* YouTube-style Header Banner */}
      <section className="relative pt-20">
        {/* Banner Image */}
        <div className="h-32 sm:h-48 md:h-56 lg:h-64 w-full overflow-hidden">
          <img
            src={youtubeImg}
            alt="Channel Banner"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-transparent to-transparent" />
        </div>

        {/* Channel Info */}
        <div className="container-max px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
          <div className="flex flex-col md:flex-row items-start md:items-end gap-6">
            {/* Channel Avatar */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-28 h-28 md:w-36 md:h-36 rounded-full border-4 border-[#0f0f0f] overflow-hidden bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center shadow-2xl"
            >
              <span className="text-white font-bold text-4xl md:text-5xl font-display">L</span>
            </motion.div>

            {/* Channel Details */}
            <div className="flex-1 pb-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex items-center gap-2">
                  <h1 className="text-2xl md:text-3xl font-bold">Liklet</h1>
                  <svg className="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>
                <div className="flex flex-wrap items-center gap-2 mt-2 text-sm text-gray-400">
                  <span>@liklet</span>
                  <span>•</span>
                  <span>25.3K subscribers</span>
                  <span>•</span>
                  <span>156 videos</span>
                </div>
                <p className="text-sm text-gray-400 mt-2 max-w-2xl">
                  Honest tech reviews, unboxing, and product comparisons. Subscribe for weekly content!
                </p>
              </motion.div>
            </div>

            {/* Subscribe Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="flex gap-3"
            >
              <a
                href="https://youtube.com/@liklet"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-2.5 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors"
              >
                Subscribe
              </a>
              <button className="flex items-center justify-center w-10 h-10 rounded-full bg-[#272727] hover:bg-[#3f3f3f] transition-colors">
                <Bell className="w-5 h-5" />
              </button>
            </motion.div>
          </div>

          {/* Tabs */}
          <div className="flex gap-6 mt-6 border-b border-gray-700 overflow-x-auto pb-0.5">
            {["Home", "Videos", "Shorts", "Playlists", "Community", "About"].map((tab, index) => (
              <motion.button
                key={tab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.05 }}
                className={`px-4 py-3 text-sm font-medium whitespace-nowrap transition-colors ${
                  index === 0
                    ? "text-white border-b-2 border-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {tab}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Video Section */}
      <section className="container-max px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-5 gap-6">
          {/* Main Featured Video */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="relative aspect-video rounded-xl overflow-hidden cursor-pointer group">
              <img
                src={featuredVideos[0].thumbnail}
                alt={featuredVideos[0].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-20 h-20 rounded-full bg-red-600 flex items-center justify-center">
                  <Play className="w-8 h-8 text-white ml-1" fill="white" />
                </div>
              </div>
              <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/80 rounded text-xs font-medium">
                {featuredVideos[0].duration}
              </div>
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-semibold line-clamp-2 hover:text-gray-300 cursor-pointer">
                {featuredVideos[0].title}
              </h3>
              <div className="flex items-center gap-2 mt-2 text-sm text-gray-400">
                <span>{featuredVideos[0].views}</span>
                <span>•</span>
                <span>{featuredVideos[0].timestamp}</span>
              </div>
              <p className="text-sm text-gray-400 mt-2">{featuredVideos[0].description}</p>
            </div>
          </motion.div>

          {/* Playlists Sidebar */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold mb-4">Popular Playlists</h3>
            <div className="space-y-3">
              {playlists.map((playlist, index) => (
                <motion.div
                  key={playlist.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-3 p-2 rounded-lg hover:bg-[#272727] cursor-pointer group"
                >
                  <div className="relative w-32 aspect-video rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={playlist.thumbnail}
                      alt={playlist.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                      <div className="text-center">
                        <Play className="w-6 h-6 mx-auto" fill="white" />
                        <span className="text-xs mt-1 block">{playlist.count} videos</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-sm group-hover:text-gray-300">{playlist.name}</h4>
                    <p className="text-xs text-gray-400 mt-1">View full playlist</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Videos Grid */}
      <section className="container-max px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">Latest Videos</h2>
          <button className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300">
            Play all
            <Play className="w-4 h-4" fill="currentColor" />
          </button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {featuredVideos.map((video, index) => (
            <motion.div
              key={video.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              {/* Thumbnail */}
              <div className="relative aspect-video rounded-xl overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                <div className="absolute bottom-2 right-2 px-1.5 py-0.5 bg-black/80 rounded text-xs font-medium">
                  {video.duration}
                </div>
                {/* Progress bar placeholder */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-700">
                  <div className="h-full bg-red-600" style={{ width: `${Math.random() * 100}%` }} />
                </div>
              </div>

              {/* Video Info */}
              <div className="flex gap-3 mt-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">L</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-medium text-sm line-clamp-2 group-hover:text-gray-300">
                    {video.title}
                  </h3>
                  <p className="text-xs text-gray-400 mt-1 hover:text-gray-300">Liklet</p>
                  <div className="flex items-center gap-1 text-xs text-gray-400">
                    <span>{video.views}</span>
                    <span>•</span>
                    <span>{video.timestamp}</span>
                  </div>
                </div>
                <button className="opacity-0 group-hover:opacity-100 transition-opacity self-start">
                  <MoreHorizontal className="w-5 h-5 text-gray-400" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#181818] py-12">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Eye, value: "1M+", label: "Total Views" },
              { icon: ThumbsUp, value: "50K+", label: "Total Likes" },
              { icon: Users, value: "25K+", label: "Subscribers" },
              { icon: Clock, value: "156", label: "Videos" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-xl bg-[#272727]"
              >
                <stat.icon className="w-8 h-8 text-red-500 mx-auto mb-3" />
                <div className="text-2xl md:text-3xl font-bold">{stat.value}</div>
                <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-b from-[#181818] to-[#0f0f0f]">
        <div className="container-max px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Want Your Product Featured?
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto mb-8">
              Partner with us for honest, comprehensive product reviews that reach thousands of potential customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://youtube.com/@liklet"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-red-600 hover:bg-red-700 font-semibold rounded-full transition-colors"
              >
                <Play className="w-5 h-5" fill="white" />
                Subscribe Now
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 border border-gray-600 hover:bg-[#272727] font-semibold rounded-full transition-colors"
              >
                Partner With Us
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default YouTube;
