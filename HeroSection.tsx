import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import imgFactoryBikes from 'figma:asset/747587e8c7cf57d4a5cb8b67bcdc71fb51058b25.png';
import imgForestCyclist from 'figma:asset/e69e8842fecf56f0bb260604ffa119f1bbbee012.png';
import imgUrbanCyclist from 'figma:asset/fcfacf9745dcce94f4b1adf2fe73e4640ecc0b56.png';
import imgThreeCyclists from 'figma:asset/5baa01f395f563365a0e9326fc19496c1360d85a.png';
import imgMountainBiker from 'figma:asset/a0afc89b7bb0200e51cce20ce03c063cf285da7e.png';
import imgRoadCyclist from 'figma:asset/2f867bab196aab6097080c80db528a80b4e1bcc3.png';
import imgFamilyCyclists from 'figma:asset/aeb0a758cd85afa2d056244992402e7aa3830ed9.png';

const heroSlides = [
  {
    image: imgFamilyCyclists,
    textKey: 'slide1Text',
  },
  {
    image: imgFactoryBikes,
    textKey: 'slide2Text',
  },
  {
    image: imgRoadCyclist,
    textKey: 'slide3Text',
  },
  {
    image: imgThreeCyclists,
    textKey: 'slide4Text',
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { t } = useLanguage();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center px-4">
        <div className="text-center max-w-5xl mx-auto">
          {/* Slide Text */}
          <div className="min-h-[200px] md:min-h-[250px] flex items-center justify-center">
            {heroSlides.map((slide, index) => (
              <motion.h1
                key={index}
                initial={false}
                animate={{
                  opacity: index === currentSlide ? 1 : 0,
                  y: index === currentSlide ? 0 : 30,
                }}
                transition={{ duration: 0.8 }}
                className={`absolute text-white drop-shadow-2xl leading-tight ${ index === currentSlide ? 'pointer-events-auto' : 'pointer-events-none' } mx-[0px] my-[60px] p-[30px] text-[32px] text-center`}
              >
                {t(slide.textKey)}
              </motion.h1>
            ))}
          </div>
        </div>
      </div>

      {/* Slide Indicators - positioned near bottom */}
      <div className="absolute bottom-12 md:bottom-16 left-1/2 -translate-x-1/2 flex justify-center gap-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-white w-8 md:w-12'
                : 'bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        
      </motion.div>
    </div>
  );
}