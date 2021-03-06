define(["../../lib/util.js", "../../lib/positionSelect.js", "../../lib/jquery.position.select.js"], function(util, positionSelect, xy_select) {
    var validationVM;
    // 定义所有相关的 vmodel
    var vm = avalon.define({
        $id: "compensation",
        _id: "",
        type: "",
        short_id: "",
        username: "",
        identity: "",
        toggle: false,
        api_url: "",
        data_id: "",
        params: {},
        info: [],
        hasInfo: "请添加分析说明...",
        J_compensationtype: "职能",
        c_function: "产品,设计,开发",
        c_industry: "",
        c_region: "",
        c_experience: "",
        c_time: "近一个月",
        report_info: "",
        data_disturb: [],
        data: {},
        show: function(id) {
            // validationVM.resetAll();
            if (id.charAt(0) == "b") {
                var arr = id.split(",");
                var id = arr[0];
                var index = arr[1];
                if (index) {
                    for (var i = 0; i < $(".J_edit_desc").length; i++) {
                        if (i == index) {
                            $(this).attr("isClick", "yes");
                            break;
                        }
                    }
                } else {
                    $("#report_info").attr("isClick", "yes");
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
        $aaOpts: {
            title: "数据干预",
            width: 500,
            onConfirm: function() {
                var tab = vm.J_chartstype == "人才分布" ? "talentdistribution" : param.tab == "人才流动" ? "talentflow" : "supplydemand";
                var bean = { data: JSON.stringify(vm.data_disturb), data_id: vm.data_id };
                $.post("/api/data/cheat", bean, function(result) {
                    util.resResult(result, "数据干预成功", function() {
                        $("#J_charts_data").val(JSON.stringify(vm.data_disturb));
                        $("#report_iframe").attr("src", "../lib/resource-report/" + tab + ".html");
                    });
                })
            }
        },
        $bbOpts: {
            title: "添加分析说明",
            width: 500,
            onConfirm: function() {
                if ($("#report_info").attr("isClick")) {
                    vm.saveDesc();
                    $("#report_info").attr("isClick", "");
                } else {
                    $(".J_edit_desc").each(function(i, v) {
                        if ($(v).attr("isClick")) {
                            vm.saveDesc(v);
                            $(v).attr("isClick", "");
                        }
                    });
                }

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
        analysisData: function(obj) {
            if (vm.c_function == "") {
                util.tips("请选择" + vm.J_compensationtype);
                return false;
            }
            var param = vm.getBean();
            // var tab = param.tab == "人才分布" ? "talentdistribution" : param.tab == "人才流动" ? "talentflow" : "supplydemand";
            util.lockScreen();
            $.post(param.url, param.bean, function(result) {
                util.hideLock();
                util.resResult(result);
                vm.data_disturb = result.data.data.data;
                $("#J_charts_data").val(JSON.stringify(result.data.data.data)).attr("charts_type", param.charts_type).attr("bean", JSON.stringify(param.bean));
                $("#report_iframe").attr("src", "../lib/resource-report/remuneration.html");
                $("#report_info").attr("api_url", result.data.data.api_url);
                if (result.data.info.length > 0) {
                    $("#report_info").attr("user_id", result.data.info[0].pm_user_id);
                    $("#report_info").attr("data_id", result.data.info[0]._id);
                    if (vm.type == "3") {
                        $(".charts-warp").val('').val(result.data.info[0].info);
                        vm.hasInfo = result.data.info[0].info;
                    }
                } else {
                    $("#report_info").attr("data_url", "").attr("data_id", "").val('');
                    if (vm.type == "3") {
                        $(".charts-warp").val('');
                        vm.hasInfo = "请添加分析说明...";
                    }
                }

                //超管与公司权限
                if (vm.type != "3") {
                    vm.info = result.data.info;
                }
                vm.params = result.data.data.params;
                vm.api_url = result.data.data.api_url;
                vm.data_id = result.data.data._id;


            })
        },
        getBean: function() {
            var tab = vm.J_compensationtype;
            var bean = {};
            var url = "";
            var charts_type = "";
            switch (tab) {
                case "职能":
                    bean = {
                        name: vm.c_function,
                        industry: vm.c_industry,
                        experience: vm.c_experience.substring(0, vm.c_experience.indexOf("年")),
                        city: vm.c_region,
                        // index: 180,
                        type: vm.c_time == "近一个月" ? 2 : vm.c_time == "近三个月" ? 3 : 4,
                        top: 10
                    }
                    if (bean.experience == "3") {
                        bean.experience = "0-3";
                    }
                    if (bean.experience == "12") {
                        bean.experience = "12+";
                    }
                    url = "/api/func/salary/analysis";
                    break;
                case "岗位":

                    bean = {
                        name: vm.c_function,
                        industry: vm.c_industry,
                        experience: vm.c_experience.substring(0, vm.c_experience.indexOf("年")),
                        city: vm.c_region,
                        // index: 180,
                        type: vm.c_time == "近一个月" ? 2 : vm.c_time == "近三个月" ? 3 : 4,
                        top: 10
                    }
                    if (bean.experience == "3") {
                        bean.experience = "0-3";
                    }
                    if (bean.experience == "12") {
                        bean.experience = "12+";
                    }
                    url = "/api/position/salary/analysis";
                    break;
                default:
                    break;
            }

            return { bean: bean, url: url };
        },
        saveDesc: function(obj) {
            var user_id = $("#report_info").attr("user_id") ? $("#report_info").attr("user_id") : vm._id;
            var bean = {};
            if (obj) {
                var param = {
                    api_url: $(obj).attr("api_url"),
                    user_id: $(obj).attr("user_id"),
                    report_info: vm.report_info,
                    params: JSON.stringify(vm.params)
                }
                bean = param;
            } else {
                bean = {
                    api_url: vm.api_url,
                    user_id: user_id,
                    report_info: vm.report_info,
                    params: JSON.stringify(vm.params)
                };
            }

            $.post("/api/info/write", bean, function(result) {
                util.resResult(result, "添加分析说明成功", function() {
                    $(obj).prev().text(bean.report_info);
                });
            })
        },
        domLisenter: function() {
            // $(".configbar").find("input").blur(function() {
            //     $('#maskLayer').remove();
            // })
        },
        getJson: function() {
            //发送数据到后台
            var url = "../data/config203.json";
            util.lockScreen();
            $.get(url, function(jsonObj) {
                util.hideLock();
                vm.data = jsonObj;
                vm.domLisenter();
            });
        },
        doClick: function(str) {
            var _this = this;
            var obj = {};
            obj[str] = vm.data[str];
            positionSelect.doClick.call(_this, obj);

        }
    });

    vm.$watch("J_compensationtype", function() {
        $("#positionDiv").html("");
        switch (vm.J_compensationtype) {
            case "职能":
                vm.c_function = "产品,设计,开发";
                break;
            case "岗位":
                vm.c_function = "产品经理,UI设计师,web前端开发";
                break;
            default:
                break;
        }
        vm.analysisData();
    });



    //开始扫描编译
    avalon.scan(document.body);

    return avalon.controller(function($ctrl) {
        // 视图渲染后，意思是avalon.scan完成
        $ctrl.$onRendered = function() {
            document.title = '数联寻英';
            $('#side_accordion div').removeClass('md-accent-bg').eq(1).addClass('md-accent-bg');
            //生成数据
            vm.analysisData();
            $("#result").bind("click", function() {
                xy_select.init({
                    containerId: "positionDiv",
                    className: "big-window",
                    nameId: "result"
                });
            });


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
            vm.getJson();
        };
        // 对应的视图销毁前
        $ctrl.$onBeforeUnload = function() {
            $(".oni-dialog").empty();
        };
        $ctrl.$vmodels = [vm];
    })

});