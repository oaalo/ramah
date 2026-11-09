/* =========================================================
   زر التواصل العائم — الأكاديمية الذكية
   يظهر زر ثابت أسفل الصفحة يفتح حساب الإنستقرام @reua
   ========================================================= */
(function () {
    'use strict';

    var URL_IG = 'https://www.instagram.com/reua';
    var HIDE_KEY = 'contactFabHidden';

    var CSS = [
        '#contactFab{position:fixed;bottom:18px;inset-inline-start:18px;z-index:9500;',
        'display:flex;align-items:center;gap:6px;direction:rtl;font-family:inherit;}',
        '#contactFab a{display:inline-flex;align-items:center;gap:8px;text-decoration:none;',
        'padding:10px 18px 10px 14px;border-radius:999px;color:#fff;font-weight:800;font-size:0.92rem;',
        'background:linear-gradient(135deg,#f9ce34 0%,#ee2a7b 55%,#6228d7 100%);',
        'box-shadow:0 8px 24px rgba(238,42,123,0.35);border:1px solid rgba(255,255,255,0.18);',
        'transition:transform .25s ease,box-shadow .25s ease,filter .25s ease;}',
        '#contactFab a:hover{transform:translateY(-2px);filter:brightness(1.08);',
        'box-shadow:0 12px 28px rgba(238,42,123,0.48);}',
        '#contactFab a i{font-size:1.15rem;}',
        '#contactFab .cf-close{width:22px;height:22px;border-radius:50%;border:none;cursor:pointer;',
        'background:rgba(15,23,42,0.65);color:#cbd5e1;font-size:0.7rem;line-height:1;display:grid;',
        'place-items:center;backdrop-filter:blur(4px);}',
        '#contactFab .cf-close:hover{color:#fff;background:rgba(15,23,42,0.9);}',
        '@media (max-width:640px){',
        '#contactFab{bottom:14px;inset-inline-start:14px;}',
        '#contactFab a{padding:12px;border-radius:50%;}',
        '#contactFab a span{display:none;}',
        '}'
    ].join('');

    function ready(fn) {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', fn, { once: true });
        } else {
            fn();
        }
    }

    function inject() {
        if (document.getElementById('contactFab')) return;

        try {
            if (sessionStorage.getItem(HIDE_KEY) === '1') return;
        } catch (e) { /* التخزين قد يكون معطلاً */ }

        var style = document.createElement('style');
        style.textContent = CSS;
        document.head.appendChild(style);

        var box = document.createElement('div');
        box.id = 'contactFab';

        var link = document.createElement('a');
        link.href = URL_IG;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.title = 'تواصل عبر الإنستقرام @reua';
        link.setAttribute('aria-label', 'تواصل عبر الإنستقرام @reua');

        var icon = document.createElement('i');
        icon.className = 'fab fa-instagram';
        icon.setAttribute('aria-hidden', 'true');

        var label = document.createElement('span');
        label.textContent = 'تواصل';

        link.appendChild(icon);
        link.appendChild(label);

        var close = document.createElement('button');
        close.type = 'button';
        close.className = 'cf-close';
        close.setAttribute('aria-label', 'إخفاء زر التواصل');
        close.title = 'إخفاء';
        close.textContent = '✕';
        close.addEventListener('click', function () {
            box.remove();
            try { sessionStorage.setItem(HIDE_KEY, '1'); } catch (e) { /* تجاهل */ }
        });

        box.appendChild(link);
        box.appendChild(close);
        document.body.appendChild(box);
    }

    ready(inject);
})();
