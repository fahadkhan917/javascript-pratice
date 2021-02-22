
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


// function abc(str){


//     var c=str.replace(/[aeiou]/g,'');
//     document.write(c);


// }

// abc("fahad khan ho mae");


// var a = prompt("Enter a string");
//        var found = 0;
//         function isvowel(ch) {

//             switch (ch) {
//                 case 'A':
//                 case 'a':
//                 case 'E':
//                 case 'e':
//                 case 'I':
//                 case 'i':
//                 case 'O':
//                 case 'o':
//                 case 'U':
//                 case 'u':
//                     return true;
//                 default:
//                     return false;
//             }
//         }
       
//         for (i = 0; i<a.length; i++) {
//             if (isvowel(a[i])) {

//                 found ++;
//             }
//             else {
//                 found = 0;
//             }
//             if (found == 2) {
//                 document.write(a[i - 1], a[i] + "<br>");
//                 //found = 0;
                
//             }
//         }


// var a=prompt("enter the word");
// var found=0;
// function remove(ch){

//     switch(ch){
   
//                         case 'a':
//                         case 'E':
//                         case 'e':
//                         case 'I':
//                         case 'i':
//                         case 'O':
//                         case 'o':
//                         case 'U':
//                         case 'u':
//                         return true;
//                         default:
//                             return false;

//     }

// }


// for(var i=0;i<a.length;i++){
// if(remove(a[i])){

// found++;
// // document.write(found)
// }

// else{

// found=0;

// }
// if(found==2){

// document.write(a[i-1],a[i]);

// }


// }

// var a=Number(prompt("enter the distance between two city"));
// function meter(a){

// document.write("in meter is"+(a*1000));


// }
// function feet(a){
//     document.write("in meter is"+(a*3280.8));


    
// }
// function inches(a){

//     document.write("in meter is"+(a*39370.178740));

    
// }
// function ci(a){


//     document.write("In centimeter is " + (a * 100000) + "<br>" );
    
// }

// meter(a);
// feet(a);
// inches(a);
// ci(a);

// var da=+prompt("enter a hour of employeess");
// var sa=+prompt("enter a hour of employeess");
// if(da>40){
// var c=(da-40)*12;
// document.write("the total salary"+(c+sa));


// }

// var a=parseInt(prompt("enter the amount"));
//   document.write("the total 100 notes is " + (a / 100) + "<br>");   
//   document.write("the total 50 notes is " + (a % 100)/50  + "<br>");   
//   document.write("the total 10 notes is " + ((a % 100) % 50)/10  + "<br>");   
//   document.write("the amount still is " + (a % 10)); 


// function deleteRow(row){

// // var d=row.parentNode
// row.parentNode.parentNode.remove();
// }


// function abc(){

// var img=document.getElementById('im1');
// img.src='1.jpg'


// }

// function xyz(){

//     var img=document.getElementById('im1')
//     img.src='download.png'
    
    
//     }

// var count=0;
// function a(){

// var pr=document.getElementById("para");
// pr.innerHTML=++count;




// }

// function b(){

//     var pr=document.getElementById("para");
// pr.innerHTML=--count;



// }


// function abc(){

// var txt1=document.getElementById('txt1')
// var txt2=document.getElementById('txt2')
// document.write(txt1.value)
// document.write(txt2.value)
// }

// function abc(){
// var para=document.getElementById("para");
// var phar="Maiores, quo at, voluptate cumque error excepturi cum laudantium est perferendis repudiandae dolores ipsa dolorem ex similique amet facere, fugit hic sit?";
// para.innerText=phar;


// }

// var students=[];
// function add(){

// var name=document.getElementById('txt1').value;
// name=name.slice(0,1).toUpperCase()+name.slice(1).toLowerCase();
// var age=document.getElementById('age')
// var clas=document.getElementById('class');
// if(!(name&& age&&clas)){
// alert("all feild reqiured must")
// }

// else{
// students.push({name:name,age:age,class:clas})
// printstudent()


// }
// // after submit fields empty
// var name = document.getElementById('txt1').value = '';
// var age = document.getElementById('txt2').value = '';
// var clas = document.getElementById('txt3').value = '';
// }
// function remove(index) {
// students.splice(index, 1)
// printStudents();

// }

// function printStudents() {
//     if (students.length) {
//         document.getElementById('tb').innerHTML = `
//     <tr>
//     <th>S.NO</th>
//     <th>Name </th>
//     <th>Age</th>
//     <th>Class</th>
// </tr>
//     `

//         students.map((value, index) => {
//             document.getElementById('tb').innerHTML += `<tr>
//     <td >${(index + 1)}</td>
//     <td>${value.name}</td>
//     <td>${value.age}</td>
//     <td>${value.clas}</td>
//     <td><button onclick='remove(${index})'>delete</button></td>
// </tr>`
//         })
//     } else {
//         document.getElementById('tb').innerHTML = `
//     <tr>
//     <th>S.NO</th>
//     <th>Name </th>
//     <th>Age</th>
//     <th>Class</th>
// </tr>
//     `
//     }
// }
// printStudents()

// var students = [];
// 		function add() {
// 			// alert('aa')
// 			var name = document.getElementById('txt1').value;
// 			name = name.slice(0,1).toUpperCase() + name.slice(1).toLowerCase();
// 			var age = document.getElementById('txt2').value;
// 			var classs = document.getElementById('txt3').value;

// 			if (!(name && age && classs)) {
// 				alert('All Fields Required !!!')
// 			} else {
// 				students.push({ name: name, age: age, class: classs })
// 				printStudents()
// 			}
// 			// after submit fields empty
// 			var name = document.getElementById('txt1').value = '';
// 			var age = document.getElementById('txt2').value = '';
// 			var classs = document.getElementById('txt3').value = '';
// 		}
// 		function remove(index) {
// 			students.splice(index, 1)
// 			printStudents();
// 		}

// 		function printStudents() {
// 			if (students.length) {
// 				document.getElementById('tb').innerHTML = `
// 			<tr>
// 			<th>S.NO</th>
// 			<th>Name </th>
// 			<th>Age</th>
// 			<th>Class</th>
// 		</tr>
// 			`

// 				students.map((value, index) => {
// 					document.getElementById('tb').innerHTML += `<tr>
// 			<td >${(index + 1)}</td>
// 			<td>${value.name}</td>
// 			<td>${value.age}</td>
// 			<td>${value.class}</td>
// 			<td><button onclick='remove(${index})'>delete</button></td>
// 		</tr>`
// 				})
// 			} else {
// 				document.getElementById('tb').innerHTML = `
// 			<tr>
// 			<th>S.NO</th>
// 			<th>Name </th>
// 			<th>Age</th>
// 			<th>Class</th>
// 		</tr>
// 			`
// 			}
// 		}
// 		printStudents()

// var found=0;
// var a=prompt("enter the user");
// for(var i=0;i<a.length;i++){
// if(a[i]=='a'){

// found++;

// }



// }
// document.write(found);


// function zom(e){

//     var img=document.getElementById('i');
//     img.src=e.src;


// }

// var count=10;
// function zoomin(){

//     var para=document.getElementById('myp');
//     para.style.fontSize=count+10+'px';



// }

// function zoomout(){

//     var para=document.getElementById('myp');
//     para.style.fontSize=count-1+'px';



// }


// var main=document.getElementById("main-content");
// console.log(main.childNodes);
// var allcls=document.getElementsByClassName("content");
// console.log(allcls[0]);
// var fill=document.getElementById("first-name");
// fill.value="fahad";
// var ls=document.getElementById("last-name");
// var em=document.getElementById("email");
// ls.value="khan";
// em.value="fk16181gmail.com"

// var student={
// name:"fahad",
// roll:123,
// school:'saylani'


// }


// for(var key in student){
// document.write(student[key])

// }

// function  save() {
//     var name=document.getElementById("name");
//     var roll=document.getElementById("roll");

//     var student={

//     name:name.value,
//     roll:roll.value

//     }

//     // firebase.datebase().ref('stu').set("fahad")
    
// }


// function  abc() {
    
// // window.location.href='https://www.google.com/'
// // var txt="welcome to my page"
// window.open('https://www.google.com/');

// }
// var name="basit";
// function  foo() {
    
//     name="fahad"
// }
// foo();
// console.log(name)


// if(true){

// let namess="fahad"

// }
// console.log(namess);




// new pratice here


// var a="fahad";

// alert("this is my name"+a)


// var a="fahad";

// for(var i=0;i<a.length;i++){
// document.write(a[i])

// }


// var a=10;
// document.write("the value of a is:"+a)

// document.write("<br>")
// a=++a;
// document.write("now the value"+a)
// document.write("<br>")
// a=a++;
// document.write("now the value"+a)
// document.write("<br>")
// a=--a;
// document.write("now the value"+a)
// document.write("<br>")
// a=a--;
// document.write("now the value"+a)



// var num=prompt("enter the number");
// if(num){

// document.write(num+"x"+"1"+"="+num*1+"<br>")
// document.write(num+"x"+"2"+"="+num*2+"<br>")
// document.write(num+"x"+"3"+"="+num*3+"<br>")
// document.write(num+"x"+"4"+"="+num*4+"<br>")
// document.write(num+"x"+"5"+"="+num*5+"<br>")
// document.write(num+"x"+"6"+"="+num*6+"<br>")
// document.write(num+"x"+"7"+"="+num*7+"<br>")
// document.write(num+"x"+"8"+"="+num*8+"<br>")
// document.write(num+"x"+"9"+"="+num*9+"<br>")
// document.write(num+"x"+"10"+"="+num*10+"<br>")
// }

// else{
//     document.write(5+"x"+"1"+"="+5*1+"<br>")
//     document.write(5+"x"+"2"+"="+5*2+"<br>")
//     document.write(5+"x"+"3"+"="+5*3+"<br>")
//     document.write(5+"x"+"4"+"="+5*4+"<br>")
//     document.write(5+"x"+"5"+"="+5*5+"<br>")
//     document.write(5+"x"+"6"+"="+5*6+"<br>")
//     document.write(5+"x"+"7"+"="+5*7+"<br>")
//     document.write(5+"x"+"8"+"="+5*8+"<br>")
//     document.write(5+"x"+"9"+"="+5*9+"<br>")
//     document.write(5+"x"+"10"+"="+5*10+"<br>")


// }


// var sub1=prompt("enter the subject1")
// var sub2=prompt("enter the subject2")
// var sub3=prompt("enter the subject3")
// var total_mark=100;
// var obt1=prompt("enter the obtained marks for subject 1")
// var obt2=prompt("enter the obtained marks for subject 2")
// var obt3=prompt("enter the obtained marks for subject 3")

// document.write("<table><th>Subject</th><th>Total marks</th><th>Obtained marks</th><th>percentahge</th><tr><td>English</td>total_mark<td>obt1</td><td></td></tr></table>")


// var user=prompt("enter the user");
// if(user==="karachi"){
// document.write("yes you are right")

// }
// else{

// document.write("sorry")

// }

// var user=prompt("enter the gender please");
// if(user=="male"){
// document.write("good morning sir")

// }
// else if(user=="female"){
// document.write("good morning maam")

// }


// var user=prompt("enter the user");
// if(user==="red"){
// document.write("must stop")

// }

// else if(user==="yellow"){
//     document.write("ready to move")
    
//     }
    
// else if(user==="green"){
//     document.write("move now")
    
//     }


// var user=prompt("enter the remaining fuel")
// if(user<0.25){
// document.write("please refill fuel")

// }

// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }

// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }

// var obt1=+prompt("enter the obtained marks 1")
// var obt2=+prompt("enter the obtained marks 2")
// var obt3=+prompt("enter the obtained marks 3")
// var totalmark=prompt("enter the total marks")
// var markobt=obt1+obt2+obt3
// var per=markobt/totalmark*100


// document.write("total marks"+totalmark)
// document.write("marks obtained"+markobt)
// document.write("percantage"+per)
// if(per>80){
//     document.write("A-one")
// }
// if(per>70){
//     document.write("A")
// }
// if(per>60){
//     document.write("B")
// }
// else{
//     document.write("fail")
// }

// var sernum=8;
// var user=prompt("enter the number")
// if(sernum==user){

//     document.write("Bingo!Correct answer")
// }

// else if(sernum++){

//     document.write("close enough to the correct answer")

// }

// var user=prompt("enter the number")
// if(user%3==0){
// document.write("yes number divide by 3")

// }
// else{
// document.write("sorry")

// }

// var user=prompt("enter the number")
// if(user%2==0){
// document.write("even")

// }
// else{
// document.write("odd")

// }

// var user=prompt("enter the temperature")
// if(user>=40){
// document.write("it is too hot outside")

// }
// else if(user>=30){
//     document.write("The weather today is normal")
// }
// else if(user>=20){
//     document.write("Today weather is cool")
// }
// else if(user>=10){
//     document.write("OMG! weather is so cool")
// }
// var num1=+prompt("enter the first number");
// var opr=prompt("enter the operation")
// var num2=+prompt("enter the second number");
// if(opr==='+'){

// document.write("the sum of"+(num1+num2))

// }
// else if(opr=='-'){

//     document.write("the sum of"+(num1-num2))
    
//     }
//    else if(opr=='*'){

//         document.write("the sum of"+(num1*num2))
        
//         }
//        else if(opr=='/'){

//             document.write("the sum of"+(num1/num2))
            
//             }


// var user=prompt("enter please")
// for(var i=0;i<user.length;i++){
//     if(user.charCodeAt(user[i])>=97 && user.charCodeAt(user[i])<=122){
//   document.write("lower case")

//     }
//    else if(user.charCodeAt(user[i])>=65 || user.charCodeAt(user[i])<=90){
//         document.write("Upper case")
      
//           }
        

// }

// var user=prompt("enter the character");
// if(user.charCodeAt()==97|| user.charCodeAt()==101 || user.charCodeAt()==105 || user.charCodeAt()==111 || user.charCodeAt()==117){
// document.write("vowel")

// }

// var corr="fahad"
// var user=prompt("enter the password plz");
// if(user==""){
// document.write("please enter your password")


// }
// else if(user===corr){
// document.write("correct passsword")
// }
// else{
// document.write("incorrect")

// }



// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// document.write(greeting)
// }
// else{
// greeting= "Good evening";
// document.write(greeting)
// }


// var user=prompt("enter the time in clock format");
// if(user==13){
// document.write("1 pm")

// }
// else if(user==14){
//     document.write("2 pm")
    
//     }
//     else if(user==15){
//         document.write("3 pm")
        
//         }
//         else if(user==16){
//             document.write("4 pm")
            
//             }
//             else if(user==17){
//                 document.write("5 pm")
                
//                 }
//                 else if(user==18){
//                     document.write("6 pm")
                    
//                     }
//                     else if(user==19){
//                         document.write("7 pm")
                        
//                         }
//                         else if(user==20){
//                             document.write("8 pm")
                            
//                             }
//                             else if(user==21){
//                                 document.write("9 pm")
                                
//                                 }
//                                 else if(user==22){
//                                     document.write("10 pm")
                                    
//                                     }
//                                     else if(user==23){
//                                         document.write("11 pm")
                                        
//                                         }
//                                         else if(user==24){
//                                             document.write("12 pm")
                                            
//                                             }
//                                             else if(user==14){
//                                                 document.write("2 pm")
                                                
//                                                 }




// array

// var a=[];
// var a=["fahad","ali","asad"]
// var a=["SSC","HSC","BCS","BS","BCOM","MS", "M. Phil","PhD"];
// document.write(a[0]);
// document.write(a[1]);
// document.write(a[2]);
// document.write(a[3]);
// document.write(a[4]);
// document.write(a[5]);
// document.write(a[6]);
// document.write(a[7]);

// var stu=["fahad","asad","umer"];
// var sco=[320,230,480];
// var total_marks=500;

// // document.write("scorre of"+stu[0]+"is"+sco[0]+"Percentage:"+sco[0]/total_marks*100+"<br>")
// // document.write("scorre of"+stu[1]+"is"+sco[1]+"Percentage:"+sco[1]/total_marks*100+"<br>")
// // document.write("scorre of"+stu[2]+"is"+sco[2]+"Percentage:"+sco[2]/total_marks*100+"<br>")

// for(var i=0;i<3;i++){

// document.write(stu[i]+"<br>")
// document.write(sco[i]+"<br>")
// }

var color=["red","blue","pink","purple","yellow"];
// var user=prompt("enter the color you want add in first")
// color.unshift(user)
// var user=prompt("enter the color you want add in last")
// color.push(user)
// color.shift()
// color.pop()
// var inuser=prompt("enter your index please")
// var user1=prompt("enter the color")
// color.splice(inuser,0,user1)
// var user2=prompt("enter the  color you want to delete")
// var ind=prompt("enter the lenght")
// color.splice(ind,user2)
// document.write(color)

// var arr=[320,230,480,120]
// var sor=arr.sort();
// document.write(sor)

// var arr=["karachi","lahore","islamabad","Quetta","peshawar"];
// var nik=arr.slice(2,4)
// document.write(nik)

// var arr=["this","is","my","cat"];
// var ji=arr.join(' ')
// document.write(ji)


// var c=["keyboard","mouse","printer","monitor"]
// document.write(c);
// c.shift();
// c.shift();
// c.shift();
// c.shift();
// document.write(c);


// var c=["keyboard","mouse","printer","monitor"]
// c.pop();
// c.pop();
// c.pop();
// c.pop();
// document.write(c);

// var arr=["nokia","samsung","motorala","apple","sony","haier"];
// document.write("<select><option>"+arr[0]+"</option></select>")



// for(var i=0;i<=10;i++){
// document.write(i+"<br>")

// }


// var user=prompt("enter the number show on table")
// var len=prompt("enter the lenght of table")
// for(var i=1;i<=len;i++){

// document.write(user+"*"+i+"="+user*i+"<br>")

// }


// var arr=["apple","mango","orange","banana"];
// for(var i=0;i<arr.length;i++){
// document.write("Element at index"+arr.indexOf(arr[i])+arr[i]+"<br>")

// }

// for(var i=0;i<=15;i++){
 
// document.write("counting"+i)

// }

// for(var i=10;i>=1;i--){
 
//     document.write(i)
    
// }
// for(var i=2;i<=20;i=i+2){
 
//     document.write(i)
    
//     }
// for(var i=1;i<=19;i=i+2){
 
//     document.write(i)
    
//     }

// var arr=["cake","apple","cookie","chips","patties"];
// var user=prompt("enter the value");
// for(var i=0;i<arr.length;i++){
// if(user==arr[i])
// document.write("yes"+arr.indexOf(arr[i]));

// }


// var arr=[24,45,78,98,40];
// var lar=0;
// for(var i=0;i<arr.length;i++){

// if(arr[i]>lar){
//     lar=arr[i]

// }


// }
// document.write("largest number is : " + lar);

// var arr=[24,45,78,98,40];
// var lar=arr[0];
// for(var i=0;i<arr.length;i++){

// if(arr[i]<lar){
//     lar=arr[i]

// }


// }
// document.write("largest number is : " + lar);


// for(i=5;i<=100;i=i+5){
// document.write(i)


// }


// var user=prompt("enter the name")
// var user1=prompt("enter the secname")
// var full=user+user1;
// document.write(full)


// var user="i love pakistan";
// document.write(user.length)

// var love="pakistan";
// document.write(love.indexOf('n'))

// var wor="hellow world";
// document.write(wor.lastIndexOf('l'))


// var str="pakistani";
// var u=str.charAt(3)
// document.write(u)

// var user=prompt("enter the name");
// var user2=prompt("enter the last name")
// var fullname=user.concat(user2);
// document.write(fullname)

//  var city="hyderabad";
//  var str=city.replace('hyder','islam');
//  document.write(str);


// var message = "Ali and Sami are best friends. They play cricket and football together"
// var str=message.replace(/and/g,'&')
// document.write(str)


// var nu=472;
// document.write(nu);
// var nu=472;
// var numbe=Number(nu)
// document.write(numbe);



// var str="peanuts"
// var up=str.toUpperCase();
// document.write(up)


// var user=prompt("enter the value");
// var up=user.slice(0,1);
// var ups=up.toUpperCase();
// var lo=user.slice(1);
// var los=lo.toLowerCase();
// document.write(ups+los)

// var num=35.36;
// var la=num.toFixed(0);
// document.write(la)

// var num="35.36";
// var la=num.replace('.','')
// document.write(la)


// var user=prompt("enter the user");
// for(var i=0;i<user.length;i++){
// if(user.charCodeAt(user[i])==33){

//     document.write("enter a valid username")

// }
// else if(user.charCodeAt(user[i])==44){

//     document.write("enter a valid username")

// }
// else if(user.charCodeAt(user[i])==46){

//     document.write("enter a valid username")

// }

// else if(user.charCodeAt(user[i])==64){

//     document.write("enter a valid username")

// }
// }


// var a=["cake","apple","cookie","chips"];
// var user=prompt("enter the user");


// var uni="indusuniversity";
// // var b=uni.split('');
// for(var i=0;i<uni.length;i++){

// document.write(uni[i]+"<br>")

// }


// var a="the quick brown fox jumps over the lazy dog";
// var count=a.match(/the/g).length
// document.write(count)



// var num=3.45214;
// var rou=Math.round(num);
// document.write(rou)
// var floo=Math.floor(num);
// document.write(floo)
// var cei=Math.ceil(num);
// document.write(cei)


// var a=-4;
// var dd=Math.abs(a);
// document.write(dd)


// var a=Math.random()*10;
// var roun=Math.round(a)
// document.write(roun);





// var a=Math.random()*1+1;
// var roun=Math.round(a)
// if(roun==1){
// document.write("tails");
// }
// else{
//     document.write("Heads");

// }

// var a=Math.random()*100;
// var roun=Math.round(a);
// document.write(roun)


// var user=prompt("enter the please");
// var a=Math.random*10;
// if(user===a){
// document.write("yes")

// }
// else{
// document.write("soory")

// }


// var a=new Date();
// document.write(a);

// var a=new Date();
// var mon=["jan","feb","mar","april","may","june","july"]
// var cu=a.getMonth();
// var cumo=mon[cu];
// document.write(cumo)

// var a=new Date();
// var day=["sun","monday","tuesday","wed","thu","fri","sat"];
// var cu=a.getDay();
// var cuda=day[cu]
// document.write(cuda)

// var a=new Date();
// var b=a.getDay();
// if(b==0 || b==6){
// document.write("ajj hai")

// }

// var a=new Date();
// var b=a.getDate()
// if(b<15){
// document.write("before 15")

// }
// else{
//     document.write("after 15")


// }

// var a=new Date();
// document.write(a);
// var b=a.getTime()
// document.write(b+"<br>");
// var min=a.getTime()/1000*60*60;
// document.write(min)

// var a=new Date();
// var b=a.getHours()
// if(b<12){
// document.write("Good Morning")
// }

// else{
//     document.write("Good afternoon")
// }


// var a=new Date("31-july-2021");
// document.write(a);

// var curr=new Date();
// var a=new Date("2021/1/1");
// var daygo=curr.getTime();
// var goneday=daygo-a.getTime()/(1000*60*60*24)
// document.write(goneday)


// var currentdate=new Date()
// var startingdate = new Date("2020/02/13");
// var daysgone = (currentdate.getTime() - startingdate.getTime())/(1000*60*60*24);
// document.write(daysgone + " days have passed since ramazan 1st")


// var curr=new Date();
// var pas=new Date("2015")
// var cu=curr.getTime();
// var fi=cu-(pas.getTime())/(1000*60)
// document.write(fi)


// var a=new Date();
// document.write(a+"<br>");
// var ne=new Date(a.getTime()-(1000*60*60))
// document.write(ne)

// var a=new Date();
// document.write(a+"<br>");
// var getbck=new Date(a.getTime()-(1000*60*60*24*364.25*100));
// document.write(getbck)

// var a=new Date()
// var age=prompt("emter the user");
// var to=new Date(a.getTime()-(1000*60*60*24*365*age))
// document.write(to)


// function abc(){

// var a=new Date();
// document.write(a)

// }
// abc()


// abc=()=>{

// var n=prompt("enter the name");
// var l=prompt("enter the last");
// var fu=n+l;
// document.write(fu)

// }

// abc()

// abc=()=>{

// var f=+prompt("enter the number");
// var l=+prompt("enter the last number")
// var c=f+l;
// return c;
// }
// document.write(abc())


// var x=20;
// var y=15;
// x=x+y;
// y=x-y;
// x=x-y;
// document.write(x+"<br>")
// document.write(y)

// function sum(num1,num2,opr){
// var result;
// if(opr=="+"){

// result=num1+num2;

// }
// else if(opr=="/"){

//     result=num1/num2;
    
//     }
//   else if(opr=="*"){

//         result=num1*num2;
        
//         }
//        else if(opr=="-"){

//             result=num1-num2;
            
//             }
//            return result;

// }

// var a=sum(+prompt("enter the first"),+prompt("enter the second"),prompt("enter the opr"))
// document.write(a)



// function abc(num){

// var re=num*num;
// return re;

// }
// var a=abc(5)
// document.write(a);

// var sum=0;
// function abc(num){
// var fact;
// for(var i=0;i<num;i++){
// fact=num*i;
// sum=sum+fact;



// }

// document.write(sum)

// }

// abc(4)




// var sum=0;
// function fac(num){
// var fact=1;
// for(var i=0;i<num;i++){
// fact=fact*(num-i);


// }
// document.write(fact)
// }


// fac(6);

// var fi=prompt("enter the first user")
// var la=prompt("enter the second user")
// for(var i=fi;i<la;i++){

// document.write(i)

// }


// function abc(wo){
//   var str="";
//     for(var i=wo.length-1;i>=0;i--){

// str+=wo[i];

//     }

//     if(wo===str){

// document.write("it is")

//     }
    


// }

// abc("madam")






// function abc(strng){
// var newstr="";
// for(var i=strng.length-1;i>=0;i--){
// newstr+=strng[i]


// }
// if(newstr===strng){

// document.write("yes mae ho")

// }



// }

// abc(prompt("enter the word"));


// function abc(word){
// word=word.split(' ')
// for(var i=0;i<word.length;i++){

// word[i]=word[i].charAt(0).toUpperCase();
// document.write(word[i])

// }




// }


// abc("fahad khan ho mae")


// function abc(strg){

// var newstrg='';
// for(var i=strg.length-1;i>=0;i--){
// newstrg+=strg;


// }
// if(newstrg===strg){

// document.write("yes")

// }

// }


// abc("madam");


// function abc(word){
//   word=word.split(' ');
//     for(var i=0;i<word.length;i++){
//      word[i]=word[i].charAt(0).toUpperCase()+word[i].slice(1)
// document.write(word[i])
        
//     }



// }


// abc("fahad khan ho mae");




function abc(word){
var array1=word.match(/\w[a-z]{0,}/gi);
var result=array1[0]

for(var i=0;i<array1.length;i++){

if(result.length<array1[i].length){

    result=array1[i]

}

}





}


abc("web development tutorail")


