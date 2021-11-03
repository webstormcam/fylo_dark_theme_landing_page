let greenLink = document.getElementById('green_link')
let greenIcon = document.getElementById('green_icon')

greenLink.addEventListener('mouseenter',mouseOver);
greenLink.addEventListener('mouseout', mouseOut);

function mouseOver(){
greenIcon.src = 'imgs/icon-arrow-white.svg';
}

function mouseOut(){
    greenIcon.src = 'imgs/icon-arrow.svg';
}
