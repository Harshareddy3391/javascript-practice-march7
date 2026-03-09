/*
let l={}
console.log(typeof(l))

 

for (let i=0;i<=10;i++){
    console.log(i)
}


console.log("while")
let a=1;
while (a<=10){
console.log(a)
a+=1
}



console.log("for of")
let arry=[1,2,3,4,5,6,7,8]

for (i of arry){
console.log(i)
}*/



console.log("for of")
let enames=["rg","Sg","pg","nm"];

for ( i of enames){
    console.log(i)
}



console.log("while arry")


let arr=0;

while (arr <= enames.length){
    console.log(enames[arr])
    arr++;
}

console.log("for arry")

for (let ar=0;ar<=enames.length-1;ar++){
    console.log(enames[ar])
}
