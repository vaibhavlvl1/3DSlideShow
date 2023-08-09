var x = 0,bool=false,interval;


function rotate(x){
    const cubes=document.querySelectorAll('.cube');
    Array.from(cubes).forEach(cube => cube.style.transform = `rotateY(${x}deg)`);
}

function playpause(){
    if (!bool){
        interval = setInterval(()=>{
            x-=90;
            rotate(x);
        },3000);
        changePlayPause();
        bool=true;

    }
    else{
        clearInterval(interval);
        changePlayPause();
        bool=false;
    }
    
}

const changePlayPause = ()=>{
    const i = document.querySelector('.play-pause i');
    const cls = i.classList[1];
    
    if (cls === 'lni-play'){
        i.classList.remove('lni-play');
        i.classList.add('lni-pause');
    }
    else{
        i.classList.remove('lni-pause');
        i.classList.add('lni-play')
    }

}

// for rotating left

document.querySelector('.left-arrow').addEventListener('click',()=>{
    x+=90;
    rotate(x);
    if (bool){
        playpause();
    }
    
})

// for rotating right
document.querySelector('.right-arrow').addEventListener('click',()=>{
    x-=90;
    rotate(x);
    if (bool){
        playpause();
    }
})



// hover effects 
document.querySelector('.left-arrow').addEventListener('mouseover',()=>{
    x+=25;
    rotate(x);
    
})

document.querySelector('.left-arrow').addEventListener('mouseout',()=>{
    x-=25;
    rotate(x);
    
})


document.querySelector('.right-arrow').addEventListener('mouseover',()=>{
    x-=25;
    rotate(x);
    
})

document.querySelector('.right-arrow').addEventListener('mouseout',()=>{
    x+=25;
    rotate(x);
    
})


// animations

document.querySelector('.play-pause').addEventListener('click',()=>{
    playpause();
})

