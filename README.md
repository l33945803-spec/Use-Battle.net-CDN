# RAYDA - Велосипедный лендинг

![RAYDA Logo](https://via.placeholder.com/200x80/2563EB/FFFFFF?text=RAYDA)

Интерактивный лендинг для велосипедного бренда RAYDA с акцентом на мобильную версию, анимациями и многоязычностью.

## 🎯 Особенности

- ✅ **Многоязычность** - Русский, Казахский, Английский
- ✅ **Mobile First** - Приоритет мобильной версии
- ✅ **Анимации** - Параллакс, появление блоков, 3D-эффекты
- ✅ **Адаптивный дизайн** - От 320px до 4K
- ✅ **Быстрая загрузка** - Оптимизированные изображения, lazy loading
- ✅ **SEO оптимизация** - Семантическая вёрстка, мета-теги
- ✅ **Интеграции** - WhatsApp, Google Maps, Каспи Магазин

## 🚀 Технологии

### Frontend (React приложение)

- **React 18.3** - UI библиотека
- **React Router 7** - Роутинг
- **Motion (Framer Motion)** - Анимации
- **Tailwind CSS 4** - Стилизация
- **React Slick** - Слайдеры
- **Lucide React** - Иконки

### Рекомендуется для WordPress

- **WordPress 6.0+**
- **Astra / GeneratePress** - Тема
- **Elementor Pro** - Page Builder
- **WPML / Polylang** - Многоязычность
- **Contact Form 7** - Формы
- **WP Rocket** - Кэширование

## 📁 Структура проекта

```
rayda-landing/
├── src/
│   ├── app/
│   │   ├── components/       # React компоненты
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── HeroSection.tsx
│   │   │   ├── Layout.tsx
│   │   │   └── ScrollToTop.tsx
│   │   ├── context/          # React Context
│   │   │   └── LanguageContext.tsx
│   │   ├── pages/            # Страницы
│   │   │   ├── About.tsx     # Главная (О нас)
│   │   │   ├── Purchase.tsx  # Покупка
│   │   │   └── Rental.tsx    # Прокат
│   │   ├── routes.tsx        # Конфигурация роутинга
│   │   └── App.tsx           # Главный компонент
│   └── styles/               # Стили
│       ├── fonts.css
│       ├── slider.css
│       ├── theme.css
│       └── index.css
├── WORDPRESS_IMPLEMENTATION_GUIDE.md  # Руководство для WordPress
├── DESIGN_SPECIFICATIONS.md           # Дизайн спецификации
└── README.md
```

## 🎨 Дизайн

### Цветовая палитра

- **Синий:** `#2563EB` - Основной цвет
- **Зелёный:** `#22C55E` - Success, природа
- **Оранжевый:** `#F97316` - Акцент, CTA кнопки
- **Серый:** `#F9FAFB` - `#111827` - Нейтральные оттенки

### Типографика

- **Шрифт:** Roboto (Google Fonts)
- **Размеры:** 16px (body), 12px (small), 32-48px (headings)

## 📄 Страницы

### 1. Главная (О нас) - `/`

- Hero секция с параллакс-эффектом
- Слайдер с фотографиями велосипедистов
- Карточки с ценностями (История, Миссия, Ценности)
- Секция владельцев компании

### 2. Покупка - `/purchase`

- Галерея моделей велосипедов (4 модели)
- Модальные окна с деталями
- Способы покупки:
  - WhatsApp: `+7 771 146 5057`
  - Каспи Магазин
  - Другие способы

### 3. Прокат - `/rental`

- Условия проката (время, стоимость, локации)
- Форма бронирования → отправка в WhatsApp
- Карта точек проката
- Популярные маршруты

## 🔧 Установка и запуск

### React приложение (локально)

```bash
# Установка зависимостей
npm install

# Запуск dev-сервера
npm run dev

# Сборка для продакшена
npm run build
```

### WordPress

См. подробное руководство в файле: **[WORDPRESS_IMPLEMENTATION_GUIDE.md](./WORDPRESS_IMPLEMENTATION_GUIDE.md)**

Основные шаги:
1. Установить WordPress 6.0+
2. Установить тему Astra или GeneratePress
3. Установить Elementor Pro
4. Установить WPML для многоязычности
5. Импортировать контент
6. Настроить формы и интеграции

## 🌐 Многоязычность

### Поддерживаемые языки

| Язык | Код | Слоган |
|------|-----|--------|
| Русский | `ru` | RAYDA — айда на велосипеде! |
| English | `en` | RAYDA — be a rider! |
| Қазақша | `kz` | RAYDA — велосипед айда! |

### Структура URL (WordPress)

```
/           (ru)
/en/        (en)
/kz/        (kz)

/purchase/       (ru)
/en/purchase/    (en)
/kz/satip-alu/   (kz)
```

## 📱 Адаптивность

### Breakpoints

- **Mobile:** 320px - 767px
- **Tablet:** 768px - 1023px
- **Desktop:** 1024px+

### Mobile First

Все компоненты сначала разрабатываются для мобильных устройств, затем адаптируются под планшеты и десктоп.

**Минимальные размеры:**
- Кнопки: 44x44px
- Текст: 16px (основной), 12px (мелкий)
- Touch targets: расстояние 8px

## 🎬 Анимации

- **Параллакс** - Hero секция background
- **Fade In** - Появление блоков при скролле
- **Slide In** - Выплывание карточек
- **Pulse** - Пульсация WhatsApp кнопки
- **3D Transform** - Эффект для CTA кнопок
- **Rotate** - Вращение логотипа RAYDA

## 🔗 Интеграции

### WhatsApp

```javascript
// Прямая ссылка
https://wa.me/77711465057

// С предзаполненным сообщением
https://wa.me/77711465057?text=Здравствуйте!%20Интересует%20покупка%20велосипеда
```

### Каспи Магазин

```html
<a href="https://kaspi.kz" target="_blank">Купить в Каспи Магазин</a>
```

### Google Maps

Показ точек проката на интерактивной карте с анимированными маркерами.

## 📊 SEO

### Мета-теги

```html
<title>RAYDA - Велосипеды в Алматы | Продажа и прокат</title>
<meta name="description" content="RAYDA - айда на велосипеде! Продажа и прокат велосипедов в Алматы. Доставка, рассрочка.">
<meta name="keywords" content="велосипеды, Алматы, прокат, продажа, RAYDA">
```

### Schema.org

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "RAYDA",
  "telephone": "+7-771-146-5057",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Алматы",
    "addressCountry": "KZ"
  }
}
```

## ⚡ Производительность

### Целевые показатели

- **PageSpeed Mobile:** 90+
- **PageSpeed Desktop:** 95+
- **First Contentful Paint:** < 1.5s
- **Largest Contentful Paint:** < 2.5s

### Оптимизация

- ✅ WebP изображения
- ✅ Lazy loading
- ✅ Минификация CSS/JS
- ✅ CDN (Cloudflare рекомендуется)
- ✅ Browser/Server кэширование

## 📞 Контакты

- **Телефон:** +7 771 146 5057
- **Email:** info@rayda.kz
- **WhatsApp:** https://wa.me/77711465057
- **Адрес:** Алматы, Казахстан

## 🚦 Запуск

**Планируемая дата:** Майские праздники 2026

### Этапы подготовки

- [x] Разработка дизайна (март 2026)
- [ ] Подготовка контента (апрель 2026)
- [ ] Разработка на WordPress (апрель 2026)
- [ ] Тестирование (середина апреля 2026)
- [ ] SEO оптимизация (за 2 недели до запуска)
- [ ] Запуск (май 2026)

## 📚 Документация

- **[WORDPRESS_IMPLEMENTATION_GUIDE.md](./WORDPRESS_IMPLEMENTATION_GUIDE.md)** - Полное руководство по реализации на WordPress
- **[DESIGN_SPECIFICATIONS.md](./DESIGN_SPECIFICATIONS.md)** - Дизайн-система и спецификации

## 🤝 Поддержка

Для вопросов по проекту обращайтесь:
- Email: info@rayda.kz
- WhatsApp: +7 771 146 5057

## 📝 Лицензия

© 2026 RAYDA. Все права защищены.

---

**Версия:** 1.0  
**Последнее обновление:** Март 2026  
**Разработано с помощью:** Figma Make AI Assistant
