# 我的世界投影工坊弹窗屏蔽器

[![MIT License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

🔍 专为《我的世界》投影工坊设计的弹窗屏蔽脚本，自动移除网页端干扰性弹窗组件。

## 功能特性
- 🚫 永久隐藏主弹窗容器
- 🎯 精准屏蔽弹窗标题、分隔线、内容区域
- 🔄 实时监控DOM变化自动清理
- ⚡ 无感运行不影响页面性能

## 安装使用
1. 安装用户脚本管理器（[Tampermonkey](https://www.tampermonkey.net/) 或 [Violentmonkey](https://violentmonkey.github.io/)）
2. 将block-popup.user.js内容复制到脚本管理器中创建新脚本，保存
3. 刷新投影工坊页面即可生效

## 技术支持
### 屏蔽机制
```javascript
GM_addStyle(`
  #wniui-popup-window.wniui-show-popup-window,
  .wniui-popup-window-title,
  .wniui-popup-window-divider,
  .wniui-popup-window-content {
    display: none !important;
  }
`);
```
- 使用`MutationObserver`监听DOM变化
- 双重清理机制（初始化清理 + 动态监控）

## 适用网站
- `https://haomc.com/*`
- `https://www.haomc.com/*`

## 版本历史
### v1.0 (2024-03-20)
- 初始发布版本
- 实现基础弹窗屏蔽功能

## 开源协议
本项目采用 [MIT License](LICENSE)，作者：ManakaGekka

> 📢 本脚本仅用于学习交流，请勿用于商业用途