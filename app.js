
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

// var pass="fahad";
// var user=prompt("enter the user password");
// if(user===pass){

//     document.write("you are correct");
// }
// else if(user.length===0){

//     document.write("please enter your password");
// }

// else{

// document.write("Incoorect password");

// }

// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// }
// else{
// greeting = "Good evening";
// }


// var user=prompt("enter the time");
// if(user>=0000 && user<1200){

//     document.write("Good morning");

// }
// else if(user>=1200&& user<1700){
// document.write("good afternoon");

// }
// else if(user>=1700&& user<2100){
// document.write("Good evening");

// }
// else if(user>=2100&&user<=2359){

//     document.write("Good night");
// }


// var qual=["Scc","Hsc","Bcs","Bs","Bcom","Ms","M.phil","Phd"];
// for(var i=0;i<qual.length;i++){

// document.write(qual[i]+"<br>");

// }


// var name=["fahad","ali","umer"];
// var num=[320,230,480];
// var total=500;
// var per;

// document.write("Score of"+name[0]+ "is"+num[0]+"Percentage:"+"Percentage:"+num[0]/total*100);
// document.write("Score of"+name[1]+ "is"+num[1]+"Percentage:"+"Percentage:"+num[1]/total*100);
// document.write("Score of"+name[2]+ "is"+num[2]+"Percentage:"+"Percentage:"+num[2]/total*100);


// var color=[];
// var user=prompt("enter the color please");
// color.unshift(user);
// var user=prompt("enter the color in end");
// color.push(user);
// var user=prompt("enter the color in end");
// color.unshift(user);
// var user=prompt("enter the color in end");
// color.unshift(user);
// color.shift();
// color.pop();
// var user=prompt("enter the index wher eyou want to add");
// var user1=prompt("enter what color you add");
// color.splice(user,0,user1);
// var user=prompt("enter the index you want to delte");
// color.splice(0,user,0);
// document.write(color);

// var sc=[320,230,480,120];
// document.write("Scores of student"+sc);
// var b=sc.sort();
// document.write("Ordered scores of student"+b);

// var city=["karachi","lahore","islamabad","quetta","peshawar"];
// var b=city.slice(2,4);
// document.write(city+"<br>");
// document.write(b);

// var arr=["this","is","my","cat"];
// var b=arr.join(' ');
// document.write(b);

// var a=["keyborad","mouse","printer","monitor"];
// document.write(a+"<br>");
// a.pop();
// document.write(a+"<br>");
// a.pop();
// document.write(a+"<br>");
// a.pop();
// document.write(a+"<br>");
// a.pop();
// document.write(a+"<br>");

// var a=["apple","samsung","motorola","nokia","sony","haier"];

// document.write("<select><option>"+a[0]+"</option></select>")


// for(var i=0;i<=10;i++){
// document.write(i+"<br>");

// }

// var user=prompt("enter the table");
// var len=prompt("enter the length");
// for(var i=1;i<=len;i++){

// document.write(user+"X"+i+"="+user*i+"<br>");

// }

// var friuts=["apple","banana","mango","orange"];
// for(var i=0;i<friuts.length;i++){

// document.write("Element at index of"+friuts.indexOf(friuts[i])+"is"+friuts[i]+"<br>");

// }

// for(var i=0;i<=15;i++){
// document.write(i);

// }

// for(var i=15;i>0;i--){
//     document.write(i);
    
//     }

// for(var i=0;i<20;i=i+2){
  
//     document.write(i)

// }

// for(var i=1;i<=19;i=i+2){
  
//     document.write(i)

// }

// var a=["cake","apple pie","cookie","chips","patties"];
// var user=prompt("enter the find");
// for(var i=0;i<a.length;i++){
//     if(user===a[i]){
// document.write(user+"is available at index"+a.indexOf(user)+"in our bakery");
//     }
// }

// var arr=[24,53,78,91,12];
// var lar=0;
// for(var i=0;i<arr.length;i++){
// if(arr[i]>lar){

// lar=arr[i];
// }
// }
// document.write(lar);

// for(var i=5;i<=100;i=i+5){

//     document.write(i)

// }


// var first=prompt("enter the first");
// var sec=prompt("enter the sec");
// var full=first+sec;
// document.write(full);


// var a="Samsung galaxy s6 edge plus";
// var b=a.length;
// document.write(b);


// var str="paksitani";
// var b=str.indexOf('n');
// document.write(b);

// var str="hello world";
// var b=str.lastIndexOf('l');
// document.write(b);

// var a="pakisatani";
// var b=a.charAt(3);
// document.write(b);

// var fir=prompt("enter the name");
// var sec=prompt("emter the sec name");
// var full=fir.concat(sec);
// document.write(full);

// var a="Hyderabad";
// var b=a.replace(/hyder/gi,"islam");
// document.write(b);

// var a="“Ali and Sami are best friends. They play cricket and football together";
// var b=a.replace(/and/gi,'&');
// document.write(b);


// var a="peanuts";
// var b=a.toUpperCase();
// document.write(b);


// var a="javascript";
// var b=a.slice(0,1);
// b=b.toUpperCase();
// a=a.slice(1);
// a=a.toLowerCase()
// document.write(b,a);

// var a=35.26;
// var b=a.toString();
// b=b.replace('.',' ')
// document.write(b);



// var a=prompt("enter the username");
// for(var i=0;i<a.length;i++){
// if(a.charCodeAt(i)>=97 && a.charCodeAt(i)<=124){

// document.write("yes");
// break;
// }

// }
// var user=prompt("enter the value which you find");
// var a=["cake","applepie","cookie","chips","patties"];
// for(var i=0;i<a.length;i++){
// if(user==a[i].toUpperCase() || user==a[i].toLowerCase())
//     document.write("yes");

// }



// var user=prompt("enter the password");
// for(var i=0;i<user.length;i++){
// if(user.charCodeAt(i)>=0 || user.charCodeAt(i)<=9){

//     document.write("yes");


// }

// }

// var a="karachi of university";
// var b=a.split('');
// for(var i=0;i<b.length;i++){

//     document.write(b[i]+"<br>");


// }


// var a=prompt("enter the user plz");
// var c=a.toString();
// var d=c.charAt(a.length-1)
// document.write(d);

// var str="the qiuck brown fox jumps over the lazy dog";
// var b=str.match(/the/g).length;
// document.write(b);


// var nu=3.45214;
// document.write("number"+nu+"<br>");
// var roun=Math.round(nu);
// document.write(roun+"<br>");
// var flor=Math.floor(nu);
// document.write(flor+"<br>")
// var cei=Math.ceil(nu);
// document.write(cei);


// var a=-4;
// var b=Math.abs(a);
// document.write(b);

// var a="";
// var b=Math.random(a)*6;
// var c=b.toFixed(0);
// document.write(c);

// var a="";
// var b=Math.floor(Math.random(a)*2)+1;

// if(b==1){
// document.write("Tails");

// }
// else{

// document.write("heads");

// }

// var a="";
// var b=Math.floor(Math.random(a)*100)+1;
// document.write(b);

// var a=prompt("entr the user");
// var ran=parseInt(a);
// document.write(ran);


// var a=new Date();
// document.write(a);


// var mon=["jan","feb","mar","april","may","june","july","aug","sep","oct","nov","dec"];
// var a=new Date();
// var b=a.getMonth();
// document.write(mon[b]);


// var day=["sun","mon","tue","wed","thu","fri","sat"];
// var a=new Date();
// var b=a.getDay();
// document.write(day[b])



// var a=new Date();
// var b=a.getDay();
// if(b==0 || b==6){
// document.write("Its fun day");

// }
// else{

//     document.write("noraml day");

// }

// var a=new Date();
// var b=a.getDate();
// if(b<15){
// document.write("first day fiften");

// }
// else{

// document.write("last day")

// }

// var a=new Date();
// document.write(a+"<br>");
// var b=a.getTime();
// document.write("Elaped millisecond"+b+"<br>");
// var c=a.getTime()/(1000*60);
// document.write("minutes"+c);



// var a=new Date();
// var b=a.getHours();
// if(b<12){

//     document.write("AM");

// }
// else{

// document.write("PM")

// }

// var a=new Date("2020/12/31");
// document.write(a);




// var currentdate=new Date();
// var a=new Date("2015/1/1");
// var daysgone=parseInt((currentdate.getTime()-a.getTime())/(1000*60*60*24));
// document.write(daysgone);

// var startingdate = new Date("2015/1/1");
// var daysgone = parseInt((currentdate.getTime() - startingdate.getTime())/(1000*60));
// document.write(daysgone + " seconds have passed since 2015")

// var a=new Date("2015/12/5");
// var cur=new Date();
// var sec=parseInt(cur.getTime()-a.getTime())/(1000);
// var flo=Math.floor(sec);
// document.write(flo);

// var a=new Date();
// var b=new Date(a.getTime()-(1000*60*60));
// document.write(b);



// var a=new Date();
// var b=new Date("1920/10/10");
// document.write(a+"<br>");
// document.write(b+"<br>"); 
// var curr=new Date();
// var user=prompt("enter the user");
// var a=new Date(curr.getTime()-(1000*60*60*24*365.25*user));
// document.write(a.getFullYear());

// var username=prompt("enter the username");
// var moth=["jan","feb","march","april","may","june","july","aug","sep","oct","nov","dec"];
// var a=new Date();
// var b=a.getMonth();
// var numofun=prompt("enter the unit");
// var chrgeperunit=16;
// var total=numofun*chrgeperunit;
// document.write(username+"<br>");
// document.write(moth[b]);
// document.write(total+"<br>");


// function abc(){

// var a=new Date();
// document.write(a);

// }
// abc();

// function abc(){

// var a="fahad";
// var b="khan";
// var full=a+b;
// document.write(full)

// }

// abc();

// function abc(){
// var a=+prompt("enter the first number")
// var b=+prompt("enter the second number");
// var c=a+b;
// document.write(c);


// }

// abc();


// function abc(num1,num2,opr) {
    
//     var result;
//     if(opr=='+'){
// result=num1+num2;

//     }
//     else if(opr=='-'){
//         result=num1+num2;
        
//             }
//           else  if(opr=='*'){
//                 result=num1+num2;
                
//                     }
//               else   if(opr=='/'){
//                         result=num1+num2;
                        
//                             }        
//   return result;

// }
// document.write(abc(4,5,'+'))


// function abc(sq){

// var re=sq*sq;
// return re;

// }

// document.write(abc(5))
// var sum=0;
// function abc(num){
// var fac;
// for(var i=0;i<num;i++){

//     fac=num*i;
//     sum=sum+fac;



// }

// document.write(sum);

// }

// abc(4)

// function abc(firs,last){

// for(var i=firs;i<last;i++){


// document.write(i);

// }



// }

// abc(5,20);


// function abc(base,pre){

// function sqr(x){

// return x*x;

// }

// var result=sqr(base)+sqr(pre);
// return result;
// }

// document.write("the"+abc(4,3));

// function abc(height,width){
// var area=height*width;
// document.write(area);


// }
// var height=4
// var width=5;

// abc(height,width);

// function abc(str){
//    var newstr="";
//     for(var i=str.length-1;i>=0;i--){
//      newstr+=str;

//      if(str===newstr){
//   document.write("yes")

//      }

//     }


// }
// abc("madam");


// function abc(word){

//     // document.write(word);
//     var b=word.split(' ');
//     for(var i=0;i<b.length;i++){
// b[i]=b[i].charAt(0).toUpperCase()+b[i].slice(1);
// document.write(b[i]);
//     }




// }

// abc("the quick brown fox");


// function abc(str) {

//     var arr=str.match(/\w[a-z]{0,}/gi);
//     var result=arr[0];


    
//     for(var x=1;x<arr.length;x++){
// if(result.length<arr[x].length){

// result=arr[x];

// }
// document.write(result);
//     }
    

// }
// abc("web fahad khan");


// function abc(str,letter){

// var letter_cunt=0;
// for(var i=0;i<str.length;i++){

//     if(str.charAt(i)==letter){

//   letter_cunt+=1;


//     }


// }

// document.write(letter_cunt);
// }

// abc("fahad","a")


// function a(r){

// var res=2*3.14*r;
// document.write(res+"<br>");

// }

// function b(r){

// var re=3.14*(r)*(r);
// document.write(re);
// }
// a(3)
// b(4)


// function  cal(a,b)
// {

//     var z=a;
// for(var i=0;i<b;i++){

//     z=z*a;


// }
// document.write(z)
// }
// cal(2,5);


// var a=Number(prompt("enter a year"));
// if(a%4===0){

// document.write("its a leap year");

// }
// else{

// document.write("not a leap year");

// }


// function abc(a,b){

//     var v=a;
//     for(var i=0;i<b;i++){
    
//     v=v*a;
  

//     }

//     document.write(v);

// }

// abc(2,5);

// function Area(a,b,c) {
// var area;    
// area=(cal(a,b,c)*(cal(a,b,c)-a)*(cal(a,b,c)-b)*(cal(a,b,c)-c));
// document.write(area+"<br>");
// }

// function cal(a,b,c) {
    
// var s=((a+b+c)/2);
// document.write(s+"<br>");

// }


// cal(2,3,4);
// Area(2,3,4);


// var tt=document.getElementById('t');
// tt.value="ali";

// var p=document.getElementById('p');
// var a=Number(prompt("enter the number please yiu enter the please three subject mark"))
// function av(a){
// var b=(a/3);
// document.write("the average is"+b+"<br>");


// }


// function per(a) {
    
// var c=(a/300)*100;
// document.write(c);

// }
// av(a);
// per(a);

// function abc(){

// var a="fahad";
// for(var i=0;i<a.length;i++){
// if(a[i]=='a'){

// document.write("the index of a is"+i);
// // break;

// }

// }

// }

// abc();



// function dele(a,b){


// var c=a+b;
// return c;
// }




// document.write(dele(5,6))


// function dele(text){

//     // var sen="my name is fahad";
//     var resu=" ";
//    for(var i=0;i<text.length;i++){
//   var c=sen[i];
//    if("aeiou",match(c.toLowerCase())==null){

//   resu+=c;
 

//    }
//  return resu;

//    }

  
// }

// var a=dele("my name is fahad");
// document.write(a);

