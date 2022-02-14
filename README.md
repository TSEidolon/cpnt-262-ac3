# CPNT-262 Achievement 3 
## Press of a Button
### By: Edgar Caballero

## Code Journal:
Troubleshooting:
 1. Added a "Click Counter" by using code from <a href ="https://stackoverflow.com/questions/22402777/html-javascript-button-click-counter" target="_blank">stack overflow </a> as a reference, but everytime the button is clicked the number does not go up even with the "x += 1" command
    - realized that `clickNumber` resets to 0 because `clickNumber = 0` is inside the function. Transfered it outside
    - Fixed:

```
    let clickNumber = 0;
  const clickCounter = function () {
    clickNumber += Number(1);
    const clickNumberTotal = `${clickNumber} of clicks!`
    console.log (`${clickNumber} of clicks!`);
    output.textContent = clickNumberTotal;
```

 2. I wanted the background color to change everytime the "click me!" button was clicked:
  - Used <a href="https://bobbyhadz.com/blog/javascript-change-button-color-onclick" target="_blank">"Change a Button's color onClick (every time) using JS" by Borislav Hadzhiev</a> as a reference:
   - rewrote the ternary operator "`? :`" to an if/else statement to better understand what was happening

Code from <a href="https://bobbyhadz.com/blog/javascript-change-button-color-onclick" target="_blank">"Change a Button's color onClick (every time) using JS" by Borislav Hadzhiev</a>
```
let index = 0;
const colors = ['salmon', 'green', 'blue', 'purple'];
btn.addEventListener('click', function onClick() {
  btn.style.backgroundColor = colors[index];
  btn.style.color = 'white';
  index = index >= colors.length - 1 ? 0 : index + 1;
});
```
<strong> Rewritten Code to: </strong>
```
let index = 0;
const colorList = ['#ff0a54','#ff477e','#ff85a1','#fbb1bd','#f7cad0'];
const colorChanger = function () {
  document.body.style.backgroundColor = colorList[index];
  if (index >= colorList.length - 1){
    index = 0
  } else {
    index += 1;
  }
}
button.addEventListener ('click', colorChanger)
```
