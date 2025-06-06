// openjsw-ui.js

// 自动注入样式（全量CSS）
(function () {
  if (!document.getElementById('oj-ui-style')) {
    const style = document.createElement('style');
    style.id = 'oj-ui-style';
    style.innerHTML = `
:root {
  --color-primary:   #0066ff;
  --color-secondary: #2b2b2b;
  --color-bg:        #ffffff;
  --color-accent:    #00c2ff;
  --color-success:   #22c55e;
  --color-error:     #ff3a44;
  --color-warning:   #ffbe2e;
  --color-info:      #4ea8ff;
  --color-border:    #e3e5ea;
  --radius: 8px;
  --shadow: 0 2px 12px #0001;
  --text: var(--color-secondary);
}
@media (prefers-color-scheme: dark) {
  :root {
    --color-bg:        #181b1e;
    --color-secondary: #ededed;
    --color-border:    #31363a;
    --text:            #ededed;
  }
}
body { background: var(--color-bg); color: var(--text); font-family: 'Inter', 'Segoe UI', Arial, sans-serif; margin: 0; min-height: 100vh;}
/* ======= 顶部导航栏 ======= */
.oj-navbar {
  width: 100%; background: #fff; border-bottom: 1px solid #eee; box-shadow: var(--shadow); height: 56px;
  display: flex; align-items: center; padding: 0 2em; z-index: 10; position: sticky; top: 0;
}
@media (prefers-color-scheme: dark) { .oj-navbar { background: #23272a; border-bottom: none; } }
.oj-navbar .oj-nav-logo { font-weight: bold; font-size: 1.3em; color: var(--color-primary); text-decoration: none; margin-right: 2.2em;}
.oj-navbar .oj-nav-menu { flex: 1; display: flex; gap: 1.8em; }
.oj-navbar .oj-nav-menu a { color: var(--color-secondary); text-decoration: none; font-weight: 500; transition: color .18s;}
.oj-navbar .oj-nav-menu a.active, .oj-navbar .oj-nav-menu a:hover { color: var(--color-primary);}
.oj-navbar .oj-nav-search { margin-left: auto; }
.oj-navbar .oj-search-box {
  display: flex; align-items: center; background: #f6f8fa; border-radius: 2em; padding: 0.15em 0.7em;
  border: 1px solid #eef1f4; transition: border-color .18s; margin-left: 1.8em;
}
.oj-navbar .oj-search-box:focus-within { border-color: var(--color-primary);}
.oj-navbar .oj-search-input {
  border: none; background: transparent; outline: none; font-size: 1em; padding: 0.35em 0.2em; color: var(--color-secondary);
  width: 120px;
}
.oj-navbar .oj-search-icon { margin-left: 0.3em; color: #bbb;}
/* ======= 菜单/侧边栏 ======= */
.oj-sider {
  width: 210px; background: #f8f9fb; border-right: 1px solid #ececec; min-height: 90vh; padding: 1.5em 0 1.5em 0;
  box-shadow: 1px 0 6px #0001; position: sticky; top: 56px;
}
.oj-menu-list { list-style: none; margin: 0; padding: 0;}
.oj-menu-list li { padding: .75em 2em; color: #2b2b2b; cursor: pointer; border-left: 3px solid transparent; font-size: 1.06em;}
.oj-menu-list li.active, .oj-menu-list li:hover { background: #e6f2ff; color: var(--color-primary); border-left: 3px solid var(--color-primary);}
@media (max-width:900px) {.oj-sider{display:none;}}
/* ======= 主内容 ======= */
.oj-main-content { max-width: 900px; margin: 0 auto; padding: 2em 1em 2em 1em;}
.oj-title { font-size: 1.55em; font-weight: bold; margin: 1.1em 0 1.2em;}
.oj-demo-block { background: #f9fafb; border-radius: 12px; padding: 2em 2em 1em 2em; margin-bottom: 2.5em; box-shadow: 0 1px 6px #0001;}
.oj-demo-title { font-size: 1.14em; font-weight: 500; margin-bottom: 1em; }
/* ======= 页脚 ======= */
.oj-footer { text-align: center; color: #888; padding: 2.5em 1em 1em 1em; font-size: 1em; margin-top: 2em;}
/* ======= 按钮 ======= */
.oj-btn {
  display: inline-block; border: none; border-radius: var(--radius); padding: 0.5em 1.2em; background: var(--color-primary); color: #fff;
  font-weight: 600; cursor: pointer; transition: background 0.15s, color 0.15s, filter 0.15s; box-shadow: var(--shadow); outline: none; margin-top: 1em;
}
.oj-btn:hover { filter: brightness(0.92);}
.oj-btn:focus, .oj-btn:focus-visible {
  outline: 2.5px solid var(--color-accent); outline-offset: 2px; box-shadow: 0 0 0 3px #00c2ff22;
}
.oj-btn.oj-success { background: var(--color-success);}
.oj-btn.oj-danger  { background: var(--color-error);}
.oj-btn.oj-warning { background: var(--color-warning); color: #222;}
/* ======= 表单 ======= */
.oj-form label { display: block; margin-bottom: 1em; color: var(--color-secondary);}
.oj-form input, .oj-form select, .oj-form textarea {
  width: 100%; box-sizing: border-box; border: 1px solid var(--color-border); border-radius: var(--radius); padding: .45em .8em;
  font-size: 1em; margin-top: .25em; background: #f9fafc; color: var(--color-secondary); transition: border .18s;
}
.oj-form input:focus, .oj-form select:focus, .oj-form textarea:focus {
  outline: 2.5px solid var(--color-accent); border-color: var(--color-primary); box-shadow: 0 0 0 3px #00c2ff22;
}
/* ======= 消息提示 ======= */
.oj-message {
  border-radius: var(--radius); padding: 1em 1.2em; margin: 1em 0; font-size: 1em; color: #222; box-shadow: 0 1px 4px #0001; border-left: 5px solid var(--color-info);
  background: #e9f1fa;
}
.oj-message.oj-success { border-left-color: var(--color-success); background: #e9f9f0;}
.oj-message.oj-danger  { border-left-color: var(--color-error); background: #f9e9e9;}
.oj-message.oj-warning { border-left-color: var(--color-warning); background: #fffbe5;}
.oj-message.oj-info    { border-left-color: var(--color-info); background: #e9f1fa;}
/* ======= 分页 ======= */
.oj-pagination {
  margin: 2em auto 1em auto; text-align: center;
}
.oj-pagination .oj-page {
  display: inline-block; padding: .36em .85em; border-radius: var(--radius); color: var(--color-primary); background: #fff;
  margin: 0 .18em; text-decoration: none; font-weight: 600; border: 1px solid #d8e1fa; cursor: pointer; transition: background .15s, color .15s, filter .15s;
}
.oj-pagination .oj-page.active,
.oj-pagination .oj-page:focus,
.oj-pagination .oj-page:hover {
  background: var(--color-primary); color: #fff; outline: 2px solid var(--color-accent);
}
/* ======= 加载动画 ======= */
.oj-loading-spinner svg { display: block; margin: 0 auto;}
::-webkit-input-placeholder { color: #aaa;}
::-moz-placeholder { color: #aaa;}
:-ms-input-placeholder { color: #aaa;}
::placeholder { color: #aaa;}
    `;
    document.head.appendChild(style);
  }
})();

// OpenJSWUI组件
window.OpenJSWUI = {
  // 顶部导航栏（支持logo、菜单、搜索）
  navbar({ logo = "OpenJSW", menus = [], search = false }) {
    return `
      <nav class="oj-navbar">
        <a class="oj-nav-logo" href="/">${logo}</a>
        <div class="oj-nav-menu">
          ${menus.map(item => `<a href="${item.href||'#'}" ${item.active?'class="active"':''}>${item.name}</a>`).join('')}
        </div>
        ${search ? `
        <form class="oj-nav-search" onsubmit="return false">
          <div class="oj-search-box">
            <input type="text" class="oj-search-input" placeholder="搜索组件…" aria-label="搜索" id="oj-search-input"/>
            <span class="oj-search-icon">🔍</span>
          </div>
        </form>
        ` : ''}
      </nav>
    `;
  },
  // 头部（极简，兼容老写法）
  header(title = "开放技术网") {
    return `
      <header class="oj-header">
        <div class="oj-header-inner">
          <a href="/" class="oj-logo" aria-label="首页">OpenJSW</a>
          <span class="oj-header-title">${title}</span>
        </div>
      </header>`;
  },
  // 侧边菜单栏
  sider({ items = [], active = "" }) {
    return `
      <aside class="oj-sider">
        <ul class="oj-menu-list">
          ${items.map(it => `<li class="${active===it.key?'active':''}" data-key="${it.key}">${it.name}</li>`).join('')}
        </ul>
      </aside>
    `;
  },
  // 页脚
  footer() {
    return `<footer class="oj-footer">© 2024 开放技术网 | <a href="https://openjsw.net" target="_blank" rel="noopener">openjsw.net</a></footer>`;
  },
  // 表单
  form({ action = "#", fields = [], btn = "提交" } = {}) {
    return `
      <form class="oj-form" action="${action}" method="post" autocomplete="on">
        ${fields.map(f => `
          <label>
            <span>${f.label}</span>
            <input type="${f.type || 'text'}" name="${f.name}" placeholder="${f.placeholder||''}"
