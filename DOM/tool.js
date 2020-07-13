//冒泡排序
function bubble(arr){
    for(var i = 0;i <arr.length ;i++){
        for(var j=0;j<arr.length-i-1;j++){
            if(arr[j]>arr[j+1]){
                var tmp = arr[j+1];
                arr[j+1]=arr[j];
                arr[j]=tmp;
            }
        }
    }
}
function choose(arr){
    for(var i=0 ; i<arr.length-1 ;i++ ){
        for(var j=i+1 ; j<arr.length;j++){
            if(arr[i]>arr[j]){
                var tmp = arr[i];
                arr[i]=arr[j];
                arr[j]=tmp;
            }
        }
    }
}

function $(vArg){
    //1.对参数分类
    switch(vArg[0]){
        case "#"://id
            return document.getElementById(vArg.substring(1));break;
        case "."://className
            return elementByClassName(document,vArg.substring(1));
            break;
        default:
            //对参数前五个字符进行判断
            var str = vArg.substring(0,5);
            if(str == "name="){
                return document.getElementsByName(vArg.substring(5));

            }
            else{
                return document.getElementsByTagName(vArg);
            }
        break;
    }
}

 //获取当前样式的兼容函数
 function getStyle(elem,attr){
    return  elem.currentStyle?elem.currentStyle[attr]:getComputedStyle(elem)[attr];
}