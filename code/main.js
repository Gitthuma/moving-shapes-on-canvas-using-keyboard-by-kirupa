/*Draw a triangle in a fixed position inside canvas using function drawTriangle*/

/*Reference the canvas and the content of the canvas and store them in variables*/

const canvas = document.querySelector('#myCanvas');
const context = canvas.getContext('2d');

/*Define two counter variables deltaX and deltaY to keep count of how far to move triangle as a result of arrow key press*/

let deltaX = 0;
let deltaY = 0;

/*Create function statement for drawTriangle*/

function drawTriangle() {

    /*Add a line to clear canvas before redrwawing the rectangle*/

    context.clearRect(0, 0, canvas.width, canvas.height);

    // draw the triangle

    /*Modify drawTriangle so that deltaX and deltaY can have an effect on the triangle movement*/

    context.beginPath();
    context.moveTo(200 + deltaX, 100 + deltaY);
    context.lineTo(170 + deltaX, 150 + deltaY);
    context.lineTo(230 + deltaX, 150 + deltaY);
    context.closePath();

    // draw the outline

    context.lineWidth = 10;
    context.strokeStyle = 'rgba(102, 102, 102, 1)';
    context.stroke();

    // add the fill color

    context.fillStyle = 'rgba(255, 204, 0, 1)';
    context.fill();

}

//Call the function drawTriangle

drawTriangle();

//Add keydown event listener

//Improve key handling logic

/*Add a keydown and keyup event listener with keyPressed and keyReleased functions*/

window.addEventListener('keydown', keyPressed, false);
window.addEventListener('keyup', keyReleased, false); //Correct KeyReleased to keyReleased

/*Add a variable called keys to be used inside keyPressed and keyReleased to mark pressed and released keys*/

let keys = [];

//Create function statement for event object moveSomething(e)

/*Add deltaX and deltaY movements to moveSomething switch statement*/

//Change function moveSomething to keyPressed

function keyPressed(e) {

    // add switch statement for keys to listen to using their keycodes

    //Correct keycode to keyCode

    //Use keys to store an entry for every key pressed

    keys[e.keyCode] = true;

    //Change switch statement to if statments that use keys to mark pressed keys

    //left
    if (keys[37]) {
        deltaX -= 2;
    }
    
    //up
    if (keys[38]) {
        deltaY -= 2;
    }

    //right
    if (keys[39]) {
        deltaX += 2;
    }

    //down
    if (keys[40]) {
        deltaY += 2;
    }

    // Add line to prevent normal keyboard behaviour.

    e.preventDefault();

    /*Add the call drawTriangle to draw a triangle in new position each time a key is pressed*/

    drawTriangle();

}

//Add a function with event object keyReleased

function keyReleased(e) {

    //Use keys to mark keys released

    keys[e.keyCode] = false;
}



