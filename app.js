"use strict";
$(document).ready(function () {

    $('.btn').click(function (e) { 
        e.preventDefault();
        
        let a = (a) => {
            for (let i = 0; i < a; i++) {
                $('.infobox').append(`<h2>${a}</h2>`);
            }
        }
        a($('input').val())
    });

    $('.btn').click(function (e) { 
        e.preventDefault();
        
        let b = (b) => {
        $('.infobox').append(`<h2>${b}</h2>`);
        }
    
        // b($('input').val())
        
    });


});