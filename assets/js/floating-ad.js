// 悬浮广告功能
document.addEventListener('DOMContentLoaded', function() {
    // 创建悬浮广告元素
    const floatingAd = document.createElement('div');
    floatingAd.className = 'floating-ad';
    floatingAd.innerHTML = `
        <img src="https://tg10000.com/assets/images/logos/电报会员.png" alt="广告">
    `;

    // 添加点击事件
    floatingAd.addEventListener('click', function() {
        window.open('https://shop.tg10000.com', '_blank');
    });

    // 将广告添加到页面
    document.body.appendChild(floatingAd);

    // 延迟显示广告
    setTimeout(function() {
        floatingAd.style.display = 'block';
    }, 1000);
});