# RAYDA Landing - Дизайн Спецификации

## Цветовая палитра

### Основные цвета

```css
/* Синий (Primary) */
#2563EB - Основной синий
#1D4ED8 - Тёмный синий (hover)
#DBEAFE - Светло-синий (фон)

/* Зелёный (Success/Nature) */
#22C55E - Основной зелёный
#16A34A - Тёмный зелёный (hover)
#DCFCE7 - Светло-зелёный (фон)

/* Оранжевый (Accent/CTA) */
#F97316 - Основной оранжевый
#EA580C - Тёмный оранжевый (hover)
#FFEDD5 - Светло-оранжевый (фон)

/* Нейтральные */
#FFFFFF - Белый
#F9FAFB - Серый 50 (фон)
#F3F4F6 - Серый 100
#E5E7EB - Серый 200
#D1D5DB - Серый 300
#9CA3AF - Серый 400
#6B7280 - Серый 500
#4B5563 - Серый 600
#374151 - Серый 700
#1F2937 - Серый 800
#111827 - Серый 900
```

### Применение цветов

- **Фон страницы:** #FFFFFF, #F9FAFB
- **Текст основной:** #1F2937
- **Текст вторичный:** #6B7280
- **Заголовки:** #111827
- **Ссылки:** #2563EB
- **Кнопки CTA:** #F97316 (оранжевый)
- **Кнопки вторичные:** #2563EB (синий)
- **Success элементы:** #22C55E (зелёный)
- **WhatsApp:** #25D366 (фирменный зелёный)

## Типографика

### Шрифт

**Семейство:** Roboto (Google Fonts)

```html
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap" rel="stylesheet">
```

### Размеры (Mobile First)

#### Мобильные устройства (320-767px)

```css
/* Заголовки */
h1: 32px / 700 / line-height: 1.2
h2: 24px / 700 / line-height: 1.3
h3: 20px / 500 / line-height: 1.4
h4: 18px / 500 / line-height: 1.4

/* Текст */
body: 16px / 400 / line-height: 1.6
small: 12px / 400 / line-height: 1.5

/* Кнопки */
button-large: 16px / 500
button-medium: 14px / 500
button-small: 12px / 500
```

#### Планшеты (768-1023px)

```css
h1: 40px / 700
h2: 32px / 700
h3: 24px / 500
h4: 20px / 500
body: 16px / 400
```

#### Десктоп (1024px+)

```css
h1: 48px / 700
h2: 36px / 700
h3: 28px / 500
h4: 22px / 500
body: 16px / 400
```

## Отступы и интервалы

### Spacing Scale

```css
/* Базовая единица: 4px */
--space-1: 4px
--space-2: 8px
--space-3: 12px
--space-4: 16px
--space-5: 20px
--space-6: 24px
--space-8: 32px
--space-10: 40px
--space-12: 48px
--space-16: 64px
--space-20: 80px
--space-24: 96px
```

### Применение

- **Padding внутренних элементов:** 16-24px
- **Margin между секциями:** 64-96px
- **Margin между элементами:** 16-32px
- **Gap в grid/flex:** 16-24px

## Компоненты

### Кнопки

#### Основная CTA (оранжевая)

```css
background: #F97316
color: #FFFFFF
padding: 12px 32px (mobile), 16px 48px (desktop)
border-radius: 9999px (полностью скруглённые)
font-size: 16px
font-weight: 500
min-height: 44px (для мобильных)
min-width: 120px

/* Hover */
background: #EA580C
transform: scale(1.05)
box-shadow: 0 10px 40px rgba(249, 115, 22, 0.4)

/* Active */
transform: scale(0.95)
```

#### Вторичная (синяя)

```css
background: #2563EB
color: #FFFFFF
/* остальное как у основной */

/* Hover */
background: #1D4ED8
```

#### WhatsApp (зелёная)

```css
background: #25D366
color: #FFFFFF
animation: pulse 1.5s infinite

/* Pulse анимация */
@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}
```

### Карточки (Cards)

```css
background: #FFFFFF
border-radius: 8px
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1)
padding: 24px

/* Hover */
box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15)
transform: translateY(-4px)
transition: all 0.3s ease
```

### Инпуты (Inputs)

```css
background: #F9FAFB
border: 1px solid #E5E7EB
border-radius: 8px
padding: 12px 16px
font-size: 16px
min-height: 44px

/* Focus */
border-color: #2563EB
box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1)
outline: none
```

### Навигация

#### Header

```css
background: #FFFFFF
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1)
position: fixed
top: 0
left: 0
right: 0
z-index: 50
height: 64px (mobile), 80px (desktop)
```

#### Меню (Desktop)

```css
/* Пункт меню */
color: #374151
font-size: 16px
font-weight: 400
padding: 8px 16px

/* Hover */
color: #2563EB
transform: translateY(-2px) scale(1.05)
transition: all 0.3s ease

/* Active */
color: #2563EB
font-weight: 600
```

#### Гамбургер-меню (Mobile)

```css
/* Иконка */
width: 24px
height: 24px
color: #374151

/* Меню */
background: #FFFFFF
border-top: 1px solid #E5E7EB
padding: 16px
```

### Футер

```css
background: #111827
color: #F9FAFB
padding: 48px 16px (mobile), 64px 32px (desktop)

/* Ссылки */
color: #9CA3AF
/* Hover */
color: #FFFFFF
transform: translateX(5px)
```

## Иконки

### Размеры

```css
--icon-sm: 16px
--icon-md: 24px
--icon-lg: 32px
--icon-xl: 48px
```

### Применение

- **Навигация:** 24px
- **Социальные сети:** 20px
- **Карточки ценностей:** 32-40px
- **Формы (рядом с инпутами):** 18px
- **Кнопки:** 20-24px

### Стиль

- Material Icons или Feather Icons
- Stroke width: 2px
- Цвет: наследуется от родителя

## Анимации

### Timing Functions

```css
--ease-in: cubic-bezier(0.4, 0, 1, 1)
--ease-out: cubic-bezier(0, 0, 0.2, 1)
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1)
--ease-spring: cubic-bezier(0.68, -0.55, 0.265, 1.55)
```

### Длительность

```css
--duration-fast: 150ms
--duration-normal: 300ms
--duration-slow: 500ms
--duration-slower: 800ms
```

### Основные анимации

#### Fade In (появление)

```css
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

animation: fadeIn 0.6s ease-out;
```

#### Slide In (выплывание)

```css
@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

animation: slideIn 0.6s ease-out;
```

#### Pulse (пульсация)

```css
@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

animation: pulse 1.5s infinite;
```

#### Rotate (вращение логотипа)

```css
@keyframes rotate {
  0% { transform: rotate(0deg); }
  25% { transform: rotate(5deg); }
  50% { transform: rotate(-5deg); }
  100% { transform: rotate(0deg); }
}

animation: rotate 2s infinite;
animation-delay: 3s; /* пауза между повторениями */
```

#### 3D Button Hover

```css
transform-style: preserve-3d;
transition: all 0.3s ease;

/* Hover */
transform: scale(1.05) rotateX(10deg);
box-shadow: 0 10px 40px rgba(249, 115, 22, 0.4);
```

#### Parallax

```css
/* При скролле */
transform: translateY(calc(scrollPosition * 0.3));
```

## Breakpoints

```css
/* Mobile (по умолчанию) */
@media (min-width: 320px) { ... }

/* Tablet */
@media (min-width: 768px) { ... }

/* Desktop */
@media (min-width: 1024px) { ... }

/* Large Desktop */
@media (min-width: 1280px) { ... }

/* Extra Large */
@media (min-width: 1536px) { ... }
```

## Изображения

### Форматы

- **Основной:** WebP
- **Fallback:** JPG
- **Векторная графика:** SVG

### Размеры

```
Hero Banner: 1920x1080px (desktop), 768x1024px (mobile)
Slider Images: 1600x900px
Product Gallery: 800x600px
Thumbnails: 400x300px
Profile Photos: 300x300px (square)
Icons: 24x24px, 32x32px, 48x48px (SVG)
```

### Оптимизация

- Качество JPG: 80%
- Качество WebP: 75%
- Максимальный размер: 200KB
- Lazy loading: включен
- Srcset: обязательно для адаптивности

```html
<img 
  src="image-800.webp" 
  srcset="image-400.webp 400w, image-800.webp 800w, image-1200.webp 1200w"
  sizes="(max-width: 768px) 100vw, 800px"
  alt="Description"
  loading="lazy"
>
```

## Слайдеры

### React Slick настройки

```javascript
{
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  fade: true, // для Hero
  arrows: true (desktop), false (mobile)
}
```

### Dots (точки навигации)

```css
width: 12px
height: 12px
border-radius: 50%
background: rgba(255, 255, 255, 0.5)

/* Active */
width: 32px
border-radius: 6px
background: #FFFFFF
```

### Arrows (стрелки)

```css
width: 40px
height: 40px
background: rgba(255, 255, 255, 0.3)
backdrop-filter: blur(4px)
border-radius: 50%
color: #2563EB

/* Hover */
background: rgba(255, 255, 255, 0.5)
```

## Формы

### Структура полей

```css
/* Label */
font-size: 14px
font-weight: 500
color: #374151
margin-bottom: 8px

/* Input */
height: 44px (минимум для мобильных)
padding: 12px 16px
border: 1px solid #E5E7EB
border-radius: 8px
font-size: 16px

/* Error state */
border-color: #EF4444
color: #DC2626

/* Success state */
border-color: #22C55E

/* Disabled */
background: #F3F4F6
cursor: not-allowed
opacity: 0.6
```

### Submit кнопка

```css
width: 100%
min-height: 44px
background: #F97316
color: #FFFFFF
border-radius: 9999px
font-size: 16px
font-weight: 500

/* Hover */
background: #EA580C
transform: scale(1.02)

/* Disabled */
background: #D1D5DB
cursor: not-allowed
```

## Accessibility (Доступность)

### Минимальные размеры

- **Кнопки/Ссылки:** 44x44px (Apple HIG)
- **Touch targets:** расстояние между ними 8px минимум
- **Текст:** 16px минимум (для body)

### Контрастность

- **Обычный текст:** минимум 4.5:1
- **Крупный текст (18px+):** минимум 3:1
- **Интерактивные элементы:** минимум 3:1

### Focus states

```css
/* Keyboard focus */
outline: 2px solid #2563EB
outline-offset: 2px
/* или */
box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.5)
```

## Z-index шкала

```css
--z-header: 50
--z-modal: 100
--z-overlay: 90
--z-dropdown: 60
--z-tooltip: 70
--z-base: 1
```

## Тени (Box Shadows)

```css
--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05)
--shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1)
--shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1)
--shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.15)
--shadow-2xl: 0 25px 50px rgba(0, 0, 0, 0.25)
```

### Применение

- **Карточки:** shadow-md
- **Header:** shadow-sm
- **Modal:** shadow-2xl
- **Hover на карточках:** shadow-xl
- **Кнопки (hover):** 0 10px 40px rgba(цвет, 0.4)

---

**Версия:** 1.0  
**Дата:** Март 2026  
**Дизайнер:** Figma Make AI Assistant
