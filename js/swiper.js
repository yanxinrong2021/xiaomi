var mySwiper = new Swiper('.swiper', {
    direction: 'horizontal', // 垂直切换选项
    loop: true, // 循环模式选项
    autoplay: true,
    preventClicks: true,
    disableOnInteraction: true,//操作后禁止自动切换
    effect: 'fade',

    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // 如果需要前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    on: {
        click: function () {
            if (swiper.autoplay.running) {
                swiper.autoplay.stop(); // 点击时停止自动播放
            } else {
                swiper.autoplay.start(); // 点击时开始自动播放
            }
        },
        mouseenter: function () {
            swiper.autoplay.stop();
        },
        mouseleave: function () {
            swiper.autoplay.start();
        }

    },
})        