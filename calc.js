function val(num){
    document.getElementById("screen").value += num;
}


function cleardis(){
    
    document.getElementById('screen').value="";

}
function total(){
  let data = document.getElementById("screen").value;
  document.getElementById("screen").value = eval(data);
}