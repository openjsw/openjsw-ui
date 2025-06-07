// openjsw 通用脚本 v0.1

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
