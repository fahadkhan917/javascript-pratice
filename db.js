function abc(){

var name=document.getElementById("name");
var roll=document.getElementById("roll");

var key=firebase.database().ref('student').push().key
var student={
name:name.value,
roll:roll.value,
key:key

}
// var key=Math.random()*466568;
firebase.database().ref('student/'+key).set(student)

}


// function getdata(){
// firebase.database().ref("student").on('child_added',function(data){
// console.log(data.val())


// })


// }


// function removedata(){

// firebase.database().ref('student').remove()


// }

// removedata()
