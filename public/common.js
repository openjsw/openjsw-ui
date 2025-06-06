// public/common.js
document.addEventListener('click', function(e) {
  if (e.target.matches('.js-alert')) {
    alert(e.target.getAttribute('data-msg') || '按钮被点击！');
  }
});

