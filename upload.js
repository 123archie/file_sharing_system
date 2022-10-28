let droparea=document.getElementById("dropbox");
const fileinput=document.getElementById("fileInput");
// const host='https://medias-share.herokuapp.com/'
const host=`http://localhost:5500`
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
  console.log(files.length);
  console.log(files);
  fileinput.files;
   uploadfiles()
}});

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

