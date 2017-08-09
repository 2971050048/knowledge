<!-- 2017/5/30  -->

# windows软件

## 一、软件清单

---

1、工作

```shell
chrome|vscode|护眼宝|ss|搜狗输入法绿色版
bandzip|wps|snipaste|github
everything|xampp|ps|typora(编辑md)|sublime|坚果云
teamviewer|xmind(思维导图)|autoruns(开机启动)|procexp
putty|lantern|irfanview(图片查看)|sumatraPDF(pdf阅读)|cajViewer
```

2、娱乐

```shell
ADSafe|网易云音乐|tim|potplayer|爱壁纸
audacity(音频编辑)|OBSstudio(直播录像)
```

3、下载工具

```shell
迅雷9|IDE|youtube-dl
```

4、手机

```shell
ss|lantern|tim|wechat|知乎|网易云|alipay
高德地图|wifi钥匙
每日英语听力|quara(国际版'知乎')|kindle app|欧陆词典(代替有道词典)
facebook|百度贴吧
漫画？快图？酷市场
??微博国际版|weico酷安
```

5、待研究...

```shell
myersplash
种子搜索神奇
个人防火墙: comodo
网盘: owncloud
杀毒: ESET|小红伞
浏览器插件: httpseverywhere|noscript|abp??
同步: resilio sync(能取代坚果云？)
管理电子书: calibre(配合kindle)
音乐播放器: itunes
笔记: 印象笔记
漫画: 布卡漫画|icomic
```

## 二、软件配置

---

1、everything

```shell
官网: http://www.voidtools.com/
指定文件夹搜索: 
  设置: 搜索->'匹配路径'+'所有'
  e:\software\*.txt 表在e:\software下所有.txt结尾的文件
正则搜索:
  设置: 搜索->'正则'+'所有'
开启ftp|http服务器:
  设置: 工具->选项->http->接口为ip地址
```

2、[adobe软件](http://www.lookae.com/cc2017/)

3、[snipaste教程](https://docs.snipaste.com/#/zh-cn/getting-started)

4、youtube-dl: (最好ss设置为全局模式)

```shell
E:\download\you-dl
./you-dl URL
./you-dl URL -F //查看可下载的资源
./you-dl URL -f format_code|bestvideo+bestaudio --merge-output-format mkv|mp4|ogg|webm|flv //下载视频+音频，合并为对应格式，
./you-dl URL -f 'bestvideo[height>=?2000]'  //下载4k视频
常用：  ./you-dl -f 'bestvideo+bestaudio' --merge-output-format mkv URL 
下载弹唱: ./you-dl -f 'bestvideo+bestaudio' https://youtu.be/U-VisNVbXH4 --merge-output-format mkv

参数:
--help : 查看所有可用的參數及說明。
-U : 更新 youtube-dl。
-F 影片網址 : 只顯示指定網址影片提供了哪些格式。
-f 影片格式代碼 : 指定要下載的影片格式，預設是用最高解析度，要注意有些格式只有影像，不含聲音。
-a 文字檔檔名 : 批次下載影片(文字檔內一行一部影片的網址)。
-o : 設定儲存時的檔名「格式」，預設是儲存在目前目的資料夾中，用 "標題-ID.格式副檔名" ，也就是「-o "%(title)s--%(id)s.%(ext)s"」。
如果只想用標題不想加上 ID，而且想儲存在 vidoe 資料夾中，可以利用底下的參數：
-o "video/%(title)s.%(ext)s"
-x : 只下載聲音。
--audio-format : 指定聲音的格式，例如：--audio-format mp3，不過必須在目錄中有影音轉檔的程式 ffmpeg 或 avconv 搭配使用。
--audio-quality : 設定聲音轉檔時的音質，0～9 ，數字愈小，品質愈高。預設值是 5 (128K)。
--playlist-start : 指定 Youtube 播放清單由第幾部影片開始。
--playlist-end : 指定 Youtube 播放清單到第幾部影片。
--no-playlist : 不以 Youtube 播放清單來下載，只下載目前的影片。
--no-warnings : 不要顯示錯誤訊息。
--list-extractors : 列出 youtube-dl 可解析的網站。
```

5、迅雷9去广告

```shell
C:\Windows\System32\drivers\etc, 打开hosts
# 迅雷
127.0.0.1 pc.xunlei.com
127.0.0.1 plugin.xl7.xunlei.com
127.0.0.1 home.xl9.xunlei.com
127.0.0.1 misc.xl9.xunlei.com
127.0.0.1 admin.static.xl9.xunlei.com
127.0.0.1 act.niu.xunlei.com
127.0.0.1 resource.niu.xunlei.com
127.0.0.1 v2.boxcfg.niu.xunlei.com
127.0.0.1 static2.ssp.xunlei.com
127.0.0.1 adsp.xunlei.com
127.0.0.1 dm.xiazaibao.xunlei.com
127.0.0.1 api-xl9-ssl.xunlei.com
127.0.0.1 etl-xlmc-ssl.xunlei.com
127.0.0.1 misc-xl9-ssl.xunlei.com
127.0.0.1 static-xl9-ssl.xunlei.com
127.0.0.1 api-shoulei-ssl.xunlei.com
```

安装目录，删除文件:

```shell
Thunder9\Data\AdBrowser
Thunder9\Data\AdPlatform
Thunder9\Data\AdTaskList
Thunder9\Data\AdTaskListTextLink
Thunder9\Data\AdDownloadTranscript\Icon
Thunder9\Profiles\XLBrowserApp\thunder_adlist.txt
```

6、potplayer

载入音轨: 右键->打开->载入音轨

7、[sumatraPDF](https://www.sumatrapdfreader.org/download-free-pdf-viewer.html)

8、IDM

```shell
代理服务器: http://127.0.0.1:1080/pac?t=201706131301363141
破解版: http://www.pc6.com/softview/SoftView_24680.html#download
添加idm插件到chrome：
  在安装目录找到"IDMGCExt.crx"文件，改成"IDMGCExt.zip",解压后打开文件，删除"_metadata"文件夹。
  在chrome设置里，勾选"开发者模式","加载已解压的扩展程序",勾选文件，搞定
```

9、百度云在线下载 (chrome插件)

下载时: 得到链接地址，再用迅雷或idm下载

[下载地址](https://chrome.google.com/webstore/detail/%E7%99%BE%E5%BA%A6%E4%BA%91%E5%A4%A7%E6%96%87%E4%BB%B6%E4%B8%8B%E8%BD%BD%E7%A0%B4%E8%A7%A3/jnodfjpjimimdaikplcmpoknojongked?utm_source=chrome-app-launcher-info-dialog)

10、VR

- [BSplayer](http://bsplayer.com/bsplayer-chinese/download-free.html)
- [VRplayer](http://www.haosevr.com/4856.html#prettyphoto[group]/1/)
- [provrplayer](https://pan.baidu.com/s/1eRI5RNW) 密码: bb7g
- [VR资源](http://www.utovr.com/)
- [VR播放器](https://tieba.baidu.com/p/4559428852)

11、ffmpeg: 混流技术

[教程](http://blog.sina.com.cn/s/blog_4618a6280100vwux.html)</br>
[命令详解](http://blog.csdn.net/leixiaohua1020/article/details/12751349)

```shell
ffmpeg -i 酷爱-2008-视频.mp4 -i 酷爱-2008-音频.m4a -vcodec copy -acodec copy 酷爱-2008.mp4
ffmpeg -i 轩动心弦-2010-视频.mp4 -i 轩动心弦-2010-音频.m4a -vcodec copy -acodec copy 轩动心弦-2010.mp4
ffmpeg -i 风起了-视频.webm -i 风起了-音频.webm -vcodec copy -acodec copy 风起了.mp4
得到弹唱: you-dl+ffmpeg得到webp视频，在用格式工厂转为avi视频，用provrplayer播放
```

12、[WPS去广告](https://mopiaoyao.ctfile.com/dir/4187640-18229844-2c0b88/)
