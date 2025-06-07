/*!
 * openjsw 开放技术网 - 通用组件库 V0.1
 * 常用JS组件与工具函数
 * 依赖原生，无第三方库
 */

// 消息提示（自动消失） type: success | danger | warning | info
function ojMsg(msg, type = 'info', duration = 2200) {
  const dom = document.createElement('div');
  dom.className = 'oj-msg oj-msg-' + type;
  dom.innerText = msg;
  document.body.appendChild(dom);
  dom.style.position = 'fixed';
  dom.style.top = '48px';
  dom.style.left = '50%';
  dom.style.transform = 'translateX(-50%)';
  dom.style.zIndex = '99999';
  setTimeout(() => { dom.remove(); }, duration);
  return dom;
}

// 简单确认框（callback为确定回调）
function ojConfirm(msg, callback) {
  let mask = document.createElement('div');
  mask.className = 'oj-mask';
  mask.innerHTML = `
    <div class="oj-mask-content">
      <div style="margin-bottom:16px">${msg}</div>
      <button class="oj-btn oj-btn-primary" id="oj-confirm-ok">确定</button>
      <button class="oj-btn" id="oj-confirm-cancel">取消</button>
    </div>
  `;
  document.body.appendChild(mask);
  mask.querySelector('#oj-confirm-ok').onclick = () => {
    callback(true);
    mask.remove();
  };
  mask.querySelector('#oj-confirm-cancel').onclick = () => {
    callback(false);
    mask.remove();
  };
}

// 加载遮罩
function ojLoading(show, text = '加载中...') {
  let mask = document.getElementById('oj-loading-mask');
  if (show) {
    if (!mask) {
      mask = document.createElement('div');
      mask.className = 'oj-mask';
      mask.id = 'oj-loading-mask';
      mask.innerHTML = `<div class="oj-mask-content">${text}</div>`;
      document.body.appendChild(mask);
    }
  } else if (mask) {
    mask.remove();
  }
}

// Tabs组件切换（使用 .oj-tabs, .oj-tab, .oj-tab-content结构）
function ojTabs(selector) {
  const tabs = document.querySelectorAll(selector + ' .oj-tab');
  const contents = document.querySelectorAll(selector + ' .oj-tab-content');
  tabs.forEach((tab, idx) => {
    tab.onclick = function () {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      contents.forEach((c, cidx) => {
        c.style.display = cidx === idx ? 'block' : 'none';
      });
    };
  });
  // 初始化显示第一个tab内容
  if (tabs[0]) tabs[0].click();
}

// 复制到剪贴板
function ojCopy(text) {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text);
    ojMsg('已复制', 'success');
  } else {
    // 兼容性处理
    let ta = document.createElement('textarea');
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    ojMsg('已复制', 'success');
  }
}

// 模块导出（支持ESM和全局用法）
window.openjsw = {
  ojMsg, ojConfirm, ojLoading, ojTabs, ojCopy
};
