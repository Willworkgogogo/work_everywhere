var arr = [1, 2, 3];

//1.arr本身作为回调函数的参数
arr.forEach(function(currentValue, index, arr){
    console.log('我是第一个参数',currentValue);
    console.log('我是第二个参数',index);
    console.log('我是第三个参数',arr);
});

