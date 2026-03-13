function green(){
    
    let d=document.getElementById('mo')
    d.style.background="green"
}



function blue(){
    document.getElementById('mout').style.background="blue"
}





function greenin(){
    
    let d=document.getElementById('inout')
    d.style.background="green"
}



function blueout(){
    document.getElementById('inout').style.background="blue"
}


function clickc(){
    document.getElementsByClassName('click')[0].style.background="yellow"
}


function dbclick(){
    document.getElementsByTagName('button')[5].style.background="yellow"
}



function tfocus(){
    let inputs=document.querySelectorAll(".inp");

   /*  inputs.forEach((e1)=>{
        e1.style.background="yellow"
    }) */

        for (let i = 0; i < inputs.length; i++) {
         inputs[i].style.background = "yellow";
        }
}









