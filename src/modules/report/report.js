/**
 * Created by WangMing on 15/12/9.
 */
var artdialog = require('art-dialog');
define([], function() {
    var validationVM;
    // 定义所有相关的 vmodel
    var vm = avalon.define({
        $id: "report",
        _id: "",
        type: "",
        short_id: "",
        username: "",
        identity: "",
        toggle: false,
        api_url: "",
        params: {},
        info: [],
        J_chartstype: "人才分布",
        J_type: "近一个月",
        J_industry: "互联网全行业",
        J_direction: "人才流入",
        J_na: "需求量",
        J_cf: "热门城市",
        J_fp: "职能",
        report_info: "",
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
                alert("你点击了确定");
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
                            console.log(vm.report_info);
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
        analysisData: function() {
            var param = vm.getBean();
            var tab = param.tab == "人才分布" ? "talentdistribution" : param.tab == "人才流动" ? "talentflow" : "supplydemand";
            var d = artdialog().showModal();
            $.post(param.url, param.bean, function(result) {
                if (result.code == -10) {
                    d.content(result.msg);
                    setTimeout(function() {
                        vm.clearPassToCookie();
                        window.location.href = "";
                        d.close().remove();
                    }, 2000);
                    return;
                }
                if (result.code != 0) {
                    d.content(result.msg);
                    setTimeout(function() {
                        d.close().remove();
                    }, 2000);
                    return;
                }
                $("#J_charts_data").val(JSON.stringify(result.data.data.data)).attr("charts_type", param.charts_type);
                $("#report_iframe").attr("src", "../../../src/lib/resource-report/" + tab + ".html");
                d.close().remove();
                $("#report_info").attr("api_url", result.data.data.api_url);
                if (result.data.info.length > 0) {
                    $("#report_info").attr("user_id", result.data.info[0].pm_user_id);
                    $("#report_info").attr("data_id", result.data.info[0]._id);
                    if (vm.type == "3") {
                        $(".charts-warp").val('').val(result.data.info[0].info);
                    }
                } else {
                    $("#report_info").attr("data_url", "").attr("data_id", "").val('');
                }

                //超管与公司权限
                if (vm.type != "3") {
                    vm.info = result.data.info;
                }
                vm.params = result.data.data.params;
                vm.api_url = result.data.data.api_url;


            })
        },
        getBean: function() {
            var tab = vm.J_chartstype;
            var bean = {};
            var url = "";
            var charts_type = "";
            switch (tab) {
                case "人才分布":
                    bean = {
                        industry: vm.J_industry,
                        cf: vm.J_cf == "热门城市" ? "city" : "func",
                        type: vm.J_type == "近一个月" ? 2 : vm.J_type == "近三个月" ? 3 : 4
                    }
                    bean.city = "";
                    bean.top = 10;

                    url = "http://10.101.1.171:10110/api/talent/distribution";
                    //  url = "http://rm.xunying.me/api/talent/distribution";
                    charts_type = bean.cf;
                    break;
                case "人才流动":
                    bean = {
                        industry: vm.J_industry,
                        direction: vm.J_direction == "人才流入" ? "in" : "out",
                        cf: vm.J_cf == "热门城市" ? "city" : "func",
                        type: vm.J_type == "近一个月" ? 2 : vm.J_type == "近三个月" ? 3 : 4
                    }
                    bean.city = "";
                    bean.top = 10;
                    url = "http://10.101.1.171:10110/api/talent/flow";
                    // url = "http://rm.xunying.me/api/talent/flow";
                    charts_type = bean.cf;
                    break;
                case "人才供需":
                    bean = {
                        industry: vm.J_industry,
                        na: vm.J_na == "需求量" ? "need" : "all",
                        fp: vm.J_fp == "职能" ? "func" : "position",
                        type: vm.J_type == "近一个月" ? 2 : vm.J_type == "近三个月" ? 3 : 4
                    }
                    bean.top = 5;
                    bean.city = "";
                    url = "http://10.101.1.171:10110/api/talent/exponential";
                    // url = "http://rm.xunying.me/api/talent/exponential";
                    charts_type = bean.na;
                    break;
                default:
                    break;
            }

            return { bean: bean, tab: tab, url: url, charts_type: charts_type };
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
                console.log(bean);
            } else {
                bean = {
                    api_url: vm.api_url,
                    user_id: user_id,
                    report_info: vm.report_info,
                    params: JSON.stringify(vm.params)
                };
                console.log(bean);
            }

            $.post("http://10.101.1.171:10110/api/info/write", bean, function(result) {
                var d = artdialog()
                if (result.code == 0) {
                    d.content('添加分析说明成功');
                } else {
                    d.content('添加分析说明失败');
                }
                d.show();
                setTimeout(function() {
                    d.close().remove();
                }, 2000);
                $(obj).prev().text(bean.report_info);
            })
        }
    });

    vm.$watch("J_chartstype", function() {
        vm.analysisData();
    });
    vm.$watch("J_type", function() {
        vm.analysisData();
    });
    vm.$watch("J_industry", function() {
        vm.analysisData();
    });
    vm.$watch("J_direction", function() {
        vm.analysisData();
    });
    vm.$watch("J_na", function() {
        vm.analysisData();
    });
    vm.$watch("J_cf", function() {
        vm.analysisData();
    });
    vm.$watch("J_fp", function() {
        vm.analysisData();
    });


    //开始扫描编译
    avalon.scan(document.body);

    return avalon.controller(function($ctrl) {
        // 视图渲染后，意思是avalon.scan完成
        $ctrl.$onRendered = function() {
            // $('#side_accordion div').removeClass('md-accent-bg').each(function(i, v) {
            //     if ($(this).children().attr("href") == location.hash) {
            //         $(this).addClass('md-accent-bg');
            //         return false; // 跳出循环
            //     }
            // });

            $('#side_accordion div').removeClass('md-accent-bg').eq(0).addClass('md-accent-bg');
            //生成数据
            vm.analysisData();






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