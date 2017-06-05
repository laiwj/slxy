/**
 * Created by WangMing on 15/12/9.
 */
define([], function() {
    // 定义所有相关的 vmodel
    var vm = avalon.define({
        $id: "login",
        isSumbit: false,
        aaa: "",
        initEditData: function() {
            var userStr = vm.getPassFromCookie();
            if (userStr) {
                var userBean = userStr.split('|');
                $('#login_account').val(userBean[0]);
                $('#login_password').val(userBean[1]);
                if (userBean[1]) {
                    $('.J_password_remember').attr("checked", "checked");
                }
            }

        },
        initDomListener: function() {
            $('#J_login').on('click', function() {
                vm.loginFun();
            });

            $(document).on('keydown', function(e) {
                if (e.keyCode == 13) {
                    // $("#login_login_email").blur();
                    //基础验证
                    // var validResult = xy_validator.autoValidator($("#v_login_emai"));
                    // if (!validResult) {
                    //     return false;
                    // }
                    $('#J_login').click();
                }
            });
            // $("#login_login_email").on('blur', function() {
            //     //基础验证
            //     var validResult = xy_validator.autoValidator($("#v_login_emai"));
            //     if (!validResult) {
            //         return false;
            //     }
            // });
        },
        loginFun: function() {
            if (vm.isSumbit) {
                return;
            }
            //基础验证
            // var validResult = xy_validator.autoValidator($("#login_form"));

            var passwordnot = $("#login_password").val();

            // if (!validResult) {
            //     return false;
            // }


            $("#J_login").text("正在登录...");
            //通过验证,获取bean
            // var bean = xy_beanUtil.creatBean("login_", [
            //     { name: "account" },
            //     { name: "password" }
            // ])

            //发送数据到后台
            var url = "../../../data.json";
            vm.isSumbit = true;
            $.get(url, function(jsonObj) {
                vm.isSumbit = false;
                $("#J_login").text("登录");
                //登录失败
                // if (jsonObj.code !== 0) {
                //     $(".alert-login").text(jsonObj.msg).show();
                //     return false;
                // }
                console.log(jsonObj);
                if (jsonObj.passname !== "laiwanjun") {
                    $(".alert-login").text(jsonObj.msg).show();
                    return false;
                }

                //登录成功
                var passInfo = jsonObj.passname + "|" + jsonObj.password;
                if (document.getElementById('J_password_remember').checked) {
                    me.savePassToCookie(passInfo);
                    console.log("存密码");
                } else {
                    //清除cookie内明文密码
                    vm.clearPassToCookie();
                }

                //清除上一次的用户信息
                window.$.cookie(location.host + "_userInfoResult", "");

                // 保存身份
                $("#userinfoType").val(jsonObj.type);

                window.location.href = "/#!/report";
            });
        },
        savePassToCookie: function(passInfo) {
            window.$.cookie(location.host + "_password", passInfo, { expires: 365 });
        },
        getPassFromCookie: function() {
            console.log(window.$.cookie);
            return window.$.cookie(location.host + "_password");
        },
        clearPassToCookie: function() {
            window.$.cookie(location.host + "_password", "", { path: "/" });
        },
        click: function() {
            vm.$fire("all!aaa", "sss");
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