		/* Таймер */
		var clock;
		var futureDate = new Date("April 2, 2019 00:00 AM UTC+3");
		var currentDate = new Date();
		var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;

		function dayDiff(first, second) {
			return (second - first) / (1000 * 60 * 60 * 24);
		}
		if (dayDiff(currentDate, futureDate) < 100) {
			$('.clock').addClass('twoDayDigits');
		} else {
			$('.clock').addClass('threeDayDigits');
		}
		if (diff < 0) {
			diff = 0;
			$('.clock-stop').addClass("alert-danger");
			$('.clock-stop').html("Скидка уменьшилась!");
			// $('#sale_1').text('2 000р.');
			// $('#today_1').text('9 900р.');
			// $('#link_1').attr('href', 'https://shop.mastervision.su/?r=ordering/cart/as1&id=3086&clean=true&lg=ru');
			// $('#prepayment_bonus').text('600р.');
			// $('#prepayment_credited').text('2 600р.');
            // $('#prepayment_link').attr('href', 'https://shop.mastervision.su/?r=ordering/cart/as1&id=3093&clean=true&lg=ru');
            
            // $('.prepayment, .cost_sale, .cost_today').remove();
            // $('.cost_full span').css('textDecoration', 'none');
		}
		clock = $('.clock').FlipClock(diff, {
			clockFace: 'HourlyCounter',
			countdown: true,
			language: 'ru',
			callbacks: {
				stop: function () {
					$('.clock-stop').addClass("alert-danger");
					("alert-danger");
					$('.clock-stop').html("Скидка уменьшилась!");
                    // $('#sale_1').text('2 000р.');
                    // $('#today_1').text('9 900р.');
                    // $('#link_1').attr('href', 'https://shop.mastervision.su/?r=ordering/cart/as1&id=3086&clean=true&lg=ru');
                    // $('#prepayment_bonus').text('600р.');
                    // $('#prepayment_credited').text('2 600р.');
                    // $('#prepayment_link').attr('href', 'https://shop.mastervision.su/?r=ordering/cart/as1&id=3093&clean=true&lg=ru');

                    // $('.prepayment, .cost_sale, .cost_today').remove();
                    // $('.cost_full span').css('textDecoration', 'none');
				}
			},
		});