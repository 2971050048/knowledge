<!-- 2017/8/28 -->

# websocket和webrtc

## 一、WebSocket

WebSocket是一种网络通信协议，服务器可主动向客户端推送信息，客户端也可主动向服务器发送信息，是双向平等对话。

没有同源限制，客户端可以与任意服务器通信，完全可以取代 Ajax。

协议标识符是ws（如果加密，则为wss，对应 HTTPS 协议），服务器网址就是 URL。

## 二、WebRTC

网络实时通信。(Web Real Time Communication)

1、作用

- 获取音频和视频
- 进行音频和视频通信
- 进行任意数据的通信

2、API

- getUserMedia
- RTCPeerConnection
- RTCDataChannel

## 三、参考文档

- [阮：WebSocket](http://javascript.ruanyifeng.com/htmlapi/websocket.html)
- [阮：WebRTC](http://javascript.ruanyifeng.com/htmlapi/webrtc.html)
