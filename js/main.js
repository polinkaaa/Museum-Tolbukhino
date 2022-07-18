$(document).ready(function(){
  $(".slide-one").owlCarousel({
      center: false,
      loop: true,
      margin: 20,
      items: 1,
      responsive: {
        450: {
          items: 2,
        },
        841: {
          items: 3,
          center: true,
        }
      },
  });
});

$(document).ready(function(){
  $(".slide-two").owlCarousel({
      loop: true,
      margin: 20,
      items: 3,
      autoplay:true, //Автозапуск слайдера
      smartSpeed:2000, //Время движения слайда
      autoplayTimeout:5000, //Время смены слайда
  });
});

const links = document.querySelectorAll(".link-serf");
for (const link of links) {
  link.addEventListener("click", clickHandler);
}
function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  document.querySelector(href).scrollIntoView({
    behavior: "smooth"
  });
}

// Menu
function openModal() {
  document.getElementById("modal").style.top = "0px";
}
function closeModal() {
  document.getElementById("modal").style.top = "-400px";
}