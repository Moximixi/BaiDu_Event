## 查询的资料
[break如何一次性跳出多层循环](https://bijian1013.iteye.com/blog/2040208)
## 分析:
```javascript
    for(var i=0;i<=tableShow.childNodes.length-1;i++){
       tableShow.removeChild(tableShow.childNodes[i]);
    }
   //两者都是为了清空tableshow里面的子节点，但是上面无法清空，下面才能清空
    for(var i=tableShow.childNodes.length-1;i>=0;i--){
        tableShow.removeChild(tableShow.childNodes[i]);
    }
```
##### 原因：
假设tableshow的字节点数为3

上面：i=0,length=3,tableShow.childNodes.length-1=2;table.childNodes[0]被清除

i=1;length=2，tableShow.childNodes.length-1=1;table.childNodes[1]被清除

i=2;length=1,tableShow.childNodes.length-1=0;不满足条件,退出循环

则实际上,只有`table.childNodes[0]`和`table.childNodes[1]`被清除

下面：分析同上面,可以得出结论`子节点将完全被清除`

## 题目：
[题目](http://ife.baidu.com/course/detail/id/53)
## 用时：
一天半
## 工作进度：
#### 2018-12-11：
* 完成：

完成多重数据联合查询

* 下次任务:

`rowspan`属性添加

分离js

开启下一任务

#### 2018-12-12
* 完成

全选按钮的BUG修改，列表列顺序的调换

* 下次任务

`rowspan`属性还差最后一步

分离js

开启下一个任务

#### 2018-12-13
* 完成
    
`rowspan`属性还差最后一步

分离js

开启下一个任务

[Webpack入门教程](https://segmentfault.com/a/1190000006178770)
* 下次任务

开始做任务二

