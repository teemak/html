function addBlur() {
    let contact = document.getElementById('contact');
    contact.classList.add('blur');
    
    setTimeout(warp, 3000);
    function warp() {
        window.location.href = 'index.html';
    }
}

const c = document.getElementById("c");
const ctx = c.getContext("2d");
c.height = window.innerHeight/1.5;
c.width = window.innerWidth/1.25;
const chars = [];

for(let j = 0; j < 96; j++) {
    const kata = String.fromCharCode(0x30A0 + Math.floor(Math.random() * 91));
    chars.push(kata);
}

const font_size = 20;
const columns = c.width / font_size; 
const stream = [];

for(let x = 0; x < columns; x++) {
    stream[x] = 1; 
}    

function rain() {
    ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
    ctx.fillRect(0, 0, c.width, c.height);            
    ctx.fillStyle = "#3F3"; 
    ctx.font = font_size + "px arial";
    
    for(let i = 24; i < stream.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];

        ctx.fillText(text, i*font_size, stream[i]*font_size);

        if(stream[i] * font_size > c.height && Math.random() > 0.975) 
            stream[i] = 0;
            stream[i]++;
    }
}

const input1 = document.getElementById('name');
const input2 = document.getElementById('message');
let once = false;

function matrixRain() {
    setInterval(rain, 100);
}

input1.addEventListener('focus', function() {
    if(!once) {
        once = true;
        matrixRain();
    }
    return;
});

input2.addEventListener('focus', function() {
    if(!once) {
        once = true;
        matrixRain();
    }
    return;
});
