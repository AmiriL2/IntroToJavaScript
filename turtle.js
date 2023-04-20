let aquarium = document.getElementById ("aquarium")

let turtle = new RealTurtle.default(aquarium,{autoStart:true})

turtle.setSpeed(0.9)

turtle.setPosition(100, 150)
turtle.setFillStyle('maroon')
turtle.beginPath()
turtle.right(90)
turtle.forward(120)
turtle.left(90)
turtle.forward(120)
turtle.left(90)
turtle.forward(120)
turtle.left(90)
turtle.forward(120)
turtle.closePath()
turtle.fill()


turtle.setPosition(150,150)
turtle.setFillStyle('brown')
turtle.beginPath()
turtle.right(180)
turtle.forward(50)
turtle.right(90)
turtle.forward(20)
turtle.right(90)
turtle.forward(50)
turtle.setStrokeColorRGB(0,0,0)
turtle.closePath()
turtle.fill()


turtle.setPosition(200,50)
turtle.setFillStyle('white')
turtle.beginPath()
turtle.forward(25)
turtle.right(90)
turtle.forward(25)
turtle.right(90)
turtle.forward(25)
turtle.right(90)
turtle.forward(25)
turtle.right(90)
turtle.closePath()
turtle.fill()



turtle.setPosition(150,50)
turtle.setFillStyle('white')
turtle.beginPath()
turtle.forward(25)
turtle.right(90)
turtle.forward(25)
turtle.right(90)
turtle.forward(25)
turtle.right(90)
turtle.forward(25)
turtle.right(90)
turtle.closePath()
turtle.fill()




turtle.setPosition(100,30)
turtle.setFillStyle('black')
turtle.beginPath()
turtle.left(105)
turtle.forward(70)
turtle.right(35)
turtle.forward(60)
turtle.closePath()
turtle.fill()










