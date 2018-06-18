<!-- 2018/5/1 -->

# wafer

教程：[wafer2-startup](https://github.com/tencentyun/wafer2-startup)

1、作用

快速构建具备弹性能力的小程序

购买服务器和域名，搭建数据库

4、注意：json只有mysql5.7才能使用，所以生产环境不能用json

## 一、配置

1、开发环境：
wwtwosmu.qcloud.la
119.29.96.102
node8.2.1, mysql5.7.18, nginx1.10.2

2、生产环境
997609312.jnuexchange.xyz
122.152.251.202
node8.2.1, mysql5.6.28, nginx1.10.2
1G内存

3、mysql数据库

- wwtwosmu.qcloud.la/phpmyadmin/ wx18d038d16eacd34b
- 997609312.jnuexchange.xyz/phpmyadmin/ IBTGLTWO

4、使用wafer2-startup

- 下载源码，改server/config.js的mysql密码为appid，安装server依赖
- 上传测试代码，获得测试用的request地址，放到client/config.js的host中

## 参考文档
