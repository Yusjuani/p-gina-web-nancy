$(document).ready(main);
var contador = 1;

function main (){
    $(".menu-bar").click (function(){
       // $("nav").toggle(); 
    
    //});

}

       if(contador == 1){
            $("li").animate({
                left: "0"
            });
            contador = 0;
        } else{
            contador = 1
            $("li").animate({
                left:"-100%"
            });
        }
    });
};
