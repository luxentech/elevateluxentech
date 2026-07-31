// ملف 3: التطوع (Volunteering)
const volunteeringData = [
    {
        id: "vol_001",
        type: "volunteering",
        category: "طبي",
        name: "تطوع أطباء بلا حدود",
        imgInner: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=800",
        imgOuter: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=400",
        isFeatured: true,
        tags: "#طبي #إغاثة",
        deadline: "2026-12-31",
        description: "فرصة للتطوع الطبي حول العالم للمتخصصين.",
        status: "visible"
    },
    { id: "vol_002", type: "volunteering", category: "بيئي", name: "حماية السلاحف البحرية", imgInner: "https://images.unsplash.com/photo-1554693190-38271dc6f316?w=800", imgOuter: "https://images.unsplash.com/photo-1554693190-38271dc6f316?w=400", isFeatured: false, tags: "#بيئة #بحر", deadline: "2026-11-15", description: "تطوع في المالديف لحماية الحياة البحرية.", status: "soon" },
    { id: "vol_003", type: "volunteering", category: "تعليم", name: "تعليم الإنجليزية للأطفال", imgInner: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=800", imgOuter: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=400", isFeatured: false, tags: "#تعليم #أطفال", deadline: "2026-10-10", description: "سافر وعلم الأطفال في نيبال.", status: "visible" },
    { id: "vol_004", type: "volunteering", category: "تنظيمي", name: "تنظيم كأس العالم", imgInner: "https://images.unsplash.com/photo-1554693190-38271dc6f316?w=800", imgOuter: "https://images.unsplash.com/photo-1554693190-38271dc6f316?w=400", isFeatured: true, tags: "#رياضة #تنظيم", deadline: "2026-06-01", description: "انضم لفريق المتطوعين في الأحداث الرياضية الكبرى.", status: "visible" },
    { id: "vol_005", type: "volunteering", category: "إغاثة", name: "تطوع مع الهلال الأحمر", imgInner: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=800", imgOuter: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=400", isFeatured: false, tags: "#إغاثة #إنسانية", deadline: "2026-12-01", description: "فرصة للتطوع الإغاثي المحلي والدولي.", status: "hidden" },
    { id: "vol_006", type: "volunteering", category: "ترجمة", name: "مترجم متطوع أونلاين", imgInner: "https://images.unsplash.com/photo-1554693190-38271dc6f316?w=800", imgOuter: "https://images.unsplash.com/photo-1554693190-38271dc6f316?w=400", isFeatured: false, tags: "#عن_بعد #ترجمة", deadline: "مفتوح دائماً", description: "تطوع عن بعد لترجمة المقالات.", status: "visible" },
    { id: "vol_007", type: "volunteering", category: "مجتمعي", name: "بناء المنازل للفقراء", imgInner: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=800", imgOuter: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=400", isFeatured: true, tags: "#مجتمع #بناء", deadline: "2026-05-20", description: "تطوع جسدي لمساعدة الفقراء في أفريقيا.", status: "visible" },
    { id: "vol_008", type: "volunteering", category: "دعم نفسي", name: "دعم اللاجئين", imgInner: "https://images.unsplash.com/photo-1554693190-38271dc6f316?w=800", imgOuter: "https://images.unsplash.com/photo-1554693190-38271dc6f316?w=400", isFeatured: false, tags: "#نفسي #لاجئين", deadline: "2026-08-30", description: "برنامج دعم ودمج اللاجئين.", status: "soon" },
    { id: "vol_009", type: "volunteering", category: "تكنولوجيا", name: "متطوع تقني للأمم المتحدة", imgInner: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=800", imgOuter: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=400", isFeatured: false, tags: "#UNV #تكنولوجيا", deadline: "2026-09-15", description: "تطوع مع الأمم المتحدة (UNV).", status: "visible" },
    { id: "vol_010", type: "volunteering", category: "تصوير", name: "مصور متطوع لجمعية خيرية", imgInner: "https://images.unsplash.com/photo-1554693190-38271dc6f316?w=800", imgOuter: "https://images.unsplash.com/photo-1554693190-38271dc6f316?w=400", isFeatured: true, tags: "#تصوير #خيري", deadline: "2026-11-10", description: "فرصة للمصورين لتغطية فعاليات خيرية.", status: "visible" }
];

/*
==========================================================
 ➕ لإضافة فرصة تطوع جديدة:
 انسخ سطر vol_010 وضع فاصلة في نهايته، ألصقه تحته
 وغير הـ id لـ vol_011 وعدل الحالة visible, soon, hidden
==========================================================
*/

function injectVolunteeringData() {
    let existingCards = JSON.parse(localStorage.getItem('luxen_general_cards') || '[]');
    let addedCount = 0;
    volunteeringData.forEach(comp => {
        if (!existingCards.some(card => card.id === comp.id)) { existingCards.push(comp); addedCount++; }
    });
    if (addedCount > 0) {
        localStorage.setItem('luxen_general_cards', JSON.stringify(existingCards));
        if (typeof App !== 'undefined' && typeof App.renderOpportunities === 'function') { App.renderOpportunities(); App.updateHomeStats(); }
    }
}
document.addEventListener('DOMContentLoaded', injectVolunteeringData);