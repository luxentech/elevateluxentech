// ملف 8: السفر (Travel)
const travelData = [
    {
        id: "trv_001",
        type: "travel",
        category: "تبادل ثقافي",
        name: "برنامج التبادل الثقافي في أمريكا SUSI",
        imgInner: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=800",
        imgOuter: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=400",
        isFeatured: true,
        tags: "#أمريكا #SUSI #تبادل",
        deadline: "2026-12-31",
        description: "سافر أمريكا لمدة 6 أسابيع مجاناً بالكامل للطلاب القادة.",
        status: "visible"
    },
    { id: "trv_002", type: "travel", category: "معسكر", name: "معسكر الشباب في سويسرا", imgInner: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=800", imgOuter: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=400", isFeatured: false, tags: "#سويسرا #معسكر", deadline: "2026-10-15", description: "تدريب على التنمية المستدامة.", status: "soon" },
    { id: "trv_003", type: "travel", category: "تبادل ثقافي", name: "برنامج إيراسموس بلس Erasmus+", imgInner: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=800", imgOuter: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=400", isFeatured: true, tags: "#أوروبا #Erasmus", deadline: "2026-11-20", description: "تبادل طلابي قصير المدى في دول الاتحاد الأوروبي.", status: "visible" },
    { id: "trv_004", type: "travel", category: "مؤتمر شباب", name: "منتدى شباب العالم الممولة - كوريا", imgInner: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=800", imgOuter: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=400", isFeatured: false, tags: "#كوريا #مؤتمر", deadline: "2026-09-30", description: "حضور مجاني شامل الطيران والإقامة.", status: "visible" },
    { id: "trv_005", type: "travel", category: "بحث", name: "زمالة بحثية قصيرة في اليابان", imgInner: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=800", imgOuter: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=400", isFeatured: false, tags: "#اليابان #بحث", deadline: "2026-12-05", description: "إقامة لمدة 3 شهور للباحثين.", status: "hidden" },
    { id: "trv_006", type: "travel", category: "تدريب صيفي", name: "تدريب CERN في سويسرا", imgInner: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=800", imgOuter: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=400", isFeatured: true, tags: "#فيزياء #تدريب", deadline: "2026-01-30", description: "لطلاب الهندسة والعلوم.", status: "visible" },
    { id: "trv_007", type: "travel", category: "لغات", name: "رحلة لتعلم اللغة في إسبانيا", imgInner: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=800", imgOuter: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=400", isFeatured: false, tags: "#اسبانيا #لغة", deadline: "2026-08-15", description: "ممولة جزئياً.", status: "soon" },
    { id: "trv_008", type: "travel", category: "تبادل", name: "برنامج MEPI لرواد الأعمال", imgInner: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=800", imgOuter: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=400", isFeatured: true, tags: "#MEPI #رواد_أعمال", deadline: "2026-10-30", description: "سفر وتدريب لقادة المجتمع.", status: "visible" },
    { id: "trv_009", type: "travel", category: "فنون", name: "إقامة فنية ممولة في إيطاليا", imgInner: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=800", imgOuter: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=400", isFeatured: false, tags: "#فن #ايطاليا", deadline: "2026-11-20", description: "للفنانين التشكيليين والرسامين.", status: "visible" },
    { id: "trv_010", type: "travel", category: "تطوع دولي", name: "رحلة إغاثة في كينيا", imgInner: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=800", imgOuter: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?w=400", isFeatured: false, tags: "#أفريقيا #إغاثة", deadline: "2026-09-10", description: "سفر للتطوع في بناء المدارس.", status: "visible" }
];

/* ➕ لإضافة فرصة: انسخ آخر عنصر وضع فاصلة وغير הـ id والـ status */
function injectTravelData() {
    let existingCards = JSON.parse(localStorage.getItem('luxen_general_cards') || '[]');
    let addedCount = 0;
    travelData.forEach(comp => {
        if (!existingCards.some(card => card.id === comp.id)) { existingCards.push(comp); addedCount++; }
    });
    if (addedCount > 0) {
        localStorage.setItem('luxen_general_cards', JSON.stringify(existingCards));
        if (typeof App !== 'undefined' && typeof App.renderOpportunities === 'function') { App.renderOpportunities(); App.updateHomeStats(); }
    }
}
document.addEventListener('DOMContentLoaded', injectTravelData);