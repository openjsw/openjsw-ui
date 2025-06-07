export async function onRequestGet(context) {
  const url = new URL(context.request.url);
  // 多语言支持
  const lang = url.searchParams.get('lang') === 'en' ? 'en' : 'zh';
  const i18n = {
    zh: {
      title: "openjsw 样式库演示",
      navHome: "首页",
      navProject: "项目",
      theme: "主题切换演示",
      btnDemo: "按钮演示",
      copyDemo: "复制演示",
      cardDemo: "卡片演示",
      copyText: "点我复制",
      copied: "已复制到剪贴板！",
      desc: "openjsw-ui 现代样式/组件演示。支持主题切换、无障碍、SVG图标、响应式等特性。",
      github: "https://github.com/openjsw/openjsw-ui"
    },
    en: {
      title: "openjsw Style Demo",
      navHome: "Home",
      navProject: "GitHub",
      theme: "Theme Switcher Demo",
      btnDemo: "Button Demo",
      copyDemo: "Copy Demo",
      cardDemo: "Card Demo",
      copyText: "Copy Me",
      copied: "Copied to clipboard!",
      desc: "openjsw-ui modern CSS/component demo. Supports theme switch, a11y, SVG icon, responsive design, and more.",
      github: "https://github.com/openjsw/openjsw-ui"
    }
  }[lang];

  return new Response(`<!DOCTYPE html>
<html lang="${lang}">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>${i18n.title}</title>
  <meta name="description" content="${i18n.desc}">
  <link rel="stylesheet" href="https://styl.openjsw.net/style.css">
</head>
<body>
<div class="oj-root">
  <header class="oj-header">
    <a class="oj-logo" href="/">
      <img src="https://styl.openjsw.net/logo.svg" alt="logo" height="32" style="margin-right:7px;">openjsw-ui
    </a>
    <div class="oj-header-right">
      <nav class="oj-nav">
        <a href="/">${i18n.navHome}</a>
        <a href="${i18n.github}" target="_blank" rel="noopener">${i18n.navProject}</a>
      </nav>
      <div class="oj-tool">
        <button id="oj-theme-toggle" class="oj-theme-btn" aria-label="切换主题">
          <img id="oj-theme-icon" src="/svg/color.svg" width="20" height="20" alt="theme">
        </button>
        <button class="oj-lang-btn" data-lang="zh">中</button>
        <button class="oj-lang-btn" data-lang="en">EN</button>
      </div>
    </div>
    <button id="oj-menu-btn" class="oj-menu-btn" aria-label="菜单">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none"><rect y="5" width="24" height="2" rx="1" fill="currentColor"/><rect y="11" width="24" height="2" rx="1" fill="currentColor"/><rect y="17" width="24" height="2" rx="1" fill="currentColor"/></svg>
    </button>
  </header>

  <!-- 移动菜单 -->
  <div id="oj-mobile-menu" class="oj-mobile-menu">
    <nav class="oj-nav">
      <a href="/">${i18n.navHome}</a>
      <a href="${i18n.github}" target="_blank" rel="noopener">${i18n.navProject}</a>
    </nav>
    <div class="oj-tool" style="flex-direction:row;gap:10px;">
      <button id="oj-theme-toggle-m" class="oj-theme-btn" aria-label="切换主题">
        <img id="oj-theme-icon-m" src="/svg/color.svg" width="20" height="20" alt="theme">
      </button>
      <button class="oj-lang-btn" data-lang="zh">中</button>
      <button class="oj-lang-btn" data-lang="en">EN</button>
    </div>
  </div>
  <div id="oj-mobile-mask" class="oj-mobile-mask"></div>

  <main class="oj-container">
    <h1>${i18n.title}</h1>
    <p>${i18n.desc}</p>

    <div class="oj-card">
      <div class="oj-title">${i18n.theme}</div>
      <div style="display:flex;align-items:center;gap:16px;">
        <button id="oj-theme-toggle-demo" class="oj-theme-btn" aria-label="切换主题">
          <img id="oj-theme-icon-demo" src="/svg/color.svg" width="24" height="24" alt="theme">
        </button>
        <span>点按钮循环切换 自动/亮色/暗色</span>
      </div>
      <pre><code>&lt;button id="oj-theme-toggle" class="oj-theme-btn"&gt;
  &lt;img id="oj-theme-icon" src="/svg/color.svg" width="20"&gt;
&lt;/button&gt;</code></pre>
    </div>

    <div class="oj-card">
      <div class="oj-title">${i18n.btnDemo}</div>
      <button class="oj-btn"><span class="oj-icon"><img src="/svg/sun.svg" width="20"></span>${lang === 'zh' ? '主按钮' : 'Primary'}</button>
      <button class="oj-btn" disabled>${lang === 'zh' ? '禁用' : 'Disabled'}</button>
      <pre><code>&lt;button class="oj-btn"&gt;按钮&lt;/button&gt;</code></pre>
    </div>

    <div class="oj-card">
      <div class="oj-title">${i18n.copyDemo}</div>
      <button class="oj-btn oj-copy" data-copy="openjsw-ui">${i18n.copyText}</button>
      <pre><code>&lt;button class="oj-btn oj-copy" data-copy="openjsw-ui"&gt;${i18n.copyText}&lt;/button&gt;</code></pre>
    </div>

    <div class="oj-card">
      <div class="oj-title">${i18n.cardDemo}</div>
      <div>${lang === 'zh' ? '卡片用于承载主要内容或功能块，使用 <code>.oj-card</code>。' : 'Cards are used for main content blocks. Use <code>.oj-card</code>.'}</div>
      <pre><code>&lt;div class="oj-card"&gt;内容&lt;/div&gt;</code></pre>
    </div>
  </main>

  <footer class="oj-footer">
    openjsw-ui &copy; 2024 | <a href="${i18n.github}" style="color:inherit;text-decoration:underline;" target="_blank">GitHub</a>
  </footer>
</div>
<script src="https://styl.openjsw.net/common.js"></script>
<script>
  // 用于演示卡片内主题切换按钮：独立于全局
  (function(){
    const seq = ['auto', 'light', 'dark'];
    const icons = {
      auto: '/svg/color.svg',
      light: '/svg/sun.svg',
      dark:  '/svg/moon.svg'
    };
    let mode = localStorage.getItem('oj-theme') || 'auto';
    const icon = document.getElementById('oj-theme-icon-demo');
    function apply(mode) {
      window.applyTheme(mode);
      if(icon) icon.src = icons[mode];
    }
    document.getElementById('oj-theme-toggle-demo').onclick = function() {
      const next = seq[(seq.indexOf(mode)+1)%seq.length];
      mode = next;
      apply(mode);
    };
    apply(mode);
  })();

  // 移动端菜单里的主题按钮同步主按钮
  (function(){
    const seq = ['auto', 'light', 'dark'];
    const icons = {
      auto: '/svg/color.svg',
      light: '/svg/sun.svg',
      dark:  '/svg/moon.svg'
    };
    let mode = localStorage.getItem('oj-theme') || 'auto';
    const icon = document.getElementById('oj-theme-icon-m');
    function apply(mode) {
      window.applyTheme(mode);
      if(icon) icon.src = icons[mode];
    }
    document.getElementById('oj-theme-toggle-m').onclick = function() {
      const next = seq[(seq.indexOf(mode)+1)%seq.length];
      mode = next;
      apply(mode);
    };
    apply(mode);
  })();
</script>
</body>
</html>
  `, {
    headers: { "content-type": "text/html; charset=UTF-8" }
  });
}
