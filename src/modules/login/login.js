define([], function() {
    var validationVM
        // 定义所有相关的 vmodel
    var vm = avalon.define({
        $id: "login",
        isSumbit: false,
        account: "",
        password: null,
        email_hint: true,
        initEditData: function() {
            var userStr = vm.getPassFromCookie();
            if (userStr) {
                var userBean = userStr.split('|');
                vm.account = userBean[0];
                vm.password = userBean[1];
                if (userBean[1]) {
                    $('.J_password_remember').attr("checked", "checked");
                }
            }

        },
        initDomListener: function() {
            $(document).on('keydown', function(e) {
                if (e.keyCode == 13) {
                    $('#J_login').click();
                }
            });
            $('#login_password').blur(function() {
                if ((/^[a-z0-9_-]{1,16}$/).test($("#login_password").val())) {
                    $('.password_hint').html("✔").css("color", "green");
                    // vm.password = false;
                } else {
                    $('.password_hint').html("×").css("color", "red");
                    // vm.password = true;
                }
            });
            // /^[a-z\d]+(\.[a-z\d]+)*@([\da-z](-[\da-z])?)+(\.{1,2}[a-z]+)+$/
            $('#login_account').blur(function() {
                if ($("#login_account").val() == "admin") {
                    $('.email_hint').html("✔").css("color", "green");
                    vm.email_hint = false;
                } else if ((/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/).test($("#login_account").val())) {
                    $('.email_hint').html("✔").css("color", "green");
                    vm.email_hint = false;
                } else if ((/^1[34578]\d{9}$/).test($("#login_account").val())) {
                    $('.email_hint').html("✔").css("color", "green");
                    vm.email_hint = false;
                } else {
                    $('.email_hint').html("×").css("color", "red");
                    vm.email_hint = true;
                }
            });
        },
        loginFun: function() {
            if ($("#login_password").val() == "" || $("#login_account").val() == "") {
                $(".alert-login").text("请输入账号或密码").show();
                setTimeout(function() {
                    $(".alert-login").hide();
                }, 2000);
                return;
            } else if (vm.email_hint) {
                $(".alert-login").text("邮箱或手机格式有误").show();
                setTimeout(function() {
                    $(".alert-login").hide();
                }, 2000);
                return;
            } else {
                // vm.isSumbit = false;
            }
            if (vm.isSumbit) {
                return;
            }
            var passwordnot = $("#login_password").val();

            $("#J_login").text("正在登录...");
            var bean = {
                    "account": vm.account,
                    "password": vm.password
                }
                //发送数据到后台
            var url = "/user/login";
            vm.isSumbit = true;
            $.post(url, bean, function(jsonObj) {
                vm.isSumbit = false;
                $("#J_login").text("登录");
                //登录失败
                if (jsonObj.code !== 0) {
                    $(".alert-login").text(jsonObj.msg).show();
                    setTimeout(function() {
                        $(".alert-login").hide();
                    }, 1000);
                    return false;
                }

                //登录成功
                // 保存用户信息
                var userInfo = jsonObj.data._id + "|" + jsonObj.data.type + "|" + jsonObj.data.short_id + "|" + jsonObj.data.username;
                window.$.cookie(location.host + "_userinfo", userInfo, { expires: 365 });
                var passInfo = jsonObj.data.username + "|" + jsonObj.data.password;
                if (document.getElementById('J_password_remember').checked) {
                    vm.savePassToCookie(passInfo);
                } else {
                    //清除cookie内明文密码
                    vm.clearPassToCookie();
                }

                //清除上一次的用户信息
                window.$.cookie(location.host + "_userInfoResult", "");

                window.location.href = "/#!/report";
            });
        },
        savePassToCookie: function(passInfo) {
            window.$.cookie(location.host + "_password", passInfo, { expires: 365 });
        },
        getPassFromCookie: function() {
            return window.$.cookie(location.host + "_password");
        },
        clearPassToCookie: function() {
            window.$.cookie(location.host + "_password", "", { path: "/" });
        }
    });


    return avalon.controller(function($ctrl) {
        // 视图渲染后，意思是avalon.scan完成
        $ctrl.$onRendered = function() {
            // 定义title
            document.title = '登录';
            // 登录框信息的显示与否
            vm.initEditData();
            // 页面中元素时间监听
            vm.initDomListener();

        };

        // 进入视图
        $ctrl.$onEnter = function(param, rs, rj) {

        };
        // 对应的视图销毁前
        $ctrl.$onBeforeUnload = function() {

        };
        $ctrl.$vmodels = [vm];
    })



});