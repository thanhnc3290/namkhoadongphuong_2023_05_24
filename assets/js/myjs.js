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


let slideIndex_2 = 1;
showSlides_2(slideIndex_2);

function plusSlides_2(n) {
    showSlides_2(slideIndex_2 += n);
}

function currentSlide_2(n) {
    showSlides_2(slideIndex_2 = n);
}

function showSlides_2(n) {
    let i;
    let slides_2 = document.getElementsByClassName("mySlides_2");
    if (n > slides_2.length) {slideIndex_2 = 1}
    if (n < 1) {slideIndex_2 = slides_2.length}
    for (i = 0; i < slides_2.length; i++) {
        slides_2[i].style.display = "none";
    }
    slides_2[slideIndex_2-1].style.display = "block";
}


let slideIndex_3 = 1;
showSlides_3(slideIndex_3);

function plusSlides_3(n) {
    showSlides_3(slideIndex_3 += n);
}

function currentSlide_3(n) {
    showSlides_3(slideIndex_3 = n);
}

function showSlides_3(n) {
    let i;
    let slides_3 = document.getElementsByClassName("mySlides_3");
    if (n > slides_3.length) {slideIndex_3 = 1}
    if (n < 1) {slideIndex_3 = slides_3.length}
    for (i = 0; i < slides_3.length; i++) {
        slides_3[i].style.display = "none";
    }
    slides_3[slideIndex_3-1].style.display = "block";
}
