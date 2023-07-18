const cart = document.getElementById("cart");
const cart_icon = document.getElementById("cart_icon");
const menu_cart_items = document.getElementsByClassName("menu_cart_items")[0];

/*toggle cart table*/
cart.addEventListener("click", () => {
  let srcAttr = cart_icon.getAttribute("src");
  if (srcAttr === "images/basic/bag21.png") {
    cart_icon.src = "images/basic/cross97.png";
  } else if(srcAttr === "images/basic/cross97.png") {
    cart_icon.src = "images/basic/bag21.png";
  }else{
    return ;
  }
});
/*toggle cart icon*/
cart_icon.addEventListener("click", () => {
  if(menu_cart_items.classList.contains('toggle_cart')){
    menu_cart_items.classList.remove('toggle_cart')
  }else{
    menu_cart_items.classList.add('toggle_cart')
  }
});

/*tabs in the single.html page*/
function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }
 