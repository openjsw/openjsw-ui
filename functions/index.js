// functions/index.js
// 动态输出演示&教学页，不依赖第三库

module.exports = async function (req, res) {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.end(`
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <title>openjsw 开放技术网 - 通用组件库 V0.1 演示与教学</title>
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <link rel="stylesheet" href="/style.css">
  <style>
    pre {background:#f6f8fa;border-radius:6px;padding:16px;overflow:auto;}
    code {font-family:Consolas,Monaco,monospace;}
    .oj-demo-block {margin-bottom:32px;}
    .oj-demo-title {font-size:1.18rem;color:#2961ef;margin-bottom:8px;}
    .oj-demo-desc {color:#888;margin-bottom:8px;}
  </style>
</head>
<body>
  <div class="oj-container">
    <div class="oj-title">openjsw 通用组件库 V0.1<br>演示与教学</div>
    <div class="oj-subtitle">
      所有交互均基于 <code>/style.css</code> + <code>/common.js</code>，无第三方依赖。
      <br>你可以直接复制下方的用法到你的页面使用！
    </div>
    
    <!-- 消息提示演示 -->
    <div class="oj-demo-block">
      <div class="oj-demo-title">1. 消息提示（ojMsg）</div>
      <div class="oj-demo-desc">弹出提示消息，支持不同类型（info/success/warning/danger）。</div>
      <button class="oj-btn" onclick="openjsw.ojMsg('这是一条普通提示', 'info')">普通提示</button>
      <button class="oj-btn oj-btn-success" onclick="openjsw.ojMsg('操作成功', 'success')">成功</button>
      <button class="oj-btn oj-btn-warning" onclick="openjsw.ojMsg('有些警告', 'warning')">警告</button>
      <button class="oj-btn oj-btn-danger" onclick="openjsw.ojMsg('出错了！', 'danger')">错误</button>
      <pre><code>
openjsw.ojMsg('消息内容', 'info');      // 普通
openjsw.ojMsg('成功', 'success');
openjsw.ojMsg('警告', 'warning');
openjsw.ojMsg('错误', 'danger');
      </code></pre>
    </div>

    <!-- 确认弹窗演示 -->
    <div class="oj-demo-block">
      <div class="oj-demo-title">2. 确认弹窗（ojConfirm）</div>
      <div class="oj-demo-desc">弹出确认/取消弹窗，确定后执行回调。</div>
      <button class="oj-btn oj-btn-primary" onclick="
        openjsw.ojConfirm('确定要执行此操作吗？', function(yes) {
          openjsw.ojMsg(yes ? '已确认' : '已取消', yes ? 'success' : 'warning');
        });
      ">弹出确认</button>
      <pre><code>
openjsw.ojConfirm('提示文字', function(yes){
  if (yes) { /* 确定 */ }
  else { /* 取消 */ }
});
      </code></pre>
    </div>

    <!-- 加载遮罩演示 -->
    <div class="oj-demo-block">
      <div class="oj-demo-title">3. 加载遮罩（ojLoading）</div>
      <div class="oj-demo-desc">展示/关闭全屏加载中遮罩。</div>
      <button class="oj-btn" onclick="openjsw.ojLoading(true)">显示加载</button>
      <button class="oj-btn" onclick="openjsw.ojLoading(false)">隐藏加载</button>
      <button class="oj-btn" onclick="openjsw.ojLoading(true);setTimeout(()=>openjsw.ojLoading(false), 1600)">演示1.6秒后关闭</button>
      <pre><code>
openjsw.ojLoading(true);           // 显示
openjsw.ojLoading(false);          // 隐藏
      </code></pre>
    </div>

    <!-- Tabs标签切换演示 -->
    <div class="oj-demo-block">
      <div class="oj-demo-title">4. 标签页Tabs（ojTabs）</div>
      <div class="oj-demo-desc">一行代码实现内容切换。</div>
      <div class="oj-tabs" id="tab-demo">
        <div class="oj-tab active">Tab 1</div>
        <div class="oj-tab">Tab 2</div>
        <div class="oj-tab">Tab 3</div>
      </div>
      <div class="oj-tab-content" style="display:block">第一个tab内容</div>
      <div class="oj-tab-content" style="display:none">第二个tab内容</div>
      <div class="oj-tab-content" style="display:none">第三个tab内容</div>
      <pre><code>
&lt;div class="oj-tabs" id="tab-demo"&gt;
  &lt;div class="oj-tab"&gt;Tab 1&lt;/div&gt;
  &lt;div class="oj-tab"&gt;Tab 2&lt;/div&gt;
&lt;/div&gt;
&lt;div class="oj-tab-content"&gt;内容1&lt;/div&gt;
&lt;div class="oj-tab-content"&gt;内容2&lt;/div&gt;
&lt;script&gt; openjsw.ojTabs('#tab-demo'); &lt;/script&gt;
      </code></pre>
    </div>
    <script>
      // 初始化tab演示
      window.onload = function () {
        openjsw.ojTabs('#tab-demo');
      }
    </script>

    <!-- 复制到剪贴板演示 -->
    <div class="oj-demo-block">
      <div class="oj-demo-title">5. 复制到剪贴板（ojCopy）</div>
      <div class="oj-demo-desc">一行代码实现文本复制，并自动提示。</div>
      <input class="oj-input" id="oj-copy-demo" style="width:200px" value="openjsw技术网" />
      <button class="oj-btn" onclick="openjsw.ojCopy(document.getElementById('oj-copy-demo').value)">复制内容</button>
      <pre><code>
openjsw.ojCopy('需要复制的内容');
      </code></pre>
    </div>
    
    <hr>
    <div style="color:#999;font-size:0.97rem;margin-top:24px;">
      © 2024 openjsw.com 开放技术网 | 版本 V0.1<br>
      组件库持续更新中，欢迎提出建议！
    </div>
  </div>
  <script src="/common.js"></script>
</body>
</html>
`);
};
