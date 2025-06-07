export async function onRequestGet(context) {
  return new Response(`<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <title>openjsw UI v0.5 主题/Header Demo</title>
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
    /* Header适配（主要样式在 style.css v0.5）*/
    .oj-header .oj-logo img { height: 26px; margin-right: 8px; }
    .oj-header .oj-logo { display: flex; align-items: center; gap: 6px;}
    .oj-header .oj-theme-btn {
      background: transparent;
      border: none;
      font-size: 1.4em;
      margin-left: 8px;
      padding: 2px 10px;
      cursor: pointer;
      transition: background 0.15s;
      border-radius: 8px;
      color: var(--oj-primary);
      outline: none;
    }
    .oj-header .oj-theme-btn:focus-visible {
      background: var(--oj-primary);
      color: var(--oj-primary-contrast);
      outline: 2px solid var(--oj-accent);
    }
    @media (max-width: 700px) {
      .oj-header { padding: 0 6vw;}
      .oj-header .oj-logo img { height: 22px;}
    }
    @media (max-width: 480px) {
      .oj-header { flex-direction: column; align-items: stretch; gap:0; padding:0 2vw;}
      .oj-header .oj-right { justify-content: flex-end; }
    }
  </style>
</head>
<body>
<div class="oj-header">
  <a href="/" class="oj-logo" aria-label="openjsw UI 首页">
    <img src="https://cdn.jsdelivr.net/gh/openjsw/openjsw-ui/logo.svg" alt="logo" />
    openjsw UI
  </a>
  <nav class="oj-nav" aria-label="主导航">
    <a href="/" class="active">首页</a>
    <a href="https://github.com/openjsw/openjsw-ui" target="_blank">GitHub</a>
    <a href="#components">组件</a>
  </nav>
  <div class="oj-right">
    <button class="oj-theme-btn" id="oj-theme-toggle"
      aria-label="切换主题" title="切换主题">
      <span id="oj-theme-icon">🌙</span>
    </button>
  </div>
</div>
<div class="oj-container">
  <div class="oj-card" style="margin-top:36px;">
    <div class="oj-title">openjsw UI v0.5 主题/Header/无障碍 Demo</div>
    <div class="oj-muted" id="a11y-desc" tabindex="0" aria-live="polite">
      样式库支持全局 header/主题切换，所有按钮、输入框、表单均焦点可见且对比度友好，适合前端后台、社区、开源官网、管理系统等场景。支持移动端自适应，极易扩展。
    </div>
  </div>
  <div class="oj-card demo-section" id="components">
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
    &copy; 2024 openjsw 开放技术 | <span class="oj-muted">v0.5 支持全局 header、响应式、主题切换与无障碍</span>
  </div>
</div>
<script src="/common.js"></script>
<script>
// 单按钮主题切换（light→dark→auto→light…）
const THEME_SEQ = ['light', 'dark', 'auto'];
const THEME_ICONS = { light: '☀️', dark: '🌙', auto: '🖥️' };
function getNextTheme(cur) {
  const idx = THEME_SEQ.indexOf(cur);
  return THEME_SEQ[(idx + 1) % THEME_SEQ.length];
}
function updateThemeBtn(theme) {
  document.getElementById('oj-theme-icon').textContent = THEME_ICONS[theme];
  let btn = document.getElementById('oj-theme-toggle');
  btn.setAttribute('aria-label', {
    light: '当前为明亮模式，点击切换为暗色模式',
    dark: '当前为暗色模式，点击切换为跟随系统',
    auto: '当前为跟随系统，点击切换为明亮模式'
  }[theme]);
}
function applyTheme(mode) {
  const body = document.body;
  body.classList.remove('oj-theme-dark');
  if (mode === 'dark') {
    body.classList.add('oj-theme-dark');
    localStorage.setItem('oj-theme', 'dark');
  } else if (mode === 'light') {
    localStorage.setItem('oj-theme', 'light');
  } else {
    localStorage.removeItem('oj-theme');
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      body.classList.add('oj-theme-dark');
    }
  }
  updateThemeBtn(mode);
}
document.addEventListener('DOMContentLoaded', () => {
  let theme = localStorage.getItem('oj-theme') || 'auto';
  applyTheme(theme);
  document.getElementById('oj-theme-toggle').onclick = () => {
    let now = localStorage.getItem('oj-theme') || 'auto';
    let next = getNextTheme(now);
    applyTheme(next);
  };
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if(!localStorage.getItem('oj-theme')){
      applyTheme('auto');
    }
  });
});
</script>
</body>
</html>`, {
    headers: { "content-type": "text/html; charset=UTF-8" }
  });
}
