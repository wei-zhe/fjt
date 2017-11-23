$(function(){
    var app_height = window.innerHeight - 50;
    console.log(app_height, 'app_height')
    $('#app').css({
        'min-height': app_height,
    }) 
    $.get( "navbar.html", function( data ) {
        $( "#navs" ).html( data );
    });
    $.get( "home.html", function( data ) {
        $( "#app" ).html( data );
    });  
})  
