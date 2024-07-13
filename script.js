let uploadBtn = document.getElementById("inputImg")
let profileImg = document.getElementById("profileImg")

uploadBtn.addEventListener("input",()=>{
    profileImg.src = URL.createObjectURL(uploadBtn.files[0]);
})