/*Draw a triangle in a fixed position inside canvas using function drawTriangle*/

/*Reference the canvas and the content of the canvas and store them in variables*/

const canvas = document.querySelector('#myCanvas');
const context = canvas.getContext('2d');

/*Create function statement for drawTriangle*/

function drawTriangle() {

    // draw the triangle

    context.beginPath();
    context.moveTo(200, 100);
    context.lineTo(170, 150);
    context.lineTo(230, 150);
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

function moveSomething(e) {

    // add switch statement for keys to listen to using their keycodes

    switch(e.keycode) {
        
        case 37:
            // left key press
            break;

        case 38:
            // up key press
            break;

        case 39:
            // right key press
            break;

        case 40:
            // down key press
            break;

    }

}

