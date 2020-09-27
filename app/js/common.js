// /* Локализация datepicker */
// $.datepicker.regional['ru'] = {
//     closeText: 'Закрыть',
//     prevText: 'Предыдущий',
//     nextText: 'Следующий',
//     currentText: 'Сегодня',
//     monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
//     monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн','Июл','Авг','Сен','Окт','Ноя','Дек'],
//     dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
//     dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
//     dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
//     weekHeader: 'Не',
//     dateFormat: 'dd.mm.yy',
//     firstDay: 1,
//     isRTL: false,
//     showMonthAfterYear: false,
//     yearSuffix: ''
// };
// $.datepicker.setDefaults($.datepicker.regional['ru']);

// $(function(){
//     $("#datepicker").datepicker({
//         showOn: "button",
//         buttonImage: "img/calendar.png",
//         buttonImageOnly: true,
//         buttonText: "Календарь ¬"
//     });
// });

$('.video-slider').slick({
    slidesToShow: 3,
    variableWidth: true,
    infinite: false,
    prevArrow: '<button type="button" class="slick-prev">←</button>',
    nextArrow: '<button type="button" class="slick-next">→</button>',
});

$('.btn-burger').click(function () {
    $('.overlay').fadeIn();
   $('.mobile-menu').fadeIn();
});

$('.overlay').click(function () {
    $('.mobile-menu').fadeOut();
    $('.overlay').fadeOut();
});

$('.mobile-menu-dropdown').click(function (e) {
   e.preventDefault();
   $(this).find('.dropdownMenu').slideToggle();
});

