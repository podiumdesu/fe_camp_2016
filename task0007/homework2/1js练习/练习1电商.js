
//在电商购物网站上经常有购物卡出售，购物卡是一种可以充值的卡片，上面通常有20位密码，为了方便阅读以连字符分隔，例如： 3EFU8-RT67F-E42OP-8RPOL

//要求：用 JavaScript 实现一个函数，读取用户输入的字符串，替换掉连字符，将小写字母转换为大写字母，然后判断是否是20位，若是，将转换后的字符串返回，否则抛出格式异常错误。

//示例输入： 3efu8-rt67f-e42op-8rpol，
//函数结果：返回：3EFU8RT67FE42OP8RPOL

//示例输入：hello world
//函数结果：异常：无效的密码格式


var passwordCard = function (x) {
    x = x.replace(/-/g,'');
    var len = x.length;
    if (len == 20){
        return '返回：' + x.toUpperCase();
    }
    else{
        return '异常：无效的密码格式';
    }
}

console.log(passwordCard('3efu8-rt67f-e42op-8rpol'));
console.log(passwordCard('hello world'));



/**设计思路：
*     这个的设计思路个人觉得比较简单，虽然代码写的还是比较繁复。
*     主要的想法就是把字符串中的'-'全部替代成''。
*     再判断字符串长度是否等于20，进行输出结果的选择。
*  主要碰到的问题：
*     在replace的时候出现了错误，因为直接x.replace('-','')的话只替代了第一个'-'
*     要使用全局搜索替代才可以。
*     x.replace(/-/g,'');
**/
