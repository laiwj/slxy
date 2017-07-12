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
        serviceName: "请选择客户名称",
        serviceNameList: [],
        currentPage: 1,
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
                vm.currentPage = page.currentPage;
                var param = {
                    force: false,
                    page: page.currentPage,
                    user_id: vm.list.id ? vm.list.id : ''
                }
                vm.initList(param, function() {
                    // 存储客户名称列表
                    vm.serviceNameList = [];
                    vm.serviceName = "请选择客户名称";
                    $.each(vm.userList, function(i, v) {
                        vm.serviceNameList.push({ id: v.pm_user_id, name: v.pm_user_name });
                    })
                    vm.serviceNameList = vm.unique(vm.serviceNameList);
                });
            }

        },
        show: function(id) {
            var arr = id.split(",");
            var id = arr[0];
            var index = arr[1];
            if (id.charAt(0) == "d") {
                var oldpowerlist = [];
                vm.newlist = [];
                var $el = $(".J_power").eq(index);
                vm.uid = $el.attr("data_userid");
                oldpowerlist = $el.attr('_powerList').split(',');
                $("#powerB_dialog input[type='checkbox']").each(function() {
                    $(this).removeAttr("checked");
                });
                $.each(oldpowerlist, function(index, val) {
                    $("#powerB_dialog input:checkbox[value='" + val + "']").prop('checked', true);
                    if (val.length == 3) {
                        vm.newlist.push(val);
                    }
                });
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
        $ddOpts: {
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
        initList: function(obj, callback) {
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

                    // if (obj.page == 1) {
                    var widget = avalon.vmodels.pp
                    if (widget) {
                        widget.totalItems = data.data.count;
                    }
                    // }

                }
                try {
                    callback();
                } catch (error) {

                }

            })

        },
        savePower: function(param, oldpowerlist) {
            var newpower = [];
            $.each($("#powerB_dialog").find("input[type='checkbox']"), function(index) {
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

            $.post("http://10.101.1.171:10110/user/power/add", { user_id: param.user_id, power_del: remove.join(","), power: add.join(","), source: 'b' }, function(data) {
                util.resResult(data, "设置成功", function() {
                    var widget = avalon.vmodels.pp
                    if (widget) {
                        if (vm.serviceName == "请选择客户名称") {
                            var obj = {
                                force: false,
                                page: widget.currentPage,
                                user_id: "",
                            }
                        } else {
                            var obj = {
                                page: 1,
                                user_id: vm.list.id ? vm.list.id : '',
                                pm_user_id: vm.serviceName
                            }
                        }

                    }
                    vm.initList(obj);
                });

            })
        },
        unique: function(opt) {
            var kv = {}
            for (var i = 0; i < opt.length;) {
                if (kv[opt[i].id + ',' + opt[i].name]) {
                    opt.splice(i, 1);
                } else {
                    kv[opt[i].id + ',' + opt[i].name] = true;
                    i++;
                }
            }
        }
    });
    vm.$skipArray = ["pager"]

    vm.$watch("serviceName", function() {
        if (vm.serviceName == "请选择客户名称") {
            vm.initList({ page: vm.currentPage, user_id: vm.list.id ? vm.list.id : '' }, function() {
                // 存储客户名称列表
                vm.serviceNameList = [];
                vm.serviceName = "请选择客户名称";
                $.each(vm.userList, function(i, v) {
                    vm.serviceNameList.push({ id: v.pm_user_id, name: v.pm_user_name });
                })
                vm.serviceNameList = vm.unique(vm.serviceNameList);
            });
        } else {
            vm.initList({ page: 1, user_id: vm.list.id ? vm.list.id : '', pm_user_id: vm.serviceName });
        }
    })
    return avalon.controller(function($ctrl) {
        // 视图渲染后，意思是avalon.scan完成
        $ctrl.$onRendered = function() {
            // 定义title
            document.title = '数联寻英';

            $('#side_accordion div').removeClass('md-accent-bg').eq(3).addClass('md-accent-bg');

            //生成列表
            vm.initList({ page: 1, user_id: vm.list.id ? vm.list.id : '' }, function() {
                // 存储客户名称列表
                vm.serviceNameList = [];
                vm.serviceName = "请选择客户名称";
                $.each(vm.userList, function(i, v) {
                    vm.serviceNameList.push({ id: v.pm_user_id, name: v.pm_user_name });
                })
                vm.serviceNameList = vm.unique(vm.serviceNameList);
            });



        };
        // 进入视图
        $ctrl.$onEnter = function(param, rs, rj) {
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
            $(".oni-dialog").empty();
        };
        $ctrl.$vmodels = [vm];
    })
});