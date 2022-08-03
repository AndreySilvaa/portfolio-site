window.addEventListener('load', () =>{

  let body = document.getElementsByTagName("body")[0]
  const navicon = document.getElementById("icon")
  const menu = document.getElementById("menu")
  const dvProjects = document.querySelectorAll("#div-projects > h2, #div-projects > p")
  const slider = document.getElementsByClassName("list-projects")[0]
  const habP = document.querySelector("#div-habilidades h2")
  

  //SLIDER
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 3,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });

      if(window.innerWidth < 500){
        swiper.params.slidesPerView = 1
        swiper.params.slidesPerGroup = 1
        
      }else if(window.innerWidth < 1030){
        swiper.params.slidesPerView = 2
        swiper.params.slidesPerGroup = 1
      }
      

    //Show/Hide MENU
    navicon.addEventListener("click", () =>{
      menu.classList.toggle("showmenu")
      navicon.classList.toggle("fa-times")
    })

    window.onscroll = (e) =>{
      menu.classList.remove("showmenu")
      navicon.classList.remove("fa-times")
    }

    
    // ANIMAÇÕES

    window.onscroll = (e) =>{
      if(window.scrollY > 200){
        Array.from(dvProjects).forEach((el) =>{
          el.classList.add("left_animation")
        })
      }

      if(window.scrollY > 500){
        slider.classList.add("right_animation")
      }

      if(window.scrollY > 800){
        habP.classList.add("left_animation")
      }
    }
})