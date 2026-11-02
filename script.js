// ==========================================
// 1. دیتابیس کتاب‌ها (در هر دو صفحه اصلی و محصولات استفاده می‌شود)
// ==========================================
const books = [
    {
        id: 1,
        title: "تاملکوت ",
        author: "سید عباس شریفیان آرانی",
        category: "معارف",
        price: "350.000",
        year: "۱۴۰۲",
        format: "رقعی",
        fipa: "",
        isbn: "978-964-448-221-3",
        img: "foter/mal.jpg",
        summary: "شاهنامه، حماسه‌ی ملی ایران و بزرگ‌ترین اثر منظوم ادبیات فارسی است که حکیم ابوالقاسم فردوسی، طی حدود سی سال سرود. این کتاب داستان‌های پهلوانی و تاریخی ایران‌زمین را از دوران کیومرث تا سقوط ساسانیان روایت می‌کند."
    },
    {
        id: 2,
        title: "اصول فقه نموداری",
        author: "حسین کماسی",
        category: "علوم اسلامی",
        price: "450.000",
        year: "1404",
        format: "رقعی",
        fipa: "",
        isbn: "978-964-362-554-0",
        img: "foter/osol.jpg",
        summary: "بوف کور، داستان مدرن و رؤیایی درباره‌ی یک نویسنده‌ی گوشه‌گیر است که در اتاقی تنگ زندگی می‌کند و در نوشتنِ تابلویی که همه چیز را در آن به رؤیا بدل می‌کند، گم می‌شود. از تأثیرگذارترین آثار ادبیات داستانی ایران به شمار می‌رود."
    },
    {
        id: 3,
        title: "اکرام سالمندان از منظر آموزه های اسلامی-",
        author: "عیسی بخشی",
        category: "اخلاف اسلامی",
        price: "161,000",
        year: "1402",
        format: "رقعی",
        fipa: "",
        isbn: "",
        img: "foter/ekram.jpg",
        summary: "داستان زنی نقاش که پس از مرگ همسرش، استاد ماکان، با پلیس گفت‌وگو می‌کند و پیچیدگی‌های روابط هنری و سیاسی را آشکار می‌سازد. اثری جاودانه در ادبیات داستانی ایران."
    },
    {
        id: 4,
        title: "امام حسین و یاران(جلد اول)",
        author: "علی فربانی سفیدان",
        category: "معارف",
        price: "500,000",
        year: "1403",
        format: "وزیری",
        fipa: "ف ۸۸۴۲-۷۵ک",
        isbn: "978-964-310-885-4",
        img: "foter/yaran.jpg",
        summary: "روایتی موازی از زندگی دو برادر و جدال‌های خانوادگی در فضای آشفته‌ی اراک. کتابی که با زبان شاعرانه و ساختاری نو، روایتگر اندوه و تنهایی انسان‌های تنهاست."
    },
    {
        id: 5,
        title: "اندیشه سیاسی استاد محمد تقی جعفری",
        author: "جواد نجاتی",
        category: "معارف",
        price: "118,000",
        year: "1403",
        format: "رقعی",
        fipa: "ف ۱۲۰۵۴-۶۸ک",
        isbn: "978-964-036-556-8",
        img: "foter/andeshesyasy.jpg",
        summary: "کلیدر، اثری سترگ در ده جلد درباره‌ی زندگی عشایر خراسان و فرهنگ، آداب و رنج‌های آن‌هاست. محمود دولت‌آبادی با روایتی پرجزئیات، اثری شاهکار خلق کرده که در ادبیات جهان نیز شناخته می‌شود."
    },
    {
        id: 6,
        title: "آبرومندی به مثابه کرامت اجتماعی تبیین شاخصها در آیات و روایات",
        author: "محمد فخیره",
        category: "اخلاق اسلامی",
        price: "300,000",
        year: "1404",
        format: "رقعی",
        fipa: "ف ۸۸۱۱-۵۰ک",
        isbn: "978-964-339-126-4",
        img: "foter/abero.jpg",
        summary: "داستان خلبانی که در صحرا با شازده‌ی کوچولوی سرزمین سیارک ب-۶۱۲ آشنا می‌شود. کتابی شاعرانه و پر از حکمت درباره‌ی عشق، دوستی، مسئولیت‌پذیری و کودکیِ درون هر انسان."
    },
    {
        id: 7,
        title: "بررسی اصول و روش های تربیتی سوره طلاق",
        author: "اعظم ستاری",
        category: "قرآن",
        price: "200,000",
        year: "1404",
        format: "رقعی",
        fipa: "ف ۳۳۰۲-۸۸ک",
        isbn: "978-964-459-887-5",
        img: "foter/talag.jpg",
        summary: "تاریخ بیهقی، شاهکار نثر فارسی و یکی از مهم‌ترین منابع تاریخی دوران غزنویان است. اثری که با زبانی هنرمندانه، وقایع سیاسی و اجتماعی قرن پنجم هجری را به تصویر می‌کشد."
    },
    {
        id: 8,
        title: "آداب و اخلاق تجارت",
        author: "سید قدرت الله حاتمی سناوه",
        category: "اخلاف اسلامی",
        price: "218,000",
        year: "1402",
        format: "رقعی",
        fipa: "ف ۹۹۲۲-۷۹ک",
        isbn: "978-964-362-881-7",
        img: "foter/adab.jpg",
        summary: "داستان گرگور سامسا، فروشنده‌ای که یک روز صبح از خواب بیدار می‌شود و خود را به حشره‌ای عظیم تبدیل‌شده می‌یابد. یکی از مشهورترین و تأثیرگذارترین آثار ادبیات جهان."
    },
    {
        id: 9,
        title: "بررسی و تحلیل بخل از دیدگاه قرآن ",
        author: "محسن جعفر پور",
        category: "اخلاق اسلامی",
        price: "250,000",
        year: "1404",
        format: "رقعی",
        fipa: "ف ۱۱۵۴۲-۹۵ک",
        isbn: "978-600-04-3382-9",
        img: "foter/tahlil.jpg",
        summary: "روایتی گرم و طنزآمیز از پیرمردی عبوس که زندگی‌اش با ورود همسایه‌های جدید دگرگون می‌شود. کتابی درباره‌ی عشق، از دست دادن و اینکه هرگز برای شروع دوباره دیر نیست."
    },
    {
        id: 10,
        title: "بررسی تاثیر مسائل انسان شناسی در مسائل کلامی ",
        author: "محمود صنیعی تهرانی",
        category: "کلام اسلام",
        price: "300,000",
        year: "1404",
        format: "رقعی",
        fipa: "ف ۶۶۸۸-۸۴ک",
        isbn: "978-964-441-337-8",
        img: "foter/emtanan.jpg",
        summary: "مجموعه‌ای از غزل‌ها و شعرهای عاشقانه و حکمت‌آمیز استاد شهریار، یکی از بزرگ‌ترین شاعران معاصر ایران که در آن‌ها عشق و معنا با نگاهی نو ترکیب شده است."
    },
    {
        id: 11,
        title: "خاتم الاوصیاء",
        author: "علی قربانی سفیدان",
        category: "زندگی نامه",
        price: "6000,000",
        year: "1404",
        format: "وزیری",
        fipa: "ف ۱۳۸۸۱-۹۶ک",
        isbn: "978-964-185-221-9",
        img: "foter/tam.jpg",
        summary: "سفر شش نسل از یک خانواده را از آفریقا تا آمریکا روایت می‌کند؛ کتابی درخشان درباره‌ی ریشه‌ها، هویت و مقاومت انسان در برابر ستم. اثری تأثیرگذار در تاریخ ادبیات معاصر."
    },
    {
        id: 12,
        title: "تبیین قاعده امتنان و نقش آن در قانونگذاری عرفی",
        author: "سید صادق موسوی",
        category: "فقه",
        price: "250,000",
        year: "1404",
        format: "رقعی",
        fipa: "ف ۷۷۱۲-۸۹ک",
        isbn: "978-964-362-444-6",
        img: "foter/emtanan.jpg",
        summary: "داستان تمثیلی حیوانات مزرعه‌ای که علیه صاحبشان قیام می‌کنند. کتابی کوتاه اما عمیق درباره‌ی قدرت، انقلاب و خیانت آرمان‌ها که همچنان اثری مرتبط و خواندنی است."
    },
    {
        id: 13,
        title: "چالشها و فرصتهای دینداری و دینگریزی در عصر علم و فناوری",
        author: "عیسی خالصی",
        category: "اخلاق اسلامی",
        price: "270,000",
        year: "1404",
        format: "رقعی",
        fipa: "ف ۷۷۱۲-۸۹ک",
        isbn: "978-964-362-444-6",
        img: "foter/fanavari.jpg",
        summary: "داستان تمثیلی حیوانات مزرعه‌ای که علیه صاحبشان قیام می‌کنند. کتابی کوتاه اما عمیق درباره‌ی قدرت، انقلاب و خیانت آرمان‌ها که همچنان اثری مرتبط و خواندنی است."
    },
    {
        id: 14,
        title: " پرواز دلیل میخواهد ",
        author: " علی گودرزی ",
        category: "ادبیات جهان",
        price: " 140.000",
        year: "1405",
        format: "رقعی",
        fipa: "ف ۷۷۱۲-۸۹ک",
        isbn: "978-964-362-444-6",
        img: "foter/par.jpg",
    },
    {
        id: 15,
        title: "جستارهایی پیرامون نفس و روح",
        author: " دکتر محمدعلی کریمی",
        category: "فلسه",
        price: " 1700.000",
        year: "1402",
        format: "رقعی",
        fipa: "ف ۷۷۱۲-۸۹ک",
        isbn: "978-964-362-444-6",
        img: "foter/nafs.jpg",
        summary: "داستان تمثیلی حیوانات مزرعه‌ای که علیه صاحبشان قیام می‌کنند. کتابی کوتاه اما عمیق درباره‌ی قدرت، انقلاب و خیانت آرمان‌ها که همچنان اثری مرتبط و خواندنی است."
    },
    {
        id: 16,
        title: "حقوق خانواده با نگاه به آیه 34 سوره مبارکه نساء ",
        author: " سید مجتبی موسوی ",
        category: "فقه",
        price: "218.000 ",
        year: "1402",
        format: "رقعی",
        fipa: "ف ۷۷۱۲-۸۹ک",
        isbn: "978-964-362-444-6",
        img: "foter/nsa.jpg",
        summary: "داستان تمثیلی حیوانات مزرعه‌ای که علیه صاحبشان قیام می‌کنند. کتابی کوتاه اما عمیق درباره‌ی قدرت، انقلاب و خیانت آرمان‌ها که همچنان اثری مرتبط و خواندنی است."
    },
    {
        id: 17,
        title: " چرایی بلاها و مصائب در نظام آفرینش-2",
        author: " جابر امامفلی پور ارچی ",
        category: "کلام اسلامی",
        price: "140.000",
        year: "1403",
        format: "رقعی",
        fipa: "ف ۷۷۱۲-۸۹ک",
        isbn: "978-964-362-444-6",
        img: "foter/bala.jpg",
        summary: "داستان تمثیلی حیوانات مزرعه‌ای که علیه صاحبشان قیام می‌کنند. کتابی کوتاه اما عمیق درباره‌ی قدرت، انقلاب و خیانت آرمان‌ها که همچنان اثری مرتبط و خواندنی است."
    },
    {
        id: 18,
        title: " دلادت های قفهی و کلامی حروف جر و ادوات شرط در زبان عربی",
        author: " سید جعفر ابوسبع",
        category: "ادبیات عرب",
        price: "218.000",
        year: "1405",
        format: "رقعی",
        fipa: "ف ۷۷۱۲-۸۹ک",
        isbn: "978-964-362-444-6",
        img: "foter/gar.jpg",
        summary: "داستان تمثیلی حیوانات مزرعه‌ای که علیه صاحبشان قیام می‌کنند. کتابی کوتاه اما عمیق درباره‌ی قدرت، انقلاب و خیانت آرمان‌ها که همچنان اثری مرتبط و خواندنی است."
    },
    {
        id: 19,
        title: " رویکرد اباضیه در تفسیر آیات امامت و ولایت",
        author: " علی نجاتی زاده ",
        category: "کلام اسلامی",
        price: "150.000",
        year: "1404",
        format: "رقعی",
        fipa: "ف ۷۷۱۲-۸۹ک",
        isbn: "978-964-362-444-6",
        img: "foter/abyaz.jpg",
        summary: "داستان تمثیلی حیوانات مزرعه‌ای که علیه صاحبشان قیام می‌کنند. کتابی کوتاه اما عمیق درباره‌ی قدرت، انقلاب و خیانت آرمان‌ها که همچنان اثری مرتبط و خواندنی است."
    },
    {
        id: 20,
        title: "راهکار های قرآنی مصونیت مسلمانان در برابر کفار",
        author: " یوسف الله دادی",
        category: "سیاسی",
        price: "208.000",
        year: "1402",
        format: "رقعی",
        fipa: "ف ۷۷۱۲-۸۹ک",
        isbn: "978-964-362-444-6",
        img: "foter/kofr.jpg",
        summary: "داستان تمثیلی حیوانات مزرعه‌ای که علیه صاحبشان قیام می‌کنند. کتابی کوتاه اما عمیق درباره‌ی قدرت، انقلاب و خیانت آرمان‌ها که همچنان اثری مرتبط و خواندنی است."
    },
    {
        id: 21,
        title: "ریحانة القرآن",
        author: "غلامرضا دروندپور",
        category: "قران",
        price: "300.000",
        year: "1404",
        format: "وزیری",
        fipa: "ف ۷۷۱۲-۸۹ک",
        isbn: "978-964-362-444-6",
        img: "foter/reh.jpg",
        summary: "داستان تمثیلی حیوانات مزرعه‌ای که علیه صاحبشان قیام می‌کنند. کتابی کوتاه اما عمیق درباره‌ی قدرت، انقلاب و خیانت آرمان‌ها که همچنان اثری مرتبط و خواندنی است."
    },
    {
        id: 22,
        title: "زبان سرخ سرسبز(غیبت)",
        author: "سعید جلیلوند ",
        category: "اخلاق اسلامی",
        price: "140.000",
        year: "1404",
        format: "رقعی",
        fipa: "ف ۷۷۱۲-۸۹ک",
        isbn: "978-964-362-444-6",
        img: "foter/zaban.jpg",
        summary: "داستان تمثیلی حیوانات مزرعه‌ای که علیه صاحبشان قیام می‌کنند. کتابی کوتاه اما عمیق درباره‌ی قدرت، انقلاب و خیانت آرمان‌ها که همچنان اثری مرتبط و خواندنی است."
    },
    {
        id: 23,
        title: "شرایط اختصاصی جرم در عملیات  های ورزشی",
        author: " مهدی ملکی",
        category: "حقوق",
        price: "150.000",
        year: "1404",
        format: "رقعی",
        fipa: "ف ۷۷۱۲-۸۹ک",
        isbn: "978-964-362-444-6",
        img: "foter/varzash.jpg",
        summary: "داستان تمثیلی حیوانات مزرعه‌ای که علیه صاحبشان قیام می‌کنند. کتابی کوتاه اما عمیق درباره‌ی قدرت، انقلاب و خیانت آرمان‌ها که همچنان اثری مرتبط و خواندنی است."
    },
    {
        id: 24,
        title: "زن و مسئولیت معرفتی",
        author: "فهیمه مستحسن",
        category: "اخلاف اسلامی",
        price: "250.000",
        year: "1404",
        format: "وزیری",
        fipa: "ف ۷۷۱۲-۸۹ک",
        isbn: "978-964-362-444-6",
        img: "foter/zan.jpg",
        summary: "داستان تمثیلی حیوانات مزرعه‌ای که علیه صاحبشان قیام می‌کنند. کتابی کوتاه اما عمیق درباره‌ی قدرت، انقلاب و خیانت آرمان‌ها که همچنان اثری مرتبط و خواندنی است."
    },
    {
        id: 25,
        title: "صدق قضایای شرطی",
        author: "زهرامحرمی شاه بکندی",
        category: "منطق",
        price: "150.000",
        year: "1404",
        format: "رقعی",
        fipa: "ف ۷۷۱۲-۸۹ک",
        isbn: "978-964-362-444-6",
        img: "foter/sedg.jpg",
        summary: "داستان تمثیلی حیوانات مزرعه‌ای که علیه صاحبشان قیام می‌کنند. کتابی کوتاه اما عمیق درباره‌ی قدرت، انقلاب و خیانت آرمان‌ها که همچنان اثری مرتبط و خواندنی است."
    },
    {
        id: 26,
        title: "فرزند همراه",
        author: "علیرضا سراجی",
        category: "علوم تربیتی",
        price: "270.000",
        year: "1405",
        format: "رقعی",
        fipa: "ف ۷۷۱۲-۸۹ک",
        isbn: "978-964-362-444-6",
        img: "foter/farzand.jpg",
        summary: "داستان تمثیلی حیوانات مزرعه‌ای که علیه صاحبشان قیام می‌کنند. کتابی کوتاه اما عمیق درباره‌ی قدرت، انقلاب و خیانت آرمان‌ها که همچنان اثری مرتبط و خواندنی است."
    },
    {
        id: 27,
        title: "عناصر شماری در مفهوم شناسی فقهی (با تطبیق برموضوع غیبت)",
        author: "محمدجعفری",
        category: "فقه",
        price: "350.000",
        year: "1404",
        format: "رقعی",
        fipa: "ف ۷۷۱۲-۸۹ک",
        isbn: "978-964-362-444-6",
        img: "foter/gebat.jpg",
        summary: "داستان تمثیلی حیوانات مزرعه‌ای که علیه صاحبشان قیام می‌کنند. کتابی کوتاه اما عمیق درباره‌ی قدرت، انقلاب و خیانت آرمان‌ها که همچنان اثری مرتبط و خواندنی است."
    },
    {
        id: 28,
        title: "فقه و مقاومت",
        author: "سید عباس  شریفیان آرانی",
        category: "قرآن",
        price: "270.000",
        year: "1404",
        format: "رقعی",
        fipa: "ف ۷۷۱۲-۸۹ک",
        isbn: "978-964-362-444-6",
        img: "foter/mogavem.jpg",
        summary: "داستان تمثیلی حیوانات مزرعه‌ای که علیه صاحبشان قیام می‌کنند. کتابی کوتاه اما عمیق درباره‌ی قدرت، انقلاب و خیانت آرمان‌ها که همچنان اثری مرتبط و خواندنی است."
    },
    {
        id: 29,
        title: "نقش فرقه اسماعیلیه بر فرهنگ و تمدن اسلامی",
        author: "علی تقوایی فر / زهرا همتی امیر ابادی",
        category: "کلام اسلامی",
        price: "250.000",
        year: "1404",
        format: "رقعی",
        fipa: "ف ۷۷۱۲-۸۹ک",
        isbn: "978-964-362-444-6",
        img: "foter/es.jpg",
        summary: "داستان تمثیلی حیوانات مزرعه‌ای که علیه صاحبشان قیام می‌کنند. کتابی کوتاه اما عمیق درباره‌ی قدرت، انقلاب و خیانت آرمان‌ها که همچنان اثری مرتبط و خواندنی است."
    },
    {
        id: 30,
        title: "قضا و قدر در تفسیر المیزان",
        author: "رضوان رحمتی پور",
        category: "قرآن",
        price: "190.000",
        year: "1403",
        format: "رقعی",
        fipa: "ف ۷۷۱۲-۸۹ک",
        isbn: "978-964-362-444-6",
        img: "foter/miz.jpg",
        summary: "داستان تمثیلی حیوانات مزرعه‌ای که علیه صاحبشان قیام می‌کنند. کتابی کوتاه اما عمیق درباره‌ی قدرت، انقلاب و خیانت آرمان‌ها که همچنان اثری مرتبط و خواندنی است."
    },
    {
        id: 31,
        title: "نسیم ثقلةین",
        author: "امیر کارگر",
        category: "قرآن",
        price: "120.000",
        year: "1505",
        format: "رقعی",
        fipa: "ف ۷۷۱۲-۸۹ک",
        isbn: "978-964-362-444-6",
        img: "foter/nasi.jpg",
        summary: "داستان تمثیلی حیوانات مزرعه‌ای که علیه صاحبشان قیام می‌کنند. کتابی کوتاه اما عمیق درباره‌ی قدرت، انقلاب و خیانت آرمان‌ها که همچنان اثری مرتبط و خواندنی است."
    },
    {
        id: 32,
        title: "مشروعیت وقف ارزش مالی اشیاء با رویکرد فقه حکومتی",
        author: "مصی عباس زاده گرجندی",
        category: "فقه",
        price: "250.000",
        year: "1403",
        format: "رقعی",
        fipa: "ف ۷۷۱۲-۸۹ک",
        isbn: "978-964-362-444-6",
        img: "foter/mati.jpg",
        summary: "داستان تمثیلی حیوانات مزرعه‌ای که علیه صاحبشان قیام می‌کنند. کتابی کوتاه اما عمیق درباره‌ی قدرت، انقلاب و خیانت آرمان‌ها که همچنان اثری مرتبط و خواندنی است."
    },
    {
        id: 33,
        title: "نیابت در حضانت",
        author: "محمئ اقاجانی",
        category: "فقه",
        price: "218.000",
        year: "1403",
        format: "رقعی",
        fipa: "ف ۷۷۱۲-۸۹ک",
        isbn: "978-964-362-444-6",
        img: "foter/nyab.jpg",
        summary: "داستان تمثیلی حیوانات مزرعه‌ای که علیه صاحبشان قیام می‌کنند. کتابی کوتاه اما عمیق درباره‌ی قدرت، انقلاب و خیانت آرمان‌ها که همچنان اثری مرتبط و خواندنی است."
    },
    {
        id: 34,
        title: "نقش عقل در اعتبارسنجی روایات",
        author: "سید مهدی حسینی راد/سیده پری موسوی نسب",
        category: "علوم اسلامی",
        price: "300.000",
        year: "1404",
        format: "رقعی",
        fipa: "ف ۷۷۱۲-۸۹ک",
        isbn: "978-964-362-444-6",
        img: "foter/sang.jpg",
        summary: "داستان تمثیلی حیوانات مزرعه‌ای که علیه صاحبشان قیام می‌کنند. کتابی کوتاه اما عمیق درباره‌ی قدرت، انقلاب و خیانت آرمان‌ها که همچنان اثری مرتبط و خواندنی است."
    },
    {
        id: 35,
        title: "واکاوی فقهی اغتشاش علیه حکومت اسلامی",
        author: "محسن جعفر پور",
        category: "فقه",
        price: "250.000",
        year: "1404",
        format: "رقعی",
        fipa: "ف ۷۷۱۲-۸۹ک",
        isbn: "978-964-362-444-6",
        img: "foter/vakavi.jpg",
        summary: "داستان تمثیلی حیوانات مزرعه‌ای که علیه صاحبشان قیام می‌کنند. کتابی کوتاه اما عمیق درباره‌ی قدرت، انقلاب و خیانت آرمان‌ها که همچنان اثری مرتبط و خواندنی است."
    
    },
];


// ==========================================
// 2. سیستم مودال نمایش جزئیات کتاب
// ==========================================
const modalOverlay = document.getElementById('bookModal');
const modalBodyContent = document.getElementById('modalBodyContent');
const closeModalBtn = document.getElementById('modalCloseBtn');

function openBookModal(bookId) {
    const book = books.find(b => b.id === bookId);
    if (!book) return;

    modalBodyContent.innerHTML = `
        <div class="modal-cover-wrap">
            <img src="${book.img}" alt="${book.title}" />
        </div>
        <div class="modal-info">
            <h2>${book.title}</h2>
            <span class="modal-author-tag">✍️ ${book.author}</span>
            <div class="specs-grid">
                <div class="spec-item">
                    <span class="spec-title">📖 نام کتاب</span>
                    <span class="spec-val">${book.title}</span>
                </div>
                <div class="spec-item">
                    <span class="spec-title">✍️ نویسنده</span>
                    <span class="spec-val">${book.author}</span>
                </div>
                <div class="spec-item">
                    <span class="spec-title">📐 قطع</span>
                    <span class="spec-val">${book.format}</span>
                </div>
                <div class="spec-item">
                    <span class="spec-title">📅 سال چاپ</span>
                    <span class="spec-val">${book.year}</span>
                </div>
                <div class="spec-item">
                    <span class="spec-title">🔢 شابک (ISBN)</span>
                    <span class="spec-val" style="direction:ltr;">${book.isbn}</span>
                </div>
                <div class="spec-item">
                    <span class="spec-title">🏷️ فهرست‌نویسی (فیپا)</span>
                    <span class="spec-val">${book.fipa}</span>
                </div>
            </div>
            <div class="modal-summary">
                <h4>📝 خلاصه کتاب</h4>
                <p>${book.summary}</p>
            </div>
            <div class="modal-action-bar">
                <div>
                    <span class="spec-title">قیمت</span><br/>
                    <span class="modal-price-val">${book.price} <small style="font-size:0.85rem;color:var(--text-muted);">تومان</small></span>
                </div>
                <button class="btn-primary" onclick="addToCart('${book.title}')">🛒 افزودن به سبد خرید</button>
            </div>
        </div>
    `;

    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
}

if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);

if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) closeModal();
    });
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
});

// ==========================================
// 3. افزودن به سبد خرید (نمایش توست)
// ==========================================
function addToCart(bookTitle) {
    showToast(`✅ «${bookTitle}» به سبد خرید اضافه شد!`);
    closeModal();
}

function showToast(message) {
    let toast = document.getElementById('appToast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'appToast';
        toast.className = 'toast';
        document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3200);
}

// ==========================================
// 4. منوی همبرگری موبایل
// ==========================================
const hamburgerBtn = document.getElementById('hamburgerBtn');
const navLinksEl = document.getElementById('navLinks');

if (hamburgerBtn && navLinksEl) {
    hamburgerBtn.addEventListener('click', () => {
        navLinksEl.classList.toggle('active');
    });
}

// ==========================================
// 5. جستجو و فیلتر صفحه محصولات
// ==========================================
const searchInput = document.getElementById('searchInput');
const filterBtns = document.querySelectorAll('.filter-btn');
const booksGrid = document.getElementById('booksGrid');
const resultsCount = document.getElementById('resultsCount');
const emptyState = document.getElementById('emptyState');

let activeCategory = 'همه';

function renderBooks() {
    if (!booksGrid) return;
    const searchTerm = searchInput ? searchInput.value.trim() : '';
    const filtered = books.filter(book => {
        const matchesCategory = activeCategory === 'همه' || book.category === activeCategory;
        const matchesSearch = !searchTerm ||
            book.title.includes(searchTerm) ||
            book.author.includes(searchTerm) ||
            book.category.includes(searchTerm);
        return matchesCategory && matchesSearch;
    });

    booksGrid.innerHTML = filtered.map(book => `
        <article class="book-card" onclick="openBookModal(${book.id})">
            <span class="book-badge">${book.category}</span>
            <div class="book-cover">
                <img src="${book.img}" alt="${book.title}" loading="lazy" />
            </div>
            <h3 class="book-title">${book.title}</h3>
            <p class="book-author">نویسنده: ${book.author}</p>
            <div class="book-footer">
                <span class="book-price">${book.price} <small>تومان</small></span>
                <span class="btn-view-details">جزئیات ←</span>
            </div>
        </article>
    `).join('');

    if (resultsCount) {
        resultsCount.textContent = filtered.length;
    }
    if (emptyState) {
        emptyState.style.display = filtered.length === 0 ? 'block' : 'none';
    }
}

if (searchInput) {
    searchInput.addEventListener('input', renderBooks);
}

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeCategory = btn.dataset.category;
        renderBooks();
    });
});

// ==========================================
// 6. فرم تماس با ما (اعتبارسنجی + توست)
// ==========================================
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('nameInput').value.trim();
        const email = document.getElementById('emailInput').value.trim();
        const message = document.getElementById('messageInput').value.trim();

        if (!name) {
            showToast('⚠️ لطفاً نام خود را وارد کنید.');
            return;
        }
        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            showToast('⚠️ لطفاً یک ایمیل معتبر وارد کنید.');
            return;
        }
        if (!message) {
            showToast('⚠️ لطفاً پیام خود را بنویسید.');
            return;
        }

        showToast('✅ پیام شما با موفقیت ارسال شد. به‌زودی پاسخ می‌دهیم!');
        contactForm.reset();
    });
}

// ==========================================
// 7. فرم خبرنامه در فوتر
// ==========================================
const newsletterForm = document.getElementById('newsletterForm');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const emailInput = newsletterForm.querySelector('input[type="email"]');
        if (!emailInput.value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim())) {
            showToast('⚠️ لطفاً یک ایمیل معتبر وارد کنید.');
            return;
        }
        showToast('🎉 عضویت شما در خبرنامه با موفقیت انجام شد!');
        emailInput.value = '';
    });
}

// اجرای اولیه لیست کتاب‌ها در صفحه محصولات
if (booksGrid) renderBooks();

// رندر کارت پرفروش‌های صفحه اصلی (اگر وجود داشت)
const bestsellerGrid = document.getElementById('bestsellerGrid');
if (bestsellerGrid) {
    const featuredBooks = books.slice(0, 4);
    bestsellerGrid.innerHTML = featuredBooks.map(book => `
        <article class="book-card" onclick="openBookModal(${book.id})">
            <span class="book-badge">پرفروش</span>
            <div class="book-cover">
                <img src="${book.img}" alt="${book.title}" loading="lazy" />
            </div>
            <h3 class="book-title">${book.title}</h3>
            <p class="book-author">نویسنده: ${book.author}</p>
            <div class="book-footer">
                <span class="book-price">${book.price} <small>تومان</small></span>
                <span class="btn-view-details">جزئیات ←</span>
            </div>
        </article>
    `).join('');
}



