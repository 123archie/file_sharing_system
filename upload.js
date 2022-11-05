let droparea = document.getElementById("dropbox");
const fileinput = document.getElementById("fileInput");
const uploadbtn = document.getElementById("upload_btn");
const host='https://medias-share.herokuapp.com/'
// const host = `innshare.herokuapp.com`;
const uploadURL = `${host}/api/file_sharing`;
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
  droparea.classList.add("dragged")
  droparea.style.backgroundColor = "rgb(160, 254, 215)";
  console.log("dragging");
});
droparea.addEventListener("dragleave", function (e) {
  droparea.classList.remove("dragged")
  droparea.style.backgroundColor = "white";
});
droparea.addEventListener("drop", function (e) {
  e.preventDefault();
  droparea.classList.remove("dragged")
  droparea.style.backgroundColor = "white";
  const files = e.dataTransfer.files;
  if (files.length) {
    fileinput.files = files;
    uploadfiles();
  }
});
//Upload button functionality
// function upload() {
//   // console.log("upload");
//   fileinput.click();
//   // const file=FILE.files[0];
//   const formData = document.getElementById("form");
//   const files = new FormData(formData);
//   // files.append('myfile', file);
//   console.log("FormData: " + files);
//   if (files) {
//     const xhr = new XMLHttpRequest();
//     xhr.onreadystatechange = () => {
//       console.log("XHR: " + xhr.readyState);
//     };
//     xhr.open("POST", uploadURL);
//     xhr.send(files);
//   }
// }


// console.log(UPLOAD);
//   UPLOAD.addEventListener('change',(e)=>{
//     e.preventDefault();
//     console.log("upload event");
//     var el=window._protected_reference=document.createElement('INPUT')
//     console.log(el);
//     el.type="file"
//     el.addEventListener('change', ()=>{
//       if(el.files.length){
//         fileinput.files=el.files;
//         uploadfiles()
//       }
//       new Promise(function(resolve){
//         setTimeout(function(){
//           console.log(el.files);
//           resolve;
//         }, 1000)
//       }
//     ).then(function(){
//       el=window._protected_reference=undefined;
// })
// })
// el.click()});
fileinput.addEventListener('change', ()=>{
  uploadfiles();
})
document.getElementById("button").addEventListener('click', (e)=>{
  fileinput.click();
})

function uploadfiles() {
  const file = fileinput.files[0];
  const formData = new FormData();
  formData.append("myfile", file);
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      console.log(xhr.responseText);
    }
  };
  xhr.upload.onprogress=uploadProgress;
  xhr.open("POST", uploadURL);
  xhr.send(formData);
};
const uploadProgress=(e)=>{
  console.log(e);
}
