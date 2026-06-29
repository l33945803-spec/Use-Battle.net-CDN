import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t, language, setLanguage } = useLanguage();

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
  ];

  const languageOptions = [
    { code: 'ru' as const, label: 'РУССКАЯ ВЕРСИЯ' },
    { code: 'en' as const, label: 'ENGLISH VERSION' },
    { code: 'kz' as const, label: 'ҚАЗАҚША НҰСҚА' },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contacts */}
          <div className="m-[0px]">
            <h3 className="font-bold mb-4 bg-gradient-to-r from-[#155dfc] to-[#1447e6] bg-clip-text text-transparent text-[16px] text-left">
              {t('contactsTitle')}
            </h3>
            <p className="text-gray-300 mb-4 leading-relaxed text-left text-[14px]">
              {t('contactsText')}
            </p>
            <div className="space-y-3 p-[0px]">
              <motion.div
                className="flex items-start gap-3 cursor-pointer mx-[0px] my-[12px]"
                whileHover={{ x: 5 }}
              >
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <span className="text-left text-[14px] px-[0px] py-[4px]">Алматы, Казахстан</span>
              </motion.div>
              <motion.a
                href="tel:+77711465057"
                className="flex items-center gap-3 cursor-pointer"
                whileHover={{ x: 5 }}
              >
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span className="whitespace-nowrap text-left text-[14px] px-[0px] py-[4px]">+7 771 146 5057</span>
              </motion.a>
              <motion.a
                href="mailto:info@rayda.kz"
                className="flex items-center gap-3 cursor-pointer"
                whileHover={{ x: 5 }}
              >
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span className="whitespace-nowrap text-center px-[0px] py-[4px] text-[14px]">info@rayda.kz</span>
              </motion.a>
            </div>
          </div>

          {/* Social Media */}
          <div className="p-[0px] m-[0px]">
            <h3 className="font-bold mb-4 bg-gradient-to-r from-[#155dfc] to-[#1447e6] bg-clip-text text-transparent text-[16px] text-left">Социальные сети</h3>
            <div className="flex gap-4 p-[0px]">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 md:w-12 md:h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors px-[10px] py-[0px]"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                >
                  <social.icon className="w-5 h-5 md:w-6 md:h-6" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold mb-4 bg-gradient-to-r from-[#155dfc] to-[#1447e6] bg-clip-text text-transparent text-[16px] text-left">Юридическая информация</h3>
            <div className="space-y-2">
              <motion.a
                href="#"
                className="block text-gray-300 hover:text-white transition-colors text-left text-[14px] px-[0px] py-[4px]"
                whileHover={{ x: 5 }}
              >
                {t('privacyPolicy')}
              </motion.a>
              <motion.a
                href="#"
                className="block text-gray-300 hover:text-white transition-colors text-left text-[14px] px-[0px] py-[4px]"
                whileHover={{ x: 5 }}
              >
                {t('termsOfService')}
              </motion.a>
            </div>
          </div>
        </div>

        <div className="text-center text-sm text-gray-400">
          <p className="text-[13px] text-[12px] px-[0px] py-[16px] text-left">© 2026-2027 RAYDA. {t('allRightsReserved')}</p>
        </div>
      </div>
    </footer>
  );
}