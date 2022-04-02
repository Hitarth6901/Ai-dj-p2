gameon=""
believer=""

function preload(){
    gameon=loadsound("game on .mp3")
        believer=loadsound("believer.mp3")
    
}

function setup(){
    Canvas = createcanvas(600,500)
    Canvas.center()
    video= createCapture(VIDEO)
    video.hide()
}

function draw(){
    image(video,0,0,600,500)
}