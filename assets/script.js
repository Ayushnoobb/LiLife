
window.addEventListener("load", ()=>{
    setHeaderHeight();
    indexZero();
    clickHam();
})

window.addEventListener("resize" , ()=>{
    setHeaderHeight();
    indexZero();
    clickHam();
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

function clickHam(){
    document.querySelector(".hamburger").addEventListener("click",()=>{
        document.querySelector(".hamburger").classList.toggle("is-activ");
        if(document.querySelector(".hamburger").classList.contains("is-activ")){
            document.querySelector(".header__links").classList.add("is-open")    
        }else{
            document.querySelector(".header__links").classList.remove("is-open")    

        }
    })
}