//AUDIO ELEMENTS===========================================================================
let audioDiv=document.querySelector('.audio')
let audioTag=document.querySelector('audio')

window.onload = (event) => {
    
    let startBtn=document.querySelector('button')
        audioDiv.innerHTML=`<audio controls loop autoplay> 
        <source src="assets/sounds/menuScreen2.mp3" type="audio/mpeg">
        </audio>`
        startBtn.onclick = () =>{
            populateKarens()      
            audioDiv.innerHTML=`<audio controls loop autoplay><source src="assets/sounds/zombieWav.mp3" 
            type="audio/mpeg"></audio>`
        } 
};



//KARENS=======================================================================================
class Karen {
    constructor(x,img){
        this.x=x //To be determined by random assign. Between 60-517
        this.y=200, //Same TOP CSS position for all.
        this.width=75, 
        this.hp=5, //Hit Points for each Karen
        this.img=img //Image for Karen
    }
}//end Karen class

let bossKaren={
    img: '/assets/finalKaren.png',
    x:200,
    y:200,
    hp: 25
}//end boss Karen


let currentKarens=0
let karens=[]
function populateKarens(){
    //10 Karens...
    for(i=0;i<10;i++){
        let kar=document.querySelector('.container')
        let ranIm='zom'+Math.floor((Math.random()*2)+1)+'.png'
        let ranX=Math.floor((Math.random()*635)+20)
        let karen=new Karen(ranX,ranIm)
        karens.push(karen)
        kar.innerHTML+=`<img src="/assets/${ranIm}" class="karen" id="karen${i}" style="width:105px; margin-left:${ranX}px;" onclick='karenShot(this)'>`
        console.log(ranX)
        // let kar = new Karen(ranX,ranIm)
        // karens.push(kar)
    }
}//end funct

//Function to shoot and eliminate Karens
function karenShot(element){
    new Audio('/assets/sounds/shot.wav').play();
    console.log("clicked")
    element.style.display='none'
}


//ANIMATION=========================================================================================



function animate(){
    populateKarens()
}

