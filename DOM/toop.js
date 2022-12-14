//创建一个可以执行简单动画的函数
//obj要执行动画的对象
//speed移动的速度
//target
//attr方向
//callback回调函数
function move(obj, target, speed, attr, callback) {

    //关闭上一个定时器

    clearInterval(obj.time)

    var current = parseInt(getStyle(obj, attr))
    //判断速度的正负值
    if (current > target) {
        //此时速度是负的
        speed = -speed
    }
    //开启一个定时器用来执行动画的效果

    obj.time = setInterval(function () {
        // clearInterval(timer)
        //获取原来box的值
        var oldvalue = parseInt(getStyle(obj, attr))
        //获取新的值
        var newvalue = oldvalue + speed;

        //判断是否大于800
        if ((speed < 0 && newvalue < target) || (speed > 0 && newvalue > target)) {
            newvalue = target;
        }
        //将新的值给box1 
        obj.style[attr] = newvalue + "px"
        //当计时器移动到800 的时候停止动画
        if (newvalue == target) {
            //关闭定时去
            clearInterval(obj.time)
            //动画执行完毕，调用回调函数
            callback && callback();
        }
    }, 30)

}
//定义一个函数，用来获取指定元素的当前样式
//参数：
//   obj 要获取样式的元素
//     name 要获取的样式名
function getStyle(obj, name) {
    //判断是否有getComputedStyle这个方法
    //如果没有去执行currentStyle这个方法
    //必须加上window这个全局变量，让getComputedStyle变成属性就不会去报错

    if (window.getComputedStyle) {
        return getComputedStyle(obj, null)[name];

    } else {
        return obj.currentStyle[name];
    }

    //如何兼容所有浏览器的版本


}



//判断class

//定义一个函数用来向一个元素中添加指定的class属性

//参数 ：   obj要添加的class属性的元素
//cn class的数值
function addClass(obj, cn) {


    if (!hasClass(obj, cn)) {
        obj.className += " " + cn;
    }
}

// 判断一个元素中是否含有指定的class值
function hasClass(obj, cn) {
    //创建正则
    // var reg = /\bb2\b/;
    var reg = new RegExp("\\b" + cn + "\\b");

    return reg.test(obj.className);
}

//删除指定的class属性
function removeClass(obj, cn) {
    var reg = new RegExp("\\b" + cn + "\\b");
    //删除class
    obj.className = obj.className.replace(reg, "")
}


//切换一个类
//如果元素有就删除没有就添加
function toggleClass(obj, cn) {
    //判断obj中是否有cn
    if (hasClass(obj, cn)) {
        //有就删除
        removeClass(obj, cn);

    } else {
        addClass(obj, cn);
    }
}


