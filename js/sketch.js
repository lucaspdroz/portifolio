function setup() {
    createCanvas(windowWidth, windowHeight);
}
function draw() {
    const diff = 24.6
    background(0)
    // GuideLines();
    Grid((windowWidth / diff) + (windowHeight / diff));
    // RenderText("Hello " + windowWidth + "x" + windowHeight);

    TextBox("hello textbox " + windowWidth + "x" + windowHeight);
}




function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}