# Code snippet library Path
>Xcode提供了Code snippet~~(代码片段)~~的功能，可以将我们常用的代码片段保存成一个小模版，以便我们再次使用，具体使用就不介绍了，可以阅读[官网](https://developer.apple.com/library/ios/recipes/xcode_help-source_editor/chapters/CreatingaCustomCodeSnippet.html),或[NSHipster](http://nshipster.cn/xcode-snippets/)的这片文章。

非常简单，非常方便对吧，不过你设置的这些代码片段，被放到什么地方了呢？ 如果想把它们导到另外一台电脑上怎么弄呢？

揭晓答案：

    	~/Library/Developer/Xcode/UserData/CodeSnippets/

可以使用终端命令找到这个位置：

	cd ~/Library/Developer/Xcode/UserData/CodeSnippets/
	
	open .
	
通过上面的命令，是不是已经看到源文件了呢？回到上面的问题，另一台电脑需要用这个怎么办？答案就是：把这个目录下的文件复制到另一电脑的相同位置就可以了。

还可以再折腾一下，在这个目录下弄个Git仓库，把它们传到Github上，以后就再也不会丢失了，任何人想要用到这些片段时，就可以简单的向本地克隆一下就ok咯。


总之，找到了源文件，然后再想做什么就可以肆无忌惮了吧，嘿嘿嘿～～



