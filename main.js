

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();

    
}
function draw() {
    image(video, 0, 0, 600, 500);

    fill("#FF0000");
    stroke("#FF0000")
    circle(580, 480 , 40)
    circle(20, 20 , 40)
    circle(580, 20 , 40)
    circle(20, 480 , 40)
    fill("#00ff00")
    stroke("#0000ff")
    rect(40 ,10 ,520,20 )
    rect(40 ,470 ,520,20 )
    rect(10 ,40 ,20,420 )
    rect(570 ,40 ,20,420 )

}

