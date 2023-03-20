const btnEnter = document.querySelector("#btn-enter");
const slider = document.querySelectorAll('.slider')
const on = document.getElementById('on')
let currentSlide = 0;
let nomes = ["maria", "jose", "joao"]
let item = document.querySelector("#item1")


function hideSlider(){
    slider.forEach(item => item.classList.remove('on'))
}

function showSlider(){
    slider[currentSlide].classList.add('on')
}


function nextSlider(){
    hideSlider()
    if(currentSlide == slider.length-1){
        currentSlide=0;

    }else{
        currentSlide++
    }
    showSlider()
}



function prevSlider(){
    hideSlider()
    if(currentSlide==0){
        currentSlide=slider.length-1
    }else{
        currentSlide--
    }
}

function avaliarQuestion() {
var valid = false;

 if(item.checked){
    valid=true;
    nextSlider()
 }else{
    alert('você infelizmente errou :(')
 }


}
btnEnter.addEventListener("click", avaliarQuestion)

