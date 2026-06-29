import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'motion/react';
import { Phone, ShoppingCart, CreditCard, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import imgMountainPro from 'figma:asset/8185dd587a2503843ef04fb1813c52f4cfdbc1d4.png';
import imgCityComfort from 'figma:asset/c93ed991363f51eb1a2bbe2d1571df0938dfe231.png';
import imgSportRacing from 'figma:asset/36acfa10da1c392618929e6ab84b9bca0556fc17.png';
import imgEBikeSmart from 'figma:asset/570971932141ba1bcc2fd6ce1c0cdbd20979a859.png';

const bikeModels = [
  {
    id: 1,
    name: 'RAYDA Mountain Pro',
    price: '₸ 180,000',
    image: imgMountainPro,
    description: 'Горный велосипед для экстремальных приключений',
  },
  {
    id: 2,
    name: 'RAYDA City Comfort',
    price: '₸ 120,000',
    image: imgCityComfort,
    description: 'Городской велосипед для комфортных поездок',
  },
  {
    id: 3,
    name: 'RAYDA Sport Racing',
    price: '₸ 250,000',
    image: imgSportRacing,
    description: 'Спортивный велосипед для гонок и скорости',
  },
  {
    id: 4,
    name: 'RAYDA E-Bike Smart',
    price: '₸ 350,000',
    image: imgEBikeSmart,
    description: 'Электрический велосипед с умными функциями',
  },
];

export default function Purchase() {
  const { t } = useLanguage();
  const [selectedBike, setSelectedBike] = useState<typeof bikeModels[0] | null>(null);
  const galleryRef = useRef(null);
  const optionsRef = useRef(null);

  const galleryInView = useInView(galleryRef, { once: true, amount: 0.2 });
  const optionsInView = useInView(optionsRef, { once: true, amount: 0.3 });

  const purchaseOptions = [
    {
      icon: Phone,
      title: t('buyViaWhatsApp'),
      description: 'Быстрая покупка через мессенджер',
      color: 'from-green-500 to-green-600',
      action: () => window.open('https://wa.me/77711465057', '_blank'),
      animation: { scale: [1, 1.05, 1] },
    },
    {
      icon: ShoppingCart,
      title: t('buyViaKaspi'),
      description: 'Рассрочка и удобная доставка',
      color: 'from-red-500 to-red-600',
      action: () => alert('Переход на Каспи Магазин'),
      animation: { y: [0, -10, 0] },
    },
    {
      icon: CreditCard,
      title: t('otherOptions'),
      description: 'Оплата картой, наличными, переводом',
      color: 'from-blue-500 to-blue-600',
      action: () => alert('Другие способы оплаты'),
      animation: { rotate: [0, 5, -5, 0] },
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <section className="bg-gradient-to-br from-[#00FF90] to-[#B8DB55] text-white py-12 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-bold mb-4 text-[36px]"
          >
            {t('purchase')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="opacity-90 text-[18px]"
          >
            Выберите свой идеальный велосипед
          </motion.p>
        </div>
      </section>

      {/* Bike Gallery */}
      <section ref={galleryRef} className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={galleryInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="font-bold text-center mb-8 md:mb-12 bg-gradient-to-r from-[#1E2939] to-[#101828] bg-clip-text text-transparent text-[28px]"
          >
            {t('models')}
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {bikeModels.map((bike, index) => (
              <motion.div
                key={bike.id}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={galleryInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                onClick={() => setSelectedBike(bike)}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all cursor-pointer"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="relative h-48 md:h-56 overflow-hidden">
                  <img
                    src={bike.image}
                    alt={bike.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 bg-gradient-to-br from-[#00FF90] to-[#B8DB55] text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {bike.price}
                  </div>
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold mb-2 text-gray-800">
                    {bike.name}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600">
                    {bike.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Purchase Options */}
      <section ref={optionsRef} className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={optionsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="font-bold text-center mb-8 md:mb-12 bg-gradient-to-r from-[#1E2939] to-[#1E2939] bg-clip-text text-transparent text-[28px]"
          >
            {t('howToBuy')}
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {purchaseOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={optionsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                onClick={option.action}
                className="cursor-pointer"
              >
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all h-full">
                  <motion.div
                    animate={option.animation}
                    transition={{ duration: 2, repeat: Infinity }}
                    className={`w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-[#00FF90] to-[#B8DB55] rounded-2xl flex items-center justify-center mb-4 md:mb-6 mx-auto`}
                  >
                    <option.icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                  </motion.div>
                  <h3 className="font-bold mb-3 md:mb-4 text-center text-gray-800 text-[20px]">
                    {option.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600 text-center">
                    {option.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bike Detail Modal */}
      <AnimatePresence>
        {selectedBike && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
            onClick={() => setSelectedBike(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl overflow-hidden max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="relative">
                <img
                  src={selectedBike.image}
                  alt={selectedBike.name}
                  className="w-full h-64 md:h-96 object-cover"
                />
                <button
                  onClick={() => setSelectedBike(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
                <div className="absolute bottom-4 left-4 bg-orange-500 text-white px-4 py-2 rounded-full text-xl font-bold">
                  {selectedBike.price}
                </div>
              </div>
              <div className="p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-800">
                  {selectedBike.name}
                </h2>
                <p className="text-gray-600 text-lg mb-6">
                  {selectedBike.description}
                </p>
                <div className="space-y-3">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => window.open('https://wa.me/77711465057', '_blank')}
                    className="w-full py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl font-semibold flex items-center justify-center gap-2"
                  >
                    <Phone className="w-5 h-5" />
                    {t('buyViaWhatsApp')}
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl font-semibold flex items-center justify-center gap-2"
                  >
                    <ShoppingCart className="w-5 h-5" />
                    {t('buyViaKaspi')}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}