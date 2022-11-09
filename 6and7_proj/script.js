// One liner function:
const addCSS = css => document.head.appendChild(document.createElement("style")).innerHTML=css;

const imageChange = document.getElementById('change')
const leftImage = document.getElementById('left')
const rightImage = document.getElementById('right')
const image =document.getElementsByClassName('image1')

leftImage.addEventListener('click', ()=> {
    // imageChange.classList.remove('image1')
    // Usage: 
    // addCSS(".image1{visibility:hidden;}")
    // addCSS("#change{background:green}")
    image.classList.add('appear')
})
rightImage.addEventListener('click', ()=> {
    // imageChange.classList.remove('image1')
    // Usage: 
    addCSS(".image1{visibility:visible;}")
    // addCSS(".image1{background-image: url(./img/5.jpg);}")
})




