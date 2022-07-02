const body = document.body;
let color = ["red", "blue", "white", "black"];
let title = document.getElementById("title");

var i = 0;
const BgChanger = () => {
  if (i < color.length) {
    let bgColor = color[i];
    document.body.style.backgroundColor = bgColor;
    i = i + 1;
    let content = `Bg color is: ${bgColor}`;
    title.innerText = content;
  } else {
    i = 0;
    let bgColor = color[i];
    document.body.style.backgroundColor = bgColor;
    i = i + 1;
    let content = `Bg color is: ${bgColor}`;
    title.innerText = content;
  }
};
