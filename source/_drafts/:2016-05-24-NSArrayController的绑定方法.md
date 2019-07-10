# NSArrayController的绑定方法

##绑定控制器（NSArrayController）

创建 model 类 

拖拽 NSArrayController 到 XIB

选中NSArrayController切换到Attributes Inspector

设置NSArrayController 的Class

添加 NSArrayController 的键

切换到Bindings Inspector

在Content Array Binding中绑定到File’s Owner (ViewController)

在Model Key Path 中输入 数组名称(forTableArray）

##绑定表格视图的列

选中table的一列，在Bindings inspector中找到Value binding

选中Bind to，在弹出菜单中选着NSArrayController

设置 Controller key 为arrangedObjects、Model Key Path为 personName（model的一个变量）


