$(function(){
    var app_height = document.body.clientHeight - 50;
    console.log(app_height, 'app_height')
    $('#app').css({
        'min-hieght': app_height,
    }) 
    $.get( "navbar.html", function( data ) {
        $( "#navs" ).html( data );
    });
    $.get( "top.html", function( data ) {
        $( "#app" ).html( data );
    });  
})  
