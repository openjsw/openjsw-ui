// functions/index.js
export async function onRequest() {
  return new Response(`
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <title>OpenJSW UI 组件演示</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <script src="/openjsw-ui.js"></script>
  <style>
    #app { max-width: 660px; margin: 0 auto; }
    .oj-demo-btns { margin-bottom: 1em; }
    .doc-header { margin-bottom: 2em;}
  </style>
</head>
<body>
  <div id="app"></div>
  <script>
    // 渲染 header
    document.body.insertAdjacentHTML('afterbegin', OpenJSWUI.header('开放技术网统一头部'));
    // 渲染 footer
    document.body.insertAdjacentHTML('beforeend', OpenJSWUI.footer());
    // 渲染表单
    document.getElementById('app').innerHTML = OpenJSWUI.form({
      action: "#",
      fields: [
        {label: "用户名", name: "username", required: true, placeholder: "请输入用户名"},
        {label: "邮箱", name: "email", type: "email", required: true, placeholder: "you@example.com"},
      ],
      btn: "注册"
    });
    // 演示消息按钮
    document.getElementById('app').insertAdjacentHTML('beforeend', \`
      <div class="oj-demo-btns">
        <button class="oj-btn" onclick="OpenJSWUI.message({text:'普通提示',type:'info'})">普通提示</button>
        <button class="oj-btn oj-success" onclick="OpenJSWUI.message({text:'操作成功',type:'success'})">成功</button>
        <button class="oj-btn oj-warning" onclick="OpenJSWUI.message({text:'警告！',type:'warning'})">警告</button>
        <button class="oj-btn oj-danger" onclick="OpenJSWUI.message({text:'出错了',type:'danger'})">错误</button>
        <button class="oj-btn" onclick="OpenJSWUI.loading(true);setTimeout(()=>OpenJSWUI.loading(false),1200)">加载动画</button>
      </div>
    \`);
    // 演示分页组件
    let currentPage = 1, totalPages = 6;
    function renderPagination() {
      document.getElementById('app').insertAdjacentHTML('beforeend',
        OpenJSWUI.pagination({
          page: currentPage,
          total: totalPages,
          onPage: function(p) {
            currentPage = p;
            OpenJSWUI.message({text: '切换到第' + p + '页', type: 'info'});
            // 重新渲染分页
            document.querySelector('.oj-pagination').remove();
            renderPagination();
          }
        })
      );
    }
    renderPagination();
  </script>
</body>
</html>
`, {
    headers: { "content-type": "text/html;charset=utf-8" }
  });
}
