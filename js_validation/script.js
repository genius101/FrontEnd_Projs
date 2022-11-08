const signUp = document.getElementById('register')
const form = document.getElementById('sign')
var fullName = document.getElementById('name')
var email = document.getElementById('email')
var number = document.getElementById('number')
var username = document.getElementById('username')
var password = document.getElementById('password')





signUp.addEventListener('click', () => {
    form.classList.add('register')
    // prompt('Enter username')
})

function disappear() {
    form.classList.remove('register')
}

