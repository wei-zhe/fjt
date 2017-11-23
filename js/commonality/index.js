$(function(){
    var app_height = document.body.clientHeight - 50;
    $('#app').css({
        'min-hieght': app_height,
    }) 
    $.get( "navbar.html", function( data ) {
        console.log(data);
        $( "#navs" ).html( data );
    });
    $.get( "top.html", function( data ) {
        console.log(data);
        $( "#app" ).html( data );
    });  
})  
