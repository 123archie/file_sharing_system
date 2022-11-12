// var require=require("./routes/files");
let droparea = document.getElementById("dropbox");
const fileinput = document.getElementById("fileInput");
const uploadbtn = document.getElementById("upload_btn");
const host='https://medias-share.herokuapp.com/'
// const host = `innshare.herokuapp.com`;
// const uploadURL = `${host}/api/file_sharing`;
const uploadURL=`https://123archie.github.io/File-Sharing-System/upload.html`
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
  xhr.upload.onprogress=(e)=>{
    const percent=Math.round((e.loaded/e.total)*100);
    console.log(percent);
    if(percent==100){
      const text=document.getElementById("message");
      text.innerHTML="This link will expire in 24 hrs"
      text.style.color="#18a292"
      text.style.fontSize="1.5vw"
      text.style.fontFamily="spartan,sans-serif"
      text.style.textAlign="right"
      text.style.marginRight="20%"
    

      const input =document.createElement("input")
          input.setAttribute("type", "text");
          document.body.appendChild(input);
          input.style.width="600px"
          input.style.height="40px"
          input.style.fontSize="20px"
          input.style.border="2px solid #18a292"
          input.style.borderRadius="12px"
          input.style.paddingLeft="10px"
          input.style.fontFamily="spartan,sans-serif"
          input.style.marginBottom="100%"
          input.style.borderBlockColor="#18a292"
          // input.style.
          var media=window.matchMedia("max-width:760px");
          if(media.matches){
            
            input.style.width="100%"
                   }
          // input.value=scope.displayDetails;
          // console.log(scope.cachedOptions);
          }  

    console.log(e);
  };
  xhr.open('POST', uploadURL);
//   xhr.setRequestHeader("Access-Control-Request-Method", "POST");
//  xhr.setRequestHeader("Access-Control-Request-Method", "POST");
 xhr.setRequestHeader("Access-Control-Allow-Origin", "POST");
 xhr.send(formData)
};

