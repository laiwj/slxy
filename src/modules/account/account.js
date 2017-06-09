define([], function() {
    var widget = avalon.vmodels.$opts;

    // 定义所有相关的vmodel
    var vm = avalon.define({
        $id: "account",
        _id: "",
        type: "",
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
            // validationVM.resetAll();
            var dialog = avalon.vmodels[id];
            if (!dialog) {

            } else {
                dialog.toggle = true;
            }
        },
        $eeOpts: {
            title: "创建账号",
            width: 500,
            onConfirm: function() {
                alert("你点击了确定");
            }
        },
        $ffOpts: {
            title: "添加子账号",
            width: 500,
            onConfirm: function() {
                alert("你点击了确定");
            }
        },
        $ggOpts: {
            title: "操作报告",
            width: 500,
            onConfirm: function() {
                alert("你点击了确定");
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
            $.post('http://10.101.1.171:10110/user/list', obj, function(data) {
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
        domListener: function() {
            /*展开子账号*/
            $(".J_click_pull").off().on('click', function() {
                var me = this;
                $(this).parent().parent().next().slideToggle("fast", function() {
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
            /*创建账号*/
            $(".J_create_account").off().on('click', function() {
                me.addAcountBox($(this).attr('_title'), $(this).attr('_type'));
            });
            $(".J_power").off().on("click", function() {
                var uid = $(this).attr("data-userid");
                var pl = $(this).attr('_powerList');
                me.boxPower(uid, pl);
            })

        },
    });

    vm.$skipArray = ["pager"]

    return avalon.controller(function($ctrl) {
        avalon.scan(document.body);
        // 视图渲染后，意思是avalon.scan完成
        $ctrl.$onRendered = function() {

            $('#side_accordion div').removeClass('md-accent-bg').each(function(i, v) {
                if ($(this).children().attr("href") == location.hash) {
                    $(this).addClass('md-accent-bg');
                    return false; // 跳出循环
                }
            });

            //生成列表
            vm.initList(vm.list.$model);


        };
        // 进入视图
        $ctrl.$onEnter = function(param, rs, rj) {
            var userinfo = vm.getPassFromCookie();
            var userBean = userinfo.split('|');
            vm._id = userBean[0];
            vm.type = userBean[1];
            vm.short_id = userBean[2];
            vm.username = userBean[3];

        };
        // 对应的视图销毁前
        $ctrl.$onBeforeUnload = function() {


        };
        $ctrl.$vmodels = [vm];
    })
});