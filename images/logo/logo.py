from PIL import Image
import os

# 输入和输出路径
input_path = '/Users/shilai/Work/Dev/website/qinghua/images/logo/qinghua-logo1024.png'
output_dir = '/Users/shilai/Work/Dev/website/qinghua/images/icons'

# 确保输出目录存在
os.makedirs(output_dir, exist_ok=True)

# 输出尺寸和文件名映射
icon_sizes = {
    "favicon-16x16.png": (16, 16),
    "favicon-32x32.png": (32, 32),
    "favicon-96x96.png": (96, 96),
    "apple-touch-icon.png": (180, 180),
    "android-chrome-192x192.png": (192, 192),
    "android-chrome-512x512.png": (512, 512),
    "mstile-150x150.png": (150, 150),
    "og-image.png": (1200, 630),  # 社交分享图（可选裁剪）
    "favicon.ico": (48, 48),  # 作为ICO图标保存
}

# 打开原图
original = Image.open(input_path)

# 生成每个图标尺寸
for filename, size in icon_sizes.items():
    resized = original.resize(size, Image.LANCZOS)

    # .ico 格式单独处理
    if filename.endswith(".ico"):
        resized.save(os.path.join(output_dir, filename), format="ICO")
    else:
        resized.save(os.path.join(output_dir, filename), format="PNG")

print("✅ 所有图标已成功生成！输出目录：", output_dir)
