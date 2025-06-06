// public/common.js
document.addEventListener('click', function(e) {
  if (e.target.matches('.js-alert')) {
    alert(e.target.getAttribute('data-msg') || '按钮被点击！');
  }
});
document.addEventListener('click', function(e) {
        // 打开/关闭选项
  if (e.target.closest('.lang-switcher')) {
          const ls = e.target.closest('.lang-switcher');
          ls.classList.toggle('open');
          e.stopPropagation();
        } else {
          document.querySelectorAll('.lang-switcher.open').forEach(ls => ls.classList.remove('open'));
        }
      });
document.addEventListener('click', function(e) {
    if (e.target.matches('.lang-switcher__option')) {
          const lang = e.target.getAttribute('data-lang');
          const curLang = ${isEN ? '"en"' : '"zh"'};
    if (lang !== curLang) {
            location.href = '${getSwitchPath()}';
          }
        }
      });

