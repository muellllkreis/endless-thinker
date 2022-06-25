import { Species } from './enums.js'

// constants
const QUOTE_OFFSET = 75;  // pixel height of top space for quote
const QUOTE_MAXWIDTH = 500;
const LINE_HEIGHT = 32;   // height of lines in quote text
const MAX_LINES = 5;      // max lines allowed in quote text

// vars
var foxSpecies = Species.Mystic;
var foxVersion = 2;

const init = () => {
    // build canvas based on fox image
    const canvas = document.getElementById('fox-img');
    const ctx = canvas.getContext('2d');
    const img = document.getElementById('fox-base-img');
    canvas.crossOrigin = "anonymous";

    // we add some height to make space for the quote
    canvas.width = img.width;
    canvas.height = img.height + QUOTE_OFFSET;
    ctx.drawImage(img, 0, QUOTE_OFFSET);

    // color definitions
    // backgroundcolor: get topmost pixel of fox image
    // namecolor: get bottom pixel in the middle of the image
    // @TODO: namecolor does not work with every fox type
    var backgroundColor = ctx.getImageData(0, QUOTE_OFFSET, 1, 1).data;
    var nameColor = ctx.getImageData(canvas.width/2 + foxSpecies.nameColXOffset, canvas.height-1 - foxSpecies.nameColYOffset, 1, 1).data;

    // draw top rectangle
    ctx.fillStyle =  "rgba(" + backgroundColor[0] + "," + backgroundColor[1] + "," + backgroundColor[2] + "," + backgroundColor[3] + ")";
    ctx.fillRect(0, 0, 600, QUOTE_OFFSET);

    // input field definitions
    var thoughtText = "";
    var nameText = "";
    var nameInput = document.getElementById('name');
    var thoughtInput = document.getElementById('thought');

    // input field listeners
    nameInput.addEventListener("keyup", function (evt) {
        // prevent enter from submitting the form
        if (evt.code == "Enter") {
            evt.stopPropagation();
        }
        nameText = nameInput.value;
        thoughtText = thoughtInput.value;
        drawText(canvas, ctx, img, nameText, thoughtText, backgroundColor, nameColor);
    }, false);

    thoughtInput.addEventListener("keyup", function (evt) {
        // prevent enter from submitting the form
        if (evt.code == "Enter") {
            evt.stopPropagation();
        }
        nameText = nameInput.value;
        thoughtText = thoughtInput.value;
        drawText(canvas, ctx, img, nameText, thoughtText, backgroundColor, nameColor);
    }, false);
}

const drawText = (canvas, context, img, nameText, thoughtText, backgroundColor, nameColor) => {
    //redraw image
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(img, 0, QUOTE_OFFSET);

    // draw rectangle with on top for quote
    // @TODO: make size dynamic depending on quote length
    context.fillStyle =  "rgba(" + backgroundColor[0] + "," + backgroundColor[1] + "," + backgroundColor[2] + "," + backgroundColor[3] + ")";
    context.fillRect(0, 0, 600, QUOTE_OFFSET);

    // refill text
    // leave name if it hasn't been changed
    if(nameText.length > 0) {
        // rectangle that hides the original name
        context.fillRect(foxSpecies.xpos, 50 + QUOTE_OFFSET, foxSpecies.maxWidth, foxSpecies.height);
    
        // draw name text
        // @TODO: something is wrong with the positioning here
        context.fillStyle = "rgba(" + nameColor[0] + "," + nameColor[1] + "," + nameColor[2] + "," + nameColor[3] + ")";
        context.font = '24pt "Code 7x5"';
        context.fillText(nameText, foxSpecies.xpos, 150 + QUOTE_OFFSET/2, foxSpecies.maxWidth);
    }

    // draw thought text
    context.fillStyle = "rgba(0, 0, 0, 255)";
    context.font = '24pt "IBM Plex Mono"';
    let lines = thoughtText.split('\n');

    for (var i = 0; i < lines.length; i++) {
        if(i + 1 < MAX_LINES) {
            context.fillText(lines[i], 50, 40 + (i * LINE_HEIGHT), QUOTE_MAXWIDTH);
        }
    }
}

const myFunction = () => {
    console.log("Clicked on Button!");
}

window.onload = init