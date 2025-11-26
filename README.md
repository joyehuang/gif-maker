# 表情包切分合成工具

一个基于 Gemini AI 的表情包切分与 GIF 合成工具。

## 功能特性

- 📸 自动切分表情包图片
- 🎨 智能背景去除（抠图）
- 🎬 生成动态 GIF
- 💾 导出静态切片
- ☁️ 云端存储分享（Vercel Blob）
- ⚡ 纯前端实现，无需后端（主要功能）

## 技术栈

### 前端
- 原生 HTML/JavaScript
- Tailwind CSS + DaisyUI
- gifshot.js

### 后端（可选）
- Vercel Serverless Functions
- Vercel Blob Storage

## 部署说明

### 1. 部署到 Vercel

点击下方按钮一键部署：

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/joyehuang/gif-maker)

或手动部署：

```bash
# 安装 Vercel CLI
npm i -g vercel

# 部署
vercel
```

### 2. 配置 Vercel Blob Storage（可选）

如果需要使用分享功能，需要启用 Blob Storage：

1. 访问 Vercel 项目设置页面
2. 进入 **Storage** 标签
3. 点击 **Create Database**
4. 选择 **Blob**
5. 输入名称（如 `gif-storage`）
6. 点击 **Create**

完成后，Vercel 会自动设置环境变量，分享功能即可使用。

### 3. 本地开发

```bash
# 安装依赖
npm install

# 本地开发（需要 Vercel CLI）
vercel dev
```

## 环境变量

如果使用 Blob Storage，需要以下环境变量（Vercel 会自动设置）：

```
BLOB_READ_WRITE_TOKEN=your_token_here
```

## 在线访问

https://tools.joyehuang.me

## 使用教程

1. **上传表情包图片** - 点击、拖拽或使用 Ctrl+V 粘贴
2. **设置行列数** - 根据图片设置正确的行数和列数
3. **调整播放速度** - 拖动滑块调整 GIF 播放速度
4. **智能去背景**（可选）- 点击"吸取背景色"按钮
5. **生成并下载** - 点击"生成 GIF"或"生成切片"

## 许可

MIT
