    //从数据中查找数据以及处理数据

    /*
    * 在数据库中查找是否存在
    * */
function findExist(target1,target2){
    var list=[];
    for(var i in sourceData){
        if(sourceData[i].region.indexOf(target1)!==-1&&sourceData[i].product.indexOf(target2)!==-1){
            list.push(sourceData[i]);
        }
    }
    return list;
}
/*
* 在数据库中查找数据
* */
//思路：双层循环，找数据，然后push进去
function findData(){
    var addList=[];
    list=[];
    console.log("选择选的数据上"+areaList);
    console.log("选择选的数据下"+productList);
    if(choseAll2.getAttribute("nums")<choseAll1.getAttribute("nums")){
        for(var i=0;i<productList.length;i++){
            for(var j=0;j<areaList.length;j++){
                list.push(findExist(areaList[j],productList[i]));
            }
        }
    }else{
        for(var i=0;i<areaList.length;i++){
            for(var j=0;j<productList.length;j++){
                list.push(findExist(areaList[i],productList[j]));
            }
        }
    }
    console.log("从数据中找到的数据为:");
    console.log(list);
    /*进行数据转化*/
    addList=transformData(list);
    console.log("转化后的函数为:");
    console.log(addList);
    return addList;
}
/*
* 数据转化函数
* */
function transformData(list){
    var addList=[];
    for(var j=0;j<list.length;j++){
        var addList_row=[];
        if(choseAll2.getAttribute("nums")<choseAll1.getAttribute("nums")){
            addList_row.push(list[j][0]["product"]);//这里面加了个[0]
            addList_row.push(list[j][0]["region"]);
        }else{
            addList_row.push(list[j][0]["region"]);
            addList_row.push(list[j][0]["product"]);//这里面加了个[0]
        }
        for(var i in list[j][0]["sale"]){
            addList_row.push(list[j][0]["sale"][i]);
        }
        addList[j]=addList_row;
    }
    return addList;
}