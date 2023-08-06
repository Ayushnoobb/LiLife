
window.addEventListener("load", ()=>{
    setHeaderHeight();
    indexZero();
    clickHam();
    buttonClick();

})

window.addEventListener("resize" , ()=>{
    setHeaderHeight();
    indexZero();
    clickHam();
    buttonClick();

})



function setHeaderHeight(){

    let headerheight = document.querySelector(".header").getBoundingClientRect().height;
    let windowHeight = window.innerHeight;
    let asideHeight = windowHeight - headerheight;
    
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


function buttonClick(){
    const buttons = document.querySelectorAll(".card__more");
    document.querySelector(".service__model").close();


    buttons.forEach((button,index) =>{
        button.addEventListener("click",async() => {
            // showSlide(index);
            // await appendItem(index);
            swiperInit(index);
            document.querySelector(".service__model").showModal();
            document.body.style.height = "100vh";   
            document.body.style.overflow = "hidden";

        })
    })

    document.querySelector(".service__model--close").addEventListener("click",()=>{
        document.querySelector(".service__model").close();
        document.body.style.height = "unset";   
        document.body.style.overflow = "auto";
        location.reload();
    })


}

function swiperInit(i){
    var swiper = new Swiper(".mySwiper", {
        navigation: {
          nextEl: ".swiper-button-prev",
          prevEl: ".swiper-button-next"
        },
        effect: "coverflow",
        centeredSlides: true,
        slidesPerView: 1,
        spaceBetween: 20,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 0,
          modifier: 4,
          slideShadows: false
        },
        breakpoints: {
          640: {
            slidesPerView: 2
          }
        }
      });

      const sliders = [
        {"length":7},
        {"length":5},
        {"length":4},
        {"length":7},
        {"length":3},
        {"length":5},
        {"length":7},
        {"length":4},
        {"length":7},
        {"length":8},
    ]

    let length = sliders[i].length;
    let child = "";

    for(counter=1 ; counter<=length ; counter++){
        console.log("prepend")
        var divElement = document.createElement('div');
        divElement.className = 'swiper-slide'; // Add a CSS class if desired

        // Create an <img> element
        var imgElement = document.createElement('img');
        imgElement.src = `../img/construction-img/category${i+1}_0${counter}.jpg`;
        imgElement.alt = 'Image Alt Text';

        divElement.appendChild(imgElement);

        // Append the <div> element to the body of the document
        // document.querySelector(".swiper-wrapper").appendChild(divElement);
        console.log(divElement)
        swiper.prependSlide(divElement);

        console.log(document.querySelectorAll(".swiper-slide").length )

    }


    //   swiper();
}

function showSlide(i){
    const slides = document.querySelectorAll(".swiper-slide");
    slides.forEach(slide =>{
        slide.style.display = "none";
        if(parseInt(slide.getAttribute('data-category')) == i+1){
            console.log("true");
            slide.classList.add("display");
            slide.style.display = "block";
        }
    })
}

function appendItem(i){
    console.log("append")

    
}