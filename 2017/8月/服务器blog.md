<!-- 2017/8/29 -->

# 服务器装blog

## 一、mongodb

1、安装

```shell
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 0C49F3730359A14518585931BC711F9BA15703C6
echo "deb [ arch=amd64,arm64 ] http://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.4.list
sudo apt-get update
sudo apt-get install -y mongodb-org
```

2、启动

```shell
sudo service mongod start # 启动
sudo service mongod stop # 关闭
```

查看状态：`sudo service mongod status`

- 配置文件：`/etc/mongod.conf`
- 日志：`/var/log/mongodb`
- 数据库：`/var/lib/mongodb`

## 二、redis

1、安装

```shell
cd /root/redis
wget http://download.redis.io/releases/redis-4.0.1.tar.gz
tar xzf redis-4.0.1.tar.gz
mv redis-4.0.1/* ./
make # 编译
```

2、使用后台启动

`vim /root/redis/redis.conf`

将`daemonize no` 改为 `daemonize yes`

3、启动

`vim ~/.bash_aliases` 添加：

`alias redisstart='/root/redis/src/redis-server /root/redis/redis.conf'`

后台启动：`redisstart`

## 三、nginx

1、安装依赖库

```shell
# 1.安装gcc g++ pcre的依赖库
apt-get install -y build-essential libtool libpcre3 libpcre3-dev
# 3.安装zlib ssl依赖库
apt-get install -y zlib1g-dev openssl libssl-dev
```

2、安装pcre

```shell
cd /root/pcre
wget https://ftp.pcre.org/pub/pcre/pcre-8.41.tar.gz
tar -xzvf pcre-8.41.tar.gz
mv pcre-8.41/* ./
./configure
make && make install # 编译
pcre-config --version
```

3、安装nginx

```shell
cd /root/nginx
wget http://nginx.org/download/nginx-1.12.1.tar.gz
tar -xzvf nginx-1.12.1.tar.gz
mv nginx-1.12.1/* ./
./configure --with-http_ssl_module --with-pcre=/root/pcre
make && make install
/usr/local/nginx/sbin/nginx -v # 版本号
```

4、添加环境变量

`vim /etc/profile` 添加：

`export PATH=/usr/local/nginx/sbin:$PATH`

`source /etc/profile`

5、启动

- 检查配置文件: `nginx -t`
- 启动: `nginx || nginx -c conf\my.conf`
- 停止: `nginx -s stop`
- 重新启动: `nginx -s reopen`
- 重新载入配置文件: `nginx -s reload`

## 四、nvm

1、安装nvm

```shell
wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.33.2/install.sh | bash
source ~/.bashrc
command -v nvm #得到nvm表示安装成功
nvm install v8.3.0 #安装node
nvm use v8.3.0 #使用node
```

2、安装yarn

```shell
apt-get install curl
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
apt-get install apt-transport-https ca-certificates # 安装https
sudo apt-get update
sudo apt-get install yarn
```

## 五、文件传输

1.本地到远程：
`scp -P 29487 -r /home/perhaps/document/blog-vue root@138.128.207.165:/root/blog/`

2.远程到本地：
`scp -P 29487 -r root@138.128.207.165:/root/blog /home/perhaps/document/blog-vue/`

## 六、参考文档

- [mongodb官网文档](https://docs.mongodb.com/manual/text-search/)
- [redis官网文档](https://redis.io/download)
- [nginx官网下载](https://nginx.org/en/download.html)