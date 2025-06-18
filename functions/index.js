export async function onRequestGet(context) {
  return new Response(
`<!DOCTYPE html>
<html lang="zh">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <title>样式无障碍+多语言优化演示</title>
  <link rel="stylesheet" href="/style.css">
</head>
<body>
  <a href="#main-content" class="skip-link">跳到正文</a>
  <header>
    <div class="header-main">
      <div class="logo">🌎 MySite</div>
      <nav class="nav-links">
        <a href="#">主页</a>
        <a href="#">功能</a>
        <a href="#">联系</a>
      </nav>
      <button class="menu-btn" aria-label="打开菜单"><span></span><span></span><span></span></button>
    </div>
  </header>
  <main id="main-content" class="container" tabindex="-1">
    <h1>欢迎来到演示页面</h1>
    <div class="info">这是一个信息提示，样式兼容无障碍与多语言。</div>
    <div class="error">这是一个错误提示！</div>
    <form>
      <label for="username">用户名</label>
      <input id="username" name="username" type="text" autocomplete="username" placeholder="输入用户名" required>
      <button type="submit" class="btn">提交</button>
    </form>
    <table>
      <thead>
        <tr><th>文件名</th><th>大小</th><th>操作</th></tr>
      </thead>
      <tbody>
        <tr tabindex="0">
          <td>example.docx</td>
          <td>24KB</td>
          <td>
            <div class="table-actions">
              <a class="btn btn-visit" href="#">访问</a>
              <button class="btn btn-delete" type="button">删除</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </main>
  <footer>
    &copy; 2025 Example | <a href="#">隐私政策</a>
  </footer>
  <script>
    // 简单移动端抽屉菜单功能
    document.querySelector('.menu-btn').onclick = () => {
      document.querySelector('.drawer')?.classList.toggle('open');
    };
  </script>
</body>
</html>`,
    { headers: { "content-type": "text/html; charset=utf-8" } }
  );
}
