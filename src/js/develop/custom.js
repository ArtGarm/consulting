function countUp( curr ){

    var num = curr.find('.cou').attr('data-count') * 1;
    var count = 10;
    var start = 0;
    var current = 0;

    var increment =  Math.floor( ( num - start ) / count );

    var timer = setInterval(function() {

        current += increment;        

        if (current >= num ) {   
            curr.find('.cou').html( num ) ;         
            clearInterval(timer);
        } else {

            if (  current < 10 ){
                curr.find('.cou').html( '0' + current ) ;
            } else {
                curr.find('.cou').html( current ) ;
            }
            
        }

    }, 100);

}


$(document).ready(function(){

    if ( $('.ab-video-wrap').length ){

        $(window).on('scroll', function(){

            if( $('.ab-video-wrap .bigtext').offset().top - $(window).scrollTop() < 2*$(window).height()/3 ){                        
                if ( !$('.ab-video-wrap .bigtext').hasClass('scrolled') ){
                    $('.ab-video-wrap .bigtext').addClass('scrolled');
                }
            }

            if( $('.ab-video-wrap .bigtext').offset().top - $(window).scrollTop() < 2*$(window).height()/3 ){                        
                if ( !$('.ab-video-wrap .smaller').hasClass('scrolled') ){
                    $('.ab-video-wrap .smaller').addClass('scrolled');
                }
            }

        })

    }


    if ( $('.gallary-wrap ').length ){

        if ( $('html').attr('dir') == 'rtl'  ){
            $('.gallary-wrap .sliding-gal').slick({
                dots: false,
                infinite: true,
                speed: 600,
                fade : true,
                adaptiveHeight: false,
                prevArrow : $('.gallary-wrap .arrows .next '),
                nextArrow : $('.gallary-wrap .arrows .prev'),
            });
        } else {
            $('.gallary-wrap .sliding-gal').slick({
                dots: false,
                infinite: true,
                speed: 600,
                slidesToShow: 1,
                adaptiveHeight: false,
                prevArrow : $('.gallary-wrap .arrows .next '),
                nextArrow : $('.gallary-wrap .arrows .prev'),
            });
        }
    }

    if ( $('.pr-counters-wrap').length ){

        $(window).on('scroll', function(){
            $('.pr-counters-wrap .list-counters .item').each( function(){

                if( $(this).offset().top - $(window).scrollTop() < 2*$(window).height()/3 ){                        
                    if ( !$(this).hasClass('count') ){
                        countUp( $(this) );
                        $(this).addClass('count');
                    }
                }

            })

        })

    }

    if ( $('.solution-wrap').length ){

        if ( $('html').attr('dir') == 'rtl' ){
            $('.solution-wrap .slider-items').slick({
                slidesToShow: 2,
                speed: 500,
              //  rtl: true,
                initialSlide : 1,
                slidesToScroll: 1,
                prevArrow : $('.list-solutions .navigation .prev'),
                nextArrow : $('.list-solutions .navigation .next'),
                responsive: [
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 1,
                            centerMode: true,
                            swipe: true,
                            swipeToSlide: true,
                            variableWidth: true,
                            slidesToScroll: 1,
                            dots: true
                        }
                    }
                ]
            });
        } else {
            $('.solution-wrap .slider-items').slick({
                slidesToShow: 2,
                speed: 500,
                slidesToScroll: 1,
                prevArrow : $('.list-solutions .navigation .prev'),
                nextArrow : $('.list-solutions .navigation .next'),
                responsive: [
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 1,
                            centerMode: true,
                            variableWidth: true,
                            slidesToScroll: 1,
                            dots: true
                        }
                    }
                ]
            });
        }
    }


    $('.contact a').on('click', function(e){
        e.preventDefault();
        
        var dataID = $(this).attr('data-label');        
        var curr = $(this).attr('href');
        $( curr ).fadeIn(300);
        $( curr ).find('input[name=company_id]').val( dataID );
    });

    $('.contact-popup .closer').on('click', function(e){
        e.preventDefault();        
        $(this).closest('.contact-popup').fadeOut(300);
    });

    $('.contact-popup').on('click', function(e){
      //  e.preventDefault();
        if ( !$('.contact-popup .contein-form').is(event.target) && $('.contact-popup .contein-form').has(event.target).length === 0 ){
            $('.contact-popup').fadeOut(300);
        }
    });

});