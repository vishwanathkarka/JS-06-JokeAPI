const synth = window.speechSynthesis;
let joke = document.getElementById("joke")
let button = document.getElementById("jokeButton")
button.addEventListener("click",sayMeJoke)

async function  sayMeJoke(){
    try{
    const option = {
        method:'GET',
        headers:{
            'Content-Type': 'application/json',
          
            },
            
    }
    
    let res = await fetch ('https://api.chucknorris.io/jokes/random',option)
     let valueRes =  await res.json()
     let finalOutput =  valueRes.value
     joke.textContent = finalOutput
}
catch(error) {
    console.log(error);
}

}
