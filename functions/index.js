export async function onRequestGet(context) {
  return new Response(`<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <title>openjsw UI v0.6 多主题/多语言 Demo</title>
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
    .oj-header .oj-logo img { height: 26px; margin-right: 8px; }
    .oj-header .oj-logo { display: flex; align-items: center; gap: 6px;}
    @media (max-width: 700px) {
      .oj-header .oj-logo img { height: 22px;}
    }
  </style>
</head>
<body>
<div class="oj-header">
  <a href="/" class="oj-logo" aria-label="openjsw UI 首页">
    <img src="https://cdn.jsdelivr.net/gh/openjsw/openjsw-ui/logo.svg" alt="logo" />
    <span id="oj-title">openjsw UI</span>
  </a>
  <nav class="oj-nav" aria-label="主导航">
    <a href="#" class="active" id="nav-home">首页</a>
    <a href="https://github.com/openjsw/openjsw-ui" target="_blank" id="nav-github">GitHub</a>
    <a href="#components" id="nav-components">组件</a>
  </nav>
  <div class="oj-tool">
    <button class="oj-theme-btn" id="oj-theme-toggle" aria-label="切换主题" title="切换主题">
      <span id="oj-theme-icon">🌙</span>
    </button>
    <button class="oj-lang-btn" id="oj-lang-btn" aria-label="切换语言" title="切换语言">
      <span id="oj-lang-icon">🌏</span>
      <span id="oj-lang-label">简体中文</span>
    </button>
  </div>
</div>
<div class="oj-container">
  <div class="oj-card" style="margin-top:36px;">
    <div class="oj-title" id="demo-title">openjsw UI v0.6 多主题/多语言/无障碍 Demo</div>
    <div class="oj-muted" id="demo-desc" tabindex="0" aria-live="polite">
      <span id="desc-header">本页演示 openjsw UI v0.6 样式库，包含全局 header（头部）、oj-nav（主导航）、oj-tool（右侧工具栏），支持主题/语言一键切换，所有组件无障碍与响应式自适应。</span>
    </div>
  </div>
  <div class="oj-card demo-section" id="components">
    <div class="demo-label" id="label-theme">主题色板对比（Theme Colors Contrast）</div>
    <div class="contrast-demo">
      <span class="contrast-primary" id="theme-primary">主色 Primary</span>
      <span class="contrast-accent" id="theme-accent">强调色 Accent</span>
      <span class="contrast-success" id="theme-success">成功 Success</span>
      <span class="contrast-error" id="theme-error">错误 Error</span>
      <span class="contrast-warning" id="theme-warning">警告 Warning</span>
    </div>
    <div class="oj-muted" id="desc-theme">
      使用 <code>var(--oj-primary)</code> 等变量控制主题色，所有主色上的文本都有高对比度。
    </div>
  </div>
  <div class="oj-card demo-section">
    <div class="demo-label" id="label-btn">按钮/Button <span class="oj-badge">a11y</span></div>
    <button class="oj-btn" onclick="ojToast('你点击了主按钮！')" aria-label="主操作按钮" id="demo-btn-main">主按钮</button>
    <button class="oj-btn oj-copy" data-copy="OpenJSW!" aria-label="复制内容按钮" id="demo-btn-copy">一键复制</button>
    <pre><code>&lt;button class="oj-btn"&gt;主按钮&lt;/button&gt;
&lt;button class="oj-btn oj-copy" data-copy="内容"&gt;一键复制&lt;/button&gt;</code></pre>
  </div>
  <div class="oj-card demo-section">
    <div class="demo-label" id="label-input">输入框/选择框（Input/Select）<span class="oj-badge">a11y</span></div>
    <label for="demo-input" style="font-weight:500" id="input-label">输入内容</label>
    <input id="demo-input" class="oj-input" name="demo-input" placeholder="请输入内容" aria-label="示例输入框">
    <label for="demo-select" style="font-weight:500; margin-left:10px;" id="select-label">选择</label>
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
    <div class="demo-label" id="label-alert">提示框（Alert）</div>
    <div class="oj-alert" role="status" id="alert-normal">普通提示信息</div>
    <div class="oj-alert oj-alert-success" role="status" id="alert-success">操作成功的提示</div>
    <div class="oj-alert oj-alert-error" role="status" id="alert-error">错误提示信息</div>
    <div class="oj-alert oj-alert-warning" role="status" id="alert-warning">警告提示信息</div>
    <pre><code>&lt;div class="oj-alert"&gt;普通提示&lt;/div&gt;
&lt;div class="oj-alert oj-alert-success"&gt;成功提示&lt;/div&gt;
&lt;div class="oj-alert oj-alert-error"&gt;错误提示&lt;/div&gt;
&lt;div class="oj-alert oj-alert-warning"&gt;警告提示&lt;/div&gt;</code></pre>
  </div>
  <div class="oj-card demo-section">
    <div class="demo-label" id="label-tag">标签/Tag &amp; 徽章/Badge</div>
    <span class="oj-tag" id="tag-normal">普通标签</span>
    <span class="oj-tag oj-tag-primary" id="tag-primary">主标签</span>
    <span class="oj-tag oj-tag-accent" id="tag-accent">强调标签</span>
    <span class="oj-badge" id="badge-demo">8</span>
    <pre><code>&lt;span class="oj-tag"&gt;普通标签&lt;/span&gt;
&lt;span class="oj-tag oj-tag-primary"&gt;主标签&lt;/span&gt;
&lt;span class="oj-tag oj-tag-accent"&gt;强调标签&lt;/span&gt;
&lt;span class="oj-badge"&gt;8&lt;/span&gt;</code></pre>
  </div>
  <div class="oj-card demo-section">
    <div class="demo-label" id="label-table">表格（Table）</div>
    <table class="oj-table" aria-label="示例表格" id="table-demo">
      <thead>
        <tr><th id="table-name">姓名</th><th id="table-role">角色</th><th id="table-progress">进度</th></tr>
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
    <div class="demo-label" id="label-spinner">加载动画（Spinner）</div>
    <span class="oj-spinner" aria-label="加载中"></span>
    <pre><code>&lt;span class="oj-spinner"&gt;&lt;/span&gt;</code></pre>
  </div>
  <div class="oj-footer" style="margin-top:60px;">
    &copy; 2024 openjsw 开放技术 | <span class="oj-muted" id="footer-note">v0.6 支持全局 header、响应式、主题/多语言切换与无障碍</span>
  </div>
</div>
<script>
// 主题切换按钮
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
  btn.setAttribute('aria-pressed', theme === 'light' || theme === 'dark');
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
  // 主题切换
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
  // 语言切换
  const LANG_SEQ = ['zh', 'en'];
  const LANG_ICONS = { zh: "🌏", en: "🇬🇧" };
  const LANG_LABELS = { zh: "简体中文", en: "English" };
  // 页面各字段中英对照
  const LANG_TEXT = {
    zh: {
      'oj-title': "openjsw UI",
      'demo-title': "openjsw UI v0.6 多主题/多语言/无障碍 Demo",
      'demo-desc': "本页演示 openjsw UI v0.6 样式库，包含全局 header（头部）、oj-nav（主导航）、oj-tool（右侧工具栏），支持主题/语言一键切换，所有组件无障碍与响应式自适应。",
      'nav-home': "首页", 'nav-github': "GitHub", 'nav-components': "组件",
      'label-theme': "主题色板对比（Theme Colors Contrast）",
      'theme-primary': "主色 Primary", 'theme-accent': "强调色 Accent", 'theme-success': "成功 Success",
      'theme-error': "错误 Error", 'theme-warning': "警告 Warning",
      'desc-theme': "使用 <code>var(--oj-primary)</code> 等变量控制主题色，所有主色上的文本都有高对比度。",
      'label-btn': "按钮/Button <span class='oj-badge'>a11y</span>",
      'demo-btn-main': "主按钮", 'demo-btn-copy': "一键复制",
      'label-input': "输入框/选择框（Input/Select）<span class='oj-badge'>a11y</span>",
      'input-label': "输入内容", 'select-label': "选择",
      'label-alert': "提示框（Alert）",
      'alert-normal': "普通提示信息", 'alert-success': "操作成功的提示",
      'alert-error': "错误提示信息", 'alert-warning': "警告提示信息",
      'label-tag': "标签/Tag & 徽章/Badge",
      'tag-normal': "普通标签", 'tag-primary': "主标签", 'tag-accent': "强调标签", 'badge-demo': "8",
      'label-table': "表格（Table）",
      'table-name': "姓名", 'table-role': "角色", 'table-progress': "进度",
      'label-spinner': "加载动画（Spinner）",
      'footer-note': "v0.6 支持全局 header、响应式、主题/多语言切换与无障碍"
    },
    en: {
      'oj-title': "openjsw UI",
      'demo-title': "openjsw UI v0.6 Multi-theme/Multi-language/A11y Demo",
      'demo-desc': "This page demonstrates the openjsw UI v0.6 library, featuring a global header, oj-nav (main nav), oj-tool (top-right tools), instant theme/language switching, all components accessible and responsive.",
      'nav-home': "Home", 'nav-github': "GitHub", 'nav-components': "Components",
      'label-theme': "Theme Colors Contrast",
      'theme-primary': "Primary", 'theme-accent': "Accent", 'theme-success': "Success",
      'theme-error': "Error", 'theme-warning': "Warning",
      'desc-theme': "Use <code>var(--oj-primary)</code> etc. to control theme colors; all text on theme colors has high contrast.",
      'label-btn': "Button <span class='oj-badge'>a11y</span>",
      'demo-btn-main': "Primary", 'demo-btn-copy': "Copy",
      'label-input': "Input/Select <span class='oj-badge'>a11y</span>",
      'input-label': "Input", 'select-label': "Select",
      'label-alert': "Alert",
      'alert-normal': "General info", 'alert-success': "Success info",
      'alert-error': "Error info", 'alert-warning': "Warning info",
      'label-tag': "Tag & Badge",
      'tag-normal': "Tag", 'tag-primary': "Primary", 'tag-accent': "Accent", 'badge-demo': "8",
      'label-table': "Table",
      'table-name': "Name", 'table-role': "Role", 'table-progress': "Progress",
      'label-spinner': "Spinner",
      'footer-note': "v0.6: header, responsive, theme/language switch, a11y support"
    }
  };
  function setLang(lang) {
    localStorage.setItem('oj-lang', lang);
    document.getElementById('oj-lang-icon').textContent = LANG_ICONS[lang];
    document.getElementById('oj-lang-label').textContent = LANG_LABELS[lang];
    // 替换所有需多语言的 dom
    for(const id in LANG_TEXT[lang]) {
      const node = document.getElementById(id);
      if(node) node.innerHTML = LANG_TEXT[lang][id];
    }
  }
  let lang = localStorage.getItem('oj-lang') || 'zh';
  setLang(lang);
  document.getElementById('oj-lang-btn').onclick = () => {
    let cur = localStorage.getItem('oj-lang') || 'zh';
    let next = cur === 'zh' ? 'en' : 'zh';
    setLang(next);
  };
});
/* 简易 Toast，仅演示按钮功能 */
function ojToast(msg) {
  let el = document.createElement('div');
  el.textContent = msg;
  el.style.position = 'fixed';
  el.style.bottom = '44px';
  el.style.left = '50%';
  el.style.transform = 'translateX(-50%)';
  el.style.background = 'rgba(44,54,84,.93)';
  el.style.color = '#fff';
  el.style.fontSize = '1.06em';
  el.style.padding = '10px 32px';
  el.style.borderRadius = '16px';
  el.style.zIndex = 9999;
  el.style.boxShadow = '0 2px 18px #0002';
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 1800);
}
// 复制功能
document.addEventListener('click', e => {
  let target = e.target;
  if(target.classList.contains('oj-copy')) {
    let val = target.dataset.copy || target.innerText;
    navigator.clipboard.writeText(val).then(() => {
      ojToast('已复制到剪贴板');
    });
  }
});
</script>
</body>
</html>`, {
    headers: { "content-type": "text/html; charset=UTF-8" }
  });
}
