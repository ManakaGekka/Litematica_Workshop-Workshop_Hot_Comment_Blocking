// ==UserScript==
// @name        我的世界投影工坊弹窗屏蔽器
// @namespace   Violentmonkey
// @match       *://haomc.com/*
// @match       *://www.haomc.com/*
// @grant       GM_addStyle
// @version     1.0
// @description 屏蔽指定ID和类名的网页弹窗
// ==/UserScript==

GM_addStyle(`
  #wniui-popup-window.wniui-show-popup-window,
  .wniui-popup-window-title,
  .wniui-popup-window-divider,
  .wniui-popup-window-content {
    display: none !important;
  }
`);

function removePopup() {
  document.querySelectorAll('#wniui-popup-window.wniui-show-popup-window').forEach(el => el.remove());
}

// 初始化移除
window.addEventListener('DOMContentLoaded', removePopup);

// 创建观察器应对动态加载
const observer = new MutationObserver(removePopup);
observer.observe(document.body, {
  childList: true,
  subtree: true
});