<!-- 2017/8/7  -->

# Android Studio

## 一、安装配置

1、配置jdk和jre

下载安装后的jdk和jre放在同一个目录下。

在配置环境变量时，添加以下系统变量

```shell
JAVA_HOME=D:\software\work\android\jdk
CLASSPATH=.;%JAVA_HOME%\lib\dt.jar;%JAVA_HOME%\lib\tools.jar;
ANDROID_HOME=D:\software\work\android\sdk
```

`Path` 添加

```shell
%JAVA_HOME%\bin
%JAVA_HOME%\jre\bin
D:\software\work\android\sdk\tools
D:\software\work\android\sdk\platform-tools
```

终端中输入 `java` 和 `javac` 查看是否配置成功。

在 android studio 中更改jdk位置: `file` -> `other settings` -> `jdk location`

2、配置android studio

- 打开软件: 安装目录下的 `bin\studio64.exe` 文件
- 代理配置:  `Tools` -> `Options` -> `Android SDK Manager` -> `Setting`
- [android studio配置](https://reactnative.cn/docs/0.47/getting-started.html#android-studio)

3、配置python2

- [安装](https://www.python.org/ftp/python/2.7.13/python-2.7.13.msi)
- path添加 `D:\software\work\python2` 和 `D:\software\work\python2\Scripts`

4、安装Genymotion模拟器

- [Genymotion](https://www.genymotion.com/download)
- [VirtualBox](https://www.virtualbox.org/wiki/Downloads)
- [Enabling Virtualization Technology in BIOS](https://amiduos.com/support/knowledge-base/article/enabling-virtualization-in-bios)

5、安装 react-native-cli

`npm i react-native-cli -g`

6、npm配置

```shell
npm config set registry https://registry.npm.taobao.org --global
npm config set disturl https://npm.taobao.org/dist --global
```

7、下载 [gradle](https://gradle.org/install/#manually)

## 二、使用

1、新建项目：`react-native init MyProject`

2、运行packager：`react-native start`

3、运行模拟器

4、安卓运行：`react-native run-android`

## 三、参考文档

- [android studio 安装配置](http://www.cnblogs.com/yanglh6-jyx/p/Android_AS_Configuration.html)
