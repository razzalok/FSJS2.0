let accordian = document.querySelectorAll(".accordian h3");
accordian.forEach((element) => {
  element.addEventListener("click", () => {
    let para = element.nextElementSibling;
    if (para.style.display === "block") {
      para.style.display = "none";
    } else {
      para.style.display = "block";
    }
  });
});
accordian[2].nextElementSibling.style.display="block"
accordian[3].nextElementSibling.style.display="block"

const contactreplace = document.querySelectorAll("li")
// contactreplace[2].innerText = "Projects"



const accordianWrapper = document.querySelector(".accordian-wrapper")
const newaccorian = document.createElement("div");
newaccorian.classList.add("accordian");
const h3 = document.createElement("h3");
h3.textContent="Skills";
const p=document.createElement("p");
p.textContent="I posses a very good command over the Full Stack devlopment techno;ogies like MERN which can be seen in my work over the Github."

newaccorian.appendChild(h3)
newaccorian.appendChild(p)
p.style.display="block"

accordianWrapper.appendChild(newaccorian)

