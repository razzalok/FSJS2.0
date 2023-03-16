const contactreplace = document.querySelectorAll("li")
contactreplace[2].innerText = "Projects"
const li = document.createElement("li")
const a = document.createElement("a");
a.href="#";
a.textContent="Hire Me";
li.appendChild(a);
const allultag = document.querySelectorAll("ul");
allultag[0].appendChild(li);

allinputtag = document.querySelectorAll("input");
allinputtag[0].placeholder="Search My Project";


const lastli = document.querySelector("li:last-child");

lastli.parentElement.removeChild(lastli);


const allspan = document.querySelectorAll("span");
allspan[2].innerText="an Employee";
allspan[3].innerText="iNeuron Intelligence Pvt Ltd";

const imgtag = document.querySelector("img");
imgtag.src="./person-image.jpg";

const buttons = document.querySelector(".hero-right-section-btns")
const btn = document.createElement("button")
btn.textContent= "Support Me"
buttons.appendChild(btn)