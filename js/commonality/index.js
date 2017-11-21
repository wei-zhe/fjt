$(function(){  
    $('#app').click(function(){
        $.get( "home.html", function( data ) {
            console.log(data);
            $( "#app" ).html( data );
        });
    })
})  
