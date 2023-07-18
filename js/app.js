const cart = document.getElementById("cart");
const cart_icon = document.getElementById("cart_icon");
const menu_cart_items = document.getElementsByClassName("menu_cart_items")[0];
const checkout__btn = document.getElementById("checkout__btn");

/*some code for responsive table*/
if (window.innerWidth < 600) {
  checkout__btn.setAttribute("colspan", 2);
  console.log(checkout__btn.getAttribute("colspan"));
}
/*toggle cart table*/
cart.addEventListener("click", () => {
  let srcAttr = cart_icon.getAttribute("src");
  if (srcAttr === "images/basic/bag21.png") {
    cart_icon.src = "images/basic/cross97.png";
  } else if (srcAttr === "images/basic/cross97.png") {
    cart_icon.src = "images/basic/bag21.png";
  } else {
    return;
  }
});
/*toggle cart icon*/
cart_icon.addEventListener("click", () => {
  if (menu_cart_items.classList.contains("toggle_cart")) {
    menu_cart_items.classList.remove("toggle_cart");
  } else {
    menu_cart_items.classList.add("toggle_cart");
  }
});

//slider
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n), n);
}
function currentSlide(n) {
  let x = document
    .getElementsByClassName("dot_container")[0]
    .getElementsByClassName("active")[0];
  x = Number(x.getAttribute("number"));
  let slides = document.getElementsByClassName("mySlides");
  let directionAnimate;
  if (n === 1 && x === slides.length) {
    directionAnimate = 1;
  } else if (n === slides.length && x === 1) {
    directionAnimate = -1;
  } else if (n > x) {
    directionAnimate = 1;
  } else if (n < x) {
    directionAnimate = -1;
  } else {
    directionAnimate = 0;
  }
  showSlides((slideIndex = n), directionAnimate);
}

function showSlides(n, directionAnimate) {
  let i;
  let slides = document.getElementsByClassName("mySlides");

  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "flex";

  dots[slideIndex - 1].className += " active";

  if (directionAnimate === 1) {
    slides[slideIndex - 1].animate(
      [
        // keyframes
        { transform: "translateX(-100%)" },
        { transform: "translateX(-80%)" },
        { transform: "translateX(-60%)" },
        { transform: "translateX(-40%)" },
        { transform: "translateX(-20%)" },
        { transform: "translateX(0)" },
      ],
      {
        // timing options
        duration: 1000,
      }
    );
  } else if (directionAnimate === -1) {
    console.log("ff");
    slides[slideIndex - 1].animate(
      [
        // keyframes
        { transform: "translateX(100%)" },
        { transform: "translateX(80%)" },
        { transform: "translateX(60%)" },
        { transform: "translateX(40%)" },
        { transform: "translateX(20%)" },
        { transform: "translateX(0)" },
      ],
      {
        // timing options
        duration: 1000,
      }
    );
  }
}
