let seconds = 0
let milliseconds = 0
let minutes = 0

let startButton = document.getElementById("start-btn")

let digits = document.getElementById("digits")

let interval;

function start () {

    startButton.disabled = true

    interval = setInterval(function () {
        milliseconds = milliseconds + 10
        
        if(milliseconds >= 1000){
            seconds = seconds + 1
            milliseconds = 0
        }
         if (seconds >= 60){
            minutes = minutes + 1
            seconds = 0
         }
 
         digits.innerHTML = String(minutes).padStart(2, "0") + ":" + String(seconds).padStart(2, "0") + ":" + milliseconds/10

    }, 10)
}

function stop () {

    startButton.disabled = false
    digits.innerHTML = String(minutes).padStart(2,"0") + ":" + String(seconds).padStart(2, "0") + ":" + milliseconds/10

    clearInterval(interval)
}

function reset () {
    clearInterval(interval)
    milliseconds = 0
    seconds = 0
    minutes = 0
      digits.innerHTML = String(minutes).padStart(2,"0") + ":" + String(seconds).padStart(2, "0") + ":" + String(milliseconds).padStart(2, "0")
   

    const myList = document.getElementById("myList")
    myList.innerHTML = ""
    }

function lapse () {
    let MyList = document.getElementById("myList")

    let NewListItem = document.createElement('li')
    NewListItem.textContent = minutes + ":" + String(seconds).padStart(2, "0") + ":" + milliseconds/10
    MyList.appendChild(NewListItem)
}