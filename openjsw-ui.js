// openjsw-ui.js
// OpenJSW 组件UI库：自动注入CSS，提供navbar、sider、footer、form、pagination、message、loading等组件。

// 自动注入全局样式
(function () {
  if (!document.getElementById('oj-ui-style')) {
    const style = document.createElement('style');
    style.id = 'oj-ui-style';
    style.innerHTML = `
:root {
  --color-primary: #0066ff;
  --color-secondary: #2b2b2b;
  --color-bg: #fff;
  --color-accent: #00c2ff;
  --color-success: #22c55e;
  --color-error: #ff3a44;
  --color-warning: #ffbe2e;
  --color-info: #4ea8ff;
  --color-border: #e3e5ea;
  --radius: 8px;
  --shadow: 0 2px 12px #0001;
  --text: var(--color-secondary);
}
@media (prefers-color-scheme: dark) {
  :root {
    --color-bg: #181b1e;
    --color-secondary: #ededed;
    --color-border: #31363a;
    --text: #ededed;
  }
}
body { background: var(--color-bg); color: var(--text); font-family: 'Inter', 'Segoe UI', Arial, sans-serif; margin: 0; min-height: 100vh;}
/* 顶部导航栏 */
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
/* 响应式侧边栏+收起 */
.oj-sider { width: 210px; background: #f8f9fb; border-right: 1px solid #ececec; min-height: 90vh; padding: 1.5em 0 1.5em 0;
  box-shadow: 1px 0 6px #0001; position: sticky; top: 56px; transition: width 0.22s;}
.oj-sider-collapsed { width: 52px !important; min-width: 52px !important; overflow-x: hidden; }
.oj-sider-toggle {
  position: absolute; top: 18px; right: -18px; background: #fff; border-radius: 50%; width: 32px; height: 32px;
  display: flex; align-items: center; justify-content: center; box-shadow: 0 1px 4px #0002; cursor: pointer; border: 1px solid #eee; z-index: 2;
}
.oj-sider-collapsed .oj-menu-list li span { display: none; }
.oj-menu-list { list-style: none; margin: 0; padding: 0;}
.oj-menu-list li { padding: .75em 2em; color: #2b2b2b; cursor: pointer; border-left: 3px solid transparent; font-size: 1.06em; white-space: nowrap; display: flex; align-items: center;}
.oj-menu-list li.active, .oj-menu-list li:hover { background: #e6f2ff; color: var(--color-primary); border-left: 3px solid var(--color-primary);}
@media (max-width:900px) {.oj-sider{display:none;}}
.oj-main-content { max-width: 900px; margin: 0 auto; padding: 2em 1em 2em 1em;}
.oj-title { font-size: 1.55em; font-weight: bold; margin: 1.1em 0 1.2em;}
.oj-demo-block { background: #f9fafb; border-radius: 12px; padding: 2em 2em 1em 2em; margin-bottom: 2.5em; box-shadow: 0 1px 6px #0001;}
.oj-footer { text-align: center; color: #888; padding: 2.5em 1em 1em 1em; font-size: 1em; margin-top: 2em;}
.oj-btn {
  display: inline-block; border: none; border-radius: var(--radius); padding: 0.5em 1.2em; background: var(--color-primary); color: #fff;
  font-weight: 600; cursor: pointer; transition: background 0.15s, color 0.15s, filter 0.15s; box-shadow: var(--shadow); outline: none; margin-top: 1em;
}
.oj-btn:hover { filter: brightness(0.92);}
.oj-btn:focus, .oj-btn:focus-visible { outline: 2.5px solid var(--color-accent); outline-offset: 2px; box-shadow: 0 0 0 3px #00c2ff22;}
.oj-btn.oj-success { background: var(--color-success);}
.oj-btn.oj-danger  { background: var(--color-error);}
.oj-btn.oj-warning { background: var(--color-warning); color: #222;}
.oj-form label { display: block; margin-bottom: 1em; color: var(--color-secondary);}
.oj-form input, .oj-form select, .oj-form textarea {
  width: 100%; box-sizing: border-box; border: 1px solid var(--color-border); border-radius: var(--radius); padding: .45em .8em;
  font-size: 1em; margin-top: .25em; background: #f9fafc; color: var(--color-secondary); transition: border .18s;
}
.oj-form input:focus, .oj-form select:focus, .oj-form textarea:focus {
  outline: 2.5px solid var(--color-accent); border-color: var(--color-primary); box-shadow: 0 0 0 3px #00c2ff22;
}
.oj-message {
  border-radius: var(--radius); padding: 1em 1.2em; margin: 1em 0; font-size: 1em; color: #222; box-shadow: 0 1px 4px #0001; border-left: 5px solid var(--color-info);
  background: #e9f1fa;
}
.oj-message.oj-success { border-left-color: var(--color-success); background: #e9f9f0;}
.oj-message.oj-danger  { border-left-color: var(--color-error); background: #f9e9e9;}
.oj-message.oj-warning { border-left-color: var(--color-warning); background: #fffbe5;}
.oj-message.oj-info    { border-left-color: var(--color-info); background: #e9f1fa;}
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
.oj-loading-spinner svg { display: block; margin: 0 auto;}
::-webkit-input-placeholder { color: #aaa;}
::-moz-placeholder { color: #aaa;}
:-ms-input-placeholder { color: #aaa;}
::placeholder { color: #aaa;}
    `;
    document.head.appendChild(style);
  }
})();

// OpenJSWUI 组件对象
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
  // 头部（兼容老写法）
  header(title = "开放技术网") {
    return `
      <header class="oj-header">
        <div class="oj-header-inner">
          <a href="/" class="oj-logo" aria-label="首页">OpenJSW</a>
          <span class="oj-header-title">${title}</span>
        </div>
      </header>`;
  },
  // 侧边菜单栏，支持收起
  sider({ items = [], active = "", collapsed = false }) {
    return `
      <aside class="oj-sider${collapsed ? " oj-sider-collapsed" : ""}" id="oj-sider">
        <div class="oj-sider-toggle" id="oj-sider-toggle" title="展开/收起菜单">
          <svg width="22" height="22" viewBox="0 0 22 22"><rect width="18" height="3" x="2" y="5" rx="1.2"/><rect width="18" height="3" x="2" y="14" rx="1.2"/></svg>
        </div>
        <ul class="oj-menu-list">
          ${items.map(it => `<li class="${active===it.key?'active':''}" data-key="${it.key}"><span>${it.name}</span></li>`).join('')}
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
            <input type="${f.type || 'text'}" name="${f.name}" placeholder="${f.placeholder||''}" ${f.required?'required':''} aria-label="${f.label}" />
          </label>
        `).join('')}
        <button class="oj-btn" type="submit">${btn}</button>
      </form>
    `;
  },
  // 分页
  pagination({ page = 1, total = 1, onPage } = {}) {
    let html = '<div class="oj-pagination">';
    for (let i = 1; i <= total; ++i) {
      html += `<a href="#" class="oj-page${i==page?' active':''}" data-page="${i}" aria-label="第${i}页">${i}</a>`;
    }
    html += '</div>';
    setTimeout(() => {
      document.querySelectorAll('.oj-page').forEach(el => {
        el.onclick = e => {
          e.preventDefault();
          if (!el.classList.contains('active')) onPage && onPage(Number(el.dataset.page));
        };
        el.onkeyup = e => {
          if (['Enter', ' '].includes(e.key) && !el.classList.contains('active'))
            onPage && onPage(Number(el.dataset.page));
        }
        el.tabIndex = 0;
      });
    }, 10);
    return html;
  },
  // 消息提示
  message({ text, type = 'info', duration = 1800 }) {
    const msg = document.createElement('div');
    msg.className = `oj-message oj-${type}`;
    msg.innerText = text;
    Object.assign(msg.style, {
      position: 'fixed',
      left: '50%',
      top: '60px',
      transform: 'translateX(-50%)',
      zIndex: 9999,
      minWidth: '180px',
      textAlign: 'center',
      pointerEvents: 'none'
    });
    document.body.appendChild(msg);
    setTimeout(() => {
      msg.style.opacity = 0;
      setTimeout(() => msg.remove(), 400);
    }, duration);
  },
  // 加载动画
  loading(show = true, text = '加载中...') {
    if (show) {
      let l = document.createElement('div');
      l.id = 'oj-loading';
      l.style.cssText = 'position:fixed;left:0;top:0;width:100vw;height:100vh;background:#fff6;z-index:10000;display:flex;align-items:center;justify-content:center;';
      l.innerHTML = `
        <div style="padding:1.2em 2.2em;background:#fff;border-radius:10px;box-shadow:0 2px 16px #0002;text-align:center;">
          <div class="oj-loading-spinner" style="margin-bottom:10px;">
            <svg width="32" height="32" viewBox="0 0 32 32" aria-label="加载动画">
              <circle cx="16" cy="16" r="14" stroke="#246bfa" stroke-width="3" fill="none" stroke-dasharray="90" stroke-dashoffset="30">
                <animateTransform attributeName="transform" type="rotate" values="0 16 16;360 16 16" dur="0.8s" repeatCount="indefinite"/>
              </circle>
            </svg>
          </div>
          <div style="font-size:1.05em;color:#246bfa">${text}</div>
        </div>`;
      document.body.appendChild(l);
    } else {
      let l = document.getElementById('oj-loading');
      if (l) l.remove();
    }
  }
};
