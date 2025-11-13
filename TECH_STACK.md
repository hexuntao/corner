# 项目技术栈与功能模块分析

## 1. 技术栈概述

本项目是一个基于 Next.js 的现代化个人网站，采用了 TypeScript、Tailwind CSS 等主流技术栈，集成了多种第三方服务，提供了丰富的功能模块。

## 2. 前端技术栈

### 2.1 核心框架与语言

| 技术 | 版本 | 用途 |
|------|------|------|
| Next.js | 15.3.2 | React 框架，提供服务端渲染、静态站点生成等功能 |
| React | 18.2.0 | 前端UI库 |
| TypeScript | 5.0.4 | 静态类型检查的 JavaScript 超集 |
| Tailwind CSS | 3.3.2 | 实用优先的 CSS 框架，实现响应式设计 |

### 2.2 UI组件与交互

| 技术 | 用途 |
|------|------|
| Framer Motion | 动画效果实现 |
| React Icons | 图标库 |
| @monaco-editor/react | 代码编辑器，用于JavaScript Playground |
| React Slick | 轮播图组件 |
| React Infinite Scroll Component | 无限滚动功能 |
| React Resizable Panels | 可调整大小的面板组件 |
| Headless UI | 无样式组件库 |
| React Syntax Highlighter | 代码高亮显示 |
| Typewriter Effect | 打字机效果动画 |

### 2.3 状态管理与数据获取

| 技术 | 用途 |
|------|------|
| Zustand | 轻量级状态管理库 |
| SWR | React 数据获取库，支持数据缓存、重新验证等 |
| Next-Auth | 认证库，支持第三方登录 |

### 2.4 内容管理

| 技术 | 用途 |
|------|------|
| MDX | Markdown 扩展，支持在 Markdown 中使用 React 组件 |
| React Markdown | Markdown 渲染 |
| Gray Matter | 解析包含 YAML 前置元数据的 Markdown 文件 |
| Remark | Markdown 处理器 |
| Giscus | 评论系统 |

## 3. 后端与数据库

### 3.1 数据库

| 技术 | 用途 |
|------|------|
| PostgreSQL | 关系型数据库，通过 Supabase 托管 |
| Prisma | ORM 工具，用于数据库建模和查询 |
| Firebase | 实时数据库，用于实时留言板功能 |

### 3.2 API 集成

| 服务 | API | 用途 |
|------|-----|------|
| OpenAI | ChatGPT API | AI 聊天功能 |
| Spotify | Spotify Web API | 显示当前播放歌曲和个人音乐统计 |
| WakaTime | WakaTime API | 编码时间统计 |
| WordPress | WordPress REST API | 博客内容管理 |
| GitHub | GitHub API | GitHub 个人信息获取 |
| DEV.to | DEV.to API | 技术文章集成 |

## 4. 开发工具与配置

### 4.1 开发与构建工具

| 工具 | 用途 |
|------|------|
| ESLint | 代码质量检查 |
| Prettier | 代码格式化 |
| Husky | Git Hooks 管理 |
| Lint Staged | 提交前代码检查 |
| Jest | 单元测试框架 |
| Next SEO | SEO 优化 |
| Next Sitemap | 自动生成站点地图 |

### 4.2 配置文件

| 配置文件 | 用途 |
|---------|------|
| next.config.js | Next.js 配置 |
| tailwind.config.js | Tailwind CSS 配置 |
| tsconfig.json | TypeScript 配置 |
| prisma/schema.prisma | Prisma 数据库模式 |
| .eslintrc.js | ESLint 配置 |
| .prettierrc.json | Prettier 配置 |

## 5. 功能模块分析

### 5.1 主页 (Home)

- 个人介绍和欢迎信息
- 技能展示
- 最新动态和项目预览
- 深色/浅色模式切换

### 5.2 博客 (Blog)

- 博客文章列表，支持分页和搜索
- 文章详情页
- 从 WordPress CMS 获取内容
- 评论功能（使用 Giscus）
- 支持 Markdown 和代码高亮

### 5.3 项目 (Projects)

- 项目展示列表
- 项目详情页
- 从 PostgreSQL 数据库获取数据
- 使用增量静态再生 (ISR) 优化性能

### 5.4 JavaScript 代码实验区 (Playground)

- 在线 JavaScript 代码编辑器
- 实时执行和结果展示
- 全屏模式支持
- 代码错误处理和展示

### 5.5 实时留言板 (Chat/Guestbook)

- 使用 Firebase 实现实时消息功能
- 用户认证（通过 Next-Auth）
- 消息列表和发送功能
- 消息删除功能（仅作者可用）

### 5.6 Spotify 状态 (Spotify Status)

- 显示当前正在播放的歌曲信息
- 歌曲封面、标题、艺术家和专辑显示
- 通过 Spotify API 获取实时数据
- 使用 SWR 实现数据自动更新

### 5.7 WakaTime 统计 (Wakatime Statistics)

- 编码时间统计图表
- 最常用编程语言展示
- 编辑器使用统计
- 每日平均编码时间和总时间

### 5.8 AI 聊天 (ChatGPT AI)

- 集成 OpenAI API
- 通过命令面板 (cmd+k) 访问
- 问答和搜索功能
- 目前处于配置状态，需要用户提供自己的 API 密钥

### 5.9 学习模块 (Learn)

- 教程和学习资源展示
- MDX 内容支持
- 交互式学习体验

### 5.10 命令面板 (Cmd Palette)

- 全局搜索功能
- 快速导航到不同页面
- AI 聊天入口

### 5.11 联系页面 (Contact)

- 联系表单
- 社交媒体链接
- 个人信息展示

### 5.12 仪表盘 (Dashboard)

- 个人统计信息汇总
- 各功能模块的统计数据
- 数据可视化展示

## 6. 服务层实现

### 6.1 API 服务封装

项目在 `src/services/` 目录下封装了各种外部 API 的调用：

- `blog.ts` - WordPress 博客 API 调用
- `chatgpt.ts` - OpenAI API 调用
- `contact.ts` - 联系表单 API 调用
- `devto.ts` - DEV.to API 调用
- `firebase.ts` - Firebase 服务配置
- `github.ts` - GitHub API 调用
- `spotify.ts` - Spotify API 调用
- `wakatime.ts` - WakaTime API 调用

### 6.2 数据获取策略

项目根据不同场景使用了多种数据获取策略：

- 客户端渲染 (CSR)：博客列表等动态内容
- 服务端渲染 (SSR)：博客详情、项目详情等
- 增量静态再生 (ISR)：项目列表，设置 1 秒重新验证
- 实时数据获取：Spotify 状态、留言板等

## 7. 项目结构

项目采用模块化的结构设计：

```
src/
├── common/         # 公共组件、工具函数、类型定义等
│   ├── components/ # 通用 UI 组件
│   ├── context/    # React Context
│   ├── hooks/      # 自定义 Hooks
│   ├── libs/       # 第三方库封装
│   └── types/      # TypeScript 类型定义
├── modules/        # 功能模块
│   ├── about/      # 关于页面模块
│   ├── blog/       # 博客模块
│   ├── chat/       # 聊天/留言板模块
│   ├── playground/ # 代码实验区模块
│   └── projects/   # 项目展示模块
├── pages/          # Next.js 页面路由
├── services/       # API 服务层
└── contents/       # 静态内容
```

## 8. 性能优化

- 使用 Next.js 的静态生成和服务端渲染
- 图片优化和懒加载
- 组件懒加载
- 代码分割
- SWR 缓存策略
- Tailwind CSS 的 JIT 模式减少 CSS 体积

## 9. 部署与 CI/CD

- 支持 Vercel 和 Netlify 一键部署
- GitHub Actions 用于代码检查和测试
- 自动生成站点地图

## 10. 总结

本项目是一个功能丰富的个人网站，集成了多种现代 Web 技术和第三方服务。通过模块化的结构设计和合理的数据获取策略，实现了良好的性能和用户体验。项目还提供了代码实验区、实时留言板、音乐状态显示等特色功能，展示了作者的技术实力和个性化需求。