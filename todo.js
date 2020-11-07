
var list=document.getElementById('list');


firebase.database().ref('todos').on('child_added',function(data){

    var crli=document.createElement('li');
    var litxt=document.createTextNode(data.val().value);
    crli.appendChild(litxt);
    list.append(crli)
    

   

  //deletebtn
  var deltebtn=document.createElement("button");
  var deletxt=document.createTextNode("delete");
  deltebtn.appendChild(deletxt);

  deltebtn.setAttribute("onclick","dlte(this)");
  deltebtn.setAttribute('id',data.val().key)
  crli.appendChild(deltebtn);



  //editbtn
  var editbtn=document.createElement("button");
  var edittxt=document.createTextNode("edit");
  editbtn.appendChild(edittxt);
  editbtn.setAttribute("onclick","edit(this)")
  crli.appendChild(editbtn);
  

})

function add(){

    var txt=document.getElementById('txt');
  var db=firebase.database().ref('todos')
    var key=db.push().key
  var todo={
    value:txt.value,
    key:key

  }

    db.child(key).set(todo)
    val.value=" ";
    


}

function deleteall(){

list.innerHTML='';


}

function dlte(e,key){
firebase.database().ref('todos').child(e.id).remove()
e.parentNode.remove();

}

function edit(e){

// console.log(e.parentNode.firstChild.nodeValue)
var edi=prompt("enter the edit");
e.parentNode.firstChild.nodeValue=edi;

}




