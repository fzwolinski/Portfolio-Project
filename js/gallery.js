var main_img_index = null;
var num_of_images = null;

$('.portfolio-img').click(function(e) {
  var main_img_src = e.target.getAttribute('src');
  main_img_index = main_img_src.slice(main_img_src.length-5, main_img_src.length-4);
  num_of_images = e.target.parentNode.parentNode.children.length;

  showGallery();
  setMainImg(main_img_src);
  listImages(num_of_images, main_img_src);
  console.log(main_img_src);
});

$('.images').click(function(e) {
  var main_img_src = e.target.getAttribute('src');
  main_img_index = main_img_src.slice(main_img_src.length-5, main_img_src.length-4);
  if(main_img_src != null) { 
    setMainImg(main_img_src);
    
    document.getElementsByClassName('active-img')[0].classList = '';
    var s = ("img/portfolio/" + (parseInt(main_img_index)) + ".jpg");    
    document.querySelector(".images > [src=\"" +s+ "\"]").classList += 'active-img';
  };
});

$('.prevImg').click(function() {
  prevImg();
});

$('.nextImg').click(function() {
  nextImg();
});

$('#closeGallery').click(function() {
  closeGallery();
});

function setMainImg(s) {
  $('.main-img > img').attr('src', s);
}

function showGallery() {
  $('.gallery').css('display', 'block');
}

function listImages(num_of_images, main_img_src) {
  for(var i = 1; i <= num_of_images; i++) {
    var img_elem = document.createElement('img');
    img_elem.setAttribute("src", "img/portfolio/" + i + ".jpg");
    if (main_img_src == ("img/portfolio/" + i + ".jpg")) {
      img_elem.classList += 'active-img';
    }
    document.getElementsByClassName('images')[0].appendChild(img_elem);
  }
}

function prevImg() {
  if (main_img_index == "1") {
    var prevImgSrc = "img/portfolio/" + main_img_index + ".jpg";
  } else {
    var prevImgSrc = "img/portfolio/" + (parseInt(main_img_index) - 1) + ".jpg";
    main_img_index = (parseInt(main_img_index)-1);

    document.getElementsByClassName('active-img')[0].classList = '';
    var s = ("img/portfolio/" + (parseInt(main_img_index)) + ".jpg");    
    document.querySelector("[src=\"" +s+ "\"]").classList += 'active-img';
  }
  setMainImg(prevImgSrc);
}

function nextImg() {
  if (main_img_index == num_of_images) {
    var nextImgSrc = "img/portfolio/" + main_img_index + ".jpg";
  } else {
    var nextImgSrc = "img/portfolio/" + (parseInt(main_img_index) + 1) + ".jpg";
    main_img_index = (parseInt(main_img_index)+1);

    document.getElementsByClassName('active-img')[0].classList = '';
    var s = ("img/portfolio/" + (parseInt(main_img_index)) + ".jpg");    
    document.querySelector("[src=\"" +s+ "\"]").classList += 'active-img';
  }
  setMainImg(nextImgSrc);
}

function closeGallery() {
  $('.gallery').css('display', 'none');
  document.getElementsByClassName('images')[0].innerHTML = "";
}