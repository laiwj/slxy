webpackJsonp([4,13],{37:function(t,e,a){var r,n;(function(i){r=[a(38)],n=function(t){var e=avalon.define({$id:"report",_id:"",type:"",short_id:"",username:"",identity:"",toggle:!1,api_url:"",data_id:"",params:{},info:[],hasInfo:"请添加分析说明...",J_chartstype:"人才分布",J_type:"近一个月",J_industry:"互联网全行业",J_direction:"人才流入",J_na:"需求量",J_cf:"热门城市",J_fp:"职能",industry:[],label:[],index:"",type_limit:"",r_ltnum:null,r_gtnum:null,report_info:"",data_disturb:[],data_disturb_flow:[],show:function(t){if("b"==t.charAt(0)){var e=t.split(","),t=e[0],a=e[1];if(a){for(var r=0;r<i(".J_edit_desc").length;r++)if(r==a){i(this).attr("isClick","yes");break}}else i("#report_info").attr("isClick","yes");var n=avalon.vmodels[t]}else var n=avalon.vmodels[t];n&&(n.toggle=!0)},$aaOpts:{title:"数据干预",width:500,onConfirm:function(){var a=("人才分布"==e.J_chartstype?"talentdistribution":"人才流动"==e.J_chartstype?"talentflow":"supplydemand",[]);if(e.data_disturb.$model.length)a=e.data_disturb.$model,i.each(a,function(t,e){e.value=parseInt(e.value)});else{var r=e.data_disturb_flow.$model,n="";i.each(r,function(t,e){e.value?(e.value=parseInt(e.value),obj_key[n].push(e)):(obj_key={},a.push(obj_key),n=e.name,obj_key[e.name]=[])})}var o={data:JSON.stringify(a),api_url:e.api_url,id:e.data_id,api_time:e.api_time,params:JSON.stringify(e.params)};i.post("/api/data/interpose",o,function(a){t.resResult(a,"数据干预成功",function(){e.analysisData()})})}},$bbOpts:{title:"添加分析说明",width:500,onConfirm:function(){i("#report_info").attr("isClick")?(e.saveDesc(),i("#report_info").attr("isClick","")):i(".J_edit_desc").each(function(t,a){i(a).attr("isClick")&&(e.saveDesc(a),i(a).attr("isClick",""))})}},getPassFromCookie:function(){return window.$.cookie(location.host+"_userinfo")},clearPassToCookie:function(){window.$.cookie(location.host+"_userinfo","",{path:"/"})},toggle_hiddle:function(){e.toggle=!e.toggle},logout:function(){e.clearPassToCookie(),window.location.href=""},analysisData:function(){var a=e.getBean(),r="人才分布"==a.tab?"talentdistribution":"人才流动"==a.tab?"talentflow":"人才供需"==a.tab?"supplydemand":"remuneration";t.lockScreen(),i.post(a.url,a.bean,function(n){if(t.hideLock(),t.resResult(n),e.data_disturb=[],e.data_disturb_flow=[],n.data.data.data[0].name)e.data_disturb=n.data.data.data;else{var o=n.data.data.data;i.each(o,function(t,a){for(var r in a)e.data_disturb_flow.push({name:r}),e.data_disturb_flow=e.data_disturb_flow.concat(a[r])})}i("#J_charts_data").val(JSON.stringify(n.data.data.data)).attr("charts_type",a.charts_type).attr("bean",JSON.stringify(a.bean)).attr("typeLimit",JSON.stringify(e.type_limit)),i("#report_iframe").attr("src","../lib/resource-report/"+r+".html"),i("#report_info").attr("api_url",n.data.data.api_url),n.data.info.length>0?(i("#report_info").attr("user_id",n.data.info[0].pm_user_id),i("#report_info").attr("data_id",n.data.info[0]._id),"3"==e.type&&(i(".charts-warp").val("").val(n.data.info[0].info),e.hasInfo=n.data.info[0].info)):(i("#report_info").attr("data_url","").attr("data_id","").val(""),"3"==e.type&&(i(".charts-warp").val(""),e.hasInfo="请添加分析说明...")),"3"!=e.type&&(e.info=n.data.info),e.params=n.data.data.params,e.api_url=n.data.data.api_url,e.data_id=n.data.data._id,e.api_time=n.data.data.api_time})},getBean:function(){var t=e.J_chartstype,a={},r="",n="";switch(t){case"人才分布":a={industry:e.J_industry,cf:"热门城市"==e.J_cf?"city":"func",type:"近一个月"==e.J_type?2:"近三个月"==e.J_type?3:4},a.city="",a.top=10,r="/api/talent/distribution",n=a.cf;break;case"人才流动":a={industry:e.J_industry,direction:"人才流入"==e.J_direction?"in":"out",cf:"热门城市"==e.J_cf?"city":"func",type:"近一个月"==e.J_type?2:"近三个月"==e.J_type?3:4},a.city="",a.top=10,r="/api/talent/flow",n=a.cf;break;case"人才供需":a={industry:e.J_industry,na:"需求量"==e.J_na?"need":"all",fp:"职能"==e.J_fp?"func":"position",type:"近一个月"==e.J_type?2:"近三个月"==e.J_type?3:4},a.top=5,a.city="",r="/api/talent/exponential",n=a.na;break;case"人才薪酬":a={industry:e.J_industry,type:"近一个月"==e.J_type?2:"近三个月"==e.J_type?3:4,index:e.index,label:e.label.join(","),top:10},r="/api/talent/salary/analysis",n="tab1"}return{bean:a,tab:t,url:r,charts_type:n}},saveDesc:function(a){var r=i("#report_info").attr("user_id")?i("#report_info").attr("user_id"):e._id,n={};if(a){var o={api_url:i(a).attr("api_url"),user_id:i(a).attr("user_id"),report_info:e.report_info,params:JSON.stringify(e.params)};n=o}else n={api_url:e.api_url,user_id:r,report_info:e.report_info,params:JSON.stringify(e.params)};i.post("/api/info/write",n,function(e){t.resResult(e,"添加分析说明成功",function(){i(a).prev().text(n.report_info)})})},getconfig:function(a){var r=null;switch(a){case"人才分布":r=201;break;case"人才流动":r=202;break;case"人才供需":r=203;break;case"人才薪酬":r=204}var n="/report/config/all",o={report_type:r};i.post(n,o,function(a){if(t.resResult(a),e.industry=a.data[0].checks,e.industry.indexOf(e.J_industry)<0&&(e.J_industry="互联网全行业"),204==o.report_type){e.label=a.data[3].checks;try{a.data[4].checks[0]?e.index=a.data[4].checks[0]:e.index="0-200",e.r_ltnum=e.index.split("-")[0],e.r_gtnum=e.index.split("-")[1]}catch(r){}e.type_limit=a.data[5].checks}e.analysisData()})},consfigClick:function(){var t=/\b[0-9]\d{0,1}\b|\b[1-1]\d\d\b|\b200\b/;return!t.test(e.r_ltnum)||e.r_ltnum-0<0||e.r_ltnum-0>200||!t.test(e.r_gtnum)||e.r_gtnum-0<0||e.r_gtnum-0>200||e.r_ltnum-0>e.r_gtnum-0?(i("#errorMsg").show(),setTimeout(function(){i("#errorMsg").hide()},2e3),!1):(e.index=e.r_ltnum+"-"+e.r_gtnum,void e.analysisData())}});return e.$watch("J_chartstype",function(){e.getconfig(e.J_chartstype)}),e.$watch("J_type",function(){e.analysisData()}),e.$watch("J_industry",function(){e.analysisData()}),e.$watch("J_direction",function(){e.analysisData()}),e.$watch("J_na",function(){e.analysisData()}),e.$watch("J_cf",function(){e.analysisData()}),e.$watch("J_fp",function(){e.analysisData()}),avalon.scan(document.body),avalon.controller(function(t){t.$onRendered=function(){document.title="数联寻英",i("#side_accordion div").removeClass("md-accent-bg").eq(0).addClass("md-accent-bg"),e.getconfig(e.J_chartstype)},t.$onEnter=function(t,a,r){var n=e.getPassFromCookie(),i=n.split("|");e._id=i[0],e.type=i[1],e.identity="1"==e.type?"管理员":"2"==e.type?"公司":"业务员",e.short_id=i[2],e.username=i[3]},t.$onBeforeUnload=function(){i(".oni-dialog").empty()},t.$vmodels=[e]})}.apply(e,r),!(void 0!==n&&(t.exports=n))}).call(e,a(33))},38:function(t,e,a){var r,n;(function(i){r=[a(39)],n=function(t){var e={getPathParam:function(t){var e=new RegExp("(^|&)"+t+"=([^&]*)(&|$)","i"),a=window.location.search.substring(1).match(e);return null!=a?decodeURIComponent(a[2]):""},getUrlParms:function(){for(var t=new Object,e=location.search.substring(1),a=e.split("&"),r=0;r<a.length;r++){var n=a[r].indexOf("=");if(n!=-1){var i=a[r].substring(0,n),o=a[r].substring(n+1);t[i]=unescape(o)}}return t},createHeaderJSElement:function(t){var e=document.createElement("script");e.setAttribute("type","text/javascript"),e.setAttribute("src",t),document.getElementsByTagName("head")[0].appendChild(e)},createHeaderCSSElement:function(t){var e=document.createElement("link");e.setAttribute("type","text/css"),e.setAttribute("rel","stylesheet"),e.setAttribute("href",t),document.getElementsByTagName("head")[0].appendChild(e)},htmlEncode:function(t){var e=t+"";return""==e?e:e=e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(new RegExp('"',"g"),"&quot;").replace(new RegExp("'","g"),"&#39;").replace(new RegExp("  ","g")," &nbsp;").replace(new RegExp("\r|\n","g"),"<br/>")},htmlTitleEncode:function(e){t.nullOrEmpty(e)&&(e="");var a=e+"";return""==a?a:a=a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(new RegExp('"',"g"),"&quot;").replace(new RegExp("'","g"),"&#39;").replace(new RegExp("\r|\n","g"),"&#13")},htmlDecode:function(t){var e=t+"";return""==e?e:e=e.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/ &nbsp;/g,"  ").replace(/&amp;/g,"&")},tipsDIV:function(t,a,r,n,r){jTip(e.htmlEncode(t),a,n,r)},alertDIV:function(t,a,r){jAlert(e.htmlEncode(t),a,r)},confirmDIV:function(t,e,a,r){jConfirm(t,e,a,r)},getMsg:function(t){var e=xy_msg[t];return null!=e&&""!=e||(e=t),e},getMessage:function(t){if(0==arguments.length)return"";t+="";for(var e=1;e<arguments.length;e++){var a="\\{"+e+"\\}",r=arguments[e]+"";t=t.replaceAll(a,r)}return t},restCallback:function(t,a,r){try{if(t.code==-10){var n=t.msg;return void jAlert(n,function(){location.href="/user/logout"})}if(0!=t.code){var n=t.msg;return r?(e.hideLock(),void r(t.code,t,n)):(e.alertDIV(n,function(){}),void e.hideLock())}switch(e.hideLoadingCard(),e.hideLock(),typeof a){case"string":alertDIV(a);break;case"function":a(t.data)}}catch(i){e.hideLock()}},showLoadingCard:function(t){var e=i("#loading_small");0!=e.length?e.show():(e='<div id="loading_small"><img src="../images/ajax_loader.gif" alt="" /></div>',i("#navigation").append(e))},hideLoadingCard:function(){i("#loading_small").hide()},callbackRb:function(t){i.browser.msie?(t.appendTo(i("#rubbish")),i("#rubbish").html("")):t.remove()},stopPop:function(t){try{t.stopPropagation()}catch(t){t.cancelBubble}},isIe:function(){return!!i.browser.msie},onloadImg:function(t,e,a){var r=new Image;if(r.onload=function(){e&&"function"==typeof e&&e(t)},!r.complete)var n=setInterval(function(){if(r.complete)return e&&"function"==typeof e&&e(t),clearInterval(n),!1},500);r.onerror=function(){a&&"function"==typeof a&&a()},r.src=t},hiddenOnMouseDown:function(t){document.onmousedown=function(){var e=i("#"+t);1==e.is(":visible")&&e.hide()},i("#"+t).mousedown(function(t){t.stopPropagation()})},getUrlAddress:function(){var t=window.location.href,e=t.split("/");return e[0]+"//"+e[1]+e[2]+"/"+e[3]},lockScreen:function(){var t=document.documentElement.clientWidth,e=i(document).height();document.documentElement.style.overflow="hidden";var a=i("#loading_layer");0!=a.length?(i(".loading_layer_body").empty(),i(".loading_layer_body").html("<img src='../images/ajax_loader.gif' alt='' />"),a.css({width:t+"px",height:e+"px"}),a.show()):a='<div id="loading_layer" style="width:'+t+"px;height:"+e+'px;"><div class="loading_layer_body"><img src="../images/ajax_loader.gif" alt="" /></div></div>',i("body").append(i(a))},hideLock:function(){i("#loading_layer").hide(),document.documentElement.style.overflow=""},showAjaxOverlay:function(t,e,a){var r=t.outerWidth(!0),n=t.outerHeight(!0),o=i(window).scrollTop(),s=i("#ajax_overlay");0!=s.length?(s.css({width:r+"px",height:n+"px"}),s.find(".ajax_overlay_img").css("margin-top",(n+o-50)/2+"px"),s.show()):(t.addClass("pr"),s='<div style="width:'+r+"px;height:"+n+'px" id="ajax_overlay"><div class="ajax_overlay_img" style="text-align:center;margin-top:'+(n+o-50)/2+'px"><img src="/images/loading.gif" alt="" /><p class="loadingText">'+(void 0==e?"":e)+"</p></div></div>"),t.append(i(s))},hideAjaxOverlay:function(){i("#ajax_overlay").hide()},initImgUpload:function(a,r){var n="/.tmp/",o=5,s=i("#"+a.fileBtnId),l=".jpg,.bmp,.png";a.accessoryId&&s.on("mousedown",function(){if(i("#"+a.accessoryId).children(".img-list:visible").length>=o)return alertDIV(STATICMSG[1018]),!1}),i("#"+a.formId).attr({enctype:"multipart/form-data",action:"/upload/photo/",method:"post"}),i("#"+a.formId).submit(function(){return i(this).ajaxSubmit({error:function(t){status("Error: "+t.status)},success:function(t){t=JSON.parse(t),i("#"+a.photoId).attr("src",n+t.filename),i("#"+a.dataId).val(t.filename),e.hideLock()}}),!1}),s.change(function(){var t=[],r=s.val();t=r.split("\\"),r=t[t.length-1];var n=r.substring(r.lastIndexOf(".")+1).toLowerCase();return l.indexOf(n)==-1?(alertDIV(e.getMessage(STATICMSG[1019],l)),!1):(e.lockScreen(),void i("#"+a.formId).trigger("submit"))}),i("#"+a.delBtnId).on("click",function(){i(this).hide(),i("#"+a.dataId).val(""),t.nullOrEmpty(a.photoId)||(i("#"+a.photoId).parent().hide(),i("#"+a.photoId).attr("src",""))}),i("#"+a.photoId).on("click",function(){window.open(i(this).attr("src"))})},getAll:function(){var t,e={};t=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP"),t.open("GET","/static/script/positionTmp.txt",!1),t.send();var a={firstLevel:[],secondLevel:{}},e=a.secondLevel;return t.responseText.replace(/.+/g,function(t){var r=t.toString().split("\t");i.inArray(r[0],a.firstLevel)==-1&&a.firstLevel.push(r[0]),e[r[0]]||(e[r[0]]={}),r[2]?(e[r[0]][r[1]]||(e[r[0]][r[1]]=[]),e[r[0]][r[1]].push(r[2])):(e[r[0]][r[0]]||(e[r[0]][r[0]]=[]),e[r[0]][r[0]].push(r[1]))}),a},createMultilevelSelectHTML:function(t){var e=[],a=t.data||this.getAll();e.push('<div class="options-picker" style="display: none;">'),e.push('<div><div class="first-level-content">'),e.push('<div  _value="" class="pick-all-first"><input type="checkbox" class="check-all-first"/><span class="li-text ml5"><b>全部</b></span></div>');var r=a.firstLevel,n=0;return i.each(r,function(t){n++,e.push('<div  _value="'+r[t]+'" class="picker-first-level"><input id="checkbox_'+n+'" type="checkbox" class="checkbox-first-item" value="'+r[t]+'"/><span class="li-text ml5">'+r[t]+"</span></div>")}),e.push("</div>"),e.push('<div classs="next-level-content">'),n=0,i.each(r,function(t){n++,e.push('<div class="picker-next-level" style="display: none;" _title="'+r[t]+'">');var o=a.secondLevel[r[t]];if(!o)return e.push("</div>"),void e.push("</div>");i.isEmptyObject(o)||e.push('<div  class="pick-all-second ver-middle" ><input type="checkbox" class="check-all-second"/><span class="picker-second-title ml5">全部</span></div>');var s=0;i.each(o,function(a,o){return e.push('<div  class="mt10 mb10 ver-middle pick-second-item" style="text-align: left;">'),r[t]!=a&&(s++,e.push('<input id="checkbox_'+n+"_"+s+'" type="checkbox"  class="checkbox-second-item" value="'+a+'"/><span class="picker-second-title ml5">'+a+"</span>")),e.push('<div class="picker-three-level clearfix " style="display: block;">'),o&&0!=o.length?(i.each(o,function(i){o[i+1]?e.push('<div  class="mt10 ver-middle" f-data="'+r[t]+'" s-data="'+a+'"><input id="checkbox_'+n+"_"+s+"_"+(i+1)+'" type="checkbox"  class="checkbox-third-item" value="'+o[i]+'"/><span class="li-text ml5"  >'+o[i]+"</span>&nbsp;&nbsp;|&nbsp;&nbsp;</div>"):e.push('<div  class="mt10 ver-middle" f-data="'+r[t]+'" s-data="'+a+'"><input id="checkbox_'+n+"_"+s+"_"+(i+1)+'" type="checkbox"  class="checkbox-third-item" value="'+o[i]+'"/><span class="li-text ml5" >'+o[i]+"</span></div>")}),e.push("</div>"),void e.push("</div>")):(e.push("</div>"),void e.push("</div>"))}),e.push("</div>")}),e.push("</div>"),e.join("")},resResult:function(t,a,r){try{var n=i(document).height();if(i("#loading_layer").css("height",n+"px"),i("#loading_layer").show(),t.code==-10||t.code==-11){i(".loading_layer_body").empty();var a=t.msg;return i(".loading_layer_body").text(a),void(window.location.href="")}if(0!=t.code){i(".loading_layer_body").empty();var a=t.msg;return i(".loading_layer_body").text(a),void setTimeout(function(){e.hideLock(),r()},2e3)}a?(i(".loading_layer_body").empty(),i(".loading_layer_body").text(a),setTimeout(function(){e.hideLock(),r&&r()},2e3)):e.hideLock()}catch(o){e.hideLock()}},tips:function(t){try{var a=i(document).height();i("#loading_layer").css("height",a+"px"),i("#loading_layer").show(),t?(i(".loading_layer_body").empty(),i(".loading_layer_body").text(t),setTimeout(function(){e.hideLock()},2e3)):e.hideLock()}catch(r){e.hideLock()}}};return e}.apply(e,r),!(void 0!==n&&(t.exports=n))}).call(e,a(33))},39:function(t,e,a){var r,n;(function(i){r=[a(40),a(41)],n=function(t,e){var a={initAutoValidator:function(){var t=this;i(document).on("blur.validator","[validator]",function(e){t.validator(e.target,!0)})},getValidatorRules:function(t){var e=[];return null!=i(t).attr("validator")&&(e=i.trim(i(t).attr("validator")).split(" ")),i(t).closest("[removeDefaultRules]").length||(e.reverse(),e.push("char"),e.reverse()),e},getValidatorValue:function(t){var e="",a=t.tagName;switch(a.toUpperCase()){case"INPUT":case"TEXTAREA":e=i.trim(i(t).val());break;case"CITE":if("radio"==i(t).attr("type")){var r=i(t).attr("name"),n=i("cite[name='"+r+"'].checked");n.length>0&&this.notNullOrEmpty(n.eq(0).attr("value"))&&(e=n.eq(0).attr("value"))}else if("checkbox"==i(t).attr("type")){var r=i(t).attr("name"),o=[];i("cite[name='"+r+"'].checked").each(function(){o.push(i(this).attr("value"))}),e=o.join(",")}else e=i.trim(i(t).text());break;default:e=i.trim(i(t).text())}return e.toString()},getErrorTips:function(t,e){return i(t).attr("errorTipsId")&&i("#"+i(t).attr("errorTipsId")).length>0?i("#"+i(t).attr("errorTipsId")).removeClass("u-error").addClass("u-error"):i(t).siblings("p.errorTips").length>0?(i(t).siblings("p.errorTips").removeClass("u-error").addClass("u-error"),i(t).siblings("p.errorTips").eq(0)):(i(t).parent().append("<p class='u-error errorTips closeToHide'></p>"),i(t).siblings("p.errorTips").eq(0))},getErrorTipsKey:function(t){return i(t).attr("errorTipsKey")||""},validator:function(t,r){var n=this,o=t.nodeType;if(1!=o)return!0;var s=this.getValidatorRules(t),l=this.getValidatorValue(t),c=this.getErrorTips(t,r),u=this.getErrorTipsKey(t);if(i.inArray("same",s)>-1&&!this.sameValidator(t))return!1;if(""==l&&i.inArray("notNullOrEmpty",s)==-1&&i.inArray("notNullOrEmptySelect",s)==-1)return c.removeAttr("title"),c.hide(),!0;try{for(var d=0,p=s.length;d<p;d++)if("same"!=s[d]){var h=this[s[d]](l,t);if(!h){if("notNullOrEmpty"==s[d]&&1==r)return c.hide(),!1;"notNullOrEmptySelect"==s[d]&&i(t).parent(".select-warp").addClass("error-input"),i(t).parent().find("input").addClass("error-input");var f=a.getMessage(e["VALIDATOR_"+s[d].toUpperCase()],u);return c.text(n.htmlTitleEncode(f)),c.show(),!1}"notNullOrEmptySelect"==s[d]&&i(t).parent(".select-warp").removeClass("error-input")}for(var g=[["min","max"]],d=0,p=g.length;d<p;d++)if(!this.attrValidator(t,g[d]))return!1;return c.removeAttr("title"),c.hide(),c.parent().find("input").removeClass("error-input"),!0}catch(m){var f=a.getMessage(e.VALIDATOR_UNKNOWNERROR);return c.text(n.htmlTitleEncode(f)),c.show(),!1}},autoValidator:function(t){var e=!0,a=this;return t.find("[validator]").each(function(){var t=a.validator(this);t||(e=t)}),e},sameValidator:function(t){var r=this,n=this.getValidatorValue(t),o=this.getErrorTips(t),s=this.getErrorTipsKey(t);if(this.nullOrEmpty(i(t).attr("equalTo")))return!0;var l=i(i(t).attr("equalTo"))[0],c=this.getValidatorValue(l);if(c!=n){var u=a.getMessage(e.VALIDATOR_SAME,s);return o.text(r.htmlTitleEncode(u)),o.show(),!1}return!0},attrValidator:function(t,r){var n=this,o=this.getValidatorValue(t),s=this.getErrorTips(t),l=this.getErrorTipsKey(t);if(r instanceof Array){for(var c=0,u=r.length;c<u;c++)if(!this.attrValidator(t,r[c])){var d=this.getErrorMsg(t,r);return s.text(n.htmlTitleEncode(d)),s.show(),!1}return!0}if(r+="",this.nullOrEmpty(i(t).attr(r)))return!0;if(this[r](o,i(t).attr(r)))return!0;var p="VALIDATOR_"+r.toUpperCase(),d=a.getMessage(e[p],l);return s.text(n.htmlTitleEncode(d)),s.show(),!1},getMessage:function(t){if(0==arguments.length)return"";t+="";for(var e=1;e<arguments.length;e++){var a="\\{"+e+"\\}",r=arguments[e]+"";t=t.replaceAll(a,r)}return t},getErrorMsg:function(t,r){for(var n=this.getErrorTipsKey(t),o=[],s="",l="",c=0,u=r.length;c<u;c++)s="VALIDATOR_"+r[c].toUpperCase(),this.nullOrEmpty(i(t).attr(r[c]))||(l=o.length?e[s].replaceAll("\\{1\\}",""):e[s],o.push(a.getMessage(l,n,i(t).attr(r[c]))));return o.join(",")},htmlTitleEncode:function(t){this.nullOrEmpty(t)&&(t="");var e=t+"";return""==e?e:e=e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(new RegExp('"',"g"),"&quot;").replace(new RegExp("'","g"),"&#39;").replace(new RegExp("\r|\n","g"),"&#13")},"char":function(t){return/^[\u4E00-\u9FA5a-zA-Z0-9\/＋\[\]\w\-\(\).（）;:#]*$|^([\u4E00-\u9FA5a-zA-Z0-9\/＋\[\]\w\-\(\).（）;:#])+([\u4E00-\u9FA5a-zA-Z0-9\/＋\[\]\w\-\(\).（）;:# ])+([\u4E00-\u9FA5a-zA-Z0-9\/＋\[\]\w\-\(\).（）;:#])+$/.test(t)},isNull:function(t){return null==t},isEmpty:function(t){return null!=t&&0==t.length},notNullOrEmpty:function(t){return!a.nullOrEmpty(t)},notNullOrEmptySelect:function(t){return!a.nullOrEmpty(t)},nullOrEmpty:function(t){return null==t||0==t.length},number:function(t){return t==parseInt(t,10)&&(t+"").indexOf("-")==-1&&(t+"").indexOf(".")==-1},numberPoint:function(t){return/^(?!(0[0-9]{0,}$))[0-9]{1,}[.]{0,}[0-9]{0,}$/.test(t)},email:function(t){return/^([a-z0-9A-Z]+[-|\.|_]?)+[a-z0-9A-Z]@([a-z0-9A-Z]+(-[a-z0-9A-Z]+)?\.)+[a-zA-Z]{2,}$/.test(t)},moreEmail:function(t){return/^[a-zA-Z0-9]+([._\\-]*[a-zA-Z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.{1}){1,63}[a-z0-9]+$/.test(t)},phoneEmail:function(t){var e=/^((0?1\d{10})|((0(\d{2,3}))[\-]?\d{7,8}))$|^(0[0-9]{2,3}\-)?([2-9][0-9]{6,7})$/.test(t),a=/^([a-z0-9A-Z]+[-|\.|_]?)+[a-z0-9A-Z]@([a-z0-9A-Z]+(-[a-z0-9A-Z]+)?\.)+[a-zA-Z]{2,}$/.test(t);if(e||a)return!0},companyEmail:function(t){return!/^$|^(([a-zA-Z0-9])+([a-zA-Z0-9-_.]{1,})@(qq|163|126|sina|gmail|outlook|yeah|aliyun|139|189).[a-zA-Z0-9\.\_]{2,})$/.test(t)},pwdlength:function(t){return/^$|^(([a-zA-Z0-9]){8,16})$/.test(t)},pwdFormat:function(t){return/^(?!\d+$)(?![A-Za-z]+$)[a-zA-Z0-9]{8,16}$/.test(t)},notes:function(t){return/^[\u4E00-\u9FA5a-zA-Z0-9\/＋\[\]\w\-\(\).（）;#@]*$|^([\u4E00-\u9FA5a-zA-Z0-9\/＋\[\]\w\-\(\).（）;#@])+([\u4E00-\u9FA5a-zA-Z0-9\/＋\[\]\w\-\(\).（）;#@ ])+([\u4E00-\u9FA5a-zA-Z0-9\/＋\[\]\w\-\(\).（）;#@])+$/.test(t)},phone:function(t){return/^([0-9\-]{5,})?$/.test(t)},telPhone:function(t){return/^((0?1\d{10})|((0(\d{2,3}))[\-]?\d{7,8}))$|^(0[0-9]{2,3}\-)?([2-9][0-9]{6,7})$/.test(t)},memo:function(t){return t.length>250},isDefined:function(t){return null!=t&&"undefined"!=typeof t},isURL:function(t){return/^((https?|ftp|news):\/\/)?([a-z]([a-z0-9\-]*[\.。])+([a-z]{2}|aero|arpa|biz|com|coop|edu|gov|info|int|jobs|mil|museum|name|nato|net|org|pro|travel)|(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5]))(\/[a-z0-9_\-\.~]+)*(\/([a-z0-9_\-\.]*)(\?[a-z0-9+_\-\.%=&]*)?)?(#[a-z][a-z0-9_]*)?$/.test(t)},identityCode:function(t){if(!/^([\d]{15}|[\d]{17}[Xx\d])$/.test(t))return!1;var e;e=15==t.length?"19"+t.substr(6,2)+"-"+t.substr(8,2)+"-"+t.substr(10,2):t.substr(6,4)+"-"+t.substr(10,2)+"-"+t.substr(12,2);var a=new Date;return a.setCNDate(e),e==a.format()},brithday:function(t){if(!/^([\d]{4}-[\d]{2}-[\d]{2})$/.test(t))return!1;var e=new Date;return e.setCNDate(t),t==e.format()},bandWidth:function(t){return/^\d+(.\d+)?$/.test(t)},min:function(t,e){var a=parseInt(t,10),e=parseInt(e,10);return!isNaN(a)&&!isNaN(e)&&e<=a},max:function(t,e){var a=parseInt(t,10),e=parseInt(e,10);return!isNaN(a)&&!isNaN(e)&&e>=a},decimalPoint:function(t){var e=/^[0-9]+([.]{1}[0-9]{1,2})?$/;return!!e.test(t)}};return a}.apply(e,r),!(void 0!==n&&(t.exports=n))}).call(e,a(33))},40:function(t,e,a){(function(t){String.prototype.replaceAll=function(t,e){try{return this.replace(new RegExp(t,"gm"),e)}catch(a){return this}},String.prototype.toSqlString=function(){try{return this.replaceAll("/","//")}catch(t){return this}},String.prototype.startWith=function(t){var e=new RegExp("^"+t);return e.test(this)},Date.prototype.format=function(t){var e={"M+":this.getMonth()+1,"d+":this.getDate(),"H+":this.getHours(),"m+":this.getMinutes(),"s+":this.getSeconds(),"q+":Math.floor((this.getMonth()+3)/3),"S+":this.getMilliseconds()};t||(t="yyyy-MM-dd"),/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(this.getFullYear()+"").substr(4-RegExp.$1.length))),/(S+)/.test(t)&&(t=t.replace(RegExp.$1,(this.getMilliseconds()+"").substr(3-RegExp.$1.length)));for(var a in e)new RegExp("("+a+")").test(t)&&(t=t.replace(RegExp.$1,1==RegExp.$1.length?e[a]:("00"+e[a]).substr((""+e[a]).length)));return t},Date.prototype.getCNDay=function(){var t={0:"星期日",1:"星期一",2:"星期二",3:"星期三",4:"星期四",5:"星期五",6:"星期六"};return t[this.getDay()]},Date.prototype.setCNDate=function(e){if(e){var a=t.trim(e).split(" "),r=a[0].split("-"),n="19"+r[0];n=parseInt(n.substring(n.length-4,n.length),10),isNaN(n)&&(n=this.getFullYear());var i=this.getMonth();if(r.length>1){var o=parseInt(r[1],10);isNaN(o)||(i=o-1)}var s=this.getDate();if(r.length>2){var l=parseInt(r[2],10);isNaN(l)||(s=l)}if(this.setFullYear(n,i,s),!(a.length<2)){var c=a[1].split(":"),u=this.getHours(),d=parseInt(c[0],10);isNaN(d)||(u=d);var p=this.getMinutes();if(c.length>1){var h=parseInt(c[1],10);isNaN(h)||(p=h)}var f=this.getSeconds();if(c.length>2){var g=parseInt(c[2],10);isNaN(g)||(f=g)}var m=this.getMilliseconds();if(c.length>3){var v=parseInt(c[3],10);isNaN(v)||(m=v)}this.setHours(u,p,f,m)}}},Array.prototype.joinAll=function(t){for(var e=0,a=this.length;e<a;e++)this[e]instanceof Array&&(this[e]=this[e].joinAll(t));return this.join(t)},Array.prototype.last=function(){return this[this.length>0?this.length-1:0]}}).call(e,a(33))},41:function(t,e,a){var r;r=function(){return{VALIDATOR_UNKNOWNERROR:"未知的校验错误",VALIDATOR_CHAR:"不满足基础校验规则",VALIDATOR_NOTNULLOREMPTY:"请输入{1}",VALIDATOR_NOTNULLOREMPTYSELECT:"请选择{1}",VALIDATOR_PHONE:"{1}不符合规则",VALIDATOR_TELPHONE:"{1}不符合规则",VALIDATOR_LANDLINE:"请输入{1}",VALIDATOR_NUMBER:"{1}不是有效数值",VALIDATOR_SAME:"两次输入的{1}不一致",VALIDATOR_EMAIL:"请输入正确的邮箱地址，如example@jipin.com",VALIDATOR_MOREEMAIL:"{1}不符合规则",VALIDATOR_COMPANYEMAIL:"请输入以企业域名为后缀的邮箱地址",VALIDATOR_IDENTITYCODE:"{1}不符合身份证号码规则",VALIDATOR_DECIMALPOINT:"{1}必须为数字且最多只能保留两位小数",VALIDATOR_PWDLENGTH:"密码位数为8-16位",VALIDATOR_PWDFORMAT:"输入8-16位包含字母、数字的密码",VALIDATOR_ISURL:"不是正确的网址格式",VALIDATOR_NUMBERPOINT:"{1}不符合规则",VALIDATOR_PHONEEMAIL:"请输入正确手机号码或邮箱",VALIDATOR_MIN:"{1}必须大于或者等于{2}",VALIDATOR_MAX:"{1}必须小于或者等于{2}",BEYOND_MAX_LENGTH:"{1}过长。",BEYOND_MIN_LENGTH:"{1}过短。",COMMON_LOADING_TEXT:"loading..."}}.call(e,a,e,t),!(void 0!==r&&(t.exports=r))}});