let droparea=document.getElementById("dropbox");
function closeNav() {
  document.getElementById("sidebar").style.width = "0";
}
function openNav() {
//   document.getElementById("x").style.visiblity = "visible";
  document.getElementById("sidebar").style.width = "20%";
}
droparea.addEventListener("dragover", function(e){
 console.log("dragging");
});


