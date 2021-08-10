var slideIndex = 1;
var slides = document.getElementsByClassName("mySlides");
var myContainer = document.querySelector(".my-container");
var carousel = document.getElementsByClassName("carousel");
var next = document.getElementById("next");

//点击顶部header导航高亮显示
$(".menu .list-unstyled li").each((i) => {
  sessionStorage.getItem("menuIndex") === null ? sessionStorage.setItem("menuIndex", "0") : null;
  // sessionStorage.setItem("current", "0");
  $(".menu .list-unstyled li").eq(i).click((e) => {
    sessionStorage.setItem("menuIndex", i);
    e.stopPropagation();
  });
  let j = sessionStorage.getItem("menuIndex");
  $(".menu .list-unstyled li").eq(i).removeClass("active");
  $(".menu .list-unstyled li").eq(parseInt(j)).addClass("active");
});


//点击顶部导航header的分类进入相应分类并高亮
$('.list-unstyled li').on("mouseover", function (e) {
  if ($(this).hasClass("active")) {
  } else {
    sessionStorage.setItem("current", "0");
  }
  $(this).find("div.ul").find("div.li").on("mouseover", function (e2) {
    sessionStorage.setItem("current", $(this).index())
    e2.stopPropagation();
  });
});

// $('.list-unstyled li').on("click", function (e) {
//   // sessionStorage.setItem("current", "0");
// });

//点击下面导航分类显示高亮
$(".title-4 ul li").each((i) => {
  sessionStorage.getItem("current") === null ? sessionStorage.setItem("current", "0") : null;
  $(".title-4 ul li").eq(i).click(() => {
    sessionStorage.setItem("current", i);
  });
  let j = sessionStorage.getItem("current");
  $(".title-4 ul li").eq(i).find("a").removeClass("hover-active");
  $(".title-4 ul li").eq(parseInt(j)).find("a").addClass("hover-active");
});


/**
 * @description 详情页向上滚动效果
 */
function animateTop() {
  $("#sections2").addClass("ani-sc2");
  setTimeout(() => {
    $("#sections2").removeClass("ani-sc2");
  }, 1500);
}

animateTop();


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
    // plusSlides(1);
  }, 3000);
  if (!next) return;
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
  // console.log(n, "show");
  var i;
  if (slides.length===0) return;
  if (n > slides.length) {slideIndex = 1}
  if (n < 0) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    carousel[i].classList.remove("active");
  }
  // console.log(slideIndex, "slideiNdex");
  slides[slideIndex-1].style.display = "block";
  carousel[slideIndex-1].classList.add("active");
}


