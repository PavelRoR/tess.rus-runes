//@prepros-prepend jquery-2.1.1.min.js
//@prepros-prepend bootstrap.min.js
//@prepros-prepend jquery.fancybox.min.js

$(document).ready(function() {
  /* Работа формы */
  $(function () {
    var check = $('.check', this),
        email = $('.email', this),
        button = $('.button_mail', this);
    $(".form").on("submit", function () {
        var check = $('.check', this),
            message = $('.alert_message', this),
            reNone = /.+/,
            email = $('.email', this);
            button = $('.button_mail', this);
        if (!email.val().match(reNone)) {
            email.css({'borderColor':'red', 'transition':'all .4s ease'});
            button.text('Введите email').css({'color':'red','transition':'all .4s ease'});
            return false;
        }
        if (!check.prop("checked")) {
            check.next().css({'color':'red','transition':'all .4s ease'});
            check.next().children().css({'color':'red','transition':'all .4s ease'});
            button.text('Подтвердите соглашение').css({'color':'red','transition':'all .4s ease'});
            return false;
        }
        if (email.val() && check) {
            // button.text('Отправляем...');
            button.text('Отправляем...');
            setTimeout(function () {
                button.text('Отправлено!');
            }, 500);
        }
    });
    email.click(function () {
        email.css({"borderColor": "rgb(25, 10, 12)",'transition':'all .4s ease'});
        button.text('Записаться').css({'color': '#000','transition':'all .4s ease'});
    });
    check.click(function () {
        check.next().css({"color": "#aaa",'transition':'all .4s ease'});
        check.next().children().css({"color": "#aaa",'transition':'all .4s ease'});
        button.text('Записаться').css({'color': '#000','transition':'all .4s ease'});;
    });
});


/*Конец документа*/
});