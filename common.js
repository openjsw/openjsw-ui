// openjsw 通用脚本 v0.5

// 简单 domReady
function ojReady(fn) {
  if (document.readyState !== 'loading') fn();
  else document.addEventListener('DOMContentLoaded', fn);
}

// 基础 toast
function ojToast(msg, timeout = 2200) {
  let toast = document.createElement('div');
  toast.className = 'oj-toast';
  toast.textContent = msg;
  Object.assign(toast.style, {
    position: 'fixed',
    bottom: '42px',
    left: '50%',
    transform: 'translateX(-50%)',
    background: '#222d',
    color: '#fff',
    borderRadius: '10px',
    padding: '10px 22px',
    fontSize: '1rem',
    zIndex: 9999,
    opacity: 0,
    transition: 'opacity .2s'
  });
  document.body.appendChild(toast);
  setTimeout(() => { toast.style.opacity = 1; }, 50);
  setTimeout(() => {
    toast.style.opacity = 0;
    setTimeout(() => toast.remove(), 250);
  }, timeout);
}

// 复制文本到剪贴板
function ojCopy(text) {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(() => ojToast('已复制到剪贴板'));
  } else {
    let tmp = document.createElement('textarea');
    tmp.value = text;
    document.body.appendChild(tmp);
    tmp.select();
    document.execCommand('copy');
    tmp.remove();
    ojToast('已复制到剪贴板');
  }
}

// 导出到全局
window.ojReady = ojReady;
window.ojToast = ojToast;
window.ojCopy = ojCopy;

// 如果页面有 class="oj-copy" 且 data-copy
ojReady(function() {
  document.querySelectorAll('.oj-copy[data-copy]').forEach(btn => {
    btn.addEventListener('click', () => ojCopy(btn.getAttribute('data-copy')));
  });
});

// 主题顺序：light → dark → auto → light...
const THEME_SEQ = ['light', 'dark', 'auto'];
const THEME_ICONS = { light: '☀️', dark: '🌙', auto: '🖥️' };

function getNextTheme(cur) {
  const idx = THEME_SEQ.indexOf(cur);
  return THEME_SEQ[(idx + 1) % THEME_SEQ.length];
}

function updateThemeBtn(theme) {
  document.getElementById('oj-theme-icon').textContent = THEME_ICONS[theme];
}

function applyTheme(mode) {
  const body = document.body;
  body.classList.remove('oj-theme-dark');
  if (mode === 'dark') {
    body.classList.add('oj-theme-dark');
    localStorage.setItem('oj-theme', 'dark');
  } else if (mode === 'light') {
    localStorage.setItem('oj-theme', 'light');
  } else {
    localStorage.removeItem('oj-theme');
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      body.classList.add('oj-theme-dark');
    }
  }
  updateThemeBtn(mode);
}

document.addEventListener('DOMContentLoaded', () => {
  // 读取上次
  let theme = localStorage.getItem('oj-theme') || 'auto';
  applyTheme(theme);
  document.getElementById('oj-theme-toggle').onclick = () => {
    let now = localStorage.getItem('oj-theme') || 'auto';
    let next = getNextTheme(now);
    applyTheme(next);
  };
  // 系统主题变化时 auto 跟随
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if(!localStorage.getItem('oj-theme')){
      applyTheme('auto');
    }
  });
});
