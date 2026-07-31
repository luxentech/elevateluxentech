// ملف 2: المنح الدراسية (Scholarships)
const scholarshipsData = [
    {
        id: "schol_001",
        type: "scholarships",
        category: "بكالوريوس",
        name: "منحة جامعة أكسفورد",
        imgInner: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800",
        imgOuter: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400",
        isFeatured: true,
        tags: "#بريطانيا #منحة_كاملة",
        deadline: "2026-12-31",
        description: "منحة ممولة بالكامل للطلاب الدوليين.",
        status: "visible"
    },
    { id: "schol_002", type: "scholarships", category: "ماجستير", name: "منحة داد الألمانية", imgInner: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800", imgOuter: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=400", isFeatured: false, tags: "#ألمانيا #DAAD", deadline: "2026-11-15", description: "منحة للماجستير في ألمانيا.", status: "soon" },
    { id: "schol_003", type: "scholarships", category: "دكتوراه", name: "منحة فولبرايت", imgInner: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800", imgOuter: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400", isFeatured: true, tags: "#أمريكا #Fulbright", deadline: "2026-10-20", description: "أشهر منحة للدراسة في الولايات المتحدة.", status: "visible" },
    { id: "schol_004", type: "scholarships", category: "تبادل", name: "برنامج UGRAD", imgInner: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800", imgOuter: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=400", isFeatured: false, tags: "#تبادل_طلابي", deadline: "2026-12-01", description: "فصل دراسي في أمريكا.", status: "visible" },
    { id: "schol_005", type: "scholarships", category: "بكالوريوس", name: "المنحة التركية", imgInner: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800", imgOuter: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400", isFeatured: true, tags: "#تركيا #منحة", deadline: "2026-02-20", description: "الدراسة في تركيا ممولة بالكامل.", status: "hidden" },
    { id: "schol_006", type: "scholarships", category: "ماجستير", name: "منحة تشيفنينج", imgInner: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800", imgOuter: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=400", isFeatured: false, tags: "#Chevening #بريطانيا", deadline: "2026-11-05", description: "دراسة الماجستير في بريطانيا.", status: "soon" },
    { id: "schol_007", type: "scholarships", category: "زمالة", name: "زمالة مانديلا واشنطن", imgInner: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800", imgOuter: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400", isFeatured: false, tags: "#قيادة #أفريقيا", deadline: "2026-09-15", description: "للقادة الشباب في أفريقيا.", status: "visible" },
    { id: "schol_008", type: "scholarships", category: "بكالوريوس", name: "منحة حكومة الصين", imgInner: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800", imgOuter: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=400", isFeatured: false, tags: "#الصين #CSC", deadline: "2026-03-10", description: "المنحة الصينية الحكومية.", status: "visible" },
    { id: "schol_009", type: "scholarships", category: "بحث علمي", name: "منحة ايفل للتميز", imgInner: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800", imgOuter: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400", isFeatured: true, tags: "#فرنسا #بحث", deadline: "2026-01-08", description: "منحة فرنسا للمتميزين.", status: "visible" },
    { id: "schol_010", type: "scholarships", category: "دكتوراه", name: "منحة حكومة اليابان (MEXT)", imgInner: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=800", imgOuter: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=400", isFeatured: false, tags: "#اليابان #MEXT", deadline: "2026-05-15", description: "الدراسة في اليابان.", status: "visible" }
];

/*
==========================================================
 ➕ لإضافة منحة جديدة:
 1. انسخ السطر الخاص بـ schol_010.
 2. ضع فاصلة (,) في نهاية السطر والصقه بالأسفل.
 3. غير الـ id إلى schol_011 وعدل البيانات وحالة الظهور (status).
==========================================================
*/

function injectScholarshipsData() {
    let existingCards = JSON.parse(localStorage.getItem('luxen_general_cards') || '[]');
    let addedCount = 0;
    scholarshipsData.forEach(comp => {
        if (!existingCards.some(card => card.id === comp.id)) { existingCards.push(comp); addedCount++; }
    });
    if (addedCount > 0) {
        localStorage.setItem('luxen_general_cards', JSON.stringify(existingCards));
        if (typeof App !== 'undefined' && typeof App.renderOpportunities === 'function') { App.renderOpportunities(); App.updateHomeStats(); }
    }
}
document.addEventListener('DOMContentLoaded', injectScholarshipsData);