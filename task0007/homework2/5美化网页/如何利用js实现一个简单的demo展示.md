如何利用js实现一个简单的demo展示
===

这篇文章贴在自己的博客上了，这是[链接](http://petnakanojo.com/2017/02/06/%E5%A6%82%E4%BD%95%E5%88%A9%E7%94%A8js%E5%AE%9E%E7%8E%B0%E4%B8%80%E4%B8%AA%E7%AE%80%E5%8D%95%E7%9A%84demo%E5%B1%95%E7%A4%BA/)


### demo展示： ###
<img src="http://ojvrmnpos.bkt.clouddn.com/Screenshot_20170206_222936.png" title="网页简易展示">

#### html代码 ####
```html
<div id="demo">
  <h2>demo展示</h2>
  <ul>
    <li>
      <p>
        Compute Hamming Distance:&nbsp;&nbsp;<a href="https://github.com/podiumdesu/js/blob/master/leetcode/461HammingDistance.js" target="_abc">源代码</a>
      </p>
      <br />
      <span>第一个数字：<input type="text" id="field1" placeholder="请输入一个整数" />
      第二个数字：<input type="text" id="field2" placeholder="请再输入一个整数" /></span>
      <input type="button" id ="button" value="点我('>')"  onclick="displayme()"/>
      <p>
      <span>两个数字间的汉明距离是：</span>
      <input type="text" value="" id="output" placeholder="hammingDistance" />
      </p>
    </li>
  </ul>
</div>
```

#### js代码  ####
```js
function displayme(){
var x = parseInt(document.getElementById("field1").value);
var y = parseInt(document.getElementById("field2").value);

var hammingDistance = function(x,y){
    var count = 0;
    var n = x ^ y ;
    while ( n> 0 ){
        if ((n&1)==1){
            count += 1;
        }
        n>>=1;
    }
    return count;
};

document.getElementById("output").value = hammingDistance(x,y);
}
```

#### css代码就不贴了 ( ' > ' )  ####

<br>

### 主要碰到的问题  ###

1. 如何获取用户在输入框中的数据
2. 如何让数据在点击button后进行计算
3. 如何让计算得出的数据显示在指定的文本框内

（也不知道为什么，现在感觉这几个问题真的不难解决，但是我就是折腾了很久）

****

下面是具体的解决qaq
### 请先看我看过的部分链接 ###
* [原生javascript的DOM操作汇总](http://harttle.com/2015/10/01/javascript-dom-api.html)
* [Javascript学习总结（四）function函数部分](http://harttle.com/2015/10/01/javascript-dom-api.html)
* [Javascript学习总结 - JS基础系列一](https://segmentfault.com/a/1190000004062965)

### 外部引用js代码 ###

个人在做网页的时候比较喜欢以这样的文件分类方式：
<pre>
网页
 ├── README.md
 ├── index.html
 ├── web
 │   └── ......
 ├── images
 │   └── ......
 ├── css
 │   └── ......
 └── js
     └── ......
</pre>
所以没有选择在html里面写js代码，而是外部引用代码.

```html
<script type="text/javascript" src="../js/friendrolls.js"></script>
```

### demo想实现的效果 ###
首先是让用户在输入框输入两个整数，接着点击button进行__函数的计算__以及__赋值给输出框__，最后是用户看到输出框中显示结果。


### 如何获取用户在输入框中的数据  ###
首先贴上html代码
```html
<span>第一个数字：<input type="text" id="field1" placeholder="请输入一个整数" />
第二个数字：<input type="text" id="field2" placeholder="请再输入一个整数" /></span>
```
（其实我写到这个地方就已经不想写了。。。果然写博客真的需要耐心哎qaq）

直接用`var x = parseInt(document.getElementById("field1").value);`就可以啦

__注意：__ 因为要得到的是整数，而value得到的是字符串！！！！！！！所以一定记得要用`parseInt`！！！！！！！！！！！


### 如何让数据在点击button后进行计算 ###

button这个按钮其实是在html中给input设置type为`button`，再定义它的属性`onclick=displayme()` ，在点击它的时候就触发了`onclick`事件，于是开始执行`displayme()`这个函数中的内容。

```html
<input type="button" id ="button" value="点我('>')"  onclick="displayme()"/>
```

这样是不是比较好理解，我自己在写的时候就是这个地方死活也想不明白。。。。

### 如何让计算得出的数据显示在指定的文本框内 ###
刚刚在button的`onclick`事件下定义的`displayme()`函数就很重要啦！.

`displayme()`这个函数首先是 __得到用户的输入值__ 作为hammingDistance(x,y)的参数，然后进行 __`hammingDistance()`__ 的计算，最后将得出的结果 __赋值到输出框__ 中


#### 输出框的设置 ####
照样使用input即可，value记得设置成`""`，这样才能给它进行赋值。（我之前脑内yy原本想用output的。。orz脑内yy真的不可取
```html
 <input type="text" value="" id="output" placeholder="hammingDistance" />
```

#### 给它赋值！ ####
```js
document.getElementById("output").value = hammingDistance(x,y);
```

记住这里得是`.value`哦，不能`getElementById`之后就不写了。。我之前就是这样写的，然后一直得不到结果

### 总结
没有总结！！写不动了！！
