document.getElementById("button").addEventListener("click",changebgc)
function changebgc(){
    let color = "#"+ Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor=color
}