export async function onRequestGet(context) {
  return new Response(
`<!DOCTYPE html>
<html lang="zh">
<head>
  <meta charset="UTF-8">
  <title>教学演示 · 样式与JS统一引入</title>
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <link rel="stylesheet" href="/style.css">
</head>
<body>
  <a href="#main-content" class="skip-link">跳到正文</a>
  <header>
    <div class="header-main">
      <div class="logo"><span style="font-size:1.6em;">🌎</span> MySite</div>
      <nav class="nav-links">
        <a href="#">主页</a>
        <a href="#">功能</a>
        <a href="#">联系</a>
      </nav>
      <button class="menu-btn" aria-label="打开菜单"><span></span><span></span><span></span></button>
    </div>
    <!-- 抽屉菜单（移动端）-->
    <div class="drawer" tabindex="-1" aria-label="主菜单">
      <a href="#">主页</a>
      <a href="#">功能</a>
      <a href="#">联系</a>
      <button class="close-btn">关闭</button>
    </div>
  </header>
  <main id="main-content" class="container" tabindex="-1">
    <h1>欢迎来到教学演示页面</h1>
    <div class="note">💡 这是一个 note/notice 区块，适合用来提示说明信息。</div>
    <div class="info">这是一个信息提示，样式兼容无障碍与多语言。</div>
    <div class="error">这是一个错误提示！</div>
    <form onsubmit="showToast('success', '提交成功！');return false;">
      <label for="username">用户名</label>
      <input id="username" name="username" type="text" autocomplete="username" placeholder="输入用户名" required>
      <button type="submit" class="btn">提交</button>
      <button type="button" class="btn" onclick="showToast('info','这是一条即时信息弹窗')">弹出info弹窗</button>
      <button type="button" class="btn btn-delete" onclick="showToast('error','发生错误，操作失败')">弹出error弹窗</button>
    </form>
    <table>
      <thead>
        <tr>
          <th>文件名</th>
          <th>大小</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr tabindex="0">
          <td>example.docx</td>
          <td>24KB</td>
          <td>
            <div class="table-actions">
              <a class="btn btn-visit" href="#" onclick="showToast('info','访问链接已复制！')">访问</a>
              <button class="btn btn-delete" type="button" onclick="showToast('error','已删除！')">删除</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </main>
  <footer>
    &copy; 2025 Example | <a href="#">隐私政策</a>
  </footer>
  <script src="/common.js"></script>
</body>
</html>
`,
    { headers: { "content-type": "text/html; charset=utf-8" } }
  );
}
