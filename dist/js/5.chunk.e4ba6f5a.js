webpackJsonp([5,13],{

/***/ 42:
/***/ (function(module, exports) {

	module.exports = "<div ms-controller=\"compensation\" class=\"container_body\">\r\n    <div id=\"maincontainer\" class=\"container_body\">\r\n        <div id=\"toolbar\" class=\"sidebar md-sidenav md-locked-open height100p\">\r\n            <div class=\"navigation-header \">\r\n                <div class=\"text-center\">\r\n                    <img class=\"logo\" src=\"../images/logo.png\">\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"antiScroll height100p\">\r\n                <div class=\"antiscroll-content\">\r\n                    <div class=\"sidebar_inner\">\r\n                        <div class=\"pt20 pb20\">\r\n                            <div class=\"person-photo pr\">\r\n                                <img src=\"../images/hdlogo.png\" class=\"person-img\">\r\n                            </div>\r\n                            <p class=\"text-center user_name\"> {{username}}</p>\r\n                            <input type=\"hidden\" value=\"数联寻英\" id=\"g_company\">\r\n\r\n                            <p class=\"text-center user_position\">\r\n                                {{identity}}\r\n                            </p>\r\n                        </div>\r\n                        <ul id=\"side_accordion\" class=\"accordion\">\r\n\r\n                            <li class=\"accordion-group\">\r\n                                <div class=\"accordion-heading ver-middle J_menu_children\">\r\n                                    <a href=\"#!/report\" class=\"accordion-toggle ver-middle\">\r\n                                        <i class=\"icon s16 fa fa-bar-chart\"></i>数据管理\r\n                                    </a>\r\n                                </div>\r\n                            </li>\r\n                            <li class=\"accordion-group\">\r\n                                <div class=\"accordion-heading ver-middle J_menu_children\">\r\n                                    <a href=\"#!/compensation\" class=\"accordion-toggle ver-middle\">\r\n                                        <i class=\"icon s16 fa fa-jpy\"></i>薪酬分析\r\n                                    </a>\r\n                                </div>\r\n                            </li>\r\n                            <li class=\"accordion-group\" ms-visible=\"type=='2'|| type=='1'\">\r\n                                <div class=\"accordion-heading ver-middle J_menu_children\">\r\n                                    <a href=\"#!/config\" class=\"accordion-toggle ver-middle\">\r\n                                        <i class=\"icon s16 fa fa-server\"></i>配置管理\r\n                                    </a>\r\n                                </div>\r\n                            </li>\r\n                            <li class=\"accordion-group\">\r\n                                <div class=\"accordion-heading ver-middle J_menu_children\">\r\n                                    <a href=\"#!/userInfo\" class=\"accordion-toggle ver-middle\">\r\n                                        <i class=\"icon s16 fa fa-user\"></i>用户管理\r\n                                    </a>\r\n                                </div>\r\n                            </li>\r\n                            <li class=\"accordion-group\" ms-visible=\"type=='2'|| type=='1'\">\r\n                                <div class=\"accordion-heading ver-middle J_menu_children\">\r\n                                    <a href=\"#!/account\" class=\"accordion-toggle ver-middle\">\r\n                                        <i class=\"icon s16 fa fa-cog\"></i>账号管理\r\n                                    </a>\r\n                                </div>\r\n                            </li>\r\n\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div id=\"navigation\" class=\"clearfix\">\r\n            <div>\r\n                <div class=\"navbar navbar-fixed-top\">\r\n                    <div class=\"navbar-inner\">\r\n                        <div class=\"btn_menu mt20 ml10 fl\"><i class=\"small-menu small-menu-img\"></i>\r\n\r\n                        </div>\r\n                        <div class=\"container-fluid\">\r\n                            <div class=\"btn-group fr mt20\" style=\"right: 50px;\">\r\n\r\n                                <div class=\"dropdown-toggle hd-person cur\" aria-expanded=\"false\" ms-click=\"toggle_hiddle\"><img class=\"hd-icon\" src=\"../images/hdlogo.png\" /> {{username}}</div>\r\n                                <ul class=\"dropdown-menu\" ms-visible=\"toggle\" ms-click=\"logout\">\r\n\r\n                                    <li><a href=\"javascript:\">退出登录</a></li>\r\n\r\n                                </ul>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n\r\n            </div>\r\n        </div>\r\n\r\n        <div id=\"content-container\" class=\"main_content clearfix\">\r\n            <div class=\" p20 bgcg\">\r\n                <div class=\"row-fluid tabContainer mb128\">\r\n                    <div class=\"span12 search_page\">\r\n\r\n                        <div class=\"well  clearfix\">\r\n                            <div class=\"row-fluid\">\r\n\r\n                                <p class=\"pull-left mt10 \"><b>{{J_compensationtype}}</b></p>\r\n                                <div class=\"pull-right\">\r\n                                    <select ms-duplex=\"J_compensationtype\" class=\"select-warp fl mt10\" id=\"J_compensationtype\">\r\n                                            <option value=\"职能薪酬分析\">职能薪酬分析</option>\r\n                                            <option value=\"岗位薪酬分析\">岗位薪酬分析</option>\r\n                                    </select>\r\n\r\n                                </div>\r\n                                <button class=\"btn btn-primary fr data_disturb m10\" id=\"J_data_disturb\" ms-click=\"analysisData\">分析</button>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"pl20 pr20 pb20\">\r\n\r\n                            <div class=\"charts-wrapper\">\r\n                                <div class=\"charts-content clearfix\">\r\n                                    <div class=\"configbar fl\">\r\n                                        <ul class=\"pr30 pt20\">\r\n                                            <li>\r\n                                                <p>职能设置</p>\r\n                                                <div class=\"select-warp mb15\" id=\"c_function\">\r\n                                                    职能:<input ms-duplex=\"c_function\" class=\"u-tt-more\" id=\"result\" type=\"text\">\r\n                                                </div>\r\n                                            </li>\r\n                                            <li>\r\n                                                <p>分析数据筛选</p>\r\n\r\n                                                <div class=\"select-warp mb15\" id=\"c_industry\" ms-click=\"doClick('c_industry')\">\r\n                                                    行业:<input ms-duplex=\"c_industry\" class=\"u-tt-more\">\r\n                                                </div>\r\n                                                <div class=\"select-warp mb15\" id=\"c_region\" ms-click=\"doClick('c_region')\">\r\n                                                    地区:<input ms-duplex=\"c_region\" class=\"u-tt-more\">\r\n                                                </div>\r\n                                                <div class=\"select-warp mb15\" id=\"c_experience\" ms-click=\"doClick('c_experience')\">\r\n                                                    经验:<input ms-duplex=\"c_experience\" class=\"u-tt-more\">\r\n                                                </div>\r\n\r\n                                            </li>\r\n                                            <li>\r\n                                                <p>分析周期</p>\r\n\r\n                                                <div class=\"select-warp mb15\" id=\"c_time\" ms-click=\"doClick('c_time')\">\r\n                                                    周期:<input ms-duplex=\"c_time\" class=\"u-tt-more\">\r\n                                                </div>\r\n\r\n                                            </li>\r\n                                        </ul>\r\n                                    </div>\r\n                                    <input id=\"J_charts_data\" type=\"hidden\" />\r\n                                    <iframe id=\"report_iframe\" width=\"85%\" height=\"500px\" frameborder=\"0\" class=\"fr\">\r\n                                    </iframe>\r\n                                </div>\r\n                                <div class=\"charts-desc\" id=\"report_info\" ms-visible=\"type=='3'\">\r\n                                    <div class=\"add_tag\" ms-click=\"show('bb')\"> <i>+</i>添加分析说明</div>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"analysis-items-warp mt20 J_analysis_items_warp\" ms-visible=\"type=='2'|| type=='1'\">\r\n                                <div class=\"analysis-items clearfix\" ms-repeat-el=\"info\">\r\n                                    <i class=\"icon icon-circle fl\">·</i>\r\n                                    <div class=\"fl ml10\">\r\n                                        <p><b>{{el.pm_username}}</b><span class=\"f10 cr9 ml10\">{{el.modify_time | date(\"yyyy/MM/dd HH:mm:ss\")}}</span></p>\r\n                                        <p class=\"text_desc_p\"><span class=\"text_desc\">{{el.info}}</span><button class=\"button1 edit_desc J_edit_desc ml20\" ms-click=\"show('bb,'+$index)\" ms-attr-api_url=\"el.api_url\" ms-attr-data_id=\"el._id\" ms-attr-user_id=\"el.pm_user_id\">编辑</button></p>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <!--添加分析说明弹框-->\r\n                            <div ms-widget=\"dialog,bb,$bbOpts\">\r\n                                <p class=\"disturb-warp-p\">当前报告：全国互联网行业职能从业人员总体规模城市TOP10</p>\r\n                                <textarea class=\"charts-warp\" placeholder=\"添加说明...\" ms-duplex=\"report_info\" /></textarea>\r\n                            </div>\r\n                            <!--添加分析说明弹框-->\r\n\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"foot-msg\">\r\n            Copyright ©2017 数联寻英 All Rights Reserved.\r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n<div id=\"positionDiv\">\r\n</div>"

/***/ })

});
//# sourceMappingURL=5.chunk.e4ba6f5a.js.map