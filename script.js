document.addEventListener('DOMContentLoaded', () => {
    const snowContainer = document.getElementById('snow-container');

    // 创建雪花的函数
    function createSnowflake() {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.textContent = '❄'; // 你也可以换成 • 或者 *
        
        // 随机大小
        const size = Math.random() * 10 + 10 + 'px';
        snowflake.style.fontSize = size;
        
        // 随机水平位置
        snowflake.style.left = Math.random() * 100 + 'vw';
        
        // 随机下落时间 (2s - 7s)
        const duration = Math.random() * 5 + 2 + 's';
        snowflake.style.animationDuration = duration;
        
        // 随机透明度
        snowflake.style.opacity = Math.random();

        snowContainer.appendChild(snowflake);

        // 动画结束后移除元素，防止内存溢出
        setTimeout(() => {
            snowflake.remove();
        }, parseFloat(duration) * 1000);
    }

    // 每 100 毫秒生成一个雪花
    setInterval(createSnowflake, 100);
});