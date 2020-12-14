// globals

// Morph

let circle = [];
let square = [];
let morph = [];
let state = false;

// Horse

let spritesheet;
let spritedata;
let animation = [];
let horses = [];

// End globals

function DevUtils() {
    const diff = 24.6
    // GuideLines();
    // Grid((windowWidth / diff) + (windowHeight / diff));
}


function Mouse() {
    fill(255)
    noStroke()
    ellipse(mouseX, mouseY, 50, 50);
    if (mouseIsPressed) {
        if (mouseButton === LEFT) {
            fill(255, 0, 0)
            ellipse(mouseX, mouseY, 80, 80);
        }
        if (mouseButton === RIGHT) {
            rect(25, mouseY - 25, 50, 50);
        }
        if (mouseButton === CENTER) {
            triangle(23, 75, 50, 20, 78, 75);
        }
    }
}

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
    // let length = textBox.length;
    RenderText(textBox);
}

function createCircleToSquare() {
    for (let angle = 0; angle < 360; angle += 9) {
        let v = p5.Vector.fromAngle(radians(angle - 135));
        v.mult(100);
        circle.push(v);
        morph.push(createVector());
    }
    for (let x = -50; x < 50; x += 10) {
        square.push(createVector(x, -50));
    }
    for (let y = -50; y < 50; y += 10) {
        square.push(createVector(50, y));
    }

    for (let x = 50; x > -50; x -= 10) {
        square.push(createVector(x, 50));
    }
    for (let y = 50; y > -50; y -= 10) {
        square.push(createVector(-50, y));
    }
}

function changeCircleToSquare(myText) {
    fill(255);
    textSize(32);
    TextBox(myText);

    let totalDistance = 0;
    for (let i = 0; i < circle.length; i++) {
        let v1;
        if (state) {
            v1 = circle[i];
        } else {
            v1 = square[i];
        }
        let v2 = morph[i];
        v2.lerp(v1, 0.1);
        totalDistance += p5.Vector.dist(v1, v2);
    }

    if (totalDistance < 0.1) {
        state = !state;
    }

    translate(width / 2, height / 2);

    strokeWeight(4);
    beginShape();

    noFill();
    stroke(255);

    morph.forEach(v => {
        vertex(v.x, v.y);
    });
    endShape(CLOSE);
    strokeWeight(1);
    translate(0, 0);
}


function createHorses() {
    let frames = spritedata.frames;

    for (let i = 0; i < frames.length; i++) {
        let pos = frames[i].position;
        let img = spritesheet.get(pos.x, pos.y, pos.w, pos.h);
        animation.push(img);
    }

    for (let i = 0; i < 8; i++) {
        horses[i] = new Sprite(animation, 0, i * 75, random(0.1, 0.4));
    }
}

function updateHorses() {
    for (let horse of horses) {
        horse.show();
        horse.animate();
    }
}