import { useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Clock, CreditCard, MapPin, Calendar, User, Phone as PhoneIcon, Route } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Rental() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
  });

  const conditionsRef = useRef(null);
  const formRef = useRef(null);
  const mapRef = useRef(null);
  const routesRef = useRef(null);

  const conditionsInView = useInView(conditionsRef, { once: true, amount: 0.3 });
  const formInView = useInView(formRef, { once: true, amount: 0.3 });
  const mapInView = useInView(mapRef, { once: true, amount: 0.3 });
  const routesInView = useInView(routesRef, { once: true, amount: 0.3 });

  const rentalConditions = [
    {
      icon: Clock,
      title: t('workingHours'),
      description: '09:00 - 21:00 ежедневно',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: CreditCard,
      title: t('pricePerHour'),
      description: '₸ 1,500 / час',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: CreditCard,
      title: t('pricePerDay'),
      description: '₸ 8,000 / день',
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: MapPin,
      title: t('rentalLocations'),
      description: '5 точек по городу Алматы',
      color: 'from-purple-500 to-purple-600',
    },
  ];

  const locations = [
    { name: 'Парк Горького', address: 'ул. Достык, 104', lat: 43.2220, lng: 76.8512 },
    { name: 'Центральный парк', address: 'пр. Абая, 56', lat: 43.2381, lng: 76.9452 },
    { name: 'Медеу', address: 'Ущелье Медеу', lat: 43.1642, lng: 77.0707 },
    { name: 'Кок-Тобе', address: 'гора Кок-Тобе', lat: 43.2567, lng: 76.9286 },
    { name: 'Первомайский парк', address: 'ул. Гагарина, 135', lat: 43.2496, lng: 76.9069 },
  ];

  const popularRoutes = [
    { name: 'Городской маршрут', distance: '15 км', duration: '1-2 часа', difficulty: 'Легкий' },
    { name: 'Парковый маршрут', distance: '10 км', duration: '1 час', difficulty: 'Легкий' },
    { name: 'Горный маршрут', distance: '25 км', duration: '3-4 часа', difficulty: 'Средний' },
    { name: 'Экстремальный маршрут', distance: '40 км', duration: '5-6 часов', difficulty: 'Сложный' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Бронирование велосипеда:\nИмя: ${formData.name}\nТелефон: ${formData.phone}\nДата: ${formData.date}`;
    window.open(`https://wa.me/77711465057?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <section className="bg-gradient-to-br from-[#0055FF] via-[#9B5AFF] to-[#D44FDF] text-white py-12 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-bold mb-4 text-[36px]"
          >
            {t('rental')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="opacity-90 text-[18px]"
          >Прокат велосипедов по лучшим ценам</motion.p>
        </div>
      </section>

      {/* Rental Conditions */}
      <section ref={conditionsRef} className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={conditionsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="font-bold text-center mb-8 md:mb-12 bg-gradient-to-r from-[#155dfc] to-[#1447e6] bg-clip-text text-transparent text-[28px]"
          >
            {t('rentalConditions')}
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {rentalConditions.map((condition, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={conditionsInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className={`w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-[#0055FF] via-[#155dfc] to-[#155dfc] rounded-2xl flex items-center justify-center mb-4 md:mb-6 mx-auto`}>
                  <condition.icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                </div>
                <h3 className="font-bold mb-2 text-center text-gray-800 text-[18px]">
                  {condition.title}
                </h3>
                <p className="text-gray-600 text-center text-[14px]">
                  {condition.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section ref={formRef} className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={formInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="font-bold text-center mb-8 md:mb-12 bg-gradient-to-r from-[#155dfc] to-[#1447e6] bg-clip-text text-transparent text-[24px]"
          >
            {t('bookNow')}
          </motion.h2>

          <motion.form
            initial={{ opacity: 0, y: 50 }}
            animate={formInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            onSubmit={handleSubmit}
            className="max-w-2xl mx-auto bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 md:p-8 shadow-xl"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={formInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
                  <User className="w-5 h-5" />
                  {t('name')}
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors"
                  placeholder="Введите ваше имя"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={formInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
                  <PhoneIcon className="w-5 h-5" />
                  {t('phoneNumber')}
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors"
                  placeholder="+7 ___ ___ __ __"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={formInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <label className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
                  <Calendar className="w-5 h-5" />
                  {t('rentalDate')}
                </label>
                <input
                  type="date"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors"
                />
              </motion.div>

              <motion.button
                initial={{ opacity: 0, y: 30 }}
                animate={formInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gradient-to-r from-[#155dfc] to-[#1447e6] text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all px-[0px] py-[8px]"
              >
                {t('submit')}
              </motion.button>
            </div>
          </motion.form>
        </div>
      </section>

      {/* Rental Locations Map */}
      <section ref={mapRef} className="bg-gradient-to-br from-gray-50 to-gray-100 px-[0px] py-[80px]">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={mapInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="font-bold text-center mb-8 md:mb-12 bg-gradient-to-r from-[#155dfc] to-[#1447e6] bg-clip-text text-transparent text-[24px]"
          >
            {t('rentalLocations')}
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={mapInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-xl"
            >
              <h3 className="font-bold mb-6 text-gray-800 text-[20px]">Наши точки проката</h3>
              <div className="space-y-4">
                {locations.map((location, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    animate={mapInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ x: 10 }}
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer"
                  >
                    <MapPin className="w-6 h-6 text-blue-700 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-gray-800">{location.name}</h4>
                      <p className="text-sm text-gray-600">{location.address}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={mapInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl overflow-hidden shadow-xl"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2906.4234567890123!2d76.9286!3d43.2381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDE0JzE3LjIiTiA3NsKwNTUnNDMuMSJF!5e0!3m2!1sru!2skz!4v1234567890123!5m2!1sru!2skz"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Popular Routes */}
      
    </div>
  );
}