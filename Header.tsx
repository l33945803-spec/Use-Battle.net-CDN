import { useState } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  const navItems = [
    { path: '/', label: t('home') },
    { path: '/purchase', label: t('purchase') },
    { path: 'https://rent.rayda.kz', label: t('rental'), external: true },
  ];

  const languages = [
    { code: 'ru' as const, label: 'RU' },
    { code: 'en' as const, label: 'EN' },
    { code: 'kz' as const, label: 'KZ' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#155dfc] to-[#1447e6] rounded-full flex items-center justify-center shadow-[0px_0px_0px_4px_rgba(21,93,252,0.2)]"
            >
              <span className="text-white font-bold text-lg md:text-xl">R</span>
            </motion.div>
            <span className="ml-2 text-xl md:text-2xl font-bold text-[#1e2939]">
              RAYDA
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              item.external ? (
                <a
                  key={item.path}
                  href={item.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative font-semibold transition-colors text-[#667085] hover:text-[#1e2939] text-[14px]"
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative font-semibold transition-colors ${ location.pathname === item.path ? 'text-[#1e2939]' : 'text-[#667085] hover:text-[#1e2939]' } text-[14px]`}
                >
                  {item.label}
                  {location.pathname === item.path && (
                    <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#155dfc] to-[#1447e6]" />
                  )}
                </Link>
              )
            ))}
          </nav>

          {/* Language Switcher & WhatsApp */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex gap-2">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLanguage(lang.code)}
                  className={`py-1.5 rounded-lg font-semibold transition-all ${ language === lang.code ? 'bg-gradient-to-r from-[#155dfc] to-[#155dfc] text-white' : 'bg-gray-100 text-[#667085] hover:bg-gray-200' } text-[12px] px-[12px] py-[6px]`}
                >
                  {lang.label}
                </button>
              ))}
            </div>

            <motion.a
              href="https://wa.me/77711465057"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#155dfc] text-white rounded-full hover:bg-[#1447e6] transition-all shadow-[0px_11.85px_33.7px_0px_rgba(249,115,22,0.37)] min-h-[44px] px-[20px] py-[0px]"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              
              <span className="hidden lg:inline font-semibold text-center text-[12px]">{t('contactWhatsApp')}</span>
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 space-y-4">
              {navItems.map((item) => (
                item.external ? (
                  <a
                    key={item.path}
                    href={item.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block py-2 text-lg font-semibold text-[#667085]"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`block py-2 text-lg font-semibold ${
                      location.pathname === item.path
                        ? 'text-[#1e2939]'
                        : 'text-[#667085]'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )
              ))}

              <div className="flex gap-2 pt-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => setLanguage(lang.code)}
                    className={`flex-1 py-2 rounded-lg font-semibold transition-all ${ language === lang.code ? 'bg-gradient-to-r from-[#155dfc] to-[#1447e6] text-white' : 'bg-gray-100 text-[#667085]' } text-[14px]`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>

              <motion.a
                href="https://wa.me/77711465057"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-[#155dfc] to-[#1447e6] text-white rounded-full font-semibold min-h-[48px] text-center px-[12px] py-[10px]"
                whileTap={{ scale: 0.95 }}
              >
                
                {t('contactWhatsApp')}
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}