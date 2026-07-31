// ملف 5: الفعاليات (Events)
const eventsData = [
    {
        id: "evt_001",
        type: "events",
        category: "تكنولوجيا",
        name: "قمة الويب العالمية Web Summit",
        imgInner: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800",
        imgOuter: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400",
        isFeatured: true,
        tags: "#تقنية #مؤتمر",
        deadline: "2026-12-31",
        description: "أكبر مؤتمر تكنولوجي في العالم يجمع رواد الأعمال.",
        status: "visible"
    },
    { id: "evt_002", type: "events", category: "ريادة أعمال", name: "ملتقى بيبان للمنشآت", imgInner: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800", imgOuter: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400", isFeatured: false, tags: "#بيبان #السعودية", deadline: "2026-11-15", description: "ملتقى رواد الأعمال والشركات الناشئة.", status: "soon" },
    { id: "evt_003", type: "events", category: "طبي", name: "المؤتمر الدولي لطب الجراحة", imgInner: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800", imgOuter: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400", isFeatured: false, tags: "#طب #جراحة", deadline: "2026-10-20", description: "مؤتمر علمي لأحدث تقنيات الجراحة.", status: "visible" },
    { id: "evt_004", type: "events", category: "ثقافة", name: "معرض القاهرة الدولي للكتاب", imgInner: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800", imgOuter: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400", isFeatured: true, tags: "#كتب #ثقافة", deadline: "2026-01-25", description: "أكبر معرض للكتب في الشرق الأوسط.", status: "hidden" },
    { id: "evt_005", type: "events", category: "بيئة", name: "قمة المناخ COP 31", imgInner: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800", imgOuter: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400", isFeatured: true, tags: "#المناخ #بيئة", deadline: "2026-11-05", description: "القمة العالمية لمناقشة التغير المناخي.", status: "visible" },
    { id: "evt_006", type: "events", category: "تعليم", name: "معرض EduTech للتعليم الذكي", imgInner: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800", imgOuter: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400", isFeatured: false, tags: "#تعليم #تقنية", deadline: "2026-09-10", description: "مستقبل تكنولوجيا التعليم الذكي.", status: "soon" },
    { id: "evt_007", type: "events", category: "فنون", name: "مهرجان الأفلام القصيرة", imgInner: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800", imgOuter: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400", isFeatured: false, tags: "#سينما #فن", deadline: "2026-08-15", description: "عرض وتقييم صناع الأفلام المستقلين.", status: "visible" },
    { id: "evt_008", type: "events", category: "وظائف", name: "ملتقى التوظيف Job Fair 2026", imgInner: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800", imgOuter: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400", isFeatured: true, tags: "#توظيف #معرض", deadline: "2026-10-30", description: "فرص عمل ومقابلات فورية مع الشركات.", status: "visible" },
    { id: "evt_009", type: "events", category: "طاقة", name: "مؤتمر الطاقة المتجددة", imgInner: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800", imgOuter: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400", isFeatured: false, tags: "#طاقة_شمسية", deadline: "2026-07-20", description: "أحدث الحلول في مجال الطاقة المستدامة.", status: "visible" },
    { id: "evt_010", type: "events", category: "أمن سيبراني", name: "مؤتمر Black Hat", imgInner: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800", imgOuter: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400", isFeatured: true, tags: "#أمن #هاكر", deadline: "2026-11-25", description: "أهم مؤتمر لأمن المعلومات والهاكرز.", status: "visible" }
];

/*
==========================================================
 ➕ لإضافة فعالية جديدة: انسخ سطر evt_010 وعدل הـ id
 (نفس الطريقة لكل الملفات، ولا تنسى حالة status).
==========================================================
*/
function injectEventsData() {
    let existingCards = JSON.parse(localStorage.getItem('luxen_general_cards') || '[]');
    let addedCount = 0;
    eventsData.forEach(comp => {
        if (!existingCards.some(card => card.id === comp.id)) { existingCards.push(comp); addedCount++; }
    });
    if (addedCount > 0) {
        localStorage.setItem('luxen_general_cards', JSON.stringify(existingCards));
        if (typeof App !== 'undefined' && typeof App.renderOpportunities === 'function') { App.renderOpportunities(); App.updateHomeStats(); }
    }
}
document.addEventListener('DOMContentLoaded', injectEventsData);