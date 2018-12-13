//生成表格的操作
/*
  * 渲染表格
  * */
function createTable(){
    //清空内容
    for(var i=tableShow.childNodes.length-1;i>=0;i--){
        tableShow.removeChild(tableShow.childNodes[i]);
    }
    //形成表头
    var addList=[];
    if(choseAll2.getAttribute("nums")<choseAll1.getAttribute("nums")){
        addList =["商品","地区","1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"];
    }else{
        addList =["地区","商品","1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"];
    }
    var tr=document.createElement("tr");
    for(var i in addList){
        var td=document.createElement("th");
        td.innerText=addList[i];
        tr.appendChild(td);
    }
    tableShow.appendChild(tr);
    //形成内容
    addList=findData();//接受查询到的数据
    for(var j=0;j<addList.length;j++){
        var tr2=document.createElement("tr");
        for(var i=0;i<addList[j].length;i++){
            var td2=document.createElement("td");
            /*
            * rowspan的判断条件:
            * 1.当前行数余较小那个数的值1
            * 2.并且是数据项内每行的第一个数据的属性
            * 3.两者都只选了一个的时候直接加数据进去
            * 4.
            * */
            if(i===0){//每一行的第一个
                if(choseAll2.getAttribute("nums")<choseAll1.getAttribute("nums")&&(j+1)%choseAll1.getAttribute("nums")===1){
                    td2.rowSpan=choseAll1.getAttribute("nums");//rowspan设置成数量大的那一个数据
                    td2.innerText=addList[j][i];
                    tr2.appendChild(td2);
                }else if(choseAll2.getAttribute("nums")>=choseAll1.getAttribute("nums")&&(j+1)%choseAll2.getAttribute("nums")===1){
                    td2.rowSpan=choseAll2.getAttribute("nums");
                    td2.innerText=addList[j][i];
                    tr2.appendChild(td2);
                }else if(choseAll2.getAttribute("nums")==1&&choseAll1.getAttribute("nums")==1){//都只选了一个的情况,也是把数据直接加进去就行了
                    td2.innerText=addList[j][i];
                    tr2.appendChild(td2);
                }else{//不需要设置rowspan的那一行，所以第一个要删除掉
                    td2.innerText=addList[j][i];
                    tr2.appendChild(td2);
                    tr2.deleteCell(i);//加进去又删掉
                }
            }
            else{//每一行的第二个开始,把数据依次加进去就可以了
                td2.innerText=addList[j][i];
                tr2.appendChild(td2);
            }
        }
        tableShow.appendChild(tr2);
    }
}