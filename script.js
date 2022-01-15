const imgs = document.querySelectorAll('.slider-line img')
let img1 = document.querySelector('img:first-child')
const slider = document.querySelector('.slider')
const sliderLine = document.querySelector('.slider-line') 

const leftBtn = document.querySelector('.left-btn')
const rightBtn = document.querySelector('.right-btn')

let forImgs = img1.offsetHeight/img1.offsetWidth
let count = 0




function init (){
    imgs.forEach(item =>{
        item.style.width = slider.offsetWidth + 'px'
    })
    slider.style.height = img1.offsetHeight + 'px'
}


rightBtn.addEventListener('click', function (){
    count--

    if(count < -2){
        count = 0
    }

    sliderLine.style.transform = 'translate(' + count*slider.offsetWidth + 'px)'
})

leftBtn.addEventListener('click', function (){
    count++

    if(count > 0){
        count = -2
    }

    sliderLine.style.transform = 'translate(' + count*slider.offsetWidth + 'px)'
})

init()
window.addEventListener('resize', init)

