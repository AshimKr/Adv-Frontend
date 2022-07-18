const fileChoose = document.getElementById('chooseFile')
const preview = document.getElementById('preview')

fileChoose.addEventListener('change',()=>{
    const files = fileChoose.files[0];
    if (files) {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(files);
        fileReader.addEventListener("load", function () {
            preview.style.display = "block";
            preview.innerHTML = '<img class="img-preview" src="' + this.result + '" />';
        });    
  }
})


// card generation code
const button = document.getElementsByClassName('btn')[0];

let studentName = document.getElementsByTagName('input')[0];
let studentCollege= document.getElementsByTagName('input')[1];
let studentLocation = document.getElementsByTagName('input')[2];

const cardName = document.getElementById('name');
const cardCollege = document.getElementById('clg');
const cardLocation = document.getElementById('location');
const cardImage = document.getElementById('cardImage');
    
button.addEventListener('click',()=>{
    cardName.innerHTML = studentName.value;
    cardCollege.innerHTML = studentCollege.value;
    cardLocation.innerHTML = studentLocation.value;

    cardImage.src=document.getElementsByClassName('img-preview')[0].src
    
    document.getElementById('MainCard').style.display='block';
    document.getElementById('msg').style.display='none';

})