define([], function () {
    var widget = avalon.vmodels.$opts;

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
        toggle: false,
        list: {
            page: 1,
            force: true,
            user_id: ''
        },
        count: 0,
        bigList: [],
        smallList: [],
        pager: {
            currentPage: 1,
            totalItems: 150,
            showJumper: true,
            alwaysShowNext: true,
            alwaysShowPrev: true,
            prevText: "上一页",
            nextText: "下一页",
            onJump: function (e, page) {
                var param = {
                    force: false,
                    page: page.currentPage,
                    user_id: ''
                }
                // console.log(param);
                vm.initList(param);
            }

        },
        show: function (id) {
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
            onConfirm: function () {
                vm.addAcount(vm._type);
            }
        },
        $ggOpts: {
            title: "操作报告",
            width: 500,
            onOpen: function () {
                var oldpowerlist = [];
                $(".J_power").each(function (i, v) {
                    if ($(v).attr("isClick")) {
                        vm.uid = $(v).attr("data_userid");
                        oldpowerlist = $(v).attr('_powerList').split(',');
                        $.each(oldpowerlist, function (index, val) {
                            $.each($("#powerPM_dialog input[type='checkbox']"), function (i, v) {
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
            onConfirm: function () {
                vm.savePower({ user_id: vm.uid }, vm.newlist);
            }
        },
        getPassFromCookie: function () {
            return window.$.cookie(location.host + "_userinfo");
        },
        clearPassToCookie: function () {
            window.$.cookie(location.host + "_userinfo", "", { path: "/" });
        },
        toggle_hiddle: function () {
            vm.toggle = !vm.toggle
        },
        logout: function () {
            vm.clearPassToCookie();
            window.location.href = "";
        },
        initList: function (obj, objDom) {
            $.post('http://rm.xunying.me/user/list', obj, function (data) {
                if (data.data.data.length == 0) {
                    if (obj.user_id) {
                        objDom.text('暂无数据');
                        me.list.user_id = '';
                        me.list.page = 1;
                    } else {
                        $(".table_li").hide();
                        $(".null-model").show();
                    }
                } else {
                    $(".table_li").show();
                    $(".null-model").hide();
                    if (obj.user_id) {
                        vm.smallList = data.data.data;
                        vm.list.user_id = '';
                        vm.list.page = 1;
                    } else {
                        vm.count = data.data.count;
                        vm.bigList = data.data.data;

                        // if (vm.type == "2") {
                        //     $(".company_model").show();
                        //     $(".admin_model").hide();
                        // } else if (vm.type == "1") {
                        //     $(".company_model").hide();
                        //     $(".admin_model").show();
                        // }
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
        domListener: function () {
            /*展开子账号*/
            $(".J_click_pull").off().on('click', function () {
                var me = this;
                $(this).parent().parent().next().slideToggle("fast", function () {
                    if ($(this).is(":hidden")) {
                        vm.smallList = [];
                    } else {
                        var objDom = $(this).find('.smaillList');
                        vm.list.user_id = $(me).attr('_id');
                        vm.list.page = '';
                        vm.initList(vm.list.$model, objDom);
                    }
                });

            });

        },
        addAcount: function (type) {

            if (vm.isSumbit) {
                return;
            }
            var bean = {
                username: vm.user_username,
                account: vm.user_account,
                password: vm.user_password - 0
            }
            vm.isSumbit = true;

            $.post('http://rm.xunying.me/user/regist', bean, function (data) {
                vm.isSumbit = false;

                if (data.code == 0) {
                    // jTip('添加成功');
                    if (type == 0) {
                        vm.initList(vm.list.$model);
                    }
                } else {
                    alertDIV(data.msg);
                }


            })
        },
        savePower: function (param, oldpowerlist) {
            var newpower = [];
            $.each($("#powerPM_dialog").find("input[type='checkbox']"), function (index) {
                if ($(this).is(':checked')) {
                    newpower.push($(this).attr("value"))
                }

            });
            var contactArr = [];
            $.each(newpower, function (i) {
                if ($.inArray(newpower[i], oldpowerlist) > -1) {
                    contactArr.push(newpower[i]);
                }
            })

            var remove = [];
            $.each(oldpowerlist, function (i) {
                if ($.inArray(oldpowerlist[i], contactArr) == -1) {
                    remove.push(oldpowerlist[i]);
                }
            })
            var add = [];
            $.each(newpower, function (i) {
                if ($.inArray(newpower[i], contactArr) == -1) {
                    add.push(newpower[i]);
                }
            })

            // console.log({ user_id: param.user_id, power_del: remove.join(","), power: add.join(","), source: 'pm' });


            $.post("http://rm.xunying.me/user/power/add", { user_id: param.user_id, power_del: remove.join(","), power: add.join(","), source: 'pm' }, function (data) {
                console.log(data);
                // jTip(STATICMSG["ok"]);
                vm.initList(vm.list.$model);


            })
        }
    });

    vm.$skipArray = ["pager"]

    return avalon.controller(function ($ctrl) {
        avalon.scan(document.body);
        // 视图渲染后，意思是avalon.scan完成
        $ctrl.$onRendered = function () {

            $('#side_accordion div').removeClass('md-accent-bg').each(function (i, v) {
                if ($(this).children().attr("href") == location.hash) {
                    $(this).addClass('md-accent-bg');
                    return false; // 跳出循环
                }
            });

            //生成列表
            vm.initList(vm.list.$model);


        };
        // 进入视图
        $ctrl.$onEnter = function (param, rs, rj) {
            var userinfo = vm.getPassFromCookie();
            var userBean = userinfo.split('|');
            vm._id = userBean[0];
            vm.type = userBean[1];
            vm.short_id = userBean[2];
            vm.username = userBean[3];

        };
        // 对应的视图销毁前
        $ctrl.$onBeforeUnload = function () {


        };
        $ctrl.$vmodels = [vm];
    })
});