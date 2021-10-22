/**
 * OUVERTURE DE BOX après click.
 * @param {MouseEvent/Keyboard} e
 */
/** 
const box1 = document.getElementById('box1');
    console.log(box1);
    box1.addEventListener('click', (e) => {
    console.log(boxes);
    box1.classList = 'flip';
})*/

const boxes = document.getElementsByClassName("box");

for (const box of boxes) {
  box.addEventListener("click", (e) => {
    box.classList.add("flip");
  });
}
