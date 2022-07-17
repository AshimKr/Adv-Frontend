const greet = document.getElementById('greet');
const quote = document.getElementById('quote');
const author = document.getElementById('author');


const color = ['#0288D1','#AFB42B','#4CAF50','#FF5722','#8BC34A','#757575','#388E3C','#448AFF'];
let i = 0;
const getQuote = async () =>{
    const hour = new Date().getHours();
    
    if(hour >= 6 && hour < 12){
        greet.innerHTML = 'morning'
    }else if(hour >= 12 && hour < 16){
        greet.innerHTML = 'afternoon' ;  
    }else if(hour >= 16 && hour < 19){
        greet.innerHTML = 'evening'   
    }else if(hour >= 19 && hour < 6){
        greet.innerHTML = 'night'   
    }
    
    const data = await fetch('https://type.fit/api/quotes');
    const res = await data.json();
    const id = Math.floor(Math.random()*100)
    quote.innerHTML = res[id].text;
    author.innerHTML = `- ${res[id].author}`;

    if(i==7){
        i=0;
        console.log('running');
    }else{
        document.body.style.backgroundColor = color[i];
        quote.style.color = color[i];
        i++;
    }
    

}

getQuote()