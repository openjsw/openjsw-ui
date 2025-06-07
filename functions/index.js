export async function onRequestGet(context) {
  return new Response(`<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <title>openjsw 样式库 Demo</title>
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
  white-space: pre-wrap;    /* 关键 */
  word-break: break-all;    /* 关键 */
}
pre { margin: 8px 0 0 0; }
    .demo-label { margin-bottom:8px; font-weight:600; font-size:1.1em;}
    .demo-section { margin-bottom:38px;}
  </style>
</head>
<body>
<div class="oj-container">
  <div class="oj-card">
    <div class="oj-title">openjsw UI 样式库 & 组件 Demo</div>
    <div class="oj-muted" style="margin-bottom:10px;">所有组件可直接在 HTML 中调用，配合 <b>common.js</b> 支持 toast、复制等常用 JS 能力。</div>
  </div>

  <div class="oj-card demo-section">
    <div class="demo-label">按钮（Button）</div>
    <button class="oj-btn" onclick="ojToast('你点击了按钮！')">主按钮</button>
    <button class="oj-btn oj-copy" data-copy="OpenJSW!">一键复制</button>
    <pre><code>&lt;button class="oj-btn"&gt;主按钮&lt;/button&gt;
&lt;button class="oj-btn oj-copy" data-copy="内容"&gt;一键复制&lt;/button&gt;</code></pre>
  </div>

  <div class="oj-card demo-section">
    <div class="demo-label">提示框（Alert）</div>
    <div class="oj-alert">普通提示信息</div>
    <div class="oj-alert oj-alert-success">操作成功的提示</div>
    <div class="oj-alert oj-alert-error">错误提示信息</div>
    <div class="oj-alert oj-alert-warning">警告提示信息</div>
    <pre><code>&lt;div class="oj-alert"&gt;普通提示&lt;/div&gt;
&lt;div class="oj-alert oj-alert-success"&gt;成功提示&lt;/div&gt;
&lt;div class="oj-alert oj-alert-error"&gt;错误提示&lt;/div&gt;
&lt;div class="oj-alert oj-alert-warning"&gt;警告提示&lt;/div&gt;</code></pre>
  </div>

  <div class="oj-card demo-section">
    <div class="demo-label">标签（Tag）</div>
    <span class="oj-tag">普通标签</span>
    <span class="oj-tag oj-tag-primary">主标签</span>
    <span class="oj-tag oj-tag-accent">强调标签</span>
    <pre><code>&lt;span class="oj-tag"&gt;普通标签&lt;/span&gt;
&lt;span class="oj-tag oj-tag-primary"&gt;主标签&lt;/span&gt;
&lt;span class="oj-tag oj-tag-accent"&gt;强调标签&lt;/span&gt;</code></pre>
  </div>

  <div class="oj-card demo-section">
    <div class="demo-label">徽章（Badge）</div>
    <span>新消息 <span class="oj-badge">8</span></span>
    <span style="margin-left:18px;">成功 <span class="oj-badge" style="background:var(--oj-accent)">99+</span></span>
    <pre><code>&lt;span&gt;新消息 &lt;span class="oj-badge"&gt;8&lt;/span&gt;&lt;/span&gt;</code></pre>
  </div>

  <div class="oj-card demo-section">
    <div class="demo-label">输入框/选择框（Input/Select）</div>
    <input class="oj-input" placeholder="请输入内容">
    <select class="oj-select">
      <option>请选择</option>
      <option>选项 A</option>
      <option>选项 B</option>
    </select>
    <pre><code>&lt;input class="oj-input" placeholder="请输入内容"&gt;
&lt;select class="oj-select"&gt;...&lt;/select&gt;</code></pre>
  </div>

  <div class="oj-card demo-section">
    <div class="demo-label">表格（Table）</div>
    <table class="oj-table">
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
    <span class="oj-spinner"></span>
    <pre><code>&lt;span class="oj-spinner"&gt;&lt;/span&gt;</code></pre>
  </div>

  <div class="oj-card demo-section">
    <div class="demo-label">列表（List）</div>
    <ul class="oj-list">
      <li>列表项 1</li>
      <li>列表项 2</li>
      <li>列表项 3</li>
    </ul>
    <pre><code>&lt;ul class="oj-list"&gt;
  &lt;li&gt;列表项 1&lt;/li&gt;
  &lt;li&gt;列表项 2&lt;/li&gt;
  &lt;li&gt;列表项 3&lt;/li&gt;
&lt;/ul&gt;</code></pre>
  </div>

  <div class="oj-card demo-section">
    <div class="demo-label">弹性布局（Flex）</div>
    <div class="oj-flex">
      <div class="oj-tag">Item 1</div>
      <div class="oj-tag oj-tag-primary">Item 2</div>
      <div class="oj-tag oj-tag-accent">Item 3</div>
    </div>
    <pre><code>&lt;div class="oj-flex"&gt;
  &lt;div class="oj-tag"&gt;Item 1&lt;/div&gt;
  &lt;div class="oj-tag oj-tag-primary"&gt;Item 2&lt;/div&gt;
  &lt;div class="oj-tag oj-tag-accent"&gt;Item 3&lt;/div&gt;
&lt;/div&gt;</code></pre>
  </div>

  <div class="oj-footer" style="margin-top:60px;">
    &copy; 2025 openjsw 开放技术 | <span class="oj-muted">Made with ❤️ for OSS</span>
  </div>
</div>
<script src="/common.js"></script>
</body>
</html>`, {
    headers: { "content-type": "text/html; charset=UTF-8" }
  });
}
