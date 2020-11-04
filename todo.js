
var list=document.getElementById('list');
function add(){

    var txt=document.getElementById('txt');
    var crli=document.createElement('li');
    var litxt=document.createTextNode(txt.value);
    crli.appendChild(litxt);
    list.appendChild(crli)





}