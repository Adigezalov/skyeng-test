$(document).ready(function () {

    function openModal(a) {
        $('body').addClass('body_shadow body_overflow');
        $('.modal_content').show();
        $('.modal').addClass('visible');
        $('.modal .title').html((a.find('.title').text()));
        $('.modal .slogan').html((a.find('.slogan').text()));
        $('.modal .tariff_price').html((a.find('.tariff_price').text()));
        a.find('.icon').clone().prependTo('.modal .tariff');
    }

    function closeModal() {
        $('body').removeClass('body_shadow body_overflow');
        $('.modal').removeClass('visible');
        $('.modal_content').hide();
        $('.modal .tariff .icon.image').remove();
    }

    $('.tariff.page').on('click', function (event) {
        event.preventDefault();
        openModal($(this));
    });

    $('.close').on('click', function (event) {
        event.preventDefault();
        closeModal();
    });

    $(document).on('mouseup', function (event) {
        event.preventDefault();
        if ($('.modal.visible').has(event.target).length === 0) {
            closeModal();
        }
    });

});