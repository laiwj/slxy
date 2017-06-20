define([], function() {
    'use strict';
    var xy_select = {
        doClick: function(data) {
            $('#maskLayer').remove();
            $(this).append(' <div id = "maskLayer" style = "display:none"><div id = "drag" ><div id = "drag_con" > </div> </div > </div>');
            var dragHtml = '<div id="FuntypeAlpha">'; //职能类别
            dragHtml += '<div id="FuntypeList"></div>'; //职能类别列表
            dragHtml += '</div>';
            $('#drag_con').html(dragHtml);
            xy_select.Show2(data);
            $('#maskLayer').css({ top: 30, left: 0 }).show();
            // $("#sublist").css({ top: top + 44, left: left - 92 })
        },
        Show2: function(data) {
            var output = '',
                flag,
                output2 = '',
                _id = '',
                dataArr = [];

            for (var key in data) {
                _id = key;
                dataArr = data[key];
            }
            $.each(dataArr, function(i, v) {
                output += '<li><label style="width:100%;cursor: pointer;"><input type="checkbox" id="checkbox_' + i + '" class="chk_1"/><label for="checkbox_' + i + '"></label>' + v + '</label></li>';
                // output += '<li><input type="checkbox"/>' + v + '</li>';
            })
            $('#drag').width('150px');
            $('#FuntypeList').html('<ul>' + output + '</ul>');
            $('#FuntypeList').append('<p class="require_tips"></p><div class="require_btn">确定</div>');
            // 鼠标悬停变色
            $('#FuntypeAlpha li').hover(
                function() { $(this).addClass('over') },
                function() { $(this).removeClass('over') }
            ).click(function(e) {
                e.stopPropagation();
            });
            // 点击弹出子菜单
            $('.require_btn').click(
                function(e) {
                    xy_select.Chk2(_id);
                    e.stopPropagation();
                }
            )
        },
        Chk2: function(_id) {
            var el = $("#" + _id);
            var str = el.text().split(":")[0] + ":";
            var arr = [];
            if ($('input:checkbox:checked').length > 3) {
                $(".require_tips").text("最多只能选择三个标签！").show();
                return false;
            };

            $('input:checkbox:checked').each(function(i, v) {
                arr.push($(v).parent("label").text());
            });
            $(el).find("input").val(arr.join(","));
            // el.text(str += arr.join(","));
            $('#maskLayer').remove();
            return false;
        }
    };
    return xy_select;
});