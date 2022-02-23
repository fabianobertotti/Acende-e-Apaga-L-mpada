var nunImg = 1;


function alternarImg(){
    let dodge = null;
    dodge = document.getElementById('dodge');
    if (nunImg==1){
        dodge.src = 'img/2.jpg';
        nunImg = 2;
    } else{
        dodge.src = 'img/1.jpg';
        nunImg = 1;
    }
    
    console.log(nunImg);
}

function alternarAutomatico() {
    window.setInterval(()=>{
        alternarImg();
    }, 1000);
}

