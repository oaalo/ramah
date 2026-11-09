/* =========================================================================
   حماية المحتوى - الأكاديمية الذكية | الهلال الأحمر لمدينة الرمح
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

    /* 1) تعطيل قائمة الزر الأيمن (مع تركها تعمل داخل الحقول حتى يكتب الزائر) */
    document.addEventListener('contextmenu', function (e) {
        if (isEditable(e.target)) return;
        e.preventDefault();
    }, { passive: false });

    /* 2) تعطيل اختصارات النسخ والحفظ وأدوات المطور وعرض المصدر */
    document.addEventListener('keydown', function (e) {
        var key = (e.key || '').toLowerCase();

        if (e.key === 'F12') { e.preventDefault(); return; }

        var mod = e.ctrlKey || e.metaKey;
        if (!mod) return;

        /* Ctrl+Shift+I / J / C / K / E : أدوات المطور */
        if (e.shiftKey && ['i', 'j', 'c', 'k', 'e'].indexOf(key) !== -1) {
            e.preventDefault();
            return;
        }
        if (e.shiftKey) return;

        /* Ctrl+S حفظ الصفحة | Ctrl+U عرض المصدر | Ctrl+P طباعة */
        if (key === 's' || key === 'u' || key === 'p') {
            e.preventDefault();
            return;
        }
        /* Ctrl+A / C / X : تحديد ونسخ وقص النصوص (تُترك داخل الحقول) */
        if ((key === 'a' || key === 'c' || key === 'x') && !isEditable(e.target)) {
            e.preventDefault();
        }
    });

    /* 3) منع نسخ وقص وتحديد النصوص في الصفحة (تُترك داخل الحقول) */
    ['copy', 'cut', 'selectstart'].forEach(function (type) {
        document.addEventListener(type, function (e) {
            if (isEditable(e.target)) return;
            e.preventDefault();
        }, { passive: false });
    });

    /* 4) منع سحب/سحب-وإفلات الصور والشعار */
    document.addEventListener('dragstart', function (e) {
        var el = e.target;
        if (el && (el.tagName === 'IMG' || el.tagName === 'SVG')) e.preventDefault();
    }, { passive: false });

    /* 5) منع تحديد النص وسحب الصور عبر CSS + إخفاء الصفحة عند الطباعة */
    function injectStyle() {
        var style = document.createElement('style');
        style.textContent =
            'html, body { -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; -webkit-touch-callout: none; }' +
            'input, textarea, select, [contenteditable="true"] { -webkit-user-select: text; -moz-user-select: text; -ms-user-select: text; user-select: text; -webkit-touch-callout: default; }' +
            'img, svg, canvas { -webkit-user-drag: none; -khtml-user-drag: none; user-drag: none; -webkit-touch-callout: none; }' +
            '::selection { background: transparent; }' +
            'input::selection, textarea::selection { background: rgba(169, 97, 74, 0.45); }' +
            '@media print { html, body { display: none !important; } }';
        document.head.appendChild(style);
    }

    if (document.head) injectStyle();
    else document.addEventListener('DOMContentLoaded', injectStyle);
})();
