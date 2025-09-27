# KeXin (可信)

KeXin (可信) 是一个基于 React + Vite 的静态网站 / 演示站点仓库。项目示例托管于 GitHub Pages： [https://Lincept.github.io](https://Lincept.github.io)。

本仓库为一个小型前端展示站点，使用 Vite 作为构建工具、React 作为 UI 框架，包含部分常用依赖（详见 `package.json`），例如 `framer-motion` 与 `lucide-react`。

主要用途：展示页面、Landing Page 或项目演示。

## 主要功能

- 使用 Vite 的快速开发服务器（HMR）。
- React 19 + 动效与图标库（framer-motion、lucide-react）。
- 支持 ESLint 检查。
- 使用 `gh-pages` 将构建产物（`dist`）部署到 GitHub Pages（参见 `package.json` 的 `deploy` 脚本）。

## 快速开始

先决条件：

- Node.js（推荐 18+）和 npm / yarn / pnpm

安装依赖：

```bash
npm install
```

本地开发（启动 dev server）：

```bash
npm run dev
```

构建生产包：

```bash
npm run build
```

本地预览构建结果：

```bash
npm run preview
```

运行 ESLint 检查：

```bash
npm run lint
```

部署到 GitHub Pages：

```bash
npm run deploy
```

（`deploy` 会在发布前自动运行 `predeploy`，即 `npm run build`。）

## 项目结构（概览）

- `index.html` — 入口 HTML
- `src/` — 源码
  - `main.jsx` — 客户端入口
  - `App.jsx` — 顶层组件
  - `components/` — 组件目录（Hero、Features、About、Contact、Navbar、PhoneMockup、DownloadSection 等）
- `public/` — 静态资源
- `vite.config.js` — Vite 配置
- `package.json` — 脚本与依赖
