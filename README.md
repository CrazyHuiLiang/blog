# CrazyHuiLiang的技术博客

基于hexo搭建的个人博客。

一点学习记录，访问请点击 “[crazyhuiliang.github.io](https://crazyhuiliang.github.io)”。

#### 运行本地热编译服务

``` sh
npm start   # 预览所有文章（posts + drafts）
npm run preview-posts # 仅语言posts
```
#### 创建文章

``` sh
npm new <title> # 创建草稿
npm newp <title> # 创建发布的文章
```
#### 升级草稿为文章

``` sh
npm run d2p <title> # 将草稿升级为文章，以备发布
```

#### 部署

```sh
npm run clean # 清理本地构建的缓存
npm run deploy  # 发布文章(posts)
```
