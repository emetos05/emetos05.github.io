var i = 0;
var images = [];
var slideTime = 3000; // 3 seconds

images[0] = "./images/img1.jpg";
images[1] = "./images/img2.jpg";
images[2] = "./images/img3.jpg";

function changePicture() {
  document.querySelector(".slide").style.backgroundImage =
    "url(" + images[i] + ")";

  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }
  setTimeout(changePicture, slideTime);
}

window.onload = changePicture;
