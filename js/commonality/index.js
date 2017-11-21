$(function(){  
    $.get( "top.html", function( data ) {
        console.log(data);
        $( "#app" ).html( data );
    });
    $('.top').bind('click',function(){
        $.get( "home.html", function( data ) {
            console.log(data);
            $( "#app" ).html( data );
        });
    })
})  
