//smooth scrolling
var navMenuAnchorTags = document.querySelectorAll('.nav-menu a');
var interval;
for( var i = 0 ; i < navMenuAnchorTags.length ; i++){
    navMenuAnchorTags[i].addEventListener('click' , function(event){
        event.preventDefault();
        var targetSectionID = this.textContent.trim().toLowerCase();
        var targetSection = document.getElementById(targetSectionID);
        console.log(targetSection);

        // interval = setInterval(scrollVertically , 20 , targetSection);
        interval = setInterval(function(){
            scrollVertically(targetSection);
        }, 20 , targetSection);
    });
}

function scrollVertically(targetSection){
    var targetCoordinate = targetSection.getBoundingClientRect();
    if( targetCoordinate.top <= 0){
        clearInterval(interval);
        return;
    }
    window.scrollBy(0,50);

}

//skills bars

var progressBar = document.querySelectorAll('.skill-progress > div ');
var skillsContainer = document.getElementById('skills-container');
window.addEventListener('scroll' , checkScroll);
var animationDone = false;

function initialiseBars(){
    for( let bar of progressBar){
        bar.style.width = 0 + '%';
    }
}


function fillBars(){
    for( let bar of progressBar){
        let targetwidth = bar.getAttribute('data-bar-width');
        let currentWidth = 0;
        let interval = setInterval(function(){
            if( currentWidth > targetwidth){
                clearInterval(interval)
                return;
            }
            currentWidth++;
            bar.style.width = currentWidth + '%';
        } , 5);
    }
}

function checkScroll(){
    var coordinate = skillsContainer.getBoundingClientRect();
    if( !animationDone && coordinate.top < window.innerHeight){
        animationDone = true;
        console.log('hello');
        initialiseBars();
        fillBars();
    }
}
// var scrollInterval = setInterval(function(){
//     window.scrollBy(0 , 50);
// }, 50);

// clearInterval(scrollInterval);

// var targetPos = 1200;
// var currentPos = 0;
// var scrollInterval = 
// setInterval(function(){
//     if(currentPos>= targetPos){
//         clearInterval(scrollInterval);
//         return;
//     }
//     currentPos += 50;
//     window.scrollBy(0,50);
// })