nginx在windows和linux环境下的安装和使用，以及nginx.conf中server.location的配置

<!--more-->

## windows使用nginx

安装: 官网下载 [http://nginx.org/en/download.html](http://nginx.org/en/download.html ) 

使用: 解压后，打开powersehll，在nginx目录输入命令`./nginx`就能启动。(其实`./nginx`相当于 `./nginx -c ./conf/nginx.conf`，意思是指定配置文件)

## linux使用nginx

1.安装所需模块： gzip模块需要zlib库，ssl功能需要openssl库

```yum -y install make zlib zlib-devel gcc-c++ libtool  openssl openssl-devel```

2.安装pcre：rewrite模块需要pcre库

`yum -y install make zlib zlib-devel gcc-c++ libtool  openssl openssl-devel`

```bash

wget http://downloads.sourceforge.net/project/pcre/pcre/8.35/pcre-8.35.tar.gz
tar zxvf pcre-8.35.tar.gz  #解压安装包
rm pcre-8.35.tar.gz  #删除安装包
mv pcre* /usr/local/src  #移动文件夹到src目录
cd /usr/local/src/pcre-8.35
./configure 
make && make install #编译
pcre-config --version #查看版本

```

3. 安装nginx: 需先到官网查看最新版本

```linux

wget http://nginx.org/download/nginx-1.12.0.tar.gz
tar zxvf nginx-1.6.2.tar.gz
rm nginx-1.6.2.tar.gz
mv nginx* /usr/local/src
cd /usr/local/src/nginx-1.6.2
./configure --prefix=/usr/local/webserver/nginx --with-http_stub_status_module --with-http_ssl_module --with-pcre=/usr/local/src/pcre-8.35
make && make install
/usr/local/webserver/nginx/sbin/nginx -v

```

4.启动nginx

```bash

vim /etc/profile #添加内容
  export PATH=/usr/local/webserver/nginx/sbin:$PATH #添加PATH路径，文件最后一行添加
source /etc/profile #使得配置生效
nginx #启动nginx服务器

```

5.其他命令

```bash

检查配置文件:nginx -t
指定配置文件启动: nginx -c conf\my.conf
停止: nginx -s stop
重新启动: nginx -s reopen
重新载入配置文件: nginx -s reload

```

6.传文件到远程服务器。使用putty自带的pscp.exe进行传输

```bash

pscp -P 29487 -r D:\demo\blog\ root@138.128.207.165:/usr/www/blog/
29487是连接服务器的端口，跟putty连接端口一样，然后是windows文件目录，和远程服务器目录(用root访问)
pscp -P 29487 -r D:\demo\blog\admin\dist root@138.128.207.165:/usr/www/blog/admin/

```

## location的写法

配置nginx文件夹的conf/nignx.conf文件，server中location的配置规则。

```nginx.conf

=: 精确匹配,如A只匹配根目录结尾的请求，后面不能带任何字符串
^~: uri以某常规字符串开头，不是正则匹配
~: 区分大小写的正则匹配;
~*: 开头表示不区分大小写的正则匹配
/: 通用匹配, 如果没有其它匹配,任何请求都会匹配到

```

```nginx.conf

location  = / { ## 精确匹配 / ，主机名后面不能带任何字符串
  [ configuration A ] 
}
location  / {
  ## 因为所有的地址都以 / 开头，所以这条规则将匹配到所有请求
  ## 但是正则和最长字符串会优先匹配
  [ configuration B ] 
}
location /documents/ {
  ## 匹配任何以 /documents/ 开头的地址，匹配符合以后，还要继续往下搜索
  ## 只有后面的正则表达式没有匹配到时，这一条才会采用这一条
  [ configuration C ] 
}
location ~ /documents/Abc {
  ## 匹配任何以 /documents/ 开头的地址，匹配符合以后，还要继续往下搜索
  ## 只有后面的正则表达式没有匹配到时，这一条才会采用这一条
  [ configuration CC ] 
}
location ^~ /images/ {
  ## 匹配任何以 /images/ 开头的地址，匹配符合以后，停止往下搜索正则，采用这一条。
  [ configuration D ] 
}
location ~* .(gif|jpg|jpeg)$ {
  ## 匹配所有以 gif,jpg或jpeg 结尾的请求
  ## 然而，所有请求 /images/ 下的图片会被 config D 处理，因为 ^~ 到达不了这一条正则
  [ configuration E ] 
}
location /images/ {
  ## 字符匹配到 /images/，继续往下，会发现 ^~ 存在
  [ configuration F ] 
}
location /images/abc {  
  ## 最长字符匹配到 /images/abc，继续往下，会发现 ^~ 存在
  ## F与G的放置顺序是没有关系的
  [ configuration G ] 
}
location ~ /images/abc/ {
  ## 只有去掉 config D 才有效：先最长匹配 config G 开头的地址，继续往下搜索，匹配到这一条正则，采用
  [ configuration H ] 
}
location ~* /js/.*/.js

```

### location实际使用建议

第一个必选规则

```nginx.conf

location = / {
  proxy_pass http://tomcat:8080/index
}

```

第二个必选规则是处理静态文件请求，这是nginx作为http服务器的强项

有两种配置模式，目录匹配或后缀匹配,任选其一或搭配使用

```nginx.conf

location ^~ /static/ {
  root /webroot/static/;
}
location ~* .(gif|jpg|jpeg|png|css|js|ico)$ {
  root /webroot/res/;
}

```

第三个规则就是通用规则，用来转发动态请求到后端应用服务器
非静态文件请求就默认是动态请求，自己根据实际把握
毕竟目前的一些框架的流行，带.php,.jsp后缀的情况很少了

```nginx.conf

location / {
  proxy_pass http://tomcat:8080/
}

```

>参考文档: [http://www.runoob.com/linux/nginx-install-setup.html](http://www.runoob.com/linux/nginx-install-setup.html)
