!function(a){"use strict";function b(a){return/(10|11|12|13|14|15|16|17|18|19)$/.test(a)?"размеров":/.*1$/.test(a)?"размер":/[2-4]$/.test(a)?"размера":"размеров"}a(function(){a(".b-catalog-detail__info").each(function(){var c=a(this),d=c.find(".b-catalog-detail__old-price"),e=c.find(".b-catalog-detail__discount"),f=c.find(".b-catalog-detail__price"),g=c.find(".b-catalog-detail__order"),h=g.find(".b-catalog-detail__order-num"),i=c.find(".bj-cart-button");c.delegate(".b-catalog-detail__sizes-item:not( .i-disabled )","click",function(){var j=a(this);j.toggleClass("i-active"),j.hasClass("i-active")&&(d.find("s").text(j.data("oldprice")),e.find("span").text(j.data("discount")),f.text(j.data("price")));var k=c.find(".i-active").length;k?(g.show(),i.removeClass("i-disabled"),h.text(k+" "+b(k))):(d.find("s").text(c.data("oldprice")),e.find("span").text(c.data("discount")),f.text(c.data("price")),g.hide(),i.addClass("i-disabled"))})}),a(".bj-cart-button").click(function(b){b.preventDefault();var c=a(this),d=(c.data("ajax-url"),{});d.id=[],c.hasClass("i-disabled")||(c.closest(".b-catalog-detail__info").find(".i-active").each(function(){d.id.push(a(this).data("id"))}),a.ajax({url:c.data("ajax-url"),type:c.data("ajax-method"),dataType:"json",data:d,success:function(b){b.STATUS&&"OK"===b.STATUS&&b.NUM&&a("#bx_cart_num").text(b.NUM)},error:function(a,b,c){window.console&&(console.log(a),console.log(b),console.log(c))}}))})})}(jQuery);