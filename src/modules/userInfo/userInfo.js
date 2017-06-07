/**
 * Created by WangMing on 15/12/9.
 */
define([], function() {
    // 定义所有相关的vmodel
    var vm = avalon.define({
        $id: "account",
        myDatas: [{ "name": "aaa" }, { "name": "bbb" }, { "name": "ccc" }, { "name": "ddd" }],
        doClick: function(data) {
            alert(data.name);
            console.log(data);
        },
        show: function(id) {
            // validationVM.resetAll();
            var dialog = avalon.vmodels[id];
            if (!dialog) {

            } else {
                dialog.toggle = true;
            }
        },
        $ccOpts: {
            title: "邀请用户",
            width: 500,
            onConfirm: function() {
                alert("你点击了确定");
            }
        },
        $ddOpts: {
            title: "B端用户权限设置",
            width: 500,
            onConfirm: function() {
                alert("你点击了确定");
            }
        }
    });

    vm.$watch('userinfodata', function(v) {
        console.log(v);
        avalon.log('ancestor.aaa事件被触发了')
    })
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
        };
        // 进入视图
        $ctrl.$onEnter = function(param, rs, rj) {};
        // 对应的视图销毁前
        $ctrl.$onBeforeUnload = function() {

        };
        $ctrl.$vmodels = [vm];
    })
});