/**
 * Created by WangMing on 15/12/9.
 */
define([], function() {
    var validationVM;
    // 定义所有相关的 vmodel
    var vm = avalon.define({
        $id: "report",
        chartstype: "人才分布",
        type: "近一个月",
        industry: "互联网全行业",
        aaa: "",
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
        }
    });

    vm.$watch("chartstype", function() {
        console.log(vm.chartstype);
        console.log(vm.type);
        console.log(vm.industry);
    })

    vm.$watch('aaa', function(v) {
        console.log(111);
    })


    //开始扫描编译
    avalon.scan(document.body);

    return avalon.controller(function($ctrl) {
        // 视图渲染后，意思是avalon.scan完成
        $ctrl.$onRendered = function() {
            // console.log(root.flage);
            $('#side_accordion div').removeClass('md-accent-bg').each(function(i, v) {
                if ($(this).children().attr("href") == location.hash) {
                    $(this).addClass('md-accent-bg');
                    return false; // 跳出循环
                }
            });

            console.log($("#userinfoType").val())

        };
        // 进入视图
        $ctrl.$onEnter = function(param, rs, rj) {

        };
        // 对应的视图销毁前
        $ctrl.$onBeforeUnload = function() {

        };
        $ctrl.$vmodels = [vm];
    })

});