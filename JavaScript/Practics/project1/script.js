document.getElementById("button").addEventListener("click",changebgc)
function changebgc(){
    let rancolor = "#"+ Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor=rancolor
}

// const rancolor = ()=>{
//     let val = "0123456789ABCDEF"
//     let cons = "#"
//     for(let i=0;i<6;i++){
//         cons = cons + val[Math.floor(Math.random()*16)];
//     }
//     return cons;
// }