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

window.addEventListener('keydown', moveSomething, false);

//Create function statement for event object moveSomething(e)

/*Add deltaX and deltaY movements to moveSomething switch statement*/

function moveSomething(e) {

    // add switch statement for keys to listen to using their keycodes

    //Correct keycode to keyCode

    switch(e.keyCode) {
        
        case 37:
            deltaX -= 2;
            break;

        case 38:
            deltaY -= 2;
            break;

        case 39:
            deltaX += 2;
            break;

        case 40:
            deltaY += 2;
            break;

    }

    // Add line to prevent normal keyboard behaviour.

    e.preventDefault();

    /*Add the call drawTriangle to draw a triangle in new position each time a key is pressed*/

    drawTriangle();

}



