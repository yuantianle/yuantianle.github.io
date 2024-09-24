// 引入 Fancybox 的 JavaScript
var fancyboxScript = document.createElement("script");
fancyboxScript.src = "https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.umd.js";
document.head.appendChild(fancyboxScript);

fancyboxScript.onload = function () {
    // 绑定所有图片，启用 Fancybox 的基本功能
    Fancybox.bind("img", {
        zoom: true,        // 启用图片放大功能
        draggable: true,   // 允许拖拽图片
        wheel: true,        // 支持鼠标滚轮缩放
        slideshow: {
            autoStart: false,  // 设置为 true 时自动开始幻灯片播放
            speed: 3000,       // 幻灯片切换速度（以毫秒为单位）
        },
        Toolbar: {
            display: [
                "zoom",        // 放大功能
                "fullscreen",  // 全屏功能
                "slideshow",   // 幻灯片播放
                "thumbs",      // 缩略图
                "close"        // 关闭按钮
            ],
        },
        keyboard: {
            Escape: "close",    // 按下 Esc 键关闭图片
            Delete: "close",    // 按下 Delete 键关闭图片
            ArrowRight: "next", // 右方向键切换到下一张图片
            ArrowLeft: "prev",  // 左方向键切换到上一张图片
        },
    });
};