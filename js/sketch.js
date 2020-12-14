function preload() {
    preloadSprite()
}

function setup() {

    noCursor();
    createCanvas(windowWidth, windowHeight);
    // ActualScene(scenne[0])
    createCircleToSquare()
    createHorses()

}
function draw() {
    background(0)
    DevUtils()
    Mouse()
    // RenderText("Hello " + windowWidth + "x" + windowHeight);
    updateHorses()
    changeCircleToSquare("I ❤ CSS \n and JS ");
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}