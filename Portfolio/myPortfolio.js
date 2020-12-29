let wrapperEl = document.querySelector(".wrapper");
let mainEl = document.querySelector(".main-content");
let submitEl = document.querySelector(".submit");

submitEl.addEventListener("click", function(){
    mainEl.classList.remove(".main-edited");
    wrapperEl.classList.add(".main-edited")
})