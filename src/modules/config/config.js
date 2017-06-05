/**
 * Created by WangMing on 15/12/9.
 */
define([], function() {

    function Show2(data) {
        console.log(i);
        var output = '',
            flag, output2 = '';
        for (var i in data) {
            output += '<li onclick="SubLayer2(\'' + data[i] + '\')"><label class="mr30"><input type="checkbox" id="checkbox_a3" class="chk_1" value=""  /> <label for="checkbox_a3"></label>' + i + '</label></li>';
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
        data: [],
        doClick: function(data) {
            var top = $(this)[0].parentNode.offsetTop,
                left = $(this)[0].parentNode.offsetWidth;
            var el = $(this)[0].parentNode.nextElementSibling.lastElementChild;
            $(el).attr("isMe", "yes");
            var dragHtml = '<div id="FuntypeAlpha">'; //职能类别
            dragHtml += '<div id="FuntypeList"></div>'; //职能类别列表
            dragHtml += '</div>';
            $('#drag_con').html(dragHtml);
            Show2(data.tags);
            $('#maskLayer').css({ top: top + 44, left: left + 129 }).show();
            $("#sublist").css({ top: top + 44, left: left - 92 })
        }

    });


    // vm.$watch("DOMListener", function() {
    //     // console.log(vm.data);
    // })

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


        };

        // 进入视图
        $ctrl.$onEnter = function(param, rs, rj) {
            //发送数据到后台
            var url = "../../../config.json";
            $.get(url, function(jsonObj) {
                vm.data = jsonObj.data;

            });

        };
        // 对应的视图销毁前
        $ctrl.$onBeforeUnload = function() {

        };
        $ctrl.$vmodels = [vm];
    })
});