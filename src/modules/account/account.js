define(["../../lib/util.js"], function(util) {
    // 定义所有相关的vmodel
    var vm = avalon.define({
        $id: "account",
        isSumbit: false,
        user_username: null,
        user_account: null,
        user_password: null,
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
                    // console.log(param);
                vm.initList(param);
            }

        },
        show: function(id) {
            var arr = id.split(",");
            var id = arr[0];
            var index = arr[1];
            if (id.charAt(0) == "g") {
                for (var i = 0; i < $(".J_power").length; i++) {
                    if (i == index) {
                        $(this).attr("isClick", "yes");
                        break;
                    }
                }
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
            onOpen: function() {
                var oldpowerlist = [];
                $(".J_power").each(function(i, v) {
                    if ($(v).attr("isClick")) {
                        vm.uid = $(v).attr("data_userid");
                        oldpowerlist = $(v).attr('_powerList').split(',');
                        $.each(oldpowerlist, function(index, val) {
                            $.each($("#powerPM_dialog input[type='checkbox']"), function(i, v) {
                                var boxval = v.value;
                                if (boxval == val) {
                                    $(this).attr('checked', 'checked');
                                    vm.newlist.push(val);
                                }
                            });

                        });

                        $(v).attr("isClick", "");
                    }
                });
            },
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
                            var widget = avalon.vmodels.pp
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

            // console.log({ user_id: param.user_id, power_del: remove.join(","), power: add.join(","), source: 'pm' });


            $.post("/user/power/add", { user_id: param.user_id, power_del: remove.join(","), power: add.join(","), source: 'pm' }, function(data) {
                util.resResult(data, "设置成功", function() {
                    vm.initList(vm.list.$model);
                    var widget = avalon.vmodels.pp
                    if (widget) {
                        widget.currentPage = 1;
                    }
                });

            })
        }
    });

    vm.$skipArray = ["pager"]

    return avalon.controller(function($ctrl) {
        avalon.scan(document.body);
        // 视图渲染后，意思是avalon.scan完成
        $ctrl.$onRendered = function() {
            document.title = '数联寻英';
            // $('#side_accordion div').removeClass('md-accent-bg').each(function(i, v) {
            //     if ($(this).children().attr("href") == location.hash) {
            //         $(this).addClass('md-accent-bg');
            //         return false; // 跳出循环
            //     }
            // });
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
            vm.short_id = userBean[2];
            vm.username = userBean[3];

        };
        // 对应的视图销毁前
        $ctrl.$onBeforeUnload = function() {


        };
        $ctrl.$vmodels = [vm];
    })
});