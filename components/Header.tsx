import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const ticking = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          
          // Check if scrolled more than 20px for background effect
          setIsScrolled(currentScrollY > 20);
          
          // Hide/show header based on scroll direction
          if (currentScrollY > lastScrollY && currentScrollY > 100) {
            // Scrolling down and past 100px - hide header
            setIsVisible(false);
          } else if (currentScrollY < lastScrollY) {
            // Scrolling up - show header
            setIsVisible(true);
          }
          
          setLastScrollY(currentScrollY);
          ticking.current = false;
        });
        
        ticking.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { name: "Home", href: "/" },
    { name: "AI Services", href: "/ai-services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Team", href: "/team" },
    { name: "Other Services", href: "/other-services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.header
          key="header"
          initial={{ y: -100, opacity: 0 }}
          animate={{ 
            y: 0, 
            opacity: 1,
            transition: { 
              type: "tween",
              duration: 0.3,
              ease: "easeOut"
            }
          }}
          exit={{ 
            y: -100, 
            opacity: 0,
            transition: { 
              duration: 0.2 
            }
          }}
          className={`fixed top-[60px] left-0 right-0 z-50 transition-all duration-200 ${
            isScrolled
              ? "bg-slate-900/95 backdrop-blur-xl shadow-2xl shadow-blue-500/20 border-b border-slate-700/50"
              : "bg-slate-900 border-b border-slate-700/30"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20 lg:h-24">
              {/* Logo / Brand */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center"
              >
                <Link href="/">
                  <div className="flex items-center space-x-3 cursor-pointer group">
                    <div className="relative">
                      <div className="w-36 sm:w-48 lg:w-56 h-auto flex items-center justify-center">
                        <div className="relative w-full h-12 sm:h-14 lg:h-16">
                          <Image
                            src="/logo2005.png"
                            alt="AI Portfolio Logo"
                            fill
                            className="object-contain"
                            sizes="(max-width: 640px) 144px, (max-width: 1024px) 192px, 224px"
                            priority
                          />
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-xl blur-sm group-hover:blur-md transition-all duration-300 opacity-0 group-hover:opacity-70"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>

              {/* Desktop Menu - Centered */}
              <nav className="hidden lg:flex items-center absolute left-1/2 transform -translate-x-1/2">
                <div className="flex items-center space-x-1">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ y: -20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Link href={item.href}>
                        <motion.div
                          whileHover={{ y: -2 }}
                          className="relative px-4 py-2 rounded-lg transition-all duration-300 group"
                        >
                          <span className="text-gray-300 group-hover:text-white font-medium text-sm transition-colors duration-300 relative z-10">
                            {item.name}
                          </span>
                          
                          {/* Hover Effect */}
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg border border-blue-500/30 opacity-0 group-hover:opacity-100"
                            initial={false}
                            transition={{ duration: 0.3 }}
                          />
                          
                          {/* Active Indicator */}
                          <motion.div
                            className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full group-hover:w-4/5 group-hover:left-1/10 transition-all duration-300"
                            whileHover={{ width: "80%", left: "10%" }}
                          />
                        </motion.div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </nav>

              {/* CTA Button - Right side */}
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="hidden lg:block"
              >
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold text-sm rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 border border-blue-500/30"
                  >
                    Get Started
                  </motion.button>
                </Link>
              </motion.div>

              {/* Mobile Menu Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="lg:hidden relative w-10 h-10 flex flex-col items-center justify-center bg-slate-800 rounded-xl border border-slate-700 shadow-lg hover:border-blue-500/50 transition-all duration-300"
                onClick={toggleMenu}
              >
                <motion.span
                  animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                  className="w-5 h-0.5 bg-gray-300 mb-1.5 rounded-full transition-all duration-300"
                />
                <motion.span
                  animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                  className="w-5 h-0.5 bg-gray-300 mb-1.5 rounded-full transition-all duration-300"
                />
                <motion.span
                  animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                  className="w-5 h-0.5 bg-gray-300 rounded-full transition-all duration-300"
                />
              </motion.button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="lg:hidden bg-slate-900 border-t border-slate-700/50 shadow-2xl"
              >
                <div className="px-4 py-6 space-y-2">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <Link href={item.href}>
                        <motion.div
                          whileHover={{ x: 10 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setIsOpen(false)}
                          className="group px-4 py-3 rounded-xl bg-slate-800 border border-slate-700 hover:border-blue-500/50 transition-all duration-300 mb-2"
                        >
                          <div className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-blue-500 rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                            <span className="text-gray-300 group-hover:text-white font-medium group-hover:translate-x-2 transition-all duration-300">
                              {item.name}
                            </span>
                          </div>
                        </motion.div>
                      </Link>
                    </motion.div>
                  ))}
                  
                  {/* Mobile CTA Button */}
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: navItems.length * 0.1 }}
                    className="pt-4"
                  >
                    <Link href="/contact">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setIsOpen(false)}
                        className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/30 border border-blue-500/30 text-center"
                      >
                        Start Your Project
                      </motion.button>
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Subtle Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900 to-slate-900 -z-10"></div>
          
          {/* Accent Glow */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
        </motion.header>
      )}
    </AnimatePresence>
  );
};

export default Header;