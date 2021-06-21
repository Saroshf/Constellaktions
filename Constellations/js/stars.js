// Functions for Snowflakes

function newStar(initX, initY, initR, initColour) {
    return {
        x: initX,
        y: initY,
        r: initR,
        // v: initV,
        // a: initA,
        // dx: initDX,
        // dy: initDY,
        colour: initColour
    }

}

function newRandomSnowflake() {
    return {
        x: randomInt(0, cnv.width),
        y: randomInt(0, cnv.height),
        r: 30,
        v: 1,
        a: 0.5,
        colour: randomRGB()
    };
}

function drawStar(aStar) {
    fill(aStar.colour);
    circle(aStar.x, aStar.y, aStar.r, "fill");
    
}

function moveStar(aStar) {
    // aStar.y += aStar.v;
    // aStar.v += aStar.a;
    // aStar.x += aStar.dx;
    // aStar.y += aStar.dy;
    // if (aStar.x + aStar.dx >= cnv.width - aStar.r || aStar.x + aStar.dx <= aStar.r) {
    //     aStar.dx = -aStar.dx;
    // }
    // if (aStar.y >= cnv.height - aStar.r) {
    //     aStar.y = cnv.height - aStar.r;
    //     aStar.v = -aStar.v;
    //     aStar.v += aStar.a;
    //     aStar.v += 0.1; // Ball loses energy after every bounce

    // }

}

// function eqBounce(aStar) {
//     aStar.y += aStar.v;
//     aStar.v += aStar.a;
//     if (aStar.y >= cnv.height - aStar.r) {
//         // aStar.y = cnv.height - aStar.r;
//         aStar.v = -aStar.v;
//         aStar.v += aStar.a;
//     }
// }

function addaStar(x, y) {
    stars.push(newStar(x, y, 3, "white"));
    console.log(stars);
    let max = stars.length - 1;
    if (typeof stars[max - 1] !== "undefined") {
        let crnt = stars[max];
        let prev = stars[max - 1];
        line(prev.x, prev.y, crnt.x, crnt.y);
    }

    // line(x, y, stars.x, stars.y);
}

