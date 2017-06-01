/**
 * Created by WangMing on 15/12/9.
 */
define([], function() {
    // 定义所有相关的 vmodel
    var vm = avalon.define({
        $id: "report",
        chartstype: "人才分布",
        type: "近一个月",
        industry: "互联网全行业"
    });

    vm.$watch("chartstype", function() {
        console.log(vm.chartstype);
        console.log(vm.type);
        console.log(vm.industry);
    })

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