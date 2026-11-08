# الأكاديمية الذكية – الهلال الأحمر لمحافظة الرمح

**الرابط المباشر للموقع:** <https://oaalo.github.io/ramah/>

المستودع: <https://github.com/oaalo/ramah>

> أي تعديل ترفعه على فرع `main` يظهر تلقائياً على الموقع خلال دقيقة تقريباً.

موقع تعريفي وتدريبي (HTML/CSS/JS ثابت بدون أي أدوات بناء) يحتوي على:

- الصفحة الرئيسية مع الأقسام: القوانين، التوظيف، الدورات، المكافآت
- صفحات محتوى داخلية: `laws-content.html`، `job-content.html`، `careers-content.html`، `rewards-content.html`
- سلايدات الدورات: `guide.html`، `operations.html`، `supervisor.html`، `air-support.html`
- شعار المحافظة: `logo.svg`
- صفحة `404.html` تعمل مع الروابط النظيفة (مثل `/laws`) عبر GitHub Pages

## المعاينة محلياً

```bash
python -m http.server 8123
```

ثم افتح: <http://127.0.0.1:8123/>

> للروابط النظيفة مثل `/laws` لا بد من استضافة تدعم `404.html` (GitHub Pages تدعمها تلقائياً).

## النشر على GitHub Pages

1. أنشئ مستودعاً جديداً (Public) على GitHub.
2. ارفع الملفات:

```bash
git init
git add .
git commit -m "موقع الأكاديمية الذكية - محافظة الرمح"
git branch -M main
git remote add origin https://github.com/<اسم-الحساب>/<اسم-المستودع>.git
git push -u origin main
```

3. من المستودع: **Settings → Pages**، اختر **Source: Deploy from a branch** ثم **Branch: main / (root)** واضغط Save (تم إعدادها مسبقاً في مستودع `ramah`).
4. بعد دقيقة يصبح الرابط:

```
https://<اسم-الحساب>.github.io/<اسم-المستودع>/
```

## تعديل البيانات

- سيرفر الديسكورد: ابحث عن `discord.gg/rm8` في ملفات HTML.
- اسم المحافظة: ابحث عن `محافظة الرمح`.
- الشعار: استبدل `logo.svg` (يُستخدم في الشريط العلوي والأيقونة).
