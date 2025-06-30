function wavegen(frequency, amplitude) {
    // 默认 viewBox 宽度，匹配原始 SVG
    const width = 200;
    // 根据频率计算周期
    const period = width / frequency;
    // 波形围绕的基准 y 坐标
    const baseY = amplitude;
    // 初始化路径
    let path = `M 0,${baseY}`;
    
    // 生成波形段
    for (let x = 0; x < width; x += period) {
        // 上升到波峰 (y=0)
        const x1 = x + period * 0.4; // 第一个控制点（周期的 40%）
        const x2 = x + period * 0.6; // 第二个控制点（周期的 60%）
        const xEnd = x + period;     // 波形周期的结束点
        path += ` C ${x1},${baseY} ${x2},0 ${xEnd},0`;
        // 如果未到达末尾，下降到波谷 (y=baseY)
        if (x + period < width) {
            const nextX1 = x + period * 1.4; // 平滑曲线的控制点
            const nextXEnd = x + period * 2; // 下一个周期的结束点
            path += ` S ${nextX1},${baseY} ${nextXEnd},${baseY}`;
            x += period; // 跳到下一个周期的起点
        }
    }
    
    // 确保最后一个周期回到 baseY
    if (width % period === 0) {
        const lastX = width - period;
        const x1 = lastX + period * 0.4;
        const x2 = lastX + period * 0.6;
        path += ` C ${x1},${baseY} ${x2},0 ${width},0 S ${width + period * 0.4},${baseY} ${width},${baseY}`;
    }
    
    // 闭合路径
    path += ` v ${amplitude} 0 H 0 Z`;
    
    // 计算 viewBox: "0 -height width height"
    const viewBoxHeight = amplitude * 2; // 总高度是振幅的两倍
    const viewBox = `0 -${viewBoxHeight / 2} ${width} ${viewBoxHeight}`;
    
    return {
        path: path,
        viewBox: viewBox
    };
}

// 测试参数
const result = wavegen(4, 20);
console.log(result);

// 应用到 SVG 元素
const gentleWave = document.querySelector('#gentle-wave');
if (gentleWave) {
    gentleWave.setAttribute('d', result.path);
    console.log(gentleWave);
} else {
    console.error('未找到 gentle-wave 元素');
}

// 设置 viewBox 属性
const svgElement = document.querySelector('.waves');
if (svgElement) {
    svgElement.setAttribute('viewBox', result.viewBox);
    console.log(svgElement);
} else {
    console.error('未找到 SVG 元素');
}