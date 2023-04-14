let sideBar = document.querySelector(`.sidebar`)
let btn1 = document.querySelector(`.btn1`)
function showSidebar(){
    sideBar.classList.add(`active`)
}
btn1.addEventListener(`click`,showSidebar)

let btn2 = document.querySelector(`.btn2`)
function hideSideBar(){
    sideBar.classList.remove(`active`)
}
btn2.addEventListener(`click`,hideSideBar)

