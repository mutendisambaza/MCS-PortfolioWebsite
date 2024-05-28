
//Delayed Foreword
window.onload = function () {
    var loaderDelay = 3;
    setTimeout(loaderPhaseOut, loaderDelay * 1000);
    var preloaderDelay = 3.4;
    setTimeout(preloaderPhaseOut, preloaderDelay * 1000);


};


// function showText() {
//     document.getElementById("delayedForeword").style.visibility = "visible";
// }

//Infinite Scrolling Tech Stack
const scrollers = document.querySelectorAll(".scroller");
// If a user hasn't opted in for recuded motion, then we add the animation
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}
function addAnimation() {
  scrollers.forEach((scroller) => {
    // add data-animated="true" to every `.scroller` on the page
    scroller.setAttribute("data-animated", true);

    // Make an array from the elements within `.scroller-inner`
    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    // For each item in the array, clone it
    // add aria-hidden to it
    // add it into the `.scroller-inner`
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}




function loaderPhaseOut(){
    document.getElementById("loader").style.visibility = "collapse";
}
function preloaderPhaseOut(){
  document.getElementById("preloader").style.visibility = "collapse";
}
const radials = [...document.querySelectorAll('.radial')];
let degrees = 0;
for(i=0; i < radials.length; i++) {
	degrees += 0;
	radials[i].style.transform = `rotate(${degrees}deg)`;
	degrees += 45;
}
radials.forEach((radial, index) => {
	setTimeout(function() {
		radial.classList.add('glow');
	},index * 350);
})

;

