window.onload = function () {
    var loaderDelay = 3;
    setTimeout(loaderPhaseOut, loaderDelay * 1000);

};


/* -- Preloader-- */
function loaderPhaseOut(){
    window.scrollTo(0, 0);
    document.getElementById("loader").style.visibility = "collapse";
    document.getElementById("preloader").style.visibility = "collapse";
    document.getElementById("preloader").style.opacity = 0;
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
	},index * 200);
});


/* -- Glow effect -- */
const blob = document.getElementById("blob");

window.onpointermove = event => { 
  const { clientX, clientY } = event;
  blob.animate({
    left: `${clientX}px`,
    top: `${clientY}px`
  }, { duration: 18000, fill: "forwards" });
}

/* -- Effect on Experience Events activating on sight-- */
document.addEventListener("DOMContentLoaded", () => {
  const events = document.querySelectorAll(".event");
  const isPhone = window.innerWidth <= 600; 
  const threshold = isPhone ? 0.5 : 0.8;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      } else {
        entry.target.classList.remove("active");
      }
    });
  }, {
    threshold: threshold,
    rootMargin: '-15% 0px -28% 0px'
  });
  
  events.forEach((event) => {
    observer.observe(event);
  });
});


/* -- Effect on activating on NAV titles-- */
  document.addEventListener("DOMContentLoaded", function() {
    // Select all sections with an ID that match nav links
    const sections = document.querySelectorAll("div[id]");
    const navLinks = document.querySelectorAll(".nav-link");

    // Function to remove the active class from all nav links
    function removeActiveClasses() {
      navLinks.forEach(link => link.classList.remove("active"));
    }

    // Function to add the active class to the nav link matching the current section
    function addActiveClass(id) {
      const targetLink = document.querySelector(`.nav-link[href="#${id}"]`);
      if (targetLink) {
        targetLink.classList.add("active");
      }
    }

    // Create an Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            removeActiveClasses();
            addActiveClass(id);
          }
        });
      },
      { threshold: 0.7 } // Trigger when 70% of the section is in view
    );

    // Observe each section
    sections.forEach((section) => {
      observer.observe(section);
    });
  });





/* -- Effect on Mini Projects Hover-- */
$(document).ready(function () {
  const cardWraps = $('.card-wrap');

  cardWraps.each(function() {
      const card = $(this).find('.card');
      const borderWrap = $(this).find('.border-wrap');
      let cardBounds = null;

      $(this).on('mouseenter', function() {
          cardBounds = this.getBoundingClientRect();
          $(document).on('mousemove', rotateToMouse);
      });

      $(this).on('mouseleave', function() {
          $(document).off('mousemove', rotateToMouse);
          card.css('transform', '');
          borderWrap.css('background-image', '');
      });

      function rotateToMouse(e) {
          if (!cardBounds) return;

          const mouseX = e.clientX;
          const mouseY = e.clientY;
          const leftX = mouseX - cardBounds.left;
          const topY = mouseY - cardBounds.top;
          const center = {
              x: leftX - cardBounds.width / 2,
              y: topY - cardBounds.height / 2,
          };
          const distance = Math.sqrt(center.x ** 2 + center.y ** 2);

          card.css('transform', `
              scale3d(1.0, 1.0, 1.0)
              perspective(800px)
              rotate3d(
                  ${-center.y / 100},
                  ${center.x / 100},
                  0,
                  ${Math.log(distance) * 0.8}deg
              )
          `);

          borderWrap.css('background-image', `
              radial-gradient(
                  circle at
                  ${center.x * 2 + cardBounds.width / 2 - 30}px
                  ${center.y * 2 + cardBounds.height / 2 - 30}px,
                  #ffffff3e,
                  #0000000f
              )
          `);
      }
  });
});



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



