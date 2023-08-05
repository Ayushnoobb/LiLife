
window.addEventListener("load", ()=>{
    setHeaderHeight();
    indexZero();
})

window.addEventListener("resize" , ()=>{
    setHeaderHeight();
    indexZero();
})

function setHeaderHeight(){

    let headerheight = document.querySelector(".header").getBoundingClientRect().height;
    let windowHeight = window.innerHeight;
    let asideHeight = windowHeight - headerheight;
    
    console.log(headerheight + "" +windowHeight);
    console.log(document.querySelector(".aside"));
    document.querySelector(".aside").style.height = `${asideHeight}px`;

}

function indexZero(){
    document.querySelectorAll("a").forEach(link => {
        link.setAttribute('tabindex', '-1');
    })
}