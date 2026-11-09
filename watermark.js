/* =========================================================================
   علامة مائية خفيفة - الأكاديمية الذكية · .ji.
   -------------------------------------------------------------------------
   طبقة ثابتة شفافة فوق صفحات الدورات، غير قابلة للتحديد ولا تعترض النقر،
   هدفها ردع اقتباس المحتوى أو تصويره كأنه محتوى آخر.
   ========================================================================= */
(function () {
    'use strict';

    var TEXT = 'الأكاديمية الذكية · .ji.';

    function build() {
        var style = document.createElement('style');
        style.textContent = [
            '.wm-layer{position:fixed;inset:-30%;z-index:60;pointer-events:none;',
            'display:grid;grid-template-columns:repeat(auto-fill,minmax(170px,1fr));',
            'gap:86px 38px;transform:rotate(-26deg);opacity:.038;overflow:hidden;',
            '-webkit-user-select:none;user-select:none;contain:strict;}',
            '.wm-layer span{display:block;text-align:center;white-space:nowrap;',
            'font-family:Tajawal,system-ui,sans-serif;font-weight:700;font-size:13px;',
            'letter-spacing:.5px;color:#e0b592;}',
            '@media (max-width:600px){.wm-layer{gap:64px 22px;opacity:.04;}',
            '.wm-layer span{font-size:11px;}}',
            '@media print{.wm-layer{display:none !important;}}'
        ].join('');
        document.head.appendChild(style);

        var layer = document.createElement('div');
        layer.className = 'wm-layer';
        layer.setAttribute('aria-hidden', 'true');

        var count = Math.max(60, Math.min(Math.round((window.innerWidth + window.innerHeight) / 12), 200));
        var html = '';
        for (var i = 0; i < count; i++) html += '<span>' + TEXT + '</span>';
        layer.innerHTML = html;

        document.body.appendChild(layer);
    }

    if (document.body) build();
    else document.addEventListener('DOMContentLoaded', build);
})();
