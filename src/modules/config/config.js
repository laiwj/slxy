/**
 * Created by WangMing on 15/12/9.
 */
define([], function () {

    // 定义所有相关的 vmodel
    var vm = avalon.define({
        $id: "config",
        data: [],
        myDatas: [{ "name": "aaa" }, { "name": "bbb" }, { "name": "ccc" }, { "name": "ddd" }]
        // funtypeSelect_2: function () {
        //     console.log(111);
            // var dragHtml = '<div id="FuntypeAlpha">'; //职能类别
            // dragHtml += '		<div id="FuntypeList"></div>'; //职能类别列表
            // dragHtml += '</div>';
            // $('#drag_h').html('<b>请选择职能类别</b><span onclick="boxAlpha()">关闭</span>');
            // $('#drag_con').html(dragHtml);
            // Funtype.Show2();
            // boxAlpha();
            // draglayer();
        // }
    });
     vm.$watch("data", function () {
       console.log(vm.data);
    })
    return avalon.controller(function ($ctrl) {
        // 视图渲染后，意思是avalon.scan完成
        $ctrl.$onRendered = function () {
            $('#side_accordion div').removeClass('md-accent-bg').each(function (i, v) {
                if ($(this).children().attr("href") == location.hash) {
                    $(this).addClass('md-accent-bg');
                    return false; // 跳出循环
                }
            });
        };
        // 进入视图
        $ctrl.$onEnter = function (param, rs, rj) {
          //发送数据到后台
            var url = "../../../config.json";
            $.get(url, function(jsonObj) {
               vm.data = jsonObj.data;
               console.log(vm.data)
            
            });
        };
        // 对应的视图销毁前
        $ctrl.$onBeforeUnload = function () {

        };
        $ctrl.$vmodels = [vm];
    })
});