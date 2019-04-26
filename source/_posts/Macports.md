---
title: Macports使用简介
date: 2017-09-08 10:34:10
tags: Mac
---

安装
--------
[Macports](https://www.macports.org/)是一款供Mac系统的包管理器，主要用来安装软件，卸载软件更新软件等。继续阅读之前需要按照[官网](https://www.macports.org/install.php)指示安装Macports.

如果使用官网提供的安装器安装，安装成功后，默认会将Macports拷贝到 */opt/local*,执行文件将放在*/opt/local/bin*,其他文件会放在*/opt/local/var/macports*,最后会把目录*/opt/local*通过配置文件*~/.profile*添加到环境变量中(PATH)中。

可以通过:
```
$ port version
```
port是Macports的执行命令,上面的命令可以查看Macports的版本，如果成功输出如*Version: 2.4.1*滋字样，说明Macports已经安装成功了，否则就需要检查是否安装失败，或者环境变量添加失败。


常用命令
-------
**1. 查看帮助**
可以通过linux man命令查看:
```
$ man port
$ man macports.conf
```
Macports也提供了port help命令查看帮助文档:
```
查看port的帮助文档
$ port help 

其后跟行为参数，可以查看行为的详细介绍，如：
$ port help selfupdate
```

**2. port selfupdate**
port命令后跟selfupdate指令可以更新Macports、本地Portfiles（保存服务器port信息的数据库）(因此安装成功后就应该检查更新一次)。
```
$ sudo port selfupdate 
```
selfupdate后可跟参数：

参数名 | 作用
------- | -------
-d 	 | 开启debug模式，一旦命令执行错误，可以查看更多详细信息
--nosync |	只更新Macports本身，不更新本地数据库


**3. port diagnose**
检查运行环境常见问题，把发现的问题都列出来
```
$ port diagnose 
```

参数名 | 作用
------- | -------
--quiet |只显示警告和错误，不显示执行脚本状态


**4. port reclaim**
移除不活跃的软件
```
$ port reclaim
```

**5. port list**
列出所有可以通过Macports安装的port的列表（不是已安装的列表）。
```
$ port list
```

**6. port search**

匹配名称／描述符合关键词的软件，如搜索php：
```
$ port search php
```

参数名 | 作用
------- | -------
--glob	|对给定的搜索字符串作为全局搜索的字符串（即扩展通配符*、？和[字符]。这是默认行为。
--regex	|将给定搜索字符串视为正则表达式。
—line	|指定每一个匹配的port信息在一行上输出
--case-sensitive |大小写敏感
field|	测试搜索关键字与指定字段（field）进行匹配，默认匹配字段为 —name —description

可用的field字段有：

参数名 | 作用
------- | -------
	--category, --categories	|在指定分类中搜索
	--depends, --depends_build, --depends_extract, --depends_fetch, --depends_lib, --depends_run |搜索所有依赖名为搜索关键字的port的port，--depends包含其他所有的--depends_ options。
	--description, --long_description|对port的描述部分进行匹配
	—homepage|对所有ports的homepage字段进行匹配
	--maintainer, --maintainers|搜索某个维护者相关的ports
	—name	|只对port的名称进行匹配
	--portdir|匹配包含在给定目录名下的port
	--variant, --variants|搜索匹配关键字的变体

**7. port info**
可以获取软件的信息，如（名称，版本，官网等），如：
```
$ port info nginx
```

**8. port deps**
可以查询软件的依赖

**9. port variants**
port variants 查询新版本相对于已安装版本的差异

	
**10. port install**
安装软件，例如：
```
$ sudo port install apache2 -preforkmpm +workermpm
```
安装apache2，不安装其中的preforkmpm，安装workermpm.
如果安装失败可以通过port logfile <portname> 查看日志，sudo port clean <portname>清除安装失败的port。


**11. port clean**
清理安装过程中所产生的文件，在安装软件失败后经常会用到
	sudo port clean <portname>
```
$ sudo port clean mysql56
```

参数：

参数名 | 作用
------- | -------
--archive 	|清理临时压缩文件
--dist		|清理下载的文件
--logs		|清理日志文件
--work		|清理安装进程所用目录，此目录是MacPorts构建软件所用，此选项是默认选项。
--all			|清理所有




**12. port uninstall** 
卸载安装

格式:
```
$ sudo port uninstall <portname>
```

参数名 | 作用
------- | -------
--follow-dependents 	|	Macports不会卸载还被依赖的port，此选项可以递归卸载安装，比如B 依赖A，卸载A默认是不可以的，使用此选项可以先卸载B，再卸载A。
--follow-dependencies	|	Macports不会卸载安装port时所安装的依赖，此选项可以卸载那些被卸载软件的依赖但并没有被其他软件所依赖的软件。
-f						|(force)，强制卸载port，忽略软件间的依赖关系（尽量不要使用这个选项，除非你特别清楚你所做的操作）
--no-exec				|卸载时不在触发事件监听，比如卸载时更新本地缓存将不会被执行。


**13. port contents**
列出所有指定软件的所有安装的文件,此命令经常被用来寻找所安装软件的执行文件路径：
```
$ port  contents <portname> | grep -E '/s?bin/'
```

参数名 | 作用
------- | -------
--size			|	列出文件时，同时给出文件大小
— units ‘UNIT’ |		配合—size使用，指定显示文件大小的单位

‘UNIT’包含以下几种：
	B
	K, Ki,KiB
	Mi,MiB
	Gi,GiB
	k, kB
	M, MB
	G, GB



**14. port installed**
列出已安装的软件及其变体，可以指定软件名，显示与所指定软件相关的安装。
```
$ port installed
```
-v	显示安装的平台以及CPU等信息



**15. port outdated**	
列出所有版本已旧（已有新版本发布）的软件。



**16. port upgrade**
更新旧版本的已安装软件及其依赖，如：
```
$ port upgrade nginx
更新nginx

$ port upgrade outdated
更新所有旧版本已安装软件及其依赖，
```


**17. port dependents**
查询依赖已安装的指定软件的软件,比如：
```
$ port dependents php56
查询电脑中有哪些软件依赖php56
```





