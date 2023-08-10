
window.addEventListener("load", ()=>{
    setHeaderHeight();
    indexZero();
    clickHam();
    buttonClick();
    // handleForm();

})

window.addEventListener("resize" , ()=>{
    setHeaderHeight();
    indexZero();
    clickHam();
    buttonClick();
    // handleForm();

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
    // document.querySelector(".service__model").close();


    if(buttons){
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
    }

    if(document.querySelector(".service__model--close")){
        document.querySelector(".service__model--close").addEventListener("click",()=>{
            document.querySelector(".service__model").close();
            document.body.style.height = "unset";   
            document.body.style.overflow = "auto";
            location.reload();
        })
    }


}

function swiperInit(i){
    var swiper = new Swiper(".mySwiper", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        centeredSlides: true,
        slidesPerView: 1,
        spaceBetween: 40,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
            
          640: {
            slidesPerView: 1
          }
        }
      });

      const sliders = [
        {"length":7},
        {"length":5},
        {"length":7},
        {"length":3},
        {"length":5},
        {"length":4},
        {"length":7},
        {"length":7},
        {"length":7},
        {"length":5},
        {"length":10},
    ]

    let length = sliders[i].length;
    let child = "";

    for(counter=1 ; counter<=length ; counter++){
        var divElement = document.createElement('div');
        divElement.className = 'swiper-slide'; // Add a CSS class if desired

        // Create an <img> element
        var imgElement = document.createElement('img');
        if( i == 2){
            imgElement.style.obj
        }
        imgElement.src = `../img/construction-img/category${i+1}_${counter}.jpg`;
        imgElement.alt = 'Image Alt Text';

        divElement.appendChild(imgElement);

        // Append the <div> element to the parent
        swiper.prependSlide(divElement);



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

function handleForm(){
    const form = document.getElementById('contactForm');
    const errorMessages = document.getElementById('errorMessages');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
      let errorMsg = '';

      // Clear previous error messages
      errorMessages.innerHTML = '';

    //   console.log(event.target.family_name.value)

    //   // Name validation
      const nameInput = event.target.family_name.value;
      if (!nameInput.value) {
        errorMsg += 'Name is required.<br>';
      }

      // Email validation
      const emailInput = event.target.email.value;
      const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      if (!emailPattern.test(emailInput.value)) {
        errorMsg += 'Valid email is required.<br>';
      }

      // Message validation
      const messageInput = event.target.message.value;
      if (!messageInput.value) {
        errorMsg += 'Message is required.<br>';
      }


      const phoneNumberInput = event.target.telephone.value;
    //   const phoneNumberPattern = /^(?:\+81|0)[1-9][0-9]{8,9}$/;
      
    //   if (!phoneNumberPattern.test(phoneNumberInput.value)) {
    //     errorMsg += 'Valid Japanese phone number is required.<br>';
    //   }

    // Email.send({
    //     Host : "smtp.gmail.com",
    //     Username : "ayushwilltry@gmail.com",
    //     Password : "38B37EC06EFBC9CEC28540C813CB22DBB8C7",
    //     To : 'ayushwilltry@gmail.com',
    //     From : `${emailInput}`,
    //     Subject : "This is the subject",
    //     Body : "And this is the body"
    // }).then(
    //   message => alert(message)
    // );

      // Display error messages or submit the form
    //   if (errorMsg) {
    //     errorMessages.innerHTML = errorMsg;
    //   }else{
    //         try{
    //             fetch("https://curious-snickerdoodle-964c6a.netlify.app/.netlify/functions/api/demo")
    //             .then(res => res.json())
    //             .then(data => console.log(data))
    //         }
    //         catch(error){
    //             console.log(error);
    //         }
    //   }

    //   if(messageInput && emailInput && phoneNumberInput && messageInput){
    //     console.log("true");
    //     try{
    //         fetch("https://curious-snickerdoodle-964c6a.netlify.app/.netlify/functions/api/demo")
    //         .then(res => res.json())
    //         .then(data => console.log(data))
    //     }
    //     catch(error){
    //         console.log(true);
    //     }
    //   }

    //   console.log(messageInput);
    });
}