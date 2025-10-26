GitHub Copilot Chat Assistant — آماده‌ست. این یک README کامل، فارسی و اختصاصی برای مخزن learn_github شماست که شامل آیکون بزرگ مرکزی هم می‌شود. من محتوای README و همچنین کد یک لوگوی SVG پیشنهادی رو اینجا می‌ذارم. اگر مایل باشید، می‌تونم همین‌ها را در شاخه جدیدی در مخزن‌تان commit و push کنم — فقط تأیید کنید.

پیشنهاد README.md (قابل کپی/پیست در root/README.md):

<p align="center">
  <img src="assets/logo.svg" width="360" alt="learn_github logo" />
</p>

# learn_github — پروژهٔ آموزشی وب (HTML / CSS / JavaScript)

یک پروژهٔ نمونه و آموزشی برای یادگیری ساخت صفحات وب ساده با HTML، طراحی با CSS و اضافه کردن تعاملات پایه با JavaScript. مناسب برای تمرین، نمایش در پرتفولیو، یا شروع پروژه‌های کوچک.

---

## وضعیت
- زبان: فارسی
- فناوری‌ها: HTML5 · CSS3 · JavaScript
- وضعیت: نمونه / آموزشی

---

## فهرست مطالب
- [معرفی](#معرفی)
- [پیش‌نمایش](#پیش‌نمایش)
- [ویژگی‌ها](#ویژگی‌ها)
- [نصب و اجرا (Local)](#نصب-و-اجرا-local)
- [ساختار پیشنهادی پروژه](#ساختار-پیشنهادی-پروژه)
- [راهنمای توسعه](#راهنمای-توسعه)
- [مشارکت](#مشارکت)
- [لایسنس](#لایسنس)
- [تماس](#تماس)

---

## معرفی
این مخزن یک قالب ساده و مرتب برای پروژه‌های مبتنی بر HTML/CSS/JS است. هدف فراهم آوردن پایه‌ای تمیز برای آموزش، توسعه سریعِ صفحات استاتیک و نمایش نمونه‌کارها می‌باشد.

## پیش‌نمایش
در صورت تمایل می‌توانید تصاویر یا گیف‌ها را در مسیر `assets/` قرار دهید و در این README قرار دهید، مثلاً:
```md
![صفحه اصلی](assets/screenshot-1.png)
```
اگر GitHub Pages فعال شود، آدرس دمو پیشنهادی:
https://bardiya185.github.io/learn_github/

## ویژگی‌ها
- ساختار ساده و قابل فهم HTML
- طراحی واکنش‌گرا پایه با CSS (Flexbox / Grid)
- تعاملات ساده با Vanilla JavaScript (event handling, DOM updates)
- مناسب برای یادگیری و آزمایش

## نصب و اجرا (Local)
1. کلون کردن مخزن:
   git clone https://github.com/bardiya185/learn_github.git

2. ورود به پوشه پروژه:
   cd learn_github

3. اجرا:
   - باز کردن `index.html` در مرورگر برای سریع‌ترین راه،
   - یا راه‌اندازی سرور محلی:
     python -m http.server 8000
     سپس باز کنید: http://localhost:8000

## ساختار پیشنهادی پروژه
```
learn_github/
├─ index.html
├─ styles/
│  └─ main.css
├─ scripts/
│  └─ main.js
├─ assets/
│  ├─ logo.svg        ← لوگوی بزرگ برای README
│  └─ images/
└─ README.md
```

## راهنمای توسعه
- از تگ‌های معنایی HTML5 استفاده کنید (header, main, footer, section).
- CSS را در `styles/main.css` منظم کنید و از نامگذاری معنادار برای کلاس‌ها بهره ببرید.
- JS را در `scripts/main.js` قرار دهید؛ برای کنترل DOM از الگوهای ساده استفاده شود.
- تست در مرورگرهای مدرن (Chrome, Firefox, Edge).

## مشارکت
خوشحال می‌شم مشارکت کنید:
- Issues برای گزارش باگ یا پیشنهاد فیچر باز کنید.
- Fork کرده، شاخه بسازید، تغییرات را ارسال و Pull Request بدهید.
نمونه پیام PR: "✨ Improve README and add project logo"

## لایسنس
این پروژه تحت مجوز MIT است. برای جزئیات فایل LICENSE را بررسی کنید.

## تماس
ساخته‌شده با ❤️ توسط bardiya185  
اگر می‌خواهید من README و لوگو را مستقیم به مخزن اضافه کنم، تایید کنید و انتخاب کنید:
- شاخه پیشنهادی برای push: improve/readme
- پیام commit پیشنهادی: "chore: add polished README and project logo"

---

لوگوی SVG پیشنهادی (فایل پیشنهادی: assets/logo.svg)
شما می‌توانید این کد را در فایل assets/logo.svg قرار دهید. این SVG مینیمال، رنگ‌های مرتبط با HTML/CSS/JS را دارد و نام پروژه را نمایش می‌دهد.

<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="900" height="240" viewBox="0 0 900 240" role="img" aria-label="learn_github logo">
  <rect width="100%" height="100%" rx="12" fill="#0f1724"/>
  <!-- آیکون‌های کوچک فناوری -->
  <g transform="translate(60,40)">
    <!-- HTML badge -->
    <rect x="0" y="0" width="120" height="120" rx="10" fill="#E34F26"/>
    <text x="60" y="76" font-family="Segoe UI, Roboto, Arial" font-weight="700" font-size="48" text-anchor="middle" fill="white">HTML</text>
  </g>
  <g transform="translate(210,40)">
    <!-- CSS badge -->
    <rect x="0" y="0" width="120" height="120" rx="10" fill="#1572B6"/>
    <text x="60" y="76" font-family="Segoe UI, Roboto, Arial" font-weight="700" font-size="48" text-anchor="middle" fill="white">CSS</text>
  </g>
  <g transform="translate(360,40)">
    <!-- JS badge -->
    <rect x="0" y="0" width="120" height="120" rx="10" fill="#F7DF1E"/>
    <text x="60" y="80" font-family="Segoe UI, Roboto, Arial" font-weight="800" font-size="44" text-anchor="middle" fill="#000">JS</text>
  </g>

  <!-- متن پروژه -->
  <text x="580" y="100" font-family="Inter, Arial, Roboto" font-size="48" fill="#fff" font-weight="700" text-anchor="start">learn_github</text>
  <text x="580" y="144" font-family="Inter, Arial, Roboto" font-size="18" fill="#9ca3af" text-anchor="start">Simple HTML · CSS · JavaScript starter</text>
</svg>
