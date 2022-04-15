



const selectors=document.querySelectorAll("[data-selection]")
const htmledit=document.querySelector(".ty-rating")
let selectedlast=0
let selectionvalue=0
selectors.forEach( selected=>{
    selected.addEventListener("click",()=>{
        if(selectedlast){
            selectedlast.classList.remove("selected")
        }
        selectedlast=selected
        
        selected.classList.add("selected")
        
        selectionvalue=selected.dataset.selection
        htmledit.innerHTML=`You selected ${selectionvalue} out of 5`

    })
})

const activebox= document.querySelector(".active")
const thanks=document.querySelector(".thanks")
const submit = document.querySelector("button");

submit.addEventListener("click",() =>{
    if(selectionvalue>0){
    activebox.classList.remove("active")
    thanks.classList.add("active")
    }
})
submit.addEventListener("mouseover",()=>{
    if (selectionvalue<1){
        submit.style.cursor="not-allowed";
    }
    if (selectionvalue>0){
        submit.style.cursor="pointer";
    }
})
