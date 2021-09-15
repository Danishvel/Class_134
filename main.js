img = "";
Status = " ";
object = [];
alarm = "";

function preload(){
    

}
function setup() {
    Canvas = createCanvas(640, 420);
    Canvas.center();

    webcam = createCapture(VIDEO);
    webcam.hide();

    Coco = ml5.objectDetector('cocossd', modelloaded);
}
function draw() {
    image(webcam, 0, 0, 640, 420);
    if (object != "Person") {
        document.getElementById("status").innerHTML = "Status : Baby Not Found";
        Song.setVolume(0.7);
        Song.Rate(1);
        alarm.play();
       }
    if (Status != "") {
        Coco.detect(webcam, gotresults);
        for (i = 0; i < object.length; i++) {
           document.getElementById("status").innerHTML = "Status : Objects Detected";
           Percent = floor(object[i].confidence * 100);
           R = random(255);
           G = random(255);
           B = random(255);
           noFill();
           stroke(R, G, B);
           rect(object[i].x, object[i].y, object[i].height, object[i].width);
           fill(R, G, B);
           text(object[i].label + " , " + Percent + "%", object[i].x + 10, object[i].y + 20);
           if (object = "Person") {
            document.getElementById("status").innerHTML = "Status : Baby Found";
            Alarm.stop();
           }
           
        }
    }
}
function modelloaded() {
    console.log("Coco SSD Is Loaded Successfully!!");
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
    Status = true;
}
function gotresults(error, results) {
    if (error) {
        console.log(error);
    }
    else {
        console.log(results);
        object = results;
    }
}
