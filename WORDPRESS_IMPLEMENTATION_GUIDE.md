# RAYDA Landing - Руководство по реализации на WordPress

## Обзор проекта

Интерактивный лендинг для велосипедного бренда RAYDA с акцентом на мобильную версию, анимациями и многоязычностью (RU/KZ/EN).

## Структура проекта

### 1. Страницы

- **Главная (О нас)** - `/` 
- **Покупка** - `/purchase`
- **Прокат** - `/rental`

### 2. Основные секции

#### Header (Шапка)
- Фиксированная позиция (sticky header)
- Логотип RAYDA с анимацией вращения
- Трёхъязычный переключатель (RU/KZ/EN)
- Навигационное меню (десктоп) / Гамбургер-меню (мобильные)
- Кнопка WhatsApp с пульсирующим эффектом

**WordPress реализация:**
```php
// В header.php или через хук wp_head
// Используйте WPML или Polylang для многоязычности
```

#### Hero Section (Героический блок)
- Слайдшоу изображений с эффектом параллакса
- Смена слоганов в зависимости от языка
- CTA-кнопка "Узнать больше" с 3D-эффектом

**Плагины:**
- Slider Revolution или LayerSlider для слайдшоу
- Elementor Pro для анимаций

**Шорткод пример:**
```
[hero_slider images="img1,img2,img3" autoplay="5000"]
```

#### О нас (About Section)
- React Slick карусель с профессиональными фото
- Карточки с иконками (История, Миссия, Ценности)
- Секция владельцев с эффектом "выплывания"

**WordPress реализация:**
- ACF (Advanced Custom Fields) для управления контентом
- Custom Post Type для владельцев компании

**ACF структура:**
```
Group: About Section
- Gallery: Слайдер фото
- Repeater: Карточки ценностей
  - Icon (image)
  - Title (text)
  - Description (textarea)
- Repeater: Владельцы
  - Photo (image)
  - Name (text)
  - Role (text)
  - Bio (textarea)
```

#### Покупка (Purchase Section)
- Галерея моделей велосипедов (4 модели)
- Модальное окно с деталями при клике
- Способы покупки (WhatsApp, Каспи, другие)

**Плагины:**
- WooCommerce (опционально для каталога)
- Fancybox или Lightbox для модальных окон

**Интеграция:**
```php
// Каспи Магазин - внешняя ссылка
// WhatsApp - API ссылка: wa.me/77711465057?text=...
```

#### Прокат (Rental Section)
- Карточки условий проката с анимацией
- Форма бронирования (отправка в WhatsApp)
- Карта точек проката
- Популярные маршруты

**Плагины:**
- Contact Form 7 или WPForms для формы
- WP Google Maps или Leaflet Maps Marker
- WPML/Polylang для переводов формы

**Форма бронирования - шорткод:**
```
[contact-form-7 id="123" title="Rental Form"]
```

**Интеграция WhatsApp:**
```javascript
// При отправке формы перенаправление на WhatsApp
const formData = new FormData(form);
const message = `Бронирование:\nИмя: ${formData.get('name')}\n...`;
window.open(`https://wa.me/77711465057?text=${encodeURIComponent(message)}`);
```

#### Footer (Подвал)
- Контакты с иконками
- Социальные сети (Facebook, Instagram, Twitter)
- Политика конфиденциальности, пользовательское соглашение
- Копирайт

## Дизайн-система

### Цветовая палитра

```css
/* Основные цвета */
--primary-blue: #2563eb;      /* Синий */
--primary-green: #22c55e;     /* Зелёный */
--accent-orange: #f97316;     /* Оранжевый (кнопки, акценты) */
--white: #ffffff;
--gray-light: #f3f4f6;
--gray-dark: #374151;
--black: #111827;
```

### Типографика

```css
/* Шрифты */
font-family: 'Roboto', sans-serif;

/* Размеры для мобильных */
--text-base: 16px;           /* Основной текст */
--text-small: 12px;          /* Мелкий текст */
--heading-h1: 32-40px;       /* Заголовки H1 */
--heading-h2: 24-32px;       /* Заголовки H2 */
--heading-h3: 20-24px;       /* Заголовки H3 */
```

**Импорт шрифтов:**
```php
// functions.php
function rayda_enqueue_fonts() {
    wp_enqueue_style('google-fonts', 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap');
}
add_action('wp_enqueue_scripts', 'rayda_enqueue_fonts');
```

### Иконки

- Material Icons или Feather Icons
- Размер: 24×24px (стандарт)
- Цвет: в зависимости от контекста

**Подключение:**
```html
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
```

## Адаптивность

### Breakpoints

```css
/* Mobile First подход */
--mobile: 320px - 767px;
--tablet: 768px - 1023px;
--desktop: 1024px+;
```

### Мобильные требования

1. **Ширина контента:** 320-375px
2. **Кнопки CTA:** минимум 44×44px (Apple/Google рекомендации)
3. **Текст:** 
   - Основной: 16px
   - Мелкий: 12px
4. **Меню:** Гамбургер-меню для мобильных
5. **Изображения:** WebP формат, lazy loading

**WordPress реализация:**
```php
// Lazy loading
add_filter('wp_lazy_loading_enabled', '__return_true');

// WebP конвертация через плагин
// Рекомендуется: WebP Express или ShortPixel
```

## Анимации

### Основные эффекты

1. **Параллакс** - Hero section background
2. **Появление блоков** - Fade in on scroll (Motion)
3. **Hover-эффекты** - Кнопки, карточки, навигация
4. **3D-кнопки** - CTA кнопки с трансформацией
5. **Пульсация** - WhatsApp кнопка
6. **Анимация логотипа** - Вращение RAYDA

**WordPress плагины:**
- AOS (Animate On Scroll) - самый простой
- Elementor Pro - встроенные анимации
- WOW.js - альтернатива AOS

**Пример подключения AOS:**
```php
// functions.php
function rayda_enqueue_animations() {
    wp_enqueue_style('aos-css', 'https://unpkg.com/aos@next/dist/aos.css');
    wp_enqueue_script('aos-js', 'https://unpkg.com/aos@next/dist/aos.js', [], null, true);
}
add_action('wp_enqueue_scripts', 'rayda_enqueue_animations');
```

```html
<!-- В HTML -->
<div data-aos="fade-up" data-aos-duration="800">
    Контент с анимацией
</div>
```

## Рекомендуемые темы WordPress

1. **Astra** (лёгкая, быстрая, mobile-first)
2. **GeneratePress** (SEO-оптимизированная)
3. **OceanWP** (много готовых демо)

### Настройка Astra

```php
// Отключить ненужные элементы
add_filter('astra_page_layout', function() { return 'no-sidebar'; });

// Полная ширина для всех страниц
add_filter('astra_get_content_layout', function() { return 'page-builder'; });
```

## Необходимые плагины

### Обязательные
1. **Elementor / Elementor Pro** - Page Builder
2. **WPML** или **Polylang** - Многоязычность
3. **Contact Form 7** или **WPForms** - Формы
4. **WP Rocket** или **W3 Total Cache** - Кэширование
5. **Yoast SEO** - SEO оптимизация

### Рекомендуемые
1. **Slider Revolution** - Слайдеры
2. **WP Google Maps** - Карты
3. **UpdraftPlus** - Резервное копирование
4. **Wordfence** - Безопасность
5. **WebP Express** - Оптимизация изображений

## Интеграции

### WhatsApp API

```javascript
// Функция для формирования ссылки
function generateWhatsAppLink(phone, message) {
    const cleanPhone = phone.replace(/[^0-9]/g, '');
    return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
}

// Пример использования
const phone = '77711465057';
const message = 'Здравствуйте! Интересует покупка велосипеда RAYDA Urban';
window.open(generateWhatsAppLink(phone, message), '_blank');
```

### Каспи Магазин

```html
<!-- Прямая ссылка на магазин -->
<a href="https://kaspi.kz/shop/[ваш-магазин]" target="_blank">
    Купить в Каспи Магазин
</a>
```

### Google Maps / Яндекс.Карты

**Плагин WP Google Maps:**
```
[wpgmza id="1" lat="43.2220" lng="76.8512" zoom="12"]
```

**Или кастомная интеграция:**
```javascript
// Google Maps API
// Ключ API получить на console.cloud.google.com
```

## Производительность

### Оптимизация

1. **Изображения:**
   - Формат WebP
   - Lazy loading
   - Адаптивные размеры (srcset)
   - Максимум 200KB на изображение

2. **CSS/JS:**
   - Минификация
   - Объединение файлов
   - Отложенная загрузка (defer/async)

3. **Кэширование:**
   - Browser caching
   - Server caching (Redis/Memcached)
   - CDN (Cloudflare)

**Настройка в WP Rocket:**
```
- Enable file optimization
- Minify CSS/JS
- Combine CSS/JS
- Lazy load images
- Enable CDN
```

### PageSpeed рекомендации

- **Mobile:** 90+ баллов
- **Desktop:** 95+ баллов
- **FCP (First Contentful Paint):** < 1.5s
- **LCP (Largest Contentful Paint):** < 2.5s

## SEO оптимизация

### Мета-теги для каждой страницы

```html
<!-- Главная -->
<title>RAYDA - Велосипеды в Алматы | Продажа и прокат</title>
<meta name="description" content="RAYDA - айда на велосипеде! Продажа и прокат велосипедов в Алматы. Доставка, рассрочка.">

<!-- Покупка -->
<title>Купить велосипед RAYDA | Рассрочка 0-0-12</title>

<!-- Прокат -->
<title>Прокат велосипедов в Алматы | RAYDA</title>
```

### Schema.org разметка

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "RAYDA",
  "description": "Продажа и прокат велосипедов",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Алматы",
    "addressCountry": "KZ"
  },
  "telephone": "+7-771-146-5057"
}
```

## Многоязычность (WPML)

### Структура переводов

```
/           (ru) - О нас
/en/        (en) - About
/kz/        (kz) - Біз туралы

/purchase/     (ru)
/en/purchase/  (en)
/kz/satip-alu/ (kz)

/rental/       (ru)
/en/rental/    (en)
/kz/zhalgha/   (kz)
```

### Настройка WPML

1. Установить Language Setup
2. Выбрать языки: Русский (по умолчанию), Казахский, English
3. Формат URL: разные языки в каталогах
4. Перевести все страницы, меню, виджеты

## Контакты и ссылки

- **Телефон:** +7 771 146 5057
- **Email:** info@rayda.kz
- **WhatsApp:** https://wa.me/77711465057
- **Адрес:** Алматы, Казахстан

## Запуск в мае 2026

- Дата запуска: майские праздники 2026
- Подготовка контента: апрель 2026
- Тестирование: середина апреля 2026
- SEO оптимизация: за 2 недели до запуска

## Чек-лист перед запуском

- [ ] Все страницы переведены на 3 языка
- [ ] Формы проверены и работают
- [ ] WhatsApp интеграция настроена
- [ ] Карты добавлены и отображаются
- [ ] Мобильная версия протестирована (iPhone, Android)
- [ ] PageSpeed > 90 на мобильных
- [ ] SEO мета-теги заполнены
- [ ] Google Analytics подключен
- [ ] Yandex.Metrika подключена
- [ ] SSL сертификат установлен
- [ ] Резервное копирование настроено
- [ ] 404 страница создана
- [ ] Политика конфиденциальности опубликована
- [ ] Пользовательское соглашение опубликовано

---

**Версия документа:** 1.0  
**Дата:** Март 2026  
**Автор:** Figma Make AI Assistant
