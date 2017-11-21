$(function(){  
    $.get( "top.html", function( data ) {
        console.log(data);
        $( "#app" ).html( data );
    });
    $('.top').click(function(){
        $.get( "home.html", function( data ) {
            console.log(data);
            $( "#app" ).html( data );
        });
    })
})  
