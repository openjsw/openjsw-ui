export async function onRequestGet({ request }) {
  return new Response(`<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>openjsw 样式库 v1.0 演示</title>
  <link rel="stylesheet" href="https://styl.openjsw.net/style.css">
</head>
<body>
  <div class="oj-root">
    <header class="oj-header">
      <a class="oj-logo" href="#"><img src="https://styl.openjsw.net/openjsw.svg" alt="logo">openjsw-ui</a>
      <nav class="oj-nav">
        <a href="#" class="active">首页</a>
        <a href="#">组件演示</a>
        <a href="#">教程文档</a>
      </nav>
      <div class="oj-tool">
        <button id="oj-theme-toggle" class="oj-theme-btn" aria-label="切换主题">
          <span id="oj-theme-icon">🖥️</span>
        </button>
        <button class="oj-lang-btn">简体中文</button>
        <button class="oj-lang-btn">English</button>
      </div>
      <button id="oj-menu-btn" class="oj-menu-btn" aria-label="菜单">&#9776;</button>
    </header>
    <nav id="oj-mobile-menu" class="oj-mobile-menu">
      <div class="oj-nav">
        <a href="#" class="active">首页</a>
        <a href="#">组件演示</a>
        <a href="#">教程文档</a>
      </div>
      <div class="oj-tool">
        <button id="oj-theme-toggle-m" class="oj-theme-btn" aria-label="切换主题">
          <span id="oj-theme-icon-m">🖥️</span>
        </button>
        <button class="oj-lang-btn">简体中文</button>
        <button class="oj-lang-btn">English</button>
      </div>
    </nav>
    <div id="oj-mobile-mask" class="oj-mobile-mask"></div>
    <main class="oj-container">
      <h1 class="oj-title">openjsw 样式库 v1.0 演示</h1>
      <div class="oj-card">
        <h2>按钮/Button</h2>
        <button class="oj-btn">主按钮</button>
        <button class="oj-btn oj-copy" data-copy="演示文本">点击复制</button>
      </div>
      <div class="oj-card">
        <h2>输入框/Input</h2>
        <input class="oj-input" placeholder="请输入..." />
        <select class="oj-select">
          <option>选项一</option>
          <option>选项二</option>
        </select>
      </div>
      <div class="oj-card">
        <h2>Alert/Tag/Badge</h2>
        <div class="oj-alert">这是提示信息</div>
        <div class="oj-alert oj-alert-success">成功提示</div>
        <div class="oj-alert oj-alert-error">错误提示</div>
        <div class="oj-alert oj-alert-warning">警告提示</div>
        <span class="oj-tag">标签</span>
        <span class="oj-tag oj-tag-primary">主标签</span>
        <span class="oj-tag oj-tag-accent">Accent标签</span>
        <span class="oj-badge">99+</span>
      </div>
      <div class="oj-card">
        <h2>表格/Table</h2>
        <table class="oj-table">
          <tr><th>姓名</th><th>邮箱</th></tr>
          <tr><td>张三</td><td>zhangsan@example.com</td></tr>
          <tr><td>李四</td><td>lisi@example.com</td></tr>
        </table>
      </div>
      <div class="oj-card">
        <h2>代码块/Code</h2>
        <pre><code>npm i openjsw-ui<br>import 'openjsw-ui/style.css'</code></pre>
      </div>
      <div class="oj-card">
        <h2>Loading Spinner</h2>
        <span class="oj-spinner"></span>
      </div>
    </main>
    <footer class="oj-footer">
      &copy; 2024 openjsw-ui 演示 / <a href="https://github.com/openjsw">GitHub</a>
    </footer>
  </div>
  <script src="https://styl.openjsw.net/common.js"></script>
  <script>
    // 让移动菜单和主题切换按钮在主导航和移动端都生效
    ojReady(() => {
      // 复制 theme 切换
      var mBtn = document.getElementById('oj-theme-toggle-m');
      var mIcon = document.getElementById('oj-theme-icon-m');
      if (mBtn && mIcon) {
        mBtn.onclick = function() {
          let now = localStorage.getItem('oj-theme') || 'auto';
          let next = ['light','dark','auto'][(['light','dark','auto'].indexOf(now)+1)%3];
          localStorage.setItem('oj-theme', next);
          window.location.reload();
        };
        let theme = localStorage.getItem('oj-theme') || 'auto';
        mIcon.textContent = {'light':'☀️','dark':'🌙','auto':'🖥️'}[theme];
      }
    });
  </script>
</body>
</html>
`, {
    headers: {
      'content-type': 'text/html; charset=utf-8'
    }
  });
}
