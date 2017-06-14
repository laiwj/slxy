    function SubLayer2(data) {
        var output = '',
            width;
        var arr = data.split(",");
        var len = 0;
        for (var i = 0; i < arr.length; i++) {
            output += '<li onclick="Chk2(\'' + arr[i] + '\')">' + arr[i] + '</a></li>';
            len++;
        }
        width = len > 10 ? 440 : 220;
        output = '<div id="sub_funtype"><ul style="width:' + width + 'px">' + output + '</ul></div>';
        $("#sublist").html(output).show();
    }

    function Chk2(data) {
        var tag = '';
        tag = '<div class="tag"><span>' + data + '</span><i> × </i></div>';
        $(".tags").each(function() {
            if ($(this).attr("isMe")) {
                console.log(tag)
                $(this).append(tag);
                $(this).attr("isMe", "");
            }
        });
        $(".tag").find("i").on("click", function() {
            $(this).parent().remove();
        });
        $("#sublist").empty().hide();
        $('#maskLayer').hide();
        return false;
    }