function changeCSS(cssFile) {
var oldlink = document.getElementsByTagName("link").item(0);
var newlink = document.createElement("link");
newlink.setAttribute("rel", "stylesheet");
newlink.setAttribute("type", "text/css");
newlink.setAttribute("href", cssFile);
document.getElementsByTagName("head").item(0).replaceChild(newlink, oldlink);
localStorage.setItem("css", cssFile);
}
var cssFile = localStorage.getItem("css");
if (cssFile == null) {
  changeCSS("style2.css")
}