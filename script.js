const dino = document.querySelector('.dino');
const background = document.querySelector('.background');
let isjumping = false
let position = 0

function handleKeyup(event) {
    if(event.keyCode==32){
        if(!isjumping){
             jump()
        }
         
    }
};

function jump(){
    

isjumping = true

    let upinterval = setInterval (() => {
        if(position >= 150){
            clearInterval(upinterval);

            let downinterval = setInterval (() => {
                if (position <=0){
                    clearInterval(downinterval);
                    isjumping=false
                }else{
                    position -= 20
                    dino.style.bottom = position + 'px'; 
                }
                
                
            },20)
        }else{
             position += 20
             dino.style.bottom = position + 'px';
        }
    },20 )
};

function createcactus (){   
    let cactusposition = 100;

    const cactus = document.createElement('div')
    let randomtime = Math.random()*6000;
    cactus.style.right = 100 + 'px';
    cactus.classList.add('cactus')
    background.appendChild(cactus);

    let rigthtinterval = setInterval(()=>{
       

        if (cactusposition > 1400){
            clearInterval(rigthtinterval);
            background.removeChild(cactus);
        }else if ( cactusposition > 0 &&  cactusposition == 1250 && position < 60){
            clearInterval(rigthtinterval);
            document.body.innerHTML = '<h1 class = "game-over ">!!!! GAME OVER !!!!</h1>'
        }
        else{
            cactusposition += 10;
            cactus.style.right = cactusposition + 'px';
        }

    },20)

    setTimeout(createcactus,randomtime);
}
createcactus();
document.addEventListener('keyup',handleKeyup);
    
