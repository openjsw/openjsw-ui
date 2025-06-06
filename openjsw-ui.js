// openjsw-ui.js

// 自动注入样式
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
body {
  background: var(--color-bg);
  color: var(--text);
  font-family: 'Inter', 'Segoe UI', Arial, sans-serif;
  margin: 0;
  min-height: 100vh;
}
.oj-header {
  background: #fff;
  box-shadow: var(--shadow);
  padding: 0.7em 0;
  margin-bottom: 2em;
}
@media (prefers-color-scheme: dark) {
  .oj-header { background: #23272a; }
}
.oj-header-inner {
  max-width: 900px;
  margin: auto;
  display: flex;
  align-items: center;
}
.oj-logo {
  font-weight: bold;
  font-size: 1.3em;
  color: var(--color-primary);
  text-decoration: none;
  margin-right: 1.5em;
}
.oj-header-title {
  font-size: 1.05em;
  color: #555;
}
.oj-footer {
  text-align: center;
  padding: 2em 0 1em 0;
  color: #888;
  font-size: .95em;
  background: none;
}
.oj-btn {
  display: inline-block;
  border: none;
  border-radius: var(--radius);
  padding: 0.5em 1.2em;
  background: var(--color-primary);
  color: #fff;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.15s, color 0.15s, filter 0.15s;
  box-shadow: var(--shadow);
  outline: none;
  margin-top: 1em;
}
.oj-btn:hover { filter: brightness(0.92); }
.oj-btn:focus, .oj-btn:focus-visible {
  outline: 2.5px solid var(--color-accent);
  outline-offset: 2px;
  box-shadow: 0 0 0 3px #00c2ff22;
}
.oj-btn.oj-success { background: var(--color-success); }
.oj-btn.oj-danger  { background: var(--color-error); }
.oj-btn.oj-warning { background: var(--color-warning); color: #222; }
.oj-card {
  background: #fff;
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  padding: 1.5em 1.8em;
  margin: 1.5em auto;
  max-width: 600px;
}
@media (prefers-color-scheme: dark) {
  .oj-card { background: #23272a; }
}
.oj-title {
  font-size: 1.5em;
  font-weight: bold;
  margin-bottom: 0.7em;
}
.oj-form label {
  display: block;
  margin-bottom: 1em;
  color: var(--color-secondary);
}
.oj-form input,
.oj-form select,
.oj-form textarea {
  width: 100%;
  box-sizing: border-box;
  border: 1px solid var(--color-border);
  border-radius: var(--radius);
  padding: .45em .8em;
  font-size: 1em;
  margin-top: .25em;
  background: #f9fafc;
  color: var(--color-secondary);
  transition: border .18s;
}
@media (prefers-color-scheme: dark) {
  .oj-form input, .oj-form select, .oj-form textarea { background: #23272a; color: #ededed;}
}
.oj-form input:focus,
.oj-form select:focus,
.oj-form textarea:focus {
  outline: 2.5px solid var(--color-accent);
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px #00c2ff22;
}
.oj-message {
  border-radius: var(--radius);
  padding: 1em 1.2em;
  margin: 1em 0;
  font-size: 1em;
  color: #222;
  box-shadow: 0 1px 4px #0001;
  border-left: 5px solid var(--color-info);
  background: #e9f1fa;
}
.oj-message.oj-success { border-left-color: var(--color-success); background: #e9f9f0; }
.oj-message.oj-danger  { border-left-color: var(--color-error); background: #f9e9e9; }
.oj-message.oj-warning { border-left-color: var(--color-warning); background: #fffbe5; }
.oj-message.oj-info    { border-left-color: var(--color-info);   background: #e9f1fa; }
.oj-pagination {
  margin: 2em auto 1em auto;
  text-align: center;
}
.oj-pagination .oj-page {
  display: inline-block;
  padding: .36em .85em;
  border-radius: var(--radius);
  color: var(--color-primary);
  background: #fff;
  margin: 0 .18em;
  text-decoration: none;
  font-weight: 600;
  border: 1px solid #d8e1fa;
  cursor: pointer;
  transition: background .15s, color .15s, filter .15s;
}
.oj-pagination .oj-page.active,
.oj-pagination .oj-page:focus,
.oj-pagination .oj-page:hover {
  background: var(--color-primary);
  color: #fff;
  outline: 2px solid var(--color-accent);
}
@media (prefers-color-scheme: dark) {
  .oj-pagination .oj-page { background: #23272a; }
}
.oj-loading-spinner svg {
  display: block;
  margin: 0 auto;
}
::-webkit-input-placeholder { color: #aaa; }
::-moz-placeholder { color: #aaa; }
:-ms-input-placeholder { color: #aaa; }
::placeholder { color: #aaa; }
    `;
    document.head.appendChild(style);
  }
})();

// OpenJSWUI组件
window.OpenJSWUI = {
  // 头部
  header(title = "开放技术网") {
    return `
      <header class="oj-header">
        <div class="oj-header-inner">
          <a href="/" class="oj-logo" aria-label="首页">OpenJSW</a>
          <span class="oj-header-title">${title}</span>
        </div>
      </header>`;
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
          </label>`).join('')}
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
