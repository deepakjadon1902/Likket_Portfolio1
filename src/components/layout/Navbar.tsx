import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", path: "/" },
  {
    name: "Services",
    children: [
      { name: "Web Development", path: "/web-development" },
      { name: "Social Media Marketing", path: "/social-media-marketing" },
      { name: "Digital Marketing", path: "/digital-marketing" },
    ],
  },
  { name: "YouTube", path: "/youtube" },
  { name: "About Us", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      <div className="container-max section-padding !py-0">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
              <span className="text-accent-foreground font-display font-bold text-xl">L</span>
            </div>
            <span className="font-display text-2xl font-bold text-primary">Liklet</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <button className="nav-link flex items-center gap-1 py-2">
                    {link.name}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-0 mt-2 w-56 bg-card border border-border rounded-xl shadow-lg overflow-hidden"
                      >
                        {link.children.map((child) => (
                          <Link
                            key={child.path}
                            to={child.path}
                            className={`block px-4 py-3 hover:bg-secondary transition-colors ${
                              isActive(child.path) ? "bg-secondary text-accent" : ""
                            }`}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`nav-link py-2 ${isActive(link.path) ? "text-accent" : ""}`}
                >
                  {link.name}
                </Link>
              )
            )}
          </div>

          {/* CTA Button */}
          <Link to="/contact" className="hidden lg:flex btn-accent">
            Get Started
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-card border-t border-border overflow-hidden"
          >
            <div className="container-max py-4 space-y-2">
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.name} className="space-y-1">
                    <div className="px-4 py-2 font-medium text-muted-foreground">
                      {link.name}
                    </div>
                    {link.children.map((child) => (
                      <Link
                        key={child.path}
                        to={child.path}
                        onClick={() => setIsOpen(false)}
                        className={`block px-8 py-2 rounded-lg hover:bg-secondary transition-colors ${
                          isActive(child.path) ? "bg-secondary text-accent" : ""
                        }`}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-2 rounded-lg hover:bg-secondary transition-colors ${
                      isActive(link.path) ? "bg-secondary text-accent" : ""
                    }`}
                  >
                    {link.name}
                  </Link>
                )
              )}
              <div className="pt-4 px-4">
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="btn-accent w-full justify-center"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
