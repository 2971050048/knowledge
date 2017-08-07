# Android Studio

## 配置jdk

---

下载安装后的jdk和jre放在同一个目录下。

在配置环境变量时，添加2个系统变量
`JAVA_HOME=D:\software\work\android\jdk`</br>
`CLASSPATH=.;%JAVA_HOME%\lib\dt.jar;%JAVA_HOME%\lib\tools.jar;`</br>

然后在 `Path` 中添加 `%JAVA_HOME%\bin` 和 `%JAVA_HOME%\jre\bin`

终端中输入 `java` 和 `javac` 查看是否配置成功。

在 android studio 中更改jdk位置: `file` -> `other settings` -> `jdk location`

## 配置android studio

---

打开软件: 安装目录下的 `studio.exe` 文件 </br>
代理配置:  `Tools` -> `Options` -> `Android SDK Manager` -> `Setting`

## 参考文档

---

- [android studio 安装配置](http://www.cnblogs.com/yanglh6-jyx/p/Android_AS_Configuration.html)</br>
