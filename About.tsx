import React, { useRef } from 'react';
import Slider from 'react-slick';
import { motion, useInView } from 'motion/react';
import { History, Target, Heart, User } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { HeroSection } from '../components/HeroSection';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const sliderImages = [
  'https://images.unsplash.com/photo-1541690853893-d8a69712cbbb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWNsaXN0JTIwcmlkaW5nJTIwYmljeWNsZSUyMG91dGRvb3J8ZW58MXx8fHwxNzczNzY4ODI4fDA&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1620816662788-023a9fde0fda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGJpa2UlMjByaWRlciUyMGFjdGlvbnxlbnwxfHx8fDE3NzM3Njg4Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1602517232715-c4a366f0ce1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaWN5Y2xlJTIwY2l0eSUyMHVyYmFuJTIwcmlkZXJ8ZW58MXx8fHwxNzczNzY4ODI5fDA&ixlib=rb-4.1.0&q=80&w=1080',
  'https://images.unsplash.com/photo-1653341899122-5a2bda10c094?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjeWNsaXN0JTIwcG9ydHJhaXR8ZW58MXx8fHwxNzczNzY4ODI5fDA&ixlib=rb-4.1.0&q=80&w=1080',
];

const owners = [
  {
    name: 'Алексей Иванов',
    role: 'CEO & Founder',
    image: 'https://images.unsplash.com/photo-1653341899122-5a2bda10c094?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjeWNsaXN0JTIwcG9ydHJhaXR8ZW58MXx8fHwxNzczNzY4ODI5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    bio: 'Профессиональный велосипедист с 15-летним стажем',
  },
  {
    name: 'Марина Петрова',
    role: 'COO',
    image: 'https://images.unsplash.com/photo-1602517232715-c4a366f0ce1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaWN5Y2xlJTIwY2l0eSUyMHVyYmFuJTIwcmlkZXJ8ZW58MXx8fHwxNzczNzY4ODI5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    bio: 'Эксперт по развитию велокультуры в Казахстане',
  },
];

const ValueCard: React.FC<{
  icon: React.FC<{ size?: number; className?: string }>;
  title: string;
  description: string;
  delay: number;
}> = ({ icon: Icon, title, description, delay }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
    >
      <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
        <Icon size={32} className="text-blue-600" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

const OwnerCard: React.FC<{
  owner: typeof owners[0];
  index: number;
}> = ({ owner, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
    >
      <div className="h-64 overflow-hidden">
        <img
          src={owner.image}
          alt={owner.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-1">{owner.name}</h3>
        <p className="text-blue-600 mb-2">{owner.role}</p>
        <p className="text-gray-600">{owner.bio}</p>
      </div>
    </motion.div>
  );
};

export const About: React.FC = () => {
  const { t } = useLanguage();

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
  };

  const values = [
    {
      icon: History,
      title: t('about.history'),
      description: t('about.history.text'),
    },
    {
      icon: Target,
      title: t('about.mission'),
      description: t('about.mission.text'),
    },
    {
      icon: Heart,
      title: t('about.values'),
      description: t('about.values.text'),
    },
  ];

  return (
    <div className="pt-16 sm:pt-20">
      <HeroSection />

      {/* Slider Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {t('about.title')}
          </motion.h2>

          <div className="max-w-4xl mx-auto mb-16">
            <Slider {...sliderSettings}>
              {sliderImages.map((image, index) => (
                <div key={index} className="outline-none">
                  <div className="h-96 sm:h-[500px] rounded-lg overflow-hidden">
                    <img
                      src={image}
                      alt={`Slide ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>

          {/* Values Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {values.map((value, index) => (
              <ValueCard
                key={value.title}
                icon={value.icon}
                title={value.title}
                description={value.description}
                delay={index * 0.2}
              />
            ))}
          </div>

          {/* Owners Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-center mb-12">
              {t('about.owners')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {owners.map((owner, index) => (
                <OwnerCard key={owner.name} owner={owner} index={index} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
