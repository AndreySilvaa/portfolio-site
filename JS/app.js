window.addEventListener('load', () =>{

  let body = document.getElementsByTagName("body")[0]
  const navicon = document.getElementById("icon")
  const menu = document.getElementById("menu")
  const dvProjects = document.querySelectorAll("#div-projects > h2, #div-projects > p")
  const slider = document.getElementsByClassName("list-projects")[0]
  const habP = document.querySelector("#div-habilidades h2")
  const habDiv = document.getElementsByClassName("list-habilidades")[0]
  const certH2 = document.querySelector("#div-certificacoes h2")
  const certificados = document.querySelectorAll("#div-certificacoes li")
  const contH2 = document.querySelector("#div_contato h2")
  const contDvs = document.querySelectorAll("#container_contato > div")
  

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

    /*
    window.onscroll = (e) =>{
      menu.classList.remove("showmenu")
      navicon.classList.remove("fa-times")
    }
    */

    
    // ANIMAÇÕES
    console.log(contDvs)
    window.onscroll = (e) =>{
      //Show/Hide MENU
      menu.classList.remove("showmenu")
      navicon.classList.remove("fa-times")

      //FADE IN
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

      if(window.scrollY > 1250){
        habDiv.classList.add("right_animation")
      }

      if(window.scrollY > 1600){
        certH2.classList.add("left_animation")
      }

      if(window.scrollY > 1800){
        certificados[0].classList.add("fadeIn")
      }

      if(window.scrollY > 2000){
        certificados[1].classList.add("fadeIn")
      }

      if(window.scrollY > 2300){
        contH2.classList.add("left_animation")
      }

      if(window.scrollY > 2400){
        contDvs[0].classList.add("fadeIn")
      }

      if(window.scrollY > 2500){
        contDvs[1].classList.add("fadeIn")
      }
    }
})