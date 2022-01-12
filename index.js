const imgs = document.querySelectorAll('.slider-line img')
let img1 = document.querySelector('img:first-child')
const slider = document.querySelector('.slider')
const sliderLine = document.querySelector('.slider-line') 
let forImgs = img1.offsetWidth/img1.offsetHeight
let count = 0


function start (){

    sliderLine.style.width = slider.offsetWidth*imgs.length + 'px'

    imgs.forEach(item =>{
        item.style.width = slider.offsetWidth + 'px'
        item.style.height = slider.offsetWidth/forImgs + 'px'
    })
}


setInterval(function(){
    count++
    sliderLine.style.transition = 'all 3s ease-in-out'

    if (count > imgs.length-1){
        count = 0
        sliderLine.style.transition = 'all 1s ease-in-out'
    }

    sliderLine.style.transform = 'translate(-' + slider.offsetWidth*count + 'px)'
    console.log('slider.offsetWidth: ' + slider.offsetWidth)
    console.log('slider.offsetWidth*count: ' + slider.offsetWidth*count)

}, 5000)


start()
window.addEventListener('resize', start)
