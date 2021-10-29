/** 
*const boxes = document.getElementsByClassName("box");

for (const box of boxes) {
  box.addEventListener("click", (e) => {
    box.classList.add("flip");
  });
}*/

/**
 * let button = document.getElementById("plus");
let salle = document.getElementById("salle");

window.addEventListener("scroll", () => {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = window.scrollY;

  console.log(scrollable);
});
 */

/** 
$(function () {
  $("a[href*=#").on("click", function (e) {
    e.preventDefault();
    $("html, body").animate(
      { scrollTop: $($(this).attr("href")).offset().top },
      500,
      "linear"
    );
  });
});
*/
/**
var scroll = document.getElementById("salle");

scroll.scrollIntoView({
  behavior: "smooth",
  block: "start",
});
 */
