export async function onRequest(context) {
  // 简单多语言（可扩展）
  const url = new URL(context.request.url);
  const lang = url.searchParams.get('lang') === 'en' ? 'en' : 'zh';
  const dict = {
    zh: {
      title: 'openjsw 样式库 v1.2 演示页面',
      desc: '本页面演示 openjsw 统一样式库的响应式卡片、主题切换、代码块样式、移动端菜单等 UI 能力。',
      card1: '卡片组件演示',
      card1desc: '适用于内容区、提示、保护等常见场景。',
      card2: '交互按钮演示',
      btnMain: '主要按钮',
      btnCopy: '复制',
      card3: '代码块演示',
      codeDemo: '/* CSS 代码高亮演示 */\n.oj-btn {\n  background: var(--oj-primary);\n  color: var(--oj-primary-contrast);\n}',
      card4: '主题/语言切换',
      card4desc: '点击右上角图标可切换亮/暗色和语言。',
      footer: '© 2024 openjsw  |  ',
      github: 'GitHub',
    },
    en: {
      title: 'openjsw Style v1.2 Demo',
      desc: 'This page demonstrates the responsive card, theme switcher, code highlight, and mobile menu features of openjsw style library.',
      card1: 'Card Demo',
      card1desc: 'Used for content area, tips, protection and other common scenarios.',
      card2: 'Button Demo',
      btnMain: 'Main Button',
      btnCopy: 'Copy',
      card3: 'Code Block Demo',
      codeDemo: '/* CSS highlight demo */\n.oj-btn {\n  background: var(--oj-primary);\n  color: var(--oj-primary-contrast);\n}',
      card4: 'Theme/Language Switch',
      card4desc: 'Use the icon at top right to switch theme and language.',
      footer: '© 2024 openjsw  |  ',
      github: 'GitHub',
    }
  }[lang];

  return new Response(`<!DOCTYPE html>
<html lang="${lang}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>${dict.title}</title>
  <link rel="stylesheet" href="https://styl.openjsw.net/style.css">
</head>
<body>
  <div class="oj-root">
    <header class="oj-header">
      <a class="oj-logo" href="/">
        <img src="https://styl.openjsw.net/logo.svg" alt="logo">
        <span>openjsw-ui</span>
      </a>
      <nav class="oj-nav">
        <a href="#" class="active">${dict.title}</a>
      </nav>
      <div class="oj-tool">
        <div class="oj-theme-switcher">
          <button id="oj-theme-toggle" class="oj-theme-btn" aria-label="切换主题">
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
<svg fill="#000000" width="800px" height="800px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M8 .5C3.58.5 0 3.86 0 8s3.58 7.5 8 7.5c4.69 0 1.04-2.83 2.79-4.55.76-.75 1.63-.87 2.44-.87.37 0 .73.03 1.06.03.99 0 1.72-.23 1.72-2.1C16 3.86 12.42.5 8 .5zm6.65 8.32c-.05.01-.16.02-.37.02-.14 0-.29 0-.45-.01-.19 0-.39-.01-.61-.01-.89 0-2.19.13-3.32 1.23-1.17 1.16-.9 2.6-.74 3.47.03.18.08.44.09.6-.16.05-.52.13-1.26.13-3.72 0-6.75-2.8-6.75-6.25S4.28 1.75 8 1.75s6.75 2.8 6.75 6.25c0 .5-.06.74-.1.82z"/><path d="M5.9 9.47c-1.03 0-1.86.8-1.86 1.79s.84 1.79 1.86 1.79 1.86-.8 1.86-1.79-.84-1.79-1.86-1.79zm0 2.35c-.35 0-.64-.25-.64-.56s.29-.56.64-.56.64.25.64.56-.29.56-.64.56zm-.2-4.59c0-.99-.84-1.79-1.86-1.79s-1.86.8-1.86 1.79.84 1.79 1.86 1.79 1.86-.8 1.86-1.79zm-1.86.56c-.35 0-.64-.25-.64-.56s.29-.56.64-.56.64.25.64.56-.29.56-.64.56zM7.37 2.5c-1.03 0-1.86.8-1.86 1.79s.84 1.79 1.86 1.79 1.86-.8 1.86-1.79S8.39 2.5 7.37 2.5zm0 2.35c-.35 0-.64-.25-.64-.56s.29-.56.64-.56.64.25.64.56-.29.56-.64.56zm2.47 1.31c0 .99.84 1.79 1.86 1.79s1.86-.8 1.86-1.79-.84-1.79-1.86-1.79-1.86.8-1.86 1.79zm2.5 0c0 .31-.29.56-.64.56s-.64-.25-.64-.56.29-.56.64-.56.64.25.64.56z"/></svg>
          </button>
        </div>
        <div class="oj-lang-switcher">
          <button class="oj-lang-btn" aria-label="切换语言">
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><?xml version="1.0" encoding="utf-8"?><!-- Uploaded to: SVG Repo, www.svgrepo.com, Generator: SVG Repo Mixer Tools -->
<svg width="800px" height="800px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M4 0H6V2H10V4H8.86807C8.57073 5.66996 7.78574 7.17117 6.6656 8.35112C7.46567 8.73941 8.35737 8.96842 9.29948 8.99697L10.2735 6H12.7265L15.9765 16H13.8735L13.2235 14H9.77647L9.12647 16H7.0235L8.66176 10.9592C7.32639 10.8285 6.08165 10.3888 4.99999 9.71246C3.69496 10.5284 2.15255 11 0.5 11H0V9H0.5C1.5161 9 2.47775 8.76685 3.33437 8.35112C2.68381 7.66582 2.14629 6.87215 1.75171 6H4.02179C4.30023 6.43491 4.62904 6.83446 4.99999 7.19044C5.88743 6.33881 6.53369 5.23777 6.82607 4H0V2H4V0ZM12.5735 12L11.5 8.69688L10.4265 12H12.5735Z" fill="#000000"/>
</svg>
            ${lang === 'zh' ? '简' : 'EN'}
          </button>
        </div>
      </div>
      <button class="oj-menu-btn" id="oj-menu-btn" aria-label="菜单">
        <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M4 8h16M4 16h16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>
      </button>
    </header>
    <nav class="oj-mobile-menu" id="oj-mobile-menu">
      <div class="oj-nav">
        <a href="#" class="active">${dict.title}</a>
      </div>
      <div class="oj-tool">
        <div class="oj-theme-switcher">
          <button id="oj-theme-toggle-mobile" class="oj-theme-btn" aria-label="切换主题">
            <svg id="oj-theme-icon-mobile" width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="5" stroke="currentColor" stroke-width="2"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M17.66 17.66l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M17.66 6.34l1.42-1.42" stroke="currentColor" stroke-width="2"/></svg>
          </button>
        </div>
        <div class="oj-lang-switcher">
          <button class="oj-lang-btn" aria-label="切换语言">
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2" fill="#eee"/><rect x="2" y="4" width="20" height="8" fill="#008751"/></svg>
            ${lang === 'zh' ? '简' : 'EN'}
          </button>
        </div>
      </div>
    </nav>
    <div class="oj-mobile-mask" id="oj-mobile-mask"></div>

    <main class="oj-container">
      <h1 class="oj-title">${dict.title}</h1>
      <div class="oj-muted" style="margin-bottom:18px;">${dict.desc}</div>

      <div class="oj-card">
        <h2 style="margin-top:0">${dict.card1}</h2>
        <div class="oj-muted">${dict.card1desc}</div>
      </div>
      <div class="oj-card">
        <h2 style="margin-top:0">${dict.card2}</h2>
        <button class="oj-btn">${dict.btnMain}</button>
        <button class="oj-btn oj-copy" data-copy="openjsw">${dict.btnCopy}</button>
      </div>
      <div class="oj-card">
        <h2 style="margin-top:0">${dict.card3}</h2>
        <pre><code>${dict.codeDemo}</code></pre>
      </div>
      <div class="oj-card">
        <h2 style="margin-top:0">${dict.card4}</h2>
        <div class="oj-muted">${dict.card4desc}</div>
      </div>
    </main>
    <footer class="oj-footer">
      ${dict.footer}<a href="https://github.com/openjsw/openjsw-ui" target="_blank">${dict.github}</a>
    </footer>
  </div>
  <script src="https://styl.openjsw.net/common.js"></script>
  <script>
    // 语言切换逻辑（自动切换页面参数）
    document.querySelectorAll('.oj-lang-btn').forEach(btn=>{
      btn.onclick = () => {
        var newlang = document.documentElement.lang === 'en' ? 'zh' : 'en';
        location.search = '?lang=' + newlang;
      };
    });
    // 主题切换（icon双同步，可选增强）
    function syncThemeIcon(){
      var iconMap = { light:'☀️', dark:'🌙', auto:'🖥️'};
      var theme = localStorage.getItem('oj-theme')||'auto';
      document.querySelectorAll('#oj-theme-icon,#oj-theme-icon-mobile').forEach(e=>{
        e.textContent = iconMap[theme]||'🖥️';
      });
    }
    ojReady(syncThemeIcon);
    document.querySelectorAll('#oj-theme-toggle,#oj-theme-toggle-mobile').forEach(btn=>{
      btn.addEventListener('click', ()=>{
        setTimeout(syncThemeIcon,150);
      });
    });
  </script>
</body>
</html>`, {
    headers: { 'content-type': 'text/html; charset=UTF-8' }
  });
}
