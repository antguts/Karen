const container=document.querySelector('.container')

//AUDIO ELEMENTS===========================================================================
let audioDiv=document.querySelector('.audio')
let audioTag=document.querySelector('audio')
let vol= () =>{document.querySelector('audio').volume=0.4}

// window.onload = (event) => {
    let startBtn=document.querySelector('button')
    // audioDiv.innerHTML=`<audio controls loop autoplay> 
    // <source src="assets/sounds/menuScreen2.mp3" type="audio/mpeg">
    // </audio>`
    vol()
    startBtn.onclick = () =>{
        // audioDiv.innerHTML=`<audio controls loop autoplay><source src="assets/sounds/zombieWav.mp3" 
        // type="audio/mpeg"></audio>`
        populateKarens()
        // console.log(karens[i].img)
        animate()
        vol()
    } 
    
// };



//KARENS=======================================================================================
const karens=[]
class Karen {
    constructor(x,img){
        this.y=200, //Same TOP CSS position for all.
        this.x=x //To be determined by random assign. Between 60-517
        this.width=75, 
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
    for(i=0;i<10;i++){
        // let kar=document.querySelector('.container')
        let ranIm='zom'+Math.floor((Math.random()*2)+1)+'.png'
        let ranX=Math.floor((Math.random()*635)+20)
        let karen=new Karen(ranX,ranIm)
        // console.log(karen.width)
        karens.push(karen)
        // kar.innerHTML+=`<img src="/assets/${ranIm}" class="karen" id="karen${i}" style="width:105px; margin-left:${ranX}px;" onclick='karenShot(this)'>`
        // let kar = new Karen(ranX,ranIm)
        // karens.push(kar)
    }
}//end funct

//Function to shoot and eliminate Karens
function karenShot(element){
    new Audio('/assets/sounds/shot.wav').play();
    //grab number from id and eliminate the 'karen'
    var currKaren = element.id.match(/\d/g).join('');
    karens[currKaren].hp--
    console.log(karens[currKaren].hp)
    //checks HP of Karen
    if(karens[currKaren].hp<1){
        element.style.display='none'
    }
}


//ANIMATION=========================================================================================

// kar.innerHTML+=`<img src="/assets/${ranIm}" class="karen" id="karen${i}" style="width:105px; margin-left:${ranX}px;" onclick='karenShot(this)'>`

//function to set a delay
function delay(i) { 
    setTimeout(function() { 
        container.innerHTML+=`<img src="/assets/${karens[i].img}" class="karen" id="karen${i}" style="width:${karens[i].width}px; margin-left:${karens[i].x}px;" onclick='karenShot(this)'>`
    }, 1500 * i); 
  }

function animate(){
    for(i=0;i<karens.length;i++){
            delay(i)
        
        if(karens.length==i) return console.log("finished")
    }
     


    // console.log(karens[i].width)
    // container.innerHTML+=`<img src="${karens[i]}" class="karen" id="karen${i}" style="width:${karens[i].width}; margin-left:${karens[i].x}px;" onclick='karenShot(this)'> `

    // populateKarens()
}

