function readMore(el, id, btn){
var dots = document.getElementById(el);
var moreText = document.getElementById(id);
var btnText = document.getElementById(btn);

  if (dots.style.display === "none") {
  dots.style.display = "inline";
  btnText.innerHTML = "Read More";
  moreText.style.display = "none";
} else {
  dots.style.display = "none";
  btnText.innerHTML = "Read Less";
  moreText.style.display = "inline";
}
}
