const left = document.querySelector('.left');
const right = document.querySelector('.right');
const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.image');

let sliderNumber = 1;
const length =images.length;



// for start for dot

const bottom=document.querySelector('.bottom');

for(let i=0; i<length;i++)
{
    const div =document.createElement('div');
    div.className = 'button';
    bottom.appendChild(div);
};
const buttons = document.querySelectorAll('.button');
buttons[0].style.backgroundColor ='white';

const resetBg = ()=>{
    buttons.forEach((button) =>{
        button.style.backgroundColor='transparent';

        button.addEventListener('mouseover',stopSliderShow);
        button.addEventListener('mouseout',startSliderShow);
       
      
    });
};

buttons.forEach((button,  i)=>{
 button.addEventListener('click',() =>{
    resetBg()
    slider.style.transform = `translateX(-${i*269}px)`;
    sliderNumber = i+1;
    button.style.backgroundColor='white';
 });
});



const changeColor = ()=>{
  
    resetBg();
    buttons[sliderNumber-1].style.backgroundColor='white';
};



// end dots




const nextSlide = () =>{
    slider.style.transform=`translateX(-${sliderNumber*269}px)`;
   sliderNumber++;
};
const prevSlide = () =>{
    slider.style.transform=`translateX(-${(sliderNumber-2)*269}px)`;
   sliderNumber--;
};
const getFirstSlide = () =>{
    slider.style.transform= `translateX(0px)`;
    sliderNumber = 1;

};

const getLastSlide = () =>{
    slider.style.transform= `translateX(-${(length -1)*269}px)`;
    sliderNumber = length;

};
right.addEventListener('click',()=>{
    sliderNumber< length ?  nextSlide() :  getFirstSlide();
    changeColor();
});

left.addEventListener('click',()=>{
    sliderNumber>1 ?  prevSlide() : getLastSlide();
    changeColor();
});



// Start Auto Slider
 let slideInterval;


 const startSliderShow = () =>{
    slideInterval = setInterval(()=>{
        sliderNumber< length ?  nextSlide() :  getFirstSlide();
        changeColor();
    } ,2000);
 };
 const stopSliderShow=()=>{
    clearInterval(slideInterval);
 };

 startSliderShow();

 slider.addEventListener('mouseover',stopSliderShow);
 slider.addEventListener('mouseout',startSliderShow);

 right.addEventListener('mouseover',stopSliderShow);
 right.addEventListener('mouseout',startSliderShow);

 left.addEventListener('mouseover',stopSliderShow);
 left.addEventListener('mouseout',startSliderShow);




