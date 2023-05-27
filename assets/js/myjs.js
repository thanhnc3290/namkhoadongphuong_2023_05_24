function tongle_main_menu(){
    var main_menu = document.getElementById('main_menu');
    let style = main_menu.style.display;
    //console.log(style);
    if(style == 'none'){
        main_menu.setAttribute('style','display:block;');
    }else{
        main_menu.setAttribute('style','display:none;');
    }
}

function close_main_menu(){
    document.getElementById('main_menu').setAttribute('style','display:none;');
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}


