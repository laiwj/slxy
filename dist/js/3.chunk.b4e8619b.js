webpackJsonp([3,13],{

/***/ 36:
/***/ (function(module, exports) {

	module.exports = "<div ms-controller=\"report\" class=\"container_body\">\r\n    <div id=\"maincontainer\" class=\"container_body\">\r\n        <div id=\"toolbar\" class=\"sidebar md-sidenav md-locked-open height100p\">\r\n            <div class=\"navigation-header \">\r\n                <div class=\"text-center\">\r\n                    <img class=\"logo\" src=\"../images/logo.png\">\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"antiScroll height100p\">\r\n                <div class=\"antiscroll-content\">\r\n                    <div class=\"sidebar_inner\">\r\n                        <div class=\"pt20 pb20\">\r\n                            <div class=\"person-photo pr\">\r\n                                <img src=\"../images/hdlogo.png\" class=\"person-img\">\r\n                            </div>\r\n                            <p class=\"text-center user_name\"> {{username}}</p>\r\n                            <input type=\"hidden\" value=\"数联寻英\" id=\"g_company\">\r\n\r\n                            <p class=\"text-center user_position\">\r\n                                {{identity}}\r\n                            </p>\r\n                        </div>\r\n                        <ul id=\"side_accordion\" class=\"accordion\">\r\n\r\n                            <li class=\"accordion-group\">\r\n                                <div class=\"accordion-heading ver-middle J_menu_children\">\r\n                                    <a href=\"#!/report\" class=\"accordion-toggle ver-middle\">\r\n                                        <i class=\"icon s16 fa fa-bar-chart\"></i>数据管理\r\n                                    </a>\r\n                                </div>\r\n                            </li>\r\n                            <li class=\"accordion-group\">\r\n                                <div class=\"accordion-heading ver-middle J_menu_children\">\r\n                                    <a href=\"#!/compensation\" class=\"accordion-toggle ver-middle\">\r\n                                        <i class=\"icon s16 fa fa-jpy\"></i>薪酬分析\r\n                                    </a>\r\n                                </div>\r\n                            </li>\r\n                            <li class=\"accordion-group\" ms-visible=\"type=='2'|| type=='1'\">\r\n                                <div class=\"accordion-heading ver-middle J_menu_children\">\r\n                                    <a href=\"#!/config\" class=\"accordion-toggle ver-middle\">\r\n                                        <i class=\"icon s16 fa fa-server\"></i>配置管理\r\n                                    </a>\r\n                                </div>\r\n                            </li>\r\n                            <li class=\"accordion-group\">\r\n                                <div class=\"accordion-heading ver-middle J_menu_children\">\r\n                                    <a href=\"#!/userInfo\" class=\"accordion-toggle ver-middle\">\r\n                                        <i class=\"icon s16 fa fa-user\"></i>用户管理\r\n                                    </a>\r\n                                </div>\r\n                            </li>\r\n                            <li class=\"accordion-group\" ms-visible=\"type=='2'|| type=='1'\">\r\n                                <div class=\"accordion-heading ver-middle J_menu_children\">\r\n                                    <a href=\"#!/account\" class=\"accordion-toggle ver-middle\">\r\n                                        <i class=\"icon s16 fa fa-cog\"></i>账号管理\r\n                                    </a>\r\n                                </div>\r\n                            </li>\r\n\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div id=\"navigation\" class=\"clearfix\">\r\n            <div>\r\n                <div class=\"navbar navbar-fixed-top\">\r\n                    <div class=\"navbar-inner\">\r\n                        <div class=\"btn_menu mt20 ml10 fl\"><i class=\"small-menu small-menu-img\"></i>\r\n\r\n                        </div>\r\n                        <div class=\"container-fluid\">\r\n                            <div class=\"btn-group fr mt20\" style=\"right: 50px;\">\r\n\r\n                                <div class=\"dropdown-toggle hd-person cur\" aria-expanded=\"false\" ms-click=\"toggle_hiddle\"><img class=\"hd-icon\" src=\"../images/hdlogo.png\" /> {{username}}</div>\r\n                                <ul class=\"dropdown-menu\" ms-visible=\"toggle\" ms-click=\"logout\">\r\n\r\n                                    <li><a href=\"javascript:\">退出登录</a></li>\r\n\r\n                                </ul>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n\r\n            </div>\r\n        </div>\r\n\r\n        <div id=\"content-container\" class=\"main_content clearfix\">\r\n            <div class=\" p20 bgcg\">\r\n                <div class=\"row-fluid tabContainer mb128\">\r\n                    <div class=\"span12 search_page\">\r\n\r\n                        <div class=\"well  clearfix\">\r\n                            <div class=\"row-fluid\">\r\n                                <p class=\"pull-left mt10 \"><b>数据报告</b></p>\r\n\r\n                                <div class=\"pull-right\">\r\n                                    <select ms-duplex=\"J_chartstype\" class=\"select-warp fl mt10\" id=\"J_chartstype\" style=\"width: 100px;\">\r\n                                            <option value=\"人才分布\">人才分布</option>\r\n                                            <option value=\"人才流动\">人才流动</option>\r\n                                            <option value=\"人才供需\">人才供需</option>\r\n                                            <option value=\"人才薪酬\">人才薪酬</option>\r\n                                    </select>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"p20\">\r\n                            <div class=\"top-menu clearfix\">\r\n                                <!--<div class=\"fl report_tab\" ms-visible=\"chartstype=='人才分布'\">\r\n                                    <select ms-duplex=\"city\" class=\"select-warp s1 button1\" id=\"J_city\">\r\n                                            <option value=\"北京\">北京</option>\r\n                                            <option value=\"上海\">上海</option>\r\n                                            <option value=\"广州\">广州</option>\r\n                                    </select>\r\n                                </div>-->\r\n                                <div class=\"fl report_tab\" style=\"display: block;\">\r\n                                    <select ms-duplex=\"J_industry201\" class=\"select-warp s1 button1\" id=\"J_industry201\" ms-visible=\"J_chartstype=='人才分布'\">\r\n                                             <option ms-repeat-el=\"industry201\" ms-attr-value=\"el\">{{el}}</option>\r\n                                    </select>\r\n                                    <select ms-duplex=\"J_industry202\" class=\"select-warp s1 button1\" id=\"J_industry202\" ms-visible=\"J_chartstype=='人才流动'\">\r\n                                             <option ms-repeat-el=\"industry202\" ms-attr-value=\"el\">{{el}}</option>\r\n                                    </select>\r\n                                    <select ms-duplex=\"J_industry203\" class=\"select-warp s1 button1\" id=\"J_industry203\" ms-visible=\"J_chartstype=='人才供需'\">\r\n                                             <option ms-repeat-el=\"industry203\" ms-attr-value=\"el\">{{el}}</option>\r\n                                    </select>\r\n                                    <select ms-duplex=\"J_industry204\" class=\"select-warp s1 button1\" id=\"J_industry204\" ms-visible=\"J_chartstype=='人才薪酬'\">\r\n                                             <option ms-repeat-el=\"industry204\" ms-attr-value=\"el\">{{el}}</option>\r\n                                    </select>\r\n                                </div>\r\n                                <div class=\"fl report_tab\" ms-visible=\"J_chartstype=='人才流动'\">\r\n                                    <select ms-duplex=\"J_direction\" class=\"select-warp s1 button1\" id=\"J_direction\">\r\n                                            <option value=\"人才流入\">人才流入</option>\r\n                                            <option value=\"人才流出\">人才流出</option>\r\n                                        \r\n                                    </select>\r\n                                </div>\r\n\r\n                                <div class=\"fl report_tab\" ms-visible=\"J_chartstype=='人才供需'\">\r\n                                    <select ms-duplex=\"J_na\" class=\"select-warp s1 button1\" id=\"J_na\">\r\n                                            <option value=\"需求量\">需求量</option>\r\n                                            <option value=\"供需指数\">供需指数</option>\r\n                                    </select>\r\n                                </div>\r\n\r\n                                <div class=\"fl ml5 report_tab\" style=\"height: 28px;line-height: 28px;font-size: 14px;display: block;\" ms-visible=\"J_chartstype=='人才分布'\">从业人员的</div>\r\n                                <div class=\"fl ml5 report_tab\" style=\"height: 28px;line-height: 28px;font-size: 14px;\" ms-visible=\"J_chartstype=='人才供需'\">排名前五的</div>\r\n                                <div class=\"fl ml5 report_tab\" style=\"height: 28px;line-height: 28px;font-size: 14px;\" ms-visible=\"J_chartstype=='人才流动'\">的</div>\r\n                                <div class=\"fl ml5 report_tab\" style=\"height: 28px;line-height: 28px;font-size: 14px;\" ms-visible=\"J_chartstype=='人才薪酬'\">热门岗位人群薪酬及特征画像</div>\r\n                                <div class=\"fl report_tab\" ms-visible=\"J_chartstype=='人才流动'|| J_chartstype=='人才分布'\" style=\"display: block;\">\r\n                                    <select ms-duplex=\"J_cf\" class=\"select-warp s1 button1\" id=\"J_cf\">\r\n                                            <option value=\"热门城市\">热门城市</option>\r\n                                            <option value=\"热门职能\">热门职能</option>\r\n                                    </select>\r\n                                </div>\r\n\r\n                                <div class=\"fl report_tab\" ms-visible=\"J_chartstype=='人才供需'\">\r\n                                    <select ms-duplex=\"J_fp\" class=\"select-warp s1 button1\" id=\"J_fp\">\r\n                                            <option value=\"职能\">职能</option>\r\n                                            <option value=\"岗位\">岗位</option>\r\n                                    </select>\r\n                                </div>\r\n\r\n                                <!--<div class=\"fl ml5 report_tab\" style=\"height: 28px;line-height: 28px;font-size: 14px;\" for-tab=\"tab1\">分布</div>-->\r\n\r\n                                <!--<button class=\"btn button4 ml20\" id=\"J_analysis\">分析</button>-->\r\n\r\n                                <button class=\"btn btn-primary fr data_disturb ml10\" id=\"J_data_disturb\" ms-click=\"show('aa')\" ms-visible=\"type=='2'|| type=='1'\">数据干预</button>\r\n                                <!--数据干预弹框-->\r\n                                <div ms-widget=\"dialog,aa,$aaOpts\">\r\n                                    <div style=\"max-height:400px;overflow:auto;\">\r\n                                        <div class=\"control-group\" ms-repeat-el=\"data_disturb\">\r\n                                            <p class=\"f14\" style=\"margin-bottom:10px;\">{{el.name}}</p>\r\n                                            <div>\r\n                                                <input class=\"input data\" ms-duplex=\"el.value\" maxlength=\"50\" ms-attr-placeholder=\"'请输入'+el.name+'的数据'\" />\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                </div>\r\n                                <!--数据干预弹框结束-->\r\n\r\n                                <div class=\"ver-middle fr\">\r\n                                    <label style=\"height: 30px;line-height: 30px;\" class=\"fl\">报告周期：</label>\r\n                                    <select ms-duplex=\"J_type\" class=\"select-warp fl\" id=\"J_type\" style=\"display: inline-block;width: 100px;\">\r\n                                            <option value=\"近一个月\">近一个月</option>\r\n                                            <option value=\"近三个月\">近三个月</option>\r\n                                            <option value=\"近一年\">近一年</option>\r\n                                        </select>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"charts-wrapper\" style=\"margin-top:0;\">\r\n                                <div class=\"charts-content\">\r\n                                    <input id=\"J_charts_data\" type=\"hidden\" />\r\n                                    <iframe id=\"report_iframe\" width=\"100%\" height=\"500px\" frameborder=\"0\">\r\n                                    </iframe>\r\n                                </div>\r\n                                <div class=\"charts-desc\" id=\"report_info\" ms-visible=\"type=='3'\">\r\n                                    <div class=\"add_tag\" ms-click=\"show('bb')\"> <i>+</i>添加分析说明</div>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"analysis-items-warp mt20 J_analysis_items_warp\" ms-visible=\"type=='2'|| type=='1'\">\r\n                                <div class=\"analysis-items clearfix\" ms-repeat-el=\"info\">\r\n                                    <i class=\"icon icon-circle fl\">·</i>\r\n                                    <div class=\"fl ml10\">\r\n                                        <p><b>{{el.pm_username}}</b><span class=\"f10 cr9 ml10\">{{el.modify_time | date(\"yyyy/MM/dd HH:mm:ss\")}}</span></p>\r\n                                        <p class=\"text_desc_p\"><span class=\"text_desc\">{{el.info}}</span><button class=\"button1 edit_desc J_edit_desc ml20\" ms-click=\"show('bb,'+$index)\" ms-attr-api_url=\"el.api_url\" ms-attr-data_id=\"el._id\" ms-attr-user_id=\"el.pm_user_id\">编辑</button></p>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <!--添加分析说明弹框-->\r\n                            <div ms-widget=\"dialog,bb,$bbOpts\">\r\n                                <p class=\"disturb-warp-p\">当前报告：全国互联网行业职能从业人员总体规模城市TOP10</p>\r\n                                <textarea class=\"charts-warp\" placeholder=\"添加说明...\" ms-duplex=\"report_info\" /></textarea>\r\n                            </div>\r\n                            <!--添加分析说明弹框-->\r\n\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"foot-msg\">\r\n            Copyright ©2017 数联寻英 All Rights Reserved.\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"mask\" id=\"myModal\">\r\n    <div class=\"mask-dialog\">\r\n        <div class=\"mask-header\">\r\n            <div class=\"mask-close\">X</div>\r\n            <span class=\"mask-title\" id=\"myModalLabel\"></span>\r\n        </div>\r\n        <div class=\"mask-body\">\r\n            <div class=\"mask-icon\">UI设计特征画像</div>\r\n            <div class=\"mask-tag tag1\">\r\n                <h4>性别</h4>\r\n                <span>都是分开觉得风景的六块腹肌</span>\r\n            </div>\r\n            <div class=\"mask-tag tag2\">\r\n                <h4>性别</h4>\r\n                <span>都是分开觉得风景的六块腹肌</span>\r\n            </div>\r\n            <div class=\"mask-tag tag3\">\r\n                <h4>性别</h4>\r\n                <span>都是分开觉得风景的六块腹肌</span>\r\n            </div>\r\n            <div class=\"mask-tag tag4\">\r\n                <h4>性别</h4>\r\n                <span>都是分开觉得风景的六块腹肌</span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ })

});
//# sourceMappingURL=3.chunk.b4e8619b.js.map