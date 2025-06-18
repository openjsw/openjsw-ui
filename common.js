// comont.js

// 1. Toast 弹窗功能
function showToast(type, msg, duration = 3400) {
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.setAttribute('role', type === 'error' ? 'alert' : 'status');
  toast.setAttribute('aria-live', type === 'error' ? 'assertive' : 'polite');
  toast.tabIndex = 0;

  let icon = '';
  if (type === 'error') icon = '❌ ';
  else if (type === 'info') icon = 'ℹ️ ';
  else if (type === 'success') icon = '✅ ';
  toast.innerHTML = icon + msg;

  document.body.appendChild(toast);
  toast.focus();

  setTimeout(() => {
    toast.classList.add('fadeout');
    setTimeout(() => toast.remove(), 350);
  }, duration);
}

// 2. note 区域动态插入（可选，用于页面提示）
function setNote(msg, type = 'note') {
  // type 可以是 'note' 或自定义，比如 'tip'。样式需配合CSS。
  let note = document.querySelector('.note-dynamic');
  if (!note) {
    note = document.createElement('div');
    note.className = 'note note-dynamic';
    const container = document.querySelector('.container');
    if (container) container.insertBefore(note, container.firstChild);
    else document.body.insertBefore(note, document.body.firstChild);
  }
  note.innerText = msg;
}

// 3. 移动端抽屉菜单功能（与页面结构配合）
document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.querySelector('.menu-btn');
  const drawer = document.querySelector('.drawer');
  if (menuBtn && drawer) {
    menuBtn.addEventListener('click', () => {
      drawer.classList.toggle('open');
      // 聚焦第一个链接
      if (drawer.classList.contains('open')) {
        const firstLink = drawer.querySelector('a');
        if (firstLink) firstLink.focus();
      }
    });
    // ESC 关闭菜单
    drawer.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        drawer.classList.remove('open');
        menuBtn.focus();
      }
    });
  }

  // 4. 可访问性增强：所有按钮回车触发
  document.body.addEventListener('keydown', (e) => {
    if (e.target.matches('button, [role="button"], .btn') && e.key === 'Enter') {
      e.target.click();
    }
  });

  // 示例：可以自动显示一次 info toast
  // showToast('info', '页面加载成功！');
});

// 5. 支持 toast 动画 fadeout
// 建议在CSS中加：
// .toast.fadeout { opacity: 0; transform: translateY(-30px); transition: all 0.3s; }
