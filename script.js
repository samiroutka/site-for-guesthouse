const images = document.querySelectorAll('.slider .slider-line img')
const image = document.querySelector('.slider-line img')
const sliderLine = document.querySelector('.slider-line')
let count = 0
let width

function init () {
    width = document.querySelector('.slider').offsetWidth
    
    sliderLine.style.width = width * images.length + 'px'
    images.forEach(item => {
        item.style.width = width + 'px'
        item.style.height = width*1,335616438356164 + 'px'
    })

    sliderLine.style.transform = 'translate(' + count*width + 'px)'
}

window.addEventListener('resize', init)
init()


document.querySelector('.left-btn').addEventListener('click', function(){
    count++

    if (count > 0) {
        count = -2
    }

    sliderLine.style.transform = 'translate(' + count*width + 'px)'
})

document.querySelector('.right-btn').addEventListener('click', function(){
    count--

    if (count < -2) {
        count = 0
    }

    sliderLine.style.transform = 'translate(' + count*width + 'px)'
})

