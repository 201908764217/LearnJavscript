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

/**
 * 创建带节点的文本
 * @param {*} tagName 
 * @param {*} txt 
 */
function createElementWithTxt(tagName,txt){
    var node = document.createElement(tagName);
    var oTxt = document.createTextNode(txt);
    node.appendChild(oTxt);
    return node;
}

       /*
            DOM里面没有insertAfter()
        
        */
       function insertAfter(newNode,oldNode){
        //判断oidNode是否是最后一个节点
        var parent = oldNode.parentNode;
        if(oldNode == parent.lastChild){
            //最后一个节点,直接插入到子节点的末尾
            parent.appendChild(newNode);
        }else{
            //插入到oldNode的下一个节点前
            parent.insertBefore(newNode,oldNode.nextSibling);
        }
   }