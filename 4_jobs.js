// ملف 4: الوظائف (Jobs)
const jobsData = [
    {
        id: "job_001",
        type: "jobs",
        category: "هندسة برمجيات",
        name: "مطور واجهات أمامية Frontend",
        imgInner: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800",
        imgOuter: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400",
        isFeatured: true,
        tags: "#React #وظيفة #عن_بعد",
        deadline: "2026-12-31",
        description: "مطلوب مطور React خبرة سنتين للعمل عن بعد براتب مجزي.",
        status: "visible"
    },
    { id: "job_002", type: "jobs", category: "تسويق", name: "أخصائي تسويق رقمي", imgInner: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800", imgOuter: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400", isFeatured: false, tags: "#تسويق #SEO", deadline: "2026-10-15", description: "إدارة الحملات الإعلانية للشركة.", status: "soon" },
    { id: "job_003", type: "jobs", category: "تصميم", name: "مصمم UI/UX", imgInner: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800", imgOuter: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400", isFeatured: true, tags: "#Figma #تصميم", deadline: "2026-11-20", description: "تصميم تطبيقات الموبايل والويب.", status: "visible" },
    { id: "job_004", type: "jobs", category: "إدارة مشاريع", name: "مدير مشاريع رشيقة (Agile)", imgInner: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800", imgOuter: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400", isFeatured: false, tags: "#Agile #إدارة", deadline: "2026-09-30", description: "إدارة فريق التطوير التقني.", status: "hidden" },
    { id: "job_005", type: "jobs", category: "كتابة محتوى", name: "كاتب محتوى تقني", imgInner: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800", imgOuter: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400", isFeatured: false, tags: "#كتابة #مقال", deadline: "2026-11-05", description: "كتابة مقالات متوافقة مع SEO.", status: "visible" },
    { id: "job_006", type: "jobs", category: "هندسة بيانات", name: "محلل بيانات Data Analyst", imgInner: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800", imgOuter: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400", isFeatured: true, tags: "#SQL #بيانات", deadline: "2026-08-20", description: "تحليل بيانات الشركة باستخدام SQL و Python.", status: "visible" },
    { id: "job_007", type: "jobs", category: "مبيعات", name: "مندوب مبيعات دولي", imgInner: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800", imgOuter: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400", isFeatured: false, tags: "#B2B #مبيعات", deadline: "2026-10-01", description: "عقد صفقات B2B دولية.", status: "soon" },
    { id: "job_008", type: "jobs", category: "موارد بشرية", name: "مسؤول موارد بشرية HR", imgInner: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800", imgOuter: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400", isFeatured: false, tags: "#HR #توظيف", deadline: "2026-12-15", description: "توظيف الكفاءات وإدارة شؤون الموظفين.", status: "visible" },
    { id: "job_009", type: "jobs", category: "هندسة برمجيات", name: "مطور تطبيقات فلاتر Flutter", imgInner: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800", imgOuter: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400", isFeatured: true, tags: "#Flutter #Mobile", deadline: "2026-11-30", description: "برمجة تطبيقات الهاتف لمنصة iOS و Android.", status: "visible" },
    { id: "job_010", type: "jobs", category: "دعم فني", name: "أخصائي دعم تقني (IT Support)", imgInner: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800", imgOuter: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400", isFeatured: false, tags: "#IT #دعم", deadline: "2026-09-10", description: "حل مشاكل العملاء التقنية أونلاين.", status: "visible" }
];

/*
==========================================================
 ➕ لإضافة وظيفة جديدة: انسخ job_010 وغيّر الـ id لـ job_011 
 واستخدم الحالة: visible أو soon أو hidden
==========================================================
*/

function injectJobsData() {
    let existingCards = JSON.parse(localStorage.getItem('luxen_general_cards') || '[]');
    let addedCount = 0;
    jobsData.forEach(comp => {
        if (!existingCards.some(card => card.id === comp.id)) { existingCards.push(comp); addedCount++; }
    });
    if (addedCount > 0) {
        localStorage.setItem('luxen_general_cards', JSON.stringify(existingCards));
        if (typeof App !== 'undefined' && typeof App.renderOpportunities === 'function') { App.renderOpportunities(); App.updateHomeStats(); }
    }
}
document.addEventListener('DOMContentLoaded', injectJobsData);