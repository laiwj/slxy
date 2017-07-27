define(["../../lib/util.js"], function(util) {
    // 定义所有相关的vmodel
    var vm = avalon.define({
        $id: "account",
        isSumbit: false,
        user_name: "",
        user_account: "",
        user_password: "",
        email_hint: true,
        newlist: [],
        uid: "",
        _id: "",
        type: "",
        _type: null,
        short_id: "",
        username: "",
        identity: "",
        toggle: false,
        list: {
            page: 1,
            force: true,
            user_id: ''
        },
        count: 0,
        bigList: [],
        smallList: [],
        userList: [],
        powerList: [],
        skipId: {},
        pager: {
            currentPage: 1,
            totalItems: 0,
            showJumper: true,
            alwaysShowNext: true,
            alwaysShowPrev: true,
            prevText: "上一页",
            nextText: "下一页",
            onJump: function(e, page) {
                var param = {
                    force: false,
                    page: page.currentPage,
                    user_id: ''
                }
                $(".pull_model").slideUp("fast");
                vm.initList(param);
            }

        },
        show: function(id) {
            var arr = id.split(",");
            var id = arr[0];
            var index = arr[1];
            if (id.charAt(0) == "g") {
                var oldpowerlist = [];
                vm.newlist = [];
                var $el = $(".J_power").eq(index);
                vm.uid = $el.attr("data_userid");
                oldpowerlist = $el.attr('_powerList').split(',');
                $("#powerPM_dialog input[type='checkbox']").each(function() {
                    $(this).removeAttr("checked");
                });
                $.each(oldpowerlist, function(index, val) {
                    $("#powerPM_dialog input:checkbox[value='" + val + "']").prop('checked', true);
                    if (val.length == 1) {
                        vm.newlist.push(val);
                    }
                });

                var dialog = avalon.vmodels[id];
            } else {
                vm._type = index - 0;
                var dialog = avalon.vmodels[id];
            }
            if (!dialog) {

            } else {
                dialog.toggle = true;
            }
        },
        $eeOpts: {
            title: "创建账号",
            width: 500,
            onConfirm: function() {
                vm.addAcount(vm._type);
            }
        },
        $ggOpts: {
            title: "操作报告",
            width: 500,
            onConfirm: function() {
                vm.savePower({ user_id: vm.uid }, vm.newlist);
            }
        },
        getPassFromCookie: function() {
            return window.$.cookie(location.host + "_userinfo");
        },
        clearPassToCookie: function() {
            window.$.cookie(location.host + "_userinfo", "", { path: "/" });
        },
        toggle_hiddle: function() {
            vm.toggle = !vm.toggle
        },
        logout: function() {
            vm.clearPassToCookie();
            window.location.href = "";
        },
        initList: function(obj, objDom) {
            util.lockScreen();
            $.post('/user/list', obj, function(data) {
                util.hideLock();
                util.resResult(data);
                if (data.data.data.length == 0) {
                    if (obj.user_id) {
                        objDom.text('暂无数据');
                        vm.list.user_id = '';
                        vm.list.page = 1;
                    } else {
                        $(".table_li").hide();
                        $(".null-model").show();
                    }
                } else {

                    $(".null-model").hide();
                    if (obj.user_id) {
                        vm.smallList = data.data.data;
                        vm.list.user_id = '';
                        vm.list.page = 1;
                    } else {
                        vm.count = data.data.count;
                        if (vm.type == "2") {
                            vm.userList = data.data.data;
                        } else if (vm.type == "1") {
                            // $(".table_li").show();
                            vm.bigList = data.data.data;
                        }
                        if (obj.page == 1) {
                            var widget = avalon.vmodels.hh
                            if (widget) {
                                widget.totalItems = data.data.count;
                            }

                        }
                    }
                }

                vm.domListener();
            })
        },
        domListener: function() {
            /*展开子账号*/
            $(".J_click_pull").off().on('click', function() {
                var num = $(this).text().trim();
                if (num == "0") {
                    util.tips("没有子账号");
                    return;
                };
                var _this = $(this).parent().parent().next()
                if (_this.is(":hidden")) {
                    $(".pull_model").slideUp("fast");
                    var objDom = $(this).find('.smaillList');
                    vm.list.user_id = $(this).attr('_id');
                    vm.list.page = '';
                    vm.initList(vm.list.$model, objDom);
                    _this.slideDown("fast");
                } else {
                    vm.smallList = [];
                    _this.slideUp("fast");
                }

            });
            /*跳转用户列表页*/
            $(".J_click_skip").off().on('click', function() {
                var param = $(this).attr("_id");
                window.location.href = "/#!/userInfo/" + param;
            });

        },
        addAcount: function(type) {
            if (vm.user_name == "" || vm.user_account == "" || vm.account == "") {
                util.tips("请输入完整信息");
                return;
            } else if (vm.email_hint) {
                util.tips("手机或邮箱格式有误");
                return;
            } else {
                // vm.isSumbit = false;
            }
            if (vm.isSumbit) {
                return;
            }
            var bean = {
                username: vm.user_username,
                account: vm.user_account,
                password: vm.user_password - 0
            }
            vm.isSumbit = true;

            $.post('/user/regist', bean, function(data) {
                vm.isSumbit = false;
                util.resResult(data, "添加账户成功", function() {
                    if (type == 0) {
                        vm.initList(vm.list.$model);
                    }
                });

            })
        },
        savePower: function(param, oldpowerlist) {
            var newpower = [];

            $.each($("#powerPM_dialog").find("input[type='checkbox']"), function(index) {
                if ($(this).is(':checked')) {
                    newpower.push($(this).attr("value"))
                }

            });
            var contactArr = [];
            $.each(newpower, function(i) {
                if ($.inArray(newpower[i], oldpowerlist) > -1) {
                    contactArr.push(newpower[i]);
                }
            })

            var remove = [];
            $.each(oldpowerlist, function(i) {
                if ($.inArray(oldpowerlist[i], contactArr) == -1) {
                    remove.push(oldpowerlist[i]);
                }
            })
            var add = [];
            $.each(newpower, function(i) {
                if ($.inArray(newpower[i], contactArr) == -1) {
                    add.push(newpower[i]);
                }
            })



            $.post("/user/power/add", { user_id: param.user_id, power_del: remove.join(","), power: add.join(","), source: 'pm' }, function(data) {
                util.resResult(data, "设置成功", function() {
                    var widget = avalon.vmodels.hh
                    if (widget) {
                        var obj = {
                            page: widget.currentPage,
                            user_id: ""
                        }
                    }
                    vm.initList(obj);
                });

            })
        }
    });

    vm.$watch("user_name", function() {
        if ((/^[a-z0-9_-]{1,16}$/).test(vm.user_username)) {
            $('.user_hint').html("✔").css("color", "green");
            // vm.password = false;
        } else {
            $('.user_hint').html("×").css("color", "red");
            // vm.password = true;
        }
    })
    vm.$watch("user_account", function() {
        if ((/^[a-z\d]+(\.[a-z\d]+)*@([\da-z](-[\da-z])?)+(\.{1,2}[a-z]+)+$/).test(vm.user_account)) {
            $('.email_hint').html("✔").css("color", "green");
            vm.email_hint = false;
        } else if ((/^1[34578]\d{9}$/).test(vm.user_account)) {
            $('.email_hint').html("✔").css("color", "green");
            vm.email_hint = false;
        } else {
            $('.email_hint').html("×").css("color", "red");
            vm.email_hint = true;
        }

    })
    vm.$watch("user_password", function() {
        if ((/^[a-z0-9_-]{1,16}$/).test(vm.user_password)) {
            $('.password_hint').html("✔").css("color", "green");
            // vm.password = false;
        } else {
            $('.password_hint').html("×").css("color", "red");
            // vm.password = true;
        }
    })
    vm.$skipArray = ["pager"]

    return avalon.controller(function($ctrl) {
        avalon.scan(document.body);
        // 视图渲染后，意思是avalon.scan完成
        $ctrl.$onRendered = function() {
            document.title = '数联寻英';

            $('#side_accordion div').removeClass('md-accent-bg').eq(4).addClass('md-accent-bg');

            //生成列表
            vm.initList(vm.list.$model);


        };
        // 进入视图
        $ctrl.$onEnter = function(param, rs, rj) {
            var userinfo = vm.getPassFromCookie();
            var userBean = userinfo.split('|');
            vm._id = userBean[0];
            vm.type = userBean[1];
            vm.identity = vm.type == "1" ? "管理员" : vm.type == "2" ? "公司" : "业务员";
            vm.powerList = vm.type == "1" ? [{ key: "添加账户", val: 1 }, { key: "数据干预", val: 2 }, { key: "添加数据解释", val: 3 }, { key: "报告标签配置", val: 4 }, { key: "系统通知发送", val: 5 }, { key: "权限修改", val: 6 }] : [{ key: "添加数据解释", val: 3 }, { key: "权限修改", val: 6 }];
            vm.short_id = userBean[2];
            vm.username = userBean[3];

        };
        // 对应的视图销毁前
        $ctrl.$onBeforeUnload = function() {
            $(".oni-dialog").empty();
        };
        $ctrl.$vmodels = [vm];
    })
});