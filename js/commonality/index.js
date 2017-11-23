$(function(){  
    $.get( "navbar.html", function( data ) {
        console.log(data);
        $( "#app" ).html( data );
    });
    $.get( "top.html", function( data ) {
        console.log(data);
        $( "#navs" ).html( data );
    });  
})  
