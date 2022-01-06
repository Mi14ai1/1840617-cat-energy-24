var firstImage = document.querySelector(".slider__first-image");
var secondImage = document.querySelector(".slider__second-image");
var catRange = document.querySelector(".cat-range__range-container");
var rangeRect = catRange.getBoundingClientRect();
var rangeMark = document.querySelector(".cat-range__mark");
rangeMark.onmousedown = function (event) {
  var rangeMarkRect = rangeMark.getBoundingClientRect();
  var shiftX =event.pageX - rangeMarkRect.x;

  function onMouseMove (event) {
    event.preventDefault();
    var x = event.pageX - rangeRect.x - shiftX;
    if (x < 0) x = 0;
    if (x > catRange.clientWidth - rangeMark.offsetWidth)
        x = catRange.clientWidth - rangeMark.offsetWidth;
    rangeMark.style.left = x + "px";
    var percent = x*100/(catRange.clientWidth - rangeMark.offsetWidth);
    firstImage.style.width = percent +"%";
    var minorPercent = 100 - percent;
    secondImage.style.width = minorPercent + "%";
  }

  document.addEventListener("mousemove", onMouseMove);

  function onMouseUp () {
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseup", onMouseUp);
  }
  document.addEventListener("mouseup", onMouseUp);
}
