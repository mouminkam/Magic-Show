# API Requirements Documentation

هذا الملف يوثق جميع APIs المطلوبة للمشروع بناءً على فحص الفرونت اند.

---

## 📄 صفحة About Us (`/about-us`)

### الملفات المفحوصة:
- `src/app/about-us/page.jsx`
- `src/app/about-us/_components/AboutUsSection.jsx`
- `src/app/about-us/_components/AboutDescription.jsx`
- `src/app/about-us/_components/StatsSection.jsx`
- `src/app/about-us/_components/TeamSlider.jsx`
- `src/app/about-us/_components/TestimonialSlider.jsx`

### APIs المطلوبة:

#### 1. GET `/about/team-members`
**الوصف**: جلب قائمة أعضاء الفريق

**Method**: `GET`

**Headers**:
- `Accept-Language`: `string` - اللغة (ar, en, etc.)

**Parameters**: لا يوجد

**Response**:
```json
[
  {
    "name": "string",
    "role": "string",
    "image": "string (URL path)"
  }
]
```

**ملاحظات**:
- البيانات الحالية في `getTeamMembers()` في `page.jsx` تحتوي على 8 أعضاء فريق
- كل عضو يحتوي على: name, role, image

---

#### 2. GET `/about/testimonials`
**الوصف**: جلب قائمة الشهادات/التقييمات من العملاء

**Method**: `GET`

**Headers**:
- `Accept-Language`: `string` - اللغة (ar, en, etc.)

**Parameters**: لا يوجد

**Response**:
```json
[
  {
    "name": "string",
    "image": "string (URL path)",
    "text": "string"
  }
]
```

**ملاحظات**:
- البيانات الحالية في `getTestimonials()` في `page.jsx` تحتوي على 3 شهادات
- كل شهادة تحتوي على: name, image, text
- يتم عرضها في `TestimonialSlider` مع 5 نجوم ثابتة

---

#### 3. GET `/about/description`
**الوصف**: جلب وصف الشركة والمعلومات الأساسية

**Method**: `GET`

**Headers**:
- `Accept-Language`: `string` - اللغة (ar, en, etc.)

**Parameters**: لا يوجد

**Response**:
```json
{
  "title": "string",
  "description": "string",
  "image": "string (URL path)",
  "features": [
    "string"
  ],
  "buttonText": "string"
}
```

**ملاحظات**:
- البيانات الحالية في `getAboutDescription()` في `page.jsx`
- يتم عرضها في `AboutDescription` component
- features هي array من strings

---

#### 4. GET `/about/stats`
**الوصف**: جلب إحصائيات الشركة

**Method**: `GET`

**Headers**:
- `Accept-Language`: `string` - اللغة (ar, en, etc.)

**Parameters**: لا يوجد

**Response**:
```json
[
  {
    "icon": "string",
    "title": "string",
    "value": "number",
    "suffix": "string"
  }
]
```

**ملاحظات**:
- البيانات الحالية في `getStats()` في `page.jsx` تحتوي على 3 إحصائيات
- icon يجب أن يكون واحد من: `"Users"`, `"Instagram"`, `"ShoppingBag"` (يتم استخدامها في `StatsSection`)
- value هو رقم (يمكن أن يكون decimal)
- suffix عادة "k" لكن يمكن أن يكون أي string
- يتم عرضها مع animated counter في `StatsSection`

---

## 📄 صفحة Home (`/home`)

### الملفات المفحوصة:
- `src/app/home/page.jsx`
- `src/app/home/_components/HomeSection.jsx`
- `src/app/home/_components/*.jsx` (جميع المكونات)

### APIs المطلوبة:

#### 1. GET `/home/hero`
**الوصف**: جلب بيانات القسم الرئيسي (Hero Section)

**Method**: `GET`

**Headers**:
- `Accept-Language`: `string` - اللغة (ar, en, etc.)

**Parameters**: لا يوجد

**Response**:
```json
{
  "badge": "string",
  "title": "string",
  "subtitle": "string",
  "description": "string",
  "ctaPrimary": "string",
  "ctaPrimaryLink": "string",
  "ctaSecondary": "string",
  "ctaSecondaryLink": "string",
  "stats": [
    {
      "value": "string",
      "label": "string"
    }
  ],
  "image": "string (URL path)",
  "socialLinks": [
    {
      "name": "string",
      "label": "string",
      "icon": "string",
      "href": "string"
    }
  ]
}
```

---

#### 2. GET `/home/about-us`
**الوصف**: جلب بيانات قسم About Us في الصفحة الرئيسية

**Method**: `GET`

**Headers**:
- `Accept-Language`: `string` - اللغة

**Parameters**: لا يوجد

**Response**:
```json
{
  "title": "string",
  "backgroundImage": "string (URL path)",
  "leftBadge": "string",
  "rightBadge": "string"
}
```

---

#### 3. GET `/home/featured-products`
**الوصف**: جلب المنتجات المميزة

**Method**: `GET`

**Headers**:
- `Accept-Language`: `string` - اللغة

**Parameters**: لا يوجد

**Response**:
```json
{
  "featuredHeader": {
    "title": "string",
    "subtitle": "string",
    "description": "string",
    "buttonText": "string",
    "buttonLink": "string"
  },
  "onSaleHeader": {
    "title": "string",
    "subtitle": "string",
    "description": "string",
    "buttonText": "string",
    "buttonLink": "string"
  },
  "featuredProducts": [
    {
      "image": "string (URL path)",
      "alt": "string",
      "name": "string",
      "originalPrice": "string",
      "discountedPrice": "string",
      "width": "number",
      "height": "number",
      "colSpan": "string (optional)",
      "rowSpan": "string (optional)"
    }
  ],
  "onSaleProducts": [
    {
      "image": "string (URL path)",
      "alt": "string",
      "name": "string",
      "originalPrice": "string",
      "discountedPrice": "string",
      "width": "number",
      "height": "number",
      "colSpan": "string (optional)",
      "rowSpan": "string (optional)"
    }
  ]
}
```

---

#### 4. GET `/home/blog-section`
**الوصف**: جلب بيانات قسم المدونة في الصفحة الرئيسية

**Method**: `GET`

**Headers**:
- `Accept-Language`: `string` - اللغة

**Parameters**: لا يوجد

**Response**:
```json
{
  "backgroundImage": "string (URL path)",
  "title": "string",
  "leftBadge": "string",
  "rightBadge": "string"
}
```

---

#### 5. GET `/home/latest-blog`
**الوصف**: جلب أحدث مقالات المدونة

**Method**: `GET`

**Headers**:
- `Accept-Language`: `string` - اللغة

**Parameters**: لا يوجد

**Response**:
```json
{
  "title": "string",
  "description": "string",
  "posts": [
    {
      "id": "number",
      "title": "string",
      "image": "string (URL path)",
      "date": "string",
      "author": "string"
    }
  ]
}
```

---

#### 6. GET `/categories?featured=true`
**الوصف**: جلب الفئات المميزة

**Method**: `GET`

**Headers**:
- `Accept-Language`: `string` - اللغة

**Query Parameters**:
- `featured`: `boolean` - true لجلب الفئات المميزة فقط

**Response**:
```json
[
  {
    "name": "string",
    "image": "string (URL path)",
    "slug": "string"
  }
]
```

---

#### 7. GET `/products?sort=newest&limit=6`
**الوصف**: جلب المنتجات الجديدة

**Method**: `GET`

**Headers**:
- `Accept-Language`: `string` - اللغة

**Query Parameters**:
- `sort`: `string` - نوع الترتيب (newest, bestseller, etc.)
- `limit`: `number` - عدد المنتجات المطلوبة

**Response**:
```json
{
  "header": {
    "title": "string",
    "subtitle": "string",
    "description": "string",
    "buttonText": "string",
    "buttonLink": "string"
  },
  "products": [
    {
      "id": "number",
      "name": "string",
      "image": "string (URL path)",
      "price": "number",
      "originalPrice": "number (optional)",
      "category": "string"
    }
  ]
}
```

---

#### 8. GET `/products?sort=bestseller&limit=6`
**الوصف**: جلب الأفضل مبيعاً

**Method**: `GET`

**Headers**:
- `Accept-Language`: `string` - اللغة

**Query Parameters**:
- `sort`: `string` - "bestseller"
- `limit`: `number` - عدد المنتجات

**Response**: نفس هيكل API رقم 7

---

#### 9. GET `/products?onSale=true&limit=6`
**الوصف**: جلب المنتجات المعروضة للبيع

**Method**: `GET`

**Headers**:
- `Accept-Language`: `string` - اللغة

**Query Parameters**:
- `onSale`: `boolean` - true
- `limit`: `number` - عدد المنتجات

**Response**:
```json
{
  "header": {
    "title": "string",
    "subtitle": "string",
    "description": "string",
    "buttonText": "string",
    "buttonLink": "string"
  },
  "products": [
    {
      "id": "number",
      "name": "string",
      "image": "string (URL path)",
      "price": "number",
      "originalPrice": "number",
      "category": "string",
      "discount": "number"
    }
  ]
}
```

---

#### 10. GET `/home/why-choose-us`
**الوصف**: جلب أسباب اختيار الشركة

**Method**: `GET`

**Headers**:
- `Accept-Language`: `string` - اللغة

**Parameters**: لا يوجد

**Response**:
```json
[
  {
    "icon": "string (Truck | Shield | RotateCcw | HeadphonesIcon)",
    "title": "string",
    "description": "string"
  }
]
```

---

#### 11. GET `/reviews?featured=true&limit=6`
**الوصف**: جلب التقييمات المميزة من العملاء

**Method**: `GET`

**Headers**:
- `Accept-Language`: `string` - اللغة

**Query Parameters**:
- `featured`: `boolean` - true
- `limit`: `number` - عدد التقييمات

**Response**:
```json
[
  {
    "id": "number",
    "name": "string",
    "text": "string",
    "comment": "string",
    "image": "string (URL path)",
    "productImage": "string (URL path)",
    "rating": "number (1-5)",
    "date": "string"
  }
]
```

---

## 📄 صفحة Shop (`/shop`)

### الملفات المفحوصة:
- `src/app/shop/page.jsx`
- `src/app/shop/_components/ShopSection.jsx`

### APIs المطلوبة:

#### 1. GET `/shop/banner`
**الوصف**: جلب بانر صفحة المتجر

**Method**: `GET`

**Headers**:
- `Accept-Language`: `string` - اللغة

**Parameters**: لا يوجد

**Response**:
```json
{
  "title": "string",
  "backgroundImage": "string (URL path)",
  "leftBadge": "string",
  "rightBadge": "string"
}
```

---

#### 2. GET `/shop/products`
**الوصف**: جلب المنتجات مع إمكانية الفلترة والتصفّح

**Method**: `GET`

**Headers**:
- `Accept-Language`: `string` - اللغة

**Query Parameters**:
- `page`: `number` (default: 1) - رقم الصفحة
- `limit`: `number` (default: 6) - عدد المنتجات في الصفحة
- `category`: `string` (optional) - فلتر حسب الفئة
- `size`: `string` (optional) - فلتر حسب المقاس
- `color`: `string` (optional) - فلتر حسب اللون
- `season`: `string` (optional) - فلتر حسب الموسم
- `minPrice`: `number` (optional) - أقل سعر
- `maxPrice`: `number` (optional) - أعلى سعر

**Response**:
```json
{
  "products": [
    {
      "id": "number",
      "name": "string",
      "category": "string",
      "price": "number",
      "originalPrice": "number (optional)",
      "discount": "number (optional)",
      "image": "string (URL path)",
      "sizes": ["string"],
      "colors": ["string"],
      "seasons": ["string"]
    }
  ],
  "pagination": {
    "currentPage": "number",
    "limit": "number",
    "totalItems": "number",
    "totalPages": "number"
  }
}
```

**ملاحظات مهمة**:
- يجب تطبيق جميع الفلاتر قبل التصفّح (pagination)
- `totalItems` يجب أن يحسب بعد الفلترة وقبل التصفّح
- `totalPages` = `Math.ceil(totalItems / limit)`

---

#### 3. GET `/shop/categories`
**الوصف**: جلب قائمة الفئات المتاحة

**Method**: `GET`

**Headers**:
- `Accept-Language`: `string` - اللغة

**Parameters**: لا يوجد

**Response**:
```json
[
  "string"
]
```

**ملاحظات**:
- القائمة تحتوي على أسماء الفئات كـ strings
- أول عنصر عادة "All" لعرض جميع المنتجات

---

#### 4. GET `/shop/filters`
**الوصف**: جلب خيارات الفلاتر المتاحة (الأحجام، الألوان، المواسم، نطاق الأسعار)

**Method**: `GET`

**Headers**:
- `Accept-Language`: `string` - اللغة

**Parameters**: لا يوجد

**Response**:
```json
{
  "sizes": ["string"],
  "colors": ["string"],
  "seasons": ["string"],
  "priceRange": {
    "min": "number",
    "max": "number"
  }
}
```

**ملاحظات**:
- `priceRange` يجب أن يُحسب ديناميكياً من جميع المنتجات المتاحة
- `min` و `max` يمثلان أقل وأعلى سعر في قاعدة البيانات

---

## 📄 صفحة تفاصيل المنتج (`/shop/[id]`)

### الملفات المفحوصة:
- `src/app/shop/[id]/page.jsx`
- `src/app/shop/[id]/_components/ProductDetailSection.jsx`

### APIs المطلوبة:

#### 1. GET `/shop/products/{productId}`
**الوصف**: جلب تفاصيل منتج معين

**Method**: `GET`

**Headers**:
- `Accept-Language`: `string` - اللغة

**Path Parameters**:
- `productId`: `string` - معرف المنتج

**Response**:
```json
{
  "id": "string",
  "name": "string",
  "description": "string",
  "price": "number",
  "originalPrice": "number (optional)",
  "discount": "number (optional)",
  "code": "string",
  "images": ["string (URL path)"],
  "sizes": ["string"],
  "colors": ["string"],
  "descriptionText": "string",
  "rating": "number (1-5)",
  "bannerData": {
    "title": "string",
    "backgroundImage": "string (URL path)",
    "leftBadge": "string",
    "rightBadge": "string"
  }
}
```

---

#### 2. GET `/shop/products/{productId}/related`
**الوصف**: جلب المنتجات ذات الصلة

**Method**: `GET`

**Headers**:
- `Accept-Language`: `string` - اللغة

**Path Parameters**:
- `productId`: `string` - معرف المنتج

**Response**:
```json
[
  {
    "id": "number",
    "name": "string",
    "price": "number",
    "likes": "number",
    "image": "string (URL path)"
  }
]
```

---

## 📄 صفحة Blog (`/blog`)

### الملفات المفحوصة:
- `src/app/blog/page.jsx`
- `src/app/blog/_components/BlogSection.jsx`

### APIs المطلوبة:

#### 1. GET `/blog/posts`
**الوصف**: جلب قائمة مقالات المدونة مع التصفّح

**Method**: `GET`

**Headers**:
- `Accept-Language`: `string` - اللغة

**Query Parameters**:
- `page`: `number` (default: 1) - رقم الصفحة

**Response**:
```json
{
  "posts": [
    {
      "id": "number",
      "title": "string",
      "excerpt": "string",
      "image": "string (URL path)",
      "date": "string"
    }
  ],
  "currentPage": "number",
  "totalPages": "number"
}
```

---

#### 2. GET `/blog/banner`
**الوصف**: جلب بانر صفحة المدونة

**Method**: `GET`

**Headers**:
- `Accept-Language`: `string` - اللغة

**Parameters**: لا يوجد

**Response**:
```json
{
  "backgroundImage": "string (URL path)",
  "title": "string",
  "leftBadge": "string",
  "rightBadge": "string"
}
```

---

## 📄 صفحة تفاصيل المدونة (`/blog/[id]`)

### الملفات المفحوصة:
- `src/app/blog/[id]/page.jsx`
- `src/app/blog/[id]/_components/BlogDetailSection.jsx`

### APIs المطلوبة:

#### 1. GET `/blog/posts/{postId}`
**الوصف**: جلب تفاصيل مقال معين

**Method**: `GET`

**Headers**:
- `Accept-Language`: `string` - اللغة

**Path Parameters**:
- `postId`: `string` - معرف المقال

**Response**:
```json
{
  "id": "string",
  "title": "string",
  "content": "string (HTML)",
  "image": "string (URL path)",
  "date": "string"
}
```

---

#### 2. GET `/blog/posts/{postId}/comments`
**الوصف**: جلب تعليقات مقال معين

**Method**: `GET`

**Headers**:
- `Accept-Language`: `string` - اللغة

**Path Parameters**:
- `postId`: `string` - معرف المقال

**Response**:
```json
[
  {
    "id": "number",
    "author": "string",
    "comment": "string",
    "date": "string"
  }
]
```

---

#### 3. POST `/blog/posts/{postId}/comments`
**الوصف**: إضافة تعليق جديد على مقال

**Method**: `POST`

**Headers**:
- `Accept-Language`: `string` - اللغة
- `Authorization`: `string` (optional) - Bearer token إذا كان التعليق يتطلب تسجيل دخول

**Path Parameters**:
- `postId`: `string` - معرف المقال

**Request Body**:
```json
{
  "author": "string",
  "email": "string",
  "comment": "string"
}
```

**Response**:
```json
{
  "id": "number",
  "author": "string",
  "comment": "string",
  "date": "string",
  "success": "boolean"
}
```

---

## 📄 صفحة Contact Us (`/contact-us`)

### الملفات المفحوصة:
- `src/app/contact-us/page.jsx`
- `src/app/contact-us/_components/ContactSection.jsx`
- `src/app/contact-us/_components/ContactForm.jsx`

### APIs المطلوبة:

#### 1. GET `/contact/hero`
**الوصف**: جلب بانر صفحة الاتصال

**Method**: `GET`

**Headers**:
- `Accept-Language`: `string` - اللغة

**Parameters**: لا يوجد

**Response**:
```json
{
  "title": "string",
  "backgroundImage": "string (URL path)",
  "leftBadge": "string",
  "rightBadge": "string"
}
```

---

#### 2. GET `/contact/map`
**الوصف**: جلب رابط الخريطة

**Method**: `GET`

**Headers**:
- `Accept-Language`: `string` - اللغة

**Parameters**: لا يوجد

**Response**:
```json
{
  "mapUrl": "string (Google Maps embed URL)"
}
```

---

#### 3. GET `/contact/details`
**الوصف**: جلب معلومات الاتصال

**Method**: `GET`

**Headers**:
- `Accept-Language`: `string` - اللغة

**Parameters**: لا يوجد

**Response**:
```json
{
  "title": "string",
  "address": "string",
  "email": "string",
  "phone": "string",
  "fax": "string",
  "aboutTitle": "string",
  "aboutText": "string"
}
```

---

#### 4. POST `/contact/send-message`
**الوصف**: إرسال رسالة من نموذج الاتصال

**Method**: `POST`

**Headers**:
- `Accept-Language`: `string` - اللغة
- `Content-Type`: `application/json`

**Request Body**:
```json
{
  "firstName": "string",
  "lastName": "string",
  "email": "string",
  "subject": "string",
  "message": "string"
}
```

**Response**:
```json
{
  "success": "boolean",
  "message": "string"
}
```

**ملاحظات**:
- حالياً يستخدم `mailto:` لكن يُفضل إنشاء API لإرسال الرسائل

---

## 📄 صفحة Login (`/login`)

### الملفات المفحوصة:
- `src/app/login/page.jsx`
- `src/app/login/_components/LoginSection.jsx`

### APIs المطلوبة:

#### 1. POST `/auth/login`
**الوصف**: تسجيل دخول المستخدم

**Method**: `POST`

**Headers**:
- `Content-Type`: `application/json`

**Request Body**:
```json
{
  "email": "string",
  "password": "string"
}
```

**Response**:
```json
{
  "success": "boolean",
  "token": "string",
  "user": {
    "id": "number",
    "email": "string",
    "firstName": "string",
    "lastName": "string"
  },
  "message": "string"
}
```

---

## 📄 صفحة Register (`/register`)

### الملفات المفحوصة:
- `src/app/register/page.jsx`
- `src/app/register/_components/RegisterSection.jsx`

### APIs المطلوبة:

#### 1. POST `/auth/register`
**الوصف**: إنشاء حساب مستخدم جديد

**Method**: `POST`

**Headers**:
- `Content-Type`: `application/json`

**Request Body**:
```json
{
  "firstName": "string",
  "lastName": "string",
  "email": "string",
  "phone": "string (optional)",
  "password": "string",
  "confirmPassword": "string"
}
```

**Response**:
```json
{
  "success": "boolean",
  "token": "string",
  "user": {
    "id": "number",
    "email": "string",
    "firstName": "string",
    "lastName": "string"
  },
  "message": "string"
}
```

**ملاحظات**:
- كلمة المرور يجب أن تحتوي على: 8+ أحرف، أحرف كبيرة وصغيرة، رقم، رمز خاص
- يجب التحقق من تطابق `password` و `confirmPassword` في الفرونت اند

---

## 📄 صفحة Shopping Cart (`/shoping-cart`)

### الملفات المفحوصة:
- `src/app/shoping-cart/page.jsx`
- `src/app/shoping-cart/_components/ShoppingCartSection.jsx`

### APIs المطلوبة:

#### 1. POST `/cart/validate-coupon`
**الوصف**: التحقق من صحة كوبون الخصم

**Method**: `POST`

**Headers**:
- `Content-Type`: `application/json`
- `Authorization`: `string` (optional) - Bearer token

**Request Body**:
```json
{
  "couponCode": "string"
}
```

**Response**:
```json
{
  "valid": "boolean",
  "discount": "number (percentage)",
  "message": "string"
}
```

---

#### 2. POST `/cart/checkout`
**الوصف**: إنهاء عملية الشراء

**Method**: `POST`

**Headers**:
- `Content-Type`: `application/json`
- `Authorization`: `string` - Bearer token (مطلوب)

**Request Body**:
```json
{
  "items": [
    {
      "id": "number",
      "quantity": "number",
      "price": "number"
    }
  ],
  "couponCode": "string (optional)",
  "shippingAddress": {
    "firstName": "string",
    "lastName": "string",
    "address": "string",
    "city": "string",
    "country": "string",
    "phone": "string"
  },
  "paymentMethod": "string"
}
```

**Response**:
```json
{
  "success": "boolean",
  "orderId": "string",
  "total": "number",
  "message": "string"
}
```

**ملاحظات**:
- حالياً السلة تُحفظ في localStorage، لكن يُفضل حفظها في قاعدة البيانات للمستخدمين المسجلين

---

## 📄 صفحة Stores (`/stores`)

### الملفات المفحوصة:
- `src/app/stores/page.jsx`
- `src/app/stores/_components/StoresSection.jsx`

### APIs المطلوبة:

#### 1. GET `/stores/banner`
**الوصف**: جلب بانر صفحة المتاجر

**Method**: `GET`

**Headers**:
- `Accept-Language`: `string` - اللغة

**Parameters**: لا يوجد

**Response**:
```json
{
  "title": "string",
  "backgroundImage": "string (URL path)",
  "leftBadge": "string",
  "rightBadge": "string"
}
```

---

#### 2. GET `/stores`
**الوصف**: جلب قائمة جميع المتاجر

**Method**: `GET`

**Headers**:
- `Accept-Language`: `string` - اللغة

**Parameters**: لا يوجد

**Response**:
```json
[
  {
    "id": "number",
    "name": "string",
    "manager": "string",
    "address": "string",
    "phone": "string",
    "email": "string",
    "hours": "string",
    "lat": "number",
    "lng": "number",
    "mapUrl": "string (Google Maps embed URL)"
  }
]
```

---

## 📝 ملخص APIs حسب النوع

### Authentication APIs
- `POST /auth/login`
- `POST /auth/register`

### Product APIs
- `GET /products?sort={sort}&limit={limit}`
- `GET /products?onSale=true&limit={limit}`
- `GET /shop/products` (with filters and pagination)
- `GET /shop/products/{productId}`
- `GET /shop/products/{productId}/related`

### Category APIs
- `GET /categories?featured=true`
- `GET /shop/categories`
- `GET /shop/filters`

### Blog APIs
- `GET /blog/posts?page={page}`
- `GET /blog/posts/{postId}`
- `GET /blog/posts/{postId}/comments`
- `POST /blog/posts/{postId}/comments`

### Review APIs
- `GET /reviews?featured=true&limit={limit}`
- `GET /about/testimonials`

### About Us APIs
- `GET /about/team-members`
- `GET /about/testimonials`
- `GET /about/description`
- `GET /about/stats`

### Home Page APIs
- `GET /home/hero`
- `GET /home/about-us`
- `GET /home/featured-products`
- `GET /home/blog-section`
- `GET /home/latest-blog`
- `GET /home/why-choose-us`

### Contact APIs
- `GET /contact/hero`
- `GET /contact/map`
- `GET /contact/details`
- `POST /contact/send-message`

### Store APIs
- `GET /stores/banner`
- `GET /stores`

### Cart APIs
- `POST /cart/validate-coupon`
- `POST /cart/checkout`

---

## 📌 ملاحظات عامة

1. **Headers المشتركة**: جميع APIs تحتاج إلى `Accept-Language` header لدعم تعدد اللغات
2. **Pagination**: APIs التي تدعم التصفّح يجب أن تعيد هيكل `pagination` مع `currentPage`, `limit`, `totalItems`, `totalPages`
3. **Filtering**: عند تطبيق الفلاتر، يجب تطبيقها قبل Pagination
4. **Error Handling**: جميع APIs يجب أن تعيد error messages واضحة في حالة الفشل
5. **Authentication**: APIs التي تتطلب تسجيل دخول تحتاج إلى `Authorization: Bearer {token}` header

---

