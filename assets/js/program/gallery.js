/* G A L L E R Y  Z E R O */
gallery0();

function gallery0() {

    var slideIndex = 1;
    showDivs(slideIndex);
        
    function plusDivs(n) {
        showDivs(slideIndex += n);
    }
                    
    document.querySelector('#button-left-0').addEventListener('click', function(n) {
        plusDivs(-1);
    });
                    
    document.querySelector('#button-right-0').addEventListener('click', function(n) {
        plusDivs(1);
    });
                    
    function showDivs(n) {
        var i;
        var x = document.getElementsByClassName("mySlides0");
        if (n > x.length) {slideIndex = 1}
        if (n < 1) {slideIndex = x.length}
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        x[slideIndex-1].style.display = "block";
    }
                      
}

/* G A L L E R Y  O N E */
gallery1();

function gallery1() {

    var slideIndex = 1;
    showDivs(slideIndex);
        
    function plusDivs(n) {
        showDivs(slideIndex += n);
    }
                    
    document.querySelector('#button-left-1').addEventListener('click', function(n) {
        plusDivs(-1);
    });
                    
    document.querySelector('#button-right-1').addEventListener('click', function(n) {
        plusDivs(1);
    });
                    
    function showDivs(n) {
        var i;
        var x = document.getElementsByClassName("mySlides1");
        if (n > x.length) {slideIndex = 1}
        if (n < 1) {slideIndex = x.length}
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        x[slideIndex-1].style.display = "block";
    }
                      
}