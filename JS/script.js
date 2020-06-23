//GLOBAL VARIABLES==============================================
const container=document.querySelector('.container')
const startBtn=document.querySelector('button')
const audioDiv=document.querySelector('.audio')
const audioTag=document.querySelector('audio')
const karens=[]

//AUDIO ELEMENTS===========================================================================
//function to reset innerHTML of audio
let vol= (file) =>{
    audioDiv.innerHTML=`<audio controls loop autoplay> 
        <source src="${file}" type="audio/mpeg">
        </audio>`
    document.querySelector('audio').volume=0.4;
}


vol('/assets/sounds/menuScreen2.mp3')

startBtn.onclick = () =>{
    document.querySelector('button').disabled=true
    populateKarens()
    animate()
    vol("assets/sounds/zombieWav.mp3")
} 
    



//KARENS=======================================================================================
class Karen {
    constructor(x,img,width){
        this.y=200, //Same TOP CSS position for all.
        this.x=x //To be determined by random assign. Between 60-517
        this.width=width, 
        this.hp=4, //Hit Points for each Karen
        this.img=img //Image for Karen
    }
}//end Karen class

let bossKaren={
    img: '/assets/finalKaren.png',
    hp: 3
}//end boss Karen



function populateKarens(){
    //10 Karens...
    for(i=0;i<1;i++){
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
    let width=element.width
    // console.log(width)
    gsap.to(`#${element.id}`,{opacity: 1, width:(width-25)})
    console.log(count)
    // new Audio('/assets/sounds/shot.wav').play();
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

// let bossCnt=0
function bossShot(element){
    new Audio('/assets/sounds/shot.wav').play();
    let karen=document.querySelector('.karenBoss')
    let ranX=Math.floor((Math.random()*510)+80)+'px'
    let ranY=Math.floor((Math.random()*317)+10)+'px'
    karen.style.left=ranX
    karen.style.top=ranY
    bossKaren.hp--
    document.getElementById("lifeCnt").innerHTML=bossKaren.hp
    
    if(bossKaren.hp<1) bossDeath()
}


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

//gsap animated level change to boss
function levelChange(){
    container.innerHTML+=`<h3>The park darkens as you hear a loud shriek....</h3><p>(Go for the eyes)</p>`
    container.innerHTML+=`<div class="karenBoss"><div class="leftEye" onclick='bossShot(this)'></div><div class="rightEye"  onclick='bossShot(this)'></div>"</div>`
    // transitionBg()
    // bossCount()
    gsap.to('.karenBoss',{opacity: 1, duration: 0.2})
}

//function that fills HP meter on screen and delays boss appearance
function bossCount(){
        var tl=gsap.timeline({defaults:{duration: 1}})
        var Cont={val:0} , NewVal = bossKaren.hp ;
        gsap.to('h2',{opacity: 1, duration: 40})
        gsap.to(Cont,1,{delay:20,val:NewVal,roundProps:"val",onUpdate:function(){
            document.getElementById("lifeCnt").innerHTML=Cont.val
        }});

        //Delays the song change until appropriate time
        TweenMax.delayedCall(17,vol,['assets/sounds/finalBoss.mp3'])
        if(bossKaren.hp<1) bossDeath()
}

//Function that transitions to final boss
function transitionBg(){
    var tl=gsap.timeline({defaults:{duration: 1}})
    tl.to('.square',{opacity: 1, duration: 5})
      .to('h3',{opacity: 1, duration: 6},"-=2.2")
      .to('p',{opacity: 1, duration: 1},"-=2.2")
      .to(".container",{backgroundImage:'url(assets/FinalBossHell.jpg)'})
      .to('h3',{opacity: 0, duration: 5})
      .to('p',{opacity: 0, duration: 1})
      .to('audio',{duration:5,volume:0},"-=3.5")
      .to('.square',{opacity: 0, duration: 6},"-=2.2")
      .to('.karenBoss',{opacity: 1, duration: 0.2})
      .to('.karenBoss',{opacity: 0, duration: 0.1})
      .to('.karenBoss',{opacity: 1, duration: 0.2})
      .to('.karenBoss',{opacity: 0, duration: 0.1})
      .to('.karenBoss',{opacity: 1, duration: 0.2});
}//end funct

function bossDeath(){
    // let karen=document.querySelector('.bossKaren')
    gsap.to('.karenBoss',3,{rotation:2000})
    gsap.to('.karenBoss',4,{opacity: 0})
    gsap.to('.karenBoss',4,{backgroundSize:0})
    gsap.to('.square',4,{backgroundImage:'url(assets/victoryPark.png)'})
    gsap.to('.square',4,{opacity:1})


    // gsap.to('.karenBoss',3,{top:-300})

}//end funct
