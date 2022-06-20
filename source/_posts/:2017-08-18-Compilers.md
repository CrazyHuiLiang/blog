---
title: Compilers
tags:
comments: true
date: 2017-02-13 20:54:14
---

## MSVC

微软出的，通常用于编译Windows应用

## gcc

是`GNU compiler collection`的缩写，是一个编译器集合，包含很多语言的编译器(c,c++,Objective-c,Ada, Fortran, Java). 当你调用`gcc`时不一定是调用c/c++编译器，是gcc根据文件扩展名自动识别并调用对应编译器。

### GCC/g++

gcc的 c++ 编译器

## cc

是来自Unix的c语言编译器，是c compiler的缩写。

Linux下的`cc`是`gcc`的符号链接。可以通过`$ls –l /usr/bin/cc`来简单察看.而编译时看到的控制台输出`CC`则是一个指向`gcc`的变量，该变量是`make`程序的内建变量，就算你在Makefile中没有`CC=` ，该变量也会存在，并默认指向`gcc`。`cc`的符号链接和变量存在的意义在于源代码的移植性，可以方便的用`gcc`来编译老的用`cc`编译的unix软件，甚至连Makefile都不用改。而且也便于Linux程序在unix下编译。


## [clang](https://clang.llvm.org/related.html)

c家族的编译器，兼容`gcc`，`MSVC`，目前由苹果公司主导，据说是比`gcc`更模块化，生成的代码更加优化。

* 更快
* 更小
* 生成代码质量高
* 功能更丰富（eg： 用于代码补全）

## [Tiny C Compiler](https://bellard.org/tcc/)

* 小
* 快
* 生成代码质量一般
* 小众，长期不维护，可做学习只用


> 参考：
> 
> http://www.cnblogs.com/xiedan/archive/2009/10/25/1589462.html
> 
> http://xuehanlee.blog.51cto.com/8817835/1397974
