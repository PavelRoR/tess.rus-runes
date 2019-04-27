//@prepros-prepend jquery-2.1.1.min.js
//@prepros-prepend flipclock.min.js

$(document).ready(function () {
	$(function () {
		var isIE = false || !!document.documentMode;
		
        if (isIE) {
			var head  = document.getElementsByTagName("head")[0];
            var link  = document.createElement("link");
            link.rel  = "stylesheet";
            link.href = "../css/course_ie.css";
            head.appendChild(link);
        }
    });
	/* Якорь */
	$(function () {
		$("a[href='#prices'], a[href='#tasks']").click(function (h) {
			h.preventDefault();
			var f = $(this).attr("href"),
				g = $(f).offset().top;
			$("body,html").animate({
				scrollTop: g
			}, 1500)
		});
	});
	/*План*/
	(function ($) {
		jQuery.fn.lightTabs = function (options) {
			var createTabs = function () {
				tabs = this;
				i = 0;
				showPage = function (i) {
					$(tabs).children("div").children("div").hide();
					$(tabs).children("div").children("div").eq(i).show();
					$(tabs).children("ul").children("li").removeClass("active");
					$(tabs).children("ul").children("li").eq(i).addClass("active");
				}
				showPage(0);
				$(tabs).children("ul").children("li").each(function (index, element) {
					$(element).attr("data-page", i);
					i++;
				});
				$(tabs).children("ul").children("li").click(function () {
					showPage(parseInt($(this).attr("data-page")));
				});
			};
			return this.each(createTabs);
		};
	})(jQuery);

	$(".lessons").lightTabs();

//@prepros-prepend timer.js

	/*Записи*/
	(function ($) {
		jQuery.fn.lightTabs2 = function (options) {
			var createTabs2 = function () {
				tabs2 = this;
				i = 0;
				showPage2 = function (i) {
					$(tabs2).children("div").children("div").hide();
					$(tabs2).children("div").children("div").eq(i).show();
					$(tabs2).children("ul").children("li").removeClass("active2");
					$(tabs2).children("ul").children("li").eq(i).addClass("active2");
				}
				showPage2(0);
				$(tabs2).children("ul").children("li").each(function (index, element) {
					$(element).attr("data-page-2", i);
					i++;
				});
				$(tabs2).children("ul").children("li").click(function () {
					showPage2(parseInt($(this).attr("data-page-2")));
				});
			};
			return this.each(createTabs2);
		};
	})(jQuery);

	$(".days").lightTabs2();

	/* Конец документа*/
});