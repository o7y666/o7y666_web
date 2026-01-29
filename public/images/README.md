# 图片资源说明

> 本地图片存放在 `public/images/` 目录下

## 文件夹结构

```
public/images/
├── categories/           # 分类封面图
│   ├── hardware.jpg     # 硬件设计
│   ├── software.jpg     # 软件学习
│   ├── ai.jpg           # AI 应用
│   └── exploring.jpg    # 探索中
├── projects/            # 项目封面图
│   ├── project-1.jpg
│   ├── project-2.jpg
│   └── ...
└── avatar.jpg           # 头像
```

## 图片规范

| 类型 | 推荐尺寸 | 格式 | 大小限制 |
|------|----------|------|----------|
| 分类封面 | 1600×900 | JPG/WebP | < 500KB |
| 项目封面 | 800×600 | JPG/WebP | < 300KB |
| 头像 | 400×400 | JPG | < 200KB |

## 使用方式

在代码中引用图片：

```tsx
// 方式1：直接引用（推荐）
import hardwareImg from '../images/categories/hardware.jpg';
<image src={hardwareImg} />

// 方式2：public 目录引用
<image src="/images/categories/hardware.jpg" />
```

## 注意事项

1. 图片命名使用小写字母和连字符
2. 推荐使用 WebP 格式以减小体积
3. 上传前请压缩图片
