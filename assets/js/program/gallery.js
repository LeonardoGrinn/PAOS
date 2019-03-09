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

/* G A L L E R Y  T W O */
gallery2();

function gallery2() {

    var slideIndex = 1;
    showDivs(slideIndex);
        
    function plusDivs(n) {
        showDivs(slideIndex += n);
    }
                    
    document.querySelector('#button-left-2').addEventListener('click', function(n) {
        plusDivs(-1);
    });
                    
    document.querySelector('#button-right-2').addEventListener('click', function(n) {
        plusDivs(1);
    });
                    
    function showDivs(n) {
        var i;
        var x = document.getElementsByClassName("mySlides2");
        if (n > x.length) {slideIndex = 1}
        if (n < 1) {slideIndex = x.length}
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        x[slideIndex-1].style.display = "block";
    }
                      
}

/* G A L L E R Y  T H R E E */
gallery3();

function gallery3() {

    var slideIndex = 1;
    showDivs(slideIndex);
        
    function plusDivs(n) {
        showDivs(slideIndex += n);
    }
                    
    document.querySelector('#button-left-3').addEventListener('click', function(n) {
        plusDivs(-1);
    });
                    
    document.querySelector('#button-right-3').addEventListener('click', function(n) {
        plusDivs(1);
    });
                    
    function showDivs(n) {
        var i;
        var x = document.getElementsByClassName("mySlides3");
        if (n > x.length) {slideIndex = 1}
        if (n < 1) {slideIndex = x.length}
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        x[slideIndex-1].style.display = "block";
    }
                      
}