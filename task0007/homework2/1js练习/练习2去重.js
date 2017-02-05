
//网站上让用户给出一组兴趣爱好选项，是以半角逗号分割的字符串，例如：'游泳,健身,舞蹈,阅读'

//为了确保输入重复的项，要求实现一个函数，对字符串中的兴趣内容进行去重

//输入示例：​'游泳,健身,篮球,游泳,篮球,阅读'

//输出：'游泳,健身,篮球,阅读'​​​​​

var unique = function (x) {
    var data = x.split(',');
    var result = [];
    for (var i = 0 ; i < data.length ; i++){
        if (data.indexOf(data[i]) == i) result.push(data[i]);
    }
    return result.join(',');
};

console.log(unique('游泳,健身,篮球,游泳,篮球,阅读,阅读,绘画'));
