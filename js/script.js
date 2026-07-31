 $(document).ready(function(){

    $('#menu').click(function(){
         $(this).toggleClass('fa-times fa-bars');
        
        
        $('nav').toggleClass('active');
    });

    
    $(window).on('scroll load', function(){
        $('#menu').removeClass('fa-times').addClass('fa-bars');
        $('nav').removeClass('active');
    });

});

 