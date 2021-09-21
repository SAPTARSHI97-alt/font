function setup() {
    video = createCapture(VIDEO);
    video.size(450, 400);

    canvas= createCanvas(450, 400);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    background('#00FF00');
}

function modelLoaded() {
    console.log('PoseNet Is Intitialized!');
}


function gotPoses() {
    
        if(results.length>0)
        {
            console.log(results);
        }
    }

