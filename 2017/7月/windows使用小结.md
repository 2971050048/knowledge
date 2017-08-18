<!-- 2017/7/19  -->

# windows使用小结

## 一、powershell常用命令

- 清楚DNS缓存: `ipconfig /flushdns`
- 清屏|清行: `clear|esc`
- 得到当前路径|去哪个路径: `get-location|set-location d:/tools`
- 获得别名ls的命令: `get-alias ls`
- 用默认编辑器打开当前文件夹 `code .`
- 新建文件: `new-item mongodb.log`
- 新建文件夹: `mkdir data`

查看端口占用

```shell
netstat -ano|findstr '8080' # 找到对应pid为13784
taskkill /PID 13784 /F
```

'命令 /?' 可以查看该命令的帮助

## 二、问题解决

1、任务管理器卸载任务出现"等待卸载或更新程序"

任务管理器 `ctrl+shift+esc -> dllhost.exe`, 结束进程

2、远程桌面: `win+r -> mstsc`

3、关闭开机启动

- `运行->msconfig->启动`； 或者软件 `autoruns`
- win10添加开机启动: `C:\ProgramData\Microsoft\Windows\Start Menu\Programs\StartUp`添加快捷方式即可

4、更改hosts

- 地址 `C:\Windows\System32\drivers\etc`
- 权限设置：属性->安全->高级->添加->选择主体->高级->立即查找->users->勾选全部权限
- 内容设置: 127.0.0.1 网址，可以屏蔽相应网站

## 三、快捷键

```shell
alt+space+x|n: 最大|最小化窗口
win:
    win+上|下箭头: 最大化窗口|恢复正常
    win+左|右箭头: 窗口占显示屏一半
    win+home: 最小化其他窗口
    win+d|e|p|r|x: 查看桌面|打开'我的电脑'|外接显示|运行对话框|windows移动中心
    win++|-: 放大镜
    win+l: 锁定桌面
f:
    f2: 重命名
    f3: 查找所有文件(ctrl+f)
    f11: 全屏模式
ctrl:
    ctrl+z|y: 撤销|取消撤销
    ctrl+shift: 鼠左,拖动创建快捷方式
    ctrl+shift+n: 新建文件夹
    ctrl+shift+esc: 打开任务管理器
    ctrl+d|c|v|x: 删除|复制|剪切|粘贴
    ctrl+pageup|pagedown: 同一程序不用窗口切换
alt:
    alt+d|ctrl+l: 定位到浏览器url
    alt+d+enter: 打开与当前页面相同的新浏览器视窗
    alt+enter: 选定对象的属性
shift:
    shift+delete: 永久删除文件(不经过回收站)
```

## 四、win10的用户和域用户

申请普通用户时用户权限分为"管理员"和"用户"

域相当于局域网，公司先分配域用户给新员工，然后员工需要域管理员的帮忙"加域"，因为加域的过程是双向的，即这边申请加域，需要域管理员的确认，所以可以开启远程桌面，让域管理员帮我们配置

有了域就能这台计算机加入了公司的局域网，接着就能访问内网和外网。同时数据包还是域管理员的监控。

查看本机的域：设置->账户->从工作单位或学校访问</br>
加域的过程中还需修改计算机名。</br>

查看用户账号：控制面板->更改用户类型

开启远程：计算机右键属性->远程设置->允许远程到此计算机
