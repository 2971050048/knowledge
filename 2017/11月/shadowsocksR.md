<!-- 2017/11/26 -->

# ssr

<!-- more -->

## shadowsocksR 和 shadowsocks区别

ssr在ss的基础上加了 `数据混淆` 和 `协议转换`, 令数据包更难被gfw辨认，更安全，隐蔽性更强。

对应软件

iso

ss: wingy, waterdrop, shadowrocket(收费)
ssr: wingy, shadowrocket

## mac装shadsocksX-NG

下载：`https://github.com/shadowsocks/ShadowsocksX-NG/releases`

解压：`unzip ShadowsocksX-NG.1.7.1.zip -d /applications/`
然后在 launchpad 里面，双击shadowsocksX-NG就能启动程序了

## ss.4.0.6版本开始支持插件选项

只是kcptun的下载要换成ss自己的kcptun：
[kcptun](https://github.com/shadowsocks/kcptun/releases/download/v20170718/kcptun-linux-amd64-20170718.tar.gz)

把kcptun放到shadowsocks.exe相同的目录

插件：kcptun。
插件选项：mode=fast2

或者用gclient：[kcptun](https://github.com/xtaci/kcptun/releases/download/v20180316/kcptun-linux-amd64-20180316.tar.gz)

## 参考文档

- [大陆翻墙秘术](https://unwire.hk/2017/08/07/shadowsocksr-ios/tips-2/)
- [破娃博客](https://breakwa11.blogspot.co.at/?m=1)
- [ssr-backup](https://github.com/shadowsocksr-backup)
- [逗比: ssr客户端教程](https://doub.io/ss-jc10/)
