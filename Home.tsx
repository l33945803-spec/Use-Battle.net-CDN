import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { 
  CheckCircle, 
  Settings, 
  Shield, 
  Heart, 
  Users, 
  Mountain, 
  Coffee,
  Bike,
  Wrench,
  Cloud,
  ThumbsUp,
  MapPin,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import HeroSection from '../components/HeroSection';
import BikesCatalog from '../components/BikesCatalog';
import PopularRoutes from '../components/PopularRoutes';
import ContactForm from '../components/ContactForm';

// Import images from Figma
import imgImageHappyCyclist from 'figma:asset/6bd97254369baa6442616ca60d84e2c551c2ca4b.png';
import imgImage from 'figma:asset/b99506812ffd5c4ae77ec15dfe4f1a8d91f819ac.png';
import imgImageUciMechanicLevel2 from 'figma:asset/b99506812ffd5c4ae77ec15dfe4f1a8d91f819ac.png';

export default function Home() {
  const { t } = useLanguage();
  
  // Refs for scroll animations
  const aboutRef = useRef(null);
  const foundersRef = useRef(null);
  const philosophyRef = useRef(null);
  const forWhomRef = useRef(null);
  const advantagesRef = useRef(null);

  // InView hooks
  const aboutInView = useInView(aboutRef, { once: true, amount: 0.3 });
  const foundersInView = useInView(foundersRef, { once: true, amount: 0.3 });
  const philosophyInView = useInView(philosophyRef, { once: true, amount: 0.3 });
  const forWhomInView = useInView(forWhomRef, { once: true, amount: 0.3 });
  const advantagesInView = useInView(advantagesRef, { once: true, amount: 0.3 });
  
  const founders = [
    {
      name: 'Абдрахманов Темиржан',
      image: imgImage,
    },
    {
      name: 'Айдар Мукей — UCI Mechanic Level 2',
      image: imgImageUciMechanicLevel2,
    },
  ];
  const philosophyItems = [
    { icon: Heart, text: t('philosophyAccent1') },
    { icon: Shield, text: t('philosophyAccent2') },
    { icon: Settings, text: t('philosophyAccent3') },
    { icon: ThumbsUp, text: t('philosophyAccent4') },
  ];

  const forWhomItems = [
    { icon: MapPin, text: t('forWhomCityRides') },
    { icon: Coffee, text: t('forWhomParks') },
    { icon: Mountain, text: t('forWhomNature') },
    { icon: Users, text: t('forWhomBeginners') },
    { icon: Heart, text: t('forWhomHealthy') },
    { icon: Users, text: t('forWhomFamilyUse') },
  ];

  const advantages = [
    { icon: MapPin, title: t('advantagesKzAssembly') },
    { icon: CheckCircle, title: t('advantagesProven') },
    { icon: Bike, title: t('advantagesComfort') },
    { icon: Wrench, title: t('advantagesEasyService') },
    { icon: ThumbsUp, title: t('advantagesDaily') },
    { icon: Cloud, title: t('advantagesReliability') },
  ];

  return (
    <div className="bg-white">
      <HeroSection />

      {/* About Brand Section */}
      <section ref={aboutRef} className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={aboutInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <h2 className="text-3xl md:text-[30px] font-bold text-[#1e2939]">
                О нас
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={aboutInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4 mb-8"
            >
              <p className="text-base md:text-lg text-[#364153] leading-relaxed">
                RAYDA — движение, которое приносит удовольствие
RAYDA — казахстанский бренд велосипедов собственного дизайна и сборки.
Мы создаём велосипеды для прогулок, отдыха и активного образа жизни — для людей, которые выбирают здоровье, движение и свободу.
Наши велосипеды одинаково комфортны на городских улицах, в парках и на загородных маршрутах. RAYDA подходит тем, кто хочет кататься регулярно, но без спорта на износ — в удовольствие.
RAYDA — это не просто транспорт.
Это привычка жить активно.
              </p>
              <p className="text-base md:text-lg text-[#364153] leading-relaxed">
                О бренде
RAYDA — новый велосипедный бренд, созданный в Казахстане мастерами с многолетним практическим опытом сборки, обслуживания и ремонта велосипедов.
Мы знаем велосипед не по каталогам, а по реальной эксплуатации — сотням обслуженных и восстановленных велосипедов разных производителей. Именно этот опыт позволил нам разработать собственную конструкцию, ориентированную на комфорт, надёжность и простоту обслуживания.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={aboutInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8"
            >
              <img
                src={imgImageHappyCyclist}
                alt="Happy cyclist"
                className="w-full h-[400px] md:h-[500px] object-cover rounded-2xl shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bikes Catalog - NEW Component from Figma */}
      <BikesCatalog />

      {/* Founders Section */}
      <section ref={foundersRef} className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          

          <div className="max-w-5xl mx-auto">
            

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={foundersInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-gradient-to-r from-[#155dfc] to-[#1447e6] rounded-2xl p-6 md:p-10 shadow-2xl"
            >
              <p className="text-base md:text-lg text-white text-center leading-relaxed">
                Каждая модель RAYDA создаётся с учётом условий эксплуатации: перепады температур, городские дороги, длительные прогулки и ежедневное использование.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section ref={philosophyRef} className="py-12 md:py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={philosophyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="font-bold text-center mb-8 md:mb-12 text-[#1447E6] text-[38px]"
          >
            {t('ourPhilosophy')}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={philosophyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center text-[#364153] mb-12 max-w-4xl mx-auto font-semibold text-[20px]"
          >
            {t('philosophyText')}
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto mb-12">
            {philosophyItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={philosophyInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#0055FF] to-[#9B5AFF] rounded-full flex items-center justify-center">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <p className="text-[#364153] font-medium text-[16px]">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={philosophyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="bg-gradient-to-r from-[#155dfc] to-[#1447e6] rounded-2xl p-6 md:p-10 shadow-2xl max-w-4xl mx-auto"
          >
            <p className="text-xl md:text-2xl lg:text-3xl text-white text-center leading-relaxed font-bold">
              {t('philosophySlogan')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* For Whom Section */}
      <section ref={forWhomRef} className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={forWhomInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="font-bold text-center mb-8 md:mb-12 text-[#101828] text-[28px]"
          >
            {t('forWhomTitle')}
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto mb-12">
            {forWhomItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={forWhomInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#155DFC] to-[#1447E6] rounded-full flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <p className="text-base md:text-lg text-[#364153] font-medium">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={forWhomInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg md:text-xl text-center text-[#364153] max-w-4xl mx-auto italic"
          >
            {t('forWhomConclusion')}
          </motion.p>
        </div>
      </section>

      {/* Advantages Section */}
      <section ref={advantagesRef} className="py-12 md:py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={advantagesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="font-bold text-center mb-8 md:mb-12 text-[#1447E6] text-[28px]"
          >
            {t('advantages')}
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={advantagesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, rotate: 1 }}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#00FF90] to-[#B8DB55] rounded-full flex items-center justify-center">
                  <advantage.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-bold text-center text-[#1E2939] mb-2 text-[16px]">
                  {advantage.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Routes Section - NEW Component from Figma */}
      <PopularRoutes />

      {/* Contact Form Section */}
      <ContactForm />
    </div>
  );
}