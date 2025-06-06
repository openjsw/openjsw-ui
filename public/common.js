// public/common.js
document.addEventListener('click', function(e) {
  if (e.target.matches('.js-alert')) {
    alert(e.target.getAttribute('data-msg') || '按钮被点击！');
  }
});
// 辅助：根据浏览器语言自动选择高亮
function detectBrowserLang() {
  if (navigator.language.startsWith('en')) return 'en';
  if (navigator.language.startsWith('zh')) return 'zh';
  return 'zh';
}
function getCurrentLang() {
  return location.pathname.startsWith('/en/') ? 'en' : 'zh';
}
function getSwitchPath(targetLang) {
  const path = location.pathname;
  if (targetLang === 'en') {
    return path.startsWith('/en') ? path : '/en' + (path === '/' ? '' : path);
  } else {
    return path.replace(/^\/en/, '') || '/';
  }
}

window.addEventListener('DOMContentLoaded', function() {
  // 设置当前语言显示
  const curLang = getCurrentLang();
  document.querySelectorAll('.lang-switcher__current').forEach(span => {
    span.textContent = curLang === 'en' ? 'English' : '简体中文';
  });
  // 高亮当前选项
  document.querySelectorAll('.lang-switcher__option').forEach(opt => {
    const lang = opt.getAttribute('data-lang');
    opt.classList.toggle('active', lang === curLang);
  });
});

// 切换下拉
document.addEventListener('click', function(e) {
  const sw = e.target.closest('.lang-switcher');
  // 展开/收起菜单
  if (sw) {
    sw.classList.toggle('open');
    e.stopPropagation();
  } else {
    document.querySelectorAll('.lang-switcher.open').forEach(el => el.classList.remove('open'));
  }
});
// 选择语言
document.addEventListener('click', function(e) {
  if (e.target.matches('.lang-switcher__option')) {
    const lang = e.target.getAttribute('data-lang');
    if (lang !== getCurrentLang()) {
      location.href = getSwitchPath(lang);
    }
  }
});
