$(function () {
    'use strict';

    // add class active when you click on navbar link
    $('.navbar .navbar-nav .nav-link').on('click', function () {
        $(this).parent('.nav-item').addClass('active').siblings().removeClass('active');
    });

});