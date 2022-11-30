let droparea = document.getElementById("dropbox");
var form = document.getElementById("form");
const fileinput = document.getElementById("fileInput");
const uploadbtn = document.getElementById("upload_btn");
const host="http://localhost:5500"
const uploadURL=`${host}/api/file_sharing/test`
const FILE = document.getElementById("fileinput");
const UPLOAD = document.getElementById("button");
const SUBMIT = document.getElementById("submitfile");
function closeNav() {
  document.getElementById("sidebar").style.width = "0";
}
function openNav() {
  document.getElementById("sidebar").style.transition = "0.5s";
  document.getElementById("sidebar").style.visibility = "visible";
  document.getElementById("sidebar").style.width = "20%";
}
droparea.addEventListener("dragover", (e) => {
  e.preventDefault();
  droparea.classList.add("dragged");
  droparea.style.backgroundColor = "rgb(160, 254, 215)";
  console.log("dragging");
});
droparea.addEventListener("dragleave", (e) => {
  droparea.classList.remove("dragged");
  droparea.style.backgroundColor = "white";
});
droparea.addEventListener("drop", (e) => {
  e.preventDefault();
  droparea.classList.remove("dragged");
  droparea.style.backgroundColor = "white";
  const files = e.dataTransfer.files;
  console.log(files);
  if (files.length) {
    fileinput.files = files;
    uploadfiles();
  }
});

fileinput.addEventListener("change", () => {
  uploadfiles();
});
document.getElementById("button").addEventListener("click", (e) => {
  fileinput.click();
});
function uploadfiles() {
  const file = fileinput.files[0];
  var formData = new FormData(droparea);
  formData.append("myfile", file);
  // console.log(formData);
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = (e) => {
    if (xhr.readyState === xhr.DONE  && xhr.status==200) {
      console.log(xhr.readyState);
        }
  }
  // xhr.upload.onprogress = (e) => {
  //   const percent = Math.round((e.loaded / e.total) * 100);
  //   if (percent == 100) {
  //     const text = document.getElementById("message");
  //     text.innerHTML = "This link will expire in 24 hrs";
  //     text.style.color = "#18a292";
  //     text.style.fontSize = "1.5vw";
  //     text.style.fontFamily = "spartan,sans-serif";
  //     text.style.textAlign = "right";
  //     text.style.marginRight = "20%";
  //     const input = document.createElement("input");
  //     input.setAttribute("type", "text");
  //     document.body.appendChild(input);
  //     input.style.width = "600px";
  //     input.style.height = "40px";
  //     input.style.fontSize = "20px";
  //     input.style.border = "2px solid #18a292";
  //     input.style.borderRadius = "12px";
  //     input.style.paddingLeft = "10px";
  //     input.style.fontFamily = "spartan,sans-serif";
  //     input.style.marginBottom = "100%";
  //     input.style.borderBlockColor = "#18a292";
  //     var media = window.matchMedia("max-width:760px");
  //     if (media.matches) {
  //       input.style.width = "100%";
  //     }
  //     }
  // };
  xhr.open('POST', uploadURL);
  xhr.setRequestHeader("Content-type", "application-json");
  xhr.setRequestHeader("Access-Control-Allow-Headers", "*");
  xhr.send(formData);
  }