<!-- 2017/12/28 -->

# ubuntu学习笔记3

软件的开机启动，遇到的问题和解决方案，文件的查找，下载安装命令
<!--more-->

- [ubuntu学习笔记3](#ubuntu%E5%AD%A6%E4%B9%A0%E7%AC%94%E8%AE%B03)
  - [一、开机启动](#%E4%B8%80%E3%80%81%E5%BC%80%E6%9C%BA%E5%90%AF%E5%8A%A8)
  - [二、遇到的问题和解决方法](#%E4%BA%8C%E3%80%81%E9%81%87%E5%88%B0%E7%9A%84%E9%97%AE%E9%A2%98%E5%92%8C%E8%A7%A3%E5%86%B3%E6%96%B9%E6%B3%95)
  - [三、查找](#%E4%B8%89%E3%80%81%E6%9F%A5%E6%89%BE)
  - [四、下载安装](#%E5%9B%9B%E3%80%81%E4%B8%8B%E8%BD%BD%E5%AE%89%E8%A3%85)
  - [五、其他命令](#%E4%BA%94%E3%80%81%E5%85%B6%E4%BB%96%E5%91%BD%E4%BB%A4)
  - [六、各文件目录的用途](#%E5%85%AD%E3%80%81%E5%90%84%E6%96%87%E4%BB%B6%E7%9B%AE%E5%BD%95%E7%9A%84%E7%94%A8%E9%80%94)

## 一、开机启动

1、开机启动程序: `gnome-session-properties`

- ss-qt5
- guake
- redshift
- fcitx

2、开机启动脚本: 将脚本复制到 `/etc/init.d/` 目录下

```shell
sudo chmod 755 /etc/init.d/*.sh
sudo update-rc.d /etc/init.d/*.sh defaults 95
```

## 二、遇到的问题和解决方法

1、

- 耳机没有声音: `apti pavucontrol` -> `pavucontrol` -> 配置的hda关了，输出设备改为模拟耳机
- 改密码：`sudo passwd perhaps` lizi Poi12345
- 去掉密码环：`super+a` -> `seahorse`, 右键`密码`，更改密码为

2、`Unknown media type in type 'all/all'`

```shell
sudo mv -vi /usr/share/mime/packages/kde.xml
sudo mv -vi /usr/share/mime/packages/kde.xml.bak
sudo update-mime-database /usr/share/mime
```

## 三、查找

1、系统信息

- 查看内核: `uname -r`
- 查看系统版本号: `cat /etc/issue`

2、查看进程

```shell
ps -aux | grep '程序名'
kill -9 <pidNumber>
```

3、查找文件

- `locate filename`
- `whereis filename`
- `find 位置 -name filename`
  - `find / -name kcpstart.sh`

## 四、下载安装

1、dpkg

- deb是debian linus的安装格式
- dpkg是 `Debian Package` 的简写，是为Debian专门开发的套件管理系统

```shell
sudo dpkg [commands] <package.deb>
[commands]: -i|-r|-P 安装|移除|安装清除
[commands]: -I|-s|-L 查看包详细信息|查看包详细信息|查看包所有文件
```

## 五、其他命令

1、后台运行

`nohup <commands> >filename 2>&1 &`

## 六、各文件目录的用途

- `/`: 根目录，只存放目录
- `/bin` `/usr/bin`: 可执行二进制文件目录。对应的命令ls,tar,mv,cat<
- `/boot`: 系统启动时用到的文件。`/boot/vmlinuz，/boot/gurb`为内核文件。建议单独分区，分区大小100M即可
- `/etc`: 存放系统配置文件，不建议存放可执行文件，重要配置文件有 `/etc/inittab、/etc/fstab、/etc/init.d、/etc/X11、/etc/sysconfig、/etc/xinetd.d`，修改配置文件前记得备份。`/etc/X11 存放与x windows有关的设置`
- `/usr`: 放置软件
- `/opt`: 第三方软件。如 `bin,share,lib,local` 应用程序，共享数据，函数库文件，软件升级
- `/var`: variable 可变动的，例如 `mail,run,news,lock` 邮箱，程序相关，新闻组，文件锁
