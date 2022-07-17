const fileChoose = document.getElementById('chooseFile')
const preview = document.getElementById('preview')

console.log(fileChoose);
fileChoose.addEventListener('change',()=>{
    console.log('skkjskm');
})

// fileChoose.addEventListener('change',()=>{
//     const files = fileChoose.files[0];
//     if (files) {
//         const fileReader = new FileReader();
//         fileReader.readAsDataURL(files);
//         fileReader.addEventListener("load", function () {
//             preview.style.display = "block";
//             preview.innerHTML = '<img src="' + this.result + '" />';
//         });    
//   }
// })