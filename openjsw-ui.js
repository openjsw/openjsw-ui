// openjsw-ui.js v2024 静态版
window.OpenJSWUI = {
  header(title = "开放技术网") {
    return `
      <header class="oj-header">
        <div class="oj-header-inner">
          <a href="/" class="oj-logo" aria-label="首页">OpenJSW</a>
          <span class="oj-header-title">${title}</span>
        </div>
      </header>`;
  },
  footer() {
    return `
      <footer class="oj-footer">
        <div>© 2024 开放技术网 | <a href="https://openjsw.net" target="_blank" rel="noopener">openjsw.net</a></div>
      </footer>`;
  },
  form({ action = "#", fields = [], btn = "提交" } = {}) {
    // fields: [{label, name, type, required, placeholder}]
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
