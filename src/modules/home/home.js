/**
 * Created by WangMing on 15/12/9.
 */
define([], function() {
    // 定义所有相关的vmodel
    var vm = avalon.define({
        $id: "home",
        $optTimepicker: {
            //rules: 'null,0D'
        }
    });

    vm.$watch('onReady', function() {
        //页面上每个ms-controller, ms-important元素
        //在其区域内的所有ms-*指令被扫描后会执行
        console.log(111);
    })
    return avalon.controller(function($ctrl) {
        // 视图渲染后，意思是avalon.scan完成
        $ctrl.$onRendered = function() {

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