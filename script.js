const prevButton = document.getElementById('prev'); 
const nextButton = document.getElementById('next'); 
const progress = document.getElementById('progress'); 
const circles = document.querySelectorAll('.circle'); 
const image = document.getElementById('img'); 
const desc = document.querySelector('.desc'); 
const arr = [...circles]
let counter = 1; 
let percentage = 25; 


const changeBackground = () =>{
    if(counter === 1){
    image.src = 'images/intention.png'; 
    desc.innerHTML = "intention" 
} else if(counter===2) {
    image.src = "images/face.png"; 
    desc.innerHTML = "wash the face"; 
} else if(counter === 3) {
    image.src = "images/arms.png"; 
    desc.innerHTML = "wash arms up to and including elbows"; 
} else if(counter === 4) {
    image.src = "images/head.png"; 
    desc.innerHTML = "wipe a portion of head"; 
} 

if(nextButton.disabled === true) {
    image.src = "images/feet.png"; 
    desc.innerHTML = "wash feet up to and including ankles"; 
} 
}
const listen = () => {
    progress.style.width = `${25*(counter-1)}%`;
    if(counter === 5){
        nextButton.disabled = true; 
    } else {
        nextButton.disabled = false; 
    }
    if(counter === 1){
        prevButton.disabled = true; 
    } else {
        prevButton.disabled = false; 
    }

    arr.forEach((circle) => {
        if(arr.indexOf(circle) < counter){
            circle.classList.add('active')
        } else {
            circle.classList.remove('active'); 
        }
    });
    changeBackground(); 
}


nextButton.addEventListener('click', () => {
    counter++; 
    if(counter > 5){
        counter = 5; 
    }
    console.log(counter);
    listen();
    
})

prevButton.addEventListener('click', () => {
    counter--; 
    if(counter < 1){
        counter = 1; 
    }
    listen();
    console.log(counter);
    
})

