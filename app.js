
//chpater 1 alert
// alert("hello world");


//chapter2
// varaiable for string
// var name="saif";
// alert(name);

// var num=5;
// alert(num);

//chapter 3
//varable for number
// var a=5;
// var b=a+7;
// alert(b);



//chapter 4
// varaible name legal and illegal
// var camelCase;


//chapter 5
// math expression familiar operatrs

// alert(2+2);
// var num=12-10;
// alert(num);
// var mul=5*10;
// alert(mul);
// var divd=10/2;
// alert(divd);
// var modulus=10%3;
// alert(modulus);

//chapter 6
//increment
// 1.pre increment
// 2.post increment
//decrement 
// 1.pre decrement
// 2.post decrement 
1.
// var a=5;
// ++a;
// alert(a);
2.
// var a=5;
// a++;
// alert(a);

//chapter7
// bodmas
// var a=(12+7)*9-4;
// alert(a);

// /chapter 8
// var firstname="fahad";
// var lastname="khan";
// var age=40;
// alert("This is my name"+firstname+lastname+"my age is"+age);
// alert("this is my age"+age);
// var a=45+5;
// var b=5+10;
// alert("this is sum of a+b"+(a+b));

// /chapter9
//prompt
// var firstname=prompt("enter the firstname");
// var lastname=prompt("enter the lastname");
// var fullname=firstname+lastname;
// alert(fullname);

//chapter 10
// if statements
// var name=prompt("enter the name")
// if(name=="fahad"){

// alert("yes you are right")

// }

//chapter 11
// var num="2";
// var num1=2
// if(num===num1){

// document.write("yes");

// }


// var num="2";
// var num1=2
// if(num!==num1){

// document.write("yes");

// }

// var a=5;
// var b=7;
// if(a<b){
// document.write("yes");

// }

// var a=65;
// if(a<=65){

// document.write("yes");

// }
// else{

// document.write("sorry");

// }


// var se=5;
// se++;
// if(se==6){

// document.write("yes");

// }

// var a=5;
// var b=5;
// if(a==5&&b==4){

// document.write("yes");

// }

// var a=5;
// var b=5;
// if(a==5||b==4){

// document.write("yes");

// }

// nested if
// var a=5;
// var b=5;
// var c=5;
// var d=5;
// if(a==b){
// if(c==d){
// document.write("your are right")

// }

// }

// var a=["fahad","khan",45,"ali","umer"];
// var b=a.join(' ');
// document.write(b);

// function abc(e){

// let val=document.getElementById('val');
// val.value+=e;




// }

// function equal(e){
//     let val=document.getElementById('val');
//     val.value=eval(val.value);

// }



// var min=0;
// var sec=0;
// var minsec=0;
// var min=document.getElementById('min');
// var sec=document.getElementById('sec');
// var minsec=document.getElementById('minsec');
// var interval;

// function timer(){

// minsec++;
// min.innerHTML=minsec;
// if(msce>=60){
// sec++;


// }



// }

// function strt(){



// }




//template literals
// var a="fahad";
// var b="khan";
// document.write(`${a} ${b}`);

//spread operators
// var stu=["asad","ali","khan","umer"];
// var stu1=[...stu,"saad","umair"];
// document.write(stu1);

//object destructuring
// var a={

// name:"fahad",
// lasname:"khan"

// }

// let{name,lasname}=a;

// document.write(name);

// var a={
// name:"fahad",
// roll:123

// }

// let{name,roll}=a;

// document.write(roll);

//ternary operators
// var age=20;
// var chk=age>30?
// "30 sa bara hai"
// :
// "30 se chota hai"

// document.write(chk);


// var age=20;
// var check=age>30?
// "30sa chota hai"
// :
// "30 sa bara hai"

// document.write(check);

// var pro=new Promise(function(resolve,reject){
// var zinger="avaible";
// if(zinger==="avaible"){

//     resolve("han fahad khelara hai zinger");

// }

// else{

// reject("nahi hai")

// }

// })

// pro.then(function(data){

// document.write(data);

// })

// .catch(function(error){
//     document.write("error"+error)

// })

// var p=new Promise(function(re,rej) {
//     var name=prompt("enter the username");
//     if(name==="fahad"){
//      re("your name is right")

//     }
//     rej("sorry");

// })


// p.then(function(data) {
//   document.write(data)  
// })

// .catch(function(error) {
//     document.write(error);
// })


// var a=new Promise(function(resolve,reject) {
//     var name="fahad";
//     if(name=="fahad"){
//      resolve("yes");

//     }
// else{

// reject("sorry");

// }
// })


// a.then(function(data) {
//     document.write("yes");
// })

// .catch(function(error) {
    
// document.write("error")
// })

// var name="fahad";
// var lastname="khan";

// document.write(`${name} ${lastname}`)



// var age=20;
// var chk=age<30?
// "hello"
// :
// "khan"
// document.write(chk)


// var a=["ali","khan"];
// var b=[...a,"umer","asad"];
// document.write(b)




// var count=0;

// function abc(){
// count++;
// document.write(count)

// }

// setInterval(() => {
//     abc()
// }, 1000);


// function abc(){

// document.write("fahad");

// }


// setTimeout(() => {
//     abc();
// }, 5000);



// for(var i=0;i<100;i=i+10){
// for(var j=i;j<i+10;j++){
// document.write(j)
// }
// document.write("<br>")
// }


// for(var i=0;i<5;i++){
// for(var j=0;j<i;j++){

// document.write("*");

// }
// document.write("<br>")

// }