function preload() {
    preloadSprite()
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    // ActualScene(scenne[0])
    createCircleToSquare()
    createHorses()

}
function draw() {
    background(0)
    DevUtils()
    // RenderText("Hello " + windowWidth + "x" + windowHeight);
    changeCircleToSquare("hello");
    updateHorses()
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}