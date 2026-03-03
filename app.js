const slides = document.querySelectorAll(".slider")
var counter = 0;
slides.forEach(
    (slide,index) =>(
        slide.computedStyleMap.left=`${index * 100}%`
    )
)
const goPre=()=>{
    counter--;
    slideImage()
}

const goNext=()=>{
    counter++
    slideImage()
}
const slideImage =()=>{
    slides.forEach((slide)=>{
        slide.style.transform=`translateX(${counter*100}%)`
    }
)
   
}
