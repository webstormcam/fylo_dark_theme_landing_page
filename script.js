let greenLink = document.getElementById('green_link')
let greenIcon = document.getElementById('green_icon')

greenLink.addEventListener('mouseenter',mouseOver);
greenLink.addEventListener('mouseout', mouseOut);

function mouseOver(){
greenIcon.src = 'imgs/icon-arrow-white.svg';
greenLink.style.borderBottom = '1px solid #fff'
greenLink.style.color ='#fff'
}

function mouseOut(){
    greenIcon.src = 'imgs/icon-arrow.svg';
    greenLink.style.borderBottom = '1px solid #62E0D9'
greenLink.style.color ='#62E0D9'
}
