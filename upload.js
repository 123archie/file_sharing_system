let droparea=document.getElementById('dropbox');
const fileinput=document.getElementById('fileInput');
const uploadbtn=document.getElementById('upload_btn')
// const host='https://medias-share.herokuapp.com/'
const host=`http://localhost:5500`
const FILE=document.getElementById('fileinput')
const UPLOAD=document.getElementById('button')
const SUBMIT=document.getElementById('submitfile')
const uploadURL=`${host}/api/file_sharing/test`
function closeNav() {
  document.getElementById("sidebar").style.width = "0";
}
function openNav() {
  document.getElementById("sidebar").style.transition="0.5s"
  document.getElementById("sidebar").style.visibility="visible"
  document.getElementById("sidebar").style.width = "20%";
}
droparea.addEventListener("dragover", (e)=>{
  e.preventDefault();
  droparea.style.backgroundColor="rgb(160, 254, 215)"
  console.log("dragging")
});
droparea.addEventListener("dragleave",function(e){
  droparea.style.backgroundColor="white"
});
droparea.addEventListener("drop", function(e){
  e.preventDefault();
  droparea.style.backgroundColor="white"
  const files=e.dataTransfer.files;
 if(files.length){
  console.log("File Length: "+files.length);
  console.log("File: " +files);
  fileinput.files=files;
   uploadfiles()
   
}});

function upload(){
  FILE.click();
  UPLOAD.addEventListener(onchange, ()=>{
    var el=window._protected_reference=document.createElement('INPUT')
    el.type="file"
    el.addEventListener('change', ()=>{
      if(el.files.length){
        fileinput.files=el.files;
        uploadfiles()
      }
      new Promise(function(resolve){
        setTimeout(function(){
          console.log(el.files);
          resolve;
        }, 1000)
      }
    ).then(function(){
      el=window._protected_reference=undefined;
})
})
el.click()});}

function uploadfiles(){
  const file=fileinput.files[0];
  const formData=new FormData();
  formData.append('myfile', file)
  const xhr=new XMLHttpRequest();
  xhr.onreadystatechange=()=>{
    console.log(xhr.readyState);
      }
  xhr.open('POST', uploadURL)
  xhr.send(formData);
}

