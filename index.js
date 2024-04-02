let username = document.querySelector("#txtUserId");
let password = document.querySelector("#txtPwd");
let btn = document.querySelector("#btnLogin");
let exam = document.querySelector(".exam");
let one = document.querySelector(".one");
let image= document.querySelector(".images");
let mainimage=document.querySelector(".mainimage");
let examarks=document.querySelector(".examarks");
let announcements=document.querySelector(".announcements");
let resultbox=document.querySelector(".resultbox");
let showbtn=document.querySelector(".showbtn");
let allmarks=document.querySelector(".allmarks");

// alert("fdsj")

let htno=document.querySelector(".htno");
let Name=document.querySelector(".Name");
let m1=document.querySelector(".m1");
let phy=document.querySelector(".phy");
let bee=document.querySelector(".bee");
let c=document.querySelector(".c");
let pass=document.querySelector(".pass");
let studentimg=document.querySelector(".studentimg");
let tmarks=document.querySelector(".tmarks");
let branch=document.querySelector(".branch");


function unhide(){
  image.classList.toggle("hide");
    one.classList.add("hide");
    mainimage.classList.toggle("hide");
}
// 
btn.addEventListener("click",page);
function page(){
  if(username.value==="23K91A04N9" && password.value==="23K91A04N9"){
    // console.log("baksjh");
    unhide();
    take1();
  }
  else if(username.value==="23K91A04N5" && password.value==="23K91A04N5"){
    unhide();
    take2();
  }
  else if(username.value==="23K91A04K3" && password.value==="23K91A04K3"){
    unhide();
    take3();
  }
  else if(username.value==="23K91A04L1" && password.value==="23K91A04L1"){
    unhide();
    take4();
  }
  else if(username.value==="23K91A04N6" && password.value==="23K91A04N6"){
    unhide();
    take5();
  }
  else if(username.value==="23K91A04R1" && password.value==="23K91A04R1"){
    unhide();
    take6();
  }
  else if(username.value==="23K91A04M2" && password.value==="23K91A04M2"){
    unhide();
    take7();
  }
  else if(username.value==="23K91A04G6" && password.value==="23K91A04G6"){
    unhide();
    take8();
  }
  else{
    alert("Server Error!!!");
  }
};

examarks.addEventListener("click",()=>{
  announcements.classList.add("hide");
  resultbox.classList.remove("hide");
})
showbtn.addEventListener("click",()=>{
  // allmarks.classList.("hide");
  allmarks.style.display="flex";
});


// second



const student1details ={
  name:"THATIPAMULA GUNNY",
rollno:"23K91A04N9",
m1:56,
phy:50,
bee:60,
c:60,
image:"images/studentPhoto.jpeg",
pass:"pass",
branch:"ECE"

// tmarks:`${student1details.bee+student1details.c+student1details.phy+student1details.m1} /240`

};
const student2details={
  name:"SYED ARIF BABA  ",
rollno:"23K91A04N5",
m1:56,
phy:50,
bee:60,
c:55,
pass:"pass",
branch:"ECE",


image:"images/studentPhoto (2).jpeg",
// tmarks:"${student1details.bee+student1details.c+student1details.phy+student1details.m1}"/240

};
const student3details={
  name:"PEDDI GOPICHAND",
rollno:"23K91A04K3",
m1:32,
phy:40,
bee:19,
c:45,
pass:"Fail",
image:"images/studentPhoto (3).jpeg",
branch:"ECE"


};
const student4details={
  name:"POSHABOINA VEERENDRA ",
rollno:"23K91A04L1",
m1:46,
phy:30,
bee:40,
c:28,
pass:"pass",
image:"images/studentPhoto (4).jpeg",
branch:"ECE"


};
const student5details={
  name:"	TAAK ANSH  ",
rollno:"23K91A04N6",
m1:30,
phy:43,
bee:45,
c:50,
pass:"Pass",
image:"images/studentPhoto (5).jpeg",
branch:"ECE"


};
const student6details={
  name:"	YARRANKI VAMSI  ",
rollno:"23K91A04R1",
m1:29,
phy:39,
bee:30,
c:45,
pass:"pass",
image:"images/studentPhoto (6).jpeg",
branch:"ECE"

};
const student7details={
  name:"SHAIK AFSAR ",
rollno:"23K91A04M2",
m1:42,
phy:28,
bee:40,
c:43,
pass:"pass",
image:"images/studentPhoto (1).jpeg",
branch:"ECE"


};
const student8details={
  name:"MOHAMMED SARHAN UDDIN  ",
rollno:"23K91A04G6",
m1:42,
phy:28,
bee:18,
c:43,
pass:"FAIL",
image:"images/studentPhoto (7).jpeg",
branch:"ECE"


};
// console.log(student1details)
function take1(){
  // alert("jhi")
  Name.innerText=student1details.name;
  htno.innerText=student1details.rollno;
  m1.innerText=student1details.m1;
  phy.innerText=student1details.phy;
  bee.innerText=student1details.bee;
  c.innerText=student1details.c; 
  pass.innerText=student1details.pass;
  studentimg.src=student1details.image;
  branch.innerText=student1details.branch;

};
function take2(){
  // alert("jhi")
  Name.innerText=student2details.name;
  htno.innerText=student2details.rollno;
  m1.innerText=student2details.m1;
  phy.innerText=student2details.phy;
  bee.innerText=student2details.bee;
  c.innerText=student2details.c;
  pass.innerText=student2details.pass;
  studentimg.src=student2details.image;
  branch.innerText=student2details.branch;

};
function take3(){
  // alert("jhi")
  Name.innerText=student3details.name;
  htno.innerText=student3details.rollno;
  m1.innerText=student3details.m1;
  phy.innerText=student3details.phy;
  bee.innerText=student3details.bee;
  c.innerText=student3details.c;
  pass.innerText=student3details.pass;
  studentimg.src=student3details.image;
  branch.innerText=student3details.branch;


};
function take4(){
  // alert("jhi")
  Name.innerText=student4details.name;
  htno.innerText=student4details.rollno;
  m1.innerText=student4details.m1;
  phy.innerText=student4details.phy;
  bee.innerText=student4details.bee;
  c.innerText=student4details.c;
  pass.innerText=student4details.pass;
  studentimg.src=student4details.image;
  branch.innerText=student4details.branch;

};
function take5(){
  // alert("jhi")
  Name.innerText=student5details.name;
  htno.innerText=student5details.rollno;
  m1.innerText=student5details.m1;
  phy.innerText=student5details.phy;
  bee.innerText=student5details.bee;
  c.innerText=student5details.c;
  pass.innerText=student5details.pass;
  studentimg.src=student5details.image;
  branch.innerText=student5details.branch;

};
function take6(){
  // alert("jhi")
  Name.innerText=student6details.name;
  htno.innerText=student6details.rollno;
  m1.innerText=student6details.m1;
  phy.innerText=student6details.phy;
  bee.innerText=student6details.bee;
  c.innerText=student6details.c;
  pass.innerText=student6details.pass;
  studentimg.src=student6details.image;
  branch.innerText=student6details.branch;

};
function take7(){
  Name.innerText=student7details.name;
  htno.innerText=student7details.rollno;
  m1.innerText=student7details.m1;
  phy.innerText=student7details.phy;
  bee.innerText=student7details.bee;
  c.innerText=student7details.c;
  pass.innerText=student7details.pass;
  studentimg.src=student7details.image;
  branch.innerText=student7details.branch;

};
function take8(){
  Name.innerText=student8details.name;
  htno.innerText=student8details.rollno;
  m1.innerText=student8details.m1;
  phy.innerText=student8details.phy;
  bee.innerText=student8details.bee;
  c.innerText=student8details.c;
  pass.innerText=student8details.pass;
  studentimg.src=student8details.image;
  branch.innerText=student8details.branch;

};

console.log(`${student1details.bee+student1details.c+student1details.phy+student1details.m1} /240`);