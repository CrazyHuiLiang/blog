---
title: CentOS虚拟机无法连接网络
date: 2016-12-16 15:54:51
tags: Linux
---

 cd /etc/sysconfig/network-scripts/

 sudo vim ifcfg-eno16777736

更改ONBOOT=no 为 ONBOOT=yes

重启网络 service network restart





