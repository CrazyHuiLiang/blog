## 命令备忘

#### 安装依赖

```sh
yarn
```

#### 运行本地热编译服务

``` sh
yarn start     # 仅语言posts
yarn start-all # 预览所有文章（posts + drafts）
```

#### 创建文章

``` sh
yarn new <title> # 创建草稿
yarn newp <title> # 创建发布的文章
```

#### 升级草稿为文章

``` sh
yarn d2p <title> # 将草稿升级为文章，以备发布
```

#### 部署

```sh
yarn clean # 清理本地构建的缓存
yarn deploy  # 发布文章(posts)
```
