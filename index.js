let passEl = document.getElementById("pass-el")
let passEl2 = document.getElementById("pass-el2")

let modeEl = document.getElementById("mode-el")
let test

let passWord = []
let passWord2 = []
let char
let mode = false
const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

console.log("id: ", test)

function modBtn()
{
    mode=!mode

    if(mode == false)
    {
        modeEl.textContent="Dark mode"
        test = document.getElementById('light-el').id = 'dark-el'
        console.log("id: ", test)

    }else if(mode== true)
    {
        test = document.getElementById('dark-el').id = 'light-el'
        modeEl.textContent="Light mode"
        console.log("id: ", test)
    }
}


function generate()
{
    for(let i = 0; i<15; i++)
    {
        let rand = Math.floor(Math.random() * characters.length) 
        char = characters[rand]
        passWord[i] = char
        passWord2[i] = char
    } 

    for(let f = 0; f<15; f++)
    {
        let rand = Math.floor(Math.random() * characters.length) 
        char = characters[rand]
        passWord2[f] = char
    } 

    passEl.textContent= passWord.join('')
    passEl2.textContent= passWord2.join('')
}
