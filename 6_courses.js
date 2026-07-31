// ملف 6: الكورسات (Courses)
const coursesData = [
    {
        id: "crs_001",
        type: "courses",
        category: "برمجة",
        name: "كورس CS50 من هارفارد",
        imgInner: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800",
        imgOuter: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400",
        isFeatured: true,
        tags: "#برمجة #هارفارد #مجاني",
        deadline: "مفتوح دائماً",
        description: "مقدمة في علوم الحاسب من أقوى جامعات العالم.",
        status: "visible"
    },
    { id: "crs_002", type: "courses", category: "لغات", name: "تعلم الإنجليزية عبر كورسيرا", imgInner: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800", imgOuter: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400", isFeatured: false, tags: "#انجليزي #Coursera", deadline: "متاح الآن", description: "دورة معتمدة لتعلم المحادثة الإنجليزية.", status: "visible" },
    { id: "crs_003", type: "courses", category: "تصميم", name: "دورة مبادئ التصميم الجرافيكي", imgInner: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800", imgOuter: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400", isFeatured: true, tags: "#تصميم #فوتوشوب", deadline: "مفتوح دائماً", description: "أساسيات التصميم الجرافيكي للمبتدئين.", status: "soon" },
    { id: "crs_004", type: "courses", category: "أعمال", name: "شهادة جوجل في إدارة المشاريع", imgInner: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800", imgOuter: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400", isFeatured: true, tags: "#جوجل #إدارة", deadline: "مجاني لفترة محدودة", description: "شهادة احترافية في إدارة المشاريع من Google.", status: "visible" },
    { id: "crs_005", type: "courses", category: "تسويق", name: "أساسيات التسويق الرقمي (Google)", imgInner: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800", imgOuter: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400", isFeatured: false, tags: "#تسويق #SEO", deadline: "مفتوح دائماً", description: "دورة معتمدة مجانية من مهارات جوجل.", status: "hidden" },
    { id: "crs_006", type: "courses", category: "بيانات", name: "كورس تحليل البيانات بايثون", imgInner: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800", imgOuter: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400", isFeatured: false, tags: "#بايثون #بيانات", deadline: "متاح للجميع", description: "احترف تحليل البيانات مع Python.", status: "visible" },
    { id: "crs_007", type: "courses", category: "أمن سيبراني", name: "مقدمة في الأمن السيبراني", imgInner: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800", imgOuter: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400", isFeatured: false, tags: "#أمن #Cisco", deadline: "مفتوح", description: "دورة من أكاديمية سيسكو مجاناً.", status: "soon" },
    { id: "crs_008", type: "courses", category: "ذكاء اصطناعي", name: "كورس الذكاء الاصطناعي للجميع", imgInner: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800", imgOuter: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400", isFeatured: true, tags: "#AI #DeepLearning", deadline: "مفتوح دائماً", description: "من تقديم أندرو نج عبر كورسيرا.", status: "visible" },
    { id: "crs_009", type: "courses", category: "مهارات", name: "مهارات التواصل الفعال", imgInner: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800", imgOuter: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400", isFeatured: false, tags: "#مهارات_ناعمة", deadline: "2026-12-01", description: "طور مهاراتك في الإقناع والعرض.", status: "visible" },
    { id: "crs_010", type: "courses", category: "تمويل", name: "الأسواق المالية من جامعة ييل", imgInner: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800", imgOuter: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400", isFeatured: false, tags: "#اقتصاد #ييل", deadline: "مفتوح دائماً", description: "تعلم أساسيات الاقتصاد والأسواق المالية.", status: "visible" }
];

/* ➕ لإضافة كورس: انسخ آخر عنصر، ضع فاصلة، غير הـ id، وعدّل المحتوى أو הـ status. */
function injectCoursesData() {
    let existingCards = JSON.parse(localStorage.getItem('luxen_general_cards') || '[]');
    let addedCount = 0;
    coursesData.forEach(comp => {
        if (!existingCards.some(card => card.id === comp.id)) { existingCards.push(comp); addedCount++; }
    });
    if (addedCount > 0) {
        localStorage.setItem('luxen_general_cards', JSON.stringify(existingCards));
        if (typeof App !== 'undefined' && typeof App.renderOpportunities === 'function') { App.renderOpportunities(); App.updateHomeStats(); }
    }
}
document.addEventListener('DOMContentLoaded', injectCoursesData);