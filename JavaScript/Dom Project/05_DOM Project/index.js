const ab = document.querySelectorAll("div")
const btn = document.createElement("a")
btn.classList.add("btn")
btn.textContent="Pro Subscription"

// ab.appendChild(btn)
// console.log(ab);
ab[3].appendChild(btn)


const recipe = document.createElement("a")

recipe.textContent="Chinese (7)"
ab[7].appendChild(recipe)


const gallery= document.querySelector(".recipe-gallery");
const card = document.createElement("div")
card.classList.add("card")
const atag = document.createElement("a")
atag.classList.add("recipe-text")
const cardimg = document.createElement("img");
cardimg.src="./img/recipe-1.jpeg";
const cardh5 = document.createElement("h5");
cardh5.textContent="New Chicken";
const cardp=document.createElement("p")
cardp.textContent="Prep : 10min | Cook : 25min"
// atag.innerHTML=`cardimg cardh5 cardp`;
atag.innerHTML=(cardh5)
atag.innerHTML=(cardh5)
atag.innerHTML=(cardp)

console.log(atag);
card.innerHTML=atag;
console.log(card);
gallery.appendChild(card)



const alla = document.querySelectorAll("a")
console.log(alla);
alla[19].textContent="Alok Raj"