define([], function() {
    'use strict';
    var xy_validator = function() {
        // user
        var user_Boolean = false;
        var password_Boolean = false;
        var varconfirm_Boolean = false;
        var emaile_Boolean = false;
        var Mobile_Boolean = false;
        // $('.reg_user').blur(function() {
        //     if ((/^[a-z0-9_-]{4,8}$/).test($(".reg_user").val())) {
        //         $('.user_hint').html("✔").css("color", "green");
        //         user_Boolean = true;
        //     } else {
        //         $('.user_hint').html("×").css("color", "red");
        //         user_Boolean = false;
        //     }
        // });
        // password
        $('#login_password').blur(function() {
            if ((/^[a-z0-9_-]{6,16}$/).test($("#login_password").val())) {
                $('.password_hint').html("✔").css("color", "green");
                password_Boolean = false;
            } else {
                $('.password_hint').html("×").css("color", "red");
                password_Boolean = true;
            }
        });


        // // password_confirm
        // $('.reg_confirm').blur(function() {
        //     if (($(".reg_password").val()) == ($(".reg_confirm").val())) {
        //         $('.confirm_hint').html("✔").css("color", "green");
        //         varconfirm_Boolean = true;
        //     } else {
        //         $('.confirm_hint').html("×").css("color", "red");
        //         varconfirm_Boolean = false;
        //     }
        // });


        // Email
        $('#login_account').blur(function() {
            if ((/^[a-z\d]+(\.[a-z\d]+)*@([\da-z](-[\da-z])?)+(\.{1,2}[a-z]+)+$/).test($("#login_account").val())) {
                $('.email_hint').html("✔").css("color", "green");
                emaile_Boolean = false;
            } else if ((/^1[34578]\d{9}$/).test($("#login_account").val())) {
                $('.email_hint').html("✔").css("color", "green");
                emaile_Boolean = false;
            } else {
                $('.email_hint').html("×").css("color", "red");
                emaile_Boolean = true;
            }
        });


        // // Mobile
        // $('#login_account').blur(function() {
        //     if ((/^1[34578]\d{9}$/).test($("#login_account").val())) {
        //         $('.email_hint').html("✔").css("color", "green");
        //         Mobile_Boolean = true;
        //     } else {
        //         $('.email_hint').html("×").css("color", "red");
        //         Mobile_Boolean = false;
        //     }
        // });


        // click
        $('#J_login').click(function() {
            if ($("#login_password").val() == "" || $("#login_account").val() == "") {
                $(".alert-login").text("请输入账号或密码").show();
                $("#J_login").attr("disabled", true);
            } else if (password_Boolea && emaile_Boolean) {
                $(".alert-login").text("账号或密码错误").show();
                $("#J_login").attr("disabled", true);
            } else {
                $("#J_login").attr("disabled", false);
            }
        });

    }
    return xy_validator;
});