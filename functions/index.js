// function/index.js
export async function onRequestGet({ request }) {
  return new Response(`
    <!DOCTYPE html>
    <html lang="zh-CN">
    <head>
      <meta charset="UTF-8">
      <title>OpenJSW 通用样式展示</title>
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <link rel="stylesheet" href="/public/styles.css" />
      <style>
        .class-label { font-size:12px;color:#999; margin-top:6px; }
      </style>
    </head>
    <body>
      <div style="max-width:700px;margin:36px auto 40px;padding:0 20px;">
        <h1>OpenJSW 通用样式 Demo</h1>

        <h2>按钮 Button</h2>
        <div class="demo-box">
          <button class="btn">主按钮</button>
          <button class="btn success">成功按钮</button>
          <button class="btn danger">危险按钮</button>
        </div>
        <div class="class-label">class="btn" | "btn success" | "btn danger"</div>

        <h2>输入框 Input</h2>
        <div class="demo-box">
          <input class="input" placeholder="请输入内容">
        </div>
        <div class="class-label">class="input"</div>

        <h2>卡片 Card</h2>
        <div class="demo-box">
          <div class="card">
            <div style="font-size:18px;margin-bottom:10px;">卡片标题</div>
            <div style="font-size:14px;color:#888;">卡片内容，适合放置小块信息。</div>
          </div>
        </div>
        <div class="class-label">class="card"</div>

        <h2>其它</h2>
        <div style="color:#bbb;font-size:13px;">你可以根据需要扩展更多组件样式。</div>
      </div>
    </body>
    </html>
  `, {
    headers: {
      "content-type": "text/html; charset=utf-8",
    }
  });
}
