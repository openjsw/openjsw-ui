export async function onRequest() {
  return new Response(`
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <title>OpenJSW UI 组件库演示</title>
  <meta name="viewport" content="width=1200, initial-scale=1">
  <script src="/openjsw-ui.js"></script>
</head>
<body>
  <div id="nav"></div>
  <div style="display:flex;min-height:80vh;">
    <div id="sider"></div>
    <main class="oj-main-content" id="main"></main>
  </div>
  <div id="footer"></div>
  <script>
    // 组件示例和API说明数据
    const componentDocs = [
      {
        key: "navbar",
        name: "导航栏",
        desc: "统一站点顶部导航栏。支持 logo、菜单、搜索等。",
        demo: () => OpenJSWUI.navbar({
          logo: "OpenJSW",
          menus: [
            {name: "组件", href: "#", active: true},
            {name: "文档", href: "#"},
            {name: "社区", href: "#"},
          ],
          search: true
        }),
        code: "OpenJSWUI.navbar({ logo: 'OpenJSW', menus: [{name: '组件', active: true}], search: true });"
      },
      {
        key: "form",
        name: "表单",
        desc: "统一输入表单风格。",
        demo: () => OpenJSWUI.form({
          fields: [
            {label: '用户名', name: 'username', required: true, placeholder: '请输入用户名'},
            {label: '邮箱', name: 'email', type: 'email', required: true, placeholder: 'you@example.com'},
          ],
          btn: "注册"
        }),
        code: "OpenJSWUI.form({ fields: [{label: '用户名', name: 'username'}] })"
      },
      {
        key: "pagination",
        name: "分页",
        desc: "简单、可无障碍切换的分页组件。",
        demo: () => OpenJSWUI.pagination({
          page: 2, total: 5, onPage: p => OpenJSWUI.message({text:'第'+p+'页',type:'info'})
        }),
        code: "OpenJSWUI.pagination({ page:2, total:5, onPage })"
      },
      {
        key: "message",
        name: "消息提示",
        desc: "全局消息提示，支持 info/success/warning/danger。",
        demo: () => 
          \`<button class="oj-btn" onclick="OpenJSWUI.message({text:'普通提示',type:'info'})">普通提示</button>
          <button class="oj-btn oj-success" onclick="OpenJSWUI.message({text:'成功',type:'success'})">成功</button>
          <button class="oj-btn oj-warning" onclick="OpenJSWUI.message({text:'警告',type:'warning'})">警告</button>
          <button class="oj-btn oj-danger" onclick="OpenJSWUI.message({text:'错误',type:'danger'})">错误</button>\`,
        code: "OpenJSWUI.message({ text: '消息内容', type: 'info' });"
      },
      {
        key: "loading",
        name: "加载动画",
        desc: "页面加载时的全局动画。",
        demo: () => \`<button class="oj-btn" onclick="OpenJSWUI.loading(true);setTimeout(()=>OpenJSWUI.loading(false),1000)">显示加载动画</button>\`,
        code: "OpenJSWUI.loading(true); // 关闭：OpenJSWUI.loading(false);"
      }
    ];

    // 渲染导航栏
    nav.innerHTML = OpenJSWUI.navbar({
      logo: "OpenJSW",
      menus: componentDocs.map(doc => ({ name: doc.name, href: "#" + doc.key, active: false })),
      search: true
    });

    // 渲染侧边栏
    sider.innerHTML = OpenJSWUI.sider({
      items: componentDocs.map(doc => ({key: doc.key, name: doc.name})),
      active: componentDocs[0].key
    });

    // 渲染footer
    footer.innerHTML = OpenJSWUI.footer();

    // 监听菜单点击
    document.querySelectorAll('.oj-menu-list li').forEach(li => {
      li.onclick = () => showComponent(li.dataset.key);
    });

    // 搜索
    document.getElementById('oj-search-input')?.addEventListener('input', function(){
      const val = this.value.trim().toLowerCase();
      const result = componentDocs.filter(doc=>doc.name.toLowerCase().includes(val)||doc.key.toLowerCase().includes(val));
      sider.innerHTML = OpenJSWUI.sider({
        items: result.map(doc=>({key:doc.key, name:doc.name})),
        active: result[0]?.key
      });
      if(result[0]) showComponent(result[0].key);
    });

    // 渲染主内容
    function showComponent(key) {
      const doc = componentDocs.find(d=>d.key===key);
      document.querySelectorAll('.oj-menu-list li').forEach(li=>li.classList.toggle('active', li.dataset.key===key));
      main.innerHTML = doc ? (
        \`<div class="oj-title">\${doc.name}</div>
        <div style="color:#888;margin-bottom:2em;">\${doc.desc}</div>
        <div class="oj-demo-block">\${typeof doc.demo === 'function' ? doc.demo() : doc.demo}</div>
        <pre style="background:#f8f8f8;border-radius:8px;padding:1em;overflow-x:auto;">\${doc.code||''}</pre>
        \`
      ) : '';
    }

    // 初始显示第一个组件
    showComponent(componentDocs[0].key);

    // hash 跳转支持
    window.onhashchange = ()=> {
      const key = location.hash.replace(/^#/, '');
      if (key) showComponent(key);
    };
  </script>
</body>
</html>
`, {
    headers: { "content-type": "text/html; charset=utf-8" }
  });
}
