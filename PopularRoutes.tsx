import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { MapPin, Clock, Mountain } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

// Import route images from Figma
import imgImage21 from 'figma:asset/138422d062e9c0ce72ded25f9b42301f91754b0f.png';
import imgImage37 from 'figma:asset/9941d2978ee9494da5771d8deba7c694001fb561.png';
import imgImage39 from 'figma:asset/ff4c1a61b01a708492ac459362a5b82b1f88f788.png';
import imgImage38 from 'figma:asset/f460a55d6c30212a13b3fca28ed6767df6371f31.png';

export default function PopularRoutes() {
  const { t } = useLanguage();
  const routesRef = useRef(null);
  const routesInView = useInView(routesRef, { once: true, amount: 0.3 });

  const routes = [
    {
      title: 'Городской маршрут',
      description: 'Идеален для знакомства с городом',
      image: imgImage21,
      distance: '15 км',
      duration: '1-2 часа',
      difficulty: 'Легкий',
      difficultyColor: 'from-[#f6339a] to-[#e60076]',
    },
    {
      title: 'Парковый маршрут',
      description: 'Спокойная прогулка по паркам Алматы',
      image: imgImage37,
      distance: '10 км',
      duration: '1 час',
      difficulty: 'Легкий',
      difficultyColor: 'from-[#134229] to-[#0c261a]',
    },
    {
      title: 'Загородный маршрут',
      description: 'Выезд за город, природа и свежий воздух',
      image: imgImage39,
      distance: '25 км',
      duration: '2-3 часа',
      difficulty: 'Средний',
      difficultyColor: 'from-[#f59e0b] to-[#d97706]',
    },
    {
      title: 'Вечерний маршрут',
      description: 'Идеальная прогулка на закате',
      image: imgImage38,
      distance: '12 км',
      duration: '1.5 часа',
      difficulty: 'Легкий',
      difficultyColor: 'from-[#155dfc] to-[#1447e6]',
    },
  ];

  return (
    null
  );
}