function getAndUpdate(){
    tit = document.getElementById("title").value;
    des = document.getElementById("description").value;
    if(localStorage.getItem("itemsJson")==null){
        itemsJsonArray = [];
        if(tit!='' && des!=''){
            itemsJsonArray.push([tit,des]);
        }
        localStorage.setItem("itemsJson",JSON.stringify(itemsJsonArray));
    }
    else{
        itemsArray = localStorage.getItem('itemsJson');
        itemsJsonArray = JSON.parse(itemsArray);
        if(tit!='' && des!=''){
            itemsJsonArray.push([tit,des]);
        }
        localStorage.setItem("itemsJson",JSON.stringify(itemsJsonArray));
        update();
    }
}
function update(){
    if(localStorage.getItem("itemsJson")==null){
        itemsJsonArray = [];
        localStorage.setItem("itemsJson",JSON.stringify(itemsJsonArray));
    }
    else {
        itemsArray = localStorage.getItem('itemsJson');
        itemsJsonArray = JSON.parse(itemsArray);
    }
    let tableBody = document.getElementById("tableBody");
    let str="";
    itemsJsonArray.forEach((element, index)=> {
        str+=`
        <tr>
        <th scope="row">${index+1}</th>
        <td>${element[0]}</td>
        <td>${element[1]}</td>
        <td><button class="btn btn-danger btn-sm" onclick="deleted(${index})">Delete</button></td>
        </tr>
        `
    });
    tableBody.innerHTML = str;
}
add = document.getElementById("add");
add.addEventListener("click",getAndUpdate);
update();
function deleted(index){
    itemsArray = localStorage.getItem('itemsJson');
    itemsJsonArray = JSON.parse(itemsArray);
    itemsJsonArray.splice(index,1);
    localStorage.setItem("itemsJson",JSON.stringify(itemsJsonArray));
    update();
}
function cleared(){
    if(confirm("Do you really want to Clear?"))
    localStorage.clear();
    update();
}