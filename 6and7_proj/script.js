// One liner function:
const addCSS = css => document.head.appendChild(document.createElement("style")).innerHTML=css;

const imageChange = document.getElementById('change')
const leftImage = document.getElementById('left')
const rightImage = document.getElementById('right')
const image =document.getElementsByClassName('image1')
var click = false;

leftImage.addEventListener('click', ()=> {
    // imageChange.classList.remove('image1')
    // Usage: 
    addCSS(".image1{display:none;}")
    // addCSS("#change{background:green}")
    change();
    click = true;
    clicked(click);
    // leftImage.addEventListener('click', ()=> {
    //     addCSS("#change{background:green}")
    // }
    // pic.classList.add('appear')
    
})
rightImage.addEventListener('click', ()=> {
    // imageChange.classList.remove('image1')
    // Usage: 
    // addCSS(".image1{visibility:visible;}")
    // addCSS(".image1{background-image: url(./img/5.jpg);}")
})

function change() {
    var pic = document.createElement("img");
    // pic.setAttribute("src", "css/img/3.jpg");
    pic.src ='css/img/3.jpg';
    document.getElementById("new").appendChild(pic);
    pic.classList.add('appear');
}

function clicked(value){
    if (value == true) {
        // alert('Picture was clicked')
        leftImage.addEventListener('click', ()=> {
            addCSS("#change{background:green}")
        })
    }
}





