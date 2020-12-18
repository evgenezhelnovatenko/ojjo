$(function() {

    $('.request__item-title').on('click', function() {
        let $text = $(this).next()
        $text.slideToggle(1000)
    })

    $(function(){
        let $header = $('.header')
        $(window).on('scroll', () => {
        
            if (window.pageYOffset >= 100) {
                $header.addClass('header__active')
            }
            else {
                $header.removeClass('header__active')
            }
        })
    })

    $('.burger__menu').on('click', () => {
        $('.menu').toggleClass('menu--active')
    })

    $('.categories__link').on('click', function(e) {
        e.preventDefault()
        let $this = $(this)
        let $activeLink = $('.categories__link--active')
        $activeLink.removeClass('categories__link--active')
        $this.addClass('categories__link--active')
    })

    $('.footer__info-title').on('click', function() {
        if (window.innerWidth < 477)
            $(this).next('.footer__info-text').slideToggle(1000)
    })

    $(window).on('resize', function() {
        let $footerInfoText = $('.footer__info-text')
        if (window.innerWidth >= 477) {
            $footerInfoText.css('display', 'block')
        }
        else if ($footerInfoText.css('display') === 'block') {
            $footerInfoText.css('display', 'none')
        }
    })

});