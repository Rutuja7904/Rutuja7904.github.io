const text =
[
"ASPIRING WEB DEVELOPER",
"REACT DEVELOPER",
"MCA STUDENT"
];

let i=0;
let j=0;
let current="";

function type(){

if(j<text[i].length){

current += text[i][j];

document.getElementById("typing").innerHTML=current;

j++;

setTimeout(type,100);

}else{

setTimeout(()=>{
current="";
j=0;
i=(i+1)%text.length;
type();
},1500);

}

}

type();
