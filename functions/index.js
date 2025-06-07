export async function onRequestGet({ request }) {
  // 多语言支持（中英文，自动根据 ?lang= 或 Accept-Language）
  const url = new URL(request.url);
  let lang = url.searchParams.get('lang') || '';
  if (!lang) {
    const accept = request.headers.get('accept-language') || '';
    lang = accept.startsWith('en') ? 'en' : 'zh';
  }
  if (!['zh', 'en'].includes(lang)) lang = 'zh';

  // 文案
  const dict = {
    zh: {
      title: 'openjsw 样式库 v1.1 演示页面',
      card1: '卡片组件演示',
      card2: '交互按钮演示',
      card3: '代码块演示',
      button: '主要按钮',
      copy: '复制',
      switchTheme: '切换主题',
      switchLang: 'English',
      desc: '本页面演示 openjsw 统一样式库的响应式卡片、主题切换、代码块样式、移动端菜单等 UI 能力。',
    },
    en: {
      title: 'openjsw style v1.1 Demo',
      card1: 'Card Component Demo',
      card2: 'Interactive Button Demo',
      card3: 'Code Block Demo',
      button: 'Primary Button',
      copy: 'Copy',
      switchTheme: 'Switch Theme',
      switchLang: '简体中文',
      desc: 'This page demonstrates openjsw unified style library: responsive card, theme switcher, code style, mobile menu and more.',
    },
  }[lang];

  // HTML 页面输出
  return new Response(/*html*/`
<!DOCTYPE html>
<html lang="${lang}">
<head>
  <meta charset="UTF-8">
  <title>${dict.title}</title>
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <meta name="description" content="openjsw 样式库演示页面">
  <link rel="stylesheet" href="https://styl.openjsw.net/style.css">
</head>
<body>
  <div class="oj-root">
    <!-- 顶部导航 -->
    <header class="oj-header">
      <a class="oj-logo" href="#"><img src="https://styl.openjsw.net/logo.svg" alt="logo">openjsw-ui</a>
      <nav class="oj-nav">
        <a href="#" class="active">${dict.title}</a>
      </nav>
      <div class="oj-tool">
        <!-- 主题切换按钮 -->
        <button id="oj-theme-toggle" class="oj-theme-btn" title="${dict.switchTheme}">
          <span id="oj-theme-icon">🖥️</span>
        </button>
        <!-- 语言切换（带图标） -->
        <a class="oj-lang-btn" href="?lang=zh" title="简体中文" aria-label="简体中文">
          <img src="https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/cn.svg" style="width:1.1em;vertical-align:middle;"> 简
        </a>
        <a class="oj-lang-btn" href="?lang=en" title="English" aria-label="English">
          <img src="https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/gb.svg" style="width:1.1em;vertical-align:middle;"> EN
        </a>
      </div>
      <!-- 移动端菜单按钮 -->
      <button id="oj-menu-btn" class="oj-menu-btn" aria-label="菜单" title="菜单">☰</button>
    </header>
    <!-- 移动端菜单 -->
    <div id="oj-mobile-menu" class="oj-mobile-menu">
      <nav class="oj-nav">
        <a href="#" class="active">${dict.title}</a>
      </nav>
      <div class="oj-tool">
        <button id="oj-theme-toggle-m" class="oj-theme-btn"><span id="oj-theme-icon-m">🖥️</span>${dict.switchTheme}</button>
        <a class="oj-lang-btn" href="?lang=zh">
          <img src="https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/cn.svg" style="width:1.1em;vertical-align:middle;"> 简
        </a>
        <a class="oj-lang-btn" href="?lang=en">
          <img src="https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/gb.svg" style="width:1.1em;vertical-align:middle;"> EN
        </a>
      </div>
    </div>
    <div id="oj-mobile-mask" class="oj-mobile-mask"></div>

    <main class="oj-container">
      <h1 class="oj-title" style="margin-top:22px">${dict.title}</h1>
      <p class="oj-muted" style="margin-bottom:32px">${dict.desc}</p>
      <div class="oj-demo-grid">
        <!-- 卡片演示 -->
        <section class="oj-card">
          <div class="oj-title" style="font-size:1.22em;margin-bottom:.8em">${dict.card1}</div>
          <div class="oj-muted">${lang==='zh'?'适用于内容区、提示、保护等常见场景。':'For content, notifications, info, etc.'}</div>
        </section>
        <!-- 按钮演示 -->
        <section class="oj-card">
          <div class="oj-title" style="font-size:1.18em;margin-bottom:.7em">${dict.card2}</div>
          <button class="oj-btn" style="margin-right:10px;">${dict.button}</button>
          <button class="oj-btn oj-copy" data-copy="openjsw rocks!">${dict.copy}</button>
        </section>
        <!-- 代码块演示 -->
        <section class="oj-card">
          <div class="oj-title" style="font-size:1.16em;margin-bottom:.7em">${dict.card3}</div>
<pre><code>/* CSS 代码高亮演示 */
.oj-btn {
  background: var(--oj-primary);
  color: var(--oj-primary-contrast);
}
</code></pre>
        </section>
      </div>
    </main>
    <footer class="oj-footer">
      &copy; 2024 openjsw &nbsp; | &nbsp; <a href="https://github.com/openjsw" target="_blank" style="color:inherit;">GitHub</a>
    </footer>
  </div>
  <!-- 引用公共脚本 -->
  <script src="https://styl.openjsw.net/common.js"></script>
  <script>
    // 移动端菜单里的主题切换与主按钮同步
    ojReady(()=>{
      let mBtn = document.getElementById('oj-theme-toggle-m');
      let iconM = document.getElementById('oj-theme-icon-m');
      if(mBtn && iconM){
        mBtn.onclick = () => {
          let now = localStorage.getItem('oj-theme') || 'auto';
          let next = ['light','dark','auto'][(["light","dark","auto"].indexOf(now)+1)%3];
          localStorage.setItem('oj-theme',next==='auto'?'':next);
          ojReady(()=>{ window.location.reload(); });
        }
      }
    });
  </script>
</body>
</html>
  `, {
    headers: { "content-type": "text/html; charset=UTF-8" }
  });
}
