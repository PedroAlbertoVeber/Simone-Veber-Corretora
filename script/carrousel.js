let currentSlideIndex = 0;


function nextSlide(className) {
    const slideList = document.querySelectorAll(`.${className}`);

    if (currentSlideIndex === (slideList.length - 1)) {
        currentSlideIndex = 0;
    } else {
        currentSlideIndex++;
    };

    slideList.forEach( slide => 
        slide.classList.add('carrousel-none'))
    slideList[currentSlideIndex].classList.remove('carrousel-none');
    };

const nextButton = document.querySelector("#botao-avancar");

function returnSlide(className) {
    const slideList = document.querySelectorAll(`.${className}`);

    if (currentSlideIndex === 0) {
        currentSlideIndex = (slideList.length - 1) 
    } else {
        currentSlideIndex--;
    };
    
    slideList.forEach( slide => 
        slide.classList.add('carrousel-none'));
    slideList[currentSlideIndex].classList.remove('carrousel-none');
};

