//AUDIO ELEMENTS===========================================================================
let audioDiv=document.querySelector('.audio')
let audioTag=document.querySelector('audio')

window.onload = (event) => {
    // audioDiv.innerHTML=`<audio controls loop autoplay> 
    // <source src="assets/sounds/menuScreen2.mp3" type="audio/mpeg">
    // </audio>`
    // audioTag.volume=0.2
};

document.querySelector('button').onclick = () =>{
    audioDiv.innerHTML=`<audio controls loop autoplay><source src="assets/sounds/zombieWav.mp3" 
    type="audio/mpeg"></audio>`
    // audioTag.volume=0.6
}