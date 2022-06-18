
let init = () => {
    const canvas = document.getElementById('fox-img');
    const ctx = canvas.getContext('2d');
    canvas.width = $('img.base-image').width();
    canvas.crossOrigin = "Anonymous";
    canvas.height = $('img.base-image').height();
    ctx.drawImage($('img.base-image').get(0), 0, 0);
    ctx.font = '36pt "Code 7x5"';
    $(document).on('input','#inp',function(){
        // var ImageData = ctx.getImageData(0, 0, 0, 0);
        // console.log(ImageData);
        //redraw image
        ctx.clearRect(0,0,canvas.width,canvas.height);
        ctx.drawImage($('img.base-image').get(0), 0, 0);
        //refill text
        ctx.fillStyle = 'white';
        ctx.fillRect(150, 50, 300, 100);
        ctx.fillStyle = "black";
        ctx.fillText($(this).val(),150,150, 300);
    });
    $('button').click(function(){
        console.log(ctx.getImageData(50, 50, 100, 100));
    });
}

let myFunction = () => {
    console.log("Clicked on Button!");
}

window.onload = init