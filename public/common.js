// public/common.js
document.addEventListener('click', function(e) {
  if (e.target.matches('.js-alert')) {
    alert(e.target.getAttribute('data-msg') || '按钮被点击！');
  }
});
// 语言切换组件：支持键盘和鼠标
document.addEventListener('click', function(e) {
  // 打开/关闭选项
  if (e.target.closest('.lang-switcher')) {
    const ls = e.target.closest('.lang-switcher');
    ls.classList.toggle('open');
    e.stopPropagation();
  } else {
    // 点击外部自动关闭
    document.querySelectorAll('.lang-switcher.open').forEach(ls => ls.classList.remove('open'));
  }
});
// 切换语言
document.addEventListener('click', function(e) {
  if (e.target.matches('.lang-switcher__option')) {
    const lang = e.target.getAttribute('data-lang');
    // 伪示例：你可以换成实际切换逻辑，如 window.location.search = '?lang='+lang;
    showToast('切换到: ' + (lang === 'en' ? 'English' : '简体中文'));
    document.querySelectorAll('.lang-switcher__option').forEach(opt=>{
      opt.classList.toggle('active', opt.getAttribute('data-lang')===lang);
    });
    // 关闭菜单
    e.target.closest('.lang-switcher').classList.remove('open');
  }
});

