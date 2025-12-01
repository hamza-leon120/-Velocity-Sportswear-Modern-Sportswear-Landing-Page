
let button = document.querySelector(".fa-solid.fa-bars-staggered")
let sideBar = document.querySelector(".side-bar")
let buttonUp = document.querySelector(".button-up")
button.onclick = function() {
    if (window.getComputedStyle(sideBar).height === "0px"){
        sideBar.style.cssText = "height: 365px;"
    }else {
        sideBar.style.cssText = "height: 0px;"
    }
}
window.onscroll = function() {
    if (window.getComputedStyle(sideBar).height >= "0px"){
        sideBar.style.cssText = "height: 0px;"
    }
    if(window.scrollY > 500) {
        buttonUp.style.cssText = "position: fixed"
    }else {
        buttonUp.style.cssText = "display: none"
    }
}
buttonUp.onclick = function () {
    window.scrollTo({
        left : 0 ,
        top : 0 ,
        behavior : "smooth" ,
    })
}