  //对多选框的操作

    /*
   *获取当前已经被点击的数目
   */
function getCheckedNums(target){
    var j=0;
    for(var i=0;i<target.length;i++){
        if(target[i].checked===true){
            j++;
            //console.log("当前多少个被点击了:"+j);
        }
    }
    return j;
}
/*
* 获得当前多选框选中的数据
* */
function pushList(target){
    var list=[];
    for(var i=0;i<target.length;i++){
        if(target[i].checked===true){
            list.push(target[i].value);
        }
    }
    return list;
}
/*
* 赋予点击事件
* */
function onclickEvent(target,choseAll){
    var ckNums=0;
    var list=[];
    choseAll.setAttribute("nums",ckNums);
    for(var i=0;i<target.length;i++){
        target[i].onclick=function(){
            ckNums=getCheckedNums(target);//把当前选择的数量存到多选框的nums属性中
            choseAll.setAttribute("nums",ckNums);
            if(ckNums===0){//阻止一个都没有选中的情况发生
                this.checked=true;
            }else if(ckNums===target.length){
                choseAll.checked=true;
            }else{
                choseAll.checked=false;
            }
            list=pushList(target);//获得当前选择的数据
            if(target===ones){
                areaList=list;
            }else if(target===twos){
                productList=list;
            }
            createTable();
        }
    }
}
onclickEvent(ones,choseAll1);
onclickEvent(twos,choseAll2);

/*
  * 全选的封装
  * */
function selectAll(btn){
    var list=[];
    var target;
    var inputs2=btn.parentNode.getElementsByTagName("input");//获得自己的父节点的所有子input元素
    if(btn.checked===true){
        for(var i in inputs2){
            inputs2[i].checked=true;
        }
        btn.setAttribute("nums",3);
    }else{//阻止全选事件的取消
        btn.checked=true;
    }
    //将全选的数据在数据库中进行搜索
    if(btn===choseAll1){
        target=ones;
    }else if(btn===choseAll2){
        target=twos;
    }
    list=pushList(target);//获得当前选择的数据
    if(btn===choseAll1){
        areaList=list;
    }else if(btn===choseAll2){
        productList=list;
    }
    createTable();
}
choseAll1.onclick=function(){
    selectAll(this);

};
choseAll2.onclick=function () {
    selectAll(this);
};