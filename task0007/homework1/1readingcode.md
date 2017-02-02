> GitHub 上找几个不同的项目，观察它们的代码风格，写一篇短文，介绍它们并谈谈你喜欢哪一种代码风格，为什么？

我选择的是下面两个项目：
* [yyx990803](https://github.com/yyx990803)的vuejs/vue中的[src/core/vdom/patch.js](https://github.com/vuejs/vue/blob/dev/src/core/vdom/patch.js)  *41.5kstar*

* [xqq](https://github.com/xqq)的flv.js中的[src/player/flv-player.js](https://github.com/Bilibili/flv.js/blob/master/src/player/flv-player.js)  *8.2kstar*

<img src="http://ojvrmnpos.bkt.clouddn.com/t01ca4b5da3e65ed944.png" title="代码风格">

<br>

> vuejs

```js
for (i = 0; i < hooks.length; ++i) {
  cbs[hooks[i]] = []
  for (j = 0; j < modules.length; ++j) {
    if (modules[j][hooks[i]] !== undefined) cbs[hooks[i]].push(modules[j][hooks[i]])
  }
}

function emptyNodeAt (elm) {
  return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
}

function createRmCb (childElm, listeners) {
  function remove () {
    if (--remove.listeners === 0) {
      removeNode(childElm)
    }
  }
  remove.listeners = listeners
  return remove
}

function removeNode (el) {
  const parent = nodeOps.parentNode(el)
  // element may have already been removed due to v-html / v-text
  if (parent) {
    nodeOps.removeChild(parent, el)
  }
}
```
* 使用的是tab缩进
* 字符串使用的是单引号
* 没有多余变量
* 语句结束好像不添加分号
* 没有使用括号等作为开头
* 在keywords之间会加上空格
* 在定义的函数与变量之间有空格
* 使用的是===

<br/>

> flv.js

```js
_checkAndApplyUnbufferedSeekpoint() {
    if (this._seekpointRecord) {
        if (this._seekpointRecord.recordTime <= this._now() - 100) {
            let target = this._mediaElement.currentTime;
            this._seekpointRecord = null;
            if (!this._isTimepointBuffered(target)) {
                if (this._progressChecker != null) {
                    window.clearTimeout(this._progressChecker);
                    this._progressChecker = null;
                }
                // .currentTime is consists with .buffered timestamp
                // Chrome/Edge use DTS, while FireFox/Safari use PTS
                this._msectl.seek(target);
                this._transmuxer.seek(Math.floor(target * 1000));
                // set currentTime if accurateSeek, or wait for recommend_seekpoint callback
                if (this._config.accurateSeek) {
                    this._requestSetTime = true;
                    this._mediaElement.currentTime = target;
                }
            }
        } else {
            window.setTimeout(this._checkAndApplyUnbufferedSeekpoint.bind(this), 50);
        }
    }
}
```
* 使用的是tab缩进
* 字符串使用的是单引号
* 没有多余变量
* 语句结束时会添加分号
* 没有使用括号等作为行的开头
* 在keywords之间会添加空格
* 在定义的函数与变量之间不添加空格
* 使用的是==

### 总结

个人更喜欢的应该是二者的结合，自己在打缩进的时候使用空格缩进比较多，所以在看了这两个项目之后觉得可能tab在项目的运用中更多，所以之后可能会渐渐改成*使用tab作为缩进*。

字符串个人目前还没有使用单引号的意识，所以之后也会渐渐养成变量*使用单引号*。

个人处理代码间的空格也是比较欠缺的，经常是这里添加了空格，那里又没有添加，所以之后会逐渐更改代码习惯，争取使代码看上去更加整齐。

相比较而言，比较喜欢flv.js中对于分号的处理，比较喜欢*添加分号*，这样使整个语句的结束看上去更加明了一点。而比较喜欢vuejs中*对于空格的处理*，代码的整齐度看上去比flv.js的要好一点。
