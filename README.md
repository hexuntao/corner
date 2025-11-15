<div align="center">
  <h1>Corner</h1>
  <p>🔥 个人网站，使用Next.js、TypeScript、Tailwind CSS、SWR 和Prisma与PostgreSQL从零开始构建</p>
</div>
<br />

## 简介

本网站使用Next.js和其他有用的工具构建。

欢迎将本网站作为参考、灵感或模板使用，请遵循提供的许可证。您可以访问源代码来根据您的需求进行自定义。

<br /><br />

## 技术栈

本网站使用以下技术构建：

- ◼️ Next.js 13.5.6
- ⚛️ React 18
- 🔰 TypeScript
- 💠 Tailwind CSS 3
- 🗂 Prisma Client
- 🔥 Firebase
- 🦫 Zustand
- 〰️ SWR
- ➰ Framer Motion
- 💢 React Icons
- 🛢 Jest
- 🧿 绝对导入和路径别名
- 📏 ESLint
- ✨ Prettier
- 🐶 Husky & Lint Staged
- 📌 Conventional Commit Lint

<br />

## 功能

本网站拥有多项功能，并将在未来持续更新和添加。

- ### 💻 JavaScript 代码实验区

一个简单直接的纯JavaScript代码实验区，提供实时反馈。

- ### 💬 实时留言板

实时留言板聊天由Firebase提供支持。任何人都可以在这个网站上给我留言。

- ### 🎧 Spotify 状态

使用Spotify API和SWR实时显示正在Spotify上播放的歌曲信息。

- ### 🕗 WakaTime 统计

数据通过WakaTime API获取，然后显示在仪表板上，由部署为无服务器函数的Next.js API路由构建。

- ### 📝 博客

本博客的内容由自行托管的基于WordPress的无头CMS精心管理和提供，体现了我们对精简高效内容交付系统的承诺。用于从WordPress CMS API检索文章的数据获取技术包括：博客列表使用客户端渲染(CSR)，博客详情使用服务器端渲染(SSR)。

- ### 🗳 项目

本博客的项目数据来自通过Prisma Client连接的PostgreSQL数据库。此应用程序的数据库托管在Supabase DB上。用于检索项目数据的数据获取方法是：项目列表使用带有1秒重新验证的增量静态再生(ISR)，项目详情使用服务器端渲染(SSR)。
<br /><br />

## 开始使用

如果您有兴趣在本地计算机上运行此项目，您可以通过以下3个简单步骤完成。此外，请记住将".env.example"文件更新为".env"，并在".env"文件中用您自己的值替换变量。

### 1. 使用以下三种方式之一克隆此模板：

1. 使用git克隆

   ```bash
   git clone https://github.com/hexuntao/corner
   ```

2. 使用`create-next-app`

   ```bash
   npx create-next-app -e https://github.com/hexuntao/corner project-name
   ```

3. 使用`degit`

   ```bash
   npx degit hexuntao/corner YOUR_APP_NAME
   ```

### 2. 安装依赖

建议使用**pnpm**以便husky钩子能够正常工作。

```bash
pnpm install
```

### 3. 配置.env

此存储库使用多个环境变量。请将.env.example复制到.env，然后用您自己的值填充。对于第三方环境变量，如Spotify、Wakatime、Firebase等，请参考各提供商提供的官方文档。

### 4. 运行开发服务器

您可以使用以下命令启动服务器：

```bash
pnpm dev
```

在浏览器中打开[http://localhost:3000](http://localhost:3000)查看结果。您可以通过修改`src/pages/index.tsx`来开始编辑页面。
<br /><br />

## 许可证

根据[GPL-3.0许可证](https://github.com/hexuntao/corner/blob/master/LICENSE)授权。
