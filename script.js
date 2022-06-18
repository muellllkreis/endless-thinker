
let init = () => {
    const canvas = document.getElementById('fox-img');
    const ctx = canvas.getContext('2d');
    const img = document.getElementById('fox-base-img');
    canvas.width = img.width;
    canvas.crossOrigin = "anonymous";
    canvas.height = img.height;
    ctx.drawImage($('img.base-image').get(0), 0, 0);
    ctx.font = '24pt "Code 7x5"';
    $(document).on('input','#inp',function(){
        var backgroundColor = ctx.getImageData(0, 0, 1, 1).data;
        var textColor = ctx.getImageData(canvas.width/2, canvas.height-1, 1, 1).data;
        console.log(textColor)
        //redraw image
        ctx.clearRect(0,0,canvas.width,canvas.height);
        ctx.drawImage($('img.base-image').get(0), 0, 0);
        //refill text
        ctx.fillStyle =  "rgba(" + backgroundColor[0] + "," + backgroundColor[1] + "," + backgroundColor[2] + "," + backgroundColor[3] + ")";
        ctx.fillRect(150, 50, 300, 100);
        ctx.fillStyle = "rgba(" + textColor[0] + "," + textColor[1] + "," + textColor[2] + "," + textColor[3] + ")";
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