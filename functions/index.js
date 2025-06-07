export async function onRequestGet(context) {
  return new Response(`<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <title>openjsw UI 样式库 v0.4 Demo</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="/style.css">
  <style>
    pre, code {
      font-family: SFMono-Regular, Consolas, monospace;
      background: #f4f7fa;
      border-radius: 5px;
      padding: 8px 12px;
      color: #485169;
      font-size: 0.97em;
      white-space: pre-wrap;
      word-break: break-all;
    }
    pre { margin: 8px 0 0 0; overflow-x: auto; }
    .demo-label { margin-bottom:8px; font-weight:600; font-size:1.1em;}
    .demo-section { margin-bottom:38px;}
    .theme-switcher {
      position: fixed; top: 22px; right: 22px; z-index: 50;
    }
    .theme-switcher button {
      background: var(--oj-primary);
      color: var(--oj-primary-contrast);
      border: none;
      border-radius: 8px;
      padding: 7px 17px;
      font-size: 1em;
      cursor: pointer;
      box-shadow: 0 2px 8px rgba(16,30,54,0.06);
      margin-left: 6px;
    }
    .theme-switcher button:focus-visible {
      outline: 2px solid var(--oj-accent);
    }
    /* 高对比演示区域 */
    .contrast-demo {
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
      margin-bottom: 0.6em;
    }
    .contrast-demo span {
      display:inline-block; border-radius:8px; padding:6px 14px;
      font-weight:600; font-size:1em;
      margin-bottom:4px;
    }
    .contrast-primary { background: var(--oj-primary); color: var(--oj-primary-contrast);}
    .contrast-accent  { background: var(--oj-accent); color: var(--oj-accent-contrast);}
    .contrast-success { background: var(--oj-success); color: var(--oj-success-contrast);}
    .contrast-error   { background: var(--oj-error); color: var(--oj-error-contrast);}
    .contrast-warning { background: var(--oj-warning); color: var(--oj-warning-contrast);}
    @media (max-width: 600px) {
      .theme-switcher { position: static; text-align: right; margin-bottom: 12px;}
    }
  </style>
</head>
<body>
<div class="theme-switcher" aria-label="主题切换区">
  <button onclick="switchTheme('light')" aria-pressed="false" aria-label="切换到明亮模式">☀️ 明亮</button>
  <button onclick="switchTheme('dark')" aria-pressed="false" aria-label="切换到暗色模式">🌙 暗色</button>
  <button onclick="switchTheme('auto')" aria-pressed="false" aria-label="自动跟随系统">🖥️ 跟随系统</button>
</div>
<div class="oj-container">
  <div class="oj-card">
    <div class="oj-title">openjsw UI v0.4 主题/无障碍 Demo</div>
    <div class="oj-muted" id="a11y-desc" tabindex="0" aria-live="polite">
      本样式库支持多主题/自定义色板/暗色模式，所有按钮和表单元素都实现了焦点可见、色彩对比度达标，辅助屏幕阅读器和键盘用户无障碍访问。
    </div>
  </div>

  <div class="oj-card demo-section">
    <div class="demo-label">主题色板对比（Theme Colors Contrast）</div>
    <div class="contrast-demo">
      <span class="contrast-primary">主色 Primary</span>
      <span class="contrast-accent">强调色 Accent</span>
      <span class="contrast-success">成功 Success</span>
      <span class="contrast-error">错误 Error</span>
      <span class="contrast-warning">警告 Warning</span>
    </div>
    <div class="oj-muted">
      使用 <code>var(--oj-primary)</code> 等变量控制主题色，所有主色上的文本都有高对比度。
    </div>
  </div>

  <div class="oj-card demo-section">
    <div class="demo-label">按钮/Button <span class="oj-badge">a11y</span></div>
    <button class="oj-btn" onclick="ojToast('你点击了主按钮！')" aria-label="主操作按钮">主按钮</button>
    <button class="oj-btn oj-copy" data-copy="OpenJSW!" aria-label="复制内容按钮">一键复制</button>
    <pre><code>&lt;button class="oj-btn"&gt;主按钮&lt;/button&gt;
&lt;button class="oj-btn oj-copy" data-copy="内容"&gt;一键复制&lt;/button&gt;</code></pre>
  </div>

  <div class="oj-card demo-section">
    <div class="demo-label">输入框/选择框（Input/Select）<span class="oj-badge">a11y</span></div>
    <label for="demo-input" style="font-weight:500">输入内容</label>
    <input id="demo-input" class="oj-input" name="demo-input" placeholder="请输入内容" aria-label="示例输入框">
    <label for="demo-select" style="font-weight:500; margin-left:10px;">选择</label>
    <select id="demo-select" class="oj-select" aria-label="示例选择框">
      <option>请选择</option>
      <option>选项 A</option>
      <option>选项 B</option>
    </select>
    <pre><code>&lt;label for="demo-input"&gt;输入内容&lt;/label&gt;
&lt;input id="demo-input" class="oj-input" name="demo-input" placeholder="请输入内容"&gt;
&lt;label for="demo-select"&gt;选择&lt;/label&gt;
&lt;select id="demo-select" class="oj-select"&gt;...&lt;/select&gt;</code></pre>
  </div>

  <div class="oj-card demo-section">
    <div class="demo-label">提示框（Alert）</div>
    <div class="oj-alert" role="status">普通提示信息</div>
    <div class="oj-alert oj-alert-success" role="status">操作成功的提示</div>
    <div class="oj-alert oj-alert-error" role="status">错误提示信息</div>
    <div class="oj-alert oj-alert-warning" role="status">警告提示信息</div>
    <pre><code>&lt;div class="oj-alert"&gt;普通提示&lt;/div&gt;
&lt;div class="oj-alert oj-alert-success"&gt;成功提示&lt;/div&gt;
&lt;div class="oj-alert oj-alert-error"&gt;错误提示&lt;/div&gt;
&lt;div class="oj-alert oj-alert-warning"&gt;警告提示&lt;/div&gt;</code></pre>
  </div>

  <div class="oj-card demo-section">
    <div class="demo-label">标签/Tag &amp; 徽章/Badge</div>
    <span class="oj-tag">普通标签</span>
    <span class="oj-tag oj-tag-primary">主标签</span>
    <span class="oj-tag oj-tag-accent">强调标签</span>
    <span class="oj-badge">8</span>
    <pre><code>&lt;span class="oj-tag"&gt;普通标签&lt;/span&gt;
&lt;span class="oj-tag oj-tag-primary"&gt;主标签&lt;/span&gt;
&lt;span class="oj-tag oj-tag-accent"&gt;强调标签&lt;/span&gt;
&lt;span class="oj-badge"&gt;8&lt;/span&gt;</code></pre>
  </div>

  <div class="oj-card demo-section">
    <div class="demo-label">表格（Table）</div>
    <table class="oj-table" aria-label="示例表格">
      <thead>
        <tr><th>姓名</th><th>角色</th><th>进度</th></tr>
      </thead>
      <tbody>
        <tr><td>小明</td><td>开发</td><td>80%</td></tr>
        <tr><td>小红</td><td>设计</td><td>100%</td></tr>
        <tr><td>张三</td><td>测试</td><td>60%</td></tr>
      </tbody>
    </table>
    <pre><code>&lt;table class="oj-table"&gt;
  &lt;thead&gt;&lt;tr&gt;&lt;th&gt;姓名&lt;/th&gt;&lt;th&gt;角色&lt;/th&gt;&lt;th&gt;进度&lt;/th&gt;&lt;/tr&gt;&lt;/thead&gt;
  &lt;tbody&gt;
    &lt;tr&gt;&lt;td&gt;小明&lt;/td&gt;&lt;td&gt;开发&lt;/td&gt;&lt;td&gt;80%&lt;/td&gt;&lt;/tr&gt;
    ...
  &lt;/tbody&gt;
&lt;/table&gt;</code></pre>
  </div>

  <div class="oj-card demo-section">
    <div class="demo-label">加载动画（Spinner）</div>
    <span class="oj-spinner" aria-label="加载中"></span>
    <pre><code>&lt;span class="oj-spinner"&gt;&lt;/span&gt;</code></pre>
  </div>

  <div class="oj-footer" style="margin-top:60px;">
    &copy; 2024 openjsw 开放技术 | <span class="oj-muted">支持多主题、暗色、自定义色板与无障碍</span>
  </div>
</div>
<script src="/common.js"></script>
<script>
function switchTheme(mode) {
  const body = document.body;
  body.classList.remove('oj-theme-dark');
  if (mode === 'dark') {
    body.classList.add('oj-theme-dark');
    localStorage.setItem('oj-theme', 'dark');
  } else if (mode === 'light') {
    // 默认就是明亮模式
    localStorage.setItem('oj-theme', 'light');
  } else {
    // auto: 跟随系统
    localStorage.removeItem('oj-theme');
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      body.classList.add('oj-theme-dark');
    }
  }
}
(function autoTheme(){
  const theme = localStorage.getItem('oj-theme');
  if(theme === 'dark'){
    document.body.classList.add('oj-theme-dark');
  }else if(theme === 'light'){
    document.body.classList.remove('oj-theme-dark');
  }else{
    if(window.matchMedia('(prefers-color-scheme: dark)').matches){
      document.body.classList.add('oj-theme-dark');
    }
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
      if(!localStorage.getItem('oj-theme')){
        if(e.matches) document.body.classList.add('oj-theme-dark');
        else document.body.classList.remove('oj-theme-dark');
      }
    });
  }
})();
</script>
</body>
</html>`, {
    headers: { "content-type": "text/html; charset=UTF-8" }
  });
}
