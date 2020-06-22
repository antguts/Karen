//AUDIO ELEMENTS===========================================================================
let audioDiv=document.querySelector('.audio')
let audioTag=document.querySelector('audio')

window.onload = (event) => {
    //Alert message to ask it the user wants music. 
    if(confirm("would you like music?")){
        audioDiv.innerHTML=`<audio controls loop autoplay> 
        <source src="assets/sounds/menuScreen2.mp3" type="audio/mpeg">
        </audio>`
        document.querySelector('button').onclick = () =>{
            audioDiv.innerHTML=`<audio controls loop autoplay><source src="assets/sounds/zombieWav.mp3" 
            type="audio/mpeg"></audio>`
            // audioTag.volume=0.6
        }
    }//end if
};





//KARENS=======================================================================================
class Karen={
  y:200, //Same TOP CSS position for all. 
  hp:5, //Hit Points for each Karen
    constructor(x,img){
        this.x=x //To be determined by random assign
        this.img=img //Image for Karen
    }
}//end Karen class

let bossKaren={
    img: '/assets/finalKaren.png',
    x:200,
    y:200,
    hp: 25
}//end boss Karen

let karens=[]
function populateKarens(){
    //15 Karens
    for(i=0;i<15;i++){
        let ranIm='zom'+Math.floor((Math.random()*4)+1)+'.png'

        new Karen = karen()
        karens.push()
    }
}



let karenId=document.querySelector('#karen')
//Adds MM shooting sound when Karen is hit.
karenId.addEventListener('click',function(){
    new Audio('/assets/sounds/shot.wav').play();
    console.log("clicked")
})