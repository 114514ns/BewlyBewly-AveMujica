# BewlyBewly! Ave Mujica

[English](README.md) | 官话 - 简体中文 | [官話 - 繁體中文](README-cmn_TW.md) | [廣東話](README-jyut.md)

<p align="center" style="margin-bottom: 0px !important;">
<img width="300" alt="BewlyBewly icon" src="https://cdn.jsdelivr.net/gh/BewlyBewly/Imgs/logos/bewlybewly-vtuber-logo.png"><br/>
</p>

<p align="center">对您的 bilibili 页面进行一些小更改。</p>

<!-- ![min1](https://github.com/hakadao/BewlyBewly/assets/33394391/951f9e2a-d0e1-452c-83a9-dc6d85c4d441)
![min2](https://github.com/hakadao/BewlyBewly/assets/33394391/3e75dd20-f60b-4645-b434-23a24c72959c) -->

## 👋 介绍

> [!IMPORTANT]
> BewlyBewly! Ave Mujica 主要专注页面的调整和优化，而不是完善功能和提升效率。
>
> 由于效率和维护难度的原因，暗色模式只会适应常用页面，而不会适应不常用的页面。

> [!IMPORTANT]
> BewlyBewly! Ave Mujica 是 [BewlyBewly](https://github.com/BewlyBewly/BewlyBewly) 的一个 fork（分叉），目的是在原项目存档后提供其他更新和错误修复。

BewlyBewly! Ave Mujica 是一个用于 bilibili 的浏览器扩展，旨在通过重新设计 bilibili 用户界面来提升用户体验。设计灵感来自于 YouTube、Vision OS 和 iOS，从而实现了更具视觉吸引力和用户友好性的界面。

该项目使用 [vitesse-webext](https://github.com/antfu/vitesse-webext) 模板进行开发。如果没有这个模板，可能无法开发出这个项目。

## ⬇️ 安装

- Firefox 系浏览器：https://addons.mozilla.org/en-CA/firefox/addon/bewlybewly-avemujica/
- Chromium 系浏览器：https://chromewebstore.google.com/detail/bewlybewly-ave-mujica/lildghglkgcoanblbmenbefhnhifghjj

## 🤝 贡献与构建项目

1. 克隆存储库
```sh
git clone https://github.com/VentusUta/BewlyBewly-AveMujica
```

2. 安装依赖（确保你已安装 pnpm！）
```sh
cd BewlyBewly-AveMujica
pnpm install
```

3. 构建
  - 基于 Chromium 的浏览器
```sh
pnpm run build
```
  - 基于 Firefox 的浏览器
```sh
pnpm run build-firefox
```

4. 打包（可选，确保你已构建 Chromium 的扩展！）
```sh
pnpm run pack
```

## ❤️ 鸣谢

- [vitesse-webext](https://github.com/antfu/vitesse-webext)——该项目使用的模板
- [UserScripts/bilibiliHome](https://github.com/indefined/UserScripts/tree/master/bilibiliHome)、[bilibili-app-recommend](https://github.com/magicdawn/bilibili-app-recommend)——获取访问密钥的参考来源
- [Bilibili-Evolved](https://github.com/the1812/Bilibili-Evolved)——部分功能实现
- [bilibili-API-collect](https://github.com/SocialSisterYi/bilibili-API-collect)
