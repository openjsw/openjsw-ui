export async function onRequestGet({ request }) {
  const url = new URL(request.url);
  // 判断当前是否英文页面（路径以 /en/ 开头或就是 /en）
  const isEN = url.pathname === '/en' || url.pathname.startsWith('/en/');

  // 多语言文本配置
  const text = isEN
    ? {
        title: "OpenJSW UI Kit Styles & Components",
        desc: "Accessible, responsive, dark mode ready, modern UI components.",
        btn1: "Primary Button",
        btn2: "Success Button",
        btn3: "Danger Button",
        btn4: "Disabled",
        input1: "Please enter",
        input2: "Readonly",
        input3: "Disabled",
        cardTitle: "Card Title",
        cardDesc: "Card content, suitable for small information.",
        lang: "Language Switcher",
        zh: "简体中文",
        en: "English",
        search: "Search…",
        searchTitle: "Search Bar",
        other: "You can extend Tag, Pagination, Notification, Theme Switcher, all styles & JS are a11y ready."
      }
    : {
        title: "OpenJSW UI Kit 样式与常用组件",
        desc: "支持可访问性、响应式、暗色模式、适合现代开发的基础 UI 组件库。",
        btn1: "主按钮",
        btn2: "成功按钮",
        btn3: "危险按钮",
        btn4: "禁用按钮",
        input1: "请输入内容",
        input2: "只读",
        input3: "禁用",
        cardTitle: "卡片标题",
        cardDesc: "卡片内容，适合放置小块信息。",
        lang: "语言切换器",
        zh: "简体中文",
        en: "English",
        search: "搜索…",
        searchTitle: "搜索组件",
        other: "你可以继续拓展 Tag、分页、通知、主题切换等，所有样式与 JS 支持无障碍。"
      };

  // 语言切换后的目标路径（/en/xxx <-> /xxx）
  function getSwitchPath() {
    if (isEN) {
      // 去掉 /en 前缀
      return url.pathname.replace(/^\/en/, '') || '/';
    } else {
      // 补上 /en 前缀
      return '/en' + (url.pathname === '/' ? '' : url.pathname);
    }
  }

  return new Response(`
    <!DOCTYPE html>
    <html lang="${isEN ? 'en' : 'zh-CN'}">
    <head>
      <meta charset="UTF-8">
      <title>${text.title}</title>
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <link rel="stylesheet" href="/public/styles.css" />
      <style>
        .class-label { font-size:12px;color:#999; margin-top:6px; }
        .section { margin: 48px 0 32px; }
        .demo-col { display: flex; gap: 30px; flex-wrap: wrap; align-items: center;}
      </style>
      <!-- 多语言SEO友好 alternate -->
      <link rel="alternate" hreflang="zh" href="https://${url.hostname}${url.pathname.replace(/^\/en/, '') || '/'}">
      <link rel="alternate" hreflang="en" href="https://${url.hostname}${url.pathname.startsWith('/en') ? url.pathname : '/en' + (url.pathname === '/' ? '' : url.pathname)}">
    </head>
    <body>
      <main style="max-width:750px;margin:36px auto 48px;padding:0 20px;">
        <h1 style="margin-bottom:16px;">${text.title}</h1>
        <div style="color:#888;font-size:15px;">${text.desc}</div>
        
        <section class="section">
          <h2>按钮 Button</h2>
          <div class="demo-box demo-col">
            <button class="btn js-alert" data-msg="${text.btn1}">${text.btn1}</button>
            <button class="btn success js-alert" data-msg="${text.btn2}">${text.btn2}</button>
            <button class="btn danger js-alert" data-msg="${text.btn3}">${text.btn3}</button>
            <button class="btn" disabled>${text.btn4}</button>
          </div>
          <div class="class-label">class="btn" | "btn success" | "btn danger" | + js-alert</div>
        </section>

        <section class="section">
          <h2>输入框 Input</h2>
          <div class="demo-box demo-col">
            <input class="input" placeholder="${text.input1}">
            <input class="input" value="${text.input2}" readonly>
            <input class="input" value="${text.input3}" disabled>
          </div>
          <div class="class-label">class="input"</div>
        </section>

        <section class="section">
          <h2>卡片 Card</h2>
          <div class="demo-box">
            <div class="card">
              <div style="font-size:18px;margin-bottom:10px;">${text.cardTitle}</div>
              <div style="font-size:14px;color:#888;">${text.cardDesc}</div>
            </div>
          </div>
          <div class="class-label">class="card"</div>
        </section>

        <section class="section">
          <h2>${text.lang} Language Switcher</h2>
          <div class="demo-box">
            <div class="lang-switcher" tabindex="0" aria-label="${text.lang}">
              <span class="lang-switcher__icon" aria-hidden="true">🌏</span>
              <span class="lang-switcher__option${isEN ? '' : ' active'}" data-lang="zh">${text.zh}</span>
              <span class="lang-switcher__option${isEN ? ' active' : ''}" data-lang="en">${text.en}</span>
              <div class="lang-switcher__options">
                <div class="lang-switcher__option" data-lang="zh">${text.zh}</div>
                <div class="lang-switcher__option" data-lang="en">${text.en}</div>
              </div>
            </div>
          </div>
          <div class="class-label">class="lang-switcher" 详见 CSS/JS</div>
        </section>

        <section class="section">
          <h2>${text.searchTitle}</h2>
          <div class="demo-box">
            <div style="position:relative;max-width:320px;">
              <form class="search-bar" autocomplete="off" role="search">
                <span class="search-bar__icon" aria-hidden="true">🔍</span>
                <input class="search-bar__input" type="search" placeholder="${text.search}" aria-label="${text.search}" />
              </form>
              <div class="search-results"></div>
            </div>
          </div>
          <div class="class-label">class="search-bar" + search-bar__input</div>
        </section>

        <section class="section">
          <h2>其它辅助</h2>
          <div style="color:#bbb;font-size:13px;">
            ${text.other}
          </div>
        </section>
      </main>
      <script src="/public/common.js"></script>
    </body>
    </html>
  `, {
    headers: {
      "content-type": "text/html; charset=utf-8",
    }
  });
}
