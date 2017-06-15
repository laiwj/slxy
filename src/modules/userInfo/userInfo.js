define(["../../lib/util.js"], function(util) {
    // 定义所有相关的vmodel
    var vm = avalon.define({
        $id: "userInfo",
        isSumbit: false,
        user_username1: null,
        user_account1: null,
        user_msg: null,
        newlist: [],
        uid: "",
        _id: "",
        type: "",
        short_id: "",
        username: "",
        identity: "",
        toggle: false,
        count: 0,
        userList: [],
        list: {},
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
                        user_id: vm.list.id ? vm.list.id : ''
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
                var dialog = avalon.vmodels[id];
            }
            if (!dialog) {

            } else {
                dialog.toggle = true;
            }
        },
        $ccOpts: {
            title: "邀请用户",
            width: 500,
            onOpen: function() {
                vm.user_msg = "http://localhost:8081/register?id=" + vm.short_id;
            },
            onConfirm: function() {
                alert("你点击了确定");
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
                            $.each($("#powerB_dialog input[type='checkbox']"), function(i, v) {
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
        initList: function(obj) {
            util.lockScreen();
            $.post('http://10.101.1.171:10110/user/list/b', obj, function(data) {
                util.hideLock();
                util.resResult(data);
                if (data.data.data.length == 0) {
                    $(".infolist").hide();
                    $(".null-model").show();
                } else {
                    vm.count = data.data.count;
                    vm.userList = data.data.data;
                    $(".infolist").show();
                    $(".null-model").hide();

                    if (obj.page == 1) {
                        var widget = avalon.vmodels.bb
                        if (widget) {
                            widget.totalItems = data.data.count;
                        }
                    }

                }

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


            $.post("http://10.101.1.171:10110/user/power/add", { user_id: param.user_id, power_del: remove.join(","), power: add.join(","), source: 'pm' }, function(data) {
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
        // 视图渲染后，意思是avalon.scan完成
        $ctrl.$onRendered = function() {
            // 定义title
            document.title = '数联寻英';
            // if (location.hash.search("#!/userInfo")) {
            //     console.log(111);
            // }
            // $('#side_accordion div').removeClass('md-accent-bg').each(function(i, v) {

            //     if ($(this).children().attr("href") == location.hash) {
            //         $(this).addClass('md-accent-bg');
            //         return false; // 跳出循环
            //     }
            // });
            $('#side_accordion div').removeClass('md-accent-bg').eq(2).addClass('md-accent-bg');

            //生成列表
            // console.log(vm.list.id)
            vm.initList({ page: 1, user_id: vm.list.id ? vm.list.id : '' });


        };
        // 进入视图
        $ctrl.$onEnter = function(param, rs, rj) {
            // console.log(param.id)
            vm.list = param;
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