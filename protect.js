/* =========================================================================
   حماية المحتوى - الأكاديمية الذكية | الهلال الأحمر لمحافظة الرمح
   -------------------------------------------------------------------------
   ملاحظة مهمة: هذه إجراءات *ردع* فقط. أي موقع ثابت (HTML/JS) يُرسل ملفاته
   إلى متصفح الزائر، فلا يمكن منع من يعرف الطرق من رؤية الكود أو حفظ الصفحة.
   الحماية الحقيقية تحتاج تحققاً من جهة الخادم (تسجيل دخول + API).
   ========================================================================= */
(function () {
    'use strict';

    var isEditable = function (el) {
        return !!(el && el.closest && el.closest('input, textarea, select, [contenteditable="true"]'));
    };

    /* 1) تعطيل قائمة الزر الأيمن (مع تركها تعمل داخل الحقول حتى ينسخ الزائر) */
    document.addEventListener('contextmenu', function (e) {
        if (isEditable(e.target)) return;
        e.preventDefault();
    }, { passive: false });

    /* 2) تعطيل اختصارات أدوات المطور وحفظ الصفحة وعرض المصدر */
    document.addEventListener('keydown', function (e) {
        var key = (e.key || '').toLowerCase();

        if (e.key === 'F12') { e.preventDefault(); return; }

        var mod = e.ctrlKey || e.metaKey;
        if (!mod) return;

        /* Ctrl+Shift+I / J / C / K : أدوات المطور */
        if (e.shiftKey && ['i', 'j', 'c', 'k', 'e'].indexOf(key) !== -1) {
            e.preventDefault();
            return;
        }
        /* Ctrl+U : عرض المصدر | Ctrl+S : حفظ الصفحة */
        if (!e.shiftKey && (key === 'u' || key === 's')) {
            e.preventDefault();
        }
    });

    /* 3) منع سحب/سحب-وإفلات الصور والشعار */
    document.addEventListener('dragstart', function (e) {
        var el = e.target;
        if (el && (el.tagName === 'IMG' || el.tagName === 'SVG')) e.preventDefault();
    }, { passive: false });

    /* 4) منع تحديد/سحب الصور عبر CSS (لا يمنع تحديد النصوص حتى يبقى الموقع مريحاً) */
    function injectStyle() {
        var style = document.createElement('style');
        style.textContent =
            'img, svg, canvas { -webkit-user-drag: none; -khtml-user-drag: none; user-drag: none; }' +
            'img { -webkit-touch-callout: none; }';
        document.head.appendChild(style);
    }

    if (document.head) injectStyle();
    else document.addEventListener('DOMContentLoaded', injectStyle);
})();
