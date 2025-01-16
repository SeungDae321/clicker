const click = document.querySelector('#click');
const points = document.querySelector('.points');
const buy = document.querySelector('.buy');
const hidden = document.querySelector('#hiddenButton');
const costmoney = document.querySelector('.costmoney');

let point = 0;

function adder(){
    if(point < 10){
        ++point;
    } else if(point <= 120){
        point = point + 2;
    } else {
        point = point + 5;
    };
};

function ultimate(){
    if(point > 500){
        point = point + 106;
    };
};

function auto(){
    setInterval(()=>{
        ++point;
        points.innerText = point;
    },3000)
}

click.addEventListener('click',()=>{
    adder();
    ultimate();
    points.innerText = point;
    if(point > 150){
        hidden.classList.remove('hide');
    };
});

hidden.addEventListener('click',()=>{
    if(point < 1500){
        alert('You need more money! (1500$)');
    } else{
        point = point + 100;
        points.innerText = point;
    }
     });

let autoClickCost = 150;
buy.addEventListener('click',()=>{
    if(point >= autoClickCost && point < 1000){
        point = point - autoClickCost;
        auto();
    } else if(point >= 1000){
        point = point - autoClickCost;
        autoClickCost = autoClickCost + 100;
        costmoney.innerText = autoClickCost;
        auto();
    }
    
    else {
        alert('Not enough points');
    };
    points.innerText = point;


});



const devmode = document.querySelector('.devmode');
devmode.addEventListener('click',()=>{
    point = point + 100000;
    points.innerText = point;
});