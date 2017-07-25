var avalon = require("./assets/vendor/oniui/avalon.shim");
require('../node_modules/purecss/build/pure-min.css');
require('./assets/css/common.css');

require('./assets/css/reset.css');
require('./lib/bootstrap/css/bootstrap.min.css');
require('./lib/select/css/select.css');

require('./assets/css/theme.css');
require('./assets/css/font-awesome/iconfont.css');
require('./assets/css/slxy.css');
require('./assets/css/login.css');
//项目入口
require("./assets/vendor/oniui/mmRequest/mmRequest");
require("./assets/vendor/oniui/mmRouter/mmState");
require("./assets/vendor/oniui/mmRouter/mmRouter");
require("./assets/vendor/oniui/mmRouter/mmHistory");
require("./assets/vendor/oniui/mmPromise/mmPromise");
require("./assets/vendor/oniui/pager/avalon.pager");
require("./assets/vendor/oniui/dialog/avalon.dialog");
require("./assets/vendor/oniui/validation/avalon.validation");
// jquery.cookie
require("./lib/jquery-1.8.3.min");
require("./lib/jquery.cookie.min");
require("./lib/bootstrap-typeahead");

// 定义一个顶层的vmodel，用来放置全局共享数据
var root = avalon.define({
    $id: "app"
});
/**
 * 首页路由
 */

avalon.state("login", {
    url: "/login",
    views: {
        "": {
            //配置模块模板和控制器
            templateProvider: function() {
                return new Promise(function(rs) {
                    require.ensure([], function(tt) {
                        rs(require("text!./modules/login/login.html"))
                    })
                })
            },
            controllerProvider: function() {
                return new Promise(function(rs) {
                    require.ensure([], function() {
                        rs(require("./modules/login/login.js"))
                    })
                })
            }
        }
    }
});

avalon.state("report", {
    url: "/report",
    views: {
        "": {
            //配置模块模板和控制器
            templateProvider: function() {
                return new Promise(function(rs) {
                    require.ensure([], function(tt) {
                        rs(require("text!./modules/report/report.html"))
                    })
                })
            },
            controllerProvider: function() {
                return new Promise(function(rs) {
                    require.ensure([], function() {
                        rs(require("./modules/report/report.js"))
                    })
                })
            }
        }
    }
});

avalon.state("compensation", {
    url: "/compensation",
    views: {
        "": {
            //配置模块模板和控制器
            templateProvider: function() {
                return new Promise(function(rs) {
                    require.ensure([], function(tt) {
                        rs(require("text!./modules/compensation/compensation.html"))
                    })
                })
            },
            controllerProvider: function() {
                return new Promise(function(rs) {
                    require.ensure([], function() {
                        rs(require("./modules/compensation/compensation.js"))
                    })
                })
            }
        }
    }
});

avalon.state("configure", {
    url: "/configure",
    views: {
        "": {
            //配置模块模板和控制器
            templateProvider: function() {
                return new Promise(function(rs) {
                    require.ensure([], function(tt) {
                        rs(require("text!./modules/configure/configure.html"))
                    })
                })
            },
            controllerProvider: function() {
                return new Promise(function(rs) {
                    require.ensure([], function() {
                        rs(require("./modules/configure/configure.js"))
                    })
                })
            }
        }
    }
});

avalon.state("userInfo", {
    url: "/userInfo",
    views: {
        "": {
            //配置模块模板和控制器
            templateProvider: function() {
                return new Promise(function(rs) {
                    require.ensure([], function(tt) {
                        rs(require("text!./modules/userInfo/userInfo.html"))
                    })
                })
            },
            controllerProvider: function() {
                return new Promise(function(rs) {
                    require.ensure([], function() {
                        rs(require("./modules/userInfo/userInfo.js"))
                    })
                })
            }
        }
    }
});

avalon.state("userInfo.id", {
    url: "/{id}",
    views: {
        "": {
            //配置模块模板和控制器
            templateProvider: function() {
                return new Promise(function(rs) {
                    require.ensure([], function(tt) {
                        rs(require("text!./modules/userInfo/userInfo.html"))
                    })
                })
            },
            controllerProvider: function() {
                return new Promise(function(rs) {
                    require.ensure([], function() {
                        rs(require("./modules/userInfo/userInfo.js"))
                    })
                })
            }
        }
    }
});

avalon.state("account", {
    url: "/account",
    views: {
        "": {
            //配置模块模板和控制器
            templateProvider: function() {
                return new Promise(function(rs) {
                    require.ensure([], function(tt) {
                        rs(require("text!./modules/account/account.html"))
                    })
                })
            },
            controllerProvider: function() {
                return new Promise(function(rs) {
                    require.ensure([], function() {
                        rs(require("./modules/account/account.js"))
                    })
                })
            }
        }
    }
});



/**
 * 路由全局配置
 */
avalon.state.config({
    onError: function() {},
    onBegin: function() {
        // var obj = root.userinfo.$model;
        // delete avalon.vmodels["userInfo"]


    },
    onViewEnter: function(newNode, oldNode) {

        } // 不建议使用动画，因此实际使用的时候，最好去掉onViewEnter和ms-view元素上的oni-mmRouter-slide

});
avalon.history.start({
    basepath: "/",
    fireAnchor: false
});

avalon.ready(function() {

});


//开始扫描编译
avalon.scan(document.body);

if (location.hash == "") {
    window.location.href = "#!/login";
}