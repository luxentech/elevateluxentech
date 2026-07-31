// ملف 10: بيانات شركاء النجاح (Partners)
const partnersData = [
    {
        id: "part_001", 
        name: "Gateway Steps", 
        type: "مسار مهني", 
        // تم تغيير الرابط ليكون صورة داخل مجلد Partners
        logo: "Partners/gateway-steps.png",
        status: "visible" // ظاهرة وطبيعية
    },
    {
        id: "part_002", 
        name: "Tech Hub", 
        type: "تكنولوجيا وتطوير", 
        // تم تغيير الرابط ليكون صورة داخل مجلد Partners
        logo: "Partners/tech-hub.png",
        status: "soon" // سيظهر عليها طبقة (قريباً) للزوار
    },
    {
        id: "part_003", 
        name: "Future Leaders", 
        type: "تدريب قيادي", 
        // تم تغيير الرابط ليكون صورة داخل مجلد Partners
        logo: "Partners/future-leaders.jpg",
        status: "hidden" // مخفية تماماً عن الزوار (تظهر للمدير فقط)
    }
];

/*
==========================================================
 ➕ كيف تضيف شريك جديد؟
 1. انسخ الكود الخاص بآخر شريك من الأقواس { ... }
 2. ضع فاصلة (,) بعد القوس الأخير } للشريك السابق.
 3. ألصق الكود تحته، وغير הـ id واسم الشريك واللوجو والنوع.
 4. حدد حالة الظهور (status) سواء "visible" أو "soon" أو "hidden".
==========================================================
*/

function injectPartnersData() {
    let existingPartners = JSON.parse(localStorage.getItem('luxen_partners') || '[]');
    let addedCount = 0;
    
    partnersData.forEach(partner => {
        let exists = existingPartners.some(p => p.id === partner.id);
        if (!exists) {
            existingPartners.push(partner);
            addedCount++;
        } else {
            // تحديث حالة الشركاء الموجودين مسبقاً إذا قمت بتغييرها في الملف
            let index = existingPartners.findIndex(p => p.id === partner.id);
            existingPartners[index].status = partner.status;
            existingPartners[index].logo = partner.logo;
            existingPartners[index].name = partner.name;
            existingPartners[index].type = partner.type;
        }
    });
    
    localStorage.setItem('luxen_partners', JSON.stringify(existingPartners));
}

// دالة متطورة لعرض الشركاء تدعم خاصية (قريباً) و (مخفي)
document.addEventListener('DOMContentLoaded', () => {
    injectPartnersData();
    
    // تعديل الدالة الأساسية في الموقع لتقرأ الحالة (Status)
    if (typeof App !== 'undefined') {
        App.renderPartners = function() {
            const partners = JSON.parse(localStorage.getItem('luxen_partners') || '[]');
            const grid = document.getElementById('dynamic-partners-grid');
            if(!grid) return;

            const user = this.getUser();
            const isAdmin = user && user.isAdmin === true;

            // تصفية الشركاء المخفيين بحيث لا يراهم سوى المدير
            const visiblePartners = partners.filter(p => isAdmin || p.status !== 'hidden');

            if (visiblePartners.length === 0) {
                grid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; color: var(--text-muted); font-weight: bold; padding: 40px; background: var(--bg-card); border-radius: 20px; border: 1px solid var(--border-color);">لا يوجد شركاء مضافين حالياً.</div>';
                return;
            }

            grid.innerHTML = visiblePartners.map((p, index) => {
                let safeLogo = p.logo ? p.logo : 'images/logo.png';
                let isSoon = p.status === 'soon';
                
                // تجهيز طبقة (قريباً) للزوار العاديين
                let soonOverlay = isSoon && !isAdmin ? `<div class="soon-overlay" style="border-radius: 24px; position: absolute; inset: 0; display: flex; align-items: center; justify-content: center; z-index: 20; background: rgba(0, 0, 0, 0.2);"><span style="background: rgba(255, 255, 255, 0.15); backdrop-filter: blur(12px); border: 1px solid rgba(255, 255, 255, 0.3); color: #ffffff; padding: 8px 20px; border-radius: 12px; font-weight: 900;">قريباً</span></div>` : '';
                let cardStyle = isSoon && !isAdmin ? 'filter: blur(3px); opacity: 0.6; pointer-events: none;' : '';
                
                // تجهيز شارات (مخفي) و (قريباً) لتظهر للمدير ليعرف حالة الشريك
                let adminBadge = (p.status === 'hidden' && isAdmin) ? `<div style="position:absolute; top:10px; right:10px; background:rgba(239,68,68,0.9); color:#fff; padding:4px 10px; border-radius:8px; font-size:11px; font-weight:bold; z-index:30;">مخفي</div>` : '';
                let soonAdminBadge = (p.status === 'soon' && isAdmin) ? `<div style="position:absolute; top:10px; left:10px; background:rgba(245,158,11,0.9); color:#fff; padding:4px 10px; border-radius:8px; font-size:11px; font-weight:bold; z-index:30;">قريباً</div>` : '';

                return `
                <div class="partner-card fade-in visible stagger-${(index % 4) + 1}" style="position: relative; overflow: hidden;">
                  ${soonOverlay}
                  ${adminBadge}
                  ${soonAdminBadge}
                  <div class="partner-content" style="${cardStyle}">
                    <img src="${safeLogo}" class="partner-logo-circle" alt="${p.name}" style="object-fit: contain; background: #fff; padding: 5px;">
                    <h3 class="partner-name">${p.name}</h3>
                    <span class="partner-tag" data-en="${p.type || 'Partner'}" data-ar="${p.type || 'شريك'}">${p.type || 'شريك'}</span>
                  </div>
                </div>
                `;
            }).join('');
        };
        
        // رسم الشركاء فوراً عند تحميل الصفحة
        App.renderPartners();
    }
});
