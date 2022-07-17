const timeDiv = document.getElementById('time');
const dateDiv = document.getElementById('date');

let currTime = null;

function timer(){
    currTime = setInterval(()=>{
        const time = `${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()}`;
        timeDiv.innerHTML = time;
    },1000);

};
timer();

const stopTimer = () =>{
    clearTimeout(currTime);
};

const startTimer = () =>{
    timer();
}




setInterval(()=>{
    dateDiv.innerHTML = `${new Date().getDate()}/${new Date().getMonth()+1}/${new Date().getFullYear()}`

},1000*60*60*24);