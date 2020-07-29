(function($) {
    "use strict";
    $(function() {
        var $block = $(".b-forms-letter"), $form = $(".b-forms-letter form"), $response = $(".b-forms-letter__response"), $error = $(".b-forms-letter__error");
        $(".b-forms-letter form").submit(function(e) {
            e.preventDefault();
            var $form = $(this), flag = true, $formsLetter = $form.closest(".b-forms-letter");
            $form.find("input:not([ type=hidden ]), textarea").each(function(index, elem) {
                if ($.trim($(elem).val()) === "") {
                    $(elem).addClass("i-invalid");
                    flag = false;
                } else if ($(elem).attr("id") === "letterFormEmail") {
                    var mailRegex = /^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/i;
                    var mail = $(elem).val();
                    if (!mail.match(mailRegex)) {
                        $(elem).addClass("i-invalid");
                        flag = false;
                    }
                } else {
                    $(elem).removeClass("i-invalid");
                }
            });
            if (!flag) {
                return;
            }
            $.ajax({
                url: $form.attr("action"),
                type: $form.attr("method"),
                dataType: "json",
                data: $form.serialize(),
                success: function(data) {
                    if (data && typeof data === "object" && data.STATUS) {
                        if (data.STATUS === "Y") {
                            $block.addClass("i-send");
                            setTimeout(function() {
                                $block.addClass("i-success");
                            }, 500);
                        } else if (data.STATUS === "N") {
                            $error.show();
                        }
                    }
                },
                error: function(a, b, c) {
                    if (window.console) {
                        console.log(a);
                        console.log(b);
                        console.log(c);
                    }
                }
            });
        });
    });
})(jQuery);