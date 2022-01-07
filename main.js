leftwrist=0;
rightwrist=0;
difference=0;
nosex= 0;
nosey= 0;
function setup() {
    video = createCapture(VIDEO);
    video.size(500,500);
    canvas = createCanvas(500,500) ;
modelattacher = ml5.poseNet(video , modelLoaded);

modelattacher.on("pose", gotPoses)
}
function modelLoaded() {
    console.log("model is loaded mam/sir");
}
function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        leftwrist = results[0].pose.leftWrist.x;
        rightwrist = results[0].pose.rightWrist.x;
        nosex= results[0].pose.nose.x;
        nosey = results[0].pose.nose.y;
difference = Math.floor(leftwrist-rightwrist);

    }
}
function draw() {
 background("white");
 fill("red");
 textSize(difference);
 text("ayush is best",nosex,nosey);

}