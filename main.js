let dale = document.getElementById("dale");
let rotation = 0;
let intervalId;

let spinDale = () => {
    rotation += 5;
    dale.style.transform = `rotate(${rotation}deg)`;
}

dale.addEventListener('mouseover', () => {
    spinDale();
    intervalId = setInterval(spinDale,1);
});

dale.addEventListener('mouseout', () => {
    clearInterval(intervalId);
    dale.style.transform = 'rotate(0deg)';
});