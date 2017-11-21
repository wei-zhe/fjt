$(function(){  
    $.get( "top.html", function( data ) {
        console.log(data);
        $( "#app" ).html( data );
    });  
})  
