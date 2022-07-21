window.addEventListener('load', () =>{

  const navicon = document.getElementById("icon")
  const menu = document.getElementById("menu")

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
})