<!-- 2017/5/29  -->

# git学习小结

## 一. 配置和原理

---

1.1 安装

`sudo apt-get install git`

1.2 基本配置

配置文件 `.gitconfig` 在用户目录下

```shell
# 用户名和密码
git config --global user.name "perhaps"
git config --global user.email "perhapszql@gmail.com"
# 生成ssh密钥对在用户目录，公钥打开全选复制到github中
ssh-keygen -t rsa -C "perhapszql@gmail.com"
```

1.3 配置别名

打开 `.gitconfig` 文件进行添加

```shell
[alias]
  st = status -sb
  ci = commit
  br = branch
  co = checkout
  df = diff
  ad = add
  cp = cherry-pick
  lg = log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit
  alias = config --get-regexp 'alias.*'
```

## 二. 基本命令

---

2.1 git原理

- 工作区: 当前工程(不包括.git)；
- 版本库：.git文件。包括暂存区和分区(master等)
- 忽略文件时: .gitignore

2.2 基本命令

git add|rm|diff|commit|status //增加文件|删除文件|difference|提交文件|状态
  git add . //add所有改动
  git diff          //是暂存区和工作区比较
  git diff --cached //是暂存区和分支比较
  git rm -f -r <file> //递归删除文件夹
git reset --hard HEAD^|commit-id //回到上个版本|回到某个版本号
git log|reflog //提交历史|命令历史
git checkout -- filename //撤销工作区的修改(将版本库版本替换工作区版本)
git reset HEAD filename  //撤销暂存区的修改
    git reset HEAD .
    git checkout -- .
git mv -f -r <source> <destination> //移动文件夹
    git mv -f -r koa/app.js koa/perhaps ./    //移动到当前目录下

远程库：
拷贝远程库 git clone git@github.com:perhaps-yo/knowledge.git
关联远程库：git remote add origin git@github.com:perhaps-yo/knowledge.git
取消关联：  git remote rm origin
推送到远程库：git push origin master //第一次才要"-u"参数
拉取到本地：git pull origin master
查看远程库信息: git remote -v
本地创建分支和远程分支对应: git checkout -b branch-name origin/branch-name
本地建立和远程分支的关联:   git branch --set-upstream branch-name origin/branch-name
删除远程分支： git push origin :gh-pages

分支管理策略：
1.master用于正式发布，dev(develop)用于日常开发
    git branch //查看当前分支
    git checkout -b dev master//新建并切换到分支dev
    git checkout master //切换到master分支
    git merge --no-ff dev //合并dev分支到master，--no-ff参数，表示禁用Fast forward

2.临时分支：feature,release,issue 功能|预发布|修补bug
(1)feature分支：(命名：feature-*) dev分支分出来
    git checkout -b feature-x dev
    git checkout dev
    git merge --no-ff feature-x
    git branch -d feature-x //删除分支
    丢弃一个没有被合并过的分支，可以通过git branch -D <name>强行删除

(2)release分支: (命名：release-*) dev分支分出来
    git checkout -b release-1.2 dev//测试版本
    git checkout master //没问题的话，就正式发布
    git merge --no-ff release-1.2
    git tag -a 1.2 //对合并的节点做标签
    git checkout dev //合并到dev分支
    git merge --no-ff release-1.2
    git branch -d release-1.2

(3)issue分支：(命名:issue-*) master分支分出来
    git checkout -b issue-1.2 master
    git checkout master
    git merge --no-ff issue-1.2
    git tag -a 1.2.1
    git checkout dev
    git merge --no-ff issue-1.2
    git branch -d issue-1.2

3.解决冲突
    git checkout master
    git merge --no-ff feature-1.3 //假设产生了冲突
    git status //查看冲突文件
    vim 冲突文件
    git add 冲突文件
    git commit -m "conflict fixed"
    git log --graph --pretty=oneline --abbrev-commit //查看当前分支
    git branch -d feature-1.3 //删除功能分支

4.修复bug
    dev工作没有完成时，先把工作现场git stash，然后master新建分支修复bug，修复后回到dev分支，再git stash pop，回到工作现场。
    git status //在dev，查看当前工作状态
    git stash
    git checkout -b issue-101 master //新建master下的分支issue-101
    git add 文件
    git commit -m "fix bug 101"
    git checkout master
    git merge --no-ff issue-101
    git branch -d issue-101 //修完bug，删除分支
    git checkout dev
    git stash list //查看stash内容
    git stash pop  //工作现场还原，继续工作

5.多人协作
    推送分支
        master分支是主分支，要时刻与远程同步；
        dev分支是开发分支，团队所有成员都需要在上面工作，也需要与远程同步；
        bug分支用于在本地修复bug，就没必要推到远程了，除非老板要看看你每周到底修复了几个bug；
        feature分支是否推到远程，取决于你是否和你的小伙伴合作在上面开发
    工作模式
        用git push origin branch-name推送自己的修改；
        如果推送失败，用git pull试图合并；(会尝试自动合并)
        如果合并有冲突，则解决冲突，并在本地提交；
        解决冲突后，再用git push origin branch-name推送

标签：
    git tag <name> //新建一个标签，默认为HEAD，可以指定commit-id；
    git tag -a <tagname> -m "blablabla..." //指定标签信息；
    git tag -s <tagname> -m "blablabla..." //用PGP签名标签；
    git tag //查看所有标签
    git push origin <tagname> //推送一个本地标签；
    git push origin --tags    //推送全部未推送过的本地标签；
    git tag -d <tagname>      //删除一个本地标签；
    git push origin :refs/tags/<tagname> //删除一个远程标签。

## 参考文档

---

- [官网](https://git-scm.com/)
- [下载](https://git-for-windows.github.io/)
- [git常用命令](http://www.cnblogs.com/cspku/articles/Git_cmds.html)
