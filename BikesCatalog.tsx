import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

// Import bike images from Figma
import img1 from 'figma:asset/a944debffa67b4e90c3ae3ff47f6aa1b1e9aa247.png';
import img2 from 'figma:asset/e5d06e6ede7179a325948038e7991f2fee494874.png';
import img3 from 'figma:asset/085164bf7c2312cb14e558ff8b88de7d4c9ff22e.png';
import img4 from 'figma:asset/d4af3bcfd8aaf6c1a609ce51825249756c0538e5.png';

export default function BikesCatalog() {
  const { t } = useLanguage();
  const catalogRef = useRef(null);
  const catalogInView = useInView(catalogRef, { once: true, amount: 0.2 });

  const bikes = [
    {
      name: 'RAYDA Black',
      description: 'Универсальный городской велосипед',
      image: img1,
      gradient: 'from-[#1e2939] to-[#101828]',
    },
    {
      name: 'RAYDA Blue',
      description: 'Универсальный городской велосипед',
      image: img2,
      gradient: 'from-[#155dfc] to-[#1447e6]',
    },
    {
      name: 'RAYDA Pink',
      description: 'Универсальный городской велосипед',
      image: img3,
      gradient: 'from-[#f6339a] to-[#e60076]',
    },
    {
      name: 'RAYDA Green',
      description: 'Универсальный городской велосипед',
      image: img4,
      gradient: 'from-[#134229] to-[#0c261a]',
    },
  ];

  return (
    <section
      ref={catalogRef}
      className="py-12 md:py-20 bg-gradient-to-br from-gray-50 to-gray-100"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={catalogInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-3xl md:text-[46px] font-bold leading-tight"><span className="bg-clip-text text-transparent bg-gradient-to-r from-[#155dfc] to-[#1447e6]">Каталог</span><br /><span className="text-[#1e2939]">RAYDA</span></h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {bikes.map((bike, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={catalogInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
            >
              {/* Image Container */}
              <div className="bg-[#f3f4f6] h-64 md:h-72 flex items-center justify-center overflow-hidden">
                <img
                  src={bike.image}
                  alt={bike.name}
                  className="w-full h-full object-cover hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-6 relative">
                <div
                  className={`inline-block px-4 py-2 rounded-full text-white text-sm font-semibold mb-3 bg-gradient-to-r ${bike.gradient}`}
                >
                  {bike.name}
                </div>
                <p className="text-[#4a5565] text-sm">{bike.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
