/**
 * Created by WangMing on 15/12/9.
 */
define([], function() {
    // 定义所有相关的vmodel
    var vm = avalon.define({
        $id: "account",
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
        }
    });

    return avalon.controller(function($ctrl) {
        // 视图渲染后，意思是avalon.scan完成
        $ctrl.$onRendered = function() {
            $("#testjq").click(function() {
                alert("我是jquery控制弹出的!");
            });
            $('#side_accordion div').removeClass('md-accent-bg').each(function(i, v) {
                if ($(this).children().attr("href") == location.hash) {
                    $(this).addClass('md-accent-bg');
                    return false; // 跳出循环
                }
            });


            $('.J_click_pull').on('click', function() {
                $(this).parent().parent().next().slideToggle();
            });


        };
        // 进入视图
        $ctrl.$onEnter = function(param, rs, rj) {};
        // 对应的视图销毁前
        $ctrl.$onBeforeUnload = function() {

        };
        $ctrl.$vmodels = [vm];
    })
});