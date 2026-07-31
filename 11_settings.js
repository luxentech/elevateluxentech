// ملف 11: إعدادات الموقع العامة (الإحصائيات، الأقسام، والأشرطة)

const siteSettings = {
    // ==========================================
    // 1. إعدادات الإحصائيات (الأرقام في الصفحة الرئيسية)
    // ==========================================
    stats: {
        useCustomStats: false,    // اجعلها true لتفعيل الأرقام اللي تحت دي، أو false لو مش عايزها
        customUsersCount: 1,  // الرقم الوهمي للأعضاء (سيتم إضافته لعدد الأعضاء الحقيقيين اللي سجلوا)
        customOppsCount: 0     // الرقم الوهمي للفرص (سيتم إضافته لعدد الفرص الحقيقية اللي ضفتها)
    },

    // ==========================================
    // 2. إعدادات أقسام الفرص (التصنيفات)
    // الخيارات المتاحة: 
    // "visible" -> ظاهر وطبيعي
    // "soon"    -> يظهر عليه (قريباً) ولا يمكن النقر عليه
    // "hidden"  -> يختفي تماماً من الموقع
    // ==========================================
    categories: {
        "competitions": "visible", // المسابقات
        "scholarships": "visible", // المنح الدراسية
        "volunteering": "visible",    // التطوع (مثال: جعلناه قريباً)
        "jobs":         "visible", // الوظائف
        "events":       "soon", // الفعاليات
        "courses":      "soon",  // الكورسات (مثال: جعلناه مخفي)
        "workshops":    "visible", // ورش العمل
        "travel":       "soon", // السفر الممول
        "admission":    "soon"  // القبول الجامعي
    },

    // ==========================================
    // 3. إعدادات إخفاء/إظهار أجزاء الموقع (الأشرطة والأقسام)
    // الخيارات: true (يظهر) أو false (يختفي)
    // ==========================================
    sections: {
        showHeroBadge: true,      // الشريط العلوي الصغير في البداية (🚀 +50 فرصة...)
        showPartners: true,       // قسم شركاء النجاح بالكامل
        showTeam: true,           // قسم فريق العمل (العقول المدبرة) بالكامل
        showSupport: true         // قسم الدعم والمساعدة بالكامل
    }
};

/* =========================================================
   ⚠️ كود التشغيل (لا تقم بتعديل ما بالأسفل إلا إذا كنت مطوراً) 
========================================================= */

function applySiteSettings() {
    // 1. تطبيق حالة الأقسام
    localStorage.setItem('luxen_category_status', JSON.stringify(siteSettings.categories));
    if (typeof App !== 'undefined' && typeof App.applyCategoryStatuses === 'function') {
        App.applyCategoryStatuses();
    }

    // 2. تطبيق إعدادات الإحصائيات 
    if (siteSettings.stats.useCustomStats && typeof App !== 'undefined') {
        // نقوم بإعادة كتابة الدالة المسؤولة عن الإحصائيات لتأخذ أرقامنا
        App.updateHomeStats = function() {
            const users = JSON.parse(localStorage.getItem('luxen_all_users') || '[]');
            const cards = JSON.parse(localStorage.getItem('luxen_general_cards') || '[]');
            const statOpps = document.getElementById('stat-opps');
            const statUsers = document.getElementById('stat-users');
            
            let baseUsers = siteSettings.stats.customUsersCount;
            let baseOpps = siteSettings.stats.customOppsCount;
            
            if(statOpps) statOpps.textContent = '+' + (cards.length > 0 ? (cards.length + baseOpps) : baseOpps);
            if(statUsers) statUsers.textContent = '+' + (users.length > 0 ? (users.length + baseUsers) : baseUsers);
        };
        // تشغيل التحديث فوراً
        App.updateHomeStats();
    }

    // 3. تطبيق إخفاء/إظهار الأجزاء والأشرطة
    if (!siteSettings.sections.showHeroBadge) {
        let badge = document.querySelector('.hero-badge');
        if (badge) badge.style.display = 'none';
    }
    if (!siteSettings.sections.showPartners) {
        let partners = document.querySelector('.partners-section');
        if (partners) partners.style.display = 'none';
    }
    if (!siteSettings.sections.showTeam) {
        let team = document.querySelector('.team-section');
        if (team) team.style.display = 'none';
    }
    if (!siteSettings.sections.showSupport) {
        let support = document.querySelector('.support-section');
        if (support) support.style.display = 'none';
    }
}

// تنفيذ الإعدادات بمجرد تحميل الصفحة
document.addEventListener('DOMContentLoaded', applySiteSettings);