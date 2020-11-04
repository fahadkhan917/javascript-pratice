function abc(){

var name=document.getElementById("name");
var roll=document.getElementById("roll");

var key=firebase.database().ref('student').push().key
var student={
name:name.value,
roll:roll.value,
key:key

}
// var ran=Math.random()*154448
firebase.database().ref('student/'+key).set(student)
}


