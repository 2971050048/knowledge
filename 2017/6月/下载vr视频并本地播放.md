<!-- 2017/6/2  -->

# 下载VR视频并本地播放

有个很要好的朋友，很喜欢林俊杰，jj的<<弹唱>>使用了vr技术拍摄成全景视频，想给她看4k的版本，所以就研究了下如何下载youtube的4k视频，并能在本地播放

## 一、为什么要去youtube

其实国内也有一些vr视频网站，像这个 [utovr](http://www.utovr.com/) ，里面的资源也很多，但jj的<<弹唱>>在这里看感觉效果没达到我的要求，所以就去 [youtube](https://www.youtube.com/) 下载4k画质的视屏。

## 二、工具

- shadowsocks，科学上网
- ffmpeg, 作用是将视频音频混流，下载地址为: [https://ffmpeg.org/download.html](https://ffmpeg.org/download.html)
- youtube-dl,作用是下载youtube视频, 下载地址为: [https://rg3.github.io/youtube-dl/download.html](https://rg3.github.io/youtube-dl/download.html),
- GoPro VR Player, 作用是本地播放vr视频，下载地址为: [http://www.kolor.com/gopro-vr-player/download/](http://www.kolor.com/gopro-vr-player/download/)
- 格式工厂，转化为视频格式

## 三、研究过程

首先要下载youtube视频，是需要科学上网，我租了国外服务器，利用shadowsocks就能让整个寝室一起访问国外资源。

ffmpeg, 下载后将bin文件夹放到环境变量中。因为从youtube下载的视频和音频是分开的，所以需要借助这个工具用混流技术合并音视频

- ffmpeg教程: [http://blog.sina.com.cn/s/blog_4618a6280100vwux.html](http://blog.sina.com.cn/s/blog_4618a6280100vwux.html)
- 命令详解: [http://blog.csdn.net/leixiaohua1020/article/details/12751349](http://blog.csdn.net/leixiaohua1020/article/details/12751349)
- 使用举例，将"视频.mp4"和"音频.m4a"合并成"合并.mp4"

```bash
ffmpeg -i 视频.mp4 -i 音频.m4a -vcodec copy -acodec copy 合并.mp4
```

youtube-dl，这个强大的命令行工具可以下载大部分视频网站的视频，使用教程可以看 github的readme.md文件: [https://github.com/rg3/youtube-dl](https://github.com/rg3/youtube-dl)。使用前shadowsocks需要开启"全局模式"。

```bash
# 这是我下载"弹唱"视频时的命令
./you-dl -f 'bestvideo+bestaudio' https://youtu.be/U-VisNVbXH4 --merge-output-format mkv
# 意思是下载最好的视频(4k)和最好的音频，然后合并成mkv文件，合并的时候会自动借助ffmpeg的帮助
```

下载好以后，发现可以用potplayer打开，但不能用goprovrplayer打开文件，一开始以为是格式问题或者合并出错了，所以重新下载成mp4格式，还是不能播放，再下载成webm格式，还是能用potplayer打开而不能用provrplayer打开。猜想是合并的不完整还是其他问题？不知道，所以尝试用"格式工厂"转为化avi格式，最终能成功播放。

我找了好多的视频软件尝试播放vr视频，包括"utovr", "vrplayer", "bsplayer"，都失败。猜到是硬件问题，因为vr视频本地播放对硬件还是有要求的，我的笔记本的CPU是AMD, 显卡也很弱，所以就用台式(intel5)试了下，前面提到的3个软件还是不能用，最终找到"GoPro VR Player"，成功了。但再用笔记本试试，瞬间卡死，果然对硬件有要求。
