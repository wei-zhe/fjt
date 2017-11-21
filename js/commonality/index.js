$(function(){  
    $('#app').click(function(){
        $.get( "../../html/index.html", function( data ) {
            $( ".app" ).html( data );
            console.log(data);
        });
    })
})  