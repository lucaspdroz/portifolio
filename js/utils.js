function GuideLines() {
    stroke(255, 0, 0);
    // x
    line(width, height / 2, 0, height / 2);
    // y
    line(width / 2, 0, width / 2, height);
    noStroke();
}

function Grid(spacing) {
    stroke(255, 0, 0);
    for (let x = 0; x < width; x++) {
        // line(x1, y1, x2, y2)
        x += spacing;
        line(x, 0, x, height);
        for (let y = 0; y < width; y++) {
            y += spacing;
            line(width, y, 0, y);
        }
    }
    noStroke();
}

function RenderText(myText, posX, posY) {
    fill(255);
    textSize(32);
    text(myText, (width / 2) - 50, height / 2);
}


function TextBox(textBox, textBoxSizeX, textBoxSizeY) {
    let length = textBox.length;

    RenderText(textBox);
}