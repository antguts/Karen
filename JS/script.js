//AUDIO ELEMENTS===========================================================================

document.querySelector('audio').volume=0.5

//Change music by changing the inner HTML of audio. Simple way.
document.querySelector('button').onclick = () =>{
    let aud=document.querySelector('.audio')
    aud.innerHTML=`<audio controls loop autoplay><source src="assets/sounds/finalBoss.mp3" 
    type="audio/mpeg"></audio>`
    document.querySelector('audio').volume=0.5
}