<!-- 2017/7/18  -->

# win10专业版激活

## 一、第一次尝试

---

以管理员身份打开 `powershell.exe` ，输入以下命令

```shell
slmgr.vbs /upk # 卸载win10产品密钥
slmgr /ipk W269N-WFGWX-YVC9B-4J6C9-T83GX # 安装新的产品密钥
slmgr /ato # 激活密钥
```

win10产品密钥地址：[win10之家](http://www.w10zj.com/Win10xy/Win10yh_1538.html)

尝试了好多密钥，结果还是失败。感觉大部分密钥的使用次数都被用了。

## 二、第二次尝试

---

思路：不使用永久激活，而是循环激活，180天就得激活一次。

用软件 [MicroKMS激活.exe](http://pan.baidu.com/s/1cDrOtw) 密码：5hbx

点击"激活win10 all"就可以了

用`win+r`打开运行窗口，输入命令 `slmgr.vbs -xpr` 来查看是否激活成功

## 三、参考文档

---

- [百度经验：win10专业版永久激活教程](http://jingyan.baidu.com/article/a948d65105b7ed0a2ccd2e6d.html)
- [百度经验：Win10专业版永久激活方法](http://jingyan.baidu.com/article/73c3ce2812e0ede50343d9f8.html)
- [win10之家：永久激活密钥](http://www.w10zj.com/Win10xy/Win10yh_1538.html)
