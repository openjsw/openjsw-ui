// public/common.js
document.addEventListener('click', function(e) {
  if (e.target.matches('.js-alert')) {
    alert(e.target.getAttribute('data-msg') || '按钮被点击！');
  }
});
function getCurrentLang() {
  // 你可以用实际路径判断，如 location.pathname
  if (location.pathname.startsWith('/en')) return 'en';
  return 'zh';
}
function getSwitchPath(targetLang) {
  if (targetLang === 'en') return '/en/';
  return '/';
}

window.addEventListener('DOMContentLoaded', function() {
  const curLang = getCurrentLang();
  document.querySelectorAll('.lang-switcher__current').forEach(span => {
    span.textContent = curLang === 'en' ? 'English' : '简体中文';
  });
  document.querySelectorAll('.lang-switcher__label').forEach(span => {
    span.textContent = curLang === 'en' ? 'Language' : '语言';
  });
  document.querySelectorAll('.lang-switcher__option').forEach(opt => {
    const lang = opt.getAttribute('data-lang');
    opt.classList.toggle('active', lang === curLang);
  });
});

document.addEventListener('click', function(e) {
  const sw = e.target.closest('.lang-switcher');
  if (sw) {
    sw.classList.toggle('open');
    e.stopPropagation();
  } else {
    document.querySelectorAll('.lang-switcher.open').forEach(el => el.classList.remove('open'));
  }
});
document.addEventListener('click', function(e) {
  if (e.target.matches('.lang-switcher__option')) {
    const lang = e.target.getAttribute('data-lang');
    if (lang !== getCurrentLang()) {
      location.href = getSwitchPath(lang);
    }
  }
});
