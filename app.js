"use strict";
$(document).ready(function () {

    $('.btn').click(function (e) { 
        e.preventDefault();
        if ($.trim($('input').val()) == "") {
            $('input').val();
        } else {
            let k = (a) => {
                for (let i = 0; i < a; i++) {$('.infobox').append(`<h2>${a}</h2>`)};            
            }
            let b = (e) => Number(e) ? k(e) : $('.infobox').append(`<h2>${e}</h2>`);
            b($('input').val());
        }
    
        $('input').val('')
    });

    
        
        


});