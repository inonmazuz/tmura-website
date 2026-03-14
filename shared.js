// Shared header/footer/styles injected into every page
document.addEventListener('DOMContentLoaded', function() {
  // Inject shared CSS
  const style = document.createElement('style');
  style.textContent = `
    @import url('https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;500;700;900&family=Frank+Ruhl+Libre:wght@300;400;500;700;900&display=swap');
    :root {
      --white: #ffffff;
      --off-white: #fafafa;
      --green: #4a7c59;
      --green-dark: #2d5a3d;
      --green-light: #e8f0eb;
      --text: #1a1a1a;
      --text-mid: #444444;
      --text-light: #777777;
      --border: #e0e0e0;
      --divider-color: #c8b89a;
    }
    * { margin:0; padding:0; box-sizing:border-box; }
    html { scroll-behavior:smooth; }
    body { font-family:'Heebo',sans-serif; background:var(--white); color:var(--text); direction:rtl; overflow-x:hidden; font-size:16px; line-height:1.7; }

    /* NAV */
    .site-nav { background:white; border-bottom:1px solid var(--border); position:sticky; top:0; z-index:100; }
    .nav-inner { max-width:960px; margin:0 auto; padding:0 20px; display:flex; align-items:center; justify-content:space-between; height:60px; }
    .nav-logo { display:flex; align-items:center; gap:10px; text-decoration:none; }
    .nav-logo img { width:38px; height:38px; border-radius:50%; }
    .nav-logo-text { font-family:'Frank Ruhl Libre',serif; font-size:1rem; font-weight:700; color:var(--green-dark); line-height:1.2; }
    .nav-logo-sub { font-size:0.65rem; color:var(--text-light); }
    .nav-links { display:flex; align-items:center; gap:2px; }
    .nav-links a { font-size:0.8rem; font-weight:600; color:var(--text-mid); text-decoration:none; padding:6px 10px; border-radius:6px; transition:all 0.15s; white-space:nowrap; }
    .nav-links a:hover, .nav-links a.active { color:var(--green-dark); background:var(--green-light); }
    .nav-cta { background:var(--green) !important; color:white !important; border-radius:20px !important; padding:7px 16px !important; }
    .nav-cta:hover { background:var(--green-dark) !important; }
    .hamburger { display:none; background:none; border:none; font-size:1.3rem; cursor:pointer; color:var(--text); padding:4px; }

    @media(max-width:720px) {
      .nav-links { display:none; flex-direction:column; position:absolute; top:60px; right:0; left:0; background:white; border-bottom:1px solid var(--border); padding:10px 16px 16px; gap:2px; z-index:200; box-shadow:0 4px 12px rgba(0,0,0,0.08); }
      .nav-links.open { display:flex; }
      .nav-links a { font-size:0.95rem; padding:10px 12px; }
      .hamburger { display:block; }
    }

    /* FOOTER */
    .site-footer { background:#1a1a1a; color:rgba(255,255,255,0.65); padding:40px 24px 32px; text-align:center; margin-top:0; }
    .footer-logo { font-family:'Frank Ruhl Libre',serif; font-size:1.15rem; color:white; font-weight:700; margin-bottom:10px; }
    .footer-links { display:flex; justify-content:center; gap:18px; margin:12px 0; flex-wrap:wrap; }
    .footer-links a { color:rgba(255,255,255,0.55); text-decoration:none; font-size:0.82rem; transition:color 0.15s; }
    .footer-links a:hover { color:white; }
    .footer-copy { font-size:0.73rem; opacity:0.35; margin-top:14px; }
    .footer-social { display:flex; justify-content:center; gap:14px; margin:12px 0; }
    .footer-social a { color:rgba(255,255,255,0.5); font-size:0.82rem; text-decoration:none; transition:color 0.15s; }
    .footer-social a:hover { color:white; }

    /* SHARED */
    .section { padding:56px 24px; max-width:780px; margin:0 auto; }
    .section-wide { padding:56px 24px; max-width:960px; margin:0 auto; }
    .section-title { font-family:'Frank Ruhl Libre',serif; font-size:clamp(1.4rem,3.5vw,1.9rem); font-weight:900; color:var(--text); text-align:center; margin-bottom:10px; line-height:1.3; }
    .section-sub { text-align:center; color:var(--text-mid); font-size:0.95rem; line-height:1.75; max-width:560px; margin:0 auto 36px; }
    .btn-primary { background:var(--green); color:white; border:none; padding:13px 30px; border-radius:30px; font-family:'Heebo',sans-serif; font-size:0.92rem; font-weight:700; cursor:pointer; text-decoration:none; transition:all 0.2s; display:inline-block; }
    .btn-primary:hover { background:var(--green-dark); transform:translateY(-1px); }
    .tag { display:inline-block; background:var(--green-light); color:var(--green-dark); padding:3px 12px; border-radius:14px; font-size:0.75rem; font-weight:700; }
    .page-hero { padding:52px 24px 40px; text-align:center; background:var(--off-white); border-bottom:1px solid var(--border); }
    .page-hero h1 { font-family:'Frank Ruhl Libre',serif; font-size:clamp(1.6rem,4vw,2.2rem); font-weight:900; color:var(--text); max-width:640px; margin:0 auto 12px; line-height:1.35; }
    .page-hero p { font-size:0.95rem; color:var(--text-mid); max-width:520px; margin:0 auto; line-height:1.8; }
    .breadcrumb { font-size:0.78rem; color:var(--text-light); margin-bottom:14px; }
    .breadcrumb a { color:var(--green); text-decoration:none; }
    .prose p { font-size:0.93rem; color:var(--text-mid); line-height:1.85; margin-bottom:14px; }
    .prose h2 { font-family:'Frank Ruhl Libre',serif; font-size:1.3rem; font-weight:700; color:var(--text); margin:28px 0 10px; }
    .prose h3 { font-size:1rem; font-weight:700; color:var(--green-dark); margin:20px 0 6px; }
    .divider-line { text-align:center; color:var(--divider-color); letter-spacing:10px; font-size:1.1rem; padding:8px 0; opacity:0.7; }

    /* FLOAT CTA */
    .float-cta { position:fixed; bottom:20px; left:50%; transform:translateX(-50%); background:var(--green); color:white; padding:12px 26px; border-radius:30px; font-family:'Heebo',sans-serif; font-weight:700; font-size:0.88rem; box-shadow:0 4px 20px rgba(0,0,0,0.2); text-decoration:none; z-index:200; display:none; white-space:nowrap; transition:all 0.2s; }
    .float-cta.visible { display:block; }
    .float-cta:hover { background:var(--green-dark); transform:translateX(-50%) translateY(-1px); }
  `;
  document.head.appendChild(style);

  // Inject nav
  const pages = [
    { href:'index.html', label:'דף הבית' },
    { href:'about.html', label:'אודות חני' },
    { href:'method.html', label:'שיטת הטיפול' },
    { href:'pcos.html', label:'שחלות פוליציסטיות' },
    { href:'cycle.html', label:'מחזור החיים' },
    { href:'herbs.html', label:'צמחי מרפא' },
    { href:'blog.html', label:'מאמרים' },
    { href:'contact.html', label:'קביעת פגישה', cls:'nav-cta' },
  ];
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navHtml = `
    <nav class="site-nav">
      <div class="nav-inner">
        <a href="index.html" class="nav-logo">
          <img src="https://i0.wp.com/tmura4u.co.il/wp-content/uploads/2024/04/tmura_icon_1-300x300-1.png?fit=300%2C300&ssl=1" alt="תמורה">
          <div><div class="nav-logo-text">תמורה</div><div class="nav-logo-sub">רפואה סינית לנשים</div></div>
        </a>
        <button class="hamburger" onclick="document.querySelector('.nav-links').classList.toggle('open')">☰</button>
        <div class="nav-links">
          ${pages.map(p=>`<a href="${p.href}" class="${p.cls||''} ${currentPage===p.href?'active':''}">${p.label}</a>`).join('')}
        </div>
      </div>
    </nav>`;
  document.body.insertAdjacentHTML('afterbegin', navHtml);

  // Inject footer
  const footerHtml = `
    <footer class="site-footer">
      <div class="footer-logo">תמורה – רפואה סינית לנשים</div>
      <div class="footer-social">
        <a href="https://www.facebook.com/share/1ApSHcpz61/" target="_blank">פייסבוק</a>
        <a href="https://youtube.com/channel/UCEkZnz8SSKQ2LmjKxqsNklA" target="_blank">יוטיוב</a>
        <a href="https://www.linkedin.com/in/hani-hoval-07854967" target="_blank">לינקדאין</a>
        <a href="https://shanghanlun.co.il/" target="_blank">שאנג חאן לון</a>
      </div>
      <div class="footer-links">
        <a href="tel:0543122132">📞 054-3122132</a>
        <a href="contact.html">קביעת פגישה</a>
        <a href="about.html">אודות</a>
        <a href="https://tmura4u.co.il/terms-of-use/" target="_blank">תקנון</a>
      </div>
      <div class="footer-copy">© 2025 קליניקת תמורה – חני חובל · כל הזכויות שמורות</div>
    </footer>`;
  document.body.insertAdjacentHTML('beforeend', footerHtml);

  // Floating CTA
  document.body.insertAdjacentHTML('beforeend', '<a class="float-cta" href="contact.html">📅 לקביעת פגישת אבחון</a>');
  window.addEventListener('scroll', () => {
    document.querySelector('.float-cta').classList.toggle('visible', window.scrollY > 400);
  });
});
