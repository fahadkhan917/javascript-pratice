
var list=document.getElementById('list');
function add(){

    var txt=document.getElementById('txt');
  var db=firebase.database().ref('todos')
    var key=db.push().key
  var todo={
    value:txt.value,
    key:key

  }

    db.child(key).set(todo)
    
    
//     var crli=document.createElement('li');
//     var litxt=document.createTextNode(txt.value);
//     crli.appendChild(litxt);
//     list.appendChild(crli)
    

//     txt.value='';

//   //deletebtn
//   var deltebtn=document.createElement("button");
//   var deletxt=document.createTextNode("delete");
//   deltebtn.appendChild(deletxt);
//   deltebtn.setAttribute("onclick","dlte(this)");
//   crli.appendChild(deltebtn);



//   //editbtn
//   var editbtn=document.createElement("button");
//   var edittxt=document.createTextNode("edit");
//   editbtn.appendChild(edittxt);
//   editbtn.setAttribute("onclick","edit(this)")
//   crli.appendChild(editbtn);
  

}

function deleteall(){

list.innerHTML='';


}

function dlte(e){
e.parentNode.remove();

}

function edit(e){

// console.log(e.parentNode.firstChild.nodeValue)
var edi=prompt("enter the edit");
e.parentNode.firstChild.nodeValue=edi;

}




