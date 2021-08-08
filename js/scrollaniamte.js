$(window).on("scroll", scrollHandle);
$(window).on("scroll", scrollHandle2);
$(window).on("scroll", scrollHandle3);
function scrollHandle() {
  const selfList = document.getElementById("selfList");
  const offset = selfList.getBoundingClientRect();
  const offsetTop = offset.top;
  const offsetBottom = offset.bottom;
  const offsetHeight = offset.height;
  // 进入可视区域
  if (offsetTop <= window.innerHeight && offsetBottom >= 0) {
    $("#selfList li").addClass("li-animate");
    $("#selfList li a").addClass("a-animate");
    $("#line .left .b1,#line .right .b1").addClass("before-animate");
    $("#line .left .b2,#line .right .b2").addClass("after-animate");

  } else {
    // do something...
  }
}
function scrollHandle2() {
  const selfList = document.getElementById("pictrue-3-box");
  const offset = selfList.getBoundingClientRect();
  const offsetTop = offset.top;
  const offsetBottom = offset.bottom;
  const offsetHeight = offset.height;
  // 进入可视区域
  if (offsetTop <= window.innerHeight && offsetBottom >= 0) {
    $("#pictrue-3-box div.p3list").addClass("pictrue-3-list");
    $('.pictrue-3-box').each(function(z){
      $('.pictrue-3-box').eq(z).find('.pictrue-3-list').each(function(i){
        $('.pictrue-3-box').eq(z).find('.pictrue-3-list').eq(i).css({"animation-delay":"0" + i/2 + "s","-webkit-animation-delay":"0" + i/2 + "s","-moz-animation-delay":"0" + i/2 + "s","-o-animation-delay":"0" + i/2 + "s"});
      })
    })
  } else {
    // do something...
  }
}
function scrollHandle3() {
  const selfList = document.getElementById("section4-list");
  const offset = selfList.getBoundingClientRect();
  const offsetTop = offset.top;
  const offsetBottom = offset.bottom;
  const offsetHeight = offset.height;
  // 进入可视区域
  if (offsetTop <= window.innerHeight && offsetBottom >= 0) {
    $("#section4-list div.p3list").addClass("pictrue-3-list");
    $('.pictrue-3-box').each(function(z){
      $('.pictrue-3-box').eq(z).find('.pictrue-3-list').each(function(i){
        $('.pictrue-3-box').eq(z).find('.pictrue-3-list').eq(i).css({"animation-delay":"0" + i/2 + "s","-webkit-animation-delay":"0" + i/2 + "s","-moz-animation-delay":"0" + i/2 + "s","-o-animation-delay":"0" + i/2 + "s"});
      })
    })
  } else {
    // do something...
  }
}
