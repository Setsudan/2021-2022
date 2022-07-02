let txtCounter = document.getElementById("counter");
let submitValue = document.getElementById("submittedValue").value;
counter = 0;
const decrease = () => {
  counter--;
  txtCounter.textContent = `${counter}`;
};
const reset = () => {
  counter = 0;
  txtCounter.textContent = `${counter}`;
};
function increase() {
  counter++;
  txtCounter.textContent = `${counter}`;
}
function submit() {
  counter = submitValue;
  txtCounter.textContent = `${counter}`;
}
