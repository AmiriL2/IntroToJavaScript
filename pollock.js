let myCanvas = document.getElementById("myCanvas")

paper.setup(myCanvas)

function drawCircle (e) {
    console.log(e.x, e.y)
    
    if (isMouseDown) {

        let circle = new paper.Path.Circle({
            radius: Math.random() * 30,
            center: {
                x: e.x,
                y: e.y
            }
        })
    
         let red = Math.random() * 255
         let blue = Math.random() * 255
         let green = Math.random() * 255
    
        circle.fillColor = "rgb(" + red + "," + green + "," + blue + ")"
    }
}

myCanvas.addEventListener("mousemove", drawCircle)

let isMouseDown = false 

function mouseUp() {
    isMouseDown = false
}

function mouseDown() {
    isMouseDown = true
}

myCanvas.addEventListener("mousedown", mouseDown)
myCanvas.addEventListener("mouseup", mouseUp)

