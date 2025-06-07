export async function onRequestGet(context) {
  return new Response(
    `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <title>openjsw 样式库 & 通用脚本 Demo</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="/style.css">
</head>
<body>
  <div class="oj-container">
    <div class="oj-card">
      <div class="oj-title">openjsw 样式库演示</div>
      <p class="oj-muted">统一风格、轻量易扩展，适合开源技术社区/项目。</p>
      <button class="oj-btn" onclick="ojToast('Hello openjsw!')">弹出提示</button>
      <button class="oj-btn oj-copy" data-copy="https://openjsw.net">一键复制链接</button>
    </div>
    <div class="oj-card">
      <div class="oj-title" style="font-size:1.2rem;">表单样式示例</div>
      <input class="oj-input" placeholder="输入内容…">
      <select class="oj-select">
        <option>请选择</option>
        <option>选项 A</option>
        <option>选项 B</option>
      </select>
      <button class="oj-btn">提交</button>
    </div>
    <div class="oj-card">
      <div class="oj-title" style="font-size:1.2rem;">提示框 Alert</div>
      <div class="oj-alert">这是一个普通提示</div>
      <div class="oj-alert oj-alert-success">操作成功！</div>
      <div class="oj-alert oj-alert-error">发生错误！</div>
      <div class="oj-alert oj-alert-warning">注意事项</div>
      <div class="oj-muted" style="margin-top:12px;">
    <b>用法：</b>
   <pre><code>&lt;div class="oj-alert"&gt;普通提示&lt;/div&gt;
&lt;div class="oj-alert oj-alert-success"&gt;操作成功&lt;/div&gt;
&lt;div class="oj-alert oj-alert-error"&gt;出错了&lt;/div&gt;
&lt;div class="oj-alert oj-alert-warning"&gt;警告&lt;/div&gt;</code></pre>
  </div>
  <div class="oj-card">
  <div class="oj-title" style="font-size:1.2rem;">标签 Tag</div>
  <span class="oj-tag">默认标签</span>
  <span class="oj-tag oj-tag-primary">主要</span>
  <span class="oj-tag oj-tag-accent">强调</span>
  <div class="oj-muted" style="margin-top:12px;">
    <b>用法：</b>
    <pre><code>&lt;span class="oj-tag"&gt;默认标签&lt;/span&gt;
&lt;span class="oj-tag oj-tag-primary"&gt;主要&lt;/span&gt;
&lt;span class="oj-tag oj-tag-accent"&gt;强调&lt;/span&gt;</code></pre>
  </div>
</div>
</div>

    <div class="oj-footer">
      &copy; 2024 openjsw 开放技术 | <span class="oj-muted">Made with ❤️ for OSS</span>
    </div>
  </div>
  <script src="/common.js"></script>
</body>
</html>`,
    {
      headers: { "content-type": "text/html; charset=UTF-8" }
    }
  );
}
