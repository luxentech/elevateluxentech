// ملف 9: القبول الجامعي (Admission)
const admissionData = [
    {
        id: "adm_001",
        type: "admission",
        category: "جامعات أمريكية",
        name: "التقديم المبكر لجامعة MIT",
        imgInner: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=800",
        imgOuter: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=400",
        isFeatured: true,
        tags: "#هندسة #MIT #بكالوريوس",
        deadline: "2026-11-01",
        description: "تفاصيل وشروط التقديم المبكر لمعهد ماساتشوستس.",
        status: "visible"
    },
    { id: "adm_002", type: "admission", category: "جامعات بريطانية", name: "التسجيل في كامبريدج", imgInner: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=800", imgOuter: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=400", isFeatured: false, tags: "#بريطانيا #قبول", deadline: "2026-10-15", description: "شروط القبول لتخصص الطب.", status: "soon" },
    { id: "adm_003", type: "admission", category: "جامعات ألمانية", name: "القبول في جامعة ميونخ (TUM)", imgInner: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=800", imgOuter: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=400", isFeatured: true, tags: "#ألمانيا #هندسة", deadline: "2026-07-15", description: "دراسة الهندسة باللغة الإنجليزية في ألمانيا.", status: "visible" },
    { id: "adm_004", type: "admission", category: "جامعات كندية", name: "تقديم جامعة تورنتو", imgInner: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=800", imgOuter: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=400", isFeatured: false, tags: "#كندا #بكالوريوس", deadline: "2026-01-15", description: "دليلك الشامل لمتطلبات القبول.", status: "visible" },
    { id: "adm_005", type: "admission", category: "دراسات عليا", name: "ماجستير جامعة ستانفورد", imgInner: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=800", imgOuter: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=400", isFeatured: false, tags: "#ماجستير #أمريكا", deadline: "2026-12-01", description: "متطلبات GRE والتقديم.", status: "hidden" },
    { id: "adm_006", type: "admission", category: "طب", name: "القبول في كليات الطب بتركيا", imgInner: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=800", imgOuter: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=400", isFeatured: true, tags: "#طب #تركيا", deadline: "2026-08-30", description: "قائمة بالجامعات التي لا تتطلب يوس (YOS).", status: "visible" },
    { id: "adm_007", type: "admission", category: "جامعات أسترالية", name: "منحة وقبول جامعة ملبورن", imgInner: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=800", imgOuter: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=400", isFeatured: false, tags: "#استراليا #قبول", deadline: "2026-10-31", description: "كيف تحصل على القبول المشروط.", status: "soon" },
    { id: "adm_008", type: "admission", category: "فنون وتصميم", name: "معهد برات للتصميم בניويورك", imgInner: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=800", imgOuter: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=400", isFeatured: false, tags: "#تصميم #فنون", deadline: "2026-02-15", description: "تجهيز البورتفوليو والقبول الفني.", status: "visible" },
    { id: "adm_009", type: "admission", category: "جامعات ماليزية", name: "التسجيل في جامعة مالايا", imgInner: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=800", imgOuter: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=400", isFeatured: false, tags: "#ماليزيا #تكلفة_اقتصادية", deadline: "2026-06-30", description: "دراسة عالية الجودة بتكاليف معقولة.", status: "visible" },
    { id: "adm_010", type: "admission", category: "جامعات إيطالية", name: "القبول في بوليتكنيكو دي ميلانو", imgInner: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=800", imgOuter: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=400", isFeatured: true, tags: "#ايطاليا #عمارة", deadline: "2026-05-10", description: "كيف تدرس العمارة والهندسة في إيطاليا.", status: "visible" }
];

/* ➕ لإضافة فرصة: انسخ آخر عنصر وضع فاصلة وغير הـ id والـ status */
function injectAdmissionData() {
    let existingCards = JSON.parse(localStorage.getItem('luxen_general_cards') || '[]');
    let addedCount = 0;
    admissionData.forEach(comp => {
        if (!existingCards.some(card => card.id === comp.id)) { existingCards.push(comp); addedCount++; }
    });
    if (addedCount > 0) {
        localStorage.setItem('luxen_general_cards', JSON.stringify(existingCards));
        if (typeof App !== 'undefined' && typeof App.renderOpportunities === 'function') { App.renderOpportunities(); App.updateHomeStats(); }
    }
}
document.addEventListener('DOMContentLoaded', injectAdmissionData);