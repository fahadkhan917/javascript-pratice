
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
// var headmin=document.getElementById('min');
// var headsec=document.getElementById('sec');
// var headminsec=document.getElementById('minsec');
// var interval;

// function timer(){

// minsec++;
// headmin.innerHTML=minsec;
// if(minsce>=60){
// sec++;
// headsec.innerHTML=sec;
// minsec=0;


// }
// else if(sec>=60){
// min++;
// sec=0;
// headmin.innerHTML=min;


// }



// }

// function strt(){
// interval=setInterval(timer,10);


// }


// function stp(){

// clearInterval(interval)

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



//----------------------------------------------------------


//CHAP 11

// var a=5;
// var b="5";
// if(a==b){

//     document.write("equal");

// }



// var a=Number(prompt("Give value of a"))
// var b=prompt("enter the user b");
// if(a==b){

// document.write("equal")

// }
// else{

//     document.write("sorry");
// }


// var x="fahad";
// var y="fahad";
// if(x!==y){
// document.write(" equal");

// }

// var a=Number(prompt("enter the num"));
// var b=prompt("enter the user");
// if(a!==b){

// document.write("not equal");

// }

// var a=5;
// var b=5;
// if(a<b){
// document.write("greater than");

// }

// var a=65;
// if(a>90){
// document.write("a is greater than 90")

// }
// else if(a>=65){
// document.write("yes")

// }
// else{

//     document.write("sorry");
// }

// var a=4;
// var b=3;
// var c=3;
// var d=4;
// if(a==b||c==d){
// document.write("equal")

// }
// else{
// document.write("sorry")

// }

// var a=4;
// var b=4;
// var c=4;
// var d=4;
// if (a==b) {
//     if(c==d){

//         document.write("both equal");
//     }
// }

// var cities=["toronto","baltimore","chicago","missounga", "ONTARIO"] 
// console.log(cities);


// var user=prompt("enter the user name");
// if(user==="karachi"){

//     alert("welcome to karachi");


// }

// var user=prompt("enter the gender please");
// if(user==="male"){

// alert("good morning sir");

// }

// else if(user==="female"){

// alert("good morning maam");

// }


// var user=prompt("enter the color");
// if(user==="red"){
// alert("must stop");

// }
// else if(user=="yellow"){

// alert("Ready to move");

// }

// else if(user=="green"){

//     alert("Move now");
    
//     }

// var user=prompt("enter the remaining fuel");
// if(user<0.25){

//     alert("plesae refill the fuel in your car");

// }

// var a=4;
// if(++a===5){

//     document.write("equal");
// }


// var sub1=Number(prompt("enter the subject 1 number"));
// var sub2=Number(prompt("enter the subject 2 number"));
// var sub3=Number(prompt("enter the subject 3 number"));
// var total_marks=prompt("enter the total number");
// var mark_obt=sub1+sub2+sub3;
// var per=mark_obt/total_marks*100;

        
// document.write("total marks"+total_marks);
// document.write("Marks obtaibned"+mark_obt);
// document.write("Percentage"+per);

// if(per>80){
//     document.write("A-one")
    
//     }
//     else if(per>70){
//     document.write("A");
    
//     }
//     else if(per>60){
//         document.write("B");
        
//         }
      
//             else{
    
//                 document.write("Fail")
    
// document.write("Grade"+per);
// }


// var user=prompt("enter the number");
// var numb=5;
// if(user===numb){

//     document.write("bingo!Correct answer");
// }
// else if(++numb){

//     document.write("Close enough to the correct number")

// }

// var user=prompt("enter the number");
// if(user%3==0){

//     document.write("the user number is divisible by 3");
// }

// var user=prompt("enter the number");
// if(user%2==0){

// document.write("even number");

// }
// else if(user%3==0){

//     document.write("odd number");
// }

// var temp=prompt("enter the temperature");
// if(temp>40){

//     document.write("It is too hot outside");
// }
// else if(temp>30){

//     document.write("the weather today is normal");
// }

// else if(temp>20){

//     document.write("the weather today is cool");
// }
// else if(temp>10){

//     document.write("OMG! Todas weather is soo cool");
// }

// var first=+prompt("enter the first number");
// var sec=+prompt("enter the second number");
// var oper=prompt("enter the operation");
// if(oper=="+"){

//     document.write(first+sec);
// }
// else if(oper=="-"){

//     document.write(first-sec);
// }
// else if(oper=="*"){

//     document.write(first*sec);
// }
// else if(oper=="/"){

//     document.write(first/sec);
// }

// var user=prompt("enter please");
// var user=prompt("enter the number");
// if(user.charCodeAt>=(65) && user.charCodeAt<=(90)){

//     document.write("upper case");
// }

// else if(user.charCodeAt>=(97) && user.charCodeAt<=(122)){
//     document.write("lowercase");
//     }


// var num=+prompt("enter the user");
// var num2=+prompt("enter the number");
// if(num<num2){

// document.write("num2");

// }
// else if(num>num2){
// document.write("num1");

// }
// else if(num==num2){
// document.write("equal");

// }

// var num=prompt("enter the user");
// if(num>0){

//     document.write("number is postive");
// }
// else if(num<0){
// document.write("negative");

// }
// else if(num==0){

//     document.write("number is equal");
// }

// var user=prompt("enter the user")
// if(user=="a"){
//     document.write("vowel")
// }
// else if(user=="a"){
//     document.write("vowel")
// }
// else if(user=="e"){
//     document.write("vowel")
// }
// else if(user=="i"){
//     document.write("vowel")
// }
// else if(user=="o"){
//     document.write("vowel")
// }
// else if(user=="u"){
//     document.write("vowel")
// }
// else{

//     document.write("sorry")
// }
