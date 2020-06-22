const container=document.querySelector('.container')

//AUDIO ELEMENTS===========================================================================
let audioDiv=document.querySelector('.audio')
let audioTag=document.querySelector('audio')
let vol= () =>{document.querySelector('audio').volume=0.4}

audioDiv.innerHTML=`<audio controls loop autoplay> 
<source src="assets/sounds/menuScreen2.mp3" type="audio/mpeg">
</audio>`
vol()
let startBtn=document.querySelector('button')
startBtn.onclick = () =>{
    // console.log(karens[i].img)
    populateKarens()
    animate()
    audioDiv.innerHTML=`<audio controls loop autoplay><source src="assets/sounds/zombieWav.mp3" 
    type="audio/mpeg"></audio>`
    vol()
} 
    



//KARENS=======================================================================================
const karens=[]
class Karen {
    constructor(x,img,width){
        this.y=200, //Same TOP CSS position for all.
        this.x=x //To be determined by random assign. Between 60-517
        this.width=width, 
        this.hp=2, //Hit Points for each Karen
        this.img=img //Image for Karen
    }
}//end Karen class

let bossKaren={
    img: '/assets/finalKaren.png',
    x:200,
    y:200,
    hp: 25
}//end boss Karen



function populateKarens(){
    //10 Karens...
    for(i=0;i<3;i++){
        let ranIm='zom'+Math.floor((Math.random()*2)+1)+'.png'
        let ranX=Math.floor((Math.random()*635)+10)
        let ranWidth=Math.floor((Math.random()*50)+135)
        let karen=new Karen(ranX,ranIm,ranWidth)
        karens.push(karen)
    }
}//end funct

//Function to shoot and eliminate Karens. Counter used to track the dead instead of array methods to maintain properties.
let count=0
function karenShot(element){
    gsap.to(`#${element.id}`,{opacity: 1, width:45})
    console.log(count)
    new Audio('/assets/sounds/shot.wav').play();
    //grab number from id and eliminate the 'karen'
    var currKaren = element.id.match(/\d/g).join('');
    karens[currKaren].hp--
    //checks HP of Karen
    if(karens[currKaren].hp<1){
        count++
        element.remove()
        if(count==karens.length) levelChange()
    }
}//end karen shot


//ANIMATION=========================================================================================


//function to set a delay on Zombie Spawn
function delay(i) { 
    setTimeout(function() { 
        container.innerHTML+=`<img src="/assets/${karens[i].img}" class="karen" id="karen${i}" style="width:${karens[i].width}px; margin-left:${karens[i].x}px;" onclick='karenShot(this)'>`;
    }, 1500 * i); 
}//end delay

function animate(){
    for(i=0;i<karens.length;i++){
        delay(i)
    }     
}//end animate


function levelChange(){
    container.innerHTML+=`<h3>The park darkens as you hear a loud shriek....</h3>`
    var tl=gsap.timeline({defaults:{duration: 1}})
    tl.to('.square',{opacity: 1, duration: 5})
      .to('h3',{opacity: 1, duration: 6},"-=2.2")
      .to(".container",{backgroundImage:'url(assets/FinalBossHell.jpg)'})
      .to('h3',{opacity: 0, duration: 5})
      .to('.square',{opacity: 0, duration: 8},"-=2.2")
}