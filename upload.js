let droparea = document.getElementById("dropbox");
var form = document.getElementById("form");
const fileinput = document.getElementById("fileInput");
const uploadbtn = document.getElementById("upload_btn");
const host="http://localhost:5500"
const uploadURL=`${host}/api/file_sharing/test`
const FILE = document.getElementById("fileinput");
const UPLOAD = document.getElementById("button");
const SUBMIT = document.getElementById("submitfile");
const textvalue=document.querySelector("download");
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
  var file = fileinput.files[0];
  console.log(file);
  var formData=new FormData(droparea);
 
  console.log(formData.entries());
  formData.append('myfile', JSON.stringify(file[0]));
 
  console.log(formData.entries());
  const xhr = new XMLHttpRequest;
  xhr.onreadystatechange = (e) => {
    if (xhr.readyState === xhr.DONE  && xhr.status==200) {
      console.log(xhr.readyState);
        }
  }
  xhr.open('POST', uploadURL, true);
  xhr.setRequestHeader("Access-Control-Allow-Headers", "*");
  xhr.setRequestHeader("Access-Control-Allow-Methods", "*");
  console.log(formData.entries());
  xhr.send(formData);
};
const showLink=({file:url})=>{
  console.log(url);
  textvalue.value=url
}

