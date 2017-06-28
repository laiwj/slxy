define(["../../lib/util.js"], function(util) {
    function Show2(data) {
        var output = '',
            flag, output2 = '';
        for (var i in data) {
            output += '<li onclick="SubLayer2(\'' + data[i] + '\')"><label class="mr30"><input type="radio" id="checkbox_a3" class="chk_1" value="chk_1" name="chk_1" /> <label for="checkbox_a3"></label>' + i + '</label></li>';
        }
        $('#drag').width('150px');
        $('#FuntypeList').html('<ul>' + output + '</ul>');
        // 鼠标悬停变色
        $('#FuntypeAlpha li').hover(
            function() { $(this).addClass('over') },
            function() { $(this).removeClass('over') }
        );
        // 点击弹出子菜单
        $('#FuntypeList li').click(
            function(e) {
                $("#sublist")
                    .hover(function() {
                            $(this).show()
                        },
                        function() { $(this).hide() })
            })
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
        go: function() {
            var bean = vm.getdatas();
            console.log(bean);
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
        getdatas: function() {
            var bean = {};
            var _util = ["industry", "demand", "experience", "supply", "label"];
            $(".tags").each(function(i, v) {
                    var xy_Arr = [];
                    if (vm.report_type == 204) {
                        $(v).find("span").each(function(i, v) {
                            xy_Arr.push($(this).text());
                        })
                        bean[_util[i]] = xy_Arr.join(",");
                    } else {
                        $(v).find("span").each(function(i, v) {
                            xy_Arr.push($(this).text());
                        })
                        bean.check = xy_Arr.join(",");
                        bean.config_type = "industry";
                    }

                })
                // console.log(bean);
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
            var url = "../../../../config" + num + ".json";
            util.lockScreen();
            $.get(url, function(jsonObj) {
                util.hideLock();
                vm.data = jsonObj.data;
                vm.domLisenter();
            });
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