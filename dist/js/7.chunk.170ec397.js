webpackJsonp([7,13],{

/***/ 46:
/***/ (function(module, exports) {

	module.exports = "<div ms-controller=\"config\" class=\"container_body\">\r\n    <div id=\"maincontainer\" class=\"container_body\">\r\n        <div id=\"toolbar\" class=\"sidebar md-sidenav md-locked-open height100p\">\r\n            <div class=\"navigation-header \">\r\n                <div class=\"text-center\">\r\n                    <img class=\"logo\" src=\"../images/logo.png\">\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"antiScroll height100p\">\r\n                <div class=\"antiscroll-content\">\r\n                    <div class=\"sidebar_inner\">\r\n                        <div class=\"pt20 pb20\">\r\n                            <div class=\"person-photo pr\">\r\n                                <img src=\"../images/hdlogo.png\" class=\"person-img\">\r\n                            </div>\r\n                            <p class=\"text-center user_name\"> {{username}}</p>\r\n                            <input type=\"hidden\" value=\"数联寻英\" id=\"g_company\">\r\n\r\n                            <p class=\"text-center user_position\">\r\n                                {{identity}}\r\n                            </p>\r\n                        </div>\r\n                        <ul id=\"side_accordion\" class=\"accordion\">\r\n\r\n                            <li class=\"accordion-group\">\r\n                                <div class=\"accordion-heading ver-middle J_menu_children\">\r\n                                    <a href=\"#!/report\" class=\"accordion-toggle ver-middle\">\r\n                                        <i class=\"icon s16 iconfont icon-tongjipeizhi\"></i>数据管理\r\n                                    </a>\r\n                                </div>\r\n                            </li>\r\n                            <li class=\"accordion-group\">\r\n                                <div class=\"accordion-heading ver-middle J_menu_children\">\r\n                                    <a href=\"#!/compensation\" class=\"accordion-toggle ver-middle\">\r\n                                        <i class=\"icon s16 iconfont icon-gongzixiaoshoubi\"></i>薪酬分析\r\n                                    </a>\r\n                                </div>\r\n                            </li>\r\n                            <li class=\"accordion-group\" ms-visible=\"type=='2'|| type=='1'\">\r\n                                <div class=\"accordion-heading ver-middle J_menu_children\">\r\n                                    <a href=\"#!/config\" class=\"accordion-toggle ver-middle\">\r\n                                        <i class=\"icon s16 iconfont icon-shujuyali\"></i>配置管理\r\n                                    </a>\r\n                                </div>\r\n                            </li>\r\n                            <li class=\"accordion-group\">\r\n                                <div class=\"accordion-heading ver-middle J_menu_children\">\r\n                                    <a href=\"#!/userInfo\" class=\"accordion-toggle ver-middle\">\r\n                                        <i class=\"icon s16 iconfont icon-iconfontwodecopy\"></i>用户管理\r\n                                    </a>\r\n                                </div>\r\n                            </li>\r\n                            <li class=\"accordion-group\" ms-visible=\"type=='2'|| type=='1'\">\r\n                                <div class=\"accordion-heading ver-middle J_menu_children\">\r\n                                    <a href=\"#!/account\" class=\"accordion-toggle ver-middle\">\r\n                                        <i class=\"icon s16 iconfont icon-dianyingziyuan\"></i>账号管理\r\n                                    </a>\r\n                                </div>\r\n                            </li>\r\n\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div id=\"navigation\" class=\"clearfix\">\r\n            <div>\r\n                <div class=\"navbar navbar-fixed-top\">\r\n                    <div class=\"navbar-inner\">\r\n                        <div class=\"btn_menu mt20 ml10 fl\"><i class=\"small-menu small-menu-img\"></i>\r\n\r\n                        </div>\r\n                        <div class=\"container-fluid\">\r\n                            <div class=\"btn-group fr mt20\" style=\"right: 50px;\">\r\n\r\n                                <div class=\"dropdown-toggle hd-person cur\" aria-expanded=\"false\" ms-click=\"toggle_hiddle\"><img class=\"hd-icon\" src=\"../images/hdlogo.png\" /> {{username}}</div>\r\n                                <ul class=\"dropdown-menu\" ms-visible=\"toggle\" ms-click=\"logout\">\r\n\r\n                                    <li><a href=\"javascript:\">退出登录</a></li>\r\n\r\n                                </ul>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n\r\n            </div>\r\n        </div>\r\n\r\n        <div id=\"content-container\" class=\"main_content clearfix\">\r\n            <div class=\"p20 bgcg\">\r\n                <div class=\"row-fluid tabContainer mb128\">\r\n                    <div class=\"span12 search_page\">\r\n\r\n                        <div class=\"well  clearfix\">\r\n                            <div class=\"row-fluid\">\r\n                                <p class=\"pull-left mt10 \"><b>配置管理</b></p>\r\n\r\n                                <div class=\"pull-right\">\r\n                                    <select ms-duplex=\"configstype\" class=\"select-warp fl mt10\" id=\"J_configstype\">\r\n                                            <option value=\"人才分布\">人才分布</option>\r\n                                            <option value=\"人才流动\">人才流动</option>\r\n                                             <option value=\"人才供需\">人才供需</option>\r\n                                              <option value=\"热门岗位人群的薪酬及特征画像\">热门岗位人群的薪酬及特征画像</option>\r\n                                    </select>\r\n\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"p20\">\r\n                            <div class=\"top-menu\">\r\n                                <p class=\"tl null-model\">请选择并设置用户端数据分析显示范围。</p>\r\n\r\n                                <div class=\"addlist\" ms-repeat-el=\"data\">\r\n                                    <div class=\"add-title fb cr3\">\r\n                                        <span>{{el.name}}</span>\r\n                                        <button class=\"btn btn-primary J_power fr mt10\" ms-click=\"doClick(el)\">添加</button>\r\n                                    </div>\r\n                                    <div class=\"add-body choiceList\">\r\n                                        <p class=\"cr3\">点选展示给客户端的数据内容</p>\r\n                                        <div class=\"tags\" ms-attr-name=\"el.name\">\r\n                                            <div class=\"tag\" ms-repeat-tag=\"el.hastag\">\r\n                                                <span>{{tag}}</span>\r\n                                                <i>×</i>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"addlist\" ms-visible=\"configstype=='热门岗位人群的薪酬及特征画像'\">\r\n                                    <div class=\"add-title fb cr3\">\r\n                                        <span>岗位供需指数</span>\r\n                                        <button class=\"btn btn-primary J_power fr mt10\" ms-click=\"generate\">添加</button>\r\n                                    </div>\r\n                                    <div class=\"add-body choiceList\">\r\n                                        <p class=\"cr3\">点选展示给客户端的数据内容<span style=\"color:red;\" id=\"msgTips\">(右侧点击添加配置标签)</span><span style=\"color:red;display:none;\" id=\"errorMsg\">(请输入0-200之间的数值)</span><span style=\"color:red;display:none;\" id=\"errorMsg2\">(请配置合理范围)</span></p>\r\n                                        <div class=\"tags\">\r\n                                            <input type=\"text\" ms-duplex=\"ltnum\"><b>-</b><input type=\"text\" ms-duplex=\"gtnum\" style=\"margin-right:50px;\">\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"addlist\" ms-visible=\"configstype=='热门岗位人群的薪酬及特征画像'\">\r\n                                    <div class=\"add-title fb cr3\">\r\n                                        <span>薪酬数据条件设置</span>\r\n                                        <button class=\"btn btn-primary J_power fr mt10\" ms-click=\"condition\">添加</button>\r\n                                    </div>\r\n                                    <div class=\"add-body choiceList\">\r\n                                        <p class=\"cr3\">点选展示给客户端的数据内容</p>\r\n                                        <div class=\"tags\">\r\n                                            <label>条件</label>\r\n\r\n                                            <select ms-duplex=\"condition_l\" class=\"select-warp fl\" style=\"width:100px;height:32px;\">\r\n                                                    <option value=\"=\">=</option>\r\n                                                    <option value=\"&lt\">&lt</option>\r\n                                                    <option value=\"&gt\">&gt</option>\r\n                                                    <option value=\"&lt=\">&lt=</option>\r\n                                                    <option value=\"&gt=\">&gt=</option>\r\n                                                </select>\r\n\r\n                                            <label>内容</label>\r\n\r\n                                            <select ms-duplex=\"condition_r\" class=\"select-warp fl\" style=\"width:100px;height:32px;margin-right:20px;\">\r\n                                                    <option value=\"p25\">p25</option>\r\n                                                    <option value=\"p50\">p50</option>\r\n                                                    <option value=\"p75\">p75</option>\r\n                                                    <option value=\"p100\">p100</option>\r\n                                                </select>\r\n\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div id=\"maskLayer\" style=\"display:none\">\r\n                                    <div id=\"drag\">\r\n\r\n                                        <div id=\"drag_con\"></div>\r\n\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div id=\"sublist\" style=\"display:none\"></div>\r\n                                <div class=\"hiddle clearfix\">\r\n                                    <button class=\"btn btn-primary J_power fr mt30 mb50\" ms-click=\"go\">保存</button>\r\n                                    <button class=\"btn J_power fr mt30 mr10 mb50\" ms-click=\"clearAll\">清空</button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"foot-msg\">\r\n            Copyright ©2017 数联寻英 All Rights Reserved.\r\n        </div>\r\n    </div>\r\n</div>"

/***/ })

});
//# sourceMappingURL=7.chunk.170ec397.js.map