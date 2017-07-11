webpackJsonp([6,13],{

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function($) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(39)], __WEBPACK_AMD_DEFINE_RESULT__ = function(xy_validator) {
	
	        var xy_util = {
	
	            /**
	             * 获取地址栏参数
	             *
	             * @param   {String} name    参数名
	             * @returns {String}         参数值
	             */
	            getPathParam: function(name) {
	                var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
	                var r = window.location.search.substring(1).match(reg);
	                if (r != null) {
	                    return decodeURIComponent(r[2]);
	                }
	                return "";
	            },
	
	            /**
	             * 获取地址栏参数
	             * @returns {Object}
	             */
	            getUrlParms: function() {
	                var args = new Object();
	                var query = location.search.substring(1); //获取查询串
	                var pairs = query.split("&"); //在逗号处断开
	                for (var i = 0; i < pairs.length; i++) {
	                    var pos = pairs[i].indexOf('='); //查找name=value
	                    if (pos == -1) continue; //如果没有找到就跳过
	                    var argname = pairs[i].substring(0, pos); //提取name
	                    var value = pairs[i].substring(pos + 1); //提取value
	                    args[argname] = unescape(value); //存为属性
	                }
	                return args;
	            },
	
	            /**
	             * head部分增加JS文件引用
	             *
	             * @param {String} path    JS文件引用地址
	             */
	            createHeaderJSElement: function(path) {
	                var element = document.createElement("script");
	                element.setAttribute("type", "text/javascript");
	                element.setAttribute("src", path);
	                document.getElementsByTagName("head")[0].appendChild(element);
	            },
	
	            /**
	             * head部分增加CSS文件引用
	             *
	             * @param {String} path    CSS文件引用地址
	             */
	            createHeaderCSSElement: function(path) {
	                var element = document.createElement("link");
	                element.setAttribute("type", "text/css");
	                element.setAttribute("rel", "stylesheet");
	                element.setAttribute("href", path);
	                document.getElementsByTagName("head")[0].appendChild(element);
	            },
	
	            /**
	             * HTML编码
	             *
	             * @param   {String} objVal    需要编码的字符串
	             * @returns {String}           编码后的字符串
	             */
	            htmlEncode: function(objVal) {
	                var str = objVal + "";
	                if (str == '') {
	                    return str;
	                }
	                str = str.replace(/&/g, "&amp;")
	                    .replace(/</g, "&lt;")
	                    .replace(/>/g, "&gt;")
	                    .replace(new RegExp("\"", "g"), "&quot;")
	                    .replace(new RegExp("\'", "g"), "&#39;")
	                    .replace(new RegExp("  ", "g"), " &nbsp;")
	                    .replace(new RegExp("\r|\n", "g"), "<br/>");
	                return str;
	            },
	
	            /**
	             * HTML代码中的title属性编码
	             *
	             * @param   {String} objVal    需要编码的字符串
	             * @returns {String}           编码后的字符串
	             */
	            htmlTitleEncode: function(objVal) {
	                if (xy_validator.nullOrEmpty(objVal)) {
	                    objVal = "";
	                }
	
	                var str = objVal + "";
	                if (str == '') {
	                    return str;
	                }
	                str = str.replace(/&/g, "&amp;")
	                    .replace(/</g, "&lt;")
	                    .replace(/>/g, "&gt;")
	                    .replace(new RegExp("\"", "g"), "&quot;")
	                    .replace(new RegExp("\'", "g"), "&#39;")
	                    .replace(new RegExp("\r|\n", "g"), "&#13");
	                return str;
	            },
	
	            /**
	             * HTML解码
	             *
	             * @param   {String} objVal    需要解码的字符串
	             * @returns {String}           解码后的字符串
	             */
	            htmlDecode: function(objVal) {
	                var str = objVal + "";
	                if (str == '') {
	                    return str;
	                }
	                str = str.replace(/&lt;/g, "<")
	                    .replace(/&gt;/g, ">")
	                    .replace(/&quot;/g, "\"")
	                    .replace(/&#39;/g, "\'")
	                    .replace(/ &nbsp;/g, "  ")
	                    .replace(/&amp;/g, "&");
	                return str;
	            },
	
	            tipsDIV: function(message, time, icon, callback, icon) {
	                jTip(xy_util.htmlEncode(message), time, callback, icon);
	            },
	            /**
	             * 初始化包装的alert弹窗
	             *
	             * @param {String}   message       提示语
	             * @param {function} callback      弹窗关闭的回调事件
	             */
	            alertDIV: function(message, callback, icon) {
	                jAlert(xy_util.htmlEncode(message), callback, icon);
	            },
	
	            /**
	             * 初始化包装的confirm弹窗
	             *
	             * @param {String}   message       提示语
	             * @param {function} callback      回调事件
	             *
	             * @example
	             * confirmDIV("message", function(res){
	             *     if (res)
	             *     {
	             *         return "点击的是'确定'按钮";
	             *     }
	             *     else
	             *     {
	             *         return "点击的是'取消'按钮或'关闭'按钮";
	             *     }
	             * });
	             */
	            confirmDIV: function(message, callback, icon, showIframe) {
	                jConfirm(message, callback, icon, showIframe);
	            },
	
	            /**
	             * 获取标准信息
	             *
	             * @param   {String} key    key
	             * @returns {String}        xy_msg对象对应的value值,如不存在指定的key则返回key值
	             */
	            getMsg: function(key) {
	                var msg = xy_msg[key];
	                if (null == msg || "" == msg) {
	                    msg = key;
	                }
	                return msg;
	            },
	
	            /**
	             * 替换动态消息
	             * @param   {String} msg          替换前的字符串
	             * @param   {String} arguments    替换的字符串(不定数量)
	             * @returns {String} msg          替换后的字符串
	             *
	             * @example
	             * getMessage();                                     //return "";
	             * getMessage("message");                            //return "message";
	             * getMessage("message", "str");                     //return "message";
	             * getMessage("message {1}", "str");                 //return "message str";
	             * getMessage("message {2}", "str");                 //return "message {2}";
	             * getMessage("message {1}", "str", "hello");        //return "message str";
	             * getMessage("message {1} {2}", "str", "hello");    //return "message str hello";
	             * getMessage("message {2}", "str", "hello");        //return "message hello";
	             */
	            getMessage: function(msg) {
	                if (arguments.length == 0) {
	                    return "";
	                }
	
	                msg += "";
	                for (var i = 1; i < arguments.length; i++) {
	                    var key = "\\{" + i + "\\}";
	                    var value = arguments[i] + "";
	                    msg = msg.replaceAll(key, value);
	                }
	                return msg;
	            },
	
	            /**
	             * rest接口callback统一处理方法
	             *
	             * @param {Object}   result        rest接口返回值
	             * @param {Object}   callback      Function类型:  处理完成回调方法,含回调参数result.value,
	             *                                 String类型:    成功操作提示语
	             * @param {Function} onError       错误回调函数
	             */
	            restCallback: function(result, callback, onError) {
	                try {
	                    //登录失效
	                    if (result.code == -10) {
	                        //var msg = this.getMessage(xy_resultCode[result.retcode]);
	                        var msg = result.msg;
	                        jAlert(msg, function() {
	                            location.href = '/user/logout';
	                        });
	                        return;
	                    }
	
	                    if (result.code != 0) {
	                        //var msg = this.getMessage(xy_resultCode[result.retcode], result.text);
	                        var msg = result.msg;
	                        if (onError) {
	                            xy_util.hideLock();
	                            onError(result.code, result, msg);
	                            return;
	                        }
	
	                        xy_util.alertDIV(msg, function() {
	
	                        });
	                        xy_util.hideLock();
	                        return;
	                    }
	                    xy_util.hideLoadingCard();
	                    xy_util.hideLock();
	                    switch (typeof(callback)) {
	                        //提示语
	                        case "string":
	                            alertDIV(callback);
	                            break;
	
	                            //回调函数
	                        case "function":
	                            callback(result.data);
	                            break;
	
	                        default:
	                            break;
	                    }
	                } catch (e) {
	                    xy_util.hideLock();
	                    //error
	                }
	            },
	
	
	
	            /**
	             * 显示loading
	             *
	             * @param {String}   text          提示语(默认'loading...')
	             * @param {Function} callback      显示完成回调事件
	             */
	            showLoadingCard: function(obj) {
	                //var width = obj.width();
	                //var height = obj.height();
	
	                var lock_overlay = $("#loading_small");
	                if (lock_overlay.length != 0) {
	                    //lock_overlay.css({width:width+'px',height:height+'px'});
	                    lock_overlay.show();
	                } else {
	                    lock_overlay = '<div id="loading_small"><img src="../images/ajax_loader.gif" alt="" /></div>';
	                    $("#navigation").append(lock_overlay);
	                }
	                //obj.addClass("position-re");
	
	            },
	
	            /**
	             * 隐藏loading
	             */
	            hideLoadingCard: function() {
	                $("#loading_small").hide();
	            },
	
	
	
	
	            /**
	             * 垃圾回收方法(for IE)
	             *
	             * @param {jQuery} obj
	             */
	            callbackRb: function(obj) {
	                if ($.browser.msie) {
	                    obj.appendTo($("#rubbish"));
	                    $("#rubbish").html("");
	                } else {
	                    obj.remove();
	                }
	            },
	
	            /**
	             * 禁用事件冒泡
	             *
	             * @param {Event} e         event
	             */
	            stopPop: function(e) {
	                try {
	                    e.stopPropagation();
	                } catch (e) {
	                    e.cancelBubble;
	                }
	            },
	            isIe: function() {
	                if ($.browser.msie) {
	                    return true;
	                }
	                return false;
	            },
	            onloadImg: function(path, callback, onError) {
	                var img = new Image();
	
	                img.onload = function() {
	                    if (callback && typeof callback == "function") {
	                        callback(path);
	                    }
	                }
	                if (!img.complete) {
	                    var t = setInterval(function() {
	                        if (img.complete) {
	                            if (callback && typeof callback == "function") {
	                                callback(path);
	                            }
	                            clearInterval(t);
	                            return false;
	                        }
	                    }, 500)
	                }
	                img.onerror = function() {
	                    if (onError && typeof onError == "function") {
	                        onError();
	                    }
	                }
	                img.src = path;
	            },
	
	            /**
	             * 在文档其他地方点击时隐藏下拉元素
	             */
	            hiddenOnMouseDown: function(strId) {
	                document.onmousedown = function() {
	                    var obj = $("#" + strId);
	                    if (obj.is(":visible") == true) {
	                        obj.hide();
	                    }
	                };
	                $("#" + strId).mousedown(function(event) {
	                    event.stopPropagation();
	                });
	            },
	
	            /**
	             *
	             * 获取当前访问的地址栏路径
	             */
	            getUrlAddress: function() {
	                var href = window.location.href;
	                var address = href.split('/');
	                return address[0] + '//' + address[1] + address[2] + '/' + address[3];
	            },
	            lockScreen: function() {
	                var width = document.documentElement.clientWidth;
	                var height = document.documentElement.clientHeight + document.documentElement.scrollHeight;
	                //var scrlloTop = $(window).clientHeight();
	
	                //$("body").addClass("overflow-hidden");
	                var lock_overlay = $("#loading_layer");
	                if (lock_overlay.length != 0) {
	                    $(".loading_layer_body").empty();
	                    $(".loading_layer_body").html("<img src='../images/ajax_loader.gif' alt='' />");
	                    lock_overlay.css({ width: width + 'px', height: height + 'px' });
	                    lock_overlay.show();
	                } else {
	                    lock_overlay = '<div id="loading_layer" style="width:' + width + 'px;height:' + height + 'px;"><div class="loading_layer_body"><img src="../images/ajax_loader.gif" alt="" /></div></div>';
	                }
	                $("body").append($(lock_overlay));
	            },
	            hideLock: function() {
	                $("#loading_layer").hide();
	            },
	            /**
	             * 加载数据显示蒙层
	             * domNode 加载蒙层的节点
	             * text 需要显示的文本
	             * callback 回调函数
	             */
	            showAjaxOverlay: function(domNode, text, callback) {
	                var width = domNode.outerWidth(true);
	                var height = domNode.outerHeight(true);
	                var scrlloTop = $(window).scrollTop();
	
	                var ajax_overlay = $("#ajax_overlay");
	                if (ajax_overlay.length != 0) {
	                    ajax_overlay.css({ width: width + 'px', height: height + 'px' });
	                    ajax_overlay.find(".ajax_overlay_img").css("margin-top", (height + scrlloTop - 50) / 2 + "px");
	                    ajax_overlay.show();
	                } else {
	                    domNode.addClass("pr");
	                    ajax_overlay = '<div style="width:' + width + 'px;height:' + height + 'px" id="ajax_overlay">' +
	                        '<div class="ajax_overlay_img" style="text-align:center;margin-top:' + (height + scrlloTop - 50) / 2 + 'px">' +
	                        '<img src="/images/loading.gif" alt="" />' +
	                        '<p class="loadingText">' + (text == undefined ? "" : text) + '</p>' +
	                        '</div>' +
	                        '</div>';
	                }
	                domNode.append($(ajax_overlay));
	            },
	            hideAjaxOverlay: function() {
	                $("#ajax_overlay").hide();
	            },
	            /**
	             *
	             * @param param
	             * 	fileBtnId
	             * 	accessoryId
	             * 	dataId
	             * 	photoId
	             *
	             * @param callback
	             */
	            initImgUpload: function(param, callback) {
	                var uploadUrl = "/.tmp/"
	                var me = this;
	                var max = 5;
	                var button = $("#" + param.fileBtnId);
	                var allowExtention = ".jpg,.bmp,.png";
	                if (param.accessoryId) {
	                    button.on("mousedown", function() {
	                        if ($("#" + param.accessoryId).children(".img-list:visible").length >= max) {
	                            alertDIV(STATICMSG["1018"]);
	                            return false;
	                        }
	                    })
	                }
	
	                $('#' + param.formId).attr({ enctype: "multipart/form-data", action: "/upload/photo/", method: "post" });
	
	                $('#' + param.formId).submit(function() {
	                    $(this).ajaxSubmit({
	                        error: function(xhr) {
	                            status('Error: ' + xhr.status);
	                        },
	                        success: function(result) {
	                            result = JSON.parse(result);
	                            $("#" + param.photoId).attr("src", uploadUrl + result.filename);
	                            $("#" + param.dataId).val(result.filename);
	
	                            xy_util.hideLock();
	
	                        }
	                    });
	                    return false;
	                });
	
	                button.change(function() {
	                    var arr = [];
	                    var fileName = button.val();
	                    arr = fileName.split("\\");
	                    fileName = arr[arr.length - 1];
	                    var extention = fileName.substring(fileName.lastIndexOf(".") + 1).toLowerCase();
	                    if (allowExtention.indexOf(extention) == -1) {
	                        allowExtention
	                        alertDIV(xy_util.getMessage(STATICMSG["1019"], allowExtention));
	                        return false;
	                    }
	                    xy_util.lockScreen();
	
	                    $('#' + param.formId).trigger("submit");
	
	                })
	
	                //绑定附件删除功能
	                $("#" + param.delBtnId).on("click", function() {
	                    $(this).hide();
	                    $("#" + param.dataId).val("");
	
	                    if (xy_validator.nullOrEmpty(param.photoId)) {
	                        return;
	                    }
	
	                    //隐藏图片
	                    $("#" + param.photoId).parent().hide();
	                    //$("#" + param.photoId).hide();
	                    $("#" + param.photoId).attr("src", "");
	                });
	
	                $("#" + param.photoId).on("click", function() {
	                    window.open($(this).attr("src"));
	                });
	            },
	            getAll: function() {
	                var obj = {};
	                var xmlhttp;
	                if (window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari
	                    xmlhttp = new XMLHttpRequest();
	                } else { // code for IE6, IE5
	                    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	                }
	                xmlhttp.open("GET", "/static/script/positionTmp.txt", false);
	                xmlhttp.send();
	                var a = { firstLevel: [], secondLevel: {} },
	                    obj = a.secondLevel;
	                xmlhttp.responseText.replace(/.+/g, function(url) {
	                    var str = url.toString().split("\t");
	                    if ($.inArray(str[0], a.firstLevel) == -1) {
	                        a.firstLevel.push(str[0]);
	                    }
	
	                    if (!obj[str[0]]) {
	                        obj[str[0]] = {};
	                    }
	
	                    //txt空格隔开以后的数组只有两级
	                    if (!str[2]) {
	                        if (!obj[str[0]][str[0]]) {
	                            obj[str[0]][str[0]] = [];
	                        }
	                        obj[str[0]][str[0]].push(str[1]);
	                    } else {
	                        if (!obj[str[0]][str[1]]) {
	                            obj[str[0]][str[1]] = [];
	                        }
	                        obj[str[0]][str[1]].push(str[2]);
	                    }
	                })
	                return a;
	            },
	            /***生成多级选择的静态html代码
	             * option:{firstLevel:[a,b,c],secondLevel:{a:{a_child:[]},b:{b_child:[]}}}
	             *
	             * */
	            createMultilevelSelectHTML: function(option) {
	                var me = this;
	                var arr = [];
	                var data = option.data || this.getAll();
	                arr.push('<div class="options-picker" style="display: none;">');
	                arr.push('<div><div class="first-level-content">');
	                arr.push('<div  _value="" class="pick-all-first"><input type="checkbox" class="check-all-first"/><span class="li-text ml5"><b>全部</b></span></div>');
	                var _data = data.firstLevel;
	                var f_index = 0;
	                $.each(_data, function(i) {
	                    f_index++;
	                    arr.push('<div  _value="' + _data[i] + '" class="picker-first-level"><input id="checkbox_' + (f_index) + '" type="checkbox" class="checkbox-first-item" value="' + _data[i] + '"/><span class="li-text ml5">' + _data[i] + '</span></div>');
	                })
	                arr.push('</div>')
	
	                arr.push('<div classs="next-level-content">');
	
	                f_index = 0;
	                $.each(_data, function(i) {
	                    f_index++;
	                    arr.push('<div class="picker-next-level" style="display: none;" _title="' + _data[i] + '">');
	
	                    var _second = data.secondLevel[_data[i]];
	                    if (!_second) {
	                        arr.push('</div>');
	                        arr.push('</div>');
	                        return;
	                    }
	
	                    if (!$.isEmptyObject(_second)) {
	                        arr.push('<div  class="pick-all-second ver-middle" ><input type="checkbox" class="check-all-second"/><span class="picker-second-title ml5">全部</span></div>');
	                    }
	                    var s_index = 0;
	                    $.each(_second, function(k, v) {
	                        arr.push('<div  class="mt10 mb10 ver-middle pick-second-item" style="text-align: left;">');
	                        if (_data[i] != k) {
	                            s_index++;
	                            arr.push('<input id="checkbox_' + f_index + '_' + (s_index) + '" type="checkbox"  class="checkbox-second-item" value="' + k + '"/><span class="picker-second-title ml5">' + k + '</span>');
	                        }
	                        arr.push('<div class="picker-three-level clearfix " style="display: block;">');
	                        if (!v || v.length == 0) {
	                            arr.push('</div>');
	                            arr.push('</div>');
	                            return;
	                        }
	                        $.each(v, function(j) {
	                            if (!v[j + 1]) {
	                                arr.push('<div  class="mt10 ver-middle" f-data="' + _data[i] + '" s-data="' + k + '"><input id="checkbox_' + f_index + '_' + s_index + '_' + (j + 1) + '" type="checkbox"  class="checkbox-third-item" value="' + v[j] + '"/><span class="li-text ml5" >' + v[j] + '</span></div>');
	                            } else {
	                                arr.push('<div  class="mt10 ver-middle" f-data="' + _data[i] + '" s-data="' + k + '"><input id="checkbox_' + f_index + '_' + s_index + '_' + (j + 1) + '" type="checkbox"  class="checkbox-third-item" value="' + v[j] + '"/><span class="li-text ml5"  >' + v[j] + '</span>&nbsp;&nbsp;|&nbsp;&nbsp;</div>');
	                            }
	
	                        })
	                        arr.push('</div>');
	                        arr.push('</div>');
	                    })
	                    arr.push('</div>');
	
	                })
	                arr.push('</div>')
	                return arr.join("");
	            },
	            resResult: function(result, msg, callback) {
	                try {
	                    $("#loading_layer").show();
	                    //登录失效
	                    if (result.code == -10 || result.code == -11) {
	                        //var msg = this.getMessage(xy_resultCode[result.retcode]);
	                        $(".loading_layer_body").empty();
	                        var msg = result.msg;
	                        $(".loading_layer_body").text(msg);
	                        window.location.href = "";
	                        return;
	                    }
	
	                    if (result.code != 0) {
	                        //var msg = this.getMessage(xy_resultCode[result.retcode], result.text);
	                        $(".loading_layer_body").empty();
	                        var msg = result.msg;
	                        $(".loading_layer_body").text(msg);
	                        setTimeout(function() {
	                            xy_util.hideLock();
	                            callback();
	                        }, 2000);
	                        return;
	                    }
	                    if (msg) {
	                        $(".loading_layer_body").empty();
	                        $(".loading_layer_body").text(msg);
	                        setTimeout(function() {
	                            xy_util.hideLock();
	                            if (callback) {
	                                callback();
	                            }
	                        }, 2000);
	                    } else {
	                        xy_util.hideLock();
	                    }
	
	                } catch (e) {
	                    xy_util.hideLock();
	                    //error
	                }
	            },
	            tips: function(msg) {
	                try {
	                    $("#loading_layer").show();
	                    if (msg) {
	                        $(".loading_layer_body").empty();
	                        $(".loading_layer_body").text(msg);
	                        setTimeout(function() {
	                            xy_util.hideLock();
	                        }, 2000);
	                    } else {
	                        xy_util.hideLock();
	                    }
	
	                } catch (e) {
	                    xy_util.hideLock();
	                    //error
	                }
	            }
	
	
	        }
	        return xy_util;
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(33)))

/***/ }),

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function($) {/**
	 * @fileOverview
	 * @version 1.0
	 */
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(40), __webpack_require__(41)], __WEBPACK_AMD_DEFINE_RESULT__ = function(prototype, xy_msg){
		var xy_validator =  {
	
			/**
			 * 初始化较验
			 *
			 * @private
			 */
			initAutoValidator: function()
			{
				var me = this;
				//TODO:
				//keyup.validator
				$(document).on("blur.validator", "[validator]",function(event){
					me.validator(event.target,true);
				});
	
				/*$(document).on("blur.validator", , function(event){
				 me.validator(event.target);
				 });*/
	
	
				/*$(document).on("keyup.validator blur.validator",
				 "[validator], input[type='text'], input[type='password']",
				 function(event){
				 me.validator(event.target);
				 }
				 );*/
			},
	
			/**
			 * 获取较验规则
			 *
			 * @param {Object} obj    JS DOM节点
			 * @returns {String}
			 */
			getValidatorRules: function(obj)
			{
				var rules = [];
				if ( $(obj).attr("validator") != null )
				{
					rules = $.trim($(obj).attr("validator")).split(" ");
				}
	
				if ( !$(obj).closest("[removeDefaultRules]").length )
				{
					rules.reverse();
					rules.push("char");
					rules.reverse();
				}
	
				return rules;
			},
	
			/**
			 * 获取需要较验的值
			 *
			 * @param {Object} obj    JS DOM节点
			 * @returns {String}
			 */
			getValidatorValue: function(obj)
			{
				//初始化返回值
				var value = "";
	
				//检查节点标签
				var tagName = obj.tagName;
				switch (tagName.toUpperCase())
				{
					case "INPUT":
					case "TEXTAREA":
						value = $.trim($(obj).val());
						break;
	
					case "CITE":
						//radio 插件
						if ( $(obj).attr("type") == "radio" )
						{
							var appName = $(obj).attr("name");
	
							//真正取值的对象
							var valueObj = $("cite[name='" + appName + "'].checked");
	
							//有选中节点 且 选中节点有值
							if ( valueObj.length > 0 && this.notNullOrEmpty(valueObj.eq(0).attr("value")))
							{
								value = valueObj.eq(0).attr("value");
							}
						}
						//checkbox插件
						else if ( $(obj).attr("type") == "checkbox" )
						{
							var appName = $(obj).attr("name");
							var valueBuffer = [];
							$("cite[name='" + appName + "'].checked").each(function(){
								valueBuffer.push($(this).attr("value"));
							});
							value = valueBuffer.join(",");
						}
						//标准元素
						else
						{
							value = $.trim($(obj).text());
						}
						break;
	
					default:
						value = $.trim($(obj).text());
						break;
				}
	
				return value.toString();
			},
	
			/**
			 * 获取错误提示对象
			 *
			 * @param {Object} obj    JS DOM节点
			 * @returns {jQuery}      jQuery对象
			 */
			getErrorTips: function(obj,flag)
			{
	
				//已指定错误提示载体,用指定的载体替换
				if ( $(obj).attr("errorTipsId") && $("#" + $(obj).attr("errorTipsId")).length > 0 )
				{
	
					return $("#" + $(obj).attr("errorTipsId")).removeClass("u-error").addClass("u-error");
				}
	
				//默认取同级的错误提示元素
				if ( $(obj).siblings("p.errorTips").length > 0 )
				{
					$(obj).siblings("p.errorTips").removeClass("u-error").addClass("u-error");
					return $(obj).siblings("p.errorTips").eq(0);
				}
	
				//没有同级的错误提示元素,在父节点的末位创建
				$(obj).parent().append("<p class='u-error errorTips closeToHide'></p>");
				return $(obj).siblings("p.errorTips").eq(0);
			},
	
			/**
			 * 获取错误提示关键字
			 *
			 * @param {Object} obj    JS DOM节点
			 * @returns {String}      关键字
			 */
			getErrorTipsKey: function(obj)
			{
				return $(obj).attr("errorTipsKey") || "";
			},
	
			/**
			 * 执行指定元素较验
			 *
			 * @param {Object} obj    指定较验的JS DOM节点
			 * @param {Boolean}flag   失焦时不做空验证
			 * @returns {Boolean}     较验结果
			 */
			validator: function(obj,flag)
			{
				var me = this;
				//检查节点类型
				var nodeType = obj.nodeType;
				if ( nodeType != 1 )
				{
					return true;
				}
	
				//检查较验规则
				var rules = this.getValidatorRules(obj);
	
				//较验值
				var value = this.getValidatorValue(obj);
	
				//错误提示元素
				var errorTips = this.getErrorTips(obj,flag);
	
				//错误提示关键字
				var errorTipsKey = this.getErrorTipsKey(obj);
				//same属性较验
				if ( $.inArray("same", rules) > -1 && !this.sameValidator(obj) )
				{
					return false;
				}
	
				//值为空,且rules里没有非空较验,返回成功
				if ( value == "" && $.inArray("notNullOrEmpty", rules) == -1 &&  $.inArray("notNullOrEmptySelect", rules)== -1 )
				{
					errorTips.removeAttr("title");
					errorTips.hide();
					return true;
				}
				//常规较验
				try
				{
	
					for ( var i = 0, len = rules.length; i < len; i++ )
					{
						if ( rules[i] == "same" )
						{
							continue;
						}
	
						//较验结果
						var ruleFlag = this[rules[i]](value, obj);
						//较验未通过
						if ( !ruleFlag )
						{
							//失焦时不做空验证
							if(rules[i] == "notNullOrEmpty" && flag == true){
								errorTips.hide();
								return false;
							}
							if(rules[i] == "notNullOrEmptySelect"){
								$(obj).parent(".select-warp").addClass("error-input");
							}
							$(obj).parent().find("input").addClass("error-input");
							var errorMsg = xy_validator.getMessage(xy_msg["VALIDATOR_" + rules[i].toUpperCase()], errorTipsKey);
							//errorTips.attr("title", htmlTitleEncode(errorMsg));
							errorTips.text(me.htmlTitleEncode(errorMsg));
							errorTips.show();
							return false;
						}else{
							if(rules[i] == "notNullOrEmptySelect"){
								$(obj).parent(".select-warp").removeClass("error-input");
							}
						}
					}
	
	
	
					//attr属性较验
					var validatorAttrList = [["min", "max"]];
					for ( var i = 0, len = validatorAttrList.length; i < len; i++ )
					{
						if ( !this.attrValidator(obj, validatorAttrList[i]) )
						{
							return false;
						}
					}
	
					errorTips.removeAttr("title");
					errorTips.hide();
					errorTips.parent().find("input").removeClass("error-input");
					return true;
				}
				catch(e)
				{
					var errorMsg = xy_validator.getMessage(xy_msg["VALIDATOR_UNKNOWNERROR"]);
					//errorTips.attr("title", xy_util.htmlTitleEncode(errorMsg));
					errorTips.text(me.htmlTitleEncode(errorMsg));
					errorTips.show();
					return false;
				}
			}, //-- validator END
	
			/**
			 * 指定范围较验
			 *
			 * @param {Object} obj    较验的jQuery DOM节点
			 * @returns {Boolean}     较验结果
			 */
			autoValidator: function(obj)
			{
				var result = true;
	
				var me = this;
				obj.find("[validator]").each(function(){
					var res = me.validator(this);
					if ( !res )
					{
						result = res;
					}
				});
	
				return result;
			},
	
			/**
			 * same属性较验
			 *
			 * @returns {Boolean}
			 *
			 * @private
			 */
			sameValidator: function(obj)
			{
				var me =  this;
				//较验值
				var value = this.getValidatorValue(obj);
	
				//错误提示元素
				var errorTips = this.getErrorTips(obj);
	
				//错误提示关键字
				var errorTipsKey = this.getErrorTipsKey(obj);
	
	
				//未指定较验对象
				if ( this.nullOrEmpty($(obj).attr("equalTo")) )
				{
					return true;
				}
	
				//获取较验对象的值
				var targetDom = $($(obj).attr("equalTo"))[0];
				var targetValue = this.getValidatorValue(targetDom);
				//较验相同值
				if ( targetValue != value )
				{
					var errorMsg = xy_validator.getMessage(xy_msg["VALIDATOR_SAME"], errorTipsKey);
					//errorTips.attr("title", xy_util.htmlTitleEncode(errorMsg));
					errorTips.text(me.htmlTitleEncode(errorMsg));
					errorTips.show();
					return false;
				}
	
				return true;
			},
	
			/**
			 * 扩展属性较验
			 *
			 * @returns {Boolean}
			 *
			 * @private
			 */
			attrValidator: function(obj, attr)
			{
				var me = this;
				//较验值
				var value = this.getValidatorValue(obj);
	
				//错误提示元素
				var errorTips = this.getErrorTips(obj);
	
				//错误提示关键字
				var errorTipsKey = this.getErrorTipsKey(obj);
	
				//数组类型较验
				if ( attr instanceof Array )
				{
					for ( var i = 0, len = attr.length; i < len; i++ )
					{
						//较验成功
						if ( this.attrValidator(obj, attr[i]) )
						{
							continue;
						}
	
						//较验失败
						var errorMsg = this.getErrorMsg(obj, attr);
						//errorTips.attr("title", xy_util.htmlTitleEncode(errorMsg));
						errorTips.text(me.htmlTitleEncode(errorMsg));
						errorTips.show();
						return false;
					}
					return true;
				}
	
				//标准较验
				attr += "";
				if ( this.nullOrEmpty($(obj).attr(attr)) )
				{
					return true;
				}
	
				if ( this[attr](value, $(obj).attr(attr)) )
				{
					return true;
				}
	
				var key = "VALIDATOR_" + attr.toUpperCase();
				var errorMsg = xy_validator.getMessage(xy_msg[key], errorTipsKey);
				//errorTips.attr("title", xy_util.htmlTitleEncode(errorMsg));
				errorTips.text(me.htmlTitleEncode(errorMsg));
				errorTips.show();
				return false;
			},
			/**
			 * 替换动态消息
			 * @param   {String} msg          替换前的字符串
			 * @param   {String} arguments    替换的字符串(不定数量)
			 * @returns {String} msg          替换后的字符串
			 *
			 * @example
			 * getMessage();                                     //return "";
			 * getMessage("message");                            //return "message";
			 * getMessage("message", "str");                     //return "message";
			 * getMessage("message {1}", "str");                 //return "message str";
			 * getMessage("message {2}", "str");                 //return "message {2}";
			 * getMessage("message {1}", "str", "hello");        //return "message str";
			 * getMessage("message {1} {2}", "str", "hello");    //return "message str hello";
			 * getMessage("message {2}", "str", "hello");        //return "message hello";
			 */
			getMessage: function(msg)
			{
				if(arguments.length == 0)
				{
					return "";
				}
	
				msg += "";
				for(var i=1; i<arguments.length; i++)
				{
					var key = "\\{" + i + "\\}";
					var value = arguments[i] + "";
					msg = msg.replaceAll(key, value);
				}
				return msg;
			},/*
			/**
			 * 获取错误提示语
			 *
			 * @private
			 */
			getErrorMsg: function(obj, list)
			{
				var me = this;
				//错误提示关键字
				var errorTipsKey = this.getErrorTipsKey(obj);
	
				var errorMsgBuffer = [];
				var key = "";
				var msg = "";
				for ( var i = 0, len = list.length; i < len; i++ )
				{
					key = "VALIDATOR_" + list[i].toUpperCase();
	
					if ( this.nullOrEmpty($(obj).attr(list[i])) )
					{
						continue;
					}
	
					msg = errorMsgBuffer.length ? xy_msg[key].replaceAll("\\{1\\}", "") : xy_msg[key];
					errorMsgBuffer.push(xy_validator.getMessage(msg, errorTipsKey, $(obj).attr(list[i])));
				}
	
				return errorMsgBuffer.join(",");
			},
			/**
			 * HTML代码中的title属性编码
			 *
			 * @param   {String} objVal    需要编码的字符串
			 * @returns {String}           编码后的字符串
			 */
			htmlTitleEncode: function(objVal)
			{
				if ( this.nullOrEmpty(objVal) )
				{
					objVal = "";
				}
	
				var str = objVal + "";
				if(str == '')
				{
					return str;
				}
				str = str.replace(/&/g, "&amp;")
					.replace(/</g, "&lt;")
					.replace(/>/g, "&gt;")
					.replace(new RegExp("\"","g"), "&quot;")
					.replace(new RegExp("\'","g"), "&#39;")
					.replace(new RegExp("\r|\n","g"), "&#13");
				return str;
			},
	
			/**
			 * 基础较验
			 *
			 * @param {Object} str
			 * @returns {Boolean}
			 *
			 * @from Admin
			 */
			char: function(str)
			{
				//允许字符串中间有空格，不允许头或尾有空格，不允许半角加号，因为级联时会丢失
				return (/^[\u4E00-\u9FA5a-zA-Z0-9\/＋\[\]\w\-\(\).（）;:#]*$|^([\u4E00-\u9FA5a-zA-Z0-9\/＋\[\]\w\-\(\).（）;:#])+([\u4E00-\u9FA5a-zA-Z0-9\/＋\[\]\w\-\(\).（）;:# ])+([\u4E00-\u9FA5a-zA-Z0-9\/＋\[\]\w\-\(\).（）;:#])+$/.test(str));
			},
	
			/**
			 * null较验
			 *
			 * @param {Object} str
			 * @returns {Boolean}
			 */
			isNull: function(str)
			{
				return null == str;
			},
	
			/**
			 * 空值较验
			 *
			 * @param {Object} str
			 * @returns {Boolean}
			 */
			isEmpty: function(str)
			{
				return null != str && str.length == 0;
			},
	
			/**
			 * 不为空较验
			 *
			 * @param {Object} str
			 * @returns {Boolean}
			 */
			notNullOrEmpty: function(str)
			{
				return !xy_validator.nullOrEmpty(str);
			},
			/**
			 *选择框不为空校验
			 */
			notNullOrEmptySelect: function(str)
			{
				return !xy_validator.nullOrEmpty(str);
			},
	
			/**
			 * 为空较验
			 *
			 * @param {Object} str
			 * @returns {Boolean}
			 */
			nullOrEmpty: function(str)
			{
				return null == str || str.length == 0;
			},
	
			/**
			 * 数字较验
			 *
			 * @param {Object} str
			 * @returns {Boolean}
			 */
			number: function(str)
			{
				return str == parseInt(str, 10)
					&& (str + "").indexOf("-") == -1
					&& (str + "").indexOf(".") == -1;
					//&& (str == 0 || (str + "").indexOf("0") != 0);
			},
			/**
			 * 不能为负数,0
			 *
			 * @param {Object} str
			 * @returns {Boolean}
			 */
			numberPoint : function(str){
				return (/^(?!(0[0-9]{0,}$))[0-9]{1,}[.]{0,}[0-9]{0,}$/.test(str));
			},
			/**
			 * 邮件地址较验
			 *
			 * @param {String} str
			 * @returns {Boolean}
			 */
			email: function(str)
			{
				//return (/^$|^(([a-zA-Z0-9])+([a-zA-Z0-9-_.]{1,})@([a-zA-Z0-9])+.[a-zA-Z0-9\.\_]{2,})$/.test(str));
	            //modify 邮箱基本格式验证 by zhanghaibing on 2016/1/23
	
				/*return (/^[a-zA-Z0-9]+([._\\-]*[a-zA-Z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+[.]{1}){1,63}[a-z0-9]+$/.test(str));*/
				return (/^([a-z0-9A-Z]+[-|\.|_]?)+[a-z0-9A-Z]@([a-z0-9A-Z]+(-[a-z0-9A-Z]+)?\.)+[a-zA-Z]{2,}$/.test(str));
			},
			/**
			 * 多邮箱校验
			 *
			 * @param {String} str
			 * @returns {Boolean}
			 */
			moreEmail : function(str){
				//return (/^$|^(([a-zA-Z0-9])+([a-zA-Z0-9-_.]{1,})@([a-zA-Z0-9])+.[a-zA-Z0-9\.\_]{2,};?)+$/.test(str));
				return (/^[a-zA-Z0-9]+([._\\-]*[a-zA-Z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.{1}){1,63}[a-z0-9]+$/.test(str));
			},
			/*
			* 邮箱 手机
			* */
			phoneEmail:function(str){
	
				var phone = /^((0?1\d{10})|((0(\d{2,3}))[\-]?\d{7,8}))$|^(0[0-9]{2,3}\-)?([2-9][0-9]{6,7})$/.test(str);
				var email = /^([a-z0-9A-Z]+[-|\.|_]?)+[a-z0-9A-Z]@([a-z0-9A-Z]+(-[a-z0-9A-Z]+)?\.)+[a-zA-Z]{2,}$/.test(str);
				if(phone || email){
					return true;
				}
	
	
			},
	    		/**
			 * 非主流邮件地址较验
			 *
			 * @param {String} str
			 * @returns {Boolean}
			 */
			companyEmail: function(str)
			{
				return !(/^$|^(([a-zA-Z0-9])+([a-zA-Z0-9-_.]{1,})@(qq|163|126|sina|gmail|outlook|yeah|aliyun|139|189).[a-zA-Z0-9\.\_]{2,})$/.test(str));
			},
			/**
			 * 密码位数校验
			 *
			 * @param {String} str
			 * @returns {Boolean}
			 */
			pwdlength: function(str)
			{
				return (/^$|^(([a-zA-Z0-9]){8,16})$/.test(str));
			},
			/**
			 * 密码格式为字母与数字组合且为8-16位数
			 *
			 * @param {String} str
			 * @returns {Boolean}
			 */
			pwdFormat: function(str)
			{
				return (/^(?!\d+$)(?![A-Za-z]+$)[a-zA-Z0-9]{8,16}$/.test(str));
			},
			/**
			 * NOTES地址较验
			 *
			 * @param {Object} str
			 * @returns {Boolean}
			 *
			 * @from Admin
			 */
			notes: function(str)
			{
				return (/^[\u4E00-\u9FA5a-zA-Z0-9\/＋\[\]\w\-\(\).（）;#@]*$|^([\u4E00-\u9FA5a-zA-Z0-9\/＋\[\]\w\-\(\).（）;#@])+([\u4E00-\u9FA5a-zA-Z0-9\/＋\[\]\w\-\(\).（）;#@ ])+([\u4E00-\u9FA5a-zA-Z0-9\/＋\[\]\w\-\(\).（）;#@])+$/.test(str));
			},
	
			/**
			 * 电话号码较验
			 *
			 * @param {String} str
			 * @returns {Boolean}
			 */
			phone: function(str)
			{
				return (/^([0-9\-]{5,})?$/.test(str));
			},
			telPhone: function(str){
				return (/^((0?1\d{10})|((0(\d{2,3}))[\-]?\d{7,8}))$|^(0[0-9]{2,3}\-)?([2-9][0-9]{6,7})$/.test(str));
			},
			/**
			 * 备注长度较验
			 *
			 * @param {String} str
			 * @returns {Boolean}
			 */
			memo: function(str)
			{
				return str.length > 250;
			},
	
			/**
			 * defined类型较验
			 *
			 * @param {Object} str
			 * @returns {Boolean}
			 */
			isDefined: function(ele)
			{
				return ele != null && typeof ele != "undefined";
			},
			isURL: function(str){
				return ((/^((https?|ftp|news):\/\/)?([a-z]([a-z0-9\-]*[\.。])+([a-z]{2}|aero|arpa|biz|com|coop|edu|gov|info|int|jobs|mil|museum|name|nato|net|org|pro|travel)|(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]))(\/[a-z0-9_\-\.~]+)*(\/([a-z0-9_\-\.]*)(\?[a-z0-9+_\-\.%=&]*)?)?(#[a-z][a-z0-9_]*)?$/).test(str))
			},
			/**
			 * 身份证号码较验
			 *
			 * @param {String} str
			 * @returns {Boolean}
			 */
			identityCode: function(str)
			{
				//长度有效性较验
				if ( !(/^([\d]{15}|[\d]{17}[Xx\d])$/.test(str)) )
				{
					return false;
				}
	
				//出生年月日格式转换
				var dayStr;
				if ( str.length == 15 )
				{
					dayStr = "19" + str.substr(6,2)
					+ "-" + str.substr(8,2)
					+ "-" + str.substr(10,2);
				}
				else
				{
					dayStr = str.substr(6,4)
					+ "-" + str.substr(10,2)
					+ "-" + str.substr(12,2);
				}
	
				var brithday = new Date();
				brithday.setCNDate(dayStr);
	
				//较验出生日期有效性
				return dayStr == brithday.format();
			},
	
			/**
			 * 生日
			 * @param {String} str yyyy-MM-dd
			 *
			 */
			brithday: function(str){
	
				//长度有效性较验
				if ( !(/^([\d]{4}-[\d]{2}-[\d]{2})$/.test(str)) )
				{
					return false;
				}
	
				var brithday = new Date();
				brithday.setCNDate(str);
	
				//较验出生日期有效性
				return str == brithday.format();
			},
	
			/**
			 * 带宽
			 *
			 * @param {String} str
			 * @returns {Boolean}
			 */
			bandWidth: function(str)
			{
				return (/^\d+(.\d+)?$/.test(str));
			},
	
			/**
			 * 最小值验证
			 *
			 * @param {String} str    目标值
			 * @param {String} min    最小值
			 * @returns {Boolean}
			 */
			min: function(str, min)
			{
				var num = parseInt(str, 10);
				var min = parseInt(min, 10);
				if ( isNaN(num) || isNaN(min) )
				{
					return false;
				}
				return min <= num;
			},
	
			/**
			 * 最大值验证
			 *
			 * @param {String} str    目标值
			 * @param {String} max    最大值
			 * @returns {Boolean}
			 */
			max: function(str, max)
			{
				var num = parseInt(str, 10);
				var max = parseInt(max, 10);
				if ( isNaN(num) || isNaN(max) )
				{
					return false;
				}
				return max >= num;
			},
	
			/**
			 * 两位小数点
			 *
			 * @param {Object} str
			 * @returns {Boolean}
			 */
			decimalPoint : function(str){
				var reg = /^[0-9]+([.]{1}[0-9]{1,2})?$/;
				//格式较验
				if ( !(reg.test(str)) )
				{
					return false;
				}
				return true;
			}
	
		};
	
		return xy_validator;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(33)))

/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {/**
	 * String.replaceAll
	 * 
	 * @param {String} s1
	 * @param {String} s2
	 * @returns {String}
	 */
	String.prototype.replaceAll = function(s1, s2) {
		try
		{
			return this.replace(new RegExp(s1, "gm"), s2);
		}
		catch(e)
		{
			return this;
		}
	};
	
	/**
	 * String.toSqlString
	 * 
	 * @param {String} s1
	 * @param {String} s2
	 * @returns {String}
	 */
	String.prototype.toSqlString = function() {
		try
		{
			return this.replaceAll("/", "//");
		}
		catch(e)
		{
			return this;
		}
	};
	
	/**
	 * String.startWidth
	 * 
	 * @param {String} str
	 * @returns {Boolean}
	 */
	String.prototype.startWith = function(str){
		var reg = new RegExp("^"+str);
		return reg.test(this);
	};
	
	/**
	 * Date.format
	 * 
	 * @param {String} format    format(default:"yyyy-MM-dd")
	 * @returns {String}
	 */
	Date.prototype.format = function(format)
	{
		var o = {
			"M+" : this.getMonth() + 1,
			"d+" : this.getDate(),
			"H+" : this.getHours(),
			"m+" : this.getMinutes(),
			"s+" : this.getSeconds(),
			"q+" : Math.floor((this.getMonth() + 3)/3),
			"S+" : this.getMilliseconds()
		};
		
		if ( !format )
		{
			format = "yyyy-MM-dd";
		}
		
		if(/(y+)/.test(format))
		{
			format = format.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length));
		}
		
		if(/(S+)/.test(format))
		{
			format = format.replace(RegExp.$1,(this.getMilliseconds()+"").substr(3-RegExp.$1.length));
		}
		
		for(var k in o)
		{
			if(new RegExp("(" +k + ")").test(format))
			{
				format = format.replace(RegExp.$1,RegExp.$1.length == 1?o[k]:("00"+o[k]).substr((""+o[k]).length));
			}
		}
		return format;
	};
	
	/**
	 * Date.getCNDay    获取日期是生期几,返回中文字符
	 * 
	 * @returns {String}    星期几
	 */
	Date.prototype.getCNDay = function()
	{
		var cnDay = {
			"0": "星期日",
			"1": "星期一",
			"2": "星期二",
			"3": "星期三",
			"4": "星期四",
			"5": "星期五",
			"6": "星期六"
		};
		
		return cnDay[this.getDay()];
	};
	
	/**
	 * Date.setCNDate    设置date对象指定的日期
	 * 
	 * @param {String} str    指定的日期(格式: yyyy-MM-dd HH:mm:ss:SSS,支持不完全设置)
	 */
	Date.prototype.setCNDate = function(str)
	{
		if ( !str )
		{
			return;
		}
		var strs = $.trim(str).split(" ");
	
		var dates = strs[0].split("-");
		
		//年
		var year = "19" + dates[0];
		year = parseInt(year.substring(year.length - 4, year.length), 10);
		if ( isNaN(year) )
		{
			year = this.getFullYear();
		}
		
		//月
		var month = this.getMonth();
		if ( dates.length > 1 )
		{
			var _month = parseInt(dates[1], 10);
			if ( !isNaN(_month) )
			{
				month = _month - 1;
			}
		}
		
		//日
		var date = this.getDate();
		if ( dates.length > 2 )
		{
			var _date = parseInt(dates[2], 10);
			if ( !isNaN(_date) )
			{
				date = _date;
			}
		}
		
		//设置年月日
		this.setFullYear(year, month, date);
		
		if ( strs.length < 2 )
		{
			return;
		}
		
		//设置时间
		var times = strs[1].split(":");
		
		//时
		var hour = this.getHours();
		var _hour = parseInt(times[0], 10);
		if ( !isNaN(_hour) )
		{
			hour = _hour;
		}
		
		//分
		var min = this.getMinutes();
		if ( times.length > 1 )
		{
			var _min = parseInt(times[1], 10);
			if ( !isNaN(_min) )
			{
				min = _min;
			}
		}
		
		//秒
		var sec = this.getSeconds();
		if ( times.length > 2 )
		{
			var _sec = parseInt(times[2], 10);
			if ( !isNaN(_sec) )
			{
				sec = _sec;
			}
		}
		
		//毫秒
		var ms = this.getMilliseconds();
		if ( times.length > 3 )
		{
			var _ms = parseInt(times[3], 10);
			if ( !isNaN(_ms) )
			{
				ms = _ms;
			}
		}
		
		this.setHours(hour, min, sec, ms);
		
	};
	
	/**
	 * Array.joinAll
	 * 
	 * @param {String} seperator
	 * @returns {String}
	 */
	Array.prototype.joinAll = function(seperator)
	{
		for ( var i = 0, len = this.length; i < len; i++ )
		{
			if ( this[i] instanceof Array )
			{
				this[i] = this[i].joinAll(seperator);
			}
		}
		return this.join(seperator);
	};
	
	/**
	 * Array.last
	 * 
	 * @returns {Object}
	 */
	Array.prototype.last = function()
	{
		return this[(this.length > 0 ? this.length - 1 : 0)];
	};
	
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(33)))

/***/ }),

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__; /**
	 * 标准用语
	 */
	!(__WEBPACK_AMD_DEFINE_RESULT__ = function(){
		return  {
			//较验提示
			VALIDATOR_UNKNOWNERROR: "未知的校验错误",
			VALIDATOR_CHAR: "不满足基础校验规则",
			VALIDATOR_NOTNULLOREMPTY: "请输入{1}",
			VALIDATOR_NOTNULLOREMPTYSELECT:"请选择{1}",
			VALIDATOR_PHONE: "{1}不符合规则",
			VALIDATOR_TELPHONE: "{1}不符合规则",
			VALIDATOR_LANDLINE: "请输入{1}",
			VALIDATOR_NUMBER: "{1}不是有效数值",
			VALIDATOR_SAME: "两次输入的{1}不一致",
			VALIDATOR_EMAIL: "请输入正确的邮箱地址，如example@jipin.com",//"{1}不符合规则",
			VALIDATOR_MOREEMAIL: "{1}不符合规则",
			VALIDATOR_COMPANYEMAIL: "请输入以企业域名为后缀的邮箱地址",//{1}不能为公共邮箱",
			VALIDATOR_IDENTITYCODE: "{1}不符合身份证号码规则",
			VALIDATOR_DECIMALPOINT: "{1}必须为数字且最多只能保留两位小数",
			VALIDATOR_PWDLENGTH: "密码位数为8-16位",
			VALIDATOR_PWDFORMAT: "输入8-16位包含字母、数字的密码",//"8-16位字母与数字",
			VALIDATOR_ISURL: "不是正确的网址格式",
			VALIDATOR_NUMBERPOINT: "{1}不符合规则",
			VALIDATOR_PHONEEMAIL: "请输入正确手机号码或邮箱",
	
			VALIDATOR_MIN : "{1}必须大于或者等于{2}",
			VALIDATOR_MAX : "{1}必须小于或者等于{2}",
	
			BEYOND_MAX_LENGTH: "{1}过长。",
			BEYOND_MIN_LENGTH: "{1}过短。",
	
			//loading
			COMMON_LOADING_TEXT: "loading..."
		};
	}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))


/***/ }),

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function($) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(38), __webpack_require__(44), __webpack_require__(45)], __WEBPACK_AMD_DEFINE_RESULT__ = function(util, positionSelect, xy_select) {
	    var validationVM;
	    // 定义所有相关的 vmodel
	    var vm = avalon.define({
	        $id: "compensation",
	        _id: "",
	        type: "",
	        short_id: "",
	        username: "",
	        identity: "",
	        toggle: false,
	        api_url: "",
	        data_id: "",
	        params: {},
	        info: [],
	        hasInfo: "请添加分析说明...",
	        J_compensationtype: "职能",
	        c_function: "产品,设计,开发",
	        c_industry: "",
	        c_region: "",
	        c_experience: "",
	        c_time: "近一个月",
	        report_info: "",
	        data_disturb: [],
	        data: {},
	        show: function(id) {
	            // validationVM.resetAll();
	            if (id.charAt(0) == "b") {
	                var arr = id.split(",");
	                var id = arr[0];
	                var index = arr[1];
	                if (index) {
	                    for (var i = 0; i < $(".J_edit_desc").length; i++) {
	                        if (i == index) {
	                            $(this).attr("isClick", "yes");
	                            break;
	                        }
	                    }
	                } else {
	                    $("#report_info").attr("isClick", "yes");
	                }
	
	                var dialog = avalon.vmodels[id];
	
	            } else {
	
	                var dialog = avalon.vmodels[id];
	            }
	
	            if (!dialog) {
	
	            } else {
	                dialog.toggle = true;
	            }
	        },
	        $aaOpts: {
	            title: "数据干预",
	            width: 500,
	            onConfirm: function() {
	                var tab = vm.J_chartstype == "人才分布" ? "talentdistribution" : param.tab == "人才流动" ? "talentflow" : "supplydemand";
	                var bean = { data: JSON.stringify(vm.data_disturb), data_id: vm.data_id };
	                $.post("/api/data/cheat", bean, function(result) {
	                    util.resResult(result, "数据干预成功", function() {
	                        $("#J_charts_data").val(JSON.stringify(vm.data_disturb));
	                        $("#report_iframe").attr("src", "../lib/resource-report/" + tab + ".html");
	                    });
	                })
	            }
	        },
	        $bbOpts: {
	            title: "添加分析说明",
	            width: 500,
	            onConfirm: function() {
	                if ($("#report_info").attr("isClick")) {
	                    vm.saveDesc();
	                    $("#report_info").attr("isClick", "");
	                } else {
	                    $(".J_edit_desc").each(function(i, v) {
	                        if ($(v).attr("isClick")) {
	                            console.log(vm.report_info);
	                            vm.saveDesc(v);
	                            $(v).attr("isClick", "");
	                        }
	                    });
	                }
	
	            }
	        },
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
	        analysisData: function(obj) {
	            var param = vm.getBean();
	            // var tab = param.tab == "人才分布" ? "talentdistribution" : param.tab == "人才流动" ? "talentflow" : "supplydemand";
	            util.lockScreen();
	            $.post(param.url, param.bean, function(result) {
	                util.hideLock();
	                util.resResult(result);
	                vm.data_disturb = result.data.data.data;
	                $("#J_charts_data").val(JSON.stringify(result.data.data.data)).attr("charts_type", param.charts_type).attr("bean", JSON.stringify(param.bean));
	                $("#report_iframe").attr("src", "../lib/resource-report/remuneration.html");
	                $("#report_info").attr("api_url", result.data.data.api_url);
	                if (result.data.info.length > 0) {
	                    $("#report_info").attr("user_id", result.data.info[0].pm_user_id);
	                    $("#report_info").attr("data_id", result.data.info[0]._id);
	                    if (vm.type == "3") {
	                        $(".charts-warp").val('').val(result.data.info[0].info);
	                        vm.hasInfo = result.data.info[0].info;
	                    }
	                } else {
	                    $("#report_info").attr("data_url", "").attr("data_id", "").val('');
	                    if (vm.type == "3") {
	                        $(".charts-warp").val('');
	                        vm.hasInfo = "请添加分析说明...";
	                    }
	                }
	
	                //超管与公司权限
	                if (vm.type != "3") {
	                    vm.info = result.data.info;
	                }
	                vm.params = result.data.data.params;
	                vm.api_url = result.data.data.api_url;
	                vm.data_id = result.data.data._id;
	
	
	            })
	        },
	        getBean: function() {
	            var tab = vm.J_compensationtype;
	            var bean = {};
	            var url = "";
	            var charts_type = "";
	            switch (tab) {
	                case "职能":
	                    bean = {
	                        name: vm.c_function,
	                        industry: vm.c_industry,
	                        experience: vm.c_experience.substring(0, vm.c_experience.indexOf("年")),
	                        city: vm.c_region,
	                        // index: 180,
	                        type: vm.c_time == "近一个月" ? 2 : vm.c_time == "近三个月" ? 3 : 4,
	                        top: 10
	                    }
	                    if (bean.experience == "3") {
	                        bean.experience = "0-3";
	                    }
	                    if (bean.experience == "12") {
	                        bean.experience = "12+";
	                    }
	                    url = "/api/func/salary/analysis";
	                    break;
	                case "岗位":
	
	                    bean = {
	                        name: vm.c_function,
	                        industry: vm.c_industry,
	                        experience: vm.c_experience.substring(0, vm.c_experience.indexOf("年")),
	                        city: vm.c_region,
	                        // index: 180,
	                        type: vm.c_time == "近一个月" ? 2 : vm.c_time == "近三个月" ? 3 : 4,
	                        top: 10
	                    }
	                    url = "/api/position/salary/analysis";
	                    break;
	                default:
	                    break;
	            }
	
	            return { bean: bean, url: url };
	        },
	        saveDesc: function(obj) {
	            var user_id = $("#report_info").attr("user_id") ? $("#report_info").attr("user_id") : vm._id;
	            var bean = {};
	            if (obj) {
	                var param = {
	                    api_url: $(obj).attr("api_url"),
	                    user_id: $(obj).attr("user_id"),
	                    report_info: vm.report_info,
	                    params: JSON.stringify(vm.params)
	                }
	                bean = param;
	                console.log(bean);
	            } else {
	                bean = {
	                    api_url: vm.api_url,
	                    user_id: user_id,
	                    report_info: vm.report_info,
	                    params: JSON.stringify(vm.params)
	                };
	                console.log(bean);
	            }
	
	            $.post("/api/info/write", bean, function(result) {
	                util.resResult(result, "添加分析说明成功", function() {
	                    $(obj).prev().text(bean.report_info);
	                });
	            })
	        },
	        domLisenter: function() {
	            // $(".configbar").find("input").blur(function() {
	            //     $('#maskLayer').remove();
	            // })
	        },
	        getJson: function() {
	            //发送数据到后台
	            var url = "../data/config203.json";
	            util.lockScreen();
	            $.get(url, function(jsonObj) {
	                util.hideLock();
	                vm.data = jsonObj;
	                vm.domLisenter();
	            });
	        },
	        doClick: function(str) {
	            var _this = this;
	            var obj = {};
	            obj[str] = vm.data[str];
	            positionSelect.doClick.call(_this, obj);
	
	        }
	    });
	
	    vm.$watch("J_compensationtype", function() {
	        $("#positionDiv").html("");
	        switch (vm.J_compensationtype) {
	            case "职能":
	                vm.c_function = "产品,设计,开发";
	                break;
	            case "岗位":
	                vm.c_function = "产品经理,UI设计师,web前端开发";
	                break;
	            default:
	                break;
	        }
	        vm.analysisData();
	    });
	
	
	
	    //开始扫描编译
	    avalon.scan(document.body);
	
	    return avalon.controller(function($ctrl) {
	        // 视图渲染后，意思是avalon.scan完成
	        $ctrl.$onRendered = function() {
	            document.title = '数联寻英';
	            $('#side_accordion div').removeClass('md-accent-bg').eq(1).addClass('md-accent-bg');
	            //生成数据
	            vm.analysisData();
	            $("#result").bind("click", function() {
	                xy_select.init({
	                    containerId: "positionDiv",
	                    className: "big-window",
	                    nameId: "result"
	                });
	            });
	
	
	        };
	        // 进入视图
	        $ctrl.$onEnter = function(param, rs, rj) {
	            var userinfo = vm.getPassFromCookie();
	            var userBean = userinfo.split('|');
	            vm._id = userBean[0];
	            vm.type = userBean[1];
	            vm.identity = vm.type == "1" ? "管理员" : vm.type == "2" ? "公司" : "业务员";
	            vm.short_id = userBean[2];
	            vm.username = userBean[3];
	            vm.getJson();
	        };
	        // 对应的视图销毁前
	        $ctrl.$onBeforeUnload = function() {
	            $(".oni-dialog").empty();
	        };
	        $ctrl.$vmodels = [vm];
	    })
	
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(33)))

/***/ }),

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function($) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
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
	                output += '<li style="float:left;"><label style="width:100%;cursor: pointer;"><input type="checkbox" id="checkbox_' + i + '" class="chk_1"/><label for="checkbox_' + i + '"></label>' + v + '</label></li>';
	                // output += '<li><input type="checkbox"/>' + v + '</li>';
	            })
	            if (dataArr.length > 5) {
	                $('#drag').width('300px');
	            } else {
	                $('#drag').width('150px');
	            }
	
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
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(33)))

/***/ }),

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function($) {   !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
	       'use strict';
	       var xy_select = {
	           init: function(settings) {
	               if (this.length < 1) { return; };
	               // 默认值
	               settings = $.extend({
	                   containerId: "positionDiv",
	                   className: "big-window",
	                   nameId: "result",
	                   required: true,
	                   maxCount: 3,
	                   onConfirm: null
	               }, settings);
	
	               var box_obj = $(this);
	               var container = $("#" + settings.containerId);
	               var num = settings.containerId;
	               var title = "<div class=\"title\"><b>请选择</b><span class=\"tip\">(最多选择" + settings.maxCount + "项)</span> &nbsp&nbsp;<span class='tip' style='font-weight:bold;' id='tip_" + num + "'></span><a href=\"javascript:void(0)\" ></a></div>";
	               var selectedResult = "<div class=\"sele-tag\"><dl><dt>已选择：</dt><dd id='ddResult_" + num + "'><a id='btnSure_" + num + "' href='javascript:void(0)' class='btn'>确定</a></dd></dl></div>";
	
	               if ($("body #" + num + "_bg").length <= 0) {
	                   $("body").append("<div id='" + num + "_bg' class='mask-Bg'></div>");
	               }
	               if (settings.className != null) {
	                   container.addClass(settings.className);
	               }
	               var J_compensationtype = $("#J_compensationtype").val();
	               if (J_compensationtype == "职能") {
	                   var data = {
	                       'positionlist': [
	                           { 'p': '核心职能', 'c': [{ 'a': [{ 's': '产品' }, { 's': '设计' }, { 's': '开发' }, { 's': '数据' }, { 's': '测试' }, { 's': 'IT运维' }, { 's': '运营' }, { 's': '市场&品牌' }, { 's': '销售' }] }] },
	                           { 'p': '特殊职能', 'c': [{ 'a': [{ 's': '人力资源' }, { 's': '行政&采购' }, { 's': '财务' }, { 's': '风控&法务' }, { 's': '公司事务&投融资' }] }] }
	                       ]
	                   }
	               } else {
	                   var data = {
	                       'positionlist': [
	                           { 'p': '产品', 'c': [{ 'a': [{ 's': '产品经理' }, { 's': '产品助理/产品专员' }, { 's': '产品-管理类' }] }] },
	                           { 'p': '设计', 'c': [{ 'a': [{ 's': '网页设计师' }, { 's': '平面设计师' }, { 's': '多媒体设计师' }, { 's': '广告设计师' }, { 's': 'UI设计师' }, { 's': 'UI设计-管理类' }, { 's': '交互设计师' }, { 's': '交互设计－管理类' }, { 's': '用户研究' }, { 's': '用户研究-管理类' }] }] },
	                           { 'p': '开发', 'c': [{ 'a': [{ 's': 'web前端开发' }, { 's': '前端开发-html5' }, { 's': 'android工程师' }, { 's': 'ios工程师' }, { 's': '后端开发－java' }, { 's': '后端开发－python' }, { 's': '后端开发－php' }, { 's': '后端开发－c' }, { 's': '后端开发－c++' }, { 's': '全栈工程师' }, { 's': '架构师' }, { 's': '开发-管理类' }, { 's': '项目管理' }] }] },
	                           { 'p': '数据', 'c': [{ 'a': [{ 's': '算法工程师' }] }] },
	                           { 'p': '测试', 'c': [{ 'a': [{ 's': '测试开发' }, { 's': '测试工程师' }, { 's': '自动化测试' }, { 's': '功能测试' }, { 's': '性能测试' }, { 's': '白盒测试' }, { 's': '灰盒测试' }, { 's': '黑盒测试' }, { 's': '测试－管理类' }] }] },
	                           { 'p': 'IT运维', 'c': [{ 'a': [{ 's': '网络运维' }, { 's': '系统工程师' }, { 's': '系统管理员' }, { 's': 'IT支持' }, { 's': '安全运维' }, { 's': '运维工程师' }, { 's': '运维-管理类' }, { 's': 'DBA－oracle' }, { 's': 'DBA－etl' }, { 's': 'DBA' }] }] },
	                           { 'p': '运营', 'c': [{ 'a': [{ 's': '产品运营' }, { 's': '内容运营' }, { 's': '主编' }, { 's': '编辑' }, { 's': '记者' }, { 's': '数据运营' }, { 's': '用户运营' }, { 's': '活动运营' }, { 's': '媒体运营' }, { 's': '媒体运营' }, { 's': '海外运营' }, { 's': '运营-综合' }, { 's': '运营-管理类' }, { 's': '售后客服' }, { 's': '售后工程师' }, { 's': '在线客服' }, { 's': '客服经理' }, { 's': '客服-管理类' }] }] },
	                           { 'p': '市场&品牌', 'c': [{ 'a': [{ 's': 'SEM' }, { 's': 'SEO' }, { 's': '网络推广' }, { 's': '市场策划' }, { 's': '市场推广' }, { 's': '海外市场' }, { 's': '市场营销' }, { 's': '市场营销-管理类' }, { 's': '品牌推广' }, { 's': '媒介' }, { 's': '公关' }, { 's': '公关-管理类' }] }] },
	                           { 'p': '销售', 'c': [{ 'a': [{ 's': '业务开发－BD' }, { 's': '电话销售' }, { 's': '渠道销售' }, { 's': '商务' }, { 's': '售前客服' }, { 's': '售前工程师' }, { 's': '在线销售' }, { 's': '大客户代表' }, { 's': '综合销售' }, { 's': '销售助理' }, { 's': '销售－管理类' }] }] },
	                           { 'p': '风控&法务', 'c': [{ 'a': [{ 's': '法务' }, { 's': '律师' }, { 's': '专利' }, { 's': '审计' }, { 's': '风控管理' }] }] },
	                           { 'p': '人力资源', 'c': [{ 'a': [{ 's': '薪酬福利' }, { 's': '绩效管理' }, { 's': '招聘' }, { 's': '培训' }, { 's': '组织发展' }, { 's': 'RBP' }, { 's': '员工关系' }, { 's': '企业文化' }, { 's': 'HR-综合' }, { 's': 'HR-管理类' }] }] },
	                           { 'p': '行政&采购', 'c': [{ 'a': [{ 's': '文秘' }, { 's': '前台' }, { 's': '行政-综合' }, { 's': '行政-管理类' }, { 's': '供应商管理' }, { 's': '采购' }, { 's': '采购－管理类' }] }] },
	                           { 'p': '财务', 'c': [{ 'a': [{ 's': '会计' }, { 's': '出纳' }, { 's': '税务' }, { 's': '结算' }, { 's': '预算' }, { 's': '财务-综合' }, { 's': '财务－管理类' }] }] },
	                           { 'p': '公司事务&投融资', 'c': [{ 'a': [{ 's': '公司事务&投资者关系' }, { 's': '融资' }, { 's': '投资' }] }] },
	                       ]
	                   }
	               }
	
	               if ($.trim(container.html()) == "") {
	                   container.append(title);
	                   container.append(selectedResult);
	                   container.append("<div class=\"position-menu\" id='" + num + "_datalist'></div>");
	                   var datalist = $("#" + num + "_datalist");
	                   datalist.append("<div class='menu' id='firstMenu'></div>");
	                   var firstMenu = datalist.find("#firstMenu");
	                   firstMenu.append("<ul></ul>");
	                   $.each(data.positionlist, function(i, obj) { // 循环第一级
	                       $(firstMenu).find("ul").append("<li id='dl_" + i + "' name='" + i + "'>" + obj.p + "</li>");
	                   });
	
	                   if (datalist.find("div[class='sub-menu']").length <= 0) {
	                       datalist.append("<div class='sub-menu' id='secondMenu'></div>");
	                   }
	                   var secondMenu = datalist.find("#secondMenu");
	
	                   // 第一级菜单鼠标悬浮事件，弹出二级菜单和三级菜单项
	                   $("#" + num + "_datalist #firstMenu ul li").bind("mouseover", function() {
	                       secondMenu.html("");
	                       $("#" + num + "_datalist #firstMenu ul li").removeClass("sele");
	                       $(this).addClass("sele");
	
	                       var index = $(this).attr("name");
	                       $.each(data.positionlist[index].c, function(j, item) {
	                           secondMenu.append("<dl id='dl_" + j + "'></dl>");
	                           // var dtItem = "<dt id='dt_" + j + "'>" + item.n + "</dt>";
	                           // secondMenu.find("dl[id='dl_" + j + "']").append(dtItem);
	                           secondMenu.find("dl[id='dl_" + j + "']").append("<dd id='dd_" + j + "'></dd>");
	                           $.each(data.positionlist[index].c[j].a, function(m, dist) {
	                               var threeMenu = "<a href='javascript:void(0)' id='item_" + index + "_" + j + "_" + m + "'>" + dist.s + "</a>";
	                               secondMenu.find("dl[id='dl_" + j + "'] dd[id='dd_" + j + "']").append(threeMenu);
	
	                           });
	                       });
	
	                       //根据已选择的项，将相同的列表展示项添加样式
	                       var resultItems = container.find("#ddResult_" + num + " a");
	                       $.each(resultItems, function(n, ritem) {
	                           var rid = $(ritem).attr("id").substr(2, $(ritem).attr("id").length);
	                           secondMenu.find("a[id='" + rid + "']").addClass("sele");
	                       });
	
	                       // 列表项点击事件，选中则在结果容器中显示添加选中样式
	                       secondMenu.find("a").bind("click", function() {
	                           var selectedCount = container.find("#ddResult_" + num + " a").length - 1;
	
	                           if ($(this).hasClass("sele")) {
	                               $(this).removeClass("sele");
	                               container.find("#ddResult_" + num).find("a[id='c_" + $(this).attr("id") + "']").remove();
	                           } else {
	                               if (selectedCount >= settings.maxCount) {
	                                   container.find("#tip_" + num).html("最多只能选择" + settings.maxCount + "项！").css("color", "red");
	                                   setTimeout(function() {
	                                       container.find("#tip_" + num).empty();
	                                   }, 3000);
	                               } else {
	                                   $(this).addClass("sele");
	                                   container.find("#ddResult_" + num + " #btnSure_" + num).before("<a href='#' id='c_" + $(this).attr("id") + "'>" + $.trim($(this).html()) + "</a>");
	                               }
	                           }
	
	                           // 结构容器中选中项点击事件，移除并将列表中的选中样式取消
	                           container.find("#ddResult_" + num + " a").bind("click", function() {
	                               var rid = $(this).attr("id");
	                               if (rid != "btnSure_" + num) {
	                                   var sid = rid.substr(2, rid.length);
	                                   $(this).remove();
	                                   secondMenu.find("a[id='" + sid + "']").removeClass("sele");
	                               }
	                           });
	                       });
	
	                   });
	
	                   // 默认显示第一级
	                   $(firstMenu).find("ul li:first").addClass("sele").trigger("mouseover");
	
	
	                   // 关闭选择框
	                   container.find(".title a").bind("click", function() {
	                       container.hide();
	                       $("#" + num + "_bg").hide();
	                   });
	
	                   // 确定
	                   container.find("#ddResult_" + num + " a[id='btnSure_" + num + "']").bind("click", function() {
	                       var selectedItems = container.find("#ddResult_" + num + " a[id!='btnSure_" + num + "']");
	                       var results = "";
	                       $.each(selectedItems, function(i, item) {
	                           results += $.trim($(item).text()) + ",";
	                       });
	                       if (results.length > 0) {
	                           results = results.substr(0, results.length - 1);
	                       }
	                       xy_select.setValue(results);
	                       container.hide();
	                       $("#" + num + "_bg").hide();
	                   });
	
	               }
	               container.show();
	               $("#" + num + "_bg").show();
	           },
	           setValue: function(value) {
	               var type = $("#result");
	               if (type.attr("type") == "text") {
	                   type.val(value);
	               } else
	                   type.html(value);
	           }
	       }
	       return xy_select;
	   }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(33)))

/***/ })

});
//# sourceMappingURL=6.chunk.7392079d.js.map