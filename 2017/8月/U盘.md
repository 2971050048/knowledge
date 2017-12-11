<!-- 2017/8/1  -->

# U盘

改名: 打开 `autorun.inf` , 设置 `label = perhaps`

## 一、制作启动盘

1、window环境：refus

2、ubuntu环境：`sudo usb-creator-gtk`

## 二、u盘文件格式

- fat32: 不支持4g以上的单个文件
- ntfs: 比较伤闪盘芯片，因为采用了“日志”式文件系统
- exfat: 最适合u盘
