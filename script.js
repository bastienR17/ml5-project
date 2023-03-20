let mobilenet;
let video;
let label = '';

// when model is ready make predictions
function modelReady() {
    console.log('Model is ready!!!');
    mobilenet.predict(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        label = results[0].className;
        // loop pour afficher les 3 premiers résultats
        mobilenet.predict(gotResults);
    }
}

// setup function
function setup() {
    createCanvas(640, 550);
    // capturer la video de la webcam
    video = createCapture(VIDEO);
    video.hide();
    background(0);
    // rajouter le model de mobilenet
    mobilenet = ml5.imageClassifier('MobileNet', video, modelReady);
}

function draw() {
    background(0);
    // show video 
    image(video, 0, 0);
    fill(255);
     
}