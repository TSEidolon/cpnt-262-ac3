
// Assign a DOM element to a variable using const and document.querySelector.
  const button = document.querySelector ('.clickBtn');
  const output = document.querySelector ('.output');

// Add an Event Listener to this DOM variable using Element.addEventListener that logs DOM information to the Console.

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

let clickNumber = 0;
  const clickCounter = function () {
    clickNumber += Number(1);
    const clickNumberTotal = `${clickNumber} of clicks!`
    console.log (`${clickNumber} of clicks!`);
    output.textContent = clickNumberTotal;
  }

console.log (typeof(clickCounter));
console.log (typeof(button));

button.addEventListener("click", clickCounter);
button.addEventListener ('click', colorChanger)


// Bonus Points:
// Bonus point for doing one of the following:
//  not using a <button> as the DOM element;
//  not using click as the event trigger;
//  visibly changing the page in some way.

