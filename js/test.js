let slides = [1, 2, 3];
function autoPlay() {
  let j = 0;
  let timeId = setInterval(() => {

    if (j === slides.length-1) {
      clearInterval(timeId);
    }
    j++;
  }, 1000);

}

autoPlay();
