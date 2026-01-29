'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/', label: 'Accueil' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'À Propos' },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open on mobile
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled ? 'bg-white/90 backdrop-blur-lg shadow-lg' : 'bg-white/50 backdrop-blur-sm'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            {/* Logo animé */}
            <Link href="/" className="relative group">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2"
              >
                <motion.span
                  className="text-2xl font-bold tracking-tight bg-clip-text text-transparent"
                  style={{
                    backgroundImage: 'linear-gradient(90deg, #FF6B35, #FFA07A)',
                    backgroundSize: '200% 200%',
                  }}
                  animate={{
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{ duration: 5, repeat: Infinity }}
                >
                  SociQl
                </motion.span>
                <Sparkles className="w-4 h-4 opacity-80" style={{ color: '#FF6B35' }} />
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      'relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group overflow-hidden',
                      pathname === item.href
                        ? 'text-white'
                        : 'text-gray-700'
                    )}
                    style={
                      pathname !== item.href
                        ? { }
                        : undefined
                    }
                  >
                    {/* Background hover / active */}
                    <motion.div
                      className="absolute inset-0 rounded-lg"
                      style={{
                        backgroundColor: pathname === item.href ? '#FF6B35' : 'rgba(255,160,122,0.20)',
                      }}
                      initial={false}
                      animate={{
                        scale: pathname === item.href ? 1 : 0,
                      }}
                      whileHover={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    />

                    {/* Text */}
                    <span
                      className="relative z-10 transition-colors duration-300"
                      style={pathname === item.href ? { color: '#ffffff' } : { }}
                    >
                      {item.label}
                    </span>

                    {/* Underline animation for hover */}
                    {pathname !== item.href && (
                      <motion.div
                        className="absolute bottom-1 left-4 right-4 h-0.5 origin-left"
                        style={{ backgroundColor: '#FF6B35' }}
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative w-10 h-10 rounded-lg flex items-center justify-center transition-colors"
              style={{ backgroundColor: scrolled ? 'rgba(255,160,122,0.16)' : 'rgba(255,160,122,0.10)' }}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6" style={{ color: '#FF6B35' }} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6" style={{ color: '#FF6B35' }} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation - Full Screen */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 backdrop-blur-sm z-40 md:hidden"
              style={{ backgroundColor: 'rgba(0,0,0,0.20)' }}
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed top-[73px] right-0 bottom-0 w-full max-w-sm bg-white shadow-2xl z-40 md:hidden overflow-y-auto"
            >
              <div className="p-6 space-y-2">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        'block px-6 py-4 rounded-xl text-base font-medium transition-all duration-300'
                      )}
                      style={
                        pathname === item.href
                          ? { backgroundColor: '#FF6B35', color: '#ffffff', boxShadow: '0 10px 25px rgba(255,107,53,0.25)' }
                          : { color: '#374151' }
                      }
                    >
                      <div className="flex items-center justify-between">
                        <span>{item.label}</span>
                        {pathname === item.href && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="w-2 h-2 rounded-full"
                            style={{ backgroundColor: '#ffffff' }}
                          />
                        )}
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Footer dans le menu mobile */}
              <div className="p-6 border-t mt-auto">
                <p className="text-sm text-gray-600 text-center">
                  Besoin d'aide ? Contactez-nous !
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
