define(["../../lib/util.js"], function(util) {
    function Show2(data) {
        var output = '',
            flag, output2 = '';
        $.each(data, function(i, v) {
            output += '<li onclick="Chk2(\'' + v + '\')"><label class="mr30"><input type="radio" id="checkbox_a3" class="chk_1" value="chk_1" name="chk_1" /> <label for="checkbox_a3"></label>' + v + '</label></li>';
        })

        $('#drag').width('150px');
        $('#FuntypeList').html('<ul>' + output + '</ul>');
        // 鼠标悬停变色
        $('#FuntypeAlpha li').hover(
            function() { $(this).addClass('over') },
            function() { $(this).removeClass('over') }
        );
    }
    // 定义所有相关的 vmodel
    var vm = avalon.define({
        $id: "config",
        _id: "",
        type: "",
        _type: null,
        short_id: "",
        username: "",
        identity: "",
        toggle: false,
        data: [],
        configstype: "人才分布",
        report_type: 201,
        ltnum: 0,
        gtnum: 200,
        condition_l: "=",
        condition_r: "p25",
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
        doClick: function(data) {
            $("#sublist").empty();
            $(".tags").attr("isMe", "");
            var top = $(this)[0].parentNode.offsetTop,
                left = $(this)[0].parentNode.offsetWidth;
            var el = $(this)[0].parentNode.nextElementSibling.lastElementChild;
            $(el).attr("isMe", "yes");
            var dragHtml = '<div id="FuntypeAlpha">'; //职能类别
            dragHtml += '<div id="FuntypeList"></div>'; //职能类别列表
            dragHtml += '</div>';
            $('#drag_con').html(dragHtml);
            Show2(data.$model.tags);
            $('#maskLayer').css({ top: top + 44, left: left + 129 }).show();
            $("#sublist").css({ top: top + 44, left: left - 92 })
        },
        generate: function() {
            // 获取input数值
            // console.log(vm.ltnum + "----" + vm.gtnum)
            if ($("#msgTips").is(":hidden")) {
                return false;
            }
            if ((vm.ltnum - 0) > (vm.gtnum - 0)) {
                $("#msgTips").hide();
                $("#errorMsg").hide();
                $("#errorMsg2").show();
                return false;
            }
            var data = vm.ltnum + "-" + vm.gtnum;
            var tag = '';
            tag = '<div class="tag"><span>' + data + '</span><i> × </i></div>';
            var el = $(this)[0].parentNode.nextElementSibling.lastElementChild;
            $(el).find(".tag").remove();
            $(el).append(tag);
            vm.domLisenter();
        },
        condition: function() {
            var data = vm.condition_l + "" + vm.condition_r;
            var tag = '';
            tag = '<div class="tag"><span>' + data + '</span><i> × </i></div>';
            if (vm.condition_l == "<") {
                tag = '<div class="tag"><span>&lt' + vm.condition_r + '</span><i> × </i></div>';
            }
            var el = $(this)[0].parentNode.nextElementSibling.lastElementChild;
            var tagSpan = $(el).find(".tag span");
            var flage = true;
            $.each(tagSpan, function(i, v) {
                if (data == $(v).text()) {
                    flage = false;
                }
            })
            if (flage) $(el).append(tag);
            vm.domLisenter();
        },
        go: function() {
            var bean = vm.getdatas();
            if (bean == "nodata") return;
            bean.report_type = vm.report_type;
            if (vm.report_type == 204) {
                var url = "http://10.101.1.171:10110/report/config/allmodify";
            } else {
                var url = "http://10.101.1.171:10110/report/config/modify";
            }
            $.post(url, bean, function(data) {
                util.resResult(data, "配置成功");
            })
        },
        clearAll: function() {
            $(".tags").find(".tag").remove();
        },
        getdatas: function() {
            var bean = {};
            var _util = ["industry", "demand", "experience", "supply", "label", "type_limit"];
            $(".tags").each(function(i, v) {
                var xy_Arr = [];
                var _index = i;
                if (vm.report_type == 204) {
                    $(v).find("span").each(function(i, v) {
                        xy_Arr.push($(this).text());
                    })
                    if (_index == 4 && xy_Arr.length == 0) {
                        util.tips("请配置岗位供需指数");
                        bean = "nodata";
                        return;
                    }
                    bean[_util[i]] = xy_Arr.join(",");
                } else {
                    $(v).find("span").each(function(i, v) {
                        xy_Arr.push($(this).text());
                    })
                    bean.check = xy_Arr.join(",");
                    bean.config_type = "industry";
                    return false;
                }

            })

            return bean;
        },
        domLisenter: function() {
            $(".tag").find("i").on("click", function() {
                $(this).parent().remove();
            });
        },
        getJson: function() {
            //发送数据到后台
            num = vm.report_type == 204 ? 201 : 202;
            var url = "../data/config" + num + ".json";
            util.lockScreen();
            $.get(url, function(jsonObj) {
                util.hideLock();
                vm.data = [];
                vm.data = jsonObj.data;
                vm.domLisenter();
            });
        },
        validator: function(str, el) {
            $("#errorMsg2").hide();
            var reg = /\b[0-9]\d{0,1}\b|\b[1-1]\d\d\b|\b200\b/;
            if (!reg.test(str) || (str - 0) < 0 || (str - 0) > 200) {
                $("#msgTips").hide();
                $("#errorMsg").show();
            } else {
                $("#msgTips").show();
                $("#errorMsg").hide();
            }
        }
    });
    vm.$watch("configstype", function() {
        switch (vm.configstype) {
            case "人才分布":
                vm.report_type = 201;
                break;
            case "人才流动":
                vm.report_type = 202;
                break;
            case "人才供需":
                vm.report_type = 203;
                break;
            case "热门岗位人群的薪酬及特征画像":
                vm.report_type = 204;
                break;
            default:
                break;
        }

        vm.getJson();

    });
    vm.$watch("ltnum", function() {
        vm.validator(vm.ltnum);
    });
    vm.$watch("gtnum", function() {
        vm.validator(vm.gtnum);
    });

    //开始扫描编译
    avalon.scan(document.body);
    return avalon.controller(function($ctrl) {
        // 视图渲染后，意思是avalon.scan完成
        $ctrl.$onRendered = function() {
            document.title = '数联寻英';
            $('#side_accordion div').removeClass('md-accent-bg').eq(2).addClass('md-accent-bg');
        };

        // 进入视图
        $ctrl.$onEnter = function(param, rs, rj) {
            vm.getJson();
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