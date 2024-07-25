function alphabet(start, end) {
    let addLetter = ''
    for (let i = start; i <= end; i++) {
        const a = String.fromCharCode(i)
        addLetter += a


    }
    return addLetter

}
const capitalLetter = alphabet(65, 90)
const lowLetter = alphabet(97, 122)
const numLetter = alphabet(48, 57)
const characters = capitalLetter + lowLetter + numLetter




function generate() {
    let captcha = ''
    for (let i = 0; i <= 5; i++) {
        const randomNum = Math.floor(Math.random() * characters.length)
        captcha += characters[randomNum]


    }
    document.getElementById("non-input").value = captcha
    document.querySelector(".our-input").value = ''
    document.querySelector(".result").innerText = ''





}
var nonInput = document.getElementById("non-input")
var ourInput = document.querySelector(".our-input")
var resultOutput = document.querySelector(".result")

function submit() {


    if (nonInput.value === ourInput.value) {
        resultOutput.innerText = "Your Entered Captcha is correct "
        resultOutput.style.color = 'green';
        alert("Your Entered Captcha is correct ")


    }
    else{
        
    

           
        resultOutput.innerText = "Your Entered Captcha is incorrect"
        resultOutput.style.color = 'red';
        alert("Your Entered Captcha is incorrect")
        


    }
}
window.onload = generate;





