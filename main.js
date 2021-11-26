function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 450);
    canvas.position(700, 100);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function draw() {
    background('#969A97');
}

function modelLoaded() {
    console.log("model is loaded");
}

function gotPoses(result) {
    if(result.length > 0) {
        console.log(result);
    }
}