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
            <svg id="oj-theme-icon" width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="5" stroke="currentColor" stroke-width="2"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M17.66 17.66l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M17.66 6.34l1.42-1.42" stroke="currentColor" stroke-width="2"/></svg>
          </button>
        </div>
        <div class="oj-lang-switcher">
          <button class="oj-lang-btn" aria-label="切换语言">
            <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2" fill="#eee"/><rect x="2" y="4" width="20" height="8" fill="#008751"/></svg>
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
