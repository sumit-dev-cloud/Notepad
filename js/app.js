function changeFont(font) {
  document.getElementById("content").style.fontFamily = font.value;
}
function changeSize(n) {
  var s = document.getElementById("content");
  s.style.fontSize = n.value + "px";
}
function changeColor(c) {
  var s = document.getElementById("content");
  s.style.color = c.value;
}
function changeBack(d) {
  var s = document.getElementById("content");
  s.style.backgroundColor = d.value;
}
function bold() {
  var x = document.getElementById("content").style.fontWeight;
  if (x == "" || x == "normal") {
    document.getElementById("content").style.fontWeight = "bold";
  } else {
    document.getElementById("content").style.fontWeight = "normal";
  }
}
function itali() {
  var x = document.getElementById("content").style.fontStyle;
  if (x == "" || x == "normal") {
    document.getElementById("content").style.fontStyle = "italic";
  } else {
    document.getElementById("content").style.fontStyle = "normal";
  }
}
function under() {
  var x = document.getElementById("content").style.textDecoration;
  if (x == "" || x == "none") {
    document.getElementById("content").style.textDecoration = "underline";
  } else {
    document.getElementById("content").style.textDecoration = "none";
  }
}
function normal_click() {
  document.getElementById("content").style.fontStyle = "normal";
  document.getElementById("content").style.textDecoration = "none";
  document.getElementById("content").style.fontWeight = "normal";
  document.getElementById("content").style.backgroundColor = "white";
  document.getElementById("content").style.color = "black";
  document.getElementById("content").style.fontFamily = "Arial";
  document.getElementById("content").style.fontSize = 14 + "px";
  document.getElementById("content").value = "";
}
