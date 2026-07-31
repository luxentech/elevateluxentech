// ملف 1: المسابقات (Competitions)
const competitionsData = [
    // الفرصة 1 (مثال بالشكل الممتد)
    {
        id: "comp_001",
        type: "competitions",
        category: "تكنولوجيا وبرمجة",
        name: "مسابقة الابتكار التقني للشباب",
        imgInner: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800", // يقبل أي رابط درايف/جيت هاب مباشر
        imgOuter: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400",
        isFeatured: true,
        tags: "#برمجة #تكنولوجيا",
        deadline: "2026-12-31",
        description: "مسابقة رائعة للطلاب لتطوير حلول برمجية مبتكرة.",
        status: "visible" // ظاهرة
    },
    // الفرص من 2 إلى 10 (نفس الكود لكن مضغوط لسهولة القراءة)
    { id: "comp_002", type: "competitions", category: "ريادة أعمال", name: "تحدي الشركات 2026", imgInner: "https://images.unsplash.com/photo-1556761175-5973dc0f32d7?w=800", imgOuter: "https://images.unsplash.com/photo-1556761175-5973dc0f32d7?w=400", isFeatured: false, tags: "#ريادة_أعمال", deadline: "2026-10-15", description: "فرصة لعرض فكرتك على مستثمرين.", status: "soon" }, // قريباً
    { id: "comp_003", type: "competitions", category: "تصميم", name: "تحدي أفضل شعار", imgInner: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800", imgOuter: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400", isFeatured: true, tags: "#تصميم", deadline: "2026-11-20", description: "مسابقة لأفضل مصممي الجرافيك.", status: "hidden" }, // مخفية
    { id: "comp_004", type: "competitions", category: "AI", name: "هاكاثون الذكاء الاصطناعي", imgInner: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800", imgOuter: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400", isFeatured: false, tags: "#ذكاء_اصطناعي", deadline: "2026-09-30", description: "هاكاثون بناء نموذج ذكاء اصطناعي.", status: "visible" },
    { id: "comp_005", type: "competitions", category: "أدب", name: "القلم الذهبي للقصة", imgInner: "https://images.unsplash.com/photo-1455390582262-044cdead27d8?w=800", imgOuter: "https://images.unsplash.com/photo-1455390582262-044cdead27d8?w=400", isFeatured: false, tags: "#كتابة #أدب", deadline: "2026-11-05", description: "مسابقة القصة القصيرة للإبداع.", status: "visible" },
    { id: "comp_006", type: "competitions", category: "ألعاب", name: "بطولة الرياضات الإلكترونية", imgInner: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800", imgOuter: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400", isFeatured: true, tags: "#ألعاب #E-Sports", deadline: "2026-08-20", description: "بطولة كبرى للرياضات الإلكترونية.", status: "visible" },
    { id: "comp_007", type: "competitions", category: "تصوير", name: "مسابقة عدسة الطبيعة", imgInner: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800", imgOuter: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400", isFeatured: false, tags: "#تصوير #طبيعة", deadline: "2026-10-01", description: "شارك بأفضل صورة للطبيعة.", status: "soon" },
    { id: "comp_008", type: "competitions", category: "عمارة", name: "تحدي تصميم المدن", imgInner: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800", imgOuter: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400", isFeatured: false, tags: "#هندسة #عمارة", deadline: "2026-12-15", description: "صمم مدينة مستدامة.", status: "visible" },
    { id: "comp_009", type: "competitions", category: "بيئة", name: "جائزة الابتكار الأخضر", imgInner: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800", imgOuter: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400", isFeatured: false, tags: "#بيئة #استدامة", deadline: "2026-11-30", description: "للمشاريع الداعمة للبيئة.", status: "visible" },
    { id: "comp_010", type: "competitions", category: "روبوتات", name: "بطولة الروبوتات", imgInner: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800", imgOuter: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400", isFeatured: true, tags: "#روبوت #هندسة", deadline: "2026-09-10", description: "بطولة برمجة وتصميم الروبوتات.", status: "visible" }
];

/*
==========================================================
 ➕ كيف تضيف فرصة جديدة (رقم 11 وما بعدها)؟
 1. انسخ السطر الأخير بالكامل الخاص بالفرصة 10.
 2. ضع فاصلة (,) في نهاية السطر المنسوخ.
 3. ألصقه تحته، وقم بتغيير הـ id (مثلاً إلى comp_011).
 4. قم بتغيير باقي البيانات (الاسم، التصنيف، الوصف).
 5. حالة الظهور (status) إما: "visible", "soon", "hidden".
==========================================================
*/

function injectCompetitionsData() {
    let existingCards = JSON.parse(localStorage.getItem('luxen_general_cards') || '[]');
    let addedCount = 0;
    competitionsData.forEach(comp => {
        if (!existingCards.some(card => card.id === comp.id)) { existingCards.push(comp); addedCount++; }
    });
    if (addedCount > 0) {
        localStorage.setItem('luxen_general_cards', JSON.stringify(existingCards));
        if (typeof App !== 'undefined' && typeof App.renderOpportunities === 'function') { App.renderOpportunities(); App.updateHomeStats(); }
    }
}
document.addEventListener('DOMContentLoaded', injectCompetitionsData);