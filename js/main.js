// 青山ホワイトデンタルクリニック — main.js
(function () {
  var NAV = [
    { key: 'home', label: 'ホーム', href: 'index.html' },
    { key: 'about', label: '当院について', href: 'about.html' },
    { key: 'treatment', label: '診療案内', href: 'treatment.html' },
    { key: 'pricing', label: '料金表', href: 'pricing.html' },
    { key: 'cases', label: '治療の流れ', href: 'cases.html' },
    { key: 'clinic', label: '医院紹介', href: 'clinic.html' },
    { key: 'recruit', label: '採用情報', href: 'recruit.html' },
    { key: 'access', label: 'アクセス', href: 'access.html' },
    { key: 'faq', label: 'よくある質問', href: 'faq.html' }
  ];
  var current = document.body.getAttribute('data-page') || '';

  function headerHTML() {
    var links = NAV.map(function (n) {
      return '<a href="' + n.href + '"' + (n.key === current ? ' class="is-current"' : '') + '>' + n.label + '</a>';
    }).join('');
    return '' +
      '<header class="site-header"><div class="site-header__inner">' +
        '<a class="brand" href="index.html">' +
          '<span class="brand__en">AOYAMA WHITE</span>' +
          '<span class="brand__ja">青山ホワイトデンタルクリニック</span>' +
        '</a>' +
        '<nav class="gnav" id="gnav">' + links +
          '<a class="header-cta" href="reservation.html">ご予約・お問い合わせ</a>' +
        '</nav>' +
        '<button class="hamburger" id="hamburger" aria-label="メニュー"><span></span><span></span><span></span></button>' +
      '</div></header>';
  }

  function footerHTML() {
    var col = NAV.map(function (n) { return '<li><a href="' + n.href + '">' + n.label + '</a></li>'; }).join('');
    return '' +
      '<footer class="site-footer">' +
        '<div class="site-footer__inner">' +
          '<div>' +
            '<div class="brand"><span class="brand__en">AOYAMA WHITE</span><span class="brand__ja">青山ホワイトデンタルクリニック</span></div>' +
            '<p style="margin-top:16px;font-size:13px;color:rgba(255,255,255,0.7);line-height:1.9;">〒107-0062 東京都港区南青山0-0-0<br>青山ホワイトビル 2F<br>TEL 03-0000-0000</p>' +
          '</div>' +
          '<div><h4>メニュー</h4><ul>' + col + '</ul></div>' +
          '<div><h4>ご予約</h4><ul>' +
            '<li><a href="reservation.html">WEB予約</a></li>' +
            '<li><a href="reservation.html">LINE予約</a></li>' +
            '<li><a href="tel:0300000000">お電話でのご予約</a></li>' +
          '</ul></div>' +
        '</div>' +
        '<div class="site-footer__note">' +
          '※当サイトはサービス紹介のためのサンプル（架空）です。掲載している医院名・人物・価格・所在地はすべて架空であり、実在のものとは一切関係ありません。<br>' +
          '※記載の自由診療は公的医療保険が適用されない自費診療です。費用・治療期間・主なリスク・副作用は各ページに記載しています。<br>' +
          '© AOYAMA WHITE DENTAL CLINIC（sample）' +
        '</div>' +
      '</footer>';
  }

  function floatingHTML() {
    return '' +
      '<div class="floating-cta">' +
        '<a class="fab fab--line" href="reservation.html">LINE予約</a>' +
        '<a class="fab fab--tel" href="tel:0300000000">電話</a>' +
        '<a class="fab fab--web" href="reservation.html">WEB予約</a>' +
      '</div>';
  }

  function inject(id, html) { var el = document.getElementById(id); if (el) el.outerHTML = html; }

  document.addEventListener('DOMContentLoaded', function () {
    inject('site-header', headerHTML());
    inject('site-footer', footerHTML());
    inject('floating-cta', floatingHTML());

    var burger = document.getElementById('hamburger');
    var gnav = document.getElementById('gnav');
    if (burger && gnav) {
      burger.addEventListener('click', function () {
        burger.classList.toggle('is-open');
        gnav.classList.toggle('is-open');
      });
    }

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); } });
    }, { threshold: 0.12 });
    document.querySelectorAll('.fade-up').forEach(function (el) { io.observe(el); });

    document.querySelectorAll('form[data-dummy]').forEach(function (form) {
      form.addEventListener('submit', function (ev) {
        ev.preventDefault();
        var done = document.createElement('div');
        done.className = 'form-done';
        done.textContent = '送信を受け付けました（※本サンプルではデータは送信されません）';
        form.replaceWith(done);
      });
    });
  });
})();
