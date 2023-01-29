const imagesArray = ["./images/img_1.jpg", "./images/img_2.jpg", "./images/img_3.jpg", "./images/img_4.jpg"];


function pictureSelection () {
imageNumber = Math.floor(Math.random() * imagesArray.length);
document.getElementById("some_image").src = imagesArray[imageNumber]}