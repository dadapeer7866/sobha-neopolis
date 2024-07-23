

$(document).ready(function () {
	$("input[type=tel]").removeAttr('style');
	$("input[type=tel]").css('padding-left', "84px");
	$("#hide-panal").removeClass("open");
});
$("#schedule_form  input[required=true], #schedule_form textarea[required=true]").keyup(function () {
    $(this).css("border-color", "");
});
$("#toggle-btn").click(function (e) {
    console.log("open");
    $(this).toggleClass("active");
    $("#hide-panal").toggleClass("open");
});
function closeFormPop() {
    window.clearTimeout();
    $("#toggle-btn").removeClass("active");
    $("#hide-panal").removeClass("open");
}

$(document).ready(function () {
    $("#test").hide().before('<a href="#" id="toggle-menu" class="menu" style="color: #662D91;text-decoration:none;font-weight:500;margin-top:10px;">ENQUIRE NOW</a>');
    $("a#toggle-menu").click(function (e) {
        e.preventDefault();
        $("#test").slideToggle(200);
    });
    $(document).click(function (e) {
        if ($(e.target).closest("#test").length > 0 || $(e.target).closest("#toggle-menu").length > 0) return;
        $("#test").slideUp(200);
    });
});
$(function () {
    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate({ scrollTop: target.offset().top }, 1000);
                return false;
            }
        }
    });
});

var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("pclosebbtn")[0];
function popfun1() {
	modal.style.display = "block";
    var act = $("#hide-panalbtm").hasClass("open");
    if (act) {
        $("#hide-panalbtm").toggleClass("open");
    }
    var act2 = $("#hide-panal").hasClass("open");
    if (act2) {
        $("#hide-panal").toggleClass("open");
    }
}
span.onclick = function () {
    modal.style.display = "none";

};
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";

    }
};
function formsubmit() {
	$('#submit_btn2').prop('disabled', true);
	$('#submit_btn2').val('Sending Please Wait...');
    var proceed = true;
    var commentval = "";
    $("#contact_form2 input[required=required], #contact_form2 textarea[required=required]").each(function () {
        $(this).css("border-color", "");
        if (!$.trim($(this).val())) {
            $(this).css("border-color", "red");
            proceed = false;
			$('#submit_btn2').prop('disabled', false);
            $('#submit_btn2').val('SUBMIT');
        }
    });
    if (proceed) {
		var fullphfnme = phfnme.getNumber(intlTelInputUtils.numberFormat.E164);
		commentval = "\nComment:\n" + $("textarea[name=commentb2]").val();
        post_data = { enqproject: $("input[name=enqproject]").val(), name: $("input[name=nameb2]").val(), email: $("input[name=emailb2]").val(), phone: fullphfnme, comment: commentval };
        $.post(
            "form/server.php",
            post_data,
            function (response) {
                if (response.type == "error") {
                    output = '<div class="error">' + response.text + "</div>";
                    $('#submit_btn2').prop('disabled', false);
					$('#submit_btn2').text('Submit');
                } else {
                    output = '<div class="success">' + response.text + "</div>";
                    $("#contact_form2  input[required=true]").val("");
                    $("#divId2 #contact_body2").slideUp();
                    setTimeout(location.reload.bind(location), 1200);
                }
                $(".ajaxanswer2").hide().html(output).slideDown();
                setTimeout("jQuery('.ajaxanswer2').fadeOut('slow')", 5000);
            },
            "json"
        );
    }
    $("#contact_form2  input[required=true], #contact_form2 textarea[required=true]").keyup(function () {
        $(this).css("border-color", "");
		 $("#result").slideUp();
    });
}
$(document).ready(function () {
    $("#test").css("display", "none");
    $("#test").css("display", "block");
});
function closeeq() {
    $("#test").slideUp();
}
$(window).scroll(function () {
    var wH = $(window).height(),
        wS = $(this).scrollTop();
    var act2 = $("#hide-panal").hasClass("open");
    if (wS > wH - 550) {
        if (act2) {
            $("#hide-panal").toggleClass("open");
        }
    }
    if (wS < wH - 550) {
        if (!act2) {
            $("#hide-panal").toggleClass("open");
        }
    }
});

function closeeq() {
    $("#test").slideUp();
}

function slidersubmit() {
		
    $('#submit_btn3').prop('disabled', true);
	$('#submit_btn3').val('Sending Please Wait...');
	
    var proceed = true;
    var commentval = "";
    $("#contact_form input[required=required],#contact_form textarea[required=required]").each(function () {
        $(this).css("border-color", "");
        if (!$.trim($(this).val())) {
            $(this).css("border-color", "red");
            proceed = false;
            $('#submit_btn3').prop('disabled', false);
            $('#submit_btn3').val('SUBMIT');
        }
    });
    if (proceed) {
        commentval = "\nComment: "+$("#btntar").val()+"\n" + $("textarea[name=comment3]").val();
		var full_number = fnme.getNumber(intlTelInputUtils.numberFormat.E164);
        post_data = {enqproject: $("input[name=enqproject]").val(), name: $("input[name=nameb3]").val(), email: $("input[name=emailb3]").val(), phone: full_number, comment: commentval };
        $.post(
            "form/server.php",
            post_data,
            function (response) {
                if (response.type == "error") {
                    output = '<div class="error">' + response.text + "</div>";
                    $('#submit_btn3').prop('disabled', false);
                    $('#submit_btn3').text('SUBMIT');
                } else {
                    output = '<div class="success">' + response.text + "</div>";
                    $("#contact_form  input[required=true], #contact_form textarea[required=true]").val("");
                    $("#divId1 #contact_body1").slideUp();
                    setTimeout(location.reload.bind(location), 1200);
                }
                $(".ajaxanswer3").hide().html(output).slideDown();
                setTimeout("jQuery('.ajaxanswer3').fadeOut('slow')", 5000);
            },
            "json"
        );
    }
    $("#contact_form  input[required=true], #contact_form textarea[required=true]").keyup(function () {
        $(this).css("border-color", "");
        $("#result").slideUp();
    });
}


function mobviewform() {
		
    $('#submit_btn5').prop('disabled', true);
	$('#submit_btn5').val('Sending Please Wait...');
	
    var proceed = true;
    var commentval = "";
    $("#contact_form5 input[required=required],#contact_form5 textarea[required=required]").each(function () {
        $(this).css("border-color", "");
        if (!$.trim($(this).val())) {
            $(this).css("border-color", "red");
            proceed = false;
            $('#submit_btn5').prop('disabled', false);
            $('#submit_btn5').val('SUBMIT');
        }
    });
    if (proceed) {
        commentval = "\nComment:\n" + $("textarea[name=commentb5]").val();
		var full_number = fnmeb5.getNumber(intlTelInputUtils.numberFormat.E164);
        post_data = { enqproject: $("input[name=enqproject]").val(), name: $("input[name=nameb5]").val(), email: $("input[name=emailb5]").val(), phone: full_number, comment: commentval };
        $.post(
            "form/server.php",
            post_data,
            function (response) {
                if (response.type == "error") {
                    output = '<div class="error">' + response.text + "</div>";
                    $('#submit_btn5').prop('disabled', false);
                    $('#submit_btn5').text('Submit');
                } else {
                    output = '<div class="success">' + response.text + "</div>";
                    $("#contact_form5  input[required=true], #contact_form5 textarea[required=true]").val("");
                    $("#divId5 #contact_body5").slideUp();
                    setTimeout(location.reload.bind(location), 1200);
                }
                $(".ajaxanswer5").hide().html(output).slideDown();
                setTimeout("jQuery('.ajaxanswer5').fadeOut('slow')", 5000);
            },
            "json"
        );
    }
    $("#contact_form5  input[required=true], #contact_form5 textarea[required=true]").keyup(function () {
        $(this).css("border-color", "");
        $("#result").slideUp();
    });
}


  
