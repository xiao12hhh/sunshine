---
title: 你好，Sunshine
published: 2026-09-04
description: 第一篇博客，站点正式开张。
image: ''
tags: [随笔]
category: '日常'
draft: false
---

第一篇博客，站就这么开起来了。

## 写新文章

在项目根目录跑一条命令就行：

```bash
pnpm new-post 文章文件名
```

它会在 `src/content/posts/` 下生成一个带好 frontmatter 的 Markdown 文件，改完保存，`pnpm dev` 里就能实时看到。

## 常用命令

| 命令 | 作用 |
| --- | --- |
| `pnpm dev` | 本地预览，地址 localhost:4321 |
| `pnpm build` | 构建，产物在 dist/ |
| `pnpm preview` | 预览构建结果 |
| `pnpm new-post <名字>` | 新建一篇文章 |

## 想改点什么

- 站名、头像、个人简介、主题色：`src/config.ts`
- 域名和部署路径：`astro.config.mjs` 里的 `site` 和 `base`
- 首页顶部大图：换掉 `src/assets/images/demo-banner.png`，或把新图放进去改 `banner.src`
- 关于页：`src/content/spec/about.md`
