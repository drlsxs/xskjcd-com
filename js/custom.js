var slideIndex = 1;
var slides = document.getElementsByClassName("mySlides");
var myContainer = document.querySelector(".my-container");
var carousel = document.getElementsByClassName("carousel");
var next = document.getElementById("next");


showSlides(slideIndex);
/**
 * @description 调用轮播左右切换函数，将参数传递给切换函数，slideIndex + n 表示下一个要切换的轮播
 * @param {number} n 轮播左右切换加减量 1 和 -1
 */
function plusSlides(n) {
  showSlides(slideIndex += n);
}

/**
 * @description 点击轮播下面的滚轮切换轮播图
 */
const goClick = () => {
  $(".carousel").each((i) => {
    $(".carousel").eq(i).click(() => {
      for (let j = 0; j < slides.length; j++) {
        slides[j].style.display = "none";
        carousel[j].classList.remove("active");
      }
      slides[i].style.display = "block";
      carousel[i].classList.add("active");
      slideIndex = i + 1;
    });
  });
};

goClick();

/**
 * @description 自动切换轮播图
 */
let autoPlay = () => {
  let timeId = setInterval(() => {
    plusSlides(1);
  }, 3000);
  next.addEventListener("click", (e) => {
    clearInterval(timeId);
    autoPlay();
  })
  $(".carousel").each((i) => {
    $(".carousel").eq(i).click(() => {
      clearInterval(timeId);
      autoPlay();
    });
  });


};

autoPlay()

/**
 * @description 实现点击轮播左右切换按钮
 * @param n{number} 表示接受轮播左右按钮的加减量
 */
function showSlides(n) {
  // debugger;
  console.log(n, "show");
  var i;
  if (n > slides.length) {slideIndex = 1}
  if (n < 0) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    carousel[i].classList.remove("active");
  }
  console.log(slideIndex, "slideiNdex");
  slides[slideIndex-1].style.display = "block";
  carousel[slideIndex-1].classList.add("active");
}
