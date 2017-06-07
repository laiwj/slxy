/**
 * Created by WangMing on 15/12/9.
 */
define([], function() {
    var validationVM;
    // 定义所有相关的 vmodel
    var vm = avalon.define({
        $id: "report",
        _id: "",
        type: "",
        short_id: "",
        username: "",
        toggle: false,
        J_chartstype: "人才分布",
        J_type: "近一个月",
        J_industry: "互联网全行业",
        J_direction: "人才流入",
        J_na: "需求量",
        J_cf: "热门城市",
        J_fp: "职能",
        show: function(id) {
            // validationVM.resetAll();
            var dialog = avalon.vmodels[id];
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
            window.location.href = "/#!/login";
        },
        analysisData: function() {
            var param = vm.getBean();
            var tab = param.tab;
            $.post(param.url, param.bean, function(result) {
                console.log(result);

                $("#J_charts_data").val(JSON.stringify(data.data.data)).attr("charts_type", param.charts_type);
                $("#report_iframe").attr("src", "/lib/resource-report/" + tab + ".html");
                $("#report_info").attr("api_url", data.data.api_url);
                if (data.info.length > 0) {
                    $("#report_info").attr("user_id", data.info[0].pm_user_id);
                    $("#report_info").attr("data_id", data.info[0]._id);
                    if ($("#userinfoType").val() == 3) {
                        $("#report_info").val('').val(data.info[0].info);
                    }
                } else {
                    $("#report_info").attr("data_url", "").attr("data_id", "").val('');
                }

                //普通业务员
                if ($("#userinfoType").val() == 3) {
                    $("#report_info").show();
                }

                //超管与公司权限
                if ($("#userinfoType").val() < 3) {
                    var temp = _.template($("#desc_temp").html());
                    $(".J_analysis_items_warp").html(temp({ data: data.info }))
                    $(".J_analysis_items_warp").show();

                    $(".J_edit_desc").off().on("click", function() {
                        me.editDesc(this);
                    })
                }


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
                        type: vm.J_type == "近一个月" ? 1 : vm.J_type == "近三个月" ? 2 : 3
                    }
                    bean.city = "";
                    bean.top = 10;
                    url = "http://10.101.1.171:10110/api/talent/distribution";
                    charts_type = bean.cf;
                    break;
                case "人才流动":
                    bean = {
                        industry: vm.J_industry,
                        direction: vm.J_direction == "人才流入" ? "in" : "out",
                        cf: vm.J_cf == "热门城市" ? "city" : "func",
                        type: vm.J_type == "近一个月" ? 1 : vm.J_type == "近三个月" ? 2 : 3
                    }
                    bean.city = "";
                    bean.top = 10;
                    url = "http://10.101.1.171:10110/api/talent/flow";
                    charts_type = bean.cf;
                    break;
                case "人才供需":
                    bean = {
                        industry: vm.J_industry,
                        na: vm.J_na == "需求量" ? "need" : "all",
                        fp: vm.J_fp == "职能" ? "func" : "position",
                        type: vm.J_type == "近一个月" ? 1 : vm.J_type == "近三个月" ? 2 : 3
                    }
                    bean.top = 5;
                    bean.city = "";
                    url = "http://10.101.1.171:10110/api/talent/exponential";
                    charts_type = bean.na;
                    break;
                default:
                    break;
            }

            return { bean: bean, tab: tab, url: url, charts_type: charts_type };
        }
    });

    vm.$watch("J_chartstype", function() {
        vm.analysisData();
    });


    //开始扫描编译
    avalon.scan(document.body);

    return avalon.controller(function($ctrl) {
        // 视图渲染后，意思是avalon.scan完成
        $ctrl.$onRendered = function() {
            $('#side_accordion div').removeClass('md-accent-bg').each(function(i, v) {
                if ($(this).children().attr("href") == location.hash) {
                    $(this).addClass('md-accent-bg');
                    return false; // 跳出循环
                }
            });


            //生成数据
            vm.analysisData();






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