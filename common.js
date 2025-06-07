// openjsw v1.0 comment.js / common.js

// DOM Ready
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
    bottom: '48px',
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
  setTimeout(() => { toast.style.opacity = 1; }, 30);
  setTimeout(() => {
    toast.style.opacity = 0;
    setTimeout(() => toast.remove(), 280);
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

// oj-icon自动适配亮暗色（可选，SVG使用currentColor即可自动跟随主题色）

// 移动端菜单弹窗支持
function ojOpenMenu() {
  document.getElementById('oj-mobile-menu').classList.add('active');
  document.getElementById('oj-mobile-mask').style.display = 'block';
  document.body.style.overflow = 'hidden';
}
function ojCloseMenu() {
  document.getElementById('oj-mobile-menu').classList.remove('active');
  document.getElementById('oj-mobile-mask').style.display = 'none';
  document.body.style.overflow = '';
}
function ojToggleMenu() {
  const menu = document.getElementById('oj-mobile-menu');
  if (menu.classList.contains('active')) ojCloseMenu();
  else ojOpenMenu();
}
ojReady(() => {
  // 菜单按钮/遮罩点击关闭
  let btn = document.getElementById('oj-menu-btn');
  let mask = document.getElementById('oj-mobile-mask');
  if (btn) btn.onclick = ojToggleMenu;
  if (mask) mask.onclick = ojCloseMenu;
  // esc 关闭
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') ojCloseMenu();
  });
});

// 导出全局
window.ojReady = ojReady;
window.ojToast = ojToast;
window.ojCopy = ojCopy;

// oj-copy
ojReady(() => {
  document.querySelectorAll('.oj-copy[data-copy]').forEach(btn => {
    btn.addEventListener('click', () => ojCopy(btn.getAttribute('data-copy')));
  });
});

// 主题顺序
const THEME_SEQ = ['light', 'dark', 'auto'];
const THEME_ICONS = { light: '☀️', dark: '🌙', auto: '🖥️' };

function getNextTheme(cur) {
  const idx = THEME_SEQ.indexOf(cur);
  return THEME_SEQ[(idx + 1) % THEME_SEQ.length];
}
function updateThemeBtn(theme) {
  const icon = document.getElementById('oj-theme-icon');
  if (icon) icon.textContent = THEME_ICONS[theme];
}
// 应用主题
function applyTheme(mode) {
  const body = document.body;
  const html = document.documentElement;
  body.classList.remove('oj-theme-dark');
  html.classList.remove('oj-theme-dark');
  if (mode === 'dark') {
    body.classList.add('oj-theme-dark');
    html.classList.add('oj-theme-dark');
    localStorage.setItem('oj-theme', 'dark');
  } else if (mode === 'light') {
    localStorage.setItem('oj-theme', 'light');
  } else {
    localStorage.removeItem('oj-theme');
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      body.classList.add('oj-theme-dark');
      html.classList.add('oj-theme-dark');
    }
  }
  updateThemeBtn(mode);
}

// 主题按钮及自动切换
ojReady(() => {
  let theme = localStorage.getItem('oj-theme') || 'auto';
  applyTheme(theme);
  let themeBtn = document.getElementById('oj-theme-toggle');
  if (themeBtn) {
    themeBtn.onclick = () => {
      let now = localStorage.getItem('oj-theme') || 'auto';
      let next = getNextTheme(now);
      applyTheme(next);
    };
  }
  // 系统主题变化自动跟随
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if(!localStorage.getItem('oj-theme')) applyTheme('auto');
  });
});

// 语言切换按钮自适应选中态（若有多语言按钮，自动高亮）
ojReady(() => {
  let curLang = (document.documentElement.lang || '').toLowerCase();
  document.querySelectorAll('.oj-lang-btn').forEach(btn => {
    let btnLang = (btn.textContent || btn.innerText || '').toLowerCase();
    if (btnLang.includes('en') && curLang.startsWith('en')) btn.classList.add('selected');
    if (btnLang.includes('简') && curLang.startsWith('zh')) btn.classList.add('selected');
  });
});

