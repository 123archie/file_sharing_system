let droparea = document.getElementById("dropbox");
var form = document.getElementById("form");
const fileinput = document.getElementById("fileInput");
const uploadbtn = document.getElementById("upload_btn");
// const axios = require("axios");
// const host='https://medias-share.herokuapp.com/'
// const host = `innshare.herokuapp.com`;
// const uploadURL = `${host}/api/file_sharing`;
const uploadURL = `http://localhost:5500/api/file_sharing/`;
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
  console.log(file);
  var formData = new FormData(droparea);
  console.log(...formData);
  formData.append("myfile", file);
  const xhr = new XMLHttpRequest(
  //   processData: true,
  //   contentType: true,
  // }
  );
  console.log(...formData);
  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status == 200) {
      console.log(xhr.responseText);
    }
  };
  xhr.upload.onprogress = (e) => {
    const percent = Math.round((e.loaded / e.total) * 100);
    console.log(percent);
    if (percent == 100) {
      const text = document.getElementById("message");
      text.innerHTML = "This link will expire in 24 hrs";
      text.style.color = "#18a292";
      text.style.fontSize = "1.5vw";
      text.style.fontFamily = "spartan,sans-serif";
      text.style.textAlign = "right";
      text.style.marginRight = "20%";

      const input = document.createElement("input");
      input.setAttribute("type", "text");
      document.body.appendChild(input);
      input.style.width = "600px";
      input.style.height = "40px";
      input.style.fontSize = "20px";
      input.style.border = "2px solid #18a292";
      input.style.borderRadius = "12px";
      input.style.paddingLeft = "10px";
      input.style.fontFamily = "spartan,sans-serif";
      input.style.marginBottom = "100%";
      input.style.borderBlockColor = "#18a292";
      // input.style.
      var media = window.matchMedia("max-width:760px");
      if (media.matches) {
        input.style.width = "100%";
      }
      // input.value=scope.displayDetails;
      // console.log(scope.cachedOptions);
    }

    console.log(e);
  };

  // console.log(axios.post(uploadURL))
  xhr.open("POST", uploadURL);
  //   xhr.setRequestHeader("Access-Control-Request-Method", "POST");
  //  xhr.setRequestHeader("Access-Control-Request-Method", "POST");
  xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
  //  xhr.withCredentials=true;
  console.log(...formData);
  xhr.send(...formData);
}
