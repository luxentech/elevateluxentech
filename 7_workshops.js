// ملف 7: ورش العمل (Workshops)
const workshopsData = [
    {
        id: "wrk_001",
        type: "workshops",
        category: "أعمال",
        name: "ورشة عمل كتابة خطة العمل",
        imgInner: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800",
        imgOuter: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400",
        isFeatured: true,
        tags: "#بزنس #تخطيط",
        deadline: "2026-11-10",
        description: "تعلم كيف تكتب Business Plan قوية.",
        status: "visible"
    },
    { id: "wrk_002", type: "workshops", category: "سيرة ذاتية", name: "ورشة كتابة الـ CV الاحترافي", imgInner: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800", imgOuter: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400", isFeatured: false, tags: "#توظيف #CV", deadline: "2026-10-15", description: "كيف تتجاوز الـ ATS وتكتب سيرتك.", status: "soon" },
    { id: "wrk_003", type: "workshops", category: "تقنية", name: "ورشة الذكاء الاصطناعي التوليدي", imgInner: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800", imgOuter: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400", isFeatured: true, tags: "#ChatGPT #ورشة", deadline: "2026-09-20", description: "استخدام أدوات AI في عملك.", status: "visible" },
    { id: "wrk_004", type: "workshops", category: "تصوير", name: "ورشة تصوير المنتجات التجاري", imgInner: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800", imgOuter: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400", isFeatured: false, tags: "#تصوير #منتجات", deadline: "2026-12-05", description: "تدريب عملي على إضاءة وتصوير المنتجات.", status: "hidden" },
    { id: "wrk_005", type: "workshops", category: "لغات", name: "كيف تجتاز امتحان الايلتس IELTS", imgInner: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800", imgOuter: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400", isFeatured: false, tags: "#انجليزي #IELTS", deadline: "2026-10-30", description: "نصائح لاجتياز اختبار اللغة الإنجليزية.", status: "visible" },
    { id: "wrk_006", type: "workshops", category: "فنون", name: "ورشة الرسم بالألوان المائية", imgInner: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800", imgOuter: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400", isFeatured: false, tags: "#فن #رسم", deadline: "2026-11-01", description: "للمبتدئين في الرسم.", status: "visible" },
    { id: "wrk_007", type: "workshops", category: "استثمار", name: "أساسيات الاستثمار في البورصة", imgInner: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800", imgOuter: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400", isFeatured: true, tags: "#استثمار #بورصة", deadline: "2026-08-25", description: "كيف تبدأ الاستثمار بأمان.", status: "soon" },
    { id: "wrk_008", type: "workshops", category: "برمجة", name: "ورشة برمجة الألعاب باستخدام Unity", imgInner: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800", imgOuter: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400", isFeatured: false, tags: "#ألعاب #Unity", deadline: "2026-12-10", description: "اصنع لعبتك الأولى في يوم واحد.", status: "visible" },
    { id: "wrk_009", type: "workshops", category: "قانون", name: "العقود وحقوق الملكية للشركات الناشئة", imgInner: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800", imgOuter: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400", isFeatured: false, tags: "#قانون #بزنس", deadline: "2026-09-15", description: "احمِ فكرتك الناشئة قانونياً.", status: "visible" },
    { id: "wrk_010", type: "workshops", category: "طبخ", name: "ورشة إعداد القهوة المختصة (Barista)", imgInner: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800", imgOuter: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400", isFeatured: true, tags: "#قهوة #باريستا", deadline: "2026-11-20", description: "كيف تصنع قهوة احترافية.", status: "visible" }
];

/* ➕ لإضافة ورشة: انسخ آخر عنصر وضع فاصلة وغير הـ id والـ status */
function injectWorkshopsData() {
    let existingCards = JSON.parse(localStorage.getItem('luxen_general_cards') || '[]');
    let addedCount = 0;
    workshopsData.forEach(comp => {
        if (!existingCards.some(card => card.id === comp.id)) { existingCards.push(comp); addedCount++; }
    });
    if (addedCount > 0) {
        localStorage.setItem('luxen_general_cards', JSON.stringify(existingCards));
        if (typeof App !== 'undefined' && typeof App.renderOpportunities === 'function') { App.renderOpportunities(); App.updateHomeStats(); }
    }
}
document.addEventListener('DOMContentLoaded', injectWorkshopsData);