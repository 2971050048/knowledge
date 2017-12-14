<!-- 2017/924 -->

# ubuntu下载安装工具

## 一、deb包

deb是debian linus的安装格式</br>
dpkg是Debian Package的简写，是为Debian专门开发的套件管理系统

```shell
sudo dpkg [commands] <package.deb>
[commands]: -i|-r|-P 安装|移除|安装清除
[commands]: -I|-s|-L 查看包详细信息|查看包详细信息|查看包所有文件
```

遇到的问题：

1、依赖缺失

```shell
sudo apt-get -f install
```
2、`Unknown media type in type 'all/all'`
```shell
sudo mv -vi /usr/share/mime/packages/kde.xml 
sudo mv -vi /usr/share/mime/packages/kde.xml.bak
sudo update-mime-database /usr/share/mime
```

## 二、ubuntu信息

- 查看内核: `uname -r`
- 查看系统版本号: `cat /etc/issue`

## 三、方便点的命令

1、apt免密运行

`sudo vim /etc/sudoers`, 

```shell
# 后添加
%sudo   ALL=(ALL:ALL) ALL
perhaps ALL=NOPASSWD: /usr/bin/apt-get
perhaps ALL=NOPASSWD: /usr/bin/dpkg
perhaps ALL=NOPASSWD: /usr/bin/vim
```

2、apt免sudo运行

`vim ~/.bash_aliases`

```shell
alias apt-get='sudo apt-fast'
alias apt-fast='sudo apt-fast'
alias vim='sudo vim'
```

## 参考文档

- [安装deb包](https://chentao92.github.io/2016/09/19/ubuntu16.04%E5%AE%89%E8%A3%85deb%E8%BD%AF%E4%BB%B6%E5%8C%85%E6%AD%A5%E9%AA%A4/)
