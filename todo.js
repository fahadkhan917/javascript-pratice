
var list=document.getElementById('list');
function add(){

    var txt=document.getElementById('txt');
    var crli=document.createElement('li');
    var litxt=document.createTextNode(txt.value);
    crli.appendChild(litxt);
    list.appendChild(crli)
    

    txt.value='';

  //deletebtn
  var deltebtn=document.createElement("button");
  var deletxt=document.createTextNode("delete");
  deltebtn.appendChild(deletxt);
  list.appendChild(deltebtn);
  deltebtn.setAttribute("onclick","dlte(this)");

}

function dlte(){
alert("yes")

}