webpackJsonp([0,13],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	var avalon = __webpack_require__(2);
	__webpack_require__(3);
	__webpack_require__(4);
	
	__webpack_require__(5);
	__webpack_require__(6);
	__webpack_require__(7);
	
	__webpack_require__(8);
	__webpack_require__(9);
	__webpack_require__(10);
	__webpack_require__(11);
	//项目入口
	__webpack_require__(12);
	__webpack_require__(14);
	__webpack_require__(15);
	__webpack_require__(16);
	__webpack_require__(13);
	__webpack_require__(17);
	__webpack_require__(21);
	__webpack_require__(28);
	// jquery.cookie
	__webpack_require__(29);
	__webpack_require__(31);
	__webpack_require__(32);
	
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
	                    __webpack_require__.e/* nsure */(1, function(tt) {
	                        rs(__webpack_require__(34))
	                    })
	                })
	            },
	            controllerProvider: function() {
	                return new Promise(function(rs) {
	                    __webpack_require__.e/* nsure */(2, function() {
	                        rs(__webpack_require__(35))
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
	                    __webpack_require__.e/* nsure */(3, function(tt) {
	                        rs(__webpack_require__(36))
	                    })
	                })
	            },
	            controllerProvider: function() {
	                return new Promise(function(rs) {
	                    __webpack_require__.e/* nsure */(4, function() {
	                        rs(__webpack_require__(37))
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
	                    __webpack_require__.e/* nsure */(5, function(tt) {
	                        rs(__webpack_require__(42))
	                    })
	                })
	            },
	            controllerProvider: function() {
	                return new Promise(function(rs) {
	                    __webpack_require__.e/* nsure */(6, function() {
	                        rs(__webpack_require__(43))
	                    })
	                })
	            }
	        }
	    }
	});
	
	avalon.state("config", {
	    url: "/config",
	    views: {
	        "": {
	            //配置模块模板和控制器
	            templateProvider: function() {
	                return new Promise(function(rs) {
	                    __webpack_require__.e/* nsure */(7, function(tt) {
	                        rs(__webpack_require__(46))
	                    })
	                })
	            },
	            controllerProvider: function() {
	                return new Promise(function(rs) {
	                    __webpack_require__.e/* nsure */(8, function() {
	                        rs(__webpack_require__(47))
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
	                    __webpack_require__.e/* nsure */(9, function(tt) {
	                        rs(__webpack_require__(48))
	                    })
	                })
	            },
	            controllerProvider: function() {
	                return new Promise(function(rs) {
	                    __webpack_require__.e/* nsure */(10, function() {
	                        rs(__webpack_require__(49))
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
	                    __webpack_require__.e/* nsure */(9/* duplicate */, function(tt) {
	                        rs(__webpack_require__(48))
	                    })
	                })
	            },
	            controllerProvider: function() {
	                return new Promise(function(rs) {
	                    __webpack_require__.e/* nsure */(10/* duplicate */, function() {
	                        rs(__webpack_require__(49))
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
	                    __webpack_require__.e/* nsure */(11, function(tt) {
	                        rs(__webpack_require__(50))
	                    })
	                })
	            },
	            controllerProvider: function() {
	                return new Promise(function(rs) {
	                    __webpack_require__.e/* nsure */(12, function() {
	                        rs(__webpack_require__(51))
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
	    onError: function() {
	        // console.log(arguments)
	    },
	    onBegin: function() {
	        // var obj = root.userinfo.$model;
	        // console.log(root.passname);
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

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*==================================================
	 Copyright (c) 2013-2015 司徒正美 and other contributors
	 http://www.cnblogs.com/rubylouvre/
	 https://github.com/RubyLouvre
	 http://weibo.com/jslouvre/
	 
	 Released under the MIT license
	 avalon.js 1.4.7.1 built in 2015.11.19
	 support IE6+ and other browsers
	 ==================================================*/
	(function(global, factory) {
	
	    if (typeof module === "object" && typeof module.exports === "object") {
	        // For CommonJS and CommonJS-like environments where a proper `window`
	        // is present, execute the factory and get avalon.
	        // For environments that do not have a `window` with a `document`
	        // (such as Node.js), expose a factory as module.exports.
	        // This accentuates the need for the creation of a real `window`.
	        // e.g. var avalon = require("avalon")(window);
	        module.exports = global.document ? factory(global, true) : function(w) {
	            if (!w.document) {
	                throw new Error("Avalon requires a window with a document")
	            }
	            return factory(w)
	        }
	    } else {
	        factory(global)
	    }
	
	    // Pass this if window is not defined yet
	}(typeof window !== "undefined" ? window : this, function(window, noGlobal) {
	
	    /*********************************************************************
	     *                    全局变量及方法                                  *
	     **********************************************************************/
	    var expose = new Date() - 0
	        //http://stackoverflow.com/questions/7290086/javascript-use-strict-and-nicks-find-global-function
	    var DOC = window.document
	    var head = DOC.getElementsByTagName("head")[0] //HEAD元素
	    var ifGroup = head.insertBefore(document.createElement("avalon"), head.firstChild) //避免IE6 base标签BUG
	    ifGroup.innerHTML = "X<style id='avalonStyle'>.avalonHide{ display: none!important }</style>"
	    ifGroup.setAttribute("ms-skip", "1")
	    ifGroup.className = "avalonHide"
	    var rnative = /\[native code\]/ //判定是否原生函数
	    function log() {
	        if (window.console && avalon.config.debug) {
	            // http://stackoverflow.com/questions/8785624/how-to-safely-wrap-console-log
	            Function.apply.call(console.log, console, arguments)
	        }
	    }
	
	
	    var subscribers = "$" + expose
	    var stopRepeatAssign = false
	    var rword = /[^, ]+/g //切割字符串为一个个小块，以空格或豆号分开它们，结合replace实现字符串的forEach
	    var rcomplexType = /^(?:object|array)$/
	    var rsvg = /^\[object SVG\w*Element\]$/
	    var rwindow = /^\[object (?:Window|DOMWindow|global)\]$/
	    var oproto = Object.prototype
	    var ohasOwn = oproto.hasOwnProperty
	    var serialize = oproto.toString
	    var ap = Array.prototype
	    var aslice = ap.slice
	    var W3C = window.dispatchEvent
	    var root = DOC.documentElement
	    var avalonFragment = DOC.createDocumentFragment()
	    var cinerator = DOC.createElement("div")
	    var class2type = {}
	    "Boolean Number String Function Array Date RegExp Object Error".replace(rword, function(name) {
	        class2type["[object " + name + "]"] = name.toLowerCase()
	    })
	
	
	    function noop() {}
	
	
	    function oneObject(array, val) {
	        if (typeof array === "string") {
	            array = array.match(rword) || []
	        }
	        var result = {},
	            value = val !== void 0 ? val : 1
	        for (var i = 0, n = array.length; i < n; i++) {
	            result[array[i]] = value
	        }
	        return result
	    }
	
	    //生成UUID http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript
	    var generateID = function(prefix) {
	        prefix = prefix || "avalon"
	        return String(Math.random() + Math.random()).replace(/\d\.\d{4}/, prefix)
	    }
	
	    function IE() {
	        if (window.VBArray) {
	            var mode = document.documentMode
	            return mode ? mode : window.XMLHttpRequest ? 7 : 6
	        } else {
	            return NaN
	        }
	    }
	    var IEVersion = IE()
	
	    avalon = function(el) { //创建jQuery式的无new 实例化结构
	        return new avalon.init(el)
	    }
	
	    avalon.profile = function() {
	        if (window.console && avalon.config.profile) {
	            Function.apply.call(console.log, console, arguments)
	        }
	    }
	
	    /*视浏览器情况采用最快的异步回调*/
	    avalon.nextTick = new function() { // jshint ignore:line
	            var tickImmediate = window.setImmediate
	            var tickObserver = window.MutationObserver
	            if (tickImmediate) { //IE10 \11 edage
	                return tickImmediate.bind(window)
	            }
	
	            var queue = []
	
	            function callback() {
	                var n = queue.length
	                for (var i = 0; i < n; i++) {
	                    queue[i]()
	                }
	                queue = queue.slice(n)
	            }
	
	            if (tickObserver) { // 支持MutationObserver
	                var node = document.createTextNode("avalon")
	                new tickObserver(callback).observe(node, {
	                        characterData: true
	                    }) // jshint ignore:line
	                return function(fn) {
	                    queue.push(fn)
	                    node.data = Math.random()
	                }
	            }
	
	            if (window.VBArray) {
	                return function(fn) {
	                    queue.push(fn)
	                    var node = DOC.createElement("script")
	                    node.onreadystatechange = function() {
	                        callback() //在interactive阶段就触发
	                        node.onreadystatechange = null
	                        head.removeChild(node)
	                        node = null
	                    }
	                    head.appendChild(node)
	                }
	            }
	
	
	            return function(fn) {
	                setTimeout(fn, 4)
	            }
	        } // jshint ignore:line
	        /*********************************************************************
	         *                 avalon的静态方法定义区                              *
	         **********************************************************************/
	    avalon.init = function(el) {
	        this[0] = this.element = el
	    }
	    avalon.fn = avalon.prototype = avalon.init.prototype
	
	    avalon.type = function(obj) { //取得目标的类型
	        if (obj == null) {
	            return String(obj)
	        }
	        // 早期的webkit内核浏览器实现了已废弃的ecma262v4标准，可以将正则字面量当作函数使用，因此typeof在判定正则时会返回function
	        return typeof obj === "object" || typeof obj === "function" ?
	            class2type[serialize.call(obj)] || "object" :
	            typeof obj
	    }
	
	    var isFunction = typeof alert === "object" ? function(fn) {
	        try {
	            return /^\s*\bfunction\b/.test(fn + "")
	        } catch (e) {
	            return false
	        }
	    } : function(fn) {
	        return serialize.call(fn) === "[object Function]"
	    }
	    avalon.isFunction = isFunction
	
	    avalon.isWindow = function(obj) {
	        if (!obj)
	            return false
	                // 利用IE678 window == document为true,document == window竟然为false的神奇特性
	                // 标准浏览器及IE9，IE10等使用 正则检测
	        return obj == obj.document && obj.document != obj //jshint ignore:line
	    }
	
	    function isWindow(obj) {
	        return rwindow.test(serialize.call(obj))
	    }
	    if (isWindow(window)) {
	        avalon.isWindow = isWindow
	    }
	    var enu
	    for (enu in avalon({})) {
	        break
	    }
	    var enumerateBUG = enu !== "0" //IE6下为true, 其他为false
	        /*判定是否是一个朴素的javascript对象（Object），不是DOM对象，不是BOM对象，不是自定义类的实例*/
	    avalon.isPlainObject = function(obj, key) {
	        if (!obj || avalon.type(obj) !== "object" || obj.nodeType || avalon.isWindow(obj)) {
	            return false;
	        }
	        try { //IE内置对象没有constructor
	            if (obj.constructor && !ohasOwn.call(obj, "constructor") && !ohasOwn.call(obj.constructor.prototype, "isPrototypeOf")) {
	                return false;
	            }
	        } catch (e) { //IE8 9会在这里抛错
	            return false;
	        }
	        if (enumerateBUG) {
	            for (key in obj) {
	                return ohasOwn.call(obj, key)
	            }
	        }
	        for (key in obj) {}
	        return key === void 0 || ohasOwn.call(obj, key)
	    }
	    if (rnative.test(Object.getPrototypeOf)) {
	        avalon.isPlainObject = function(obj) {
	            // 简单的 typeof obj === "object"检测，会致使用isPlainObject(window)在opera下通不过
	            return serialize.call(obj) === "[object Object]" && Object.getPrototypeOf(obj) === oproto
	        }
	    }
	    //与jQuery.extend方法，可用于浅拷贝，深拷贝
	    avalon.mix = avalon.fn.mix = function() {
	        var options, name, src, copy, copyIsArray, clone,
	            target = arguments[0] || {},
	            i = 1,
	            length = arguments.length,
	            deep = false
	
	        // 如果第一个参数为布尔,判定是否深拷贝
	        if (typeof target === "boolean") {
	            deep = target
	            target = arguments[1] || {}
	            i++
	        }
	
	        //确保接受方为一个复杂的数据类型
	        if (typeof target !== "object" && !isFunction(target)) {
	            target = {}
	        }
	
	        //如果只有一个参数，那么新成员添加于mix所在的对象上
	        if (i === length) {
	            target = this
	            i--
	        }
	
	        for (; i < length; i++) {
	            //只处理非空参数
	            if ((options = arguments[i]) != null) {
	                for (name in options) {
	                    src = target[name]
	                    try {
	                        copy = options[name] //当options为VBS对象时报错
	                    } catch (e) {
	                        continue
	                    }
	
	                    // 防止环引用
	                    if (target === copy) {
	                        continue
	                    }
	                    if (deep && copy && (avalon.isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {
	
	                        if (copyIsArray) {
	                            copyIsArray = false
	                            clone = src && Array.isArray(src) ? src : []
	
	                        } else {
	                            clone = src && avalon.isPlainObject(src) ? src : {}
	                        }
	
	                        target[name] = avalon.mix(deep, clone, copy)
	                    } else if (copy !== void 0) {
	                        target[name] = copy
	                    }
	                }
	            }
	        }
	        return target
	    }
	
	    function _number(a, len) { //用于模拟slice, splice的效果
	        a = Math.floor(a) || 0
	        return a < 0 ? Math.max(len + a, 0) : Math.min(a, len);
	    }
	
	    avalon.mix({
	        rword: rword,
	        subscribers: subscribers,
	        version: 1.471,
	        ui: {},
	        log: log,
	        slice: W3C ? function(nodes, start, end) {
	            return aslice.call(nodes, start, end)
	        } : function(nodes, start, end) {
	            var ret = []
	            var len = nodes.length
	            if (end === void 0)
	                end = len
	            if (typeof end === "number" && isFinite(end)) {
	                start = _number(start, len)
	                end = _number(end, len)
	                for (var i = start; i < end; ++i) {
	                    ret[i - start] = nodes[i]
	                }
	            }
	            return ret
	        },
	        noop: noop,
	        /*如果不用Error对象封装一下，str在控制台下可能会乱码*/
	        error: function(str, e) {
	            throw (e || Error)(str)
	        },
	        /*将一个以空格或逗号隔开的字符串或数组,转换成一个键值都为1的对象*/
	        oneObject: oneObject,
	        /* avalon.range(10)
	         => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
	         avalon.range(1, 11)
	         => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
	         avalon.range(0, 30, 5)
	         => [0, 5, 10, 15, 20, 25]
	         avalon.range(0, -10, -1)
	         => [0, -1, -2, -3, -4, -5, -6, -7, -8, -9]
	         avalon.range(0)
	         => []*/
	        range: function(start, end, step) { // 用于生成整数数组
	            step || (step = 1)
	            if (end == null) {
	                end = start || 0
	                start = 0
	            }
	            var index = -1,
	                length = Math.max(0, Math.ceil((end - start) / step)),
	                result = new Array(length)
	            while (++index < length) {
	                result[index] = start
	                start += step
	            }
	            return result
	        },
	        eventHooks: [],
	        /*绑定事件*/
	        bind: function(el, type, fn, phase) {
	            var hooks = avalon.eventHooks
	            var hook = hooks[type]
	            if (typeof hook === "object") {
	                type = hook.type || type
	                phase = hook.phase || !!phase
	                fn = hook.fn ? hook.fn(el, fn) : fn
	            }
	            var callback = W3C ? fn : function(e) {
	                fn.call(el, fixEvent(e));
	            }
	            if (W3C) {
	                el.addEventListener(type, callback, phase)
	            } else {
	                el.attachEvent("on" + type, callback)
	            }
	            return callback
	        },
	        /*卸载事件*/
	        unbind: function(el, type, fn, phase) {
	            var hooks = avalon.eventHooks
	            var hook = hooks[type]
	            var callback = fn || noop
	            if (typeof hook === "object") {
	                type = hook.type || type
	                phase = hook.phase || !!phase
	            }
	            if (W3C) {
	                el.removeEventListener(type, callback, phase)
	            } else {
	                el.detachEvent("on" + type, callback)
	            }
	        },
	        /*读写删除元素节点的样式*/
	        css: function(node, name, value) {
	            if (node instanceof avalon) {
	                node = node[0]
	            }
	            var prop = /[_-]/.test(name) ? camelize(name) : name,
	                fn
	            name = avalon.cssName(prop) || prop
	            if (value === void 0 || typeof value === "boolean") { //获取样式
	                fn = cssHooks[prop + ":get"] || cssHooks["@:get"]
	                if (name === "background") {
	                    name = "backgroundColor"
	                }
	                var val = fn(node, name)
	                return value === true ? parseFloat(val) || 0 : val
	            } else if (value === "") { //请除样式
	                node.style[name] = ""
	            } else { //设置样式
	                if (value == null || value !== value) {
	                    return
	                }
	                if (isFinite(value) && !avalon.cssNumber[prop]) {
	                    value += "px"
	                }
	                fn = cssHooks[prop + ":set"] || cssHooks["@:set"]
	                fn(node, name, value)
	            }
	        },
	        /*遍历数组与对象,回调的第一个参数为索引或键名,第二个或元素或键值*/
	        each: function(obj, fn) {
	            if (obj) { //排除null, undefined
	                var i = 0
	                if (isArrayLike(obj)) {
	                    for (var n = obj.length; i < n; i++) {
	                        if (fn(i, obj[i]) === false)
	                            break
	                    }
	                } else {
	                    for (i in obj) {
	                        if (obj.hasOwnProperty(i) && fn(i, obj[i]) === false) {
	                            break
	                        }
	                    }
	                }
	            }
	        },
	        //收集元素的data-{{prefix}}-*属性，并转换为对象
	        getWidgetData: function(elem, prefix) {
	            var raw = avalon(elem).data()
	            var result = {}
	            for (var i in raw) {
	                if (i.indexOf(prefix) === 0) {
	                    result[i.replace(prefix, "").replace(/\w/, function(a) {
	                        return a.toLowerCase()
	                    })] = raw[i]
	                }
	            }
	            return result
	        },
	        Array: {
	            /*只有当前数组不存在此元素时只添加它*/
	            ensure: function(target, item) {
	                if (target.indexOf(item) === -1) {
	                    return target.push(item)
	                }
	            },
	            /*移除数组中指定位置的元素，返回布尔表示成功与否*/
	            removeAt: function(target, index) {
	                return !!target.splice(index, 1).length
	            },
	            /*移除数组中第一个匹配传参的那个元素，返回布尔表示成功与否*/
	            remove: function(target, item) {
	                var index = target.indexOf(item)
	                if (~index)
	                    return avalon.Array.removeAt(target, index)
	                return false
	            }
	        }
	    })
	
	    var bindingHandlers = avalon.bindingHandlers = {}
	    var bindingExecutors = avalon.bindingExecutors = {}
	
	    /*判定是否类数组，如节点集合，纯数组，arguments与拥有非负整数的length属性的纯JS对象*/
	    function isArrayLike(obj) {
	        if (!obj)
	            return false
	        var n = obj.length
	        if (n === (n >>> 0)) { //检测length属性是否为非负整数
	            var type = serialize.call(obj).slice(8, -1)
	            if (/(?:regexp|string|function|window|global)$/i.test(type))
	                return false
	            if (type === "Array")
	                return true
	            try {
	                if ({}.propertyIsEnumerable.call(obj, "length") === false) { //如果是原生对象
	                    return /^\s?function/.test(obj.item || obj.callee)
	                }
	                return true
	            } catch (e) { //IE的NodeList直接抛错
	                return !obj.window //IE6-8 window
	            }
	        }
	        return false
	    }
	
	
	    // https://github.com/rsms/js-lru
	    var Cache = new function() { // jshint ignore:line
	            function LRU(maxLength) {
	                this.size = 0
	                this.limit = maxLength
	                this.head = this.tail = void 0
	                this._keymap = {}
	            }
	
	            var p = LRU.prototype
	
	            p.put = function(key, value) {
	                var entry = {
	                    key: key,
	                    value: value
	                }
	                this._keymap[key] = entry
	                if (this.tail) {
	                    this.tail.newer = entry
	                    entry.older = this.tail
	                } else {
	                    this.head = entry
	                }
	                this.tail = entry
	                if (this.size === this.limit) {
	                    this.shift()
	                } else {
	                    this.size++
	                }
	                return value
	            }
	
	            p.shift = function() {
	                var entry = this.head
	                if (entry) {
	                    this.head = this.head.newer
	                    this.head.older =
	                        entry.newer =
	                        entry.older =
	                        this._keymap[entry.key] = void 0
	                    delete this._keymap[entry.key] //#1029
	                }
	            }
	            p.get = function(key) {
	                var entry = this._keymap[key]
	                if (entry === void 0)
	                    return
	                if (entry === this.tail) {
	                    return entry.value
	                }
	                // HEAD--------------TAIL
	                //   <.older   .newer>
	                //  <--- add direction --
	                //   A  B  C  <D>  E
	                if (entry.newer) {
	                    if (entry === this.head) {
	                        this.head = entry.newer
	                    }
	                    entry.newer.older = entry.older // C <-- E.
	                }
	                if (entry.older) {
	                    entry.older.newer = entry.newer // C. --> E
	                }
	                entry.newer = void 0 // D --x
	                entry.older = this.tail // D. --> E
	                if (this.tail) {
	                    this.tail.newer = entry // E. <-- D
	                }
	                this.tail = entry
	                return entry.value
	            }
	            return LRU
	        } // jshint ignore:line
	
	    /*********************************************************************
	     *                         javascript 底层补丁                       *
	     **********************************************************************/
	    if (!"司徒正美".trim) {
	        var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
	        String.prototype.trim = function() {
	            return this.replace(rtrim, "")
	        }
	    }
	    var hasDontEnumBug = !({
	            'toString': null
	        }).propertyIsEnumerable('toString'),
	        hasProtoEnumBug = (function() {}).propertyIsEnumerable('prototype'),
	        dontEnums = [
	            "toString",
	            "toLocaleString",
	            "valueOf",
	            "hasOwnProperty",
	            "isPrototypeOf",
	            "propertyIsEnumerable",
	            "constructor"
	        ],
	        dontEnumsLength = dontEnums.length;
	    if (!Object.keys) {
	        Object.keys = function(object) { //ecma262v5 15.2.3.14
	            var theKeys = []
	            var skipProto = hasProtoEnumBug && typeof object === "function"
	            if (typeof object === "string" || (object && object.callee)) {
	                for (var i = 0; i < object.length; ++i) {
	                    theKeys.push(String(i))
	                }
	            } else {
	                for (var name in object) {
	                    if (!(skipProto && name === "prototype") && ohasOwn.call(object, name)) {
	                        theKeys.push(String(name))
	                    }
	                }
	            }
	
	            if (hasDontEnumBug) {
	                var ctor = object.constructor,
	                    skipConstructor = ctor && ctor.prototype === object
	                for (var j = 0; j < dontEnumsLength; j++) {
	                    var dontEnum = dontEnums[j]
	                    if (!(skipConstructor && dontEnum === "constructor") && ohasOwn.call(object, dontEnum)) {
	                        theKeys.push(dontEnum)
	                    }
	                }
	            }
	            return theKeys
	        }
	    }
	    if (!Array.isArray) {
	        Array.isArray = function(a) {
	            return serialize.call(a) === "[object Array]"
	        }
	    }
	
	    if (!noop.bind) {
	        Function.prototype.bind = function(scope) {
	            if (arguments.length < 2 && scope === void 0)
	                return this
	            var fn = this,
	                argv = arguments
	            return function() {
	                var args = [],
	                    i
	                for (i = 1; i < argv.length; i++)
	                    args.push(argv[i])
	                for (i = 0; i < arguments.length; i++)
	                    args.push(arguments[i])
	                return fn.apply(scope, args)
	            }
	        }
	    }
	
	    function iterator(vars, body, ret) {
	        var fun = 'for(var ' + vars + 'i=0,n = this.length; i < n; i++){' + body.replace('_', '((i in this) && fn.call(scope,this[i],i,this))') + '}' + ret
	            /* jshint ignore:start */
	        return Function("fn,scope", fun)
	            /* jshint ignore:end */
	    }
	    if (!rnative.test([].map)) {
	        avalon.mix(ap, {
	            //定位操作，返回数组中第一个等于给定参数的元素的索引值。
	            indexOf: function(item, index) {
	                var n = this.length,
	                    i = ~~index
	                if (i < 0)
	                    i += n
	                for (; i < n; i++)
	                    if (this[i] === item)
	                        return i
	                return -1
	            },
	            //定位操作，同上，不过是从后遍历。
	            lastIndexOf: function(item, index) {
	                var n = this.length,
	                    i = index == null ? n - 1 : index
	                if (i < 0)
	                    i = Math.max(0, n + i)
	                for (; i >= 0; i--)
	                    if (this[i] === item)
	                        return i
	                return -1
	            },
	            //迭代操作，将数组的元素挨个儿传入一个函数中执行。Prototype.js的对应名字为each。
	            forEach: iterator("", '_', ""),
	            //迭代类 在数组中的每个项上运行一个函数，如果此函数的值为真，则此元素作为新数组的元素收集起来，并返回新数组
	            filter: iterator('r=[],j=0,', 'if(_)r[j++]=this[i]', 'return r'),
	            //收集操作，将数组的元素挨个儿传入一个函数中执行，然后把它们的返回值组成一个新数组返回。Prototype.js的对应名字为collect。
	            map: iterator('r=[],', 'r[i]=_', 'return r'),
	            //只要数组中有一个元素满足条件（放进给定函数返回true），那么它就返回true。Prototype.js的对应名字为any。
	            some: iterator("", 'if(_)return true', 'return false'),
	            //只有数组中的元素都满足条件（放进给定函数返回true），它才返回true。Prototype.js的对应名字为all。
	            every: iterator("", 'if(!_)return false', 'return true')
	        })
	    }
	    /*********************************************************************
	     *                           DOM 底层补丁                             *
	     **********************************************************************/
	
	    function fixContains(root, el) {
	        try { //IE6-8,游离于DOM树外的文本节点，访问parentNode有时会抛错
	            while ((el = el.parentNode))
	                if (el === root)
	                    return true
	            return false
	        } catch (e) {
	            return false
	        }
	    }
	    avalon.contains = fixContains
	        //IE6-11的文档对象没有contains
	    if (!DOC.contains) {
	        DOC.contains = function(b) {
	            return fixContains(DOC, b)
	        }
	    }
	
	    function outerHTML() {
	        return new XMLSerializer().serializeToString(this)
	    }
	
	    if (window.SVGElement) {
	        //safari5+是把contains方法放在Element.prototype上而不是Node.prototype
	        if (!DOC.createTextNode("x").contains) {
	            Node.prototype.contains = function(arg) { //IE6-8没有Node对象
	                return !!(this.compareDocumentPosition(arg) & 16)
	            }
	        }
	        var svgns = "http://www.w3.org/2000/svg"
	        var svg = DOC.createElementNS(svgns, "svg")
	        svg.innerHTML = '<circle cx="50" cy="50" r="40" fill="red" />'
	        if (!rsvg.test(svg.firstChild)) { // #409
	            function enumerateNode(node, targetNode) { // jshint ignore:line
	                if (node && node.childNodes) {
	                    var nodes = node.childNodes
	                    for (var i = 0, el; el = nodes[i++];) {
	                        if (el.tagName) {
	                            var svg = DOC.createElementNS(svgns,
	                                el.tagName.toLowerCase())
	                            ap.forEach.call(el.attributes, function(attr) {
	                                    svg.setAttribute(attr.name, attr.value) //复制属性
	                                }) // jshint ignore:line
	                                // 递归处理子节点
	                            enumerateNode(el, svg)
	                            targetNode.appendChild(svg)
	                        }
	                    }
	                }
	            }
	            Object.defineProperties(SVGElement.prototype, {
	                "outerHTML": { //IE9-11,firefox不支持SVG元素的innerHTML,outerHTML属性
	                    enumerable: true,
	                    configurable: true,
	                    get: outerHTML,
	                    set: function(html) {
	                        var tagName = this.tagName.toLowerCase(),
	                            par = this.parentNode,
	                            frag = avalon.parseHTML(html)
	                            // 操作的svg，直接插入
	                        if (tagName === "svg") {
	                            par.insertBefore(frag, this)
	                                // svg节点的子节点类似
	                        } else {
	                            var newFrag = DOC.createDocumentFragment()
	                            enumerateNode(frag, newFrag)
	                            par.insertBefore(newFrag, this)
	                        }
	                        par.removeChild(this)
	                    }
	                },
	                "innerHTML": {
	                    enumerable: true,
	                    configurable: true,
	                    get: function() {
	                        var s = this.outerHTML
	                        var ropen = new RegExp("<" + this.nodeName + '\\b(?:(["\'])[^"]*?(\\1)|[^>])*>', "i")
	                        var rclose = new RegExp("<\/" + this.nodeName + ">$", "i")
	                        return s.replace(ropen, "").replace(rclose, "")
	                    },
	                    set: function(html) {
	                        if (avalon.clearHTML) {
	                            avalon.clearHTML(this)
	                            var frag = avalon.parseHTML(html)
	                            enumerateNode(frag, this)
	                        }
	                    }
	                }
	            })
	        }
	    }
	    if (!root.outerHTML && window.HTMLElement) { //firefox 到11时才有outerHTML
	        HTMLElement.prototype.__defineGetter__("outerHTML", outerHTML);
	    }
	
	
	    //============================= event binding =======================
	    var rmouseEvent = /^(?:mouse|contextmenu|drag)|click/
	
	    function fixEvent(event) {
	        var ret = {}
	        for (var i in event) {
	            ret[i] = event[i]
	        }
	        var target = ret.target = event.srcElement
	        if (event.type.indexOf("key") === 0) {
	            ret.which = event.charCode != null ? event.charCode : event.keyCode
	        } else if (rmouseEvent.test(event.type)) {
	            var doc = target.ownerDocument || DOC
	            var box = doc.compatMode === "BackCompat" ? doc.body : doc.documentElement
	            ret.pageX = event.clientX + (box.scrollLeft >> 0) - (box.clientLeft >> 0)
	            ret.pageY = event.clientY + (box.scrollTop >> 0) - (box.clientTop >> 0)
	            ret.wheelDeltaY = ret.wheelDelta
	            ret.wheelDeltaX = 0
	        }
	        ret.timeStamp = new Date() - 0
	        ret.originalEvent = event
	        ret.preventDefault = function() { //阻止默认行为
	            event.returnValue = false
	        }
	        ret.stopPropagation = function() { //阻止事件在DOM树中的传播
	            event.cancelBubble = true
	        }
	        return ret
	    }
	
	    var eventHooks = avalon.eventHooks
	        //针对firefox, chrome修正mouseenter, mouseleave
	    if (!("onmouseenter" in root)) {
	        avalon.each({
	            mouseenter: "mouseover",
	            mouseleave: "mouseout"
	        }, function(origType, fixType) {
	            eventHooks[origType] = {
	                type: fixType,
	                fn: function(elem, fn) {
	                    return function(e) {
	                        var t = e.relatedTarget
	                        if (!t || (t !== elem && !(elem.compareDocumentPosition(t) & 16))) {
	                            delete e.type
	                            e.type = origType
	                            return fn.call(elem, e)
	                        }
	                    }
	                }
	            }
	        })
	    }
	    //针对IE9+, w3c修正animationend
	    avalon.each({
	            AnimationEvent: "animationend",
	            WebKitAnimationEvent: "webkitAnimationEnd"
	        }, function(construct, fixType) {
	            if (window[construct] && !eventHooks.animationend) {
	                eventHooks.animationend = {
	                    type: fixType
	                }
	            }
	        })
	        //针对IE6-8修正input
	    if (!("oninput" in DOC.createElement("input"))) {
	        eventHooks.input = {
	            type: "propertychange",
	            fn: function(elem, fn) {
	                return function(e) {
	                    if (e.propertyName === "value") {
	                        e.type = "input"
	                        return fn.call(elem, e)
	                    }
	                }
	            }
	        }
	    }
	    if (DOC.onmousewheel === void 0) {
	        /* IE6-11 chrome mousewheel wheelDetla 下 -120 上 120
	         firefox DOMMouseScroll detail 下3 上-3
	         firefox wheel detlaY 下3 上-3
	         IE9-11 wheel deltaY 下40 上-40
	         chrome wheel deltaY 下100 上-100 */
	        var fixWheelType = DOC.onwheel !== void 0 ? "wheel" : "DOMMouseScroll"
	        var fixWheelDelta = fixWheelType === "wheel" ? "deltaY" : "detail"
	        eventHooks.mousewheel = {
	            type: fixWheelType,
	            fn: function(elem, fn) {
	                return function(e) {
	                    e.wheelDeltaY = e.wheelDelta = e[fixWheelDelta] > 0 ? -120 : 120
	                    e.wheelDeltaX = 0
	                    if (Object.defineProperty) {
	                        Object.defineProperty(e, "type", {
	                            value: "mousewheel"
	                        })
	                    }
	                    fn.call(elem, e)
	                }
	            }
	        }
	    }
	
	
	
	    /*********************************************************************
	     *                           配置系统                                 *
	     **********************************************************************/
	
	    function kernel(settings) {
	        for (var p in settings) {
	            if (!ohasOwn.call(settings, p))
	                continue
	            var val = settings[p]
	            if (typeof kernel.plugins[p] === "function") {
	                kernel.plugins[p](val)
	            } else if (typeof kernel[p] === "object") {
	                avalon.mix(kernel[p], val)
	            } else {
	                kernel[p] = val
	            }
	        }
	        return this
	    }
	    var openTag, closeTag, rexpr, rexprg, rbind, rregexp = /[-.*+?^${}()|[\]\/\\]/g
	
	    function escapeRegExp(target) {
	        //http://stevenlevithan.com/regex/xregexp/
	        //将字符串安全格式化为正则表达式的源码
	        return (target + "").replace(rregexp, "\\$&")
	    }
	
	    var plugins = {
	
	        interpolate: function(array) {
	            openTag = array[0]
	            closeTag = array[1]
	            if (openTag === closeTag) {
	                throw new SyntaxError("openTag===closeTag")
	            } else {
	                var test = openTag + "test" + closeTag
	                cinerator.innerHTML = test
	                if (cinerator.innerHTML !== test && cinerator.innerHTML.indexOf("&lt;") > -1) {
	                    throw new SyntaxError("此定界符不合法")
	                }
	                kernel.openTag = openTag
	                kernel.closeTag = closeTag
	                cinerator.innerHTML = ""
	            }
	            var o = escapeRegExp(openTag),
	                c = escapeRegExp(closeTag)
	            rexpr = new RegExp(o + "(.*?)" + c)
	            rexprg = new RegExp(o + "(.*?)" + c, "g")
	            rbind = new RegExp(o + ".*?" + c + "|\\sms-")
	        }
	    }
	
	    kernel.debug = false
	    kernel.plugins = plugins
	    kernel.plugins['interpolate'](["{{", "}}"])
	    kernel.paths = {}
	    kernel.shim = {}
	    kernel.maxRepeatSize = 100
	    avalon.config = kernel
	    var ravalon = /(\w+)\[(avalonctrl)="(\S+)"\]/
	    var findNodes = DOC.querySelectorAll ? function(str) {
	            return DOC.querySelectorAll(str)
	        } : function(str) {
	            var match = str.match(ravalon)
	            var all = DOC.getElementsByTagName(match[1])
	            var nodes = []
	            for (var i = 0, el; el = all[i++];) {
	                if (el.getAttribute(match[2]) === match[3]) {
	                    nodes.push(el)
	                }
	            }
	            return nodes
	        }
	        /*********************************************************************
	         *                            事件总线                               *
	         **********************************************************************/
	    var EventBus = {
	            $watch: function(type, callback) {
	                if (typeof callback === "function") {
	                    var callbacks = this.$events[type]
	                    if (callbacks) {
	                        callbacks.push(callback)
	                    } else {
	                        this.$events[type] = [callback]
	                    }
	                } else { //重新开始监听此VM的第一重简单属性的变动
	                    this.$events = this.$watch.backup
	                }
	                return this
	            },
	            $unwatch: function(type, callback) {
	                var n = arguments.length
	                if (n === 0) { //让此VM的所有$watch回调无效化
	                    this.$watch.backup = this.$events
	                    this.$events = {}
	                } else if (n === 1) {
	                    this.$events[type] = []
	                } else {
	                    var callbacks = this.$events[type] || []
	                    var i = callbacks.length
	                    while (~--i < 0) {
	                        if (callbacks[i] === callback) {
	                            return callbacks.splice(i, 1)
	                        }
	                    }
	                }
	                return this
	            },
	            $fire: function(type) {
	                var special, i, v, callback
	                if (/^(\w+)!(\S+)$/.test(type)) {
	                    special = RegExp.$1
	                    type = RegExp.$2
	                }
	                var events = this.$events
	                if (!events)
	                    return
	                var args = aslice.call(arguments, 1)
	                var detail = [type].concat(args)
	                if (special === "all") {
	                    for (i in avalon.vmodels) {
	                        v = avalon.vmodels[i]
	                        if (v !== this) {
	                            v.$fire.apply(v, detail)
	                        }
	                    }
	                } else if (special === "up" || special === "down") {
	                    var elements = events.expr ? findNodes(events.expr) : []
	                    if (elements.length === 0)
	                        return
	                    for (i in avalon.vmodels) {
	                        v = avalon.vmodels[i]
	                        if (v !== this) {
	                            if (v.$events.expr) {
	                                var eventNodes = findNodes(v.$events.expr)
	                                if (eventNodes.length === 0) {
	                                    continue
	                                }
	                                //循环两个vmodel中的节点，查找匹配（向上匹配或者向下匹配）的节点并设置标识
	                                /* jshint ignore:start */
	                                ap.forEach.call(eventNodes, function(node) {
	                                        ap.forEach.call(elements, function(element) {
	                                            var ok = special === "down" ? element.contains(node) : //向下捕获
	                                                node.contains(element) //向上冒泡
	                                            if (ok) {
	                                                node._avalon = v //符合条件的加一个标识
	                                            }
	                                        });
	                                    })
	                                    /* jshint ignore:end */
	                            }
	                        }
	                    }
	                    var nodes = DOC.getElementsByTagName("*") //实现节点排序
	                    var alls = []
	                    ap.forEach.call(nodes, function(el) {
	                        if (el._avalon) {
	                            alls.push(el._avalon)
	                            el._avalon = ""
	                            el.removeAttribute("_avalon")
	                        }
	                    })
	                    if (special === "up") {
	                        alls.reverse()
	                    }
	                    for (i = 0; callback = alls[i++];) {
	                        if (callback.$fire.apply(callback, detail) === false) {
	                            break
	                        }
	                    }
	                } else {
	                    var callbacks = events[type] || []
	                    var all = events.$all || []
	                    for (i = 0; callback = callbacks[i++];) {
	                        if (isFunction(callback))
	                            callback.apply(this, args)
	                    }
	                    for (i = 0; callback = all[i++];) {
	                        if (isFunction(callback))
	                            callback.apply(this, arguments)
	                    }
	                }
	            }
	        }
	        /*********************************************************************
	         *                           modelFactory                             *
	         **********************************************************************/
	        //avalon最核心的方法的两个方法之一（另一个是avalon.scan），返回一个ViewModel(VM)
	    var VMODELS = avalon.vmodels = {} //所有vmodel都储存在这里
	    avalon.define = function(id, factory) {
	        var $id = id.$id || id
	        if (!$id) {
	            log("warning: vm必须指定$id")
	        }
	        if (VMODELS[$id]) {
	            log("warning: " + $id + " 已经存在于avalon.vmodels中")
	        }
	        if (typeof id === "object") {
	            var model = modelFactory(id)
	        } else {
	            var scope = {
	                $watch: noop
	            }
	            factory(scope) //得到所有定义
	
	            model = modelFactory(scope) //偷天换日，将scope换为model
	            stopRepeatAssign = true
	            factory(model)
	            stopRepeatAssign = false
	        }
	        model.$id = $id
	        return VMODELS[$id] = model
	    }
	
	    //一些不需要被监听的属性
	    var $$skipArray = String("$id,$watch,$unwatch,$fire,$events,$model,$skipArray,$reinitialize").match(rword)
	    var defineProperty = Object.defineProperty
	    var canHideOwn = true
	        //如果浏览器不支持ecma262v5的Object.defineProperties或者存在BUG，比如IE8
	        //标准浏览器使用__defineGetter__, __defineSetter__实现
	    try {
	        defineProperty({}, "_", {
	            value: "x"
	        })
	        var defineProperties = Object.defineProperties
	    } catch (e) {
	        canHideOwn = false
	    }
	
	    function modelFactory(source, $special, $model) {
	        if (Array.isArray(source)) {
	            var arr = source.concat()
	            source.length = 0
	            var collection = arrayFactory(source)
	            collection.pushArray(arr)
	            return collection
	        }
	        //0 null undefined || Node || VModel(fix IE6-8 createWithProxy $val: val引发的BUG)
	        if (!source || (source.$id && source.$events) || (source.nodeType > 0 && source.nodeName)) {
	            return source
	        }
	        var $skipArray = Array.isArray(source.$skipArray) ? source.$skipArray : []
	        $skipArray.$special = $special || {} //强制要监听的属性
	        var $vmodel = {} //要返回的对象, 它在IE6-8下可能被偷龙转凤
	        $model = $model || {} //vmodels.$model属性
	        var $events = {} //vmodel.$events属性
	        var accessors = {} //监控属性
	        var computed = []
	        $$skipArray.forEach(function(name) {
	            delete source[name]
	        })
	        var names = Object.keys(source)
	            /* jshint ignore:start */
	        names.forEach(function(name, accessor) {
	                var val = source[name]
	                $model[name] = val
	                if (isObservable(name, val, $skipArray)) {
	                    //总共产生三种accessor
	                    $events[name] = []
	                    var valueType = avalon.type(val)
	                        //总共产生三种accessor
	                    if (valueType === "object" && isFunction(val.get) && Object.keys(val).length <= 2) {
	                        accessor = makeComputedAccessor(name, val)
	                        computed.push(accessor)
	                    } else if (rcomplexType.test(valueType)) {
	                        // issue #940 解决$model层次依赖丢失 https://github.com/RubyLouvre/avalon/issues/940
	                        //  $model[name] = {}
	                        accessor = makeComplexAccessor(name, val, valueType, $events[name], $model)
	                    } else {
	                        accessor = makeSimpleAccessor(name, val)
	                    }
	                    accessors[name] = accessor
	                }
	            })
	            /* jshint ignore:end */
	        $vmodel = defineProperties($vmodel, descriptorFactory(accessors), source) //生成一个空的ViewModel
	        for (var i = 0; i < names.length; i++) {
	            var name = names[i]
	            if (!accessors[name]) {
	                $vmodel[name] = source[name]
	            }
	        }
	        //添加$id, $model, $events, $watch, $unwatch, $fire
	        hideProperty($vmodel, "$id", generateID())
	        hideProperty($vmodel, "$model", $model)
	        hideProperty($vmodel, "$events", $events)
	            /* jshint ignore:start */
	        if (canHideOwn) {
	            hideProperty($vmodel, "hasOwnProperty", function(name) {
	                return name in $vmodel.$model
	            })
	        } else {
	            $vmodel.hasOwnProperty = function(name) {
	                return (name in $vmodel.$model) && (name !== "hasOwnProperty")
	            }
	        }
	        /* jshint ignore:end */
	        for (i in EventBus) {
	            hideProperty($vmodel, i, EventBus[i].bind($vmodel))
	        }
	
	        $vmodel.$reinitialize = function() {
	            computed.forEach(function(accessor) {
	                delete accessor._value
	                delete accessor.oldArgs
	                accessor.digest = function() {
	                    accessor.call($vmodel)
	                }
	                dependencyDetection.begin({
	                    callback: function(vm, dependency) { //dependency为一个accessor
	                        var name = dependency._name
	                        if (dependency !== accessor) {
	                            var list = vm.$events[name]
	                            injectDependency(list, accessor.digest)
	                        }
	                    }
	                })
	                try {
	                    accessor.get.call($vmodel)
	                } finally {
	                    dependencyDetection.end()
	                }
	            })
	        }
	        $vmodel.$reinitialize()
	        return $vmodel
	    }
	
	
	    function hideProperty(host, name, value) {
	        if (canHideOwn) {
	            Object.defineProperty(host, name, {
	                value: value,
	                writable: true,
	                enumerable: false,
	                configurable: true
	            })
	        } else {
	            host[name] = value
	        }
	    }
	    //创建一个简单访问器
	    function makeSimpleAccessor(name, value) {
	        function accessor(value) {
	            var oldValue = accessor._value
	            if (arguments.length > 0) {
	                if (!stopRepeatAssign && !isEqual(value, oldValue)) {
	                    accessor.updateValue(this, value)
	                    accessor.notify(this, value, oldValue)
	                }
	                return this
	            } else {
	                dependencyDetection.collectDependency(this, accessor)
	                return oldValue
	            }
	        }
	        accessorFactory(accessor, name)
	        accessor._value = value
	        return accessor;
	    }
	
	    //创建一个计算访问器
	    function makeComputedAccessor(name, options) {
	        function accessor(value) { //计算属性
	            var oldValue = accessor._value
	            var init = ("_value" in accessor)
	            if (arguments.length > 0) {
	                if (stopRepeatAssign) {
	                    return this
	                }
	                if (typeof accessor.set === "function") {
	                    if (accessor.oldArgs !== value) {
	                        accessor.oldArgs = value
	                        var $events = this.$events
	                        var lock = $events[name]
	                        $events[name] = [] //清空回调，防止内部冒泡而触发多次$fire
	                        accessor.set.call(this, value)
	                        $events[name] = lock
	                        value = accessor.get.call(this)
	                        if (value !== oldValue) {
	                            accessor.updateValue(this, value)
	                            accessor.notify(this, value, oldValue) //触发$watch回调
	                        }
	                    }
	                }
	                return this
	            } else {
	                //将依赖于自己的高层访问器或视图刷新函数（以绑定对象形式）放到自己的订阅数组中
	                //将自己注入到低层访问器的订阅数组中
	                value = accessor.get.call(this)
	                accessor.updateValue(this, value)
	                if (init && oldValue !== value) {
	                    accessor.notify(this, value, oldValue) //触发$watch回调
	                }
	                return value
	            }
	        }
	        accessor.set = options.set
	        accessor.get = options.get
	        accessorFactory(accessor, name)
	        return accessor
	    }
	
	    //创建一个复杂访问器
	    function makeComplexAccessor(name, initValue, valueType, list, parentModel) {
	
	        function accessor(value) {
	            var oldValue = accessor._value
	
	            var son = accessor._vmodel
	            if (arguments.length > 0) {
	                if (stopRepeatAssign) {
	                    return this
	                }
	                if (valueType === "array") {
	                    var a = son,
	                        b = value,
	                        an = a.length,
	                        bn = b.length
	                    a.$lock = true
	                    if (an > bn) {
	                        a.splice(bn, an - bn)
	                    } else if (bn > an) {
	                        a.push.apply(a, b.slice(an))
	                    }
	                    var n = Math.min(an, bn)
	                    for (var i = 0; i < n; i++) {
	                        a.set(i, b[i])
	                    }
	                    delete a.$lock
	                    a._fire("set")
	                } else if (valueType === "object") {
	                    value = value.$model ? value.$model : value
	                    var observes = this.$events[name] || []
	                    var newObject = avalon.mix(true, {}, value)
	                    for (i in son) {
	                        if (son.hasOwnProperty(i) && ohasOwn.call(newObject, i)) {
	                            son[i] = newObject[i]
	                        }
	                    }
	                    son = accessor._vmodel = modelFactory(value)
	                    son.$events[subscribers] = observes
	                    if (observes.length) {
	                        observes.forEach(function(data) {
	                            if (!data.type) {
	                                return //数据未准备好时忽略更新
	                            }
	                            if (data.rollback) {
	                                data.rollback() //还原 ms-with ms-on
	                            }
	                            bindingHandlers[data.type](data, data.vmodels)
	                        })
	                    }
	                }
	                accessor.updateValue(this, son.$model)
	                accessor.notify(this, this._value, oldValue)
	                return this
	            } else {
	                dependencyDetection.collectDependency(this, accessor)
	                return son
	            }
	        }
	        accessorFactory(accessor, name)
	        if (Array.isArray(initValue)) {
	            parentModel[name] = initValue
	        } else {
	            parentModel[name] = parentModel[name] || {}
	        }
	        var son = accessor._vmodel = modelFactory(initValue, 0, parentModel[name])
	        son.$events[subscribers] = list
	        return accessor
	    }
	
	    function globalUpdateValue(vmodel, value) {
	        vmodel.$model[this._name] = this._value = value
	    }
	
	    function globalNotify(vmodel, value, oldValue) {
	        var name = this._name
	        var array = vmodel.$events[name] //刷新值
	        if (array) {
	            fireDependencies(array) //同步视图
	            EventBus.$fire.call(vmodel, name, value, oldValue) //触发$watch回调
	        }
	    }
	
	    function accessorFactory(accessor, name) {
	        accessor._name = name
	            //同时更新_value与model
	        accessor.updateValue = globalUpdateValue
	        accessor.notify = globalNotify
	    }
	
	    //比较两个值是否相等
	    var isEqual = Object.is || function(v1, v2) {
	        if (v1 === 0 && v2 === 0) {
	            return 1 / v1 === 1 / v2
	        } else if (v1 !== v1) {
	            return v2 !== v2
	        } else {
	            return v1 === v2
	        }
	    }
	
	    function isObservable(name, value, $skipArray) {
	        if (isFunction(value) || value && value.nodeName && (value.nodeType > 0)) {
	            return false
	        }
	        if ($skipArray.indexOf(name) !== -1) {
	            return false
	        }
	        var $special = $skipArray.$special
	        if (name && name.charAt(0) === "$" && !$special[name]) {
	            return false
	        }
	        return true
	    }
	
	    function keysVM(obj) {
	        var arr = Object.keys(obj.$model ? obj.$model : obj)
	        for (var i = 0; i < $$skipArray.length; i++) {
	            var index = arr.indexOf($$skipArray[i])
	            if (index !== -1) {
	                arr.splice(index, 1)
	            }
	        }
	        return arr
	    }
	    var descriptorFactory = W3C ? function(obj) {
	        var descriptors = {}
	        for (var i in obj) {
	            descriptors[i] = {
	                get: obj[i],
	                set: obj[i],
	                enumerable: true,
	                configurable: true
	            }
	        }
	        return descriptors
	    } : function(a) {
	        return a
	    }
	
	    //===================修复浏览器对Object.defineProperties的支持=================
	    if (!canHideOwn) {
	        if ("__defineGetter__" in avalon) {
	            defineProperty = function(obj, prop, desc) {
	                if ('value' in desc) {
	                    obj[prop] = desc.value
	                }
	                if ("get" in desc) {
	                    obj.__defineGetter__(prop, desc.get)
	                }
	                if ('set' in desc) {
	                    obj.__defineSetter__(prop, desc.set)
	                }
	                return obj
	            }
	            defineProperties = function(obj, descs) {
	                for (var prop in descs) {
	                    if (descs.hasOwnProperty(prop)) {
	                        defineProperty(obj, prop, descs[prop])
	                    }
	                }
	                return obj
	            }
	        }
	        if (IEVersion) {
	            var VBClassPool = {}
	            window.execScript([ // jshint ignore:line
	                "Function parseVB(code)",
	                "\tExecuteGlobal(code)",
	                "End Function" //转换一段文本为VB代码
	            ].join("\n"), "VBScript")
	
	            function VBMediator(instance, accessors, name, value) { // jshint ignore:line
	                var accessor = accessors[name]
	                if (arguments.length === 4) {
	                    accessor.call(instance, value)
	                } else {
	                    return accessor.call(instance)
	                }
	            }
	            defineProperties = function(name, accessors, properties) {
	                // jshint ignore:line
	                var buffer = []
	                buffer.push(
	                        "\r\n\tPrivate [__data__], [__proxy__]",
	                        "\tPublic Default Function [__const__](d" + expose + ", p" + expose + ")",
	                        "\t\tSet [__data__] = d" + expose + ": set [__proxy__] = p" + expose,
	                        "\t\tSet [__const__] = Me", //链式调用
	                        "\tEnd Function")
	                    //添加普通属性,因为VBScript对象不能像JS那样随意增删属性，必须在这里预先定义好
	                for (name in properties) {
	                    if (!accessors.hasOwnProperty(name)) {
	                        buffer.push("\tPublic [" + name + "]")
	                    }
	                }
	                $$skipArray.forEach(function(name) {
	                    if (!accessors.hasOwnProperty(name)) {
	                        buffer.push("\tPublic [" + name + "]")
	                    }
	                })
	                buffer.push("\tPublic [" + 'hasOwnProperty' + "]")
	                    //添加访问器属性 
	                for (name in accessors) {
	                    buffer.push(
	                        //由于不知对方会传入什么,因此set, let都用上
	                        "\tPublic Property Let [" + name + "](val" + expose + ")", //setter
	                        "\t\tCall [__proxy__](Me,[__data__], \"" + name + "\", val" + expose + ")",
	                        "\tEnd Property",
	                        "\tPublic Property Set [" + name + "](val" + expose + ")", //setter
	                        "\t\tCall [__proxy__](Me,[__data__], \"" + name + "\", val" + expose + ")",
	                        "\tEnd Property",
	                        "\tPublic Property Get [" + name + "]", //getter
	                        "\tOn Error Resume Next", //必须优先使用set语句,否则它会误将数组当字符串返回
	                        "\t\tSet[" + name + "] = [__proxy__](Me,[__data__],\"" + name + "\")",
	                        "\tIf Err.Number <> 0 Then",
	                        "\t\t[" + name + "] = [__proxy__](Me,[__data__],\"" + name + "\")",
	                        "\tEnd If",
	                        "\tOn Error Goto 0",
	                        "\tEnd Property")
	
	                }
	
	                buffer.push("End Class")
	                var body = buffer.join("\r\n")
	                var className = VBClassPool[body]
	                if (!className) {
	                    className = generateID("VBClass")
	                    window.parseVB("Class " + className + body)
	                    window.parseVB([
	                        "Function " + className + "Factory(a, b)", //创建实例并传入两个关键的参数
	                        "\tDim o",
	                        "\tSet o = (New " + className + ")(a, b)",
	                        "\tSet " + className + "Factory = o",
	                        "End Function"
	                    ].join("\r\n"))
	                    VBClassPool[body] = className
	                }
	                var ret = window[className + "Factory"](accessors, VBMediator) //得到其产品
	                return ret //得到其产品
	            }
	        }
	    }
	
	    /*********************************************************************
	     *          监控数组（与ms-each, ms-repeat配合使用）                     *
	     **********************************************************************/
	
	    function arrayFactory(model) {
	        var array = []
	        array.$id = generateID()
	        array.$model = model //数据模型
	        array.$events = {}
	        array.$events[subscribers] = []
	        array._ = modelFactory({
	            length: model.length
	        })
	        array._.$watch("length", function(a, b) {
	            array.$fire("length", a, b)
	        })
	        for (var i in EventBus) {
	            array[i] = EventBus[i]
	        }
	        avalon.mix(array, arrayPrototype)
	        return array
	    }
	
	    function mutateArray(method, pos, n, index, method2, pos2, n2) {
	        var oldLen = this.length,
	            loop = 2
	        while (--loop) {
	            switch (method) {
	                case "add":
	                    /* jshint ignore:start */
	                    var array = this.$model.slice(pos, pos + n).map(function(el) {
	                            if (rcomplexType.test(avalon.type(el))) {
	                                return el.$id ? el : modelFactory(el, 0, el)
	                            } else {
	                                return el
	                            }
	                        })
	                        /* jshint ignore:end */
	                    _splice.apply(this, [pos, 0].concat(array))
	                    this._fire("add", pos, n)
	                    break
	                case "del":
	                    var ret = this._splice(pos, n)
	                    this._fire("del", pos, n)
	                    break
	            }
	            if (method2) {
	                method = method2
	                pos = pos2
	                n = n2
	                loop = 2
	                method2 = 0
	            }
	        }
	        this._fire("index", index)
	        if (this.length !== oldLen) {
	            this._.length = this.length
	        }
	        return ret
	    }
	
	    var _splice = ap.splice
	    var arrayPrototype = {
	            _splice: _splice,
	            _fire: function(method, a, b) {
	                fireDependencies(this.$events[subscribers], method, a, b)
	            },
	            size: function() { //取得数组长度，这个函数可以同步视图，length不能
	                return this._.length
	            },
	            pushArray: function(array) {
	                var m = array.length,
	                    n = this.length
	                if (m) {
	                    ap.push.apply(this.$model, array)
	                    mutateArray.call(this, "add", n, m, Math.max(0, n - 1))
	                }
	                return m + n
	            },
	            push: function() {
	                //http://jsperf.com/closure-with-arguments
	                var array = []
	                var i, n = arguments.length
	                for (i = 0; i < n; i++) {
	                    array[i] = arguments[i]
	                }
	                return this.pushArray(array)
	            },
	            unshift: function() {
	                var m = arguments.length,
	                    n = this.length
	                if (m) {
	                    ap.unshift.apply(this.$model, arguments)
	                    mutateArray.call(this, "add", 0, m, 0)
	                }
	                return m + n //IE67的unshift不会返回长度
	            },
	            shift: function() {
	                if (this.length) {
	                    var el = this.$model.shift()
	                    mutateArray.call(this, "del", 0, 1, 0)
	                    return el //返回被移除的元素
	                }
	            },
	            pop: function() {
	                var n = this.length
	                if (n) {
	                    var el = this.$model.pop()
	                    mutateArray.call(this, "del", n - 1, 1, Math.max(0, n - 2))
	                    return el //返回被移除的元素
	                }
	            },
	            splice: function(start) {
	                var m = arguments.length,
	                    args = [],
	                    change
	                var removed = _splice.apply(this.$model, arguments)
	                if (removed.length) { //如果用户删掉了元素
	                    args.push("del", start, removed.length, 0)
	                    change = true
	                }
	                if (m > 2) { //如果用户添加了元素
	                    if (change) {
	                        args.splice(3, 1, 0, "add", start, m - 2)
	                    } else {
	                        args.push("add", start, m - 2, 0)
	                    }
	                    change = true
	                }
	                if (change) { //返回被移除的元素
	                    return mutateArray.apply(this, args)
	                } else {
	                    return []
	                }
	            },
	            contains: function(el) { //判定是否包含
	                return this.indexOf(el) !== -1
	            },
	            remove: function(el) { //移除第一个等于给定值的元素
	                return this.removeAt(this.indexOf(el))
	            },
	            removeAt: function(index) { //移除指定索引上的元素
	                if (index >= 0) {
	                    this.$model.splice(index, 1)
	                    return mutateArray.call(this, "del", index, 1, 0)
	                }
	                return []
	            },
	            clear: function() {
	                this.$model.length = this.length = this._.length = 0 //清空数组
	                this._fire("clear", 0)
	                return this
	            },
	            removeAll: function(all) { //移除N个元素
	                if (Array.isArray(all)) {
	                    for (var i = this.length - 1; i >= 0; i--) {
	                        if (all.indexOf(this[i]) !== -1) {
	                            this.removeAt(i)
	                        }
	                    }
	                } else if (typeof all === "function") {
	                    for (i = this.length - 1; i >= 0; i--) {
	                        var el = this[i]
	                        if (all(el, i)) {
	                            this.removeAt(i)
	                        }
	                    }
	                } else {
	                    this.clear()
	                }
	            },
	            ensure: function(el) {
	                if (!this.contains(el)) { //只有不存在才push
	                    this.push(el)
	                }
	                return this
	            },
	            set: function(index, val) {
	                if (index < this.length && index > -1) {
	                    var valueType = avalon.type(val)
	                    if (val && val.$model) {
	                        val = val.$model
	                    }
	                    var target = this[index]
	                    if (valueType === "object") {
	                        for (var i in val) {
	                            if (target.hasOwnProperty(i)) {
	                                target[i] = val[i]
	                            }
	                        }
	                    } else if (valueType === "array") {
	                        target.clear().push.apply(target, val)
	                    } else if (target !== val) {
	                        this[index] = val
	                        this.$model[index] = val
	                        this._fire("set", index, val)
	                    }
	                }
	                return this
	            }
	        }
	        //相当于原来bindingExecutors.repeat 的index分支
	    function resetIndex(array, pos) {
	        var last = array.length - 1
	        for (var el; el = array[pos]; pos++) {
	            el.$index = pos
	            el.$first = pos === 0
	            el.$last = pos === last
	        }
	    }
	
	    function sortByIndex(array, indexes) {
	        var map = {};
	        for (var i = 0, n = indexes.length; i < n; i++) {
	            map[i] = array[i] // preserve
	            var j = indexes[i]
	            if (j in map) {
	                array[i] = map[j]
	                delete map[j]
	            } else {
	                array[i] = array[j]
	            }
	        }
	    }
	
	    "sort,reverse".replace(rword, function(method) {
	        arrayPrototype[method] = function() {
	            var newArray = this.$model //这是要排序的新数组
	            var oldArray = newArray.concat() //保持原来状态的旧数组
	            var mask = Math.random()
	            var indexes = []
	            var hasSort
	            ap[method].apply(newArray, arguments) //排序
	            for (var i = 0, n = oldArray.length; i < n; i++) {
	                var neo = newArray[i]
	                var old = oldArray[i]
	                if (isEqual(neo, old)) {
	                    indexes.push(i)
	                } else {
	                    var index = oldArray.indexOf(neo)
	                    indexes.push(index) //得到新数组的每个元素在旧数组对应的位置
	                    oldArray[index] = mask //屏蔽已经找过的元素
	                    hasSort = true
	                }
	            }
	            if (hasSort) {
	                sortByIndex(this, indexes)
	                    // sortByIndex(this.$proxy, indexes)
	                this._fire("move", indexes)
	                this._fire("index", 0)
	            }
	            return this
	        }
	    })
	
	
	    /*********************************************************************
	     *                           依赖调度系统                             *
	     **********************************************************************/
	    //检测两个对象间的依赖关系
	    var dependencyDetection = (function() {
	            var outerFrames = []
	            var currentFrame
	            return {
	                begin: function(accessorObject) {
	                    //accessorObject为一个拥有callback的对象
	                    outerFrames.push(currentFrame)
	                    currentFrame = accessorObject
	                },
	                end: function() {
	                    currentFrame = outerFrames.pop()
	                },
	                collectDependency: function(vmodel, accessor) {
	                    if (currentFrame) {
	                        //被dependencyDetection.begin调用
	                        currentFrame.callback(vmodel, accessor);
	                    }
	                }
	            };
	        })()
	        //将绑定对象注入到其依赖项的订阅数组中
	    var ronduplex = /^(duplex|on)$/
	    avalon.injectBinding = function(data) {
	        var valueFn = data.evaluator
	        if (valueFn) { //如果是求值函数
	            dependencyDetection.begin({
	                callback: function(vmodel, dependency) {
	                    injectDependency(vmodel.$events[dependency._name], data)
	                }
	            })
	            try {
	                var value = ronduplex.test(data.type) ? data : valueFn.apply(0, data.args)
	                if (value === void 0) {
	                    delete data.evaluator
	                }
	                if (data.handler) {
	                    data.handler(value, data.element, data)
	                }
	            } catch (e) {
	                log("warning:exception throwed in [avalon.injectBinding] ", e)
	                delete data.evaluator
	                var node = data.element
	                if (node && node.nodeType === 3) {
	                    var parent = node.parentNode
	                    if (kernel.commentInterpolate) {
	                        parent.replaceChild(DOC.createComment(data.value), node)
	                    } else {
	                        node.data = openTag + (data.oneTime ? "::" : "") + data.value + closeTag
	                    }
	                }
	            } finally {
	                dependencyDetection.end()
	            }
	        }
	    }
	
	    //将依赖项(比它高层的访问器或构建视图刷新函数的绑定对象)注入到订阅者数组 
	    function injectDependency(list, data) {
	        if (data.oneTime)
	            return
	        if (list && avalon.Array.ensure(list, data) && data.element) {
	            injectDisposeQueue(data, list)
	            if (new Date() - beginTime > 444) {
	                rejectDisposeQueue()
	            }
	        }
	    }
	
	    //通知依赖于这个访问器的订阅者更新自身
	    function fireDependencies(list) {
	        if (list && list.length) {
	            if (new Date() - beginTime > 444 && typeof list[0] === "object") {
	                rejectDisposeQueue()
	            }
	            var args = aslice.call(arguments, 1)
	            for (var i = list.length, fn; fn = list[--i];) {
	                var el = fn.element
	                if (el && el.parentNode) {
	                    try {
	                        var valueFn = fn.evaluator
	                        if (fn.$repeat) {
	                            fn.handler.apply(fn, args) //处理监控数组的方法
	                        } else if ("$repeat" in fn || !valueFn) { //如果没有eval,先eval
	                            bindingHandlers[fn.type](fn, fn.vmodels)
	                        } else if (fn.type !== "on") { //事件绑定只能由用户触发,不能由程序触发
	                            var value = valueFn.apply(0, fn.args || [])
	                            fn.handler(value, el, fn)
	                        }
	                    } catch (e) {
	                        console.log(e)
	                    }
	                }
	            }
	        }
	    }
	    /*********************************************************************
	     *                          定时GC回收机制                             *
	     **********************************************************************/
	    var disposeCount = 0
	    var disposeQueue = avalon.$$subscribers = []
	    var beginTime = new Date()
	    var oldInfo = {}
	        //var uuid2Node = {}
	    function getUid(elem, makeID) { //IE9+,标准浏览器
	        if (!elem.uuid && !makeID) {
	            elem.uuid = ++disposeCount
	        }
	        return elem.uuid
	    }
	
	    //添加到回收列队中
	    function injectDisposeQueue(data, list) {
	        var elem = data.element
	        if (!data.uuid) {
	            if (elem.nodeType !== 1) {
	                data.uuid = data.type + getUid(elem.parentNode) + "-" + (++disposeCount)
	            } else {
	                data.uuid = data.name + "-" + getUid(elem)
	            }
	        }
	        var lists = data.lists || (data.lists = [])
	        avalon.Array.ensure(lists, list)
	        list.$uuid = list.$uuid || generateID()
	        if (!disposeQueue[data.uuid]) {
	            disposeQueue[data.uuid] = 1
	            disposeQueue.push(data)
	        }
	    }
	
	    function rejectDisposeQueue(data) {
	        if (avalon.optimize)
	            return
	        var i = disposeQueue.length
	        var n = i
	        var allTypes = []
	        var iffishTypes = {}
	        var newInfo = {}
	            //对页面上所有绑定对象进行分门别类, 只检测个数发生变化的类型
	        while (data = disposeQueue[--i]) {
	            var type = data.type
	            if (newInfo[type]) {
	                newInfo[type]++
	            } else {
	                newInfo[type] = 1
	                allTypes.push(type)
	            }
	        }
	        var diff = false
	        allTypes.forEach(function(type) {
	            if (oldInfo[type] !== newInfo[type]) {
	                iffishTypes[type] = 1
	                diff = true
	            }
	        })
	        i = n
	        if (diff) {
	            while (data = disposeQueue[--i]) {
	                if (data.element === null) {
	                    disposeQueue.splice(i, 1)
	                    continue
	                }
	                if (iffishTypes[data.type] && shouldDispose(data.element)) { //如果它没有在DOM树
	                    disposeQueue.splice(i, 1)
	                    delete disposeQueue[data.uuid]
	                        //delete uuid2Node[data.element.uuid]
	                    var lists = data.lists
	                    for (var k = 0, list; list = lists[k++];) {
	                        avalon.Array.remove(lists, list)
	                        avalon.Array.remove(list, data)
	                    }
	                    disposeData(data)
	                }
	            }
	        }
	        oldInfo = newInfo
	        beginTime = new Date()
	    }
	
	    function disposeData(data) {
	        delete disposeQueue[data.uuid] // 先清除，不然无法回收了
	        data.element = null
	        data.rollback && data.rollback()
	        for (var key in data) {
	            data[key] = null
	        }
	    }
	
	    function shouldDispose(el) {
	        try { //IE下，如果文本节点脱离DOM树，访问parentNode会报错
	            var fireError = el.parentNode.nodeType
	        } catch (e) {
	            return true
	        }
	        if (el.ifRemove) {
	            // 如果节点被放到ifGroup，才移除
	            if (!root.contains(el.ifRemove) && (ifGroup === el.parentNode)) {
	                el.parentNode && el.parentNode.removeChild(el)
	                return true
	            }
	        }
	        return el.msRetain ? 0 : (el.nodeType === 1 ? !root.contains(el) : !avalon.contains(root, el))
	    }
	
	    /************************************************************************
	     *            HTML处理(parseHTML, innerHTML, clearHTML)                  *
	     ************************************************************************/
	    // We have to close these tags to support XHTML 
	    var tagHooks = {
	        area: [1, "<map>", "</map>"],
	        param: [1, "<object>", "</object>"],
	        col: [2, "<table><colgroup>", "</colgroup></table>"],
	        legend: [1, "<fieldset>", "</fieldset>"],
	        option: [1, "<select multiple='multiple'>", "</select>"],
	        thead: [1, "<table>", "</table>"],
	        tr: [2, "<table>", "</table>"],
	        td: [3, "<table><tr>", "</tr></table>"],
	        g: [1, '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">', '</svg>'],
	        //IE6-8在用innerHTML生成节点时，不能直接创建no-scope元素与HTML5的新标签
	        _default: W3C ? [0, "", ""] : [1, "X<div>", "</div>"] //div可以不用闭合
	    }
	    tagHooks.th = tagHooks.td
	    tagHooks.optgroup = tagHooks.option
	    tagHooks.tbody = tagHooks.tfoot = tagHooks.colgroup = tagHooks.caption = tagHooks.thead
	    String("circle,defs,ellipse,image,line,path,polygon,polyline,rect,symbol,text,use").replace(rword, function(tag) {
	        tagHooks[tag] = tagHooks.g //处理SVG
	    })
	    var rtagName = /<([\w:]+)/ //取得其tagName
	    var rxhtml = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig
	    var rcreate = W3C ? /[^\d\D]/ : /(<(?:script|link|style|meta|noscript))/ig
	    var scriptTypes = oneObject(["", "text/javascript", "text/ecmascript", "application/ecmascript", "application/javascript"])
	    var rnest = /<(?:tb|td|tf|th|tr|col|opt|leg|cap|area)/ //需要处理套嵌关系的标签
	    var script = DOC.createElement("script")
	    var rhtml = /<|&#?\w+;/
	    avalon.parseHTML = function(html) {
	        var fragment = avalonFragment.cloneNode(false)
	        if (typeof html !== "string") {
	            return fragment
	        }
	        if (!rhtml.test(html)) {
	            fragment.appendChild(DOC.createTextNode(html))
	            return fragment
	        }
	        html = html.replace(rxhtml, "<$1></$2>").trim()
	        var tag = (rtagName.exec(html) || ["", ""])[1].toLowerCase(),
	            //取得其标签名
	            wrap = tagHooks[tag] || tagHooks._default,
	            wrapper = cinerator,
	            firstChild, neo
	        if (!W3C) { //fix IE
	            html = html.replace(rcreate, "<br class=msNoScope>$1") //在link style script等标签之前添加一个补丁
	        }
	        wrapper.innerHTML = wrap[1] + html + wrap[2]
	        var els = wrapper.getElementsByTagName("script")
	        if (els.length) { //使用innerHTML生成的script节点不会发出请求与执行text属性
	            for (var i = 0, el; el = els[i++];) {
	                if (scriptTypes[el.type]) {
	                    //以偷龙转凤方式恢复执行脚本功能
	                    neo = script.cloneNode(false) //FF不能省略参数
	                    ap.forEach.call(el.attributes, function(attr) {
	                            if (attr && attr.specified) {
	                                neo[attr.name] = attr.value //复制其属性
	                                neo.setAttribute(attr.name, attr.value)
	                            }
	                        }) // jshint ignore:line
	                    neo.text = el.text
	                    el.parentNode.replaceChild(neo, el) //替换节点
	                }
	            }
	        }
	        if (!W3C) { //fix IE
	            var target = wrap[1] === "X<div>" ? wrapper.lastChild.firstChild : wrapper.lastChild
	            if (target && target.tagName === "TABLE" && tag !== "tbody") {
	                //IE6-7处理 <thead> --> <thead>,<tbody>
	                //<tfoot> --> <tfoot>,<tbody>
	                //<table> --> <table><tbody></table>
	                for (els = target.childNodes, i = 0; el = els[i++];) {
	                    if (el.tagName === "TBODY" && !el.innerHTML) {
	                        target.removeChild(el)
	                        break
	                    }
	                }
	            }
	            els = wrapper.getElementsByTagName("br")
	            var n = els.length
	            while (el = els[--n]) {
	                if (el.className === "msNoScope") {
	                    el.parentNode.removeChild(el)
	                }
	            }
	            for (els = wrapper.all, i = 0; el = els[i++];) { //fix VML
	                if (isVML(el)) {
	                    fixVML(el)
	                }
	            }
	        }
	        //移除我们为了符合套嵌关系而添加的标签
	        for (i = wrap[0]; i--; wrapper = wrapper.lastChild) {}
	        while (firstChild = wrapper.firstChild) { // 将wrapper上的节点转移到文档碎片上！
	            fragment.appendChild(firstChild)
	        }
	        return fragment
	    }
	
	    function isVML(src) {
	        var nodeName = src.nodeName
	        return nodeName.toLowerCase() === nodeName && src.scopeName && src.outerText === ""
	    }
	
	    function fixVML(node) {
	        if (node.currentStyle.behavior !== "url(#default#VML)") {
	            node.style.behavior = "url(#default#VML)"
	            node.style.display = "inline-block"
	            node.style.zoom = 1 //hasLayout
	        }
	    }
	    avalon.innerHTML = function(node, html) {
	        if (!W3C && (!rcreate.test(html) && !rnest.test(html))) {
	            try {
	                node.innerHTML = html
	                return
	            } catch (e) {}
	        }
	        var a = this.parseHTML(html)
	        this.clearHTML(node).appendChild(a)
	    }
	    avalon.clearHTML = function(node) {
	        node.textContent = ""
	        while (node.firstChild) {
	            node.removeChild(node.firstChild)
	        }
	        return node
	    }
	
	    /*********************************************************************
	     *                  avalon的原型方法定义区                            *
	     **********************************************************************/
	
	    function hyphen(target) {
	        //转换为连字符线风格
	        return target.replace(/([a-z\d])([A-Z]+)/g, "$1-$2").toLowerCase()
	    }
	
	    function camelize(target) {
	        //提前判断，提高getStyle等的效率
	        if (!target || target.indexOf("-") < 0 && target.indexOf("_") < 0) {
	            return target
	        }
	        //转换为驼峰风格
	        return target.replace(/[-_][^-_]/g, function(match) {
	            return match.charAt(1).toUpperCase()
	        })
	    }
	
	    var fakeClassListMethods = {
	        _toString: function() {
	            var node = this.node
	            var cls = node.className
	            var str = typeof cls === "string" ? cls : cls.baseVal
	            return str.split(/\s+/).join(" ")
	        },
	        _contains: function(cls) {
	            return (" " + this + " ").indexOf(" " + cls + " ") > -1
	        },
	        _add: function(cls) {
	            if (!this.contains(cls)) {
	                this._set(this + " " + cls)
	            }
	        },
	        _remove: function(cls) {
	            this._set((" " + this + " ").replace(" " + cls + " ", " "))
	        },
	        __set: function(cls) {
	                cls = cls.trim()
	                var node = this.node
	                if (rsvg.test(node)) {
	                    //SVG元素的className是一个对象 SVGAnimatedString { baseVal="", animVal=""}，只能通过set/getAttribute操作
	                    node.setAttribute("class", cls)
	                } else {
	                    node.className = cls
	                }
	            } //toggle存在版本差异，因此不使用它
	    }
	
	    function fakeClassList(node) {
	        if (!("classList" in node)) {
	            node.classList = {
	                node: node
	            }
	            for (var k in fakeClassListMethods) {
	                node.classList[k.slice(1)] = fakeClassListMethods[k]
	            }
	        }
	        return node.classList
	    }
	
	
	    "add,remove".replace(rword, function(method) {
	        avalon.fn[method + "Class"] = function(cls) {
	            var el = this[0]
	                //https://developer.mozilla.org/zh-CN/docs/Mozilla/Firefox/Releases/26
	            if (cls && typeof cls === "string" && el && el.nodeType === 1) {
	                cls.replace(/\S+/g, function(c) {
	                    fakeClassList(el)[method](c)
	                })
	            }
	            return this
	        }
	    })
	    avalon.fn.mix({
	        hasClass: function(cls) {
	            var el = this[0] || {}
	            return el.nodeType === 1 && fakeClassList(el).contains(cls)
	        },
	        toggleClass: function(value, stateVal) {
	            var className, i = 0
	            var classNames = String(value).split(/\s+/)
	            var isBool = typeof stateVal === "boolean"
	            while ((className = classNames[i++])) {
	                var state = isBool ? stateVal : !this.hasClass(className)
	                this[state ? "addClass" : "removeClass"](className)
	            }
	            return this
	        },
	        attr: function(name, value) {
	            if (arguments.length === 2) {
	                this[0].setAttribute(name, value)
	                return this
	            } else {
	                return this[0].getAttribute(name)
	            }
	        },
	        data: function(name, value) {
	            name = "data-" + hyphen(name || "")
	            switch (arguments.length) {
	                case 2:
	                    this.attr(name, value)
	                    return this
	                case 1:
	                    var val = this.attr(name)
	                    return parseData(val)
	                case 0:
	                    var ret = {}
	                    ap.forEach.call(this[0].attributes, function(attr) {
	                        if (attr) {
	                            name = attr.name
	                            if (!name.indexOf("data-")) {
	                                name = camelize(name.slice(5))
	                                ret[name] = parseData(attr.value)
	                            }
	                        }
	                    })
	                    return ret
	            }
	        },
	        removeData: function(name) {
	            name = "data-" + hyphen(name)
	            this[0].removeAttribute(name)
	            return this
	        },
	        css: function(name, value) {
	            if (avalon.isPlainObject(name)) {
	                for (var i in name) {
	                    avalon.css(this, i, name[i])
	                }
	            } else {
	                var ret = avalon.css(this, name, value)
	            }
	            return ret !== void 0 ? ret : this
	        },
	        position: function() {
	            var offsetParent, offset,
	                elem = this[0],
	                parentOffset = {
	                    top: 0,
	                    left: 0
	                }
	            if (!elem) {
	                return
	            }
	            if (this.css("position") === "fixed") {
	                offset = elem.getBoundingClientRect()
	            } else {
	                offsetParent = this.offsetParent() //得到真正的offsetParent
	                offset = this.offset() // 得到正确的offsetParent
	                if (offsetParent[0].tagName !== "HTML") {
	                    parentOffset = offsetParent.offset()
	                }
	                parentOffset.top += avalon.css(offsetParent[0], "borderTopWidth", true)
	                parentOffset.left += avalon.css(offsetParent[0], "borderLeftWidth", true)
	
	                // Subtract offsetParent scroll positions
	                parentOffset.top -= offsetParent.scrollTop()
	                parentOffset.left -= offsetParent.scrollLeft()
	            }
	            return {
	                top: offset.top - parentOffset.top - avalon.css(elem, "marginTop", true),
	                left: offset.left - parentOffset.left - avalon.css(elem, "marginLeft", true)
	            }
	        },
	        offsetParent: function() {
	            var offsetParent = this[0].offsetParent
	            while (offsetParent && avalon.css(offsetParent, "position") === "static") {
	                offsetParent = offsetParent.offsetParent;
	            }
	            return avalon(offsetParent || root)
	        },
	        bind: function(type, fn, phase) {
	            if (this[0]) { //此方法不会链
	                return avalon.bind(this[0], type, fn, phase)
	            }
	        },
	        unbind: function(type, fn, phase) {
	            if (this[0]) {
	                avalon.unbind(this[0], type, fn, phase)
	            }
	            return this
	        },
	        val: function(value) {
	            var node = this[0]
	            if (node && node.nodeType === 1) {
	                var get = arguments.length === 0
	                var access = get ? ":get" : ":set"
	                var fn = valHooks[getValType(node) + access]
	                if (fn) {
	                    var val = fn(node, value)
	                } else if (get) {
	                    return (node.value || "").replace(/\r/g, "")
	                } else {
	                    node.value = value
	                }
	            }
	            return get ? val : this
	        }
	    })
	
	    function parseData(data) {
	        try {
	            if (typeof data === "object")
	                return data
	            data = data === "true" ? true :
	                data === "false" ? false :
	                data === "null" ? null : +data + "" === data ? +data : rbrace.test(data) ? avalon.parseJSON(data) : data
	        } catch (e) {}
	        return data
	    }
	    var rbrace = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
	        rvalidchars = /^[\],:{}\s]*$/,
	        rvalidbraces = /(?:^|:|,)(?:\s*\[)+/g,
	        rvalidescape = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
	        rvalidtokens = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g
	    avalon.parseJSON = window.JSON ? JSON.parse : function(data) {
	        if (typeof data === "string") {
	            data = data.trim();
	            if (data) {
	                if (rvalidchars.test(data.replace(rvalidescape, "@")
	                        .replace(rvalidtokens, "]")
	                        .replace(rvalidbraces, ""))) {
	                    return (new Function("return " + data))() // jshint ignore:line
	                }
	            }
	            avalon.error("Invalid JSON: " + data)
	        }
	        return data
	    }
	    avalon.fireDom = function(elem, type, opts) {
	        if (DOC.createEvent) {
	            var hackEvent = DOC.createEvent("Events");
	            hackEvent.initEvent(type, true, true)
	            avalon.mix(hackEvent, opts)
	            elem.dispatchEvent(hackEvent)
	        } else {
	            try {
	                hackEvent = DOC.createEventObject()
	                avalon.mix(hackEvent, opts)
	                elem.fireEvent("on" + type, hackEvent)
	            } catch (e) { //IE6-8触发事件必须保证在DOM树中,否则报"SCRIPT16389: 未指明的错误"
	            }
	        }
	    }
	
	    //生成avalon.fn.scrollLeft, avalon.fn.scrollTop方法
	    avalon.each({
	        scrollLeft: "pageXOffset",
	        scrollTop: "pageYOffset"
	    }, function(method, prop) {
	        avalon.fn[method] = function(val) {
	            var node = this[0] || {},
	                win = getWindow(node),
	                top = method === "scrollTop"
	            if (!arguments.length) {
	                return win ? (prop in win) ? win[prop] : root[method] : node[method]
	            } else {
	                if (win) {
	                    win.scrollTo(!top ? val : avalon(win).scrollLeft(), top ? val : avalon(win).scrollTop())
	                } else {
	                    node[method] = val
	                }
	            }
	        }
	    })
	
	    function getWindow(node) {
	        return node.window && node.document ? node : node.nodeType === 9 ? node.defaultView || node.parentWindow : false;
	    }
	    //=============================css相关=======================
	    var cssHooks = avalon.cssHooks = {}
	    var prefixes = ["", "-webkit-", "-o-", "-moz-", "-ms-"]
	    var cssMap = {
	        "float": W3C ? "cssFloat" : "styleFloat"
	    }
	    avalon.cssNumber = oneObject("animationIterationCount,columnCount,order,flex,flexGrow,flexShrink,fillOpacity,fontWeight,lineHeight,opacity,orphans,widows,zIndex,zoom")
	
	    avalon.cssName = function(name, host, camelCase) {
	        if (cssMap[name]) {
	            return cssMap[name]
	        }
	        host = host || root.style
	        for (var i = 0, n = prefixes.length; i < n; i++) {
	            camelCase = camelize(prefixes[i] + name)
	            if (camelCase in host) {
	                return (cssMap[name] = camelCase)
	            }
	        }
	        return null
	    }
	    cssHooks["@:set"] = function(node, name, value) {
	        try { //node.style.width = NaN;node.style.width = "xxxxxxx";node.style.width = undefine 在旧式IE下会抛异常
	            node.style[name] = value
	        } catch (e) {}
	    }
	    if (window.getComputedStyle) {
	        cssHooks["@:get"] = function(node, name) {
	            if (!node || !node.style) {
	                throw new Error("getComputedStyle要求传入一个节点 " + node)
	            }
	            var ret, styles = getComputedStyle(node, null)
	            if (styles) {
	                ret = name === "filter" ? styles.getPropertyValue(name) : styles[name]
	                if (ret === "") {
	                    ret = node.style[name] //其他浏览器需要我们手动取内联样式
	                }
	            }
	            return ret
	        }
	        cssHooks["opacity:get"] = function(node) {
	            var ret = cssHooks["@:get"](node, "opacity")
	            return ret === "" ? "1" : ret
	        }
	    } else {
	        var rnumnonpx = /^-?(?:\d*\.)?\d+(?!px)[^\d\s]+$/i
	        var rposition = /^(top|right|bottom|left)$/
	        var ralpha = /alpha\([^)]*\)/i
	        var ie8 = !!window.XDomainRequest
	        var salpha = "DXImageTransform.Microsoft.Alpha"
	        var border = {
	            thin: ie8 ? '1px' : '2px',
	            medium: ie8 ? '3px' : '4px',
	            thick: ie8 ? '5px' : '6px'
	        }
	        cssHooks["@:get"] = function(node, name) {
	            //取得精确值，不过它有可能是带em,pc,mm,pt,%等单位
	            var currentStyle = node.currentStyle
	            var ret = currentStyle[name]
	            if ((rnumnonpx.test(ret) && !rposition.test(ret))) {
	                //①，保存原有的style.left, runtimeStyle.left,
	                var style = node.style,
	                    left = style.left,
	                    rsLeft = node.runtimeStyle.left
	                    //②由于③处的style.left = xxx会影响到currentStyle.left，
	                    //因此把它currentStyle.left放到runtimeStyle.left，
	                    //runtimeStyle.left拥有最高优先级，不会style.left影响
	                node.runtimeStyle.left = currentStyle.left
	                    //③将精确值赋给到style.left，然后通过IE的另一个私有属性 style.pixelLeft
	                    //得到单位为px的结果；fontSize的分支见http://bugs.jquery.com/ticket/760
	                style.left = name === 'fontSize' ? '1em' : (ret || 0)
	                ret = style.pixelLeft + "px"
	                    //④还原 style.left，runtimeStyle.left
	                style.left = left
	                node.runtimeStyle.left = rsLeft
	            }
	            if (ret === "medium") {
	                name = name.replace("Width", "Style")
	                    //border width 默认值为medium，即使其为0"
	                if (currentStyle[name] === "none") {
	                    ret = "0px"
	                }
	            }
	            return ret === "" ? "auto" : border[ret] || ret
	        }
	        cssHooks["opacity:set"] = function(node, name, value) {
	            var style = node.style
	            var opacity = isFinite(value) && value <= 1 ? "alpha(opacity=" + value * 100 + ")" : ""
	            var filter = style.filter || "";
	            style.zoom = 1
	                //不能使用以下方式设置透明度
	                //node.filters.alpha.opacity = value * 100
	            style.filter = (ralpha.test(filter) ?
	                filter.replace(ralpha, opacity) :
	                filter + " " + opacity).trim()
	            if (!style.filter) {
	                style.removeAttribute("filter")
	            }
	        }
	        cssHooks["opacity:get"] = function(node) {
	            //这是最快的获取IE透明值的方式，不需要动用正则了！
	            var alpha = node.filters.alpha || node.filters[salpha],
	                op = alpha && alpha.enabled ? alpha.opacity : 100
	            return (op / 100) + "" //确保返回的是字符串
	        }
	    }
	
	    "top,left".replace(rword, function(name) {
	        cssHooks[name + ":get"] = function(node) {
	            var computed = cssHooks["@:get"](node, name)
	            return /px$/.test(computed) ? computed :
	                avalon(node).position()[name] + "px"
	        }
	    })
	
	    var cssShow = {
	        position: "absolute",
	        visibility: "hidden",
	        display: "block"
	    }
	
	    var rdisplayswap = /^(none|table(?!-c[ea]).+)/
	
	    function showHidden(node, array) {
	        //http://www.cnblogs.com/rubylouvre/archive/2012/10/27/2742529.html
	        if (node.offsetWidth <= 0) { //opera.offsetWidth可能小于0
	            if (rdisplayswap.test(cssHooks["@:get"](node, "display"))) {
	                var obj = {
	                    node: node
	                }
	                for (var name in cssShow) {
	                    obj[name] = node.style[name]
	                    node.style[name] = cssShow[name]
	                }
	                array.push(obj)
	            }
	            var parent = node.parentNode
	            if (parent && parent.nodeType === 1) {
	                showHidden(parent, array)
	            }
	        }
	    }
	    "Width,Height".replace(rword, function(name) { //fix 481
	        var method = name.toLowerCase(),
	            clientProp = "client" + name,
	            scrollProp = "scroll" + name,
	            offsetProp = "offset" + name
	        cssHooks[method + ":get"] = function(node, which, override) {
	            var boxSizing = -4
	            if (typeof override === "number") {
	                boxSizing = override
	            }
	            which = name === "Width" ? ["Left", "Right"] : ["Top", "Bottom"]
	            var ret = node[offsetProp] // border-box 0
	            if (boxSizing === 2) { // margin-box 2
	                return ret + avalon.css(node, "margin" + which[0], true) + avalon.css(node, "margin" + which[1], true)
	            }
	            if (boxSizing < 0) { // padding-box  -2
	                ret = ret - avalon.css(node, "border" + which[0] + "Width", true) - avalon.css(node, "border" + which[1] + "Width", true)
	            }
	            if (boxSizing === -4) { // content-box -4
	                ret = ret - avalon.css(node, "padding" + which[0], true) - avalon.css(node, "padding" + which[1], true)
	            }
	            return ret
	        }
	        cssHooks[method + "&get"] = function(node) {
	            var hidden = [];
	            showHidden(node, hidden);
	            var val = cssHooks[method + ":get"](node)
	            for (var i = 0, obj; obj = hidden[i++];) {
	                node = obj.node
	                for (var n in obj) {
	                    if (typeof obj[n] === "string") {
	                        node.style[n] = obj[n]
	                    }
	                }
	            }
	            return val;
	        }
	        avalon.fn[method] = function(value) { //会忽视其display
	            var node = this[0]
	            if (arguments.length === 0) {
	                if (node.setTimeout) { //取得窗口尺寸,IE9后可以用node.innerWidth /innerHeight代替
	                    return node["inner" + name] || node.document.documentElement[clientProp] ||
	                        node.document.body[clientProp] //IE6下前两个分别为undefine,0
	                }
	                if (node.nodeType === 9) { //取得页面尺寸
	                    var doc = node.documentElement
	                        //FF chrome    html.scrollHeight< body.scrollHeight
	                        //IE 标准模式 : html.scrollHeight> body.scrollHeight
	                        //IE 怪异模式 : html.scrollHeight 最大等于可视窗口多一点？
	                    return Math.max(node.body[scrollProp], doc[scrollProp], node.body[offsetProp], doc[offsetProp], doc[clientProp])
	                }
	                return cssHooks[method + "&get"](node)
	            } else {
	                return this.css(method, value)
	            }
	        }
	        avalon.fn["inner" + name] = function() {
	            return cssHooks[method + ":get"](this[0], void 0, -2)
	        }
	        avalon.fn["outer" + name] = function(includeMargin) {
	            return cssHooks[method + ":get"](this[0], void 0, includeMargin === true ? 2 : 0)
	        }
	    })
	    avalon.fn.offset = function() { //取得距离页面左右角的坐标
	        var node = this[0],
	            box = {
	                left: 0,
	                top: 0
	            }
	        if (!node || !node.tagName || !node.ownerDocument) {
	            return box
	        }
	        var doc = node.ownerDocument,
	            body = doc.body,
	            root = doc.documentElement,
	            win = doc.defaultView || doc.parentWindow
	        if (!avalon.contains(root, node)) {
	            return box
	        }
	        //http://hkom.blog1.fc2.com/?mode=m&no=750 body的偏移量是不包含margin的
	        //我们可以通过getBoundingClientRect来获得元素相对于client的rect.
	        //http://msdn.microsoft.com/en-us/library/ms536433.aspx
	        if (node.getBoundingClientRect) {
	            box = node.getBoundingClientRect() // BlackBerry 5, iOS 3 (original iPhone)
	        }
	        //chrome/IE6: body.scrollTop, firefox/other: root.scrollTop
	        var clientTop = root.clientTop || body.clientTop,
	            clientLeft = root.clientLeft || body.clientLeft,
	            scrollTop = Math.max(win.pageYOffset || 0, root.scrollTop, body.scrollTop),
	            scrollLeft = Math.max(win.pageXOffset || 0, root.scrollLeft, body.scrollLeft)
	            // 把滚动距离加到left,top中去。
	            // IE一些版本中会自动为HTML元素加上2px的border，我们需要去掉它
	            // http://msdn.microsoft.com/en-us/library/ms533564(VS.85).aspx
	        return {
	            top: box.top + scrollTop - clientTop,
	            left: box.left + scrollLeft - clientLeft
	        }
	    }
	
	    //==================================val相关============================
	
	    function getValType(elem) {
	        var ret = elem.tagName.toLowerCase()
	        return ret === "input" && /checkbox|radio/.test(elem.type) ? "checked" : ret
	    }
	    var roption = /^<option(?:\s+\w+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]+))?)*\s+value[\s=]/i
	    var valHooks = {
	        "option:get": IEVersion ? function(node) {
	            //在IE11及W3C，如果没有指定value，那么node.value默认为node.text（存在trim作），但IE9-10则是取innerHTML(没trim操作)
	            //specified并不可靠，因此通过分析outerHTML判定用户有没有显示定义value
	            return roption.test(node.outerHTML) ? node.value : node.text.trim()
	        } : function(node) {
	            return node.value
	        },
	        "select:get": function(node, value) {
	            var option, options = node.options,
	                index = node.selectedIndex,
	                getter = valHooks["option:get"],
	                one = node.type === "select-one" || index < 0,
	                values = one ? null : [],
	                max = one ? index + 1 : options.length,
	                i = index < 0 ? max : one ? index : 0
	            for (; i < max; i++) {
	                option = options[i]
	                    //旧式IE在reset后不会改变selected，需要改用i === index判定
	                    //我们过滤所有disabled的option元素，但在safari5下，如果设置select为disable，那么其所有孩子都disable
	                    //因此当一个元素为disable，需要检测其是否显式设置了disable及其父节点的disable情况
	                if ((option.selected || i === index) && !option.disabled) {
	                    value = getter(option)
	                    if (one) {
	                        return value
	                    }
	                    //收集所有selected值组成数组返回
	                    values.push(value)
	                }
	            }
	            return values
	        },
	        "select:set": function(node, values, optionSet) {
	            values = [].concat(values) //强制转换为数组
	            var getter = valHooks["option:get"]
	            for (var i = 0, el; el = node.options[i++];) {
	                if ((el.selected = values.indexOf(getter(el)) > -1)) {
	                    optionSet = true
	                }
	            }
	            if (!optionSet) {
	                node.selectedIndex = -1
	            }
	        }
	    }
	
	    /*********************************************************************
	     *                          编译系统                                  *
	     **********************************************************************/
	    var meta = {
	        '\b': '\\b',
	        '\t': '\\t',
	        '\n': '\\n',
	        '\f': '\\f',
	        '\r': '\\r',
	        '"': '\\"',
	        '\\': '\\\\'
	    }
	    var quote = window.JSON && JSON.stringify || function(str) {
	        return '"' + str.replace(/[\\\"\x00-\x1f]/g, function(a) {
	            var c = meta[a];
	            return typeof c === 'string' ? c :
	                '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
	        }) + '"'
	    }
	
	    var keywords = [
	        "break,case,catch,continue,debugger,default,delete,do,else,false",
	        "finally,for,function,if,in,instanceof,new,null,return,switch,this",
	        "throw,true,try,typeof,var,void,while,with", /* 关键字*/
	        "abstract,boolean,byte,char,class,const,double,enum,export,extends",
	        "final,float,goto,implements,import,int,interface,long,native",
	        "package,private,protected,public,short,static,super,synchronized",
	        "throws,transient,volatile", /*保留字*/
	        "arguments,let,yield,undefined" /* ECMA 5 - use strict*/
	    ].join(",")
	    var rrexpstr = /\/\*[\w\W]*?\*\/|\/\/[^\n]*\n|\/\/[^\n]*$|"(?:[^"\\]|\\[\w\W])*"|'(?:[^'\\]|\\[\w\W])*'|[\s\t\n]*\.[\s\t\n]*[$\w\.]+/g
	    var rsplit = /[^\w$]+/g
	    var rkeywords = new RegExp(["\\b" + keywords.replace(/,/g, '\\b|\\b') + "\\b"].join('|'), 'g')
	    var rnumber = /\b\d[^,]*/g
	    var rcomma = /^,+|,+$/g
	    var variablePool = new Cache(512)
	    var getVariables = function(code) {
	            var key = "," + code.trim()
	            var ret = variablePool.get(key)
	            if (ret) {
	                return ret
	            }
	            var match = code
	                .replace(rrexpstr, "")
	                .replace(rsplit, ",")
	                .replace(rkeywords, "")
	                .replace(rnumber, "")
	                .replace(rcomma, "")
	                .split(/^$|,+/)
	            return variablePool.put(key, uniqSet(match))
	        }
	        /*添加赋值语句*/
	
	    function addAssign(vars, scope, name, data) {
	        var ret = [],
	            prefix = " = " + name + "."
	        for (var i = vars.length, prop; prop = vars[--i];) {
	            if (scope.hasOwnProperty(prop)) {
	                ret.push(prop + prefix + prop)
	                data.vars.push(prop)
	                if (data.type === "duplex") {
	                    vars.get = name + "." + prop
	                }
	                vars.splice(i, 1)
	            }
	        }
	        return ret
	    }
	
	    function uniqSet(array) {
	        var ret = [],
	            unique = {}
	        for (var i = 0; i < array.length; i++) {
	            var el = array[i]
	            var id = el && typeof el.$id === "string" ? el.$id : el
	            if (!unique[id]) {
	                unique[id] = ret.push(el)
	            }
	        }
	        return ret
	    }
	    //缓存求值函数，以便多次利用
	    var evaluatorPool = new Cache(128)
	        //取得求值函数及其传参
	    var rduplex = /\w\[.*\]|\w\.\w/
	    var rproxy = /(\$proxy\$[a-z]+)\d+$/
	    var rthimRightParentheses = /\)\s*$/
	    var rthimOtherParentheses = /\)\s*\|/g
	    var rquoteFilterName = /\|\s*([$\w]+)/g
	    var rpatchBracket = /"\s*\["/g
	    var rthimLeftParentheses = /"\s*\(/g
	
	    function parseFilter(val, filters) {
	        filters = filters
	            .replace(rthimRightParentheses, "") //处理最后的小括号
	            .replace(rthimOtherParentheses, function() { //处理其他小括号
	                return "],|"
	            })
	            .replace(rquoteFilterName, function(a, b) { //处理|及它后面的过滤器的名字
	                return "[" + quote(b)
	            })
	            .replace(rpatchBracket, function() {
	                return '"],["'
	            })
	            .replace(rthimLeftParentheses, function() {
	                return '",'
	            }) + "]"
	        return "return this.filters.$filter(" + val + ", " + filters + ")"
	    }
	
	    function parseExpr(code, scopes, data) {
	        var dataType = data.type
	        var filters = data.filters || ""
	        var exprId = scopes.map(function(el) {
	            return String(el.$id).replace(rproxy, "$1")
	        }) + code + dataType + filters
	        var vars = getVariables(code).concat(),
	            assigns = [],
	            names = [],
	            args = [],
	            prefix = ""
	            //args 是一个对象数组， names 是将要生成的求值函数的参数
	        scopes = uniqSet(scopes)
	        data.vars = []
	        for (var i = 0, sn = scopes.length; i < sn; i++) {
	            if (vars.length) {
	                var name = "vm" + expose + "_" + i
	                names.push(name)
	                args.push(scopes[i])
	                assigns.push.apply(assigns, addAssign(vars, scopes[i], name, data))
	            }
	        }
	        if (!assigns.length && dataType === "duplex") {
	            return
	        }
	        if (dataType !== "duplex" && (code.indexOf("||") > -1 || code.indexOf("&&") > -1)) {
	            //https://github.com/RubyLouvre/avalon/issues/583
	            data.vars.forEach(function(v) {
	                var reg = new RegExp("\\b" + v + "(?:\\.\\w+|\\[\\w+\\])+", "ig")
	                code = code.replace(reg, function(_, cap) {
	                    var c = _.charAt(v.length)
	                        //var r = IEVersion ? code.slice(arguments[1] + _.length) : RegExp.rightContext
	                        //https://github.com/RubyLouvre/avalon/issues/966
	                    var r = code.slice(cap + _.length)
	                    var method = /^\s*\(/.test(r)
	                    if (c === "." || c === "[" || method) { //比如v为aa,我们只匹配aa.bb,aa[cc],不匹配aaa.xxx
	                        var name = "var" + String(Math.random()).replace(/^0\./, "")
	                        if (method) { //array.size()
	                            var array = _.split(".")
	                            if (array.length > 2) {
	                                var last = array.pop()
	                                assigns.push(name + " = " + array.join("."))
	                                return name + "." + last
	                            } else {
	                                return _
	                            }
	                        }
	                        assigns.push(name + " = " + _)
	                        return name
	                    } else {
	                        return _
	                    }
	                })
	            })
	        }
	        //---------------args----------------
	        data.args = args
	            //---------------cache----------------
	        delete data.vars
	        var fn = evaluatorPool.get(exprId) //直接从缓存，免得重复生成
	        if (fn) {
	            data.evaluator = fn
	            return
	        }
	        prefix = assigns.join(", ")
	        if (prefix) {
	            prefix = "var " + prefix
	        }
	        if (/\S/.test(filters)) { //文本绑定，双工绑定才有过滤器
	            if (!/text|html/.test(data.type)) {
	                throw Error("ms-" + data.type + "不支持过滤器")
	            }
	            code = "\nvar ret" + expose + " = " + code + ";\r\n"
	            code += parseFilter("ret" + expose, filters)
	            try {
	                fn = Function.apply(noop, names.concat("'use strict';\n" + prefix + code))
	                data.evaluator = evaluatorPool.put(exprId, function() {
	                    return fn.apply(avalon, arguments) //确保可以在编译代码中使用this获取avalon对象
	                })
	            } catch (e) {
	                log("debug: parse error," + e.message)
	            }
	            vars = assigns = names = null //释放内存
	            return
	        } else if (dataType === "duplex") { //双工绑定
	            var _body = "'use strict';\nreturn function(vvv){\n\t" +
	                prefix +
	                ";\n\tif(!arguments.length){\n\t\treturn " +
	                code +
	                "\n\t}\n\t" + (!rduplex.test(code) ? vars.get : code) +
	                "= vvv;\n} "
	            try {
	                fn = Function.apply(noop, names.concat(_body))
	                data.evaluator = evaluatorPool.put(exprId, fn)
	            } catch (e) {
	                log("debug: parse error," + e.message)
	            }
	            vars = assigns = names = null //释放内存
	            return
	        } else if (dataType === "on") { //事件绑定
	            if (code.indexOf("(") === -1) {
	                code += ".call(this, $event)"
	            } else {
	                code = code.replace("(", ".call(this,")
	            }
	            names.push("$event")
	            code = "\nreturn " + code + ";" //IE全家 Function("return ")出错，需要Function("return ;")
	            var lastIndex = code.lastIndexOf("\nreturn")
	            var header = code.slice(0, lastIndex)
	            var footer = code.slice(lastIndex)
	            code = header + "\n" + footer
	        } else { //其他绑定
	            code = "\nreturn " + code + ";" //IE全家 Function("return ")出错，需要Function("return ;")
	        }
	        try {
	            fn = Function.apply(noop, names.concat("'use strict';\n" + prefix + code))
	            data.evaluator = evaluatorPool.put(exprId, fn)
	        } catch (e) {
	            log("debug: parse error," + e.message)
	        }
	        vars = assigns = names = null //释放内存
	    }
	
	    function stringifyExpr(code) {
	        var hasExpr = rexpr.test(code) //比如ms-class="width{{w}}"的情况
	        if (hasExpr) {
	            var array = scanExpr(code)
	            if (array.length === 1) {
	                return array[0].value
	            }
	            return array.map(function(el) {
	                return el.expr ? "(" + el.value + ")" : quote(el.value)
	            }).join(" + ")
	        } else {
	            return code
	        }
	    }
	    //parseExpr的智能引用代理
	
	    function parseExprProxy(code, scopes, data, noRegister) {
	        code = code || "" //code 可能未定义
	        parseExpr(code, scopes, data)
	        if (data.evaluator && !noRegister) {
	            data.handler = bindingExecutors[data.handlerName || data.type]
	                //方便调试
	                //这里非常重要,我们通过判定视图刷新函数的element是否在DOM树决定
	                //将它移出订阅者列表
	            avalon.injectBinding(data)
	        }
	    }
	    avalon.parseExprProxy = parseExprProxy
	        /*********************************************************************
	         *                           扫描系统                                 *
	         **********************************************************************/
	
	    avalon.scan = function(elem, vmodel) {
	        elem = elem || root
	        var vmodels = vmodel ? [].concat(vmodel) : []
	        scanTag(elem, vmodels)
	    }
	
	    //http://www.w3.org/TR/html5/syntax.html#void-elements
	    var stopScan = oneObject("area,base,basefont,br,col,command,embed,hr,img,input,link,meta,param,source,track,wbr,noscript,script,style,textarea".toUpperCase())
	
	    function checkScan(elem, callback, innerHTML) {
	        var id = setTimeout(function() {
	            var currHTML = elem.innerHTML
	            clearTimeout(id)
	            if (currHTML === innerHTML) {
	                callback()
	            } else {
	                checkScan(elem, callback, currHTML)
	            }
	        })
	    }
	
	
	    function createSignalTower(elem, vmodel) {
	        var id = elem.getAttribute("avalonctrl") || vmodel.$id
	        elem.setAttribute("avalonctrl", id)
	        vmodel.$events.expr = elem.tagName + '[avalonctrl="' + id + '"]'
	    }
	
	    var getBindingCallback = function(elem, name, vmodels) {
	        var callback = elem.getAttribute(name)
	        if (callback) {
	            for (var i = 0, vm; vm = vmodels[i++];) {
	                if (vm.hasOwnProperty(callback) && typeof vm[callback] === "function") {
	                    return vm[callback]
	                }
	            }
	        }
	    }
	
	    function executeBindings(bindings, vmodels) {
	        for (var i = 0, data; data = bindings[i++];) {
	            data.vmodels = vmodels
	            bindingHandlers[data.type](data, vmodels)
	            if (data.evaluator && data.element && data.element.nodeType === 1) { //移除数据绑定，防止被二次解析
	                //chrome使用removeAttributeNode移除不存在的特性节点时会报错 https://github.com/RubyLouvre/avalon/issues/99
	                data.element.removeAttribute(data.name)
	            }
	        }
	        bindings.length = 0
	    }
	
	    //https://github.com/RubyLouvre/avalon/issues/636
	    var mergeTextNodes = IEVersion && window.MutationObserver ? function(elem) {
	        var node = elem.firstChild,
	            text
	        while (node) {
	            var aaa = node.nextSibling
	            if (node.nodeType === 3) {
	                if (text) {
	                    text.nodeValue += node.nodeValue
	                    elem.removeChild(node)
	                } else {
	                    text = node
	                }
	            } else {
	                text = null
	            }
	            node = aaa
	        }
	    } : 0
	    var roneTime = /^\s*::/
	    var rmsAttr = /ms-(\w+)-?(.*)/
	    var priorityMap = {
	        "if": 10,
	        "repeat": 90,
	        "data": 100,
	        "widget": 110,
	        "each": 1400,
	        "with": 1500,
	        "duplex": 2000,
	        "on": 3000
	    }
	
	    var events = oneObject("animationend,blur,change,input,click,dblclick,focus,keydown,keypress,keyup,mousedown,mouseenter,mouseleave,mousemove,mouseout,mouseover,mouseup,scan,scroll,submit")
	    var obsoleteAttrs = oneObject("value,title,alt,checked,selected,disabled,readonly,enabled")
	
	    function bindingSorter(a, b) {
	        return a.priority - b.priority
	    }
	
	    function scanAttr(elem, vmodels, match) {
	        var scanNode = true
	        if (vmodels.length) {
	            var attributes = getAttributes ? getAttributes(elem) : elem.attributes
	            var bindings = []
	            var fixAttrs = []
	            var msData = {}
	            var uniq = {}
	            for (var i = 0, attr; attr = attributes[i++];) {
	                if (attr.specified) {
	                    if (match = attr.name.match(rmsAttr)) {
	                        //如果是以指定前缀命名的
	                        var type = match[1]
	                        var param = match[2] || ""
	                        var value = attr.value
	                        var name = attr.name
	                        if (uniq[name]) { //IE8下ms-repeat,ms-with BUG
	                            continue
	                        }
	                        uniq[name] = 1
	                        if (events[type]) {
	                            param = type
	                            type = "on"
	                        } else if (obsoleteAttrs[type]) {
	                            if (type === "enabled") { //吃掉ms-enabled绑定,用ms-disabled代替
	                                log("warning!ms-enabled或ms-attr-enabled已经被废弃")
	                                type = "disabled"
	                                value = "!(" + value + ")"
	                            }
	                            param = type
	                            type = "attr"
	                            name = "ms-" + type + "-" + param
	                            fixAttrs.push([attr.name, name, value])
	                        }
	                        msData[name] = value
	                        if (typeof bindingHandlers[type] === "function") {
	                            var newValue = value.replace(roneTime, "")
	                            var oneTime = value !== newValue
	                            var binding = {
	                                type: type,
	                                param: param,
	                                element: elem,
	                                name: name,
	                                value: newValue,
	                                oneTime: oneTime,
	                                uuid: name + "-" + getUid(elem),
	                                //chrome与firefox下Number(param)得到的值不一样 #855
	                                priority: (priorityMap[type] || type.charCodeAt(0) * 10) + (Number(param.replace(/\D/g, "")) || 0)
	                            }
	                            if (type === "html" || type === "text") {
	                                var token = getToken(value)
	                                avalon.mix(binding, token)
	                                binding.filters = binding.filters.replace(rhasHtml, function() {
	                                        binding.type = "html"
	                                        binding.group = 1
	                                        return ""
	                                    }) // jshint ignore:line
	                            } else if (type === "duplex") {
	                                var hasDuplex = name
	                            } else if (name === "ms-if-loop") {
	                                binding.priority += 100
	                            }
	                            bindings.push(binding)
	                            if (type === "widget") {
	                                elem.msData = elem.msData || msData
	                            }
	                        }
	                    }
	                }
	            }
	            if (bindings.length) {
	                bindings.sort(bindingSorter)
	                fixAttrs.forEach(function(arr) {
	                        log("warning!请改用" + arr[1] + "代替" + arr[0] + "!")
	                        elem.removeAttribute(arr[0])
	                        elem.setAttribute(arr[1], arr[2])
	                    })
	                    //http://bugs.jquery.com/ticket/7071
	                    //在IE下对VML读取type属性,会让此元素所有属性都变成<Failed>
	                if (hasDuplex && msData["ms-attr-value"] && !elem.scopeName && elem.type === "text") {
	                    log("warning!一个控件不能同时定义ms-attr-value与" + hasDuplex)
	                }
	                for (i = 0; binding = bindings[i]; i++) {
	                    type = binding.type
	                    if (rnoscanAttrBinding.test(type)) {
	                        return executeBindings(bindings.slice(0, i + 1), vmodels)
	                    } else if (scanNode) {
	                        scanNode = !rnoscanNodeBinding.test(type)
	                    }
	                }
	                executeBindings(bindings, vmodels)
	            }
	        }
	        if (scanNode && !stopScan[elem.tagName] && rbind.test(elem.innerHTML.replace(rlt, "<").replace(rgt, ">"))) {
	            mergeTextNodes && mergeTextNodes(elem)
	            scanNodeList(elem, vmodels) //扫描子孙元素
	        }
	    }
	    var rnoscanAttrBinding = /^if|widget|repeat$/
	    var rnoscanNodeBinding = /^each|with|html|include$/
	        //IE67下，在循环绑定中，一个节点如果是通过cloneNode得到，自定义属性的specified为false，无法进入里面的分支，
	        //但如果我们去掉scanAttr中的attr.specified检测，一个元素会有80+个特性节点（因为它不区分固有属性与自定义属性），很容易卡死页面
	    if (!W3C) {
	        var attrPool = new Cache(512)
	        var rattrs = /\s+(ms-[^=\s]+)(?:=("[^"]*"|'[^']*'|[^\s>]+))?/g,
	            rquote = /^['"]/,
	            rtag = /<\w+\b(?:(["'])[^"]*?(\1)|[^>])*>/i,
	            ramp = /&amp;/g
	            //IE6-8解析HTML5新标签，会将它分解两个元素节点与一个文本节点
	            //<body><section>ddd</section></body>
	            //        window.onload = function() {
	            //            var body = document.body
	            //            for (var i = 0, el; el = body.children[i++]; ) {
	            //                avalon.log(el.outerHTML)
	            //            }
	            //        }
	            //依次输出<SECTION>, </SECTION>
	        var getAttributes = function(elem) {
	            var html = elem.outerHTML
	                //处理IE6-8解析HTML5新标签的情况，及<br>等半闭合标签outerHTML为空的情况
	            if (html.slice(0, 2) === "</" || !html.trim()) {
	                return []
	            }
	            var str = html.match(rtag)[0]
	            var attributes = [],
	                match,
	                k, v
	            var ret = attrPool.get(str)
	            if (ret) {
	                return ret
	            }
	            while (k = rattrs.exec(str)) {
	                v = k[2]
	                if (v) {
	                    v = (rquote.test(v) ? v.slice(1, -1) : v).replace(ramp, "&")
	                }
	                var name = k[1].toLowerCase()
	                match = name.match(rmsAttr)
	                var binding = {
	                    name: name,
	                    specified: true,
	                    value: v || ""
	                }
	                attributes.push(binding)
	            }
	            return attrPool.put(str, attributes)
	        }
	    }
	
	    function scanNodeList(parent, vmodels) {
	        var nodes = avalon.slice(parent.childNodes)
	        scanNodeArray(nodes, vmodels)
	    }
	
	    function scanNodeArray(nodes, vmodels) {
	        for (var i = 0, node; node = nodes[i++];) {
	            switch (node.nodeType) {
	                case 1:
	                    scanTag(node, vmodels) //扫描元素节点
	                    if (node.msCallback) {
	                        node.msCallback()
	                        node.msCallback = void 0
	                    }
	                    break
	                case 3:
	                    if (rexpr.test(node.nodeValue)) {
	                        scanText(node, vmodels, i) //扫描文本节点
	                    }
	                    break
	            }
	        }
	    }
	
	
	    function scanTag(elem, vmodels, node) {
	        //扫描顺序  ms-skip(0) --> ms-important(1) --> ms-controller(2) --> ms-if(10) --> ms-repeat(100) 
	        //--> ms-if-loop(110) --> ms-attr(970) ...--> ms-each(1400)-->ms-with(1500)--〉ms-duplex(2000)垫后
	        var a = elem.getAttribute("ms-skip")
	            //#360 在旧式IE中 Object标签在引入Flash等资源时,可能出现没有getAttributeNode,innerHTML的情形
	        if (!elem.getAttributeNode) {
	            return log("warning " + elem.tagName + " no getAttributeNode method")
	        }
	        var b = elem.getAttributeNode("ms-important")
	        var c = elem.getAttributeNode("ms-controller")
	        if (typeof a === "string") {
	            return
	        } else if (node = b || c) {
	            var newVmodel = avalon.vmodels[node.value]
	            if (!newVmodel) {
	                return
	            }
	            //ms-important不包含父VM，ms-controller相反
	            vmodels = node === b ? [newVmodel] : [newVmodel].concat(vmodels)
	            var name = node.name
	            elem.removeAttribute(name) //removeAttributeNode不会刷新[ms-controller]样式规则
	            avalon(elem).removeClass(name)
	            createSignalTower(elem, newVmodel)
	        }
	        scanAttr(elem, vmodels) //扫描特性节点
	    }
	    var rhasHtml = /\|\s*html(?:\b|$)/,
	        r11a = /\|\|/g,
	        rlt = /&lt;/g,
	        rgt = /&gt;/g,
	        rstringLiteral = /(['"])(\\\1|.)+?\1/g
	
	    function getToken(value) {
	        if (value.indexOf("|") > 0) {
	            var scapegoat = value.replace(rstringLiteral, function(_) {
	                return Array(_.length + 1).join("1") // jshint ignore:line
	            })
	            var index = scapegoat.replace(r11a, "\u1122\u3344").indexOf("|") //干掉所有短路或
	            if (index > -1) {
	                return {
	                    filters: value.slice(index),
	                    value: value.slice(0, index),
	                    expr: true
	                }
	            }
	        }
	        return {
	            value: value,
	            filters: "",
	            expr: true
	        }
	    }
	
	    function scanExpr(str) {
	        var tokens = [],
	            value, start = 0,
	            stop
	        do {
	            stop = str.indexOf(openTag, start)
	            if (stop === -1) {
	                break
	            }
	            value = str.slice(start, stop)
	            if (value) { // {{ 左边的文本
	                tokens.push({
	                    value: value,
	                    filters: "",
	                    expr: false
	                })
	            }
	            start = stop + openTag.length
	            stop = str.indexOf(closeTag, start)
	            if (stop === -1) {
	                break
	            }
	            value = str.slice(start, stop)
	            if (value) { //处理{{ }}插值表达式
	                tokens.push(getToken(value))
	            }
	            start = stop + closeTag.length
	        } while (1)
	        value = str.slice(start)
	        if (value) { //}} 右边的文本
	            tokens.push({
	                value: value,
	                expr: false,
	                filters: ""
	            })
	        }
	        return tokens
	    }
	
	    function scanText(textNode, vmodels) {
	        var bindings = [],
	            tokens = scanExpr(textNode.data)
	        if (tokens.length) {
	            for (var i = 0, token; token = tokens[i++];) {
	                var node = DOC.createTextNode(token.value) //将文本转换为文本节点，并替换原来的文本节点
	                if (token.expr) {
	                    token.value = token.value.replace(roneTime, function() {
	                            token.oneTime = true
	                            return ""
	                        }) // jshint ignore:line
	                    token.type = "text"
	                    token.element = node
	                    token.filters = token.filters.replace(rhasHtml, function(a, b, c) {
	                            token.type = "html"
	                            return ""
	                        }) // jshint ignore:line
	                    bindings.push(token) //收集带有插值表达式的文本
	                }
	                avalonFragment.appendChild(node)
	            }
	            textNode.parentNode.replaceChild(avalonFragment, textNode)
	            if (bindings.length)
	                executeBindings(bindings, vmodels)
	        }
	    }
	
	    var bools = ["autofocus,autoplay,async,allowTransparency,checked,controls",
	        "declare,disabled,defer,defaultChecked,defaultSelected",
	        "contentEditable,isMap,loop,multiple,noHref,noResize,noShade",
	        "open,readOnly,selected"
	    ].join(",")
	    var boolMap = {}
	    bools.replace(rword, function(name) {
	        boolMap[name.toLowerCase()] = name
	    })
	
	    var propMap = { //属性名映射
	        "accept-charset": "acceptCharset",
	        "char": "ch",
	        "charoff": "chOff",
	        "class": "className",
	        "for": "htmlFor",
	        "http-equiv": "httpEquiv"
	    }
	
	    var anomaly = ["accessKey,bgColor,cellPadding,cellSpacing,codeBase,codeType,colSpan",
	        "dateTime,defaultValue,frameBorder,longDesc,maxLength,marginWidth,marginHeight",
	        "rowSpan,tabIndex,useMap,vSpace,valueType,vAlign"
	    ].join(",")
	    anomaly.replace(rword, function(name) {
	        propMap[name.toLowerCase()] = name
	    })
	
	    var rnoscripts = /<noscript.*?>(?:[\s\S]+?)<\/noscript>/img
	    var rnoscriptText = /<noscript.*?>([\s\S]+?)<\/noscript>/im
	
	    var getXHR = function() {
	        return new(window.XMLHttpRequest || ActiveXObject)("Microsoft.XMLHTTP") // jshint ignore:line
	    }
	
	    var templatePool = avalon.templateCache = {}
	
	    bindingHandlers.attr = function(data, vmodels) {
	        var value = stringifyExpr(data.value.trim())
	        if (data.type === "include") {
	            var elem = data.element
	            data.includeRendered = getBindingCallback(elem, "data-include-rendered", vmodels)
	            data.includeLoaded = getBindingCallback(elem, "data-include-loaded", vmodels)
	            var outer = data.includeReplace = !!avalon(elem).data("includeReplace")
	            if (avalon(elem).data("includeCache")) {
	                data.templateCache = {}
	            }
	            data.startInclude = DOC.createComment("ms-include")
	            data.endInclude = DOC.createComment("ms-include-end")
	            if (outer) {
	                data.element = data.startInclude
	                elem.parentNode.insertBefore(data.startInclude, elem)
	                elem.parentNode.insertBefore(data.endInclude, elem.nextSibling)
	            } else {
	                elem.insertBefore(data.startInclude, elem.firstChild)
	                elem.appendChild(data.endInclude)
	            }
	        }
	        data.handlerName = "attr" //handleName用于处理多种绑定共用同一种bindingExecutor的情况
	        parseExprProxy(value, vmodels, data)
	    }
	
	    bindingExecutors.attr = function(val, elem, data) {
	        var method = data.type,
	            attrName = data.param
	        if (method === "css") {
	            avalon(elem).css(attrName, val)
	        } else if (method === "attr") {
	
	            // ms-attr-class="xxx" vm.xxx="aaa bbb ccc"将元素的className设置为aaa bbb ccc
	            // ms-attr-class="xxx" vm.xxx=false  清空元素的所有类名
	            // ms-attr-name="yyy"  vm.yyy="ooo" 为元素设置name属性
	            var toRemove = (val === false) || (val === null) || (val === void 0)
	
	            if (!W3C && propMap[attrName]) { //旧式IE下需要进行名字映射
	                attrName = propMap[attrName]
	            }
	            var bool = boolMap[attrName]
	            if (typeof elem[bool] === "boolean") {
	                elem[bool] = !!val //布尔属性必须使用el.xxx = true|false方式设值
	                if (!val) { //如果为false, IE全系列下相当于setAttribute(xxx,''),会影响到样式,需要进一步处理
	                    toRemove = true
	                }
	            }
	            if (toRemove) {
	                return elem.removeAttribute(attrName)
	            }
	            //SVG只能使用setAttribute(xxx, yyy), VML只能使用elem.xxx = yyy ,HTML的固有属性必须elem.xxx = yyy
	            var isInnate = rsvg.test(elem) ? false : (DOC.namespaces && isVML(elem)) ? true : attrName in elem.cloneNode(false)
	            if (isInnate) {
	                elem[attrName] = val + ""
	            } else {
	                elem.setAttribute(attrName, val)
	            }
	        } else if (method === "include" && val) {
	            var vmodels = data.vmodels
	            var rendered = data.includeRendered
	            var loaded = data.includeLoaded
	            var replace = data.includeReplace
	            var target = replace ? elem.parentNode : elem
	            var scanTemplate = function(text) {
	                if (data.vmodels === null) {
	                    return
	                }
	
	                if (loaded) {
	                    var newText = loaded.apply(target, [text].concat(vmodels))
	                    if (typeof newText === "string")
	                        text = newText
	                }
	                if (rendered) {
	                    checkScan(target, function() {
	                        rendered.call(target)
	                    }, NaN)
	                }
	                var lastID = data.includeLastID
	                if (data.templateCache && lastID && lastID !== val) {
	                    var lastTemplate = data.templateCache[lastID]
	                    if (!lastTemplate) {
	                        lastTemplate = data.templateCache[lastID] = DOC.createElement("div")
	                        ifGroup.appendChild(lastTemplate)
	                    }
	                }
	                data.includeLastID = val
	                while (data.startInclude) {
	                    var node = data.startInclude.nextSibling
	                    if (node && node !== data.endInclude) {
	                        target.removeChild(node)
	                        if (lastTemplate)
	                            lastTemplate.appendChild(node)
	                    } else {
	                        break
	                    }
	                }
	                var dom = getTemplateNodes(data, val, text)
	                var nodes = avalon.slice(dom.childNodes)
	                target.insertBefore(dom, data.endInclude)
	                scanNodeArray(nodes, vmodels)
	            }
	
	            if (data.param === "src") {
	                if (typeof templatePool[val] === "string") {
	                    avalon.nextTick(function() {
	                        scanTemplate(templatePool[val])
	                    })
	                } else if (Array.isArray(templatePool[val])) { //#805 防止在循环绑定中发出许多相同的请求
	                    templatePool[val].push(scanTemplate)
	                } else {
	                    var xhr = getXHR()
	                    xhr.onreadystatechange = function() {
	                        if (xhr.readyState === 4) {
	                            var s = xhr.status
	                            if (s >= 200 && s < 300 || s === 304 || s === 1223) {
	                                var text = xhr.responseText
	                                for (var f = 0, fn; fn = templatePool[val][f++];) {
	                                    fn(text)
	                                }
	                                templatePool[val] = text
	                            }
	                        }
	                    }
	                    templatePool[val] = [scanTemplate]
	                    xhr.open("GET", val, true)
	                    if ("withCredentials" in xhr) {
	                        xhr.withCredentials = true
	                    }
	                    xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest")
	                    xhr.send(null)
	                }
	            } else {
	                //IE系列与够新的标准浏览器支持通过ID取得元素（firefox14+）
	                //http://tjvantoll.com/2012/07/19/dom-element-references-as-global-variables/
	                var el = val && val.nodeType === 1 ? val : DOC.getElementById(val)
	                if (el) {
	                    if (el.tagName === "NOSCRIPT" && !(el.innerHTML || el.fixIE78)) { //IE7-8 innerText,innerHTML都无法取得其内容，IE6能取得其innerHTML
	                        xhr = getXHR() //IE9-11与chrome的innerHTML会得到转义的内容，它们的innerText可以
	                        xhr.open("GET", location, false) //谢谢Nodejs 乱炖群 深圳-纯属虚构
	                        xhr.send(null)
	                            //http://bbs.csdn.net/topics/390349046?page=1#post-393492653
	                        var noscripts = DOC.getElementsByTagName("noscript")
	                        var array = (xhr.responseText || "").match(rnoscripts) || []
	                        var n = array.length
	                        for (var i = 0; i < n; i++) {
	                            var tag = noscripts[i]
	                            if (tag) { //IE6-8中noscript标签的innerHTML,innerText是只读的
	                                tag.style.display = "none" //http://haslayout.net/css/noscript-Ghost-Bug
	                                tag.fixIE78 = (array[i].match(rnoscriptText) || ["", "&nbsp;"])[1]
	                            }
	                        }
	                    }
	                    avalon.nextTick(function() {
	                        scanTemplate(el.fixIE78 || el.value || el.innerText || el.innerHTML)
	                    })
	                }
	            }
	        } else {
	            if (!root.hasAttribute && typeof val === "string" && (method === "src" || method === "href")) {
	                val = val.replace(/&amp;/g, "&") //处理IE67自动转义的问题
	            }
	            elem[method] = val
	            if (window.chrome && elem.tagName === "EMBED") {
	                var parent = elem.parentNode //#525  chrome1-37下embed标签动态设置src不能发生请求
	                var comment = document.createComment("ms-src")
	                parent.replaceChild(comment, elem)
	                parent.replaceChild(elem, comment)
	            }
	        }
	    }
	
	    function getTemplateNodes(data, id, text) {
	        var div = data.templateCache && data.templateCache[id]
	        if (div) {
	            var dom = DOC.createDocumentFragment(),
	                firstChild
	            while (firstChild = div.firstChild) {
	                dom.appendChild(firstChild)
	            }
	            return dom
	        }
	        return avalon.parseHTML(text)
	    }
	
	    //这几个指令都可以使用插值表达式，如ms-src="aaa/{{b}}/{{c}}.html"
	    "title,alt,src,value,css,include,href".replace(rword, function(name) {
	            bindingHandlers[name] = bindingHandlers.attr
	        })
	        //根据VM的属性值或表达式的值切换类名，ms-class="xxx yyy zzz:flag" 
	        //http://www.cnblogs.com/rubylouvre/archive/2012/12/17/2818540.html
	    bindingHandlers["class"] = function(binding, vmodels) {
	        var oldStyle = binding.param,
	            text = binding.value,
	            rightExpr
	        binding.handlerName = "class"
	        if (!oldStyle || isFinite(oldStyle)) {
	            binding.param = "" //去掉数字
	            var colonIndex = text.replace(rexprg, function(a) {
	                    return a.replace(/./g, "0")
	                }).indexOf(":") //取得第一个冒号的位置
	            if (colonIndex === -1) { // 比如 ms-class="aaa bbb ccc" 的情况
	                var className = text
	                rightExpr = true
	            } else { // 比如 ms-class-1="ui-state-active:checked" 的情况
	                className = text.slice(0, colonIndex)
	                rightExpr = text.slice(colonIndex + 1)
	            }
	            if (!rexpr.test(text)) {
	                className = quote(className)
	            } else {
	                className = stringifyExpr(className)
	            }
	            binding.expr = "[" + className + "," + rightExpr + "]"
	        } else {
	            binding.expr = '[' + quote(oldStyle) + "," + text + "]"
	            binding.oldStyle = oldStyle
	        }
	        var method = binding.type
	        if (method === "hover" || method === "active") { //确保只绑定一次
	            if (!binding.hasBindEvent) {
	                var elem = binding.element
	                var $elem = avalon(elem)
	                var activate = "mouseenter" //在移出移入时切换类名
	                var abandon = "mouseleave"
	                if (method === "active") { //在聚焦失焦中切换类名
	                    elem.tabIndex = elem.tabIndex || -1
	                    activate = "mousedown"
	                    abandon = "mouseup"
	                    var fn0 = $elem.bind("mouseleave", function() {
	                        binding.toggleClass && $elem.removeClass(binding.newClass)
	                    })
	                }
	            }
	
	            var fn1 = $elem.bind(activate, function() {
	                binding.toggleClass && $elem.addClass(binding.newClass)
	            })
	            var fn2 = $elem.bind(abandon, function() {
	                binding.toggleClass && $elem.removeClass(binding.newClass)
	            })
	            binding.rollback = function() {
	                $elem.unbind("mouseleave", fn0)
	                $elem.unbind(activate, fn1)
	                $elem.unbind(abandon, fn2)
	            }
	            binding.hasBindEvent = true
	        }
	        parseExprProxy(binding.expr, vmodels, binding)
	    }
	
	    bindingExecutors["class"] = function(arr, elem, binding) {
	        var $elem = avalon(elem)
	        binding.newClass = arr[0]
	        binding.toggleClass = !!arr[1]
	        if (binding.oldClass && binding.newClass !== binding.oldClass) {
	            $elem.removeClass(binding.oldClass)
	        }
	        binding.oldClass = binding.newClass
	        if (binding.type === "class") {
	            if (binding.oldStyle) {
	                $elem.toggleClass(binding.oldStyle, !!arr[1])
	            } else {
	                $elem.toggleClass(binding.newClass, binding.toggleClass)
	            }
	        }
	
	    }
	
	    "hover,active".replace(rword, function(method) {
	            bindingHandlers[method] = bindingHandlers["class"]
	        })
	        //ms-controller绑定已经在scanTag 方法中实现
	        //ms-css绑定已由ms-attr绑定实现
	
	
	    // bindingHandlers.data 定义在if.js
	    bindingExecutors.data = function(val, elem, data) {
	            var key = "data-" + data.param
	            if (val && typeof val === "object") {
	                elem[key] = val
	            } else {
	                elem.setAttribute(key, String(val))
	            }
	        }
	        //双工绑定
	    var duplexBinding = bindingHandlers.duplex = function(data, vmodels) {
	            var elem = data.element,
	                hasCast
	            parseExprProxy(data.value, vmodels, data, 1)
	
	            data.changed = getBindingCallback(elem, "data-duplex-changed", vmodels) || noop
	            if (data.evaluator && data.args) {
	                var params = []
	                var casting = oneObject("string,number,boolean,checked")
	                if (elem.type === "radio" && data.param === "") {
	                    data.param = "checked"
	                }
	                if (elem.msData) {
	                    elem.msData["ms-duplex"] = data.value
	                }
	                data.param.replace(/\w+/g, function(name) {
	                    if (/^(checkbox|radio)$/.test(elem.type) && /^(radio|checked)$/.test(name)) {
	                        if (name === "radio")
	                            log("ms-duplex-radio已经更名为ms-duplex-checked")
	                        name = "checked"
	                        data.isChecked = true
	                    }
	                    if (name === "bool") {
	                        name = "boolean"
	                        log("ms-duplex-bool已经更名为ms-duplex-boolean")
	                    } else if (name === "text") {
	                        name = "string"
	                        log("ms-duplex-text已经更名为ms-duplex-string")
	                    }
	                    if (casting[name]) {
	                        hasCast = true
	                    }
	                    avalon.Array.ensure(params, name)
	                })
	                if (!hasCast) {
	                    params.push("string")
	                }
	                data.param = params.join("-")
	                data.bound = function(type, callback) {
	                    if (elem.addEventListener) {
	                        elem.addEventListener(type, callback, false)
	                    } else {
	                        elem.attachEvent("on" + type, callback)
	                    }
	                    var old = data.rollback
	                    data.rollback = function() {
	                        elem.avalonSetter = null
	                        avalon.unbind(elem, type, callback)
	                        old && old()
	                    }
	                }
	                for (var i in avalon.vmodels) {
	                    var v = avalon.vmodels[i]
	                    v.$fire("avalon-ms-duplex-init", data)
	                }
	                var cpipe = data.pipe || (data.pipe = pipe)
	                cpipe(null, data, "init")
	                var tagName = elem.tagName
	                duplexBinding[tagName] && duplexBinding[tagName](elem, data.evaluator.apply(null, data.args), data)
	            }
	        }
	        //不存在 bindingExecutors.duplex
	
	    function fixNull(val) {
	        return val == null ? "" : val
	    }
	    avalon.duplexHooks = {
	        checked: {
	            get: function(val, data) {
	                return !data.element.oldValue
	            }
	        },
	        string: {
	            get: function(val) { //同步到VM
	                return val
	            },
	            set: fixNull
	        },
	        "boolean": {
	            get: function(val) {
	                return val === "true"
	            },
	            set: fixNull
	        },
	        number: {
	            get: function(val, data) {
	                var number = parseFloat(val)
	                if (-val === -number) {
	                    return number
	                }
	                var arr = /strong|medium|weak/.exec(data.element.getAttribute("data-duplex-number")) || ["medium"]
	                switch (arr[0]) {
	                    case "strong":
	                        return 0
	                    case "medium":
	                        return val === "" ? "" : 0
	                    case "weak":
	                        return val
	                }
	            },
	            set: fixNull
	        }
	    }
	
	    function pipe(val, data, action, e) {
	        data.param.replace(/\w+/g, function(name) {
	            var hook = avalon.duplexHooks[name]
	            if (hook && typeof hook[action] === "function") {
	                val = hook[action](val, data)
	            }
	        })
	        return val
	    }
	
	    var TimerID, ribbon = []
	
	    avalon.tick = function(fn) {
	        if (ribbon.push(fn) === 1) {
	            TimerID = setInterval(ticker, 60)
	        }
	    }
	
	    function ticker() {
	        for (var n = ribbon.length - 1; n >= 0; n--) {
	            var el = ribbon[n]
	            if (el() === false) {
	                ribbon.splice(n, 1)
	            }
	        }
	        if (!ribbon.length) {
	            clearInterval(TimerID)
	        }
	    }
	
	    var watchValueInTimer = noop
	    new function() { // jshint ignore:line
	        try { //#272 IE9-IE11, firefox
	            var setters = {}
	            var aproto = HTMLInputElement.prototype
	            var bproto = HTMLTextAreaElement.prototype
	
	            function newSetter(value) { // jshint ignore:line
	                setters[this.tagName].call(this, value)
	                if (!this.msFocus && this.avalonSetter) {
	                    this.avalonSetter()
	                }
	            }
	            var inputProto = HTMLInputElement.prototype
	            Object.getOwnPropertyNames(inputProto) //故意引发IE6-8等浏览器报错
	            setters["INPUT"] = Object.getOwnPropertyDescriptor(aproto, "value").set
	
	            Object.defineProperty(aproto, "value", {
	                set: newSetter
	            })
	            setters["TEXTAREA"] = Object.getOwnPropertyDescriptor(bproto, "value").set
	            Object.defineProperty(bproto, "value", {
	                set: newSetter
	            })
	        } catch (e) {
	            //在chrome 43中 ms-duplex终于不需要使用定时器实现双向绑定了
	            // http://updates.html5rocks.com/2015/04/DOM-attributes-now-on-the-prototype
	            // https://docs.google.com/document/d/1jwA8mtClwxI-QJuHT7872Z0pxpZz8PBkf2bGAbsUtqs/edit?pli=1
	            watchValueInTimer = avalon.tick
	        }
	    } // jshint ignore:line
	    if (IEVersion) {
	        avalon.bind(DOC, "selectionchange", function(e) {
	            var el = DOC.activeElement || {}
	            if (!el.msFocus && el.avalonSetter) {
	                el.avalonSetter()
	            }
	        })
	    }
	    var rnoduplex = /^(file|button|reset|submit|checkbox|radio|range)$/
	        //处理radio, checkbox, text, textarea, password
	    duplexBinding.INPUT = function(elem, evaluator, data) {
	        var $type = elem.type,
	            bound = data.bound,
	            $elem = avalon(elem),
	            composing = false
	
	        function callback(value) {
	            data.changed.call(this, value, data)
	        }
	
	        function compositionStart() {
	            composing = true
	        }
	
	        function compositionEnd() {
	            composing = false;
	            setTimeout(updateVModel);
	        }
	        var IE9Value
	            //当value变化时改变model的值
	        var updateVModel = function() {
	                var val = elem.value //防止递归调用形成死循环
	                if (composing || val === IE9Value) //处理中文输入法在minlengh下引发的BUG
	                    return
	                var lastValue = data.pipe(val, data, "get")
	                if ($elem.data("duplexObserve") !== false) {
	                    IE9Value = val
	                    evaluator(lastValue)
	                    callback.call(elem, lastValue)
	                }
	            }
	            //当model变化时,它就会改变value的值
	        data.handler = function() {
	            var val = data.pipe(evaluator(), data, "set") //fix #673 #1106
	            if (val !== IE9Value) {
	                var fixCaret = false
	                if (elem.msFocus) {
	                    try {
	                        var pos = getCaret(elem)
	                        if (pos.start === pos.end) {
	                            pos = pos.start
	                            fixCaret = true
	                        }
	                    } catch (e) {}
	                }
	                elem.value = IE9Value = val
	                if (fixCaret && !elem.readyOnly) {
	                    setCaret(elem, pos, pos)
	                }
	            }
	        }
	        if (data.isChecked || $type === "radio") {
	            var IE6 = IEVersion === 6
	            updateVModel = function() {
	                if ($elem.data("duplexObserve") !== false) {
	                    var lastValue = data.pipe(elem.value, data, "get")
	                    evaluator(lastValue)
	                    callback.call(elem, lastValue)
	                }
	            }
	            data.handler = function() {
	                var val = evaluator()
	                var checked = data.isChecked ? !!val : val + "" === elem.value
	                elem.oldValue = checked
	                if (IE6) {
	                    setTimeout(function() {
	                        //IE8 checkbox, radio是使用defaultChecked控制选中状态，
	                        //并且要先设置defaultChecked后设置checked
	                        //并且必须设置延迟
	                        elem.defaultChecked = checked
	                        elem.checked = checked
	                    }, 31)
	                } else {
	                    elem.checked = checked
	                }
	            }
	            bound("click", updateVModel)
	        } else if ($type === "checkbox") {
	            updateVModel = function() {
	                if ($elem.data("duplexObserve") !== false) {
	                    var method = elem.checked ? "ensure" : "remove"
	                    var array = evaluator()
	                    if (!Array.isArray(array)) {
	                        log("ms-duplex应用于checkbox上要对应一个数组")
	                        array = [array]
	                    }
	                    var val = data.pipe(elem.value, data, "get")
	                    avalon.Array[method](array, val)
	                    callback.call(elem, array)
	                }
	            }
	
	            data.handler = function() {
	                var array = [].concat(evaluator()) //强制转换为数组
	                var val = data.pipe(elem.value, data, "get")
	                elem.checked = array.indexOf(val) > -1
	            }
	            bound(W3C ? "change" : "click", updateVModel)
	        } else {
	            var events = elem.getAttribute("data-duplex-event") || "input"
	            if (elem.attributes["data-event"]) {
	                log("data-event指令已经废弃，请改用data-duplex-event")
	            }
	
	            function delay(e) { // jshint ignore:line
	                setTimeout(function() {
	                    updateVModel(e)
	                })
	            }
	            events.replace(rword, function(name) {
	                switch (name) {
	                    case "input":
	                        if (!IEVersion) { // W3C
	                            bound("input", updateVModel)
	                                //非IE浏览器才用这个
	                            bound("compositionstart", compositionStart)
	                            bound("compositionend", compositionEnd)
	                            bound("DOMAutoComplete", updateVModel)
	                        } else {
	                            // IE下通过selectionchange事件监听IE9+点击input右边的X的清空行为，及粘贴，剪切，删除行为
	                            if (IEVersion > 8) {
	                                if (IEVersion === 9) {
	                                    //IE9删除字符后再失去焦点不会同步 #1167
	                                    bound("keyup", updateVModel)
	                                }
	                                //IE9使用propertychange无法监听中文输入改动
	                                bound("input", updateVModel)
	                            } else {
	                                //onpropertychange事件无法区分是程序触发还是用户触发
	                                //IE6-8下第一次修改时不会触发,需要使用keydown或selectionchange修正
	                                bound("propertychange", function(e) {
	                                    if (e.propertyName === "value") {
	                                        updateVModel()
	                                    }
	                                })
	                            }
	                            bound("dragend", delay)
	                                //http://www.cnblogs.com/rubylouvre/archive/2013/02/17/2914604.html
	                                //http://www.matts411.com/post/internet-explorer-9-oninput/
	                        }
	                        break
	                    default:
	                        bound(name, updateVModel)
	                        break
	                }
	            })
	
	
	            if (!rnoduplex.test(elem.type)) {
	                if (elem.type !== "hidden") {
	                    bound("focus", function() {
	                        elem.msFocus = true
	                    })
	                    bound("blur", function() {
	                        elem.msFocus = false
	                    })
	                }
	
	                elem.avalonSetter = updateVModel //#765
	                watchValueInTimer(function() {
	                    if (root.contains(elem)) {
	                        if (!elem.msFocus) {
	                            updateVModel()
	                        }
	                    } else if (!elem.msRetain) {
	                        return false
	                    }
	                })
	            }
	
	        }
	
	        avalon.injectBinding(data)
	        callback.call(elem, elem.value)
	    }
	    duplexBinding.TEXTAREA = duplexBinding.INPUT
	
	    function getCaret(ctrl) {
	        var start = NaN,
	            end = NaN
	            //https://github.com/RobinHerbots/jquery.inputmask/blob/3.x/js/inputmask.js#L1736
	        if (ctrl.setSelectionRange) {
	            start = ctrl.selectionStart
	            end = ctrl.selectionEnd
	        } else {
	            var range = document.selection.createRange()
	            start = 0 - range.duplicate().moveStart('character', -100000)
	            end = start + range.text.length
	        }
	        return {
	            start: start,
	            end: end
	        }
	    }
	
	    function setCaret(ctrl, begin, end) {
	        if (!ctrl.value || ctrl.readOnly)
	            return
	        if (ctrl.createTextRange) { //IE6-8
	            var range = ctrl.createTextRange()
	            range.collapse(true)
	            range.moveStart("character", begin)
	            range.select()
	        } else {
	            ctrl.selectionStart = begin
	            ctrl.selectionEnd = end
	        }
	    }
	    duplexBinding.SELECT = function(element, evaluator, data) {
	            var $elem = avalon(element)
	
	            function updateVModel() {
	                if ($elem.data("duplexObserve") !== false) {
	                    var val = $elem.val() //字符串或字符串数组
	                    if (Array.isArray(val)) {
	                        val = val.map(function(v) {
	                            return data.pipe(v, data, "get")
	                        })
	                    } else {
	                        val = data.pipe(val, data, "get")
	                    }
	                    if (val + "" !== element.oldValue) {
	                        evaluator(val)
	                    }
	                    data.changed.call(element, val, data)
	                }
	            }
	            data.handler = function() {
	                var val = evaluator()
	                val = val && val.$model || val
	                if (Array.isArray(val)) {
	                    if (!element.multiple) {
	                        log("ms-duplex在<select multiple=true>上要求对应一个数组")
	                    }
	                } else {
	                    if (element.multiple) {
	                        log("ms-duplex在<select multiple=false>不能对应一个数组")
	                    }
	                }
	                //必须变成字符串后才能比较
	                val = Array.isArray(val) ? val.map(String) : val + ""
	                if (val + "" !== element.oldValue) {
	                    $elem.val(val)
	                    element.oldValue = val + ""
	                }
	            }
	            data.bound("change", updateVModel)
	            element.msCallback = function() {
	                avalon.injectBinding(data)
	                data.changed.call(element, evaluator(), data)
	            }
	        }
	        // bindingHandlers.html 定义在if.js
	    bindingExecutors.html = function(val, elem, data) {
	        var isHtmlFilter = elem.nodeType !== 1
	        var parent = isHtmlFilter ? elem.parentNode : elem
	        if (!parent)
	            return
	        val = val == null ? "" : val
	        if (data.oldText !== val) {
	            data.oldText = val
	        } else {
	            return
	        }
	        if (elem.nodeType === 3) {
	            var signature = generateID("html")
	            parent.insertBefore(DOC.createComment(signature), elem)
	            data.element = DOC.createComment(signature + ":end")
	            parent.replaceChild(data.element, elem)
	            elem = data.element
	        }
	        if (typeof val !== "object") { //string, number, boolean
	            var fragment = avalon.parseHTML(String(val))
	        } else if (val.nodeType === 11) { //将val转换为文档碎片
	            fragment = val
	        } else if (val.nodeType === 1 || val.item) {
	            var nodes = val.nodeType === 1 ? val.childNodes : val.item
	            fragment = avalonFragment.cloneNode(true)
	            while (nodes[0]) {
	                fragment.appendChild(nodes[0])
	            }
	        }
	
	        nodes = avalon.slice(fragment.childNodes)
	            //插入占位符, 如果是过滤器,需要有节制地移除指定的数量,如果是html指令,直接清空
	        if (isHtmlFilter) {
	            var endValue = elem.nodeValue.slice(0, -4)
	            while (true) {
	                var node = elem.previousSibling
	                if (!node || node.nodeType === 8 && node.nodeValue === endValue) {
	                    break
	                } else {
	                    parent.removeChild(node)
	                }
	            }
	            parent.insertBefore(fragment, elem)
	        } else {
	            avalon.clearHTML(elem).appendChild(fragment)
	        }
	        scanNodeArray(nodes, data.vmodels)
	    }
	    bindingHandlers["if"] =
	        bindingHandlers.data =
	        bindingHandlers.text =
	        bindingHandlers.html =
	        function(data, vmodels) {
	            parseExprProxy(data.value, vmodels, data)
	        }
	
	    bindingExecutors["if"] = function(val, elem, data) {
	            try {
	                if (!elem.parentNode) return
	            } catch (e) {
	                return
	            }
	            if (val) { //插回DOM树
	                if (elem.nodeType === 8) {
	                    elem.parentNode.replaceChild(data.template, elem)
	                    elem.ifRemove = null
	                        //   animate.enter(data.template, elem.parentNode)
	                    elem = data.element = data.template //这时可能为null
	                }
	                if (elem.getAttribute(data.name)) {
	                    elem.removeAttribute(data.name)
	                    scanAttr(elem, data.vmodels)
	                }
	                data.rollback = null
	            } else { //移出DOM树，并用注释节点占据原位置
	                if (elem.nodeType === 1) {
	                    var node = data.element = DOC.createComment("ms-if")
	                    elem.parentNode.replaceChild(node, elem)
	                    elem.ifRemove = node
	                        //     animate.leave(elem, node.parentNode, node)
	                    data.template = elem //元素节点
	                    ifGroup.appendChild(elem)
	                    data.rollback = function() {
	                        if (elem.parentNode === ifGroup) {
	                            ifGroup.removeChild(elem)
	                        }
	                    }
	                }
	            }
	        }
	        //ms-important绑定已经在scanTag 方法中实现
	        //ms-include绑定已由ms-attr绑定实现
	
	    var rdash = /\(([^)]*)\)/
	    bindingHandlers.on = function(data, vmodels) {
	        var value = data.value
	        data.type = "on"
	        var eventType = data.param.replace(/-\d+$/, "") // ms-on-mousemove-10
	        if (typeof bindingHandlers.on[eventType + "Hook"] === "function") {
	            bindingHandlers.on[eventType + "Hook"](data)
	        }
	        if (value.indexOf("(") > 0 && value.indexOf(")") > -1) {
	            var matched = (value.match(rdash) || ["", ""])[1].trim()
	            if (matched === "" || matched === "$event") { // aaa() aaa($event)当成aaa处理
	                value = value.replace(rdash, "")
	            }
	        }
	        parseExprProxy(value, vmodels, data)
	    }
	
	    bindingExecutors.on = function(callback, elem, data) {
	        callback = function(e) {
	            var fn = data.evaluator || noop
	            return fn.apply(this, data.args.concat(e))
	        }
	        var eventType = data.param.replace(/-\d+$/, "") // ms-on-mousemove-10
	        if (eventType === "scan") {
	            callback.call(elem, {
	                type: eventType
	            })
	        } else if (typeof data.specialBind === "function") {
	            data.specialBind(elem, callback)
	        } else {
	            var removeFn = avalon.bind(elem, eventType, callback)
	        }
	        data.rollback = function() {
	            if (typeof data.specialUnbind === "function") {
	                data.specialUnbind()
	            } else {
	                avalon.unbind(elem, eventType, removeFn)
	            }
	        }
	    }
	    bindingHandlers.repeat = function(data, vmodels) {
	        var type = data.type
	        parseExprProxy(data.value, vmodels, data, 1)
	        data.proxies = []
	        var freturn = false
	        try {
	            var $repeat = data.$repeat = data.evaluator.apply(0, data.args || [])
	            var xtype = avalon.type($repeat)
	            if (xtype !== "object" && xtype !== "array") {
	                freturn = true
	                avalon.log("warning:" + data.value + "只能是对象或数组")
	            } else {
	                data.xtype = xtype
	            }
	        } catch (e) {
	            freturn = true
	        }
	        var arr = data.value.split(".") || []
	        if (arr.length > 1) {
	            arr.pop()
	            var n = arr[0]
	            for (var i = 0, v; v = vmodels[i++];) {
	                if (v && v.hasOwnProperty(n)) {
	                    var events = v[n].$events || {}
	                    events[subscribers] = events[subscribers] || []
	                    events[subscribers].push(data)
	                    break
	                }
	            }
	        }
	
	        var oldHandler = data.handler
	        data.handler = noop
	        avalon.injectBinding(data)
	        data.handler = oldHandler
	
	        var elem = data.element
	        if (elem.nodeType === 1) {
	            elem.removeAttribute(data.name)
	            data.sortedCallback = getBindingCallback(elem, "data-with-sorted", vmodels)
	            data.renderedCallback = getBindingCallback(elem, "data-" + type + "-rendered", vmodels)
	            var signature = generateID(type)
	            var start = DOC.createComment(signature)
	            var end = DOC.createComment(signature + ":end")
	            data.signature = signature
	            data.template = avalonFragment.cloneNode(false)
	            if (type === "repeat") {
	                var parent = elem.parentNode
	                parent.replaceChild(end, elem)
	                parent.insertBefore(start, end)
	                data.template.appendChild(elem)
	            } else {
	                while (elem.firstChild) {
	                    data.template.appendChild(elem.firstChild)
	                }
	                elem.appendChild(start)
	                elem.appendChild(end)
	            }
	            data.element = end
	            data.handler = bindingExecutors.repeat
	            data.rollback = function() {
	                var elem = data.element
	                if (!elem)
	                    return
	                data.handler("clear")
	            }
	        }
	
	        if (freturn) {
	            return
	        }
	
	        data.$outer = {}
	        var check0 = "$key"
	        var check1 = "$val"
	        if (Array.isArray($repeat)) {
	            check0 = "$first"
	            check1 = "$last"
	        }
	
	        for (i = 0; v = vmodels[i++];) {
	            if (v.hasOwnProperty(check0) && v.hasOwnProperty(check1)) {
	                data.$outer = v
	                break
	            }
	        }
	        var $events = $repeat.$events
	        var $list = ($events || {})[subscribers]
	        injectDependency($list, data)
	        if (xtype === "object") {
	            data.handler("append")
	        } else if ($repeat.length) {
	            data.handler("add", 0, $repeat.length)
	        }
	    }
	
	    bindingExecutors.repeat = function(method, pos, el) {
	        var data = this
	        if (!method && data.xtype) {
	            var old = data.$repeat
	            var neo = data.evaluator.apply(0, data.args || [])
	
	            if (data.xtype === "array") {
	                if (old.length === neo.length) {
	                    if (old !== neo && old.length > 0) {
	                        bindingExecutors.repeat.call(this, 'clear', pos, el)
	                    } else {
	                        return
	                    }
	                }
	                method = "add"
	                pos = 0
	                data.$repeat = neo
	                el = neo.length
	            } else {
	                if (keysVM(old).join(";;") === keysVM(neo).join(";;")) {
	                    return
	                }
	                method = "append"
	                data.$repeat = neo
	            }
	        }
	        if (method) {
	            var start, fragment
	            var end = data.element
	            var comments = getComments(data)
	            var parent = end.parentNode
	            var proxies = data.proxies
	            var transation = avalonFragment.cloneNode(false)
	            switch (method) {
	                case "add": //在pos位置后添加el数组（pos为插入位置,el为要插入的个数）
	                    var n = pos + el
	                    var fragments = []
	                    for (var i = pos; i < n; i++) {
	                        var proxy = eachProxyAgent(i, data)
	                        proxies.splice(i, 0, proxy)
	                        shimController(data, transation, proxy, fragments)
	                    }
	                    parent.insertBefore(transation, comments[pos] || end)
	                    for (i = 0; fragment = fragments[i++];) {
	                        scanNodeArray(fragment.nodes, fragment.vmodels)
	                        fragment.nodes = fragment.vmodels = null
	                    }
	
	                    break
	                case "del": //将pos后的el个元素删掉(pos, el都是数字)
	                    sweepNodes(comments[pos], comments[pos + el] || end)
	                    var removed = proxies.splice(pos, el)
	                    recycleProxies(removed, "each")
	                    break
	                case "clear":
	                    start = comments[0]
	                    if (start) {
	                        sweepNodes(start, end)
	                        if (data.xtype === "object") {
	                            parent.insertBefore(start, end)
	                        } else {
	                            recycleProxies(proxies, "each")
	                        }
	                    }
	                    break
	                case "move":
	                    start = comments[0]
	                    if (start) {
	                        var signature = start.nodeValue
	                        var rooms = []
	                        var room = [],
	                            node
	                        sweepNodes(start, end, function() {
	                            room.unshift(this)
	                            if (this.nodeValue === signature) {
	                                rooms.unshift(room)
	                                room = []
	                            }
	                        })
	                        sortByIndex(rooms, pos)
	                        sortByIndex(proxies, pos)
	                        while (room = rooms.shift()) {
	                            while (node = room.shift()) {
	                                transation.appendChild(node)
	                            }
	                        }
	                        parent.insertBefore(transation, end)
	                    }
	                    break
	                case "index": //将proxies中的第pos个起的所有元素重新索引
	                    var last = proxies.length - 1
	                    for (; el = proxies[pos]; pos++) {
	                        el.$index = pos
	                        el.$first = pos === 0
	                        el.$last = pos === last
	                    }
	                    return
	                case "set": //将proxies中的第pos个元素的VM设置为el（pos为数字，el任意）
	                    proxy = proxies[pos]
	                    if (proxy) {
	                        fireDependencies(proxy.$events[data.param || "el"])
	                    }
	                    break
	                case "append":
	                    var object = data.$repeat //原来第2参数， 被循环对象
	                    var pool = Array.isArray(proxies) || !proxies ? {} : proxies //代理对象组成的hash
	                    data.proxies = pool
	                    var keys = []
	                    fragments = []
	                    for (var key in pool) {
	                        if (!object.hasOwnProperty(key)) {
	                            proxyRecycler(pool[key], withProxyPool) //去掉之前的代理VM
	                            delete(pool[key])
	                        }
	                    }
	                    for (key in object) { //得到所有键名
	                        if (object.hasOwnProperty(key) && key !== "hasOwnProperty") {
	                            keys.push(key)
	                        }
	                    }
	                    if (data.sortedCallback) { //如果有回调，则让它们排序
	                        var keys2 = data.sortedCallback.call(parent, keys)
	                        if (keys2 && Array.isArray(keys2) && keys2.length) {
	                            keys = keys2
	                        }
	                    }
	                    for (i = 0; key = keys[i++];) {
	                        if (key !== "hasOwnProperty") {
	                            pool[key] = withProxyAgent(pool[key], key, data)
	                            shimController(data, transation, pool[key], fragments)
	                        }
	                    }
	
	                    parent.insertBefore(transation, end)
	                    for (i = 0; fragment = fragments[i++];) {
	                        scanNodeArray(fragment.nodes, fragment.vmodels)
	                        fragment.nodes = fragment.vmodels = null
	                    }
	                    break
	            }
	            if (!data.$repeat || data.$repeat.hasOwnProperty("$lock")) //IE6-8 VBScript对象会报错, 有时候data.$repeat不存在
	                return
	            if (method === "clear")
	                method = "del"
	            var callback = data.renderedCallback || noop,
	                args = arguments
	            if (parent.oldValue && parent.tagName === "SELECT") { //fix #503
	                avalon(parent).val(parent.oldValue.split(","))
	            }
	            callback.apply(parent, args)
	        }
	    }
	    "with,each".replace(rword, function(name) {
	        bindingHandlers[name] = bindingHandlers.repeat
	    })
	
	    function shimController(data, transation, proxy, fragments) {
	        var content = data.template.cloneNode(true)
	        var nodes = avalon.slice(content.childNodes)
	        content.insertBefore(DOC.createComment(data.signature), content.firstChild)
	        transation.appendChild(content)
	        var nv = [proxy].concat(data.vmodels)
	        var fragment = {
	            nodes: nodes,
	            vmodels: nv
	        }
	        fragments.push(fragment)
	    }
	
	    function getComments(data) {
	        var ret = []
	        var nodes = data.element.parentNode.childNodes
	        for (var i = 0, node; node = nodes[i++];) {
	            if (node.nodeValue === data.signature) {
	                ret.push(node)
	            } else if (node.nodeValue === data.signature + ":end") {
	                break
	            }
	        }
	        return ret
	    }
	
	
	    //移除掉start与end之间的节点(保留end)
	    function sweepNodes(start, end, callback) {
	        while (true) {
	            var node = end.previousSibling
	            if (!node)
	                break
	            node.parentNode.removeChild(node)
	            callback && callback.call(node)
	            if (node === start) {
	                break
	            }
	        }
	    }
	
	    // 为ms-each,ms-with, ms-repeat会创建一个代理VM，
	    // 通过它们保持一个下上文，让用户能调用$index,$first,$last,$remove,$key,$val,$outer等属性与方法
	    // 所有代理VM的产生,消费,收集,存放通过xxxProxyFactory,xxxProxyAgent, recycleProxies,xxxProxyPool实现
	    var withProxyPool = []
	
	    function withProxyFactory() {
	        var proxy = modelFactory({
	            $key: "",
	            $outer: {},
	            $host: {},
	            $val: {
	                get: function() {
	                    return this.$host[this.$key]
	                },
	                set: function(val) {
	                    this.$host[this.$key] = val
	                }
	            }
	        }, {
	            $val: 1
	        })
	        proxy.$id = generateID("$proxy$with")
	        return proxy
	    }
	
	    function withProxyAgent(proxy, key, data) {
	        proxy = proxy || withProxyPool.pop()
	        if (!proxy) {
	            proxy = withProxyFactory()
	        } else {
	            proxy.$reinitialize()
	        }
	        var host = data.$repeat
	        proxy.$key = key
	
	        proxy.$host = host
	        proxy.$outer = data.$outer
	        if (host.$events) {
	            proxy.$events.$val = host.$events[key]
	        } else {
	            proxy.$events = {}
	        }
	        return proxy
	    }
	
	
	    function recycleProxies(proxies) {
	        eachProxyRecycler(proxies)
	    }
	
	    function eachProxyRecycler(proxies) {
	        proxies.forEach(function(proxy) {
	            proxyRecycler(proxy, eachProxyPool)
	        })
	        proxies.length = 0
	    }
	
	
	    var eachProxyPool = []
	
	    function eachProxyFactory(name) {
	        var source = {
	            $host: [],
	            $outer: {},
	            $index: 0,
	            $first: false,
	            $last: false,
	            $remove: avalon.noop
	        }
	        source[name] = {
	            get: function() {
	                var e = this.$events
	                var array = e.$index
	                e.$index = e[name] //#817 通过$index为el收集依赖
	                try {
	                    return this.$host[this.$index]
	                } finally {
	                    e.$index = array
	                }
	            },
	            set: function(val) {
	                try {
	                    var e = this.$events
	                    var array = e.$index
	                    e.$index = []
	                    this.$host.set(this.$index, val)
	                } finally {
	                    e.$index = array
	                }
	            }
	        }
	        var second = {
	            $last: 1,
	            $first: 1,
	            $index: 1
	        }
	        var proxy = modelFactory(source, second)
	        proxy.$id = generateID("$proxy$each")
	        return proxy
	    }
	
	    function eachProxyAgent(index, data) {
	        var param = data.param || "el",
	            proxy
	        for (var i = 0, n = eachProxyPool.length; i < n; i++) {
	            var candidate = eachProxyPool[i]
	            if (candidate && candidate.hasOwnProperty(param)) {
	                proxy = candidate
	                eachProxyPool.splice(i, 1)
	            }
	        }
	        if (!proxy) {
	            proxy = eachProxyFactory(param)
	        }
	        var host = data.$repeat
	        var last = host.length - 1
	        proxy.$index = index
	        proxy.$first = index === 0
	        proxy.$last = index === last
	        proxy.$host = host
	        proxy.$outer = data.$outer
	        proxy.$remove = function() {
	            return host.removeAt(proxy.$index)
	        }
	        return proxy
	    }
	
	
	    function proxyRecycler(proxy, proxyPool) {
	        for (var i in proxy.$events) {
	            var arr = proxy.$events[i]
	            if (Array.isArray(arr)) {
	                arr.forEach(function(data) {
	                        if (typeof data === "object")
	                            disposeData(data)
	                    }) // jshint ignore:line
	                arr.length = 0
	            }
	        }
	        proxy.$host = proxy.$outer = {}
	        if (proxyPool.unshift(proxy) > kernel.maxRepeatSize) {
	            proxyPool.pop()
	        }
	    }
	
	    /*********************************************************************
	     *                         各种指令                                  *
	     **********************************************************************/
	    //ms-skip绑定已经在scanTag 方法中实现
	    // bindingHandlers.text 定义在if.js
	    bindingExecutors.text = function(val, elem) {
	        val = val == null ? "" : val //不在页面上显示undefined null
	        if (elem.nodeType === 3) { //绑定在文本节点上
	            try { //IE对游离于DOM树外的节点赋值会报错
	                elem.data = val
	            } catch (e) {}
	        } else { //绑定在特性节点上
	            if ("textContent" in elem) {
	                elem.textContent = val
	            } else {
	                elem.innerText = val
	            }
	        }
	    }
	
	    function parseDisplay(nodeName, val) {
	        //用于取得此类标签的默认display值
	        var key = "_" + nodeName
	        if (!parseDisplay[key]) {
	            var node = DOC.createElement(nodeName)
	            root.appendChild(node)
	            if (W3C) {
	                val = getComputedStyle(node, null).display
	            } else {
	                val = node.currentStyle.display
	            }
	            root.removeChild(node)
	            parseDisplay[key] = val
	        }
	        return parseDisplay[key]
	    }
	
	    avalon.parseDisplay = parseDisplay
	
	    bindingHandlers.visible = function(data, vmodels) {
	        parseExprProxy(data.value, vmodels, data)
	    }
	
	    bindingExecutors.visible = function(val, elem, binding) {
	        if (val) {
	            elem.style.display = binding.display || ""
	            if (avalon(elem).css("display") === "none") {
	                elem.style.display = binding.display = parseDisplay(elem.nodeName)
	            }
	        } else {
	            elem.style.display = "none"
	        }
	    }
	    bindingHandlers.widget = function(data, vmodels) {
	        var args = data.value.match(rword)
	        var elem = data.element
	        var widget = args[0]
	        var id = args[1]
	        if (!id || id === "$") { //没有定义或为$时，取组件名+随机数
	            id = generateID(widget)
	        }
	        var optName = args[2] || widget //没有定义，取组件名
	        var constructor = avalon.ui[widget]
	        if (typeof constructor === "function") { //ms-widget="tabs,tabsAAA,optname"
	            vmodels = elem.vmodels || vmodels
	            for (var i = 0, v; v = vmodels[i++];) {
	                if (v.hasOwnProperty(optName) && typeof v[optName] === "object") {
	                    var vmOptions = v[optName]
	                    vmOptions = vmOptions.$model || vmOptions
	                    break
	                }
	            }
	            if (vmOptions) {
	                var wid = vmOptions[widget + "Id"]
	                if (typeof wid === "string") {
	                    log("warning!不再支持" + widget + "Id")
	                    id = wid
	                }
	            }
	            //抽取data-tooltip-text、data-tooltip-attr属性，组成一个配置对象
	            var widgetData = avalon.getWidgetData(elem, widget)
	            data.value = [widget, id, optName].join(",")
	            data[widget + "Id"] = id
	            data.evaluator = noop
	            elem.msData["ms-widget-id"] = id
	            var options = data[widget + "Options"] = avalon.mix({}, constructor.defaults, vmOptions || {}, widgetData)
	            elem.removeAttribute("ms-widget")
	            var vmodel = constructor(elem, data, vmodels) || {} //防止组件不返回VM
	            if (vmodel.$id) {
	                avalon.vmodels[id] = vmodel
	                createSignalTower(elem, vmodel)
	                try {
	                    vmodel.$init(function() {
	                        avalon.scan(elem, [vmodel].concat(vmodels))
	                        if (typeof options.onInit === "function") {
	                            options.onInit.call(elem, vmodel, options, vmodels)
	                        }
	                    })
	                } catch (e) {
	                    log(e)
	                }
	                data.rollback = function() {
	                    try {
	                        vmodel.$remove()
	                        vmodel.widgetElement = null // 放到$remove后边
	                    } catch (e) {}
	                    elem.msData = {}
	                    delete avalon.vmodels[vmodel.$id]
	                }
	                injectDisposeQueue(data, widgetList)
	                if (window.chrome) {
	                    elem.addEventListener("DOMNodeRemovedFromDocument", function() {
	                        setTimeout(rejectDisposeQueue)
	                    })
	                }
	            } else {
	                avalon.scan(elem, vmodels)
	            }
	        } else if (vmodels.length) { //如果该组件还没有加载，那么保存当前的vmodels
	            elem.vmodels = vmodels
	        }
	    }
	    var widgetList = []
	        //不存在 bindingExecutors.widget
	        /*********************************************************************
	         *                             自带过滤器                            *
	         **********************************************************************/
	    var rscripts = /<script[^>]*>([\S\s]*?)<\/script\s*>/gim
	    var ron = /\s+(on[^=\s]+)(?:=("[^"]*"|'[^']*'|[^\s>]+))?/g
	    var ropen = /<\w+\b(?:(["'])[^"]*?(\1)|[^>])*>/ig
	    var rsanitize = {
	        a: /\b(href)\=("javascript[^"]*"|'javascript[^']*')/ig,
	        img: /\b(src)\=("javascript[^"]*"|'javascript[^']*')/ig,
	        form: /\b(action)\=("javascript[^"]*"|'javascript[^']*')/ig
	    }
	    var rsurrogate = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g
	    var rnoalphanumeric = /([^\#-~| |!])/g;
	
	    function numberFormat(number, decimals, point, thousands) {
	        //form http://phpjs.org/functions/number_format/
	        //number	必需，要格式化的数字
	        //decimals	可选，规定多少个小数位。
	        //point	可选，规定用作小数点的字符串（默认为 . ）。
	        //thousands	可选，规定用作千位分隔符的字符串（默认为 , ），如果设置了该参数，那么所有其他参数都是必需的。
	        number = (number + '')
	            .replace(/[^0-9+\-Ee.]/g, '')
	        var n = !isFinite(+number) ? 0 : +number,
	            prec = !isFinite(+decimals) ? 3 : Math.abs(decimals),
	            sep = thousands || ",",
	            dec = point || ".",
	            s = '',
	            toFixedFix = function(n, prec) {
	                var k = Math.pow(10, prec)
	                return '' + (Math.round(n * k) / k)
	                    .toFixed(prec)
	            }
	            // Fix for IE parseFloat(0.55).toFixed(0) = 0;
	        s = (prec ? toFixedFix(n, prec) : '' + Math.round(n))
	            .split('.')
	        if (s[0].length > 3) {
	            s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep)
	        }
	        if ((s[1] || '')
	            .length < prec) {
	            s[1] = s[1] || ''
	            s[1] += new Array(prec - s[1].length + 1)
	                .join('0')
	        }
	        return s.join(dec)
	    }
	
	
	    var filters = avalon.filters = {
	            uppercase: function(str) {
	                return str.toUpperCase()
	            },
	            lowercase: function(str) {
	                return str.toLowerCase()
	            },
	            truncate: function(str, length, truncation) {
	                //length，新字符串长度，truncation，新字符串的结尾的字段,返回新字符串
	                length = length || 30
	                truncation = typeof truncation === "string" ? truncation : "..."
	                return str.length > length ? str.slice(0, length - truncation.length) + truncation : String(str)
	            },
	            $filter: function(val) {
	                for (var i = 1, n = arguments.length; i < n; i++) {
	                    var array = arguments[i]
	                    var fn = avalon.filters[array[0]]
	                    if (typeof fn === "function") {
	                        var arr = [val].concat(array.slice(1))
	                        val = fn.apply(null, arr)
	                    }
	                }
	                return val
	            },
	            camelize: camelize,
	            //https://www.owasp.org/index.php/XSS_Filter_Evasion_Cheat_Sheet
	            //    <a href="javasc&NewLine;ript&colon;alert('XSS')">chrome</a> 
	            //    <a href="data:text/html;base64, PGltZyBzcmM9eCBvbmVycm9yPWFsZXJ0KDEpPg==">chrome</a>
	            //    <a href="jav	ascript:alert('XSS');">IE67chrome</a>
	            //    <a href="jav&#x09;ascript:alert('XSS');">IE67chrome</a>
	            //    <a href="jav&#x0A;ascript:alert('XSS');">IE67chrome</a>
	            sanitize: function(str) {
	                return str.replace(rscripts, "").replace(ropen, function(a, b) {
	                    var match = a.toLowerCase().match(/<(\w+)\s/)
	                    if (match) { //处理a标签的href属性，img标签的src属性，form标签的action属性
	                        var reg = rsanitize[match[1]]
	                        if (reg) {
	                            a = a.replace(reg, function(s, name, value) {
	                                var quote = value.charAt(0)
	                                return name + "=" + quote + "javascript:void(0)" + quote // jshint ignore:line
	                            })
	                        }
	                    }
	                    return a.replace(ron, " ").replace(/\s+/g, " ") //移除onXXX事件
	                })
	            },
	            escape: function(str) {
	                //将字符串经过 str 转义得到适合在页面中显示的内容, 例如替换 < 为 &lt 
	                return String(str).
	                replace(/&/g, '&amp;').
	                replace(rsurrogate, function(value) {
	                    var hi = value.charCodeAt(0)
	                    var low = value.charCodeAt(1)
	                    return '&#' + (((hi - 0xD800) * 0x400) + (low - 0xDC00) + 0x10000) + ';'
	                }).
	                replace(rnoalphanumeric, function(value) {
	                    return '&#' + value.charCodeAt(0) + ';'
	                }).
	                replace(/</g, '&lt;').
	                replace(/>/g, '&gt;')
	            },
	            currency: function(amount, symbol, fractionSize) {
	                return (symbol || "\uFFE5") + numberFormat(amount, isFinite(fractionSize) ? fractionSize : 2)
	            },
	            number: numberFormat
	        }
	        /*
	         'yyyy': 4 digit representation of year (e.g. AD 1 => 0001, AD 2010 => 2010)
	         'yy': 2 digit representation of year, padded (00-99). (e.g. AD 2001 => 01, AD 2010 => 10)
	         'y': 1 digit representation of year, e.g. (AD 1 => 1, AD 199 => 199)
	         'MMMM': Month in year (January-December)
	         'MMM': Month in year (Jan-Dec)
	         'MM': Month in year, padded (01-12)
	         'M': Month in year (1-12)
	         'dd': Day in month, padded (01-31)
	         'd': Day in month (1-31)
	         'EEEE': Day in Week,(Sunday-Saturday)
	         'EEE': Day in Week, (Sun-Sat)
	         'HH': Hour in day, padded (00-23)
	         'H': Hour in day (0-23)
	         'hh': Hour in am/pm, padded (01-12)
	         'h': Hour in am/pm, (1-12)
	         'mm': Minute in hour, padded (00-59)
	         'm': Minute in hour (0-59)
	         'ss': Second in minute, padded (00-59)
	         's': Second in minute (0-59)
	         'a': am/pm marker
	         'Z': 4 digit (+sign) representation of the timezone offset (-1200-+1200)
	         format string can also be one of the following predefined localizable formats:
	         
	         'medium': equivalent to 'MMM d, y h:mm:ss a' for en_US locale (e.g. Sep 3, 2010 12:05:08 pm)
	         'short': equivalent to 'M/d/yy h:mm a' for en_US locale (e.g. 9/3/10 12:05 pm)
	         'fullDate': equivalent to 'EEEE, MMMM d,y' for en_US locale (e.g. Friday, September 3, 2010)
	         'longDate': equivalent to 'MMMM d, y' for en_US locale (e.g. September 3, 2010
	         'mediumDate': equivalent to 'MMM d, y' for en_US locale (e.g. Sep 3, 2010)
	         'shortDate': equivalent to 'M/d/yy' for en_US locale (e.g. 9/3/10)
	         'mediumTime': equivalent to 'h:mm:ss a' for en_US locale (e.g. 12:05:08 pm)
	         'shortTime': equivalent to 'h:mm a' for en_US locale (e.g. 12:05 pm)
	         */
	    new function() { // jshint ignore:line
	        function toInt(str) {
	            return parseInt(str, 10) || 0
	        }
	
	        function padNumber(num, digits, trim) {
	            var neg = ""
	            if (num < 0) {
	                neg = '-'
	                num = -num
	            }
	            num = "" + num
	            while (num.length < digits)
	                num = "0" + num
	            if (trim)
	                num = num.substr(num.length - digits)
	            return neg + num
	        }
	
	        function dateGetter(name, size, offset, trim) {
	            return function(date) {
	                var value = date["get" + name]()
	                if (offset > 0 || value > -offset)
	                    value += offset
	                if (value === 0 && offset === -12) {
	                    value = 12
	                }
	                return padNumber(value, size, trim)
	            }
	        }
	
	        function dateStrGetter(name, shortForm) {
	            return function(date, formats) {
	                var value = date["get" + name]()
	                var get = (shortForm ? ("SHORT" + name) : name).toUpperCase()
	                return formats[get][value]
	            }
	        }
	
	        function timeZoneGetter(date) {
	            var zone = -1 * date.getTimezoneOffset()
	            var paddedZone = (zone >= 0) ? "+" : ""
	            paddedZone += padNumber(Math[zone > 0 ? "floor" : "ceil"](zone / 60), 2) + padNumber(Math.abs(zone % 60), 2)
	            return paddedZone
	        }
	        //取得上午下午
	
	        function ampmGetter(date, formats) {
	            return date.getHours() < 12 ? formats.AMPMS[0] : formats.AMPMS[1]
	        }
	        var DATE_FORMATS = {
	            yyyy: dateGetter("FullYear", 4),
	            yy: dateGetter("FullYear", 2, 0, true),
	            y: dateGetter("FullYear", 1),
	            MMMM: dateStrGetter("Month"),
	            MMM: dateStrGetter("Month", true),
	            MM: dateGetter("Month", 2, 1),
	            M: dateGetter("Month", 1, 1),
	            dd: dateGetter("Date", 2),
	            d: dateGetter("Date", 1),
	            HH: dateGetter("Hours", 2),
	            H: dateGetter("Hours", 1),
	            hh: dateGetter("Hours", 2, -12),
	            h: dateGetter("Hours", 1, -12),
	            mm: dateGetter("Minutes", 2),
	            m: dateGetter("Minutes", 1),
	            ss: dateGetter("Seconds", 2),
	            s: dateGetter("Seconds", 1),
	            sss: dateGetter("Milliseconds", 3),
	            EEEE: dateStrGetter("Day"),
	            EEE: dateStrGetter("Day", true),
	            a: ampmGetter,
	            Z: timeZoneGetter
	        }
	        var rdateFormat = /((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/
	        var raspnetjson = /^\/Date\((\d+)\)\/$/
	        filters.date = function(date, format) {
	            var locate = filters.date.locate,
	                text = "",
	                parts = [],
	                fn, match
	            format = format || "mediumDate"
	            format = locate[format] || format
	            if (typeof date === "string") {
	                if (/^\d+$/.test(date)) {
	                    date = toInt(date)
	                } else if (raspnetjson.test(date)) {
	                    date = +RegExp.$1
	                } else {
	                    var trimDate = date.trim()
	                    var dateArray = [0, 0, 0, 0, 0, 0, 0]
	                    var oDate = new Date(0)
	                        //取得年月日
	                    trimDate = trimDate.replace(/^(\d+)\D(\d+)\D(\d+)/, function(_, a, b, c) {
	                        var array = c.length === 4 ? [c, a, b] : [a, b, c]
	                        dateArray[0] = toInt(array[0]) //年
	                        dateArray[1] = toInt(array[1]) - 1 //月
	                        dateArray[2] = toInt(array[2]) //日
	                        return ""
	                    })
	                    var dateSetter = oDate.setFullYear
	                    var timeSetter = oDate.setHours
	                    trimDate = trimDate.replace(/[T\s](\d+):(\d+):?(\d+)?\.?(\d)?/, function(_, a, b, c, d) {
	                        dateArray[3] = toInt(a) //小时
	                        dateArray[4] = toInt(b) //分钟
	                        dateArray[5] = toInt(c) //秒
	                        if (d) { //毫秒
	                            dateArray[6] = Math.round(parseFloat("0." + d) * 1000)
	                        }
	                        return ""
	                    })
	                    var tzHour = 0
	                    var tzMin = 0
	                    trimDate = trimDate.replace(/Z|([+-])(\d\d):?(\d\d)/, function(z, symbol, c, d) {
	                        dateSetter = oDate.setUTCFullYear
	                        timeSetter = oDate.setUTCHours
	                        if (symbol) {
	                            tzHour = toInt(symbol + c)
	                            tzMin = toInt(symbol + d)
	                        }
	                        return ""
	                    })
	
	                    dateArray[3] -= tzHour
	                    dateArray[4] -= tzMin
	                    dateSetter.apply(oDate, dateArray.slice(0, 3))
	                    timeSetter.apply(oDate, dateArray.slice(3))
	                    date = oDate
	                }
	            }
	            if (typeof date === "number") {
	                date = new Date(date)
	            }
	            if (avalon.type(date) !== "date") {
	                return
	            }
	            while (format) {
	                match = rdateFormat.exec(format)
	                if (match) {
	                    parts = parts.concat(match.slice(1))
	                    format = parts.pop()
	                } else {
	                    parts.push(format)
	                    format = null
	                }
	            }
	            parts.forEach(function(value) {
	                fn = DATE_FORMATS[value]
	                text += fn ? fn(date, locate) : value.replace(/(^'|'$)/g, "").replace(/''/g, "'")
	            })
	            return text
	        }
	        var locate = {
	            AMPMS: {
	                0: "上午",
	                1: "下午"
	            },
	            DAY: {
	                0: "星期日",
	                1: "星期一",
	                2: "星期二",
	                3: "星期三",
	                4: "星期四",
	                5: "星期五",
	                6: "星期六"
	            },
	            MONTH: {
	                0: "1月",
	                1: "2月",
	                2: "3月",
	                3: "4月",
	                4: "5月",
	                5: "6月",
	                6: "7月",
	                7: "8月",
	                8: "9月",
	                9: "10月",
	                10: "11月",
	                11: "12月"
	            },
	            SHORTDAY: {
	                "0": "周日",
	                "1": "周一",
	                "2": "周二",
	                "3": "周三",
	                "4": "周四",
	                "5": "周五",
	                "6": "周六"
	            },
	            fullDate: "y年M月d日EEEE",
	            longDate: "y年M月d日",
	            medium: "yyyy-M-d H:mm:ss",
	            mediumDate: "yyyy-M-d",
	            mediumTime: "H:mm:ss",
	            "short": "yy-M-d ah:mm",
	            shortDate: "yy-M-d",
	            shortTime: "ah:mm"
	        }
	        locate.SHORTMONTH = locate.MONTH
	        filters.date.locate = locate
	    } // jshint ignore:line
	    /*********************************************************************
	     *                     END                                  *
	     **********************************************************************/
	    new function() {
	        avalon.config({
	            loader: false
	        })
	        var fns = [],
	            loaded = DOC.readyState === "complete",
	            fn
	
	        function flush(f) {
	            loaded = 1
	            while (f = fns.shift())
	                f()
	        }
	
	        avalon.bind(DOC, "DOMContentLoaded", fn = function() {
	            avalon.unbind(DOC, "DOMContentLoaded", fn)
	            flush()
	        })
	
	        var id = setInterval(function() {
	            if (document.readyState === "complete" && document.body) {
	                clearInterval(id)
	                flush()
	            }
	        }, 50)
	
	        avalon.ready = function(fn) {
	            loaded ? fn(avalon) : fns.push(fn)
	        }
	        avalon.ready(function() {
	            avalon.scan(DOC.body)
	        })
	    }
	    // Register as a named AMD module, since avalon can be concatenated with other
	    // files that may use define, but not via a proper concatenation script that
	    // understands anonymous AMD modules. A named AMD is safest and most robust
	    // way to register. Lowercase avalon is used because AMD module names are
	    // derived from file names, and Avalon is normally delivered in a lowercase
	    // file name. Do this after creating the global so that if an AMD module wants
	    // to call noConflict to hide this version of avalon, it will work.
	
	    // Note that for maximum portability, libraries that are not avalon should
	    // declare themselves as anonymous modules, and avoid setting a global if an
	    // AMD loader is present. avalon is a special case. For more information, see
	    // https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
	            return avalon
	        }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
	    }
	    // Map over avalon in case of overwrite
	    var _avalon = window.avalon
	    avalon.noConflict = function(deep) {
	            if (deep && window.avalon === avalon) {
	                window.avalon = _avalon
	            }
	            return avalon
	        }
	        // Expose avalon identifiers, even in AMD
	        // and CommonJS for browser emulators
	    if (noGlobal === void 0) {
	        window.avalon = avalon
	    }
	
	    return avalon
	
	}));

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;//=========================================
	//  数据交互模块 by 司徒正美
	//==========================================
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2), __webpack_require__(13)], __WEBPACK_AMD_DEFINE_RESULT__ = function(avalon) {
	    var global = window || (0, eval)("this")
	    var DOC = global.document
	    var encode = encodeURIComponent
	    var decode = decodeURIComponent
	
	    var rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/
	    var rheaders = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg
	    var rnoContent = /^(?:GET|HEAD)$/
	    var rprotocol = /^\/\//
	    var rhash = /#.*$/
	    var rquery = /\?/
	    var rjsonp = /(=)\?(?=&|$)|\?\?/
	    var r20 = /%20/g
	
	    var originAnchor = document.createElement("a")
	    originAnchor.href = location.href
	    //告诉WEB服务器自己接受什么介质类型，*/* 表示任何类型，type/* 表示该类型下的所有子类型，type/sub-type。
	    var accepts = {
	        xml: "application/xml, text/xml",
	        html: "text/html",
	        text: "text/plain",
	        json: "application/json, text/javascript",
	        script: "text/javascript, application/javascript",
	        "*": ["*/"] + ["*"] //避免被压缩掉
	    }
	
	    function IE() {
	        if (window.VBArray) {
	            var mode = document.documentMode
	            return mode ? mode : window.XMLHttpRequest ? 7 : 6
	        } else {
	            return 0
	        }
	    }
	    var useOnload = IE() === 0 || IE() > 8
	
	    function parseJS(code) {
	        var indirect = eval
	        code = code.trim()
	        if (code) {
	            if (code.indexOf("use strict") === 1) {
	                var script = document.createElement("script")
	                script.text = code
	                head.appendChild(script).parentNode.removeChild(script)
	            } else {
	                indirect(code)
	            }
	        }
	    }
	
	    if (!String.prototype.startsWith) {
	        String.prototype.startsWith = function(searchString, position) {
	            position = position || 0
	            return this.lastIndexOf(searchString, position) === position
	        }
	    }
	
	    var head = DOC.getElementsByTagName("head")[0] //HEAD元素
	    var isLocal = false
	    try {
	        //在IE下如果重置了document.domain，直接访问window.location会抛错，但用document.URL就ok了
	        //http://www.cnblogs.com/WuQiang/archive/2012/09/21/2697474.html
	        isLocal = rlocalProtocol.test(location.protocol)
	    } catch (e) {}
	
	    new function() {
	        //http://www.cnblogs.com/rubylouvre/archive/2010/04/20/1716486.html
	        var s = ["XMLHttpRequest",
	            "ActiveXObject('MSXML2.XMLHTTP.6.0')",
	            "ActiveXObject('MSXML2.XMLHTTP.3.0')",
	            "ActiveXObject('MSXML2.XMLHTTP')",
	            "ActiveXObject('Microsoft.XMLHTTP')"
	        ]
	        s[0] = IE() < 8 && IE() !== 0 && isLocal ? "!" : s[0] //IE下只能使用ActiveXObject
	        for (var i = 0, axo; axo = s[i++];) {
	            try {
	                if (eval("new " + axo)) {
	                    avalon.xhr = new Function("return new " + axo)
	                    break
	                }
	            } catch (e) {}
	        }}
	    var supportCors = "withCredentials" in avalon.xhr()
	
	
	
	
	    function parseXML(data, xml, tmp) {
	        try {
	            var mode = document.documentMode
	            if (window.DOMParser && (!mode || mode > 8)) { // Standard
	                tmp = new DOMParser()
	                xml = tmp.parseFromString(data, "text/xml")
	            } else { // IE
	                xml = new ActiveXObject("Microsoft.XMLDOM") //"Microsoft.XMLDOM"
	                xml.async = "false"
	                xml.loadXML(data)
	            }
	        } catch (e) {
	            xml = void 0
	        }
	        if (!xml || !xml.documentElement || xml.getElementsByTagName("parsererror").length) {
	            avalon.error("Invalid XML: " + data)
	        }
	        return xml
	    }
	
	    //ajaxExtend是一个非常重要的内部方法，负责将用法参数进行规整化
	    //1. data转换为字符串
	    //2. type转换为大写
	    //3. url正常化，加querystring, 加时间戮
	    //4. 判定有没有跨域
	    //5. 添加hasContent参数
	    var defaults = {
	        type: "GET",
	        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
	        async: true,
	        jsonp: "callback"
	    }
	    function ajaxExtend(opts) {
	        opts = avalon.mix({}, defaults, opts)
	        opts.type = opts.type.toUpperCase()
	        var querystring = typeof opts.data === "string" ? opts.data : avalon.param(opts.data)
	        opts.querystring = querystring || ""
	        opts.url = opts.url.replace(rhash, "").replace(rprotocol, location.protocol + "//")
	
	        if (typeof opts.crossDomain !== "boolean") { //判定是否跨域
	            var urlAnchor = document.createElement("a")
	            // Support: IE6-11+
	            // IE throws exception if url is malformed, e.g. http://example.com:80x/
	            try {
	                urlAnchor.href = opts.url
	                // in IE7-, get the absolute path
	                var absUrl = !"1"[0] ? urlAnchor.getAttribute("href", 4) : urlAnchor.href
	                urlAnchor.href = absUrl
	                opts.crossDomain = originAnchor.protocol + "//" + originAnchor.host !== urlAnchor.protocol + "//" + urlAnchor.host
	            } catch (e) {
	                opts.crossDomain = true
	            }
	        }
	        opts.hasContent = !rnoContent.test(opts.type) //是否为post请求
	        if (!opts.hasContent) {
	            if (querystring) { //如果为GET请求,则参数依附于url上
	                opts.url += (rquery.test(opts.url) ? "&" : "?") + querystring
	            }
	            if (opts.cache === false) { //添加时间截
	                opts.url += (rquery.test(opts.url) ? "&" : "?") + "_time=" + (new Date() - 0)
	            }
	        }
	        return opts
	    }
	    /**
	     * 伪XMLHttpRequest类,用于屏蔽浏览器差异性
	     * var ajax = new(self.XMLHttpRequest||ActiveXObject)("Microsoft.XMLHTTP")
	     * ajax.onreadystatechange = function(){
	     *   if (ajax.readyState==4 && ajax.status==200){
	     *        alert(ajax.responseText)
	     *   }
	     * }
	     * ajax.open("POST", url, true) 
	     * ajax.send("key=val&key1=val2") 
	     */
	    var XHRMethods = {
	        setRequestHeader: function(name, value) {
	            this.requestHeaders[name] = value
	            return this
	        },
	        getAllResponseHeaders: function() {
	            return this.readyState === 4 ? this.responseHeadersString : null
	        },
	        getResponseHeader: function(name, match) {
	            if (this.readyState === 4) {
	                while ((match = rheaders.exec(this.responseHeadersString))) {
	                    this.responseHeaders[match[1]] = match[2]
	                }
	                match = this.responseHeaders[name]
	            }
	            return match === undefined ? null : match
	        },
	        overrideMimeType: function(type) {
	            this.mimeType = type
	            return this
	        },
	        // 中止请求
	        abort: function(statusText) {
	            statusText = statusText || "abort"
	            if (this.transport) {
	                this.respond(0, statusText)
	            }
	            return this
	        },
	        /**
	         * 用于派发success,error,complete等回调
	         * http://www.cnblogs.com/rubylouvre/archive/2011/05/18/2049989.html
	         * @param {Number} status 状态码
	         * @param {String} statusText 对应的扼要描述
	         */
	        dispatch: function(status, nativeStatusText) {
	            var statusText = nativeStatusText
	            // 只能执行一次，防止重复执行
	            if (!this.transport) { //2:已执行回调
	                return
	            }
	            this.readyState = 4
	            var isSuccess = status >= 200 && status < 300 || status === 304
	            if (isSuccess) {
	                if (status === 204) {
	                    statusText = "nocontent"
	                } else if (status === 304) {
	                    statusText = "notmodified"
	                } else {
	                    //如果浏览器能直接返回转换好的数据就最好不过,否则需要手动转换
	                    if (typeof this.response === "undefined") {
	                        var dataType = this.options.dataType || this.options.mimeType
	                        if (!dataType && this.responseText || this.responseXML) { //如果没有指定dataType，则根据mimeType或Content-Type进行揣测
	                            dataType = this.getResponseHeader("Content-Type") || ""
	                            dataType = dataType.match(/json|xml|script|html/) || ["text"]
	                            dataType = dataType[0]
	                        }
	                        var responseText = this.responseText || '',
	                            responseXML = this.responseXML || ''
	                        try {
	                            this.response = avalon.ajaxConverters[dataType].call(this, responseText, responseXML)
	                        } catch (e) {
	                            isSuccess = false
	                            this.error = e
	                            statusText = "parsererror"
	                        }
	                    }
	                }
	            }
	            this.status = status
	            this.statusText = statusText + ""
	            if (this.timeoutID) {
	                clearTimeout(this.timeoutID)
	                delete this.timeoutID
	            }
	            this._transport = this.transport
	            // 到这要么成功，调用success, 要么失败，调用 error, 最终都会调用 complete
	            if (isSuccess) {
	                this._resolve([this.response, statusText, this])
	            } else {
	                this._reject([this, statusText, this.error])
	            }
	            delete this.transport
	        }
	    }
	    //ajax主函数
	    avalon.ajax = function(opts, promise) {
	        if (!opts || !opts.url) {
	            avalon.error("参数必须为Object并且拥有url属性")
	        }
	        opts = ajaxExtend(opts) //处理用户参数，比如生成querystring, type大写化
	        //创建一个伪XMLHttpRequest,能处理complete,success,error等多投事件
	        var XHRProperties = {
	            responseHeadersString: "",
	            responseHeaders: {},
	            requestHeaders: {},
	            querystring: opts.querystring,
	            readyState: 0,
	            uniqueID: ("" + Math.random()).replace(/0\./, ""),
	            status: 0
	        }
	        var _reject, _resolve
	        var promise = new avalon.Promise(function(resolve, reject) {
	            _resolve = resolve
	            _reject = reject
	        })
	
	        promise.options = opts
	        promise._reject = _reject
	        promise._resolve = _resolve
	
	        var doneList = [],
	            failList = []
	
	        Array("done", "fail", "always").forEach(function(method) {
	            promise[method] = function(fn) {
	                if (typeof fn === "function") {
	                    if (method !== "fail")
	                        doneList.push(fn)
	                    if (method !== "done")
	                        failList.push(fn)
	                }
	                return this
	            }
	        })
	
	        var isSync = opts.async === false
	        if (isSync) {
	            avalon.log("warnning:与jquery1.8一样,async:false这配置已经被废弃")
	            promise.async = false
	        }
	
	
	        avalon.mix(promise, XHRProperties, XHRMethods)
	
	        promise.then(function(value) {
	            value = Array.isArray(value) ? value : value === void 0 ? [] : [value]
	            for (var i = 0, fn; fn = doneList[i++];) {
	                fn.apply(promise, value)
	            }
	            return value
	        }, function(value) {
	            value = Array.isArray(value) ? value : value === void 0 ? [] : [value]
	            for (var i = 0, fn; fn = failList[i++];) {
	                fn.apply(promise, value)
	            }
	            return value
	        })
	
	
	        promise.done(opts.success).fail(opts.error).always(opts.complete)
	
	        var dataType = opts.dataType //目标返回数据类型
	        var transports = avalon.ajaxTransports
	
	        if ((opts.crossDomain && !supportCors || rjsonp.test(opts.url)) && dataType === "json" && opts.type === "GET") {
	            dataType = opts.dataType = "jsonp"
	        }
	        var name = opts.form ? "upload" : dataType
	        var transport = transports[name] || transports.xhr
	        avalon.mix(promise, transport) //取得传送器的request, respond, preproccess
	        if (promise.preproccess) { //这用于jsonp upload传送器
	            dataType = promise.preproccess() || dataType
	        }
	        //设置首部 1、Content-Type首部
	        if (opts.contentType) {
	            promise.setRequestHeader("Content-Type", opts.contentType)
	        }
	        //2.处理Accept首部
	        promise.setRequestHeader("Accept", accepts[dataType] ? accepts[dataType] + ", */*; q=0.01" : accepts["*"])
	        for (var i in opts.headers) { //3. 处理headers里面的首部
	            promise.setRequestHeader(i, opts.headers[i])
	        }
	        // 4.处理超时
	        if (opts.async && opts.timeout > 0) {
	            promise.timeoutID = setTimeout(function() {
	                promise.abort("timeout")
	                promise.dispatch(0, "timeout")
	            }, opts.timeout)
	        }
	        promise.request()
	        return promise
	    }
	    "get,post".replace(avalon.rword, function(method) {
	        avalon[method] = function(url, data, callback, type) {
	            if (typeof data === "function") {
	                type = type || callback
	                callback = data
	                data = void 0
	            }
	            return avalon.ajax({
	                type: method,
	                url: url,
	                data: data,
	                success: callback,
	                dataType: type
	            })
	        }
	    })
	    function ok(val) {
	        return val
	    }
	    function ng(e) {
	        throw e
	    }
	    avalon.getScript = function(url, callback) {
	        return avalon.get(url, null, callback, "script")
	    }
	    avalon.getJSON = function(url, data, callback) {
	        return avalon.get(url, data, callback, "json")
	    }
	    avalon.upload = function(url, form, data, callback, dataType) {
	        if (typeof data === "function") {
	            dataType = callback
	            callback = data
	            data = void 0
	        }
	        return avalon.ajax({
	            url: url,
	            type: "post",
	            dataType: dataType,
	            form: form,
	            data: data,
	            success: callback
	        })
	    }
	    avalon.ajaxConverters = { //转换器，返回用户想要做的数据
	        text: function(text) {
	            // return text || "";
	            return text
	        },
	        xml: function(text, xml) {
	            return xml !== void 0 ? xml : parseXML(text)
	        },
	        html: function(text) {
	            return avalon.parseHTML(text) //一个文档碎片,方便直接插入DOM树
	        },
	        json: function(text) {
	            if (!avalon.parseJSON) {
	                avalon.log("avalon.parseJSON不存在,请升级到最新版")
	            }
	            return avalon.parseJSON(text)
	        },
	        script: function(text) {
	            parseJS(text)
	            return text
	        },
	        jsonp: function() {
	            var json, callbackName
	            if (this.jsonpCallback.startsWith('avalon.')) {
	                callbackName = this.jsonpCallback.replace(/avalon\./, '')
	                json = avalon[callbackName]
	                delete avalon[callbackName]
	            } else {
	                json = window[this.jsonpCallback]
	            }
	            return json
	        }
	    }
	
	    avalon.param = function(a) {
	        var prefix,
	            s = [],
	            add = function(key, value) {
	                value = (value == null ? "" : value)
	                s[s.length] = encode(key) + "=" + encode(value)
	            }
	
	        if (Array.isArray(a) || !avalon.isPlainObject(a)) {
	            avalon.each(a, function(subKey, subVal) {
	                add(subKey, subVal)
	            })
	        } else {
	            for (prefix in a) {
	                paramInner(prefix, a[prefix], add)
	            }
	        }
	
	        // Return the resulting serialization
	        return s.join("&").replace(r20, "+")
	    }
	
	    function paramInner(prefix, obj, add) {
	        var name
	        if (Array.isArray(obj)) {
	            // Serialize array item.
	            avalon.each(obj, function(i, v) {
	                paramInner(prefix + "[" + (typeof v === "object" ? i : "") + "]", v, add)
	            })
	        } else if (avalon.isPlainObject(obj)) {
	            // Serialize object item.
	            for (name in obj) {
	                paramInner(prefix + "[" + name + "]", obj[name], add)
	            }
	        } else {
	            // Serialize scalar item.
	            add(prefix, obj)
	        }
	    }
	
	    //将一个字符串转换为对象
	    avalon.unparam = function(input) {
	        var items, temp,
	            expBrackets = /\[(.*?)\]/g,
	            expVarname = /(.+?)\[/,
	            result = {}
	
	        if ((temp = avalon.type(input)) != 'string' || (temp == 'string' && !temp.length))
	            return {}
	        if (input.indexOf("?") !== -1) {
	            input = input.split("?").pop()
	        }
	        items = decode(input).split('&')
	
	        if (!(temp = items.length) || (temp == 1 && temp === ''))
	            return result
	
	        items.forEach(function(item) {
	            if (!item.length)
	            return
	            temp = item.split("=")
	            var key = temp.shift(),
	                value = temp.join('=').replace(/\+/g, ' '),
	                size, link,
	                subitems = []
	
	            if (!key.length)
	            return
	
	            while ((temp = expBrackets.exec(key)))
	            subitems.push(temp[1])
	
	            if (!(size = subitems.length)) {
	                result[key] = value
	                return
	            }
	            size--
	            temp = expVarname.exec(key)
	
	            if (!temp || !(key = temp[1]) || !key.length)
	            return
	
	            if (avalon.type(result[key]) !== 'object')
	                result[key] = {}
	
	            link = result[key]
	
	            avalon.each(subitems, function(subindex, subitem) {
	                if (!(temp = subitem).length) {
	                    temp = 0
	
	                    avalon.each(link, function(num) {
	                        if (!isNaN(num) && num >= 0 && (num % 1 === 0) && num >= temp)
	                            temp = Number(num) + 1
	                    })
	                }
	                if (subindex == size) {
	                    link[temp] = value
	                } else if (avalon.type(link[temp]) !== 'object') {
	                    link = link[temp] = {}
	                } else {
	                    link = link[temp]
	                }
	
	            })
	
	        })
	        return result
	    }
	
	    var rinput = /select|input|button|textarea/i
	    var rcheckbox = /radio|checkbox/
	    var rline = /\r?\n/g
	    function trimLine(val) {
	        return val.replace(rline, "\r\n")
	    }
	    //表单元素变字符串, form为一个元素节点
	    avalon.serialize = function(form) {
	        var json = {}
	        // 不直接转换form.elements，防止以下情况：   <form > <input name="elements"/><input name="test"/></form>
	        Array.prototype.filter.call(form.getElementsByTagName("*"), function(el) {
	            if (rinput.test(el.nodeName) && el.name && !el.disabled) {
	                return rcheckbox.test(el.type) ? el.checked : true //只处理拥有name并且没有disabled的表单元素
	            }
	        }).forEach(function(el) {
	            var val = avalon(el).val()
	            val = Array.isArray(val) ? val.map(trimLine) : trimLine(val)
	            var name = el.name
	            if (name in json) {
	                if (Array.isArray(val)) {
	                    json[name].push(val)
	                } else {
	                    json[name] = [json[name], val]
	                }
	            } else {
	                json[name] = val
	            }
	        })
	        return avalon.param(json, false) // 名值键值对序列化,数组元素名字前不加 []
	    }
	
	    var transports = avalon.ajaxTransports = {
	        xhr: {
	            //发送请求
	            request: function() {
	                var self = this
	                var opts = this.options
	                var transport = this.transport = new avalon.xhr
	                transport.open(opts.type, opts.url, opts.async, opts.username, opts.password)
	                if (this.mimeType && transport.overrideMimeType) {
	                    transport.overrideMimeType(this.mimeType)
	                }
	                //IE6下，如果transport中没有withCredentials，直接设置会报错
	                if (opts.crossDomain && "withCredentials" in transport) {
	                    transport.withCredentials = true
	                }
	
	                /*
	                 * header 中设置 X-Requested-With 用来给后端做标示：
	                 * 这是一个 ajax 请求。
	                 *
	                 * 在 Chrome、Firefox 3.5+ 和 Safari 4+ 下，
	                 * 在进行跨域请求时设置自定义 header，会触发 preflighted requests，
	                 * 会预先发送 method 为 OPTIONS 的请求。
	                 *
	                 * 于是，如果跨域，禁用此功能。
	                 */
	                if (!opts.crossDomain) {
	                    this.requestHeaders["X-Requested-With"] = "XMLHttpRequest"
	                }
	
	                for (var i in this.requestHeaders) {
	                    transport.setRequestHeader(i, this.requestHeaders[i] + "")
	                }
	
	                /*
	                 * progress
	                 */
	                if (opts.progressCallback) {
	                    // 判断是否 ie6-9
	                    var isOldIE = document.all && !window.atob
	                    if (!isOldIE) {
	                        transport.upload.onprogress = opts.progressCallback
	                    }
	                }
	
	                var dataType = opts.dataType
	                if ("responseType" in transport && /^(blob|arraybuffer|text)$/.test(dataType)) {
	                    transport.responseType = dataType
	                    this.useResponseType = true
	                }
	                //必须要支持 FormData 和 file.fileList 的浏览器 才能用 xhr 发送
	                //标准规定的 multipart/form-data 发送必须用 utf-8 格式， 记得 ie 会受到 document.charset 的影响
	                transport.send(opts.hasContent && (this.formdata || this.querystring) || null)
	                //在同步模式中,IE6,7可能会直接从缓存中读取数据而不会发出请求,因此我们需要手动发出请求
	
	                if (!opts.async || transport.readyState === 4) {
	                    this.respond()
	                } else {
	                    if (useOnload) { //如果支持onerror, onload新API
	                        transport.onload = transport.onerror = function(e) {
	                            this.readyState = 4 //IE9+
	                            this.status = e.type === "load" ? 200 : 500
	                            self.respond()
	                        }
	                    } else {
	                        transport.onreadystatechange = function() {
	                            self.respond()
	                        }
	                    }
	                }
	            },
	            //用于获取原始的responseXMLresponseText 修正status statusText
	            //第二个参数为1时中止清求
	            respond: function(event, forceAbort) {
	                var transport = this.transport
	                if (!transport) {
	                    return
	                }
	                // by zilong：避免abort后还继续派发onerror等事件
	                if (forceAbort && this.timeoutID) {
	                    clearTimeout(this.timeoutID)
	                    delete this.timeoutID
	                }
	                try {
	                    var completed = transport.readyState === 4
	                    if (forceAbort || completed) {
	                        transport.onreadystatechange = avalon.noop
	                        if (useOnload) { //IE6下对XHR对象设置onerror属性可能报错
	                            transport.onerror = transport.onload = null
	                        }
	                        if (forceAbort) {
	                            if (!completed && typeof transport.abort === "function") { // 完成以后 abort 不要调用
	                                transport.abort()
	                            }
	                        } else {
	                            var status = transport.status
	                            //设置responseText
	                            var text = transport.responseText
	
	                            this.responseText = typeof text === "string" ? text : void 0
	                            //设置responseXML
	                            try {
	                                //当responseXML为[Exception: DOMException]时，
	                                //访问它会抛“An attempt was made to use an object that is not, or is no longer, usable”异常
	                                var xml = transport.responseXML
	                                this.responseXML = xml.documentElement
	                            } catch (e) {}
	                            //设置response
	                            if (this.useResponseType) {
	                                this.response = transport.response
	                            }
	                            //设置responseHeadersString
	                            this.responseHeadersString = transport.getAllResponseHeaders()
	
	                            try { //火狐在跨城请求时访问statusText值会抛出异常
	                                var statusText = transport.statusText
	                            } catch (e) {
	                                this.error = e
	                                statusText = "firefoxAccessError"
	                            }
	                            //用于处理特殊情况,如果是一个本地请求,只要我们能获取数据就假当它是成功的
	                            if (!status && isLocal && !this.options.crossDomain) {
	                                status = this.responseText ? 200 : 404
	                            //IE有时会把204当作为1223
	                            } else if (status === 1223) {
	                                status = 204
	                            }
	                            this.dispatch(status, statusText)
	                        }
	                    }
	                } catch (err) {
	                    // 如果网络问题时访问XHR的属性，在FF会抛异常
	                    // http://helpful.knobs-dials.com/index.php/Component_returned_failure_code:_0x80040111_(NS_ERROR_NOT_AVAILABLE)
	                    if (!forceAbort) {
	                        this.dispatch(500, err)
	                    }
	                }
	            }
	        },
	        jsonp: {
	            preproccess: function() {
	                var opts = this.options
	                var name = this.jsonpCallback = opts.jsonpCallback || "avalon.jsonp" + setTimeout("1")
	                if (rjsonp.test(opts.url)) {
	                    opts.url = opts.url.replace(rjsonp, "$1" + name)
	                } else {
	                    opts.url = opts.url + (rquery.test(opts.url) ? "&" : "?") + opts.jsonp + "=" + name
	                }
	                //将后台返回的json保存在惰性函数中
	                if (name.startsWith('avalon.')) {
	                    name = name.replace(/avalon\./, '')
	                    avalon[name] = function(json) {
	                        avalon[name] = json
	                    }
	                } else {
	                    window[name] = function(json) {
	                        window[name] = json
	                    }
	                }
	                return "script"
	            }
	        },
	        script: {
	            request: function() {
	                var opts = this.options
	                var node = this.transport = DOC.createElement("script")
	                if (opts.charset) {
	                    node.charset = opts.charset
	                }
	                var self = this
	                node.onerror = node[useOnload ? "onload" : "onreadystatechange"] = function() {
	                    self.respond()
	                }
	                node.src = opts.url
	                head.insertBefore(node, head.firstChild)
	            },
	            respond: function(event, forceAbort) {
	                var node = this.transport
	                if (!node) {
	                    return
	                }
	                // by zilong：避免abort后还继续派发onerror等事件
	                if (forceAbort && this.timeoutID) {
	                    clearTimeout(this.timeoutID)
	                    delete this.timeoutID
	                }
	                var execute = /loaded|complete|undefined/i.test(node.readyState)
	                if (forceAbort || execute) {
	                    node.onerror = node.onload = node.onreadystatechange = null
	                    var parent = node.parentNode
	                    if (parent) {
	                        parent.removeChild(node)
	                    }
	                    if (!forceAbort) {
	                        var args
	                        if (this.jsonpCallback) {
	                            var jsonpCallback = this.jsonpCallback.startsWith('avalon.') ? avalon[this.jsonpCallback.replace(/avalon\./, '')] : window[this.jsonpCallback]
	                            args = typeof jsonpCallback === "function" ? [500, "error"] : [200, "success"]
	                        } else {
	                            args = [200, "success"]
	                        }
	
	                        this.dispatch.apply(this, args)
	                    }
	                }
	            }
	        },
	        upload: {
	            preproccess: function() {
	                var opts = this.options, formdata
	                if (typeof opts.form.append === "function") { //简单判断opts.form是否为FormData
	                    formdata = opts.form
	                    opts.contentType = ''
	                } else {
	                    formdata = new FormData(opts.form) //将二进制什么一下子打包到formdata
	                }
	                avalon.each(opts.data, function(key, val) {
	                    formdata.append(key, val) //添加客外数据
	                })
	                this.formdata = formdata
	            }
	        }
	    }
	
	
	    avalon.mix(transports.jsonp, transports.script)
	    avalon.mix(transports.upload, transports.xhr)
	
	    if (!window.FormData) {
	        var str = 'Function BinaryToArray(binary)\r\n\
	                 Dim oDic\r\n\
	                 Set oDic = CreateObject("scripting.dictionary")\r\n\
	                 length = LenB(binary) - 1\r\n\
	                 For i = 1 To length\r\n\
	                     oDic.add i, AscB(MidB(binary, i, 1))\r\n\
	                 Next\r\n\
	                 BinaryToArray = oDic.Items\r\n\
	              End Function'
	        execScript(str, "VBScript")
	        avalon.fixAjax = function() {
	            avalon.ajaxConverters.arraybuffer = function() {
	                var body = this.tranport && this.tranport.responseBody
	                if (body) {
	                    return new VBArray(BinaryToArray(body)).toArray()
	                }
	            }
	            function createIframe(ID) {
	                var iframe = avalon.parseHTML("<iframe " + " id='" + ID + "'" +
	                    " name='" + ID + "'" + " style='position:absolute;left:-9999px;top:-9999px;'/>").firstChild
	                return (DOC.body || DOC.documentElement).insertBefore(iframe, null)
	            }
	            function addDataToForm(form, data) {
	                var ret = [],
	                    d, isArray, vs, i, e
	                for (d in data) {
	                    isArray = Array.isArray(data[d])
	                    vs = isArray ? data[d] : [data[d]]
	                    // 数组和原生一样对待，创建多个同名输入域
	                    for (i = 0; i < vs.length; i++) {
	                        e = DOC.createElement("input")
	                        e.type = 'hidden'
	                        e.name = d
	                        e.value = vs[i]
	                        form.appendChild(e)
	                        ret.push(e)
	                    }
	                }
	                return ret
	            }
	            //https://github.com/codenothing/Pure-Javascript-Upload/blob/master/src/upload.js
	            avalon.ajaxTransports.upload = {
	                request: function() {
	                    var self = this
	                    var opts = this.options
	                    var ID = "iframe-upload-" + this.uniqueID
	                    var form = opts.form
	                    var iframe = this.transport = createIframe(ID)
	                    //form.enctype的值
	                    //1:application/x-www-form-urlencoded   在发送前编码所有字符（默认）
	                    //2:multipart/form-data 不对字符编码。在使用包含文件上传控件的表单时，必须使用该值。
	                    //3:text/plain  空格转换为 "+" 加号，但不对特殊字符编码。
	                    var backups = {
	                        target: form.target || "",
	                        action: form.action || "",
	                        enctype: form.enctype,
	                        method: form.method
	                    }
	                    var fields = opts.data ? addDataToForm(form, opts.data) : []
	                    //必须指定method与enctype，要不在FF报错
	                    //表单包含文件域时，如果缺少 method=POST 以及 enctype=multipart/form-data，
	                    // 设置target到隐藏iframe，避免整页刷新
	                    form.target = ID
	                    form.action = opts.url
	                    form.method = "POST"
	                    form.enctype = "multipart/form-data"
	                    this.uploadcallback = avalon.bind(iframe, "load", function(event) {
	                        self.respond(event)
	                    })
	                    form.submit()
	                    //还原form的属性
	                    for (var i in backups) {
	                        form[i] = backups[i]
	                    }
	                    //移除之前动态添加的节点
	                    fields.forEach(function(input) {
	                        form.removeChild(input)
	                    })
	                },
	                respond: function(event) {
	                    var node = this.transport, child
	                    // 防止重复调用,成功后 abort
	                    if (!node) {
	                        return
	                    }
	                    if (event && event.type === "load") {
	                        var doc = node.contentWindow.document
	                        this.responseXML = doc
	                        if (doc.body) { //如果存在body属性,说明不是返回XML
	                            this.responseText = doc.body.innerHTML
	                            //当MIME为'application/javascript' 'text/javascript",浏览器会把内容放到一个PRE标签中
	                            if ((child = doc.body.firstChild) && child.nodeName.toUpperCase() === 'PRE' && child.firstChild) {
	                                this.responseText = child.firstChild.nodeValue
	                            }
	                        }
	                        this.dispatch(200, "success")
	                    }
	                    this.uploadcallback = avalon.unbind(node, "load", this.uploadcallback)
	                    delete this.uploadcallback
	                    setTimeout(function() { // Fix busy state in FF3
	                        node.parentNode.removeChild(node)
	                    })
	                }
	            }
	            delete avalon.fixAjax
	        }
	        avalon.fixAjax()
	    }
	    return avalon
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
	/**
	 2011.8.31
	 将会传送器的abort方法上传到avalon.XHR.abort去处理
	 修复serializeArray的bug
	 对XMLHttpRequest.abort进行try...catch
	 2012.3.31 v2 大重构,支持XMLHttpRequest Level2
	 2013.4.8 v3 大重构 支持二进制上传与下载
	 http://www.cnblogs.com/heyuquan/archive/2013/05/13/3076465.html
	 2014.12.25  v4 大重构 
	 2015.3.2   去掉mmPromise
	 2014.3.13  使用加强版mmPromise
	 2014.3.17  增加 xhr 的 onprogress 回调
	 */


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2)], __WEBPACK_AMD_DEFINE_RESULT__ = function (avalon) {
	//chrome36的原生Promise还多了一个defer()静态方法，允许不通过传参就能生成Promise实例，
	//另还多了一个chain(onSuccess, onFail)原型方法，意义不明
	//目前，firefox24, opera19也支持原生Promise(chrome32就支持了，但需要打开开关，自36起直接可用)
	//本模块提供的Promise完整实现ECMA262v6 的Promise规范
	//2015.3.12 支持async属性
	    function ok(val) {
	        return val
	    }
	    function ng(e) {
	        throw e
	    }
	
	    function done(onSuccess) {//添加成功回调
	        return this.then(onSuccess, ng)
	    }
	    function fail(onFail) {//添加出错回调
	        return this.then(ok, onFail)
	    }
	    function defer() {
	        var ret = {};
	        ret.promise = new this(function (resolve, reject) {
	            ret.resolve = resolve
	            ret.reject = reject
	        });
	        return ret
	    }
	    var msPromise = function (executor) {
	        this._callbacks = []
	        var me = this
	        if (typeof this !== "object")
	            throw new TypeError("Promises must be constructed via new")
	        if (typeof executor !== "function")
	            throw new TypeError("not a function")
	
	        executor(function (value) {
	            _resolve(me, value)
	        }, function (reason) {
	            _reject(me, reason)
	        })
	    }
	    function fireCallbacks(promise, fn) {
	        if (typeof promise.async === "boolean") {
	            var isAsync = promise.async
	        } else {
	            isAsync = promise.async = true
	        }
	        if (isAsync) {
	            window.setTimeout(fn, 0)
	        } else {
	            fn()
	        }
	    }
	//返回一个已经处于`resolved`状态的Promise对象
	    msPromise.resolve = function (value) {
	        return new msPromise(function (resolve) {
	            resolve(value)
	        })
	    }
	//返回一个已经处于`rejected`状态的Promise对象
	    msPromise.reject = function (reason) {
	        return new msPromise(function (resolve, reject) {
	            reject(reason)
	        })
	    }
	
	    msPromise.prototype = {
	//一个Promise对象一共有3个状态：
	//- `pending`：还处在等待状态，并没有明确最终结果
	//- `resolved`：任务已经完成，处在成功状态
	//- `rejected`：任务已经完成，处在失败状态
	        constructor: msPromise,
	        _state: "pending",
	        _fired: false, //判定是否已经被触发
	        _fire: function (onSuccess, onFail) {
	            if (this._state === "rejected") {
	                if (typeof onFail === "function") {
	                    onFail(this._value)
	                } else {
	                    throw this._value
	                }
	            } else {
	                if (typeof onSuccess === "function") {
	                    onSuccess(this._value)
	                }
	            }
	        },
	        _then: function (onSuccess, onFail) {
	            if (this._fired) {//在已有Promise上添加回调
	                var me = this
	                fireCallbacks(me, function () {
	                    me._fire(onSuccess, onFail)
	                });
	            } else {
	                this._callbacks.push({onSuccess: onSuccess, onFail: onFail})
	            }
	        },
	        then: function (onSuccess, onFail) {
	            onSuccess = typeof onSuccess === "function" ? onSuccess : ok
	            onFail = typeof onFail === "function" ? onFail : ng
	            var me = this//在新的Promise上添加回调
	            var nextPromise = new msPromise(function (resolve, reject) {
	                me._then(function (value) {
	                    try {
	                        value = onSuccess(value)
	                    } catch (e) {
	                        // https://promisesaplus.com/#point-55
	                        reject(e)
	                        return
	                    }
	                    resolve(value)
	                }, function (value) {
	                    try {
	                        value = onFail(value)
	                    } catch (e) {
	                        reject(e)
	                        return
	                    }
	                    resolve(value)
	                })
	            })
	            for (var i in me) {
	                if (!personal[i]) {
	                    nextPromise[i] = me[i]
	                }
	            }
	            return nextPromise
	        },
	        "done": done,
	        "catch": fail,
	        "fail": fail
	    }
	    var personal = {
	        _state: 1,
	        _fired: 1,
	        _value: 1,
	        _callbacks: 1
	    }
	    function _resolve(promise, value) {//触发成功回调
	        if (promise._state !== "pending")
	            return;
	        if (value && typeof value.then === "function") {
	//thenable对象使用then，Promise实例使用_then
	            var method = value instanceof msPromise ? "_then" : "then"
	            value[method](function (val) {
	                _transmit(promise, val, true)
	            }, function (reason) {
	                _transmit(promise, reason, false)
	            });
	        } else {
	            _transmit(promise, value, true);
	        }
	    }
	    function _reject(promise, value) {//触发失败回调
	        if (promise._state !== "pending")
	            return
	        _transmit(promise, value, false)
	    }
	//改变Promise的_fired值，并保持用户传参，触发所有回调
	    function _transmit(promise, value, isResolved) {
	        promise._fired = true;
	        promise._value = value;
	        promise._state = isResolved ? "fulfilled" : "rejected"
	        fireCallbacks(promise, function () {
	            promise._callbacks.forEach(function (data) {
	                promise._fire(data.onSuccess, data.onFail);
	            })
	        })
	    }
	    function _some(any, iterable) {
	        iterable = Array.isArray(iterable) ? iterable : []
	        var n = 0, result = [], end
	        return new msPromise(function (resolve, reject) {
	            // 空数组直接resolve
	            if (!iterable.length)
	                resolve(result)
	            function loop(a, index) {
	                a.then(function (ret) {
	                    if (!end) {
	                        result[index] = ret//保证回调的顺序
	                        n++
	                        if (any || n >= iterable.length) {
	                            resolve(any ? ret : result)
	                            end = true
	                        }
	                    }
	                }, function (e) {
	                    end = true
	                    reject(e)
	                })
	            }
	            for (var i = 0, l = iterable.length; i < l; i++) {
	                loop(iterable[i], i)
	            }
	        })
	    }
	
	    msPromise.all = function (iterable) {
	        return _some(false, iterable)
	    }
	    msPromise.race = function (iterable) {
	        return _some(true, iterable)
	    }
	    msPromise.defer = defer
	
	
	
	    avalon.Promise = msPromise
	    var nativePromise = window.Promise
	    if (/native code/.test(nativePromise)) {
	        nativePromise.prototype.done = done
	        nativePromise.prototype.fail = fail
	        if (!nativePromise.defer) { //chrome实现的私有方法
	            nativePromise.defer = defer
	        }
	    }
	    return window.Promise = nativePromise || msPromise
	
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
	//https://github.com/ecomfe/er/blob/master/src/Deferred.js
	//http://jser.info/post/77696682011/es6-promises


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(13), __webpack_require__(15)], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
	//重写mmRouter中的route方法     
	    avalon.router.route = function (method, path, query, options) {
	        path = path.trim()
	        var states = this.routingTable[method]
	        for (var i = 0, el; el = states[i++]; ) {//el为一个个状态对象，状态对象的callback总是返回一个Promise
	            var args = path.match(el.regexp)
	            if (args && el.abstract !== true) {//不能是抽象状态
	                var newParams = {params: {}}
	                avalon.mix(newParams.params, el.params)
	                newParams.keys = el.keys
	                newParams.params.query = query || {}
	                args.shift()
	                if (el.keys.length) {
	                    this._parseArgs(args, newParams)
	                }
	                if (el.stateName) {
	                    mmState.transitionTo(mmState.currentState, el, newParams.params, options)
	                } else {
	                    el.callback.apply(el, args)
	                }
	                return
	            }
	        }
	        if (this.errorback) {
	            this.errorback()
	        }
	    }
	    var _root, undefine, _controllers = {}, _states = {}
	    /*
	     *  @interface avalon.router.go 跳转到一个已定义状态上，params对参数对象
	     *  @param toName 状态name
	     *  @param params 附加参数
	     *  @param params.query 在hash后面附加的类似search的参数对
	     *  @param options 扩展配置
	     *  @param options.reload true强制reload，即便url、参数并未发生变化
	     *  @param options.replace true替换history，否则生成一条新的历史记录
	     *  @param options.confirmed true不触发onBeforeUnload,$onBeforeUnload,onBeforeExit
	     */
	    avalon.router.go = function (toName, params, options) {
	        var from = mmState.currentState,
	                to = StateModel.is(toName) ? toName : getStateByName(toName),
	                params = params || {}
	        var params = avalon.mix(true, {}, to.params, params)
	        if (to) {
	            mmState.transitionTo(from, to, params, options)
	        }
	    }
	    // 事件管理器
	    var Event = window.$eventManager = avalon.define({
	        $id: "$eventManager",
	        $flag: 0,
	        uiqKey: function () {
	            return "flag" + (++Event.$flag)
	        }
	    })
	    function removeOld() {
	        var nodes = mmState.oldNodes
	        while (nodes.length) {
	            var i = nodes.length - 1,
	                    node = nodes[i]
	            node.parentNode && node.parentNode.removeChild(node)
	            nodes.splice(i, 1)
	            node = null
	        }
	    }
	    Event.$watch("onAbort", removeOld)
	    var mmState = window.mmState = {
	        prevState: NaN,
	        currentState: NaN, // 当前状态，可能还未切换到该状态
	        activeState: NaN, // 当前实际处于的状态
	        oldNodes: [],
	        query: {}, // 从属于currentState
	        popOne: function (chain, params, callback, notConfirmed) {
	            if (mmState._toParams !== params)
	                return callback(false, {type: "abort"})
	            var cur = chain.pop(), me = this
	            if (!cur)
	                return callback()
	            // 阻止退出
	            if (notConfirmed && cur.onBeforeExit() === false)
	                return callback(false)
	            me.activeState = cur.parentState || _root
	            cur.done = function (success) {
	                cur._pending = false
	                cur.done = null
	                cur._local = null
	                if (success !== false) {
	                    if (me.activeState)
	                        return me.popOne(chain, params, callback, notConfirmed)
	                }
	                return callback(success)
	            }
	            var success = cur.onExit()
	            if (!cur._pending && cur.done)
	                cur.done(success)
	        },
	        pushOne: function (chain, params, callback, _local, toLocals) {
	            if (mmState._toParams !== params)
	                return callback(false, {type: "abort"})
	            var cur = chain.shift(), me = this
	            // 退出
	            if (!cur) {
	                chain = null
	                return callback()
	            }
	            cur.syncParams(params)
	            // 阻止进入该状态
	            if (cur.onBeforeEnter() === false) {
	                // 恢复params
	                cur.syncParams(cur.oldParams)
	                return callback(false)
	            }
	            var _local = inherit(_local)
	            me.activeState = cur // 更新当前实际处于的状态
	            cur.done = function (success) {
	                // 防止async处触发已经销毁的done
	                if (!cur.done)
	                    return
	                cur._pending = false
	                cur.done = null
	                cur.visited = true
	                // 退出
	                if (success === false) {
	                    // 这里斟酌一下 - 去掉
	                    // cur.callback.apply(cur, [params, _local])
	                    return callback(success)
	                }
	                var resolved = cur.callback.apply(cur, [params, _local])
	                resolved.$then(function (res) {
	                    // sync params to oldParams
	                    avalon.mix(true, cur.oldParams, cur.params)
	                    // 继续状态链
	                    me.pushOne(chain, params, callback, _local)
	                })
	            }
	            // 一般在这个回调里准备数据
	            var args = []
	            avalon.each(cur.keys, function (index, item) {
	                var key = item.name
	                args.push(cur.params[key])
	            })
	            cur._onEnter.apply(cur, args)
	            if (!cur._pending && cur.done)
	                cur.done()
	        },
	        transitionTo: function (fromState, toState, toParams, options) {
	            var toParams = toParams || toState.params, fromAbort
	            // state machine on transition
	            if (this.activeState && (this.activeState != this.currentState)) {
	                avalon.log("navigating to [" +
	                        this.currentState.stateName +
	                        "] will be stopped, redirect to [" +
	                        toState.stateName + "] now")
	                this.activeState.done && this.activeState.done(!"stopped")
	                fromState = this.activeState // 更新实际的fromState
	                fromAbort = true
	            }
	            mmState.oldNodes = []
	            var info = avalon.router.urlFormate(toState.url, toParams, toParams.query),
	                    me = this,
	                    options = options || {},
	                    // 是否强制reload，参照angular，这个时候会触发整个页面重刷
	                    reload = options.reload,
	                    over,
	                    fromChain = fromState && fromState.chain || [],
	                    toChain = toState.chain,
	                    i = 0,
	                    changeType, // 是params变化？query变化？这个东西可以用来配置是否屏蔽视图刷新逻辑
	                    state = toChain[i],
	                    _local = _root.sourceLocal,
	                    toLocals = []
	            if (!reload) {
	                // 找到共有父状态chain，params未变化
	                while (state && state === fromChain[i] && !state.paramsChanged(toParams)) {
	                    _local = toLocals[i] = state._local
	                    i++
	                    state = toChain[i]
	                }
	            }
	            var exitChain = fromChain.slice(i), // 需要退出的chain
	                    enterChain = toChain.slice(i), // 需要进入的chain
	                    commonLocal = _local
	            // 建立toLocals，用来计算哪些view会被替换
	            while (state = toChain[i]) {
	                _local = toLocals[i] = inherit(_local, state.sourceLocal)
	                i++
	            }
	            mmState._local = _local
	            done = function (success, e) {
	                if (over)
	                    return
	                over = true
	                me.currentState = me.activeState
	                enterChain = exitChain = commonLocal = _local = toParams = null
	                mmState.oldNodes = []
	                if (success !== false) {
	                    mmState.lastLocal = mmState.currentState._local
	                    _root.fire("updateview", me.currentState, changeType)
	                    avalon.log("transitionTo " + toState.stateName + " success")
	                    callStateFunc("onLoad", me, fromState, toState)
	                } else {
	                    return callStateFunc("onError", me, {
	                        type: "transition",
	                        message: "transitionTo " + toState.stateName + " faild",
	                        error: e,
	                        fromState: fromState,
	                        toState: toState,
	                        params: toParams
	                    }, me.currentState)
	                }
	            }
	            toState.path = ("/" + info.path).replace(/^[\/]{2,}/g, "/")
	            if (!reload && fromState === toState) {
	                changeType = toState.paramsChanged(toParams)
	                if (!changeType) {
	                    // redirect的目的状态 == this.activeState && abort
	                    if (toState == this.activeState && fromAbort)
	                        return done()
	                    // 重复点击直接return
	                    return
	                }
	            }
	
	            mmState.query = avalon.mix({}, toParams.query)
	
	            // onBeforeUnload check
	            if (options && !options.confirmed && (callStateFunc("onBeforeUnload", this, fromState, toState) === false || broadCastBeforeUnload(exitChain, enterChain, fromState, toState) === false)) {
	                return callStateFunc("onAbort", this, fromState, toState)
	            }
	            if (over === true) {
	                return
	            }
	            avalon.log("begin transitionTo " + toState.stateName + " from " + (fromState && fromState.stateName || "unknown"))
	            callStateFunc("onUnload", this, fromState, toState)
	            this.currentState = toState
	            this.prevState = fromState
	            mmState._toParams = toParams
	            if (info && avalon.history)
	                avalon.history.updateLocation(info.path + info.query, avalon.mix({}, options, {silent: true}), !fromState && location.hash)
	            callStateFunc("onBegin", this, fromState, toState)
	            this.popOne(exitChain, toParams, function (success) {
	                // 中断
	                if (success === false)
	                    return done(success)
	                me.pushOne(enterChain, toParams, done, commonLocal, toLocals)
	            }, !(options && options.confirmed))
	        }
	    }
	    //将template,templateUrl,templateProvider等属性从opts对象拷贝到新生成的view对象上的
	    function copyTemplateProperty(newObj, oldObj, name) {
	        if (name in oldObj) {
	            newObj[name] = oldObj[name]
	            delete  oldObj[name]
	        }
	    }
	    function getCacheContainer() {
	        return document.getElementsByTagName("avalon")[0]
	    }
	    var templateCache = {},
	            cacheContainer = getCacheContainer()
	    function loadCache(name) {
	        var fragment = document.createDocumentFragment(),
	                divPlaceHolder = document.getElementById(name),
	                f,
	                eles = divPlaceHolder.eles,
	                i = 0
	        if (divPlaceHolder) {
	            while (f = eles[i]) {
	                fragment.appendChild(f)
	                i++
	            }
	        }
	        return fragment
	    }
	    function setCache(name, element) {
	        var fragment = document.createDocumentFragment(),
	                divPlaceHolder = document.getElementById(name),
	                f
	        if (!divPlaceHolder) {
	            divPlaceHolder = document.createElement("div")
	            divPlaceHolder.id = name
	            cacheContainer.appendChild(divPlaceHolder)
	        }
	        // 引用
	        if (divPlaceHolder.eles) {
	            avalon.each(divPlaceHolder.eles, function (index, ele) {
	                fragment.appendChild(ele)
	            })
	        } else {
	            divPlaceHolder.eles = []
	            while (f = element.firstChild) {
	                fragment.appendChild(f)
	                divPlaceHolder.eles.push(f)
	            }
	            templateCache[name] = true
	        }
	        divPlaceHolder.appendChild(fragment)
	    }
	    function broadCastBeforeUnload(exitChain, enterChain, fromState, toState) {
	        var lastLocal = mmState.lastLocal
	        if (!lastLocal || !enterChain[0] && !exitChain[0])
	            return
	        var newLocal = mmState._local,
	                cacheQueue = []
	        for (var i in lastLocal) {
	            var local = lastLocal[i]
	            // 所有被更新的view
	            if (!(i in newLocal) || newLocal[i] != local) {
	                if (local.$ctrl && ("$onBeforeUnload" in local.$ctrl)) {
	                    if (local.$ctrl.$onBeforeUnload(fromState, toState) === false)
	                        return false
	                }
	                if (local.element && (exitChain[0] != enterChain[0]))
	                    cacheQueue.push(local)
	            }
	        }
	        avalon.each(cacheQueue, function (index, local) {
	            var ele = local.element,
	                    name = avalon(ele).data("currentCache")
	            if (name) {
	                setCache(name, ele)
	            }
	        })
	        cacheQueue = null
	    }
	    // 靠谱的解决方法
	    avalon.bindingHandlers.view = function (data) {
	        var vmodels = data.vmodels || arguments[1]
	        var currentState = mmState.currentState,
	                element = data.element,
	                $element = avalon(element),
	                viewname = data.value || data.expr || "",
	                comment = document.createComment("ms-view:" + viewname),
	                par = element.parentNode,
	                defaultHTML = element.innerHTML,
	                statename = $element.data("statename") || "",
	                parentState = getStateByName(statename) || _root,
	                currentLocal = {},
	                oldElement = element,
	                tpl = element.outerHTML
	        element.removeAttribute("ms-view") // remove right now
	        par.insertBefore(comment, element)
	        function update(firsttime, currentState, changeType) {
	            // node removed, remove callback
	            if (!document.contains(comment)) {
	                data = vmodels = element = par = comment = $element = oldElement = update = null
	                return !"delete from watch"
	            }
	            var definedParentStateName = $element.data("statename") || "",
	                    parentState = getStateByName(definedParentStateName) || _root,
	                    _local
	            if (viewname.indexOf("@") < 0)
	                viewname += "@" + parentState.stateName
	            _local = mmState.currentState._local && mmState.currentState._local[viewname]
	            if (firsttime && !_local || currentLocal === _local)
	                return
	            currentLocal = _local
	            _currentState = _local && _local.state
	            // 缓存，如果加载dom上，则是全局配置，针对template还可以开一个单独配置
	            var cacheTpl = $element.data("viewCache"),
	                    lastCache = $element.data("currentCache")
	            if (_local) {
	                cacheTpl = (_local.viewCache === false ? false : _local.viewCache || cacheTpl) && (viewname + "@" + _currentState.stateName)
	            } else if (cacheTpl) {
	                cacheTpl = viewname + "@__default__"
	            }
	            // stateB->stateB，配置了参数变化不更新dom
	            if (_local && _currentState === currentState && _local.ignoreChange && _local.ignoreChange(changeType, viewname))
	                return
	            // 需要load和使用的cache是一份
	            if (cacheTpl && cacheTpl === lastCache)
	                return
	            compileNode(tpl, element, $element, _currentState)
	            var html = _local ? _local.template : defaultHTML,
	                    fragment
	            if (cacheTpl) {
	                if (_local) {
	                    _local.element = element
	                } else {
	                    mmState.currentState._local[viewname] = {
	                        state: mmState.currentState,
	                        template: defaultHTML,
	                        element: element
	                    }
	                }
	            }
	            avalon.clearHTML(element)
	            // oldElement = element
	            element.removeAttribute("ms-view")
	            element.setAttribute("ui-view", data.value || data.expr || "")
	            // 本次更新的dom需要用缓存
	            if (cacheTpl) {
	                // 已缓存
	                if (templateCache[cacheTpl]) {
	                    fragment = loadCache(cacheTpl)
	                    // 未缓存
	                } else {
	                    fragment = avalon.parseHTML(html)
	                }
	                element.appendChild(fragment)
	                // 更新现在使用的cache名字
	                $element.data("currentCache", cacheTpl)
	                if (templateCache[cacheTpl]) {
	                    _local.$ctrl.$onCacheRendered && _local.$ctrl.$onCacheRendered.apply(element, [_local])
	                    return
	                }
	            } else {
	                element.innerHTML = html
	                $element.data("currentCache", false)
	            }
	            // default
	            if (!_local && cacheTpl)
	                $element.data("currentCache", cacheTpl)
	            avalon.each(getViewNodes(element), function (i, node) {
	                avalon(node).data("statename", _currentState && _currentState.stateName || "")
	            })
	            // merge上下文vmodels + controller指定的vmodels
	            avalon.scan(element, (_local && _local.vmodels || []).concat(vmodels || []))
	            // 触发视图绑定的controller的事件
	            if (_local && _local.$ctrl) {
	                _local.$ctrl.$onRendered && _local.$ctrl.$onRendered.apply(element, [_local])
	            }
	        }
	        update("firsttime")
	        _root.watch("updateview", function (state, changeType) {
	            return update.call(this, undefine, state, changeType)
	        })
	    }
	    if (avalon.directives) {
	        avalon.directive("view", {
	            init: avalon.bindingHandlers.view
	        })
	    }
	    function compileNode(tpl, element, $element, _currentState) {
	        if ($element.hasClass("oni-mmRouter-slide")) {
	            // 拷贝一个镜像
	            var copy = element.cloneNode(true)
	            copy.setAttribute("ms-skip", "true")
	            avalon(copy).removeClass("oni-mmRouter-enter").addClass("oni-mmRouter-leave")
	            avalon(element).addClass("oni-mmRouter-enter")
	            element.parentNode.insertBefore(copy, element)
	            mmState.oldNodes.push(copy)
	            callStateFunc("onViewEnter", _currentState, element, copy)
	        }
	        return element
	    }
	
	    function inherit(parent, extra) {
	        return avalon.mix(new (avalon.mix(function () {
	        }, {prototype: parent}))(), extra);
	    }
	
	    /*
	     * @interface avalon.state 对avalon.router.get 进行重新封装，生成一个状态对象
	     * @param stateName 指定当前状态名
	     * @param opts 配置
	     * @param opts.url  当前状态对应的路径规则，与祖先状态们组成一个完整的匹配规则
	     * @param {Function} opts.ignoreChange 当mmState.currentState == this时，更新视图的时候调用该函数，return true mmRouter则不会去重写视图和scan，请确保该视图内用到的数据没有放到avalon vmodel $skipArray内
	     * @param opts.controller 如果不写views属性,则默认view为""，为默认的view指定一个控制器，该配置会直接作为avalon.controller的参数生成一个$ctrl对象
	     * @param opts.controllerUrl 指定默认view控制器的路径，适用于模块化开发，该情形下默认通过avalon.controller.loader去加载一个符合amd规范，并返回一个avalon.controller定义的对象，传入opts.params作参数
	     * @param opts.controllerProvider 指定默认view控制器的提供者，它可以是一个Promise，也可以为一个函数，传入opts.params作参数
	     @param opts.viewCache 是否缓存这个模板生成的dom，设置会覆盖dom元素上的data-view-cache，也可以分别配置到views上每个单独的view上
	     * @param opts.views: 如果不写views属性,则默认view【ms-view=""】为""，也可以通过指定一个viewname属性来配置【ms-view="viewname"】，对多个[ms-view]容器进行处理,每个对象应拥有template, templateUrl, templateProvider，可以给每个对象搭配一个controller||controllerUrl||controllerProvider属性
	     *     views的结构为
	     *<pre>
	     *     {
	     *        "": {template: "xxx"}
	     *        "aaa": {template: "xxx"}
	     *        "bbb@": {template: "xxx"}
	     *     }
	     *</pre>
	     *     views的每个键名(keyname)的结构为viewname@statename，
	     *         如果名字不存在@，则viewname直接为keyname，statename为opts.stateName
	     *         如果名字存在@, viewname为match[0], statename为match[1]
	     * @param opts.views.{viewname}.template 指定当前模板，也可以为一个函数，传入opts.params作参数，* @param opts.views.viewname.cacheController 是否缓存view的控制器，默认true
	     * @param opts.views.{viewname}.templateUrl 指定当前模板的路径，也可以为一个函数，传入opts.params作参数
	     * @param opts.views.{viewname}.templateProvider 指定当前模板的提供者，它可以是一个Promise，也可以为一个函数，传入opts.params作参数
	     * @param opts.views.{viewname}.ignoreChange 用法同state.ignoreChange，只是针对的粒度更细一些，针对到具体的view
	     * @param {Function} opts.onBeforeEnter 切入某个state之前触发，this指向对应的state，如果return false则会中断并退出整个状态机
	     * @param {Function} opts.onEnter 进入状态触发，可以返回false，或任意不为true的错误信息或一个promise对象，用法跟视图的$onEnter一致
	     * @param {Function} onEnter.params 视图所属的state的参数
	     * @param {Function} onEnter.resolve $onEnter return false的时候，进入同步等待，直到手动调用resolve
	     * @param {Function} onEnter.reject 数据加载失败，调用
	     * @param {Function} opts.onBeforeExit state退出前触发，this指向对应的state，如果return false则会中断并退出整个状态机
	     * @param {Function} opts.onExit 退出后触发，this指向对应的state
	     * @param opts.ignoreChange.changeType 值为"param"，表示params变化，值为"query"，表示query变化
	     * @param opts.ignoreChange.viewname 关联的ms-view name
	     * @param opts.abstract  表示它不参与匹配，this指向对应的state
	     * @param {private} opts.parentState 父状态对象（框架内部生成）
	     */
	    avalon.state = function (stateName, opts) {
	        var state = StateModel(stateName, opts)
	        avalon.router.get(state.url, function (params, _local) {
	            var me = this, promises = [], _resovle, _reject, _data = [], _callbacks = []
	            state.resolved = getPromise(function (rs, rj) {
	                _resovle = rs
	                _reject = rj
	            })
	            avalon.each(state.views, function (name, view) {
	                var params = me.params,
	                        reason = {
	                            type: "view",
	                            name: name,
	                            params: params,
	                            state: state,
	                            view: view
	                        },
	                viewLocal = _local[name] = {
	                    name: name,
	                    state: state,
	                    params: state.filterParams(params),
	                    ignoreChange: "ignoreChange" in view ? view.ignoreChange : me.ignoreChange,
	                    viewCache: "viewCache" in view ? view.viewCache : me.viewCache
	                },
	                promise = fromPromise(view, params, reason)
	                promises.push(promise)
	                // template不能cache
	                promise.then(function (s) {
	                    viewLocal.template = s
	                }, avalon.noop) // 捕获模板报错
	                var prom,
	                        callback = function ($ctrl) {
	                            viewLocal.vmodels = $ctrl.$vmodels
	                            view.$controller = viewLocal.$ctrl = $ctrl
	                            resolveData()
	                        },
	                        resolveData = function () {
	                            var $onEnter = view.$controller && view.$controller.$onEnter
	                            if ($onEnter) {
	                                var innerProm = getPromise(function (rs, rj) {
	                                    var reason = {
	                                        type: "data",
	                                        state: state,
	                                        params: params
	                                    },
	                                    res = $onEnter(params, rs, function (message) {
	                                        reason.message = message
	                                        rj(reason)
	                                    })
	                                    // if promise
	                                    if (res && res.then) {
	                                        _data.push(res)
	                                        res.then(function () {
	                                            rs(res)
	                                        })
	                                        // error msg
	                                    } else if (res && res !== true) {
	                                        reason.message = res
	                                        rj(reason)
	                                    } else if (res === undefine) {
	                                        rs()
	                                    }
	                                    // res === false will pause here
	                                })
	                                innerProm = innerProm.then(function (cb) {
	                                    avalon.isFunction(cb) && _callbacks.push(cb)
	                                })
	                                _data.push(innerProm)
	                            }
	                        }
	                // controller似乎可以缓存着
	                if (view.$controller && view.cacheController !== false) {
	                    return callback(view.$controller)
	                }
	                // 加载controller模块
	                if (view.controller) {
	                    prom = promise.then(function () {
	                        callback(avalon.controller(view.controller))
	                    })
	                } else if (view.controllerUrl) {
	                    prom = getPromise(function (rs, rj) {
	                        var url = avalon.isFunction(view.controllerUrl) ? view.controllerUrl(params) : view.controllerUrl
	                        url = url instanceof Array ? url : [url]
	                        avalon.controller.loader(url, function ($ctrl) {
	                            promise.then(function () {
	                                callback($ctrl)
	                                rs()
	                            })
	                        })
	                    })
	                } else if (view.controllerProvider) {
	                    var res = avalon.isFunction(view.controllerProvider) ? view.controllerProvider(params) : view.controllerProvider
	                    prom = getPromise(function (rs, rj) {
	                        // if promise
	                        if (res && res.then) {
	                            _data.push(res)
	                            res.then(function (r) {
	                                promise.then(function () {
	                                    callback(r)
	                                    rs()
	                                })
	                            }, function (e) {
	                                reason.message = e
	                                rj(reason)
	                            })
	                            // error msg
	                        } else {
	                            promise.then(function () {
	                                callback(res)
	                                rs()
	                            })
	                        }
	                    })
	                }
	                // is promise
	                if (prom && prom.then) {
	                    promises.push(prom)
	                }
	            })
	            // 模板和controller就绪
	            getPromise(promises).$then(function (values) {
	                state._local = _local
	                // 数据就绪
	                getPromise(_data).$then(function () {
	                    avalon.each(_callbacks, function (i, func) {
	                        func()
	                    })
	                    promises = _data = _callbacks = null
	                    _resovle()
	                })
	            })
	            return state.resolved
	
	        }, state)
	
	        return this
	    }
	
	    function isError(e) {
	        return e instanceof Error
	    }
	
	    // 将所有的promise error适配到这里来
	    function promiseError(e) {
	        if (isError(e)) {
	            throw e
	        } else {
	            callStateFunc("onError", mmState, e, e && e.state)
	        }
	    }
	
	    function getPromise(excutor) {
	        var prom = avalon.isFunction(excutor) ? new Promise(excutor) : Promise.all(excutor)
	        return prom
	    }
	    Promise.prototype.$then = function (onFulfilled, onRejected) {
	        var prom = this.then(onFulfilled, onRejected)
	        prom["catch"](promiseError)
	        return prom
	    }
	    avalon.state.onViewEntered = function (newNode, oldNode) {
	        if (newNode != oldNode)
	            oldNode.parentNode.removeChild(oldNode)
	    }
	    /*
	     *  @interface avalon.state.config 全局配置
	     *  @param {Object} config 配置对象
	     *  @param {Function} config.onBeforeUnload 开始切前的回调，this指向router对象，第一个参数是fromState，第二个参数是toState，return false可以用来阻止切换进行
	     *  @param {Function} config.onAbort onBeforeUnload return false之后，触发的回调，this指向mmState对象，参数同onBeforeUnload
	     *  @param {Function} config.onUnload url切换时候触发，this指向mmState对象，参数同onBeforeUnload
	     *  @param {Function} config.onBegin  开始切换的回调，this指向mmState对象，参数同onBeforeUnload，如果配置了onBegin，则忽略begin
	     *  @param {Function} config.onLoad 切换完成并成功，this指向mmState对象，参数同onBeforeUnload
	     *  @param {Function} config.onViewEnter 视图插入动画函数，有一个默认效果
	     *  @param {Node} config.onViewEnter.arguments[0] 新视图节点
	     *  @param {Node} config.onViewEnter.arguments[1] 旧的节点
	     *  @param {Function} config.onError 出错的回调，this指向对应的state，第一个参数是一个object，object.type表示出错的类型，比如view表示加载出错，object.name则对应出错的view name，object.xhr则是当使用默认模板加载器的时候的httpRequest对象，第二个参数是对应的state
	     */
	    avalon.state.config = function (config) {
	        avalon.mix(avalon.state, config || {})
	        return avalon
	    }
	    function callStateFunc(name, state) {
	        Event.$fire.apply(Event, arguments)
	        return avalon.state[name] ? avalon.state[name].apply(state || mmState.currentState, [].slice.call(arguments, 2)) : 0
	    }
	    // 状态原型，所有的状态都要继承这个原型
	    function StateModel(stateName, options) {
	        if (this instanceof StateModel) {
	            this.stateName = stateName
	            this.formate(options)
	        } else {
	            var state = _states[stateName] = new StateModel(stateName, options || {})
	            return state
	        }
	    }
	    StateModel.is = function (state) {
	        return state instanceof StateModel
	    }
	    StateModel.prototype = {
	        formate: function (options) {
	            avalon.mix(true, this, options)
	            var stateName = this.stateName,
	                    me = this,
	                    chain = stateName.split("."),
	                    len = chain.length - 1,
	                    sourceLocal = me.sourceLocal = {}
	            this.chain = []
	            avalon.each(chain, function (key, name) {
	                if (key == len) {
	                    me.chain.push(me)
	                } else {
	                    var n = chain.slice(0, key + 1).join("."),
	                            state = getStateByName(n)
	                    if (!state)
	                        throw new Error("必须先定义" + n)
	                    me.chain.push(state)
	                }
	            })
	            if (this.url === void 0) {
	                this.abstract = true
	            }
	            var parent = this.chain[len - 1] || _root
	            if (parent) {
	                this.url = parent.url + (this.url || "")
	                this.parentState = parent
	            }
	            if (!this.views && stateName != "") {
	                var view = {}
	                "template,templateUrl,templateProvider,controller,controllerUrl,controllerProvider,viewCache".replace(/\w+/g, function (prop) {
	                    copyTemplateProperty(view, me, prop)
	                })
	                var viewname = "viewname" in this ? this.viewname : ""
	                this.views = {}
	                this.views[viewname] = view
	            }
	            var views = {},
	                    viewsIsArray = this.views instanceof Array // 如果是一个数组
	
	            avalon.each(this.views, function (maybeName, view) {
	                var name = viewsIsArray ? view.name || "" : maybeName // 默认缺省
	                if (name.indexOf("@") < 0) {
	                    name += "@" + (parent ? parent.stateName || "" : "")
	                }
	                views[name] = view
	                sourceLocal[name] = {}
	            })
	            this.views = views
	            this._self = options
	            this._pending = false
	            this.visited = false
	            this.params = inherit(parent && parent.params || {})
	            this.oldParams = {}
	            this.keys = []
	
	            this.events = {}
	        },
	        watch: function (eventName, func) {
	            var events = this.events[eventName] || []
	            this.events[eventName] = events
	            events.push(func)
	            return func
	        },
	        fire: function (eventName, state) {
	            var events = this.events[eventName] || [], i = 0
	            while (events[i]) {
	                var res = events[i].apply(this, [].slice.call(arguments, 1))
	                if (res === false) {
	                    events.splice(i, 1)
	                } else {
	                    i++
	                }
	            }
	        },
	        unwatch: function (eventName, func) {
	            var events = this.events[eventName]
	            if (!events)
	                return
	            var i = 0
	            while (events[i]) {
	                if (events[i] == func)
	                    return events.splice(i, 1)
	                i++
	            }
	        },
	        paramsChanged: function (toParams) {
	            var changed = false, keys = this.keys, me = this, params = this.params
	            avalon.each(keys, function (index, item) {
	                var key = item.name
	                if (params[key] != toParams[key])
	                    changed = "param"
	            })
	            // query
	            if (!changed && mmState.currentState === this) {
	                changed = !objectCompare(toParams.query, mmState.query) && "query"
	            }
	            return changed
	        },
	        filterParams: function (toParams) {
	            var params = avalon.mix(true, {}, this.params), keys = this.keys
	            avalon.each(keys, function (index, item) {
	                params[item.name] = toParams[item.name]
	            })
	            return params
	        },
	        syncParams: function (toParams) {
	            var me = this
	            avalon.each(this.keys, function (index, item) {
	                var key = item.name
	                if (key in toParams)
	                    me.params[key] = toParams[key]
	            })
	        },
	        _onEnter: function () {
	            this.query = this.getQuery()
	            var me = this,
	                    arg = Array.prototype.slice.call(arguments),
	                    done = me._async(),
	                    prom = getPromise(function (rs, rj) {
	                        var reason = {
	                            type: "data",
	                            state: me,
	                            params: me.params
	                        },
	                        _reject = function (message) {
	                            reason.message = message
	                            done.apply(me, [false])
	                            rj(reason)
	                        },
	                                _resovle = function () {
	                                    done.apply(me)
	                                    rs()
	                                },
	                                res = me.onEnter.apply(me, arg.concat([_resovle, _reject]))
	                        // if promise
	                        if (res && res.then) {
	                            res.then(_resovle)["catch"](promiseError)
	                            // error msg
	                        } else if (res && res !== true) {
	                            _reject(res)
	                        } else if (res === undefine) {
	                            _resovle()
	                        }
	                        // res === false will pause here
	                    })
	        },
	        /*
	         * @interface state.getQuery 获取state的query，等价于state.query
	         *<pre>
	         *  onEnter: function() {
	         *      var query = this.getQuery()
	         *      or
	         *      this.query
	         *  }
	         *</pre> 
	         */
	        getQuery: function () {
	            return mmState.query
	        },
	        /*
	         * @interface state.getParams 获取state的params，等价于state.params
	         *<pre>
	         *  onEnter: function() {
	         *      var params = this.getParams()
	         *      or
	         *      this.params
	         *  }
	         *</pre> 
	         */
	        getParams: function () {
	            return this.params
	        },
	        _async: function () {
	            // 没有done回调的时候，防止死球
	            if (this.done)
	                this._pending = true
	            return this.done || avalon.noop
	        },
	        onBeforeEnter: avalon.noop, // 切入某个state之前触发
	        onEnter: avalon.noop, // 切入触发
	        onBeforeExit: avalon.noop, // state退出前触发
	        onExit: avalon.noop // 退出后触发
	    }
	
	    _root = StateModel("", {
	        url: "",
	        views: null,
	        "abstract": true
	    })
	
	    /*
	     * @interface avalon.controller 给avalon.state视图对象配置控制器
	     * @param name 控制器名字
	     * @param {Function} factory 控制器函数，传递一个内部生成的控制器对象作为参数
	     * @param {Object} factory.arguments[0] $ctrl 控制器的第一个参数：实际生成的控制器对象
	     * @param {Object} $ctrl.$vmodels 给视图指定一个scan的vmodels数组，实际scan的时候$vmodels.concat(dom树上下文继承的vmodels)
	     * @param {Function} $ctrl.$onBeforeUnload 该视图被卸载前触发，return false可以阻止视图卸载，并阻止跳转
	     * @param {Function} $ctrl.$onEnter 给该视图加载数据，可以返回false，或任意不为true的错误信息或一个promise对象，传递3个参数
	     * @param {Object} $ctrl.$onEnter.arguments[0] params第一个参数：视图所属的state的参数
	     * @param {Function} $ctrl.$onEnter.arguments[1] resolve $onEnter 第二个参数：return false的时候，进入同步等待，直到手动调用resolve
	     * @param {Function} $ctrl.$onEnter.arguments[2] reject 第三个参数：数据加载失败，调用
	     * @param {Function} $ctrl.$onRendered 视图元素scan完成之后，调用
	     */
	    avalon.controller = function () {
	        var first = arguments[0],
	                second = arguments[1]
	        if (first && (first instanceof _controller))
	            return first
	        var $ctrl = _controller()
	        if (avalon.isFunction(first)) {
	            first($ctrl)
	        } else if (avalon.isFunction(second)) {
	            $ctrl.name = first
	            second($ctrl)
	        } else if (typeof first == "string" || typeof first == "object") {
	            first = first instanceof Array ? first : Array.prototype.slice.call(arguments)
	            avalon.each(first, function (index, item) {
	                if (typeof item == "string") {
	                    first[index] = avalon.vmodels[item]
	                }
	                item = first[index]
	                if ("$onRendered" in item)
	                    $ctrl.$onRendered = item["$onRendered"]
	                if ("$onEnter" in  item)
	                    $ctrl.$onEnter = item["$onEnter"]
	            })
	            $ctrl.$vmodels = first
	        } else {
	            throw new Error("参数错误" + arguments)
	        }
	        return $ctrl
	    }
	    /*
	     *  @interface avalon.controller.loader avalon.controller异步引入模块的加载器，默认是通过avalon.require加载
	     */
	    avalon.controller.loader = function (url, callback) {
	        // 没有错误回调...
	        avalon.require(url, function ($ctrl) {
	            callback && callback($ctrl)
	        })
	    }
	
	    function _controller() {
	        if (!(this instanceof _controller))
	            return new _controller
	        this.$vmodels = []
	    }
	    _controller.prototype = {
	    }
	
	    function objectCompare(objA, objB) {
	        for (var i in objA) {
	            if (!(i in objB) || objA[i] !== objB[i])
	                return false
	        }
	        for (var i in objB) {
	            if (!(i in objA) || objA[i] !== objB[i])
	                return false
	        }
	        return true
	    }
	
	    //【avalon.state】的辅助函数，确保返回的是函数
	    function getFn(object, name) {
	        return typeof object[name] === "function" ? object[name] : avalon.noop
	    }
	
	    function getStateByName(stateName) {
	        return _states[stateName]
	    }
	    function getViewNodes(node, query) {
	        var nodes, query = query || "ms-view"
	        if (node.querySelectorAll) {
	            nodes = node.querySelectorAll("[" + query + "]")
	        } else {
	            nodes = Array.prototype.filter.call(node.getElementsByTagName("*"), function (node) {
	                return typeof node.getAttribute(query) === "string"
	            })
	        }
	        return nodes
	    }
	
	    // 【avalon.state】的辅助函数，opts.template的处理函数
	    function fromString(template, params, reason) {
	        var promise = getPromise(function (resolve, reject) {
	            var str = typeof template === "function" ? template(params) : template
	            if (typeof str == "string") {
	                resolve(str)
	            } else {
	                reason.message = "template必须对应一个字符串或一个返回字符串的函数"
	                reject(reason)
	            }
	        })
	        return promise
	    }
	    // 【fromUrl】的辅助函数，得到一个XMLHttpRequest对象
	    var getXHR = function () {
	        return new (window.XMLHttpRequest || ActiveXObject)("Microsoft.XMLHTTP")
	    }/*
	     *  @interface avalon.state.templateLoader 通过url异步加载模板的函数，默认是通过内置的httpRequest去加载，但是在node-webkit环境是不work的，因此开放了这个配置，用以自定义url模板加载器，会在一个promise实例里调用这个方法去加载模板
	     *  @param url 模板地址
	     *  @param resolve 加载成功，如果需要缓存模板，请调用<br>
	     resolve(avalon.templateCache[url] = templateString)<br>
	     否则，请调用<br>
	     resolve(templateString)<br>
	     *  @param reject 加载失败，请调用reject(reason)
	     *  @param reason 挂在失败原因的对象
	     */
	    avalon.state.templateLoader = function (url, resolve, reject, reason) {
	        var xhr = getXHR()
	        xhr.onreadystatechange = function () {
	            if (xhr.readyState === 4) {
	                var status = xhr.status;
	                if (status > 399 && status < 600) {
	                    reason.message = "templateUrl对应资源不存在或没有开启 CORS"
	                    reason.status = status
	                    reason.xhr = xhr
	                    reject(reason)
	                } else {
	                    resolve(avalon.templateCache[url] = xhr.responseText)
	                }
	            }
	        }
	        xhr.open("GET", url, true)
	        if ("withCredentials" in xhr) {
	            xhr.withCredentials = true
	        }
	        xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest")
	        xhr.send()
	    }
	    // 【avalon.state】的辅助函数，opts.templateUrl的处理函数
	    function fromUrl(url, params, reason) {
	        var promise = getPromise(function (resolve, reject) {
	            if (typeof url === "function") {
	                url = url(params)
	            }
	            if (typeof url !== "string") {
	                reason.message = "templateUrl必须对应一个URL"
	                return reject(reason)
	            }
	            if (avalon.templateCache[url]) {
	                return  resolve(avalon.templateCache[url])
	            }
	            avalon.state.templateLoader(url, resolve, reject, reason)
	        })
	        return promise
	    }
	    // 【avalon.state】的辅助函数，opts.templateProvider的处理函数
	    function fromProvider(fn, params, reason) {
	        var promise = getPromise(function (resolve, reject) {
	            if (typeof fn === "function") {
	                var ret = fn(params)
	                if (ret && ret.then || typeof ret == "string") {
	                    resolve(ret)
	                } else {
	                    reason.message = "templateProvider为函数时应该返回一个Promise或thenable对象或字符串"
	                    reject(reason)
	                }
	            } else if (fn && fn.then) {
	                resolve(fn)
	            } else {
	                reason.message = "templateProvider不为函数时应该对应一个Promise或thenable对象"
	                reject(reason)
	            }
	        })
	        return promise
	    }
	    // 【avalon.state】的辅助函数，将template或templateUrl或templateProvider转换为可用的Promise对象
	    function fromPromise(config, params, reason) {
	        return config.template ? fromString(config.template, params, reason) :
	                config.templateUrl ? fromUrl(config.templateUrl, params, reason) :
	                config.templateProvider ? fromProvider(config.templateProvider, params, reason) :
	                getPromise(function (resolve, reject) {
	                    reason.message = "必须存在template, templateUrl, templateProvider中的一个"
	                    reject(reason)
	                })
	    }
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(16)], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
	
	    function Router() {
	        var table = {}
	        "get,post,delete,put".replace(avalon.rword, function(name) {
	            table[name] = []
	        })
	        this.routingTable = table
	    }
	
	    function parseQuery(url) {
	        var array = url.split("?"), query = {}, path = array[0], querystring = array[1]
	        if (querystring) {
	            var seg = querystring.split("&"),
	                    len = seg.length, i = 0, s;
	            for (; i < len; i++) {
	                if (!seg[i]) {
	                    continue
	                }
	                s = seg[i].split("=")
	                query[decodeURIComponent(s[0])] = decodeURIComponent(s[1])
	            }
	        }
	        return {
	            path: path,
	            query: query
	        }
	    }
	
	
	    function queryToString(obj) {
	        if(typeof obj == 'string') return obj
	        var str = []
	        for(var i in obj) {
	            if(i == "query") continue
	            str.push(i + '=' + encodeURIComponent(obj[i]))
	        }
	        return str.length ? '?' + str.join("&") : ''
	    }
	
	    var placeholder = /([:*])(\w+)|\{(\w+)(?:\:((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g
	    Router.prototype = {
	        error: function(callback) {
	            this.errorback = callback
	        },
	        _pathToRegExp: function(pattern, opts) {
	            var keys = opts.keys = [],
	                    //      segments = opts.segments = [],
	                    compiled = '^', last = 0, m, name, regexp, segment;
	
	            while ((m = placeholder.exec(pattern))) {
	                name = m[2] || m[3]; // IE[78] returns '' for unmatched groups instead of null
	                regexp = m[4] || (m[1] == '*' ? '.*' : 'string')
	                segment = pattern.substring(last, m.index);
	                var type = this.$types[regexp]
	                var key = {
	                    name: name
	                }
	                if (type) {
	                    regexp = type.pattern
	                    key.decode = type.decode
	                }
	                keys.push(key)
	                compiled += quoteRegExp(segment, regexp, false)
	                //  segments.push(segment)
	                last = placeholder.lastIndex
	            }
	            segment = pattern.substring(last);
	            compiled += quoteRegExp(segment) + (opts.strict ? opts.last : "\/?") + '$';
	            var sensitive = typeof opts.caseInsensitive === "boolean" ? opts.caseInsensitive : true
	            //  segments.push(segment);
	            opts.regexp = new RegExp(compiled, sensitive ? 'i' : undefined);
	            return opts
	
	        },
	        //添加一个路由规则
	        add: function(method, path, callback, opts) {
	            var array = this.routingTable[method.toLowerCase()]
	            if (path.charAt(0) !== "/") {
	                throw "path必须以/开头"
	            }
	            opts = opts || {}
	            opts.callback = callback
	            if (path.length > 2 && path.charAt(path.length - 1) === "/") {
	                path = path.slice(0, -1)
	                opts.last = "/"
	            }
	            avalon.Array.ensure(array, this._pathToRegExp(path, opts))
	        },
	        //判定当前URL与已有状态对象的路由规则是否符合
	        route: function(method, path, query) {
	            path = path.trim()
	            var states = this.routingTable[method]
	            for (var i = 0, el; el = states[i++]; ) {
	                var args = path.match(el.regexp)
	                if (args) {
	                    el.query = query || {}
	                    el.path = path
	                    el.params = {}
	                    var keys = el.keys
	                    args.shift()
	                    if (keys.length) {
	                        this._parseArgs(args, el)
	                    }
	                    return  el.callback.apply(el, args)
	                }
	            }
	            if (this.errorback) {
	                this.errorback()
	            }
	        },
	        _parseArgs: function(match, stateObj) {
	            var keys = stateObj.keys
	            for (var j = 0, jn = keys.length; j < jn; j++) {
	                var key = keys[j]
	                var value = match[j] || ""
	                if (typeof key.decode === "function") {//在这里尝试转换参数的类型
	                    var val = key.decode(value)
	                } else {
	                    try {
	                        val = JSON.parse(value)
	                    } catch (e) {
	                        val = value
	                    }
	                }
	                match[j] = stateObj.params[key.name] = val
	            }
	        },
	        getLastPath: function() {
	            return getCookie("msLastPath")
	        },
	        setLastPath: function(path) {
	            setCookie("msLastPath", path)
	        },
	        /*
	         *  @interface avalon.router.redirect
	         *  @param hash 访问的url hash
	         */
	        redirect: function(hash) {
	            this.navigate(hash, {replace: true})
	        },
	        /*
	         *  @interface avalon.router.navigate
	         *  @param hash 访问的url hash
	         *  @param options 扩展配置
	         *  @param options.replace true替换history，否则生成一条新的历史记录
	         *  @param options.silent true表示只同步url，不触发url变化监听绑定
	        */
	        navigate: function(hash, options) {
	            var parsed = parseQuery((hash.charAt(0) !== "/" ? "/" : "") + hash),
	                options = options || {}
	            if(hash.charAt(0) === "/")
	                hash = hash.slice(1)// 修正出现多扛的情况 fix http://localhost:8383/mmRouter/index.html#!//
	            // 在state之内有写history的逻辑
	            if(!avalon.state || options.silent) avalon.history && avalon.history.updateLocation(hash, avalon.mix({}, options, {silent: true}))
	            // 只是写历史而已
	            if(!options.silent) {
	                this.route("get", parsed.path, parsed.query, options)
	            }
	        },
	        /*
	         *  @interface avalon.router.when 配置重定向规则
	         *  @param path 被重定向的表达式，可以是字符串或者数组
	         *  @param redirect 重定向的表示式或者url
	        */
	        when: function(path, redirect) {
	            var me = this,
	                path = path instanceof Array ? path : [path]
	            avalon.each(path, function(index, p) {
	                me.add("get", p, function() {
	                    var info = me.urlFormate(redirect, this.params, this.query)
	                    me.navigate(info.path + info.query, {replace: true})
	                })
	            })
	            return this
	        },
	        /*
	         *  @interface avalon.router.get 添加一个router规则
	         *  @param path url表达式
	         *  @param callback 对应这个url的回调
	        */
	        get: function(path, callback) {},
	        urlFormate: function(url, params, query) {
	            var query = query ? queryToString(query) : "",
	                hash = url.replace(placeholder, function(mat) {
	                    var key = mat.replace(/[\{\}]/g, '').split(":")
	                    key = key[0] ? key[0] : key[1]
	                    return params[key] !== undefined ? params[key] : ''
	                }).replace(/^\//g, '')
	            return {
	                path: hash,
	                query: query
	            }
	        },
	        /* *
	         `'/hello/'` - 匹配'/hello/'或'/hello'
	         `'/user/:id'` - 匹配 '/user/bob' 或 '/user/1234!!!' 或 '/user/' 但不匹配 '/user' 与 '/user/bob/details'
	         `'/user/{id}'` - 同上
	         `'/user/{id:[^/]*}'` - 同上
	         `'/user/{id:[0-9a-fA-F]{1,8}}'` - 要求ID匹配/[0-9a-fA-F]{1,8}/这个子正则
	         `'/files/{path:.*}'` - Matches any URL starting with '/files/' and captures the rest of the
	         path into the parameter 'path'.
	         `'/files/*path'` - ditto.
	         */
	        // avalon.router.get("/ddd/:dddID/",callback)
	        // avalon.router.get("/ddd/{dddID}/",callback)
	        // avalon.router.get("/ddd/{dddID:[0-9]{4}}/",callback)
	        // avalon.router.get("/ddd/{dddID:int}/",callback)
	        // 我们甚至可以在这里添加新的类型，avalon.router.$type.d4 = { pattern: '[0-9]{4}', decode: Number}
	        // avalon.router.get("/ddd/{dddID:d4}/",callback)
	        $types: {
	            date: {
	                pattern: "[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])",
	                decode: function(val) {
	                    return new Date(val.replace(/\-/g, "/"))
	                }
	            },
	            string: {
	                pattern: "[^\\/]*"
	            },
	            bool: {
	                decode: function(val) {
	                    return parseInt(val, 10) === 0 ? false : true;
	                },
	                pattern: "0|1"
	            },
	            int: {
	                decode: function(val) {
	                    return parseInt(val, 10);
	                },
	                pattern: "\\d+"
	            }
	        }
	    }
	
	    "get,put,delete,post".replace(avalon.rword, function(method) {
	        return  Router.prototype[method] = function(a, b, c) {
	            this.add(method, a, b, c)
	        }
	    })
	    function quoteRegExp(string, pattern, isOptional) {
	        var result = string.replace(/[\\\[\]\^$*+?.()|{}]/g, "\\$&");
	        if (!pattern)
	            return result;
	        var flag = isOptional ? '?' : '';
	        return result + flag + '(' + pattern + ')' + flag;
	    }
	    function supportLocalStorage() {
	        try {
	            localStorage.setItem("avalon", 1)
	            localStorage.removeItem("avalon")
	            return true
	        } catch (e) {
	            return false
	        }
	    }
	
	    if (supportLocalStorage()) {
	        Router.prototype.getLastPath = function() {
	            return localStorage.getItem("msLastPath")
	        }
	        var cookieID
	        Router.prototype.setLastPath = function (path) {
	            if (cookieID) {
	                clearTimeout(cookieID)
	                cookieID = null
	            }
	            localStorage.setItem("msLastPath", path)
	            cookieID = setTimeout(function () {
	                localStorage.removItem("msLastPath")
	            }, 1000 * 60 * 60 * 24)
	        }
	    }
	
	       
	
	    function escapeCookie(value) {
	        return String(value).replace(/[,;"\\=\s%]/g, function(character) {
	            return encodeURIComponent(character)
	        });
	    }
	    function setCookie(key, value) {
	        var date = new Date()//将date设置为1天以后的时间 
	        date.setTime(date.getTime() + 1000 * 60 * 60 * 24)
	        document.cookie = escapeCookie(key) + '=' + escapeCookie(value) + ";expires=" + date.toGMTString()
	    }
	    function getCookie(name) {
	        var m = String(document.cookie).match(new RegExp('(?:^| )' + name + '(?:(?:=([^;]*))|;|$)')) || ["", ""]
	        return decodeURIComponent(m[1])
	    }
	
	    avalon.router = new Router
	
	    return avalon
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
	/*
	 <!DOCTYPE html>
	 <html>
	 <head>
	 <meta charset="utf-8">
	 <title>路由系统</title>
	 <script src="avalon.js"></script>
	 <script>
	 require(["mmRouter"], function() {
	 var model = avalon.define('xxx', function(vm) {
	 vm.currPath = ""
	 })
	 avalon.router.get("/aaa", function(a) {
	 model.currPath = this.path
	 })
	 avalon.router.get("/bbb", function(a) {
	 model.currPath = this.path
	 })
	 avalon.router.get("/ccc", function(a) {
	 model.currPath = this.path
	 })
	 avalon.router.get("/ddd/:ddd", function(a) {//:ddd为参数
	 avalon.log(a)
	 model.currPath = this.path
	 })
	 avalon.router.get("/eee", function(a) {
	 model.currPath = this.path
	 })
	 avalon.history.start({
	 html5Mode: true,
	 basepath: "/avalon"
	 })
	 avalon.scan()
	 })
	 </script>
	 </head>
	 <body >
	 <div ms-controller="xxx">
	 <ul>
	 <li><a href="#!/aaa">aaa</a></li>
	 <li><a href="#!/bbb">bbb</a></li>
	 <li><a href="#!/ccc">ccc</a></li>
	 <li><a href="#!/ddd/222">ddd</a></li>
	 <li><a href="#!/eee">eee</a></li>
	 </ul>
	 <div style="color:red">{{currPath}}</div>
	 <div style="height: 600px;width:1px;">
	 
	 </div>
	 <p id="eee">会定位到这里</p>
	 </div>
	 
	 </body>
	 </html>
	 
	 */


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2)], __WEBPACK_AMD_DEFINE_RESULT__ = function(avalon) {
	    var anchorElement = document.createElement('a')
	
	    var History = avalon.History = function() {
	        this.location = location
	    }
	
	    History.started = false
	    //取得当前IE的真实运行环境
	    History.IEVersion = (function() {
	        var mode = document.documentMode
	        return mode ? mode : window.XMLHttpRequest ? 7 : 6
	    })()
	
	    History.defaults = {
	        basepath: "/",
	        html5Mode: false,
	        hashPrefix: "!",
	        iframeID: null, //IE6-7，如果有在页面写死了一个iframe，这样似乎刷新的时候不会丢掉之前的历史
	        interval: 50, //IE6-7,使用轮询，这是其时间时隔
	        fireAnchor: true,//决定是否将滚动条定位于与hash同ID的元素上
	        routeElementJudger: avalon.noop // 判断a元素是否是触发router切换的链接
	    }
	
	    var oldIE = window.VBArray && History.IEVersion <= 7
	    var supportPushState = !!(window.history.pushState)
	    var supportHashChange = !!("onhashchange" in window && (!window.VBArray || !oldIE))
	    History.prototype = {
	        constructor: History,
	        getFragment: function(fragment) {
	            if (fragment == null) {
	                if (this.monitorMode === "popstate") {
	                    fragment = this.getPath()
	                } else {
	                    fragment = this.getHash()
	                }
	            }
	            return fragment.replace(/^[#\/]|\s+$/g, "")
	        },
	        getHash: function(window) {
	            // IE6直接用location.hash取hash，可能会取少一部分内容
	            // 比如 http://www.cnblogs.com/rubylouvre#stream/xxxxx?lang=zh_c
	            // ie6 => location.hash = #stream/xxxxx
	            // 其他浏览器 => location.hash = #stream/xxxxx?lang=zh_c
	            // firefox 会自作多情对hash进行decodeURIComponent
	            // 又比如 http://www.cnblogs.com/rubylouvre/#!/home/q={%22thedate%22:%2220121010~20121010%22}
	            // firefox 15 => #!/home/q={"thedate":"20121010~20121010"}
	            // 其他浏览器 => #!/home/q={%22thedate%22:%2220121010~20121010%22}
	            var path = (window || this).location.href
	            return this._getHash(path.slice(path.indexOf("#")))
	        },
	        _getHash: function(path) {
	            if (path.indexOf("#/") === 0) {
	                return decodeURIComponent(path.slice(2))
	            }
	            if (path.indexOf("#!/") === 0) {
	                return decodeURIComponent(path.slice(3))
	            }
	            return ""
	        },
	        getPath: function() {
	            var path = decodeURIComponent(this.location.pathname + this.location.search)
	            var root = this.basepath.slice(0, -1)
	            if (!path.indexOf(root))
	                path = path.slice(root.length)
	            return path.slice(1)
	        },
	        _getAbsolutePath: function(a) {
	            return !a.hasAttribute ? a.getAttribute("href", 4) : a.href
	        },
	        /*
	         * @interface avalon.history.start 开始监听历史变化
	         * @param options 配置参数
	         * @param options.hashPrefix hash以什么字符串开头，默认是 "!"，对应实际效果就是"#!"
	         * @param options.routeElementJudger 判断a元素是否是触发router切换的链接的函数，return true则触发切换，默认为avalon.noop，history内部有一个判定逻辑，是先判定a元素的href属性是否以hashPrefix开头，如果是则当做router切换元素，因此综合判定规则是 href.indexOf(hashPrefix) == 0 || routeElementJudger(ele, ele.href)，如果routeElementJudger返回true则跳转至href，如果返回的是字符串，则跳转至返回的字符串，如果返回false则返回浏览器默认行为
	         * @param options.html5Mode 是否采用html5模式，即不使用hash来记录历史，默认false
	         * @param options.fireAnchor 决定是否将滚动条定位于与hash同ID的元素上，默认为true
	         * @param options.basepath 根目录，默认为"/"
	         */
	        start: function(options) {
	            if (History.started)
	                throw new Error("avalon.history has already been started")
	            History.started = true
	            this.options = avalon.mix({}, History.defaults, options)
	            //IE6不支持maxHeight, IE7支持XMLHttpRequest, IE8支持window.Element，querySelector, 
	            //IE9支持window.Node, window.HTMLElement, IE10不支持条件注释
	            //确保html5Mode属性存在,并且是一个布尔
	            this.html5Mode = !!this.options.html5Mode
	            //监听模式
	            this.monitorMode = this.html5Mode ? "popstate" : "hashchange"
	            if (!supportPushState) {
	                if (this.html5Mode) {
	                    avalon.log("如果浏览器不支持HTML5 pushState，强制使用hash hack!")
	                    this.html5Mode = false
	                }
	                this.monitorMode = "hashchange"
	            }
	            if (!supportHashChange) {
	                this.monitorMode = "iframepoll"
	            }
	            this.prefix = "#" + this.options.hashPrefix + "/"
	            //确认前后都存在斜线， 如"aaa/ --> /aaa/" , "/aaa --> /aaa/", "aaa --> /aaa/", "/ --> /"
	            this.basepath = ("/" + this.options.basepath + "/").replace(/^\/+|\/+$/g, "/")  // 去最左右两边的斜线
	
	            this.fragment = this.getFragment()
	
	            anchorElement.href = this.basepath
	            this.rootpath = this._getAbsolutePath(anchorElement)
	            var that = this
	
	            var html = '<!doctype html><html><body>@</body></html>'
	            if (this.options.domain) {
	                html = html.replace("<body>", "<script>document.domain =" + this.options.domain + "</script><body>")
	            }
	            this.iframeHTML = html
	            if (this.monitorMode === "iframepoll") {
	                //IE6,7在hash改变时不会产生历史，需要用一个iframe来共享历史
	                avalon.ready(function() {
	                    if(that.iframe) return
	                    var iframe = that.iframe || document.getElementById(that.iframeID) || document.createElement('iframe')
	                    iframe.src = 'javascript:0'
	                    iframe.style.display = 'none'
	                    iframe.tabIndex = -1
	                    document.body.appendChild(iframe)
	                    that.iframe = iframe.contentWindow
	                    that._setIframeHistory(that.prefix + that.fragment)
	                })
	
	            }
	
	            // 支持popstate 就监听popstate
	            // 支持hashchange 就监听hashchange
	            // 否则的话只能每隔一段时间进行检测了
	            function checkUrl(e) {
	                var iframe = that.iframe
	                if (that.monitorMode === "iframepoll" && !iframe) {
	                    return false
	                }
	                var pageHash = that.getFragment(), hash
	                if (iframe) {//IE67
	                    var iframeHash = that.getHash(iframe)
	                    //与当前页面hash不等于之前的页面hash，这主要是用户通过点击链接引发的
	                    if (pageHash !== that.fragment) {
	                        that._setIframeHistory(that.prefix + pageHash)
	                        hash = pageHash
	                        //如果是后退按钮触发hash不一致
	                    } else if (iframeHash !== that.fragment) {
	                        that.location.hash = that.prefix + iframeHash
	                        hash = iframeHash
	                    }
	
	                } else if (pageHash !== that.fragment) {
	                    hash = pageHash
	                }
	                if (hash !== void 0) {
	                    that.fragment = hash
	                    that.fireRouteChange(hash, {fromHistory: true})
	                }
	            }
	
	            //thanks https://github.com/browserstate/history.js/blob/master/scripts/uncompressed/history.html4.js#L272
	
	            // 支持popstate 就监听popstate
	            // 支持hashchange 就监听hashchange(IE8,IE9,FF3)
	            // 否则的话只能每隔一段时间进行检测了(IE6, IE7)
	            switch (this.monitorMode) {
	                case "popstate":
	                    this.checkUrl = avalon.bind(window, "popstate", checkUrl)
	                    this._fireLocationChange = checkUrl
	                    break
	                case  "hashchange":
	                    this.checkUrl = avalon.bind(window, "hashchange", checkUrl)
	                    break;
	                case  "iframepoll":
	                    this.checkUrl = setInterval(checkUrl, this.options.interval)
	                    break;
	            }
	            //根据当前的location立即进入不同的路由回调
	            avalon.ready(function() {
	                that.fireRouteChange(that.fragment || "/", {replace: true})
	            })
	        },
	        fireRouteChange: function(hash, options) {
	            var router = avalon.router
	            if (router && router.navigate) {
	                router.setLastPath(hash)
	                router.navigate(hash === "/" ? hash : "/" + hash, options)
	            }
	            if (this.options.fireAnchor) {
	                scrollToAnchorId(hash.replace(/\?.*/g,""))
	            }
	        },
	        // 中断URL的监听
	        stop: function() {
	            avalon.unbind(window, "popstate", this.checkUrl)
	            avalon.unbind(window, "hashchange", this.checkUrl)
	            clearInterval(this.checkUrl)
	            History.started = false
	        },
	        updateLocation: function(hash, options, urlHash) {
	            var options = options || {},
	                rp = options.replace,
	                st =    options.silent
	            if (this.monitorMode === "popstate") {
	                // html5 mode 第一次加载的时候保留之前的hash
	                var path = this.rootpath + hash + (urlHash || "")
	                // html5 model包含query
	                if(path != this.location.href.split("#")[0]) history[rp ? "replaceState" : "pushState"]({path: path}, document.title, path)
	                if(!st) this._fireLocationChange()
	            } else {
	                var newHash = this.prefix + hash
	                if(st && hash != this.getHash()) {
	                    this._setIframeHistory(newHash, rp)
	                    if(this.fragment) avalon.router.setLastPath(this.fragment)
	                    this.fragment = this._getHash(newHash)
	                }
	                this._setHash(this.location, newHash, rp)
	            }
	        },
	        _setHash: function(location, hash, replace){
	            var href = location.href.replace(/(javascript:|#).*$/, '')
	            if (replace){
	                location.replace(href + hash)
	            }
	            else location.hash = hash
	        },
	        _setIframeHistory: function(hash, replace) {
	            if(!this.iframe) return
	            var idoc = this.iframe.document
	                idoc.open()
	                idoc.write(this.iframeHTML)
	                idoc.close()
	            this._setHash(idoc.location, hash, replace)
	        }
	    }
	
	    avalon.history = new History
	
	    //https://github.com/asual/jquery-address/blob/master/src/jquery.address.js
	
	    //劫持页面上所有点击事件，如果事件源来自链接或其内部，
	    //并且它不会跳出本页，并且以"#/"或"#!/"开头，那么触发updateLocation方法
	    avalon.bind(document, "click", function(event) {
	        var defaultPrevented = "defaultPrevented" in event ? event['defaultPrevented'] : event.returnValue === false,
	            routeElementJudger = avalon.history.options.routeElementJudger
	        if (defaultPrevented || event.ctrlKey || event.metaKey || event.which === 2)
	            return
	        var target = event.target
	        while (target.nodeName !== "A") {
	            target = target.parentNode
	            if (!target || target.tagName === "BODY") {
	                return
	            }
	        }
	
	        if (targetIsThisWindow(target.target)) {
	            var href = oldIE ? target.getAttribute("href", 2) : target.getAttribute("href") || target.getAttribute("xlink:href")
	            var prefix = avalon.history.prefix
	            if (href === null) { // href is null if the attribute is not present
	                return
	            }
	            var hash = href.replace(prefix, "").trim()
	            if(!(href.indexOf(prefix) === 0 && hash !== "")) {
	                hash = routeElementJudger(target, href)
	                if(hash === true) hash = href
	            }
	            if (hash) {
	                event.preventDefault()
	                avalon.router && avalon.router.navigate(hash)
	            }
	        }
	    })
	
	    //判定A标签的target属性是否指向自身
	    //thanks https://github.com/quirkey/sammy/blob/master/lib/sammy.js#L219
	    function targetIsThisWindow(targetWindow) {
	        if (!targetWindow || targetWindow === window.name || targetWindow === '_self' || (targetWindow === 'top' && window == window.top)) {
	            return true
	        }
	        return false
	    }
	    //得到页面第一个符合条件的A标签
	    function getFirstAnchor(list) {
	        for (var i = 0, el; el = list[i++]; ) {
	            if (el.nodeName === "A") {
	                return el
	            }
	        }
	    }
	
	    function scrollToAnchorId(hash, el) {
	        if ((el = document.getElementById(hash))) {
	            el.scrollIntoView()
	        } else if ((el = getFirstAnchor(document.getElementsByName(hash)))) {
	            el.scrollIntoView()
	        } else {
	            window.scrollTo(0, 0)
	        }
	    }
	    return avalon
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
	
	// 主要参数有 basepath  html5Mode  hashPrefix  interval domain fireAnchor


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * @cnName 分页组件
	 * @enName pager
	 * @introduce
	 *  <p> 分页组件 用于各种列表与表格的下方 。</p>
	 */
	
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2),
	    __webpack_require__(18),
	    __webpack_require__(19),
	    __webpack_require__(20)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function (avalon, template) {
	
	    var widget = avalon.ui.pager = function (element, data, vmodels) {
	        var options = data.pagerOptions
	        var pageOptions = options.options
	        if (Array.isArray(pageOptions)) {
	            options.options = pageOptions.map(function (el) {
	                var obj = {}
	                switch (typeof el) {
	                    case "number":
	                    case "string":
	                        obj.value = el
	                        obj.text = el
	                        return obj
	                    case "object":
	                        return el
	                }
	            })
	        } else {
	            options.options = []
	        }
	        if (vmodels.cb) {
	            template = template.replace(/ms-title/g, "ms-attr-title")
	        }
	        //方便用户对原始模板进行修改,提高制定性
	        options.template = options.getTemplate(template, options)
	        options._currentPage = options.currentPage
	        var vmodel = avalon.define(data.pagerId, function (vm) {
	            avalon.mix(vm, options, {
	                regional: widget.defaultRegional
	            })
	            vm.widgetElement = element
	            vm.rootElement = {}
	            vm.$skipArray = ["showPages", "rootElement", "widgetElement", "template", "ellipseText", "alwaysShowPrev", "alwaysShowNext"]
	            //这些属性不被监控
	            vm.$init = function (continueScan) {
	                var pageHTML = options.template
	                element.style.display = "none"
	                setTimeout(function () {
	                    element.innerHTML = pageHTML
	                    vm.rootElement = element.getElementsByTagName("*")[0]
	                    element.style.display = "block"
	                    if (continueScan) {
	                        continueScan()
	                    } else {
	                        avalon.log("avalon请尽快升到1.3.7+")
	                        avalon.scan(element, [vmodel].concat(vmodels))
	                        if (typeof options.onInit === "function") {
	                            options.onInit.call(element, vmodel, options, vmodels)
	                        }
	                    }
	                }, 100)
	            }
	            vm.$remove = function () {
	                element.innerHTML = element.textContent = ""
	            }
	            vm.jumpPage = function (event, page) {
	                event.preventDefault()
	                var enabled = this.className.indexOf("state-disabled") === -1
	                if (enabled && page !== vm.currentPage) {
	                    switch (page) {
	                        case "first":
	                            vm.currentPage = 1
	                            break
	                        case "last":
	                            vm.currentPage = vm.totalPages
	                            break
	                        case "next":
	                            vm.currentPage++
	                            if (vm.currentPage > vm.totalPages) {
	                                vm.currentPage = vm.totalPages
	                            }
	                            break
	                        case "prev":
	                            vm.currentPage--
	                            if (vm.currentPage < 1) {
	                                vm.currentPage = 1
	                            }
	                            break
	                        default:
	                            vm.currentPage = page
	                            break
	                    }
	                    vm.onJump.call(element, event, vm)
	                    efficientChangePages(vm.pages, getPages(vm))
	                }
	            }
	            vm.$watch("totalItems", function () {
	                efficientChangePages(vm.pages, getPages(vm))
	            })
	            vm.$watch("perPages", function (a) {
	                vm.currentPage = 1
	                efficientChangePages(vm.pages, getPages(vm))
	            })
	            vm.$watch("currentPage", function (a) {
	                vmodel._currentPage = a
	                efficientChangePages(vm.pages, getPages(vm))
	            })
	            vm.isShowPrev = function () {
	                var a = vm.alwaysShowPrev;
	                var b = vm.firstPage
	                return a || b !== 1
	            }
	            vm.isShowNext = function () {
	                var a = vm.alwaysShowNext
	                var b = vm.lastPage
	                var c = vm.totalPages
	                return a || b !== c
	            }
	
	            vm.changeCurrentPage = function (e, value) {
	                if (e.type === "keyup") {
	                    value = this.value
	                    if (e.keyCode !== 13)
	                        return
	                } else {
	                    value = vmodel._currentPage
	                }
	                value = parseInt(value, 10) || 1
	                if (value > vmodel.totalPages || value < 1)
	                    return
	                //currentPage需要转换为Number类型 fix lb1064@qq.com
	                vmodel.currentPage = value
	                vmodel.pages = getPages(vmodel)
	                vmodel.onJump.call(element, e, vm);
	            }
	            vm.pages = []
	            vm.getPages = getPages
	
	            //设置语言包
	            vm.setRegional = function (regional) {
	                vmodel.regional = regional
	            }
	            vm._getTotalPages = function (totalPages) {
	                //return {{regional.totalText}}{{totalPages}}{{regional.pagesText}}，{{regional.toText}}{{regional.numberText}}
	                var regional = vmodel.regional,
	                        html = [regional.totalText, totalPages]
	
	                if (totalPages > 1) {
	                    html.push(regional.pagesText)
	                } else {
	                    html.push(regional.pageText)
	                }
	
	                html = html.concat([" ", regional.jumpToText, regional.numberText])
	
	                return html.join("")
	            }
	
	            /**
	             * @config {Function} 获取页码上的title的函数
	             * @param {String|Number} a 当前页码的类型，如first, prev, next, last, 1, 2, 3
	             * @param {Number} currentPage 当前页码
	             * @param {Number} totalPages 最大页码
	             * @returns {String}
	             */
	            vm.getTitle = function (a, currentPage, totalPages) {
	
	                var regional = vmodel.regional
	
	                switch (a) {
	                    case "first":
	                        if (currentPage == 1) {
	                            return regional.currentText
	                        }
	                        return regional.jumpToText + " " + regional.firstText
	                    case "prev":
	                        return regional.jumpToText + " " + regional.prevText
	                    case "next":
	                        return regional.jumpToText + " " + regional.nextText
	                    case "last":
	                        if (currentPage == totalPages) {
	                            return regional.currentText
	                        }
	                        return regional.jumpToText + " " + regional.lastText
	                    default:
	                        if (a === currentPage) {
	                            return regional.currentText
	                        }
	                        return regional.jumpToText + regional.numberText + " " + a + regional.pageText
	                }
	            }
	        })
	        vmodel.pages = getPages(vmodel)
	
	        return vmodel
	    }
	    //vmodel.pages = getPages(vmodel) 会波及一些其他没有改动的元素节点,现在只做个别元素的添加删除操作
	    function efficientChangePages(aaa, bbb) {
	        var obj = {}
	        for (var i = 0, an = aaa.length; i < an; i++) {
	            var el = aaa[i]
	            obj[el] = {action: "del", el: el}
	        }
	        for (var i = 0, bn = bbb.length; i < bn; i++) {
	            var el = bbb[i]
	            if (obj[el]) {
	                obj[el] = {action: "retain", el: el}
	            } else {
	                obj[el] = {action: "add", el: el}
	            }
	        }
	        var scripts = []
	        for (var i in obj) {
	            scripts.push({
	                action: obj[i].action,
	                el: obj[i].el
	            })
	        }
	        scripts.sort(function (a, b) {
	            return a.el - b.el
	        })
	        scripts.forEach(function (el, index) {
	            el.index = index
	        })
	        //添加添加
	        var reverse = []
	        for (var i = 0, el; el = scripts[i++]; ) {
	            switch (el.action) {
	                case "add":
	                    aaa.splice(el.index, 0, el.el)
	                    break;
	                case "del":
	                    reverse.unshift(el)
	                    break;
	            }
	        }
	        //再删除
	        for (var i = 0, el; el = reverse[i++]; ) {
	            aaa.splice(el.index, 1)
	        }
	
	    }
	
	    //默认语言包为中文简体
	    widget.regional = []
	    widget.regional["zh-CN"] = {
	        prevText: "上一页",
	        nextText: "下一页",
	        confirmText: "确定",
	        totalText: "共",
	        pagesText: "页",
	        pageText: "页",
	        toText: "到",
	        jumpToText: "跳转到",
	        currentText: "当前页",
	        firstText: "第一页",
	        lastText: "最后一页",
	        numberText: "第"
	    }
	
	    //设置默认语言包
	    widget.defaultRegional = widget.regional["zh-CN"]
	
	    widget.defaults = {
	        perPages: 10, //@config {Number} 每页包含多少条目
	        showPages: 10, //@config {Number} 中间部分一共要显示多少页(如果两边出现省略号,即它们之间的页数) 
	        currentPage: 1, //@config {Number} 当前选中的页面 (按照人们日常习惯,是从1开始)，它会被高亮 
	        _currentPage: 1, //@config {Number}  跳转台中的输入框显示的数字，它默认与currentPage一致
	        totalItems: 200, //@config {Number} 总条目数
	        totalPages: 0, //@config {Number} 总页数,通过Math.ceil(vm.totalItems / vm.perPages)求得
	        pages: [], //@config {Array} 要显示的页面组成的数字数组，如[1,2,3,4,5,6,7]
	        nextText: ">", //@config {String} “下一页”分页按钮上显示的文字 
	        prevText: "<", //@config {String} “上一页”分页按钮上显示的文字 
	        ellipseText: "…", //@config {String} 省略的页数用什么文字表示 
	        firstPage: 0, //@config {Number} 当前可显示的最小页码，不能小于1
	        lastPage: 0, //@config {Number} 当前可显示的最大页码，不能大于totalPages
	        alwaysShowNext: false, //@config {Boolean} 总是显示向后按钮
	        alwaysShowPrev: false, //@config {Boolean} 总是显示向前按钮
	        showFirstOmit: false,
	        showLastOmit: false,
	        showJumper: false, //是否显示输入跳转台
	        /*
	         * @config {Function} 用于重写模板的函数 
	         * @param {String} tmpl
	         * @param {Object} opts
	         * @returns {String}
	         */
	        getTemplate: function (tmpl, opts) {
	            return tmpl
	        },
	        options: [], // @config {Array}数字数组或字符串数组或对象数组,但都转换为对象数组,每个对象都应包含text,value两个属性, 用于决定每页有多少页(看avalon.pager.ex3.html) 
	        /**
	         * @config {Function} 页面跳转时触发的函数,如果当前链接处于不可以点状态(oni-state-disabled),是不会触发的
	         * @param {Event} e
	         * @param {Object} vm  组件对应的VM
	         */
	        onJump: function (e, vm) {
	        }
	    }
	
	    function getPages(vm) {
	        var c = vm.currentPage, max = Math.ceil((vm.totalItems||0) / vm.perPages), pages = [], s = vm.showPages,
	                left = c, right = c
	        //一共有p页，要显示s个页面
	        vm.totalPages = max
	        if (max <= s) {
	            for (var i = 1; i <= max; i++) {
	                pages.push(i)
	            }
	        } else {
	            pages.push(c)
	            while (true) {
	                if (pages.length >= s) {
	                    break
	                }
	                if (left > 1) {//在日常生活是以1开始的
	                    pages.unshift(--left)
	                }
	                if (pages.length >= s) {
	                    break
	                }
	                if (right < max) {
	                    pages.push(++right)
	                }
	            }
	        }
	        vm.firstPage = pages[0] || 1
	        vm.lastPage = pages[pages.length - 1] || 1
	        vm.showFirstOmit = vm.firstPage > 2
	        vm.showLastOmit = vm.lastPage < max - 1
	        return  pages//[0,1,2,3,4,5,6]
	    }
	    return avalon
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
	/**
	 * @other
	 * <p>pager 组件有一个重要的jumpPage方法，用于决定它的跳转方式。它有两个参数，第一个事件对象，第二个是跳转方式，见源码：</p>
	 ```javascript
	 vm.jumpPage = function(event, page) {
	 event.preventDefault()
	 if (page !== vm.currentPage) {
	 switch (page) {
	 case "first":
	 vm.currentPage = 1
	 break
	 case "last":
	 vm.currentPage = vm.totalPages
	 break
	 case "next":
	 vm.currentPage++
	 if (vm.currentPage > vm.totalPages) {
	 vm.currentPage = vm.totalPages
	 }
	 break
	 case "prev":
	 vm.currentPage--
	 if (vm.currentPage < 1) {
	 vm.currentPage = 1
	 }
	 break
	 default:
	 vm.currentPage = page
	 break
	 }
	 vm.onJump.call(element, event, vm)
	 efficientChangePages(vm.pages, getPages(vm))
	 }
	 }
	 ```
	 */
	
	/**
	 *  @links
	 [显示跳转台](avalon.pager.ex1.html)
	 [指定回调onJump](avalon.pager.ex2.html)
	 [改变每页显示的数量](avalon.pager.ex3.html)
	 [指定上一页,下一页的文本](avalon.pager.ex4.html)
	 [通过左右方向键或滚轮改变页码](avalon.pager.ex5.html)
	 [总是显示上一页与下一页按钮](avalon.pager.ex6.html)
	 [多语言支持](avalon.pager.ex7.html)
	 *
	 */
	//http://luis-almeida.github.io/jPages/defaults.html
	//http://gist.corp.qunar.com/jifeng.yao/gist/demos/pager/pager.html
	


/***/ }),
/* 18 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"oni-pager\" onselectstart=\"return false;\" unselectable=\"on\" ms-visible=\"!!totalPages\">\r\n    <span class=\"oni-pager-prev\"\r\n          ms-class=\"oni-state-disabled:firstPage==1\"\r\n          ms-if=\"isShowPrev()\"\r\n          ms-attr-title=\"getTitle('prev')\" \r\n          ms-click=\"jumpPage($event,'prev')\" \r\n          ms-text=\"prevText\"\r\n          ></span>\r\n    <span class=\"oni-pager-item\"\r\n          ms-visible=\"firstPage!==1\" \r\n          ms-attr-title=\"getTitle('first', currentPage)\" \r\n          ms-click=\"jumpPage($event,'first')\" \r\n          ms-class-oni-state-active=\"currentPage == 1\"\r\n          ms-hover=\"oni-state-hover\">1</span>\r\n    <span class='oni-pager-omit'\r\n          ms-if=\"showFirstOmit\" \r\n          ms-text=\"ellipseText\"\r\n          ></span>\r\n    <span  class=\"oni-pager-item\" \r\n           ms-repeat=\"pages\" \r\n           ms-attr-title=\"getTitle(el, currentPage)\"\r\n           ms-hover=\"oni-state-hover\"\r\n           ms-click=\"jumpPage($event,el)\"\r\n           ms-class-oni-state-active=\"el == currentPage\" \r\n           ms-text=\"el\"\r\n           ></span>\r\n    <span class=\"oni-pager-omit\"\r\n          ms-if=\"showLastOmit\" \r\n          ms-text=\"ellipseText\"\r\n          ></span>\r\n    <span class=\"oni-pager-item \"\r\n          ms-visible=\"lastPage!==totalPages\" \r\n          ms-attr-title=\"getTitle('last', currentPage, totalPages)\" \r\n          ms-hover=\"oni-state-hover\" \r\n          ms-click=\"jumpPage($event,'last')\"  \r\n          ms-text=\"totalPages\"\r\n          ></span>\r\n    <span class=\"oni-pager-next\"\r\n          ms-if=\"isShowNext()\" \r\n          ms-attr-title=\"getTitle('next')\"\r\n          ms-click=\"jumpPage($event,'next')\" \r\n          ms-class=\"oni-state-disabled:lastPage==totalPages\"\r\n          ms-text=\"nextText\"\r\n          ></span>\r\n    <div class=\"oni-pager-jump\" ms-if=\"showJumper\">\r\n        <span class=\"oni-pager-text\" ms-html=\"_getTotalPages(totalPages)\"></span>\r\n        <div class=\"oni-pager-textbox-wrapper\">\r\n            <input class=\"oni-pager-textbox\" ms-duplex=\"_currentPage\" data-duplex-event=\"change\" ms-keyup=\"changeCurrentPage\">\r\n        </div>\r\n        <span class=\"oni-pager-text\">{{regional.pageText}}</span>\r\n        <button class=\"oni-pager-button\" ms-click=\"changeCurrentPage\" >{{regional.confirmText}}</button>\r\n    </div>\r\n</div>\r\n"

/***/ }),
/* 19 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 20 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// avalon 1.3.6
	/**
	 * 
	 * @cnName 对话框
	 * @enName dialog
	 * @introduce
	 *    <p>dialog组件提供弹窗显示或者隐藏,通过简单配置可以水平居中显示dialog弹窗，此组件支持弹窗中再弹窗，也可以用来模拟alert的行为，非常方便</p>
	 */
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(22), 
	    __webpack_require__(23),
	    __webpack_require__(24),
	    __webpack_require__(19), 
	    __webpack_require__(26),
	    __webpack_require__(27)
	], __WEBPACK_AMD_DEFINE_RESULT__ = function(avalon, sourceHTML) {
	
	    var template = sourceHTML,
	        widgetArr = template.split("MS_OPTION_WIDGET"),
	        _maskLayer = widgetArr[0], // 遮罩层html(string)
	        maskLayer = avalon.parseHTML(_maskLayer).firstChild, // 遮罩层节点(dom node)
	        maskLayerExist = false, // 页面不存在遮罩层就添加maskLayer节点，存在则忽略
	        _maskLayerSimulate = template.split("MS_OPTION_LAYOUT_SIMULATE")[1],
	        maskLayerSimulate = avalon.parseHTML(_maskLayerSimulate).firstChild, 
	        dialogShows = [], //存在层上层时由此数组判断层的个数
	        dialogNum = 0, //保存页面dialog的数量，当dialogNum为0时，清除maskLayer
	        //IE6 userAgent Mozilla/4.0(compatible;MISE 6.0;Windows NT 6.1;...)
	        isIE6 = (window.navigator.userAgent || '').toLowerCase().indexOf('msie 6') !== -1,
	        iFrame = null,
	        body = (document.compatMode && document.compatMode.toLowerCase() == "css1compat") ? document.documentElement : document.body;
	
	    var widget = avalon.ui.dialog = function(element, data, vmodels) {
	        dialogNum++
	        var options = data.dialogOptions
	        options.type = options.type.toLowerCase() 
	        options.template = options.getTemplate(template, options)
	        var _footerArr = options.template.split("MS_OPTION_FOOTER"),
	            _contentArr = _footerArr[0].split("MS_OPTION_CONTENT"),
	            _headerArr = _contentArr[0].split("MS_OPTION_HEADER"),
	            _innerWraperArr = _headerArr[0].split("MS_OPTION_INNERWRAPPER"),
	            _content = _contentArr[1], //content wrapper html
	            _lastHeader = _headerArr[1], //header html
	            _lastFooter = _footerArr[1].split("MS_OPTION_LAYOUT_SIMULATE")[0], //footer html
	            _innerWrapper = _innerWraperArr[1], //inner wrapper html
	            _lastContent = "", //dialog content html
	            lastContent = "", //dialog content node
	            $element = avalon(element),
	            onDraftClick = options.onDraftClick;
	            onDraftClickVM = null,
	            onConfirm = options.onConfirm,
	            onConfirmVM = null,
	            onCancel = options.onCancel,
	            onCancelVM = null,
	            onOpen = options.onOpen,
	            onOpenVM = null,
	            onClose = options.onClose,
	            onCloseVM = null,
	            toggleClose = true,
	            position = isIE6 ? "absolute" : "fixed"
	
	        if (typeof onConfirm === "string") {
	            onConfirmVM = avalon.getModel(onConfirm, vmodels)
	            options.onConfirm = onConfirmVM && onConfirmVM[1][onConfirmVM[0]] || avalon.noop
	        }
	
	        if (typeof onDraftClick === "string") {
	            onDraftClickVM = avalon.getModel(onDraftClick, vmodels)
	            options.onDraftClick = onDraftClickVM && onDraftClickVM[1][onDraftClickVM[0]] || avalon.noop
	        }
	
	        if (typeof onCancel ==="string") {
	            onCancelVM = avalon.getModel(onCancel, vmodels)
	            options.onCancel = onCancelVM && onCancelVM[1][onCancelVM[0]] || avalon.noop
	        }
	        if (typeof onClose ==="string") {
	            avalon.log("ms-widget='dialog' data-dialog-on-close 此用法已经被废弃")
	            onCloseVM = avalon.getModel(onClose, vmodels)
	            options.onClose = onCloseVM && onCloseVM[1][onCloseVM[0]] || avalon.noop
	        }
	        if (typeof onOpen ==="string") {
	            onOpenVM = avalon.getModel(onOpen, vmodels)
	            options.onOpen = onOpenVM && onOpenVM[1][onOpenVM[0]] || avalon.noop
	        }
	        _lastFooter = options.getFooter(_lastFooter, options)
	        var vmodel = avalon.define(data.dialogId, function(vm) {
	            avalon.mix(vm, options)
	            vm.$skipArray = ["widgetElement", "template", "container", "modal", "zIndexIncrementGlobal", "initChange", "content"]
	            vm.widgetElement = element
	            vm.position = position
	            // 如果显示模式为alert或者配置了showClose为false，不显示关闭按钮
	            vm.showClose = vm.type === "alert" ? false : vm.showClose
	            vm.initChange = true
	            // 点击确定按钮，根据回调返回值是否为false决定是否关闭弹窗
	            vm._confirm = function(e) {
	                if (typeof vmodel.onConfirm !== "function") {
	                    throw new Error("onConfirm必须是一个回调方法")
	                }
	                // 在用户回调返回false时，不关闭弹窗
	                if(vmodel.onConfirm.call(e.target, e, vmodel) !== false){
	                    vmodel._close(e)
	                }
	            }
	
	            vm._draftClick = function(e) {
	                if (typeof vmodel.onDraftClick !== "function") {
	                    throw new Error("onDraftClick必须是一个回调方法")
	                }
	                // 在用户回调返回false时，不关闭弹窗
	                if(vmodel.onDraftClick.call(e.target, e, vmodel) !== false){
	                    vmodel._close(e)
	                }
	            }
	            // 显示dialogmask
	            vm._open = function(updateZIndex) {
	                var len = 0, //当前显示的dialog的个数
	                    selectLength = document.getElementsByTagName("select").length,
	                    maxZIndex = vmodel.zIndex
	
	                avalon.Array.ensure(dialogShows, vmodel)
	                len = dialogShows.length
	                if (len) {
	                    if (vmodel.modal) {
	                        avalon(maskLayer).css("display", "block")
	                    }
	                    avalon(maskLayerSimulate).css("display", "block")
	                }
	                // 通过zIndex的提升来调整遮罩层，保证层上层存在时遮罩层始终在顶层dialog下面(顶层dialog zIndex-1)但是在其他dialog上面
	                maskLayer.style.zIndex = 2 * len + maxZIndex -1
	                maskLayerSimulate.style.zIndex = 2 * len + maxZIndex -1
	                element.style.zIndex =  2 * len + maxZIndex
	                if(updateZIndex) {
	                    return 
	                }
	                document.documentElement.style.overflow = "hidden"
	                resetCenter(vmodel, element)
	                // IE6下遮罩层无法覆盖select解决办法
	                if (isIE6 && selectLength && iFrame === null && vmodel.modal) {
	                    iFrame = createIframe()
	                } else if(isIE6 && selectLength && vmodel.modal) { 
	                    iFrame.style.display = "block"
	                    iFrame.style.width = maskLayer.style.width
	                    iFrame.style.height = maskLayer.style.height
	                    iFrame.style.zIndex = maskLayer.style.zIndex -1
	                }
	                vmodel.onOpen.call(element, vmodel)
	            }
	            
	            // 隐藏dialog
	            vm._close = function(e) {
	                avalon.Array.remove(dialogShows, vm)
	                var len = dialogShows.length,
	                    maxZIndex = vmodel.zIndex,
	                    topShowDialog = len && dialogShows[len-1]
	
	                if (e) {
	                    toggleClose = false
	                }
	                vmodel.toggle = false
	
	                /* 处理层上层的情况，因为maskLayer公用，所以需要其以将要显示的dialog的toggle状态为准 */
	                if (topShowDialog && topShowDialog.modal) {
	                    avalon(maskLayer).css("display", "block")
	                    avalon(maskLayerSimulate).css("display", "block")
	                    topShowDialog.widgetElement.style.display = "block"
	                    resetCenter(topShowDialog, topShowDialog.widgetElement)
	                } else {
	                    avalon(maskLayer).css("display", "none")
	                    avalon(maskLayerSimulate).css("display", "none")
	                    if (iFrame !== null) {
	                        iFrame.style.display = "none"
	                    }
	                    document.documentElement.style.overflow = ""
	                    vmodel.onClose.call(element, vmodel)
	                    return 
	                }
	                // 重置maskLayer的z-index,当最上层的dialog关闭，通过降低遮罩层的z-index来显示紧邻其下的dialog
	                var layoutZIndex = 2 * len + maxZIndex - 1
	                maskLayer.style.zIndex = layoutZIndex
	                maskLayerSimulate.style.zIndex = layoutZIndex
	                if (iFrame) {
	                    iFrame.style.zIndex = layoutZIndex -1
	                }
	                vmodel.onClose.call(element, vmodel)
	            }
	
	            // 点击"取消"按钮，根据回调返回值是否为false决定是否关闭dialog
	            vm._cancel = function(e) {
	                if (typeof vmodel.onCancel != "function") {
	                    throw new Error("onCancel必须是一个回调方法")
	                }
	                // 在用户回调返回false时，不关闭弹窗
	                if(vmodel.onCancel.call(e.target, e, vmodel) !== false){
	                    vmodel._close(e)
	                }
	            }
	/**
	         * @config {Function} 动态修改dialog的content
	         * @param m {Object} 重新渲染dialog的配置对象，包括title、content、content中涉及的插值表达式，需要注意的是，title和content不是真正渲染的内容，所以不需要avalon进行扫描监控，定义的时候必须在其前面加上"$",否则组件不会渲染成想要的效果
	         */
	            /**
	             * @config {Function} 可以动态改变dialog的显示内容
	             * @param content {String} 要替换的content，可以是已经渲染ok的view也可以是未解析渲染的模板
	             * @param noScan {Boolean} 当content是模板时noScan设为false或者不设置，组件会自动解析渲染模板，如果是已经渲染ok的，将noScan设为true，组件将不再进行解析操作
	             * @param contentVmodels {Array} 如果content为未解析的模板，noScan为false，contentVmodels是用来解析模板content的vmodels
	             */
	            vm.setContent = function(content, noScan, contentVmodels) {
	                var scanVmodels = contentVmodels ? contentVmodels : [vmodel].concat(vmodels)
	                _lastContent = content
	                lastContent.innerHTML = _lastContent
	                if (!noScan) {
	                    avalon.scan(lastContent, scanVmodels)
	                }
	                return vmodel
	            }
	
	            // 动态修改dialog的title
	            vm.setTitle = function(title) {
	                vmodel.title = title
	                return vmodel
	            }
	
	            // 重新渲染dialog
	            vm.setModel = function(m) {
	                // 这里是为了充分利用vm._ReanderView方法，才提前设置一下element.innerHTML
	                if (!!m.$content) {
	                    vmodel.setContent(m.$content, m.noScan, [vmodel].concat(findModel(m)).concat(vmodels))
	                }
	                if (!!m.$title) {
	                    vmodel.title = m.$title
	                }
	                return vmodel
	            }
	            // 将零散的模板(dialog header、dialog content、 dialog footer、 dialog wrapper)组合成完整的dialog
	            vm._renderView = function() {
	                var innerWrapper = null // 保存innerWraper元素节点
	                // 用户只能通过data-dialog-width配置width，不可以通过ms-css-width来配置，配置了也无效
	                element.setAttribute("ms-css-width", "width")
	                lastContent = avalon.parseHTML(_content).firstChild
	                _lastContent = element.innerHTML || vmodel.content
	                element.innerHTML = ""
	                lastContent.innerHTML = _lastContent
	                innerWrapper = avalon.parseHTML(_innerWrapper).firstChild
	                innerWrapper.innerHTML = _lastHeader
	                innerWrapper.appendChild(lastContent)
	                innerWrapper.appendChild(avalon.parseHTML(_lastFooter))
	                element.appendChild(innerWrapper)
	                if (!maskLayerExist) {
	                    document.body.appendChild(maskLayer)
	                    document.body.appendChild(maskLayerSimulate)
	                    maskLayerExist = true
	                }
	            }
	
	            vm.$init = function(continueScan) {
	                var container = vmodel.container,
	                    clientHeight = body.clientHeight,
	                    docBody = document.body,
	                    // container必须是dom tree中某个元素节点对象或者元素的id，默认将dialog添加到body元素
	                    elementParent = ((avalon.type(container) === "object" && container.nodeType === 1 && docBody.contains(container)) ? container : document.getElementById(container)) || docBody,
	                    defaults = avalon.ui.dialog.defaults
	                if (!defaults.zIndex) {
	                    defaults.zIndex = getMaxZIndex() //保存body直接子元素中最大的z-index值， 保证dialog在最上层显示
	                    vmodel.zIndex = defaults.zIndex
	                }
	
	                if (avalon(docBody).height() < clientHeight) {
	                    avalon(docBody).css("min-height", clientHeight)
	                }
	                if (vmodel.draggable) {
	                    $element.attr("ms-draggable", "")
	                    vmodel.draggable = {
	                        handle: function(e){
	                            var el = e.target
	                            do {
	                                if (el.className === "oni-dialog-header") {
	                                    return el
	                                }
	                                if (el.className === "oni-dialog") {
	                                    return
	                                }
	                            } while (el = el.parentNode)
	                        }
	                    }
	                }
	                vmodel.zIndex = vmodel.zIndex + vmodel.zIndexIncrementGlobal
	                vmodel.title = vmodel.title || "&nbsp;"
	                $element.addClass("oni-dialog")
	                element.setAttribute("ms-visible", "toggle")
	                element.setAttribute("ms-css-position", "position")
	                vm._renderView()
	                if (docBody.contains(maskLayerSimulate) && docBody == elementParent) {
	                    maskLayerSimulate.appendChild(element)
	                } else {
	                    elementParent.appendChild(element)
	                }
	                // 当窗口尺寸发生变化时重新调整dialog的位置，始终使其水平垂直居中
	                element.resizeCallback = avalon(window).bind("resize", throttle(resetCenter, 50, 100, [vmodel, element]))
	                element.scrollCallback = avalon(window).bind("scroll", throttle(resetCenter, 50, 100, [vmodel, element, true]))
	
	                avalon.scan(element, [vmodel].concat(vmodels))
	                if (continueScan) {
	                    continueScan()
	                } else {
	                    avalon.log("avalon请尽快升到1.3.7+")
	                    avalon.scan(element, [vmodel].concat(vmodels))
	                    if (typeof options.onInit === "function") {
	                        options.onInit.call(element, vmodel, options, vmodels)
	                    }
	                }
	            }
	
	            // 自动清理方法
	            vm.$remove = function() {
	                dialogNum--
	                element.innerHTML = ""
	                avalon.unbind(window, "resize", element.resizeCallback)
	                avalon.unbind(window, "scroll", element.scrollCallback)
	                if (!dialogNum) {
	                    maskLayer.parentNode.removeChild(maskLayer)
	                    maskLayer.parentNode.removeChild(maskLayerSimulate)
	                    maskLayerExist = false
	                }
	            }
	
	            // 打开dialog之后处理zIndex使dialog正常显示
	            vm.$watch("toggle", function(val) {
	                if (val) {
	                    vmodel._open()
	                } else {
	                    if (toggleClose === false) {
	                        toggleClose = true
	                    } else {
	                        vmodel._close()
	                    }
	                }
	            })
	
	            // 可以手动设置最大zIndex
	            vm.$watch("zIndex", function(val) {
	                if (vmodel.initChange) {
	                    vmodel.initChange = false
	                } else {
	                    vmodel._open(true)
	                }
	            })
	        })
	        return vmodel
	    }
	    widget.version = 1.0
	    widget.defaults = {
	        width: 480, //@config 设置dialog的width
	        title: "&nbsp;", //@config 设置弹窗的标题
	        draggable: false, //@config 设置dialog是否可拖动
	        type: "confirm", //@config 配置弹窗的类型，可以配置为alert来模拟浏览器
	        hasDraft:false,  //是否有新增的其他按钮   Modified By Zhangnan
	        content: "", //@config 配置dialog的content，默认取dialog的innerHTML作为dialog的content，如果innerHTML为空，再去取content配置项.需要注意的是：content只在初始化配置的起作用，之后需要通过setContent来动态的修改
	        /**
	         * @config {Function} 定义点击"确定"按钮后的回调操作
	         * @param event {Number} 事件对象
	         * @param vmodel {Object} 组件对应的Vmodel
	         * @returns {Boolean} 如果return false，dialog不会关闭，用于异步操作
	         */
	        onDraftClick:avalon.noop,   //新增的按钮的事件
	        onConfirm: avalon.noop, 
	        /**
	         * @config {Function} 定义显示dialog时的回调
	         * @param vmodel {Object} 组件对应的Vmodel
	         */
	        onOpen: avalon.noop, 
	        /**
	         * @config {Function} 定义点击"取消"按钮后的回调操作
	         * @param event {Object} 事件对象
	         * @param vmodel {Object} 组件对应的Vmodel
	         * @returns {Boolean} 如果return false，dialog不会关闭，用于异步操作
	         */
	        onCancel: avalon.noop, 
	        /**
	         * @config {Function} 定义点击"关闭"按钮后的回调操作
	         * @param event {Object} 事件对象
	         * @param vmodel {Object} 组件对应的Vmodel
	         */
	        onClose: avalon.noop, //点击右上角的“关闭”按钮的回调
	        //@config 动态修改dialog的title,也可通过dialogVM.title直接修改
	        setTitle: avalon.noop, 
	        setContent: avalon.noop, 
	        /**
	         * @config {Function} 重新渲染模板
	         * @param m {Object} 重新渲染dialog的配置对象，包括title、content、content中涉及的插值表达式，需要注意的是，title和content不是真正渲染的内容，所以不需要avalon进行扫描监控，定义的时候必须在其前面加上"$",否则组件不会渲染成想要的效果
	         */
	        setModel: avalon.noop, 
	        //@config配置dialog是否显示"取消"按钮，但是如果type为alert，不论showClose为true or false都不会显示"取消"按钮
	        showClose: true, 
	        toggle: false, //@config 通过此属性的决定dialog的显示或者隐藏状态
	        widgetElement: "", //@config 保存对绑定元素的引用
	        container: "body", //@config dialog元素的上下文父元素，container必须是dialog要appendTo的父元素的id或者元素dom对象
	        confirmName: "确定", //@config 配置dialog的"确定"按钮的显示文字
	        cancelName: "取消", //@config 配置dialog的"取消"按钮的显示文字
	        getTemplate: function(str, options) {
	            return str
	        },
	        /**
	         * @config {Function} 通过此方法配置dialog的footer
	         * @param tmp {String} dialog默认模板的footer
	         * @returns {String} 用户自定义的dialog的footer 
	         */
	        getFooter: function(tmp) {
	            return tmp
	        },
	        modal: true, //@config 是否显示遮罩
	        zIndex: 0, //@config 通过设置vmodel的zIndex来改变dialog的z-index,默认是body直接子元素中的最大z-index值，如果都没有设置就默认的为10
	        zIndexIncrementGlobal: 0 //@config 相对于zIndex的增量, 用于全局配置，如果只是作用于单个dialog那么zIndex的配置已足够，设置全局需要通过avalon.ui.dialog.defaults.zIndexIncrementGlobal = Number来设置
	    }
	    avalon(window).bind("keydown", function(e) {
	        var keyCode = e.which,
	            dialogShowLen = dialogShows.length;
	        if (keyCode === 27 && dialogShowLen) {
	            dialogShows[dialogShowLen - 1].toggle = false
	        }
	    })
	    // 获取重新渲染dialog的vmodel对象
	    function findModel(m) {
	        var model = m
	        if (model) { // 如果m为字符串参数，说明是要在已存在的vmodels中查找对应id的vmodel
	            if (avalon.type(model) === 'string') {
	                model = avalon.vmodels[model]
	            } 
	        } else { // 如果没有传递参数m，则返回空vmodel
	            model = avalon.define('dialogVM' + setTimeout("1"), function(vm) {
	            })
	        }
	        if (!model) {
	            throw new Error("您查找的"+model+"不存在")
	        }
	        // 如果传入的是avalon的vmodel格式的参数对象，直接返回，如果是普通的对象，将其转换为avalon的监控对象
	        if (avalon.isPlainObject(model) && !model.$id && !model.$accessors) {
	            model = avalon.define('dialogVM' + setTimeout("1"), function(vm) {
	                avalon.mix(vm, m)
	            })
	        }
	        return [].concat(model)
	    }
	
	    // resize、scroll等频繁触发页面回流的操作要进行函数节流
	    function throttle(fn, delay, mustRunDelay, args){
	        var timer = null
	        var t_start
	        return function(){
	            var context = this, t_curr = +new Date()
	            clearTimeout(timer)
	            if(!t_start){
	                t_start = t_curr
	            }
	            if(t_curr - t_start >= mustRunDelay){
	                fn.apply(context, args)
	                t_start = t_curr
	            }
	            else {
	                timer = setTimeout(function(){
	                    fn.apply(context, args)
	                }, delay)
	            }
	        }
	     }
	
	    // 使dialog始终出现在视窗中间
	    function resetCenter(vmodel, target, scroll) {
	        var clientWidth, clientHeight,
	            targetOffsetWidth, targetOffsetHeight,
	            $maskLayer = avalon(maskLayer),
	            $maskLayerSimulate = avalon(maskLayerSimulate),
	            $target = avalon(target),
	            scrollTop, scrollLeft,
	            documentElement,
	            top = 0,
	            left = 0
	
	
	        if (!vmodel.toggle) return
	
	        documentElement = (document.compatMode && document.compatMode.toLowerCase() == "css1compat") ? document.documentElement : document.body
	        // clientWidth和clientHeight在现有浏览器都是兼容的(IE5),但在混杂模式下，得通过documentView属性提供宽度和高度
	        clientWidth = document.documentElement.clientWidth ? document.documentElement.clientWidth: document.body.clientWidth
	        
	        clientHeight = document.documentElement.clientHeight ? document.documentElement.clientHeight: document.body.clientHeight
	
	        scrollTop = document.body.scrollTop + document.documentElement.scrollTop
	        scrollLeft = documentElement.scrollLeft
	
	        targetOffsetWidth = target.offsetWidth 
	        targetOffsetHeight = target.offsetHeight
	
	        if (targetOffsetHeight < clientHeight) {
	            top = (clientHeight - targetOffsetHeight) / 2
	        } else {
	            top = 0
	        }
	        if (targetOffsetWidth < clientWidth) {
	            left = (clientWidth - targetOffsetWidth) / 2 + scrollLeft
	        } else {
	            left = 0
	        }
	        if (targetOffsetHeight < clientHeight && targetOffsetWidth < clientWidth) {
	            if (!isIE6) {
	                vmodel.position = "fixed"
	            }
	        } else {
	            if (!isIE6) {
	                vmodel.position = "absolute"    
	            }
	        }
	        if (scroll && vmodel.position == "fixed") return
	        if (vmodel.position === "absolute") {
	            if (dialogShows.length > 1) {
	                for (var i = 0; i < dialogShows.length -1; i++) {
	                    dialogShows[i].widgetElement.style.display = "none"
	                }
	            }
	            $maskLayer.css({height: clientHeight, width: clientWidth, top: scrollTop, position: "absolute"})
	            $maskLayerSimulate.css({height: clientHeight, width: clientWidth, top: scrollTop, overflow: "auto", position: "absolute"})
	        } else {
	            if (dialogShows.length > 1) {
	                for (var i = 0; i < dialogShows.length -1; i++) {
	                    dialogShows[i].widgetElement.style.display = "block"
	                }
	            }
	            $maskLayer.css({height: "auto", width: "auto", top: 0, position: "fixed"})
	            $maskLayerSimulate.css({height: "auto", width: "auto", top: 0, position: "static"})
	        }
	        $target.css({left: left, top: top})
	    }
	   
	    // 获取body子元素最大的z-index
	    function getMaxZIndex() {
	        var children = document.body.children,
	            maxIndex = 10, //当body子元素都未设置zIndex时，默认取10
	            zIndex;
	        for (var i = 0, el; el = children[i++];) {
	            if (el.nodeType === 1) {
	                if (el === maskLayer) continue
	                zIndex = ~~avalon(el).css("z-index")
	                if (zIndex) {
	                    maxIndex = Math.max(maxIndex, zIndex)
	                }
	            }
	        }
	        return maxIndex + 1
	    }
	    // IE6下创建iframe遮住不能被遮罩层遮住的select
	    function createIframe() {
	        var iframe = document.createElement('<iframe src="javascript:\'\'" style="position:absolute;top:0;left:0;bottom:0;margin:0;padding:0;right:0;zoom:1;width:'+maskLayer.style.width+';height:'+maskLayer.style.height+';z-index:'+(maskLayer.style.zIndex-1)+';"></iframe>')
	        document.body.appendChild(iframe)
	        return iframe
	    }
	
	    return avalon
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
	/**
	 @links
	 [dialog功能全览](avalon.dialog.ex.html)
	 [默认配置的dialog组件](avalon.dialog.ex1.html)
	 [拥有回调操作的dialog](avalon.dialog.ex2.html)
	 [不显示关闭按钮的dialog](avalon.dialog.ex3.html)
	 [嵌套dialog](avalon.dialog.ex4.html)
	 [模拟alert](avalon.dialog.ex5.html)
	 [模拟alert，showClose配置无效](avalon.dialog.ex6.html)
	 [自定义dialog的width](avalon.dialog.ex7.html)
	 [通过container配置项设置dialog元素的上下文父元素](avalon.dialog.ex8.html)
	 [修改dialog的title、content、或者重新渲染dialog](avalon.dialog.ex9.html)
	 [通过加载avalon.draggable实现拖拽](avalon.dialog.ex10.html)
	 [改变dialog的z-index](avalon.dialog.ex11.html)
	 */

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2)], __WEBPACK_AMD_DEFINE_RESULT__ = function(avalon) {
	    function getChildVM(expr, vm, strLen) {
	        var t = vm, pre, _t;
	        for (var i = 0, len = expr.length; i < len; i++) {
	            var k = expr[i];
	            _t = t.$model || t;
	            if (typeof _t[k] !== 'undefined') {
	                pre = t;
	                t = t[k];
	            } else {
	                return;
	            }
	        }
	        if (strLen > 1) {
	            return pre[k];
	        } else {
	            return pre;
	        }
	    }
	   // 在一堆VM中，提取某一个VM的符合条件的子VM
	   // 比如 vm.aaa.bbb = {} ; 
	   // avalon.getModel("aaa.bbb", vmodels) ==> ["bbb", bbbVM, bbbVM所在的祖先VM（它位于vmodels中）]
	    avalon.getModel = function(expr, vmodels){
	        if (!expr) {
	            return null;
	        }
	        var str = expr.split('.'),
	            strLen = str.length,
	            last = str[strLen-1];
	        if (str.length != 1) {
	            str.pop();
	        }
	        for (var i = 0, len = vmodels.length; i < len; i++) {
	            var ancestor = vmodels[i];
	            var child = getChildVM(str, ancestor, strLen);
	            if (typeof child !== 'undefined' && (child.hasOwnProperty(last) || Object.prototype.hasOwnProperty.call(child, last))) {
	                return [last, child, ancestor];
	            }
	        }
	        return null;
	    }
	    return avalon;
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))

/***/ }),
/* 23 */
/***/ (function(module, exports) {

	module.exports = "<div class=\"oni-dialog-layout\"></div>\r\nMS_OPTION_WIDGET\r\n<div ms-widget=\"dialog,MS_OPTION_ID,MS_OPTION_OPTS\" ms-css-position=\"position\">MS_OPTION_DIALOG_CONTENT</div>\r\nMS_OPTION_INNERWRAPPER\r\n<div class=\"oni-dialog-inner\"></div>\r\nMS_OPTION_HEADER\r\n<div class=\"oni-dialog-header\">\r\n    <div class=\"oni-dialog-close\" ms-click=\"_close\" ms-if=\"showClose\">\r\n        <i class=\"oni-icon oni-icon-times\">&#xf003;</i>\r\n    </div>\r\n    <div class=\"oni-dialog-title\">{{ title|html }}</div>\r\n</div>\r\nMS_OPTION_CONTENT\r\n<div class=\"oni-dialog-content\"></div>\r\nMS_OPTION_FOOTER\r\n<div class=\"oni-dialog-footer oni-helper-clearfix\">\r\n    <div class=\"oni-dialog-btns\">\r\n        <button ms-widget=\"button\" ms-if=\"hasDraft\" data-button-color=\"success\" ms-hover=\"oni-state-hover\" ms-click=\"_draftClick\">{{draftName}}</button>\r\n        <button ms-widget=\"button\"  data-button-color=\"success\" ms-hover=\"oni-state-hover\" ms-click=\"_confirm\">{{confirmName}}</button>\r\n        <button ms-widget=\"button\" ms-if=\"type =='confirm'\" ms-click=\"_cancel\">{{cancelName}}</button>\r\n    </div>\r\n</div>\r\nMS_OPTION_LAYOUT_SIMULATE\r\n<div></div>"

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// avalon 1.3.6
	/**
	 * 
	 * @cnName 按钮组件
	 * @enName button
	 * @introduce
	 * <p>按钮组件提供丰富的样式、形式选择，除与bootstrap可用的button样式保持一致外，支持small、default、big、large四种尺寸，同时支持图标button，可以是仅有图标的button，图标在左边的button、图标在右边的button、两边都有图标的button，当然也支持图标组，有水平图标组、垂直图标组两种形式</p>
	 */
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2), __webpack_require__(19), __webpack_require__(25)], __WEBPACK_AMD_DEFINE_RESULT__ = function(avalon) {
	    var baseClasses = ["oni-button", "oni-widget", "oni-state-default"],
	        typeClasses = "oni-button-icons-only oni-button-icon-only oni-button-text-icons oni-button-text-icon-primary oni-button-text-icon-secondary oni-button-text-only"
	
	    var widget = avalon.ui.button = function(element, data, vmodels) {
	        var options = data.buttonOptions,
	            btnModel,
	            $element = avalon(element)
	            
	        function stop(event) {
	            if (options.disabled) {
	                event.preventDefault()
	                event.stopImmediatePropagation()
	            }
	        }
	        btnModel = {
	            $init: function() {
	                var data = options.data,
	                    elementType = "",
	                    label = options.label,
	                    buttonWidth = 0,
	                    elementTagName = element.tagName.toLowerCase()
	
	                if (options.groups && data.length > 1) {
	                    var buttons = ""
	                    
	                    data.forEach(function(button, index) {
	                        var buttonStr = "<span ms-widget='button'"
	                        if (button.type !== void 0) {
	                            buttonStr += " data-button-type='" + button.type + "'"
	                        }
	                        if (button.iconPosition !== void 0) {
	                            buttonStr += " data-button-icon-position='" + button.iconPosition + "'"
	                        }
	                        if (button.icon !== void 0) {
	                            buttonStr += " data-button-icon='" + button.icon + "'"
	                        }
	                        if (button.color !== void 0) {
	                            buttonStr += " data-button-color='" + button.color + "'"
	                        }
	                        if (button.size !== void 0) {
	                            buttonStr += " data-button-size='" + button.size + "'"
	                        }
	                        if (button.disabled !== void 0) {
	                            buttonStr += " data-button-disabled='" + button.disabled + "'"
	                        }
	                        if (button.label !== void 0) {
	                            buttonStr += " data-button-label='" + button.label + "'"
	                        }
	                        buttonStr += ">" + (button.text || "") + "</span>"
	                        buttons += buttonStr
	                    })
	                    element.innerHTML = buttons
	                    element.setAttribute("ms-widget", "buttonset")
	                    if (options.direction == "vertical") {
	                        element.setAttribute("data-buttonset-direction", "vertical")
	                    }
	                    if (!options.corner) {
	                        element.setAttribute("data-buttonset-corner", options.corner)
	                    }
	                    if (options.width) {
	                        element.setAttribute("data-buttonset-width", parseInt(options.width))
	                    }
	                    avalon.scan(element, vmodels)
	                    return
	                }
	                if (typeof options.disabled !== "boolean") {
	                    element.disabled = !!options.disabled
	                } else {
	                    element.disabled = options.disabled
	                }
	
	                if (elementTagName === "input") {
	                    elementType = "input"
	                }
	                if (buttonWidth = parseInt(options.width)) {
	                    element.style.width = buttonWidth + "px"
	                }
	                $element.bind("mousedown", function(event) {
	                    stop(event)
	                    $element.addClass("oni-state-active")
	                })
	                $element.bind("mouseup", function(event) {
	                    stop(event)
	                    $element.removeClass("oni-state-active")
	                })
	                $element.bind("blur", function() {
	                    $element.removeClass("oni-state-active")
	                    $element.removeClass("oni-state-focus");
	                })
	                $element.bind("focus", function() {
	                    $element.addClass("oni-state-focus");
	                })
	                if (!options.label) {
	                    label = elementType === "input" ? element.value : element.innerHTML
	                }
	                options.elementType = elementType
	                options.label = label
	                createButton(element, options)
	                avalon.scan(element, vmodels)
	            }
	        }
	        btnModel.$init()
	    }
	    avalon.ui.buttonset = function(element, data, vmodels) {
	        var options = data.buttonsetOptions,
	            buttonsetCorner = options.corner,
	            direction = options.direction,
	            $element = avalon(element)
	
	        buttonsetCorner = buttonsetCorner !== void 0 ? buttonsetCorner : true
	        var btnGroup = {
	            $init: function() {
	                var elementClass = []
	                elementClass.push("oni-buttonset"),
	                firstButtonClass = "oni-corner-left",
	                lastButtonClass = "oni-corner-right",
	                children = element.childNodes, 
	                buttons = [] // 收集button组元素
	                buttonWidth = options.width,
	                firstElement = true
	
	                for (var i = 0, el; el = children[i++]; ) {
	                    if (el.nodeType === 1) {
	                        el.setAttribute("data-button-corner", "false")
	                        buttons.push(el)
	                        if (firstElement) {
	                            avalon(el).addClass("oni-button-first")
	                            firstElement = false
	                        }
	                    }
	                }
	                var n = buttons.length
	                if (n && buttonsetCorner) {
	                    if (direction === "vertical") {
	                        firstButtonClass = "oni-corner-top"
	                        lastButtonClass = "oni-corner-bottom"
	                    }
	                    avalon(buttons[0]).addClass(firstButtonClass)
	                    avalon(buttons[n - 1]).addClass(lastButtonClass)
	                }
	                if (direction === "vertical") {
	                    elementClass.push("oni-buttonset-vertical")
	                }
	                $element.addClass(elementClass.join(" "))
	                data.buttons = buttons
	                avalon.scan(element, vmodels)
	                if (buttonWidth = parseInt(buttonWidth)) {
	                    (function(buttonWidth) {
	                        var btns = [].concat(buttons)
	                        setTimeout(function() {
	                            for (var i = 0; button = btns[i++];) {
	                                var $button = avalon(button),
	                                    buttonName = button.tagName.toLowerCase()
	                                if (buttonName === "input" || buttonName === "button") {
	                                    button.style.width = buttonWidth + "px"
	                                } else {
	                                    button.style.width = (buttonWidth - parseInt($button.css("border-left-width")) - parseInt($button.css("border-right-width")) - parseInt($button.css("padding-left")) * 2) + "px"
	                                }
	                            }
	                        }, 10)
	                    })(buttonWidth)
	                    return 
	                }
	
	                (function(buttons) {
	                    var interval = 0,
	                        maxButtonWidth = 0
	                    buttons = buttons.concat()
	                    interval = setInterval(function() {
	                        var buttonWidth = 0,
	                            innerWidth = 0,
	                            $button
	                        for (var i = 0, button; button = buttons[i++];) {
	                            buttonWidth = Math.max(buttonWidth, avalon(button).outerWidth())
	                        }
	                        if (buttonWidth === maxButtonWidth) {
	                            maxButtonWidth += 1
	                            for (var i = 0, button; button = buttons[i++];) {
	                                var buttonName = button.tagName.toLowerCase(),
	                                    $button = avalon(button)
	
	                                if (buttonName === "input" || buttonName === "button") {
	                                    button.style.width = maxButtonWidth + "px"
	                                    
	                                } else {
	                                    button.style.width = (maxButtonWidth - parseInt($button.css("border-left-width")) - parseInt($button.css("border-right-width")) - parseInt($button.css("padding-left")) * 2) + "px"
	                                }
	                            }
	                            clearInterval(interval)
	                            return 
	                        }
	                        maxButtonWidth = buttonWidth
	                    }, 100)
	                })(buttons)
	            }
	        }
	        btnGroup.$init()
	    }
	    function createButton (element, options) {
	        var buttonText, 
	            buttonClasses = baseClasses.concat(),
	            iconText = false,
	            icons = options.icon || "",
	            corner = options.corner
	
	        options.label = options.label || ""
	        if (corner) {
	            buttonClasses.push("oni-corner-all")    
	            if (corner = parseInt(corner)) {
	                element.style.borderRadius = corner + "px"
	            }        
	        }
	        if (options.size) {
	            buttonClasses.push("oni-button-" + options.size)
	        }
	        if (options.color) {
	            buttonClasses.push("oni-button-" + options.color)
	        }
	        if (options.disabled) {
	            buttonClasses.push("oni-state-disabled")
	        }
	        avalon(element).addClass(buttonClasses.join(" "))
	        if (options.elementType === "input" && options.label) {
	            avalon(element).val(options.label)
	            
	            return
	        }
	        switch (options.type) {
	            case "text":
	                buttonText = "<span class='oni-button-text'>" + options.label + "</span>"
	                break;
	            case "labeledIcon": 
	                iconText = true
	            case "icon":
	                switch (options.iconPosition) {
	                    case "left": 
	                        buttonText = "<i class='oni-icon oni-icon-left'>" + icons.replace(/\\/g, "") + "</i>" + "<span class='oni-button-text oni-button-text-right" + (!iconText ? " oni-button-text-hidden" : "") + "'>" + options.label + "</span>"
	                    break;
	                    case "right":
	                        buttonText = "<span class='oni-button-text oni-button-text-left" + (!iconText ? " oni-button-text-hidden" : "") + "'>" + options.label + "</span>" + "<i class='oni-icon oni-icon-right'>" + icons.replace(/\\/g, "") + "</i>"
	                    break;
	                    case "left-right":
	                        var iconArr = icons && icons.split("-") || ["", ""],
	                            iconLeft = iconArr[0],
	                            iconRight = iconArr[1]
	                        buttonText = "<i class='oni-icon oni-icon-left'>" + iconLeft.replace(/\\/g, "") + "&nbsp;</i>" + "<span class='oni-button-text oni-button-text-middle" + (!iconText ? " oni-button-text-hidden" : "") + "'>" + options.label + "</span>" + "<i class='oni-icon oni-icon-right'>&nbsp;" + iconRight.replace(/\\/g, "") + "</i>"
	                    break;
	                }
	            break;
	        }
	        element.innerHTML = buttonText
	    }
	    widget.version = 1.0
	    widget.defaults = {
	        groups: false, //@config 是否是button组
	        direction: "", //@config button组的方向，有水平button组和垂直button组，默认是水平，可以设置为"vertical"
	        /**
	         * @config <p>data属性配置button组的内容，每一个数组元素都是一个包含单个按钮基本信息的对象。</p>
	         * <p>注意，请只在button组由至少两个按钮组成时，才配置button组件为button组，也就是设置groups为true时，且配置相应的data</p>
	         * <p>当然还有一种直接列出button组内容的方式，不过这种情况需要指定组件名为buttonset，请看<a href="./avalon.button.ex4.html">demo 4</a>a></p>
	         * <pre>
	            data: [{
	                type: "labeledIcon",
	                iconPosition: "right",
	                icon: "\&\#xf04c;",
	                size: "large",
	                color: "success",
	                text: "暂停"
	            }, {
	                type: "labeledIcon",
	                iconPosition: "right",
	                icon: "\&\#xf04b;",
	                size: "large",
	                color: "success",
	                text: "播放"
	            }, {
	                type: "labeledIcon",
	                iconPosition: "right",
	                icon: "\&\#xf074;",
	                size: "large",
	                color: "success",
	                text: "拖曳"
	            }]                                
	         </pre>
	         */
	        data: [], 
	        type: "text", //@config 配置button的展示形式，仅文字展示，还是仅图标展示，或者文字加图标的展示方式，三种方式分别对应："text"、"icon"、"labeledIcon"
	        iconPosition: "left", //@config 当type为icon或者labeledIcon时，定义icon在哪边，默认在text的左边，也可以配置为右边("right"),或者两边都有("left-right")
	        icon: "", //@config  当type为icon或者labeledIcon时，定义展示icon的内容，本组件的icon是使用web font实现，当iconPosition为"left"或者"right"时，将icon的码赋给icon，当iconPosition为"left-right",将left icon与right icon的码以"-"分隔，比如data-button-icon="\&\#xf001;-\&\#xf06b;"
	        size: "", //@config button有四个尺寸"small", "default", "big", "large"
	        color: "", //@config 定义button的颜色，默认提供了"primary", "warning", "danger", "success", "info", "inverse", "default" 7中颜色，与bootstrap保持一致
	        corner: true, //@config 设置是否显示圆角，可以布尔值或者Number类型，布尔只是简单的说明显示或者不显示，Number则在表示显示与否的同时，也是在指定圆角的大小，圆角默认是2px。
	        style: "", // 用于定义button的展现形式，比如"flat" "glow" "rounded" "3D" "pill" 本组件，仅提供flat的实现
	        disabled: false, //@config 配置button的禁用状态
	        label: "", //@config 设置button的显示文字，label的优先级高于元素的innerHTML
	        width: "" //@config 设置button的宽度，注意button的盒模型设为了border-box
	    }
	    return avalon
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
	/**
	 @links
	 [设置button的大小、宽度，展示不同类型的button](avalon.button.ex1.html)
	 [设置button的width和color](avalon.button.ex2.html)
	 [通过ms-widget="button, $, buttonConfig"的方式设置button组](avalon.button.ex3.html)
	 [通过ms-widget="buttonset"的方式设置button](avalon.button.ex4.html)
	 */


/***/ }),
/* 25 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 26 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2)], __WEBPACK_AMD_DEFINE_RESULT__ = function(avalon) {
	    var defaults = {
	        ghosting: false, //是否影子拖动，动态生成一个元素，拖动此元素，当拖动结束时，让原元素到达此元素的位置上,
	        delay: 0,
	        axis: "xy",
	        started: true,
	        start: avalon.noop,
	        beforeStart: avalon.noop,
	        drag: avalon.noop,
	        beforeStop: avalon.noop,
	        stop: avalon.noop,
	        scrollPlugin: true,
	        scrollSensitivity: 20,
	        scrollSpeed: 20
	    }
	
	    var styleEl = document.getElementById("avalonStyle")
	    //拖动时禁止文字被选中，禁止图片被拖动
	    var cssText = ".ui-helper-global-drag *{ -webkit-touch-callout: none;" +
	            "-khtml-user-select: none;" +
	            "-moz-user-select: none;" +
	            "-ms-user-select: none;" +
	            "user-select: none;}" +
	            ".ui-helper-global-drag img{-webkit-user-drag:none; " +
	            "pointer-events:none;}"
	    try {
	        styleEl.innerHTML += cssText;
	    } catch (e) {
	        styleEl.styleSheet.cssText += cssText;
	    }
	
	    var body
	    var ua = navigator.userAgent;
	    var isAndroid = /Android/i.test(ua);
	    var isBlackBerry = /BlackBerry/i.test(ua)
	    var isWindowPhone = /IEMobile/i.test(ua)
	    var isIOS = /iPhone|iPad|iPod/i.test(ua)
	    var isMobile = isAndroid || isBlackBerry || isWindowPhone || isIOS
	    if (!isMobile) {
	        var dragstart = "mousedown"
	        var drag = "mousemove"
	        var dragstop = "mouseup"
	    } else {
	        dragstart = "touchstart"
	        drag = "touchmove"
	        dragstop = "touchend"
	    }
	
	    var draggable = avalon.bindingHandlers.draggable = function(data, vmodels) {
	        var args = data.value.match(avalon.rword) || []
	        var ID  = args[0] ||  "$"
	        var opts = args[1] ||"draggable"
	        var model, vmOptions
	        if (ID != "$") {
	            model = avalon.vmodels[ID]//如果指定了此VM的ID
	            if (!model) {
	                return
	            }
	        }
	        data.element.removeAttribute("ms-draggable")
	        if (!model) {//如果使用$或绑定值为空，那么就默认取最近一个VM，没有拉倒
	            model = vmodels.length ? vmodels[0] : null
	        }
	        var fnObj = model || {}
	        if (model && typeof model[opts] === "object") {//如果指定了配置对象，并且有VM
	            vmOptions = model[opts]
	            if (vmOptions.$model) {
	                vmOptions = vmOptions.$model
	            }
	            fnObj = vmOptions
	        }
	
	        var element = data.element
	        var $element = avalon(element)
	        var options = avalon.mix({}, defaults, vmOptions || {}, data[opts] || {}, avalon.getWidgetData(element, "draggable"));
	
	        //修正drag,stop为函数
	        "drag,stop,start,beforeStart,beforeStop".replace(avalon.rword, function(name) {
	            var method = options[name]
	            if (typeof method === "string") {
	                if (typeof fnObj[method] === "function") {
	                    options[name] = fnObj[method]
	
	                }
	            }
	        })
	        if (options.axis !== "" && !/^(x|y|xy)$/.test(options.axis)) {
	            options.axis = "xy"
	        }
	        body = document.body //因为到这里时，肯定已经domReady
	
	        $element.bind(dragstart, function(e) {
	            var data = avalon.mix({}, options, {
	                element: element,
	                $element: $element,
	                pageX: getPosition(e, "X"), //相对于页面的坐标, 会改动
	                pageY: getPosition(e, "Y"), //相对于页面的坐标，会改动
	                marginLeft: parseFloat($element.css("marginLeft")) || 0,
	                marginTop: parseFloat($element.css("marginTop")) || 0
	            })
	            data.startPageX = data.pageX//一次拖放只赋值一次
	            data.startPageY = data.pageY//一次拖放只赋值一次
	            options.axis.replace(/./g, function(a) {
	                data["drag" + a.toUpperCase() ] = true
	            })
	            if (!data.dragX && !data.dragY) {
	                data.started = false
	            }
	            //在处理手柄拖动前做些事情
	            if (typeof options.beforeStart === "function") {
	                options.beforeStart.call(data.element, e, data)
	            }
	
	            if (data.handle && fnObj) {// 实现手柄拖动
	                var handle = fnObj[data.handle]
	                handle = typeof handle === "function" ? handle : data.handle
	                if (typeof handle === "function") {
	                    var checked = handle.call(element, e, data)//要求返回一节点
	                    if (checked && checked.nodeType === 1) {
	                        if (!element.contains(checked)) {
	                            return // 不能返回 false，这会阻止文本被选择
	                        }
	                    } else {
	                        return
	                    }
	                }
	            }
	            fixUserSelect()
	            var position = $element.css("position")
	
	            //如果原元素没有被定位
	            if (!/^(?:r|a|f)/.test(position)) {
	                element.style.position = "relative";
	                element.style.top = "0px"
	                element.style.left = "0px"
	            }
	
	            if (options.delay && isFinite(options.delay)) {
	                data.started = false;
	                setTimeout(function() {
	                    data.started = true
	                }, options.delay)
	            }
	
	            var startOffset = $element.offset()
	            if (options.ghosting) {
	                var clone = element.cloneNode(true)
	                avalon(clone).css("opacity", .7).width(element.offsetWidth).height(element.offsetHeight)
	                data.clone = clone
	                if (position !== "fixed") {
	                    clone.style.position = "absolute"
	                    clone.style.top = startOffset.top - data.marginTop + "px"
	                    clone.style.left = startOffset.left - data.marginLeft + "px"
	                }
	                body.appendChild(clone)
	            }
	            var target = avalon(data.clone || data.element)
	            //拖动前相对于offsetParent的坐标
	            data.startLeft = parseFloat(target.css("left"))
	            data.startTop = parseFloat(target.css("top"))
	
	            //拖动后相对于offsetParent的坐标
	            //如果是影子拖动，代理元素是绝对定位时，它与原元素的top, left是不一致的，因此当结束拖放时，不能直接将改变量赋给原元素
	            data.endLeft = parseFloat($element.css("left")) - data.startLeft
	            data.endTop = parseFloat($element.css("top")) - data.startTop
	
	            data.clickX = data.pageX - startOffset.left //鼠标点击的位置与目标元素左上角的距离
	            data.clickY = data.pageY - startOffset.top  //鼠标点击的位置与目标元素左上角的距离
	            setContainment(options, data)//修正containment
	            draggable.dragData = data//决定有东西在拖动
	            "start,drag,beforeStop,stop".replace(avalon.rword, function(name) {
	                //console.log(options[name])
	                draggable[name] = [options[name]]
	            })
	            draggable.plugin.call("start", e, data)
	        })
	
	    }
	    var xy2prop = {
	        "X": "Left",
	        "Y": "Top"
	    }
	    //插件系统
	    draggable.dragData = {}
	    draggable.start = []
	    draggable.drag = []
	    draggable.stop = []
	    draggable.beforeStop = []
	    draggable.plugin = {
	        add: function(name, set) {
	            for (var i in set) {
	                var fn = set[i]
	                if (typeof fn === "function" && Array.isArray(draggable[i])) {
	                    fn.isPlugin = true
	                    fn.pluginName = name + "Plugin"
	                    draggable[i].push(fn)
	                }
	            }
	        },
	        call: function(name, e, data) {
	            var array = draggable[name]
	            if (Array.isArray(array)) {
	                array.forEach(function(fn) {
	                    //用户回调总会执行，插件要看情况
	                    if (typeof fn.pluginName === "undefined" ? true : data[fn.pluginName]) {
	                        fn.call(data.element, e, data)
	                    }
	                })
	            }
	            if (name === "stop") {
	                for (var i in draggable) {
	                    array = draggable[i]
	                    if (Array.isArray(array)) {
	                        array.forEach(function(fn) {
	                            if (!fn.isPlugin) {// 用户回调都是一次性的，插件的方法永远放在列队中
	                                avalon.Array.remove(array, fn)
	                            }
	                        })
	                    }
	                }
	            }
	        }
	    }
	
	    //统一处理拖动的事件
	    var lockTime = new Date - 0, minTime = document.querySelector ? 12 : 30
	    avalon(document).bind(drag, function(e) {
	        var time = new Date - lockTime
	        if (time > minTime) {//减少调用次数，防止卡死IE6-8
	            lockTime = time
	            var data = draggable.dragData
	            if (data.started === true) {
	                //fix touchmove bug;  
	                //IE 在 img 上拖动时默认不能拖动（不触发 mousemove，mouseup 事件，mouseup 后接着触发 mousemove ...）
	                //防止 html5 draggable 元素的拖放默认行为 (选中文字拖放)
	                e.preventDefault();
	                //使用document.selection.empty()来清除选择，会导致捕获失败 
	                var element = data.clone || data.element
	                setPosition(e, element, data, "X")
	                setPosition(e, element, data, "Y")
	                draggable.plugin.call("drag", e, data)
	            }
	        }
	    })
	
	    //统一处理拖动结束的事件
	    avalon(document).bind(dragstop, function(e) {
	        var data = draggable.dragData
	        if (data.started === true) {
	            restoreUserSelect()
	            var element = data.element
	            draggable.plugin.call("beforeStop", e, data)
	            if (data.dragX) {
	                setPosition(e, element, data, "X", true)
	            }
	            if (data.dragY) {
	                setPosition(e, element, data, "Y", true)
	            }
	            if (data.clone) {
	                body.removeChild(data.clone)
	            }
	            draggable.plugin.call("stop", e, data)
	            draggable.dragData = {}
	        }
	    })
	
	
	    function getPosition(e, pos) {
	        var page = "page" + pos
	        return isMobile ? e.changedTouches[0][page] : e[page]
	    }
	
	    function setPosition(e, element, data, pos, end) {
	        var page = getPosition(e, pos)
	        if (data.containment) {
	            var min = pos === "X" ? data.containment[0] : data.containment[1]
	            var max = pos === "X" ? data.containment[2] : data.containment[3]
	            var check = page - (pos === "X" ? data.clickX : data.clickY)
	            if (check < min) {
	                page += Math.abs(min - check)
	            } else if (check > max) {
	                page -= Math.abs(max - check)
	            }
	        }
	        data["page" + pos] = page//重设pageX, pageY
	        var Prop = xy2prop[pos]
	        var prop = Prop.toLowerCase()
	
	        var number = data["start" + Prop] + page - data["startPage" + pos] + (end ? data["end" + Prop] : 0)
	        data[prop] = number
	
	        if (data["drag" + pos]) {//保存top, left
	            element.style[ prop ] = number + "px"
	        }
	
	    }
	
	
	    var rootElement = document.documentElement
	    var fixUserSelect = function() {
	        avalon(rootElement).addClass("ui-helper-global-drag")
	    }
	    var restoreUserSelect = function() {
	        avalon(rootElement).removeClass("ui-helper-global-drag")
	    }
	
	    if (window.VBArray && !("msUserSelect" in rootElement.style)) {
	        var _ieSelectBack;//fix IE6789
	        function returnFalse() {
	            var e = window.event || {}
	            e.returnValue = false
	        }
	        fixUserSelect = function() {
	            _ieSelectBack = body.onselectstart;
	            body.onselectstart = returnFalse;
	        }
	        restoreUserSelect = function() {
	            body.onselectstart = _ieSelectBack;
	        }
	    }
	
	    function setContainment(o, data) {
	        if (!o.containment) {
	            if (Array.isArray(data.containment)) {
	                return
	            }
	            data.containment = null;
	            return;
	        }
	        var elemWidth = data.$element.width()
	        var elemHeight = data.$element.height()
	        if (o.containment === "window") {
	            var $window = avalon(window)
	            //左， 上， 右， 下
	            data.containment = [
	                $window.scrollLeft(),
	                $window.scrollTop(),
	                $window.scrollLeft() + $window.width() - data.marginLeft - elemWidth,
	                $window.scrollTop() + $window.height() - data.marginTop - elemHeight
	            ]
	            return;
	        }
	
	        if (o.containment === "document") {
	            data.containment = [
	                0,
	                0,
	                avalon(document).width() - data.marginLeft,
	                avalon(document).height() - data.marginTop
	            ]
	            return;
	        }
	
	        if (Array.isArray(o.containment)) {
	            var a = o.containment
	            data.containment = [a[0], a[1], a[2] - elemWidth, a[3] - elemHeight]
	            return;
	        }
	
	        if (o.containment === "parent" || o.containment.charAt(0) === "#") {
	            var elem
	            if (o.containment === "parent") {
	                elem = data.element.parentNode;
	            } else {
	                elem = document.getElementById(o.containment.slice(1))
	            }
	            if (elem) {
	                var $offset = avalon(elem).offset()
	                data.containment = [
	                    $offset.left + data.marginLeft, //如果元素设置了marginLeft，设置左边界时需要考虑它 
	                    $offset.top + data.marginTop,
	                    $offset.left + elem.offsetWidth - data.marginLeft - elemWidth,
	                    $offset.top + elem.offsetHeight - data.marginTop - elemHeight
	                ]
	            }
	        }
	    }
	    return avalon
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
	 * @cnName 验证框架
	 * @enName validation
	 * @introduce
	 *  <p>基于avalon ms-duplex2.0的强大验证框架，大家可以直接在avalon.duplexHooks添加验证规则，
	 *  也可以在配置对象上的validationHooks中添加验证规则。</p>
	 *  <p>验证规则如下定义:</p>
	 *  ```javascript
	 *   alpha_numeric: { //这是名字，不能存在-，因为它是这样使用的ms-duplex-int-alpha_numeric="prop"
	 message: '必须为字母或数字',  //这是错误提示，可以使用{{expr}}插值表达式，但这插值功能比较弱，
	 //里面只能是某个单词，两边不能有空格
	 get: function(value, data, next) {//这里的传参是固定的，next为回调
	 next(/^[a-z0-9]+$/i.test(value))//这里是规则
	 //如果message有{{expr}}插值表达式，需要用data.data.expr = aaa设置参数，
	 //aaa可以通过data.element.getAttribute()得到
	 return value //原样返回value
	 }
	 },
	 *  ```
	 *  <p>在validationHooks中自定验证规则，每个都必须写<b style="color:red">message</b>
	 *  (<span style="color:lightgreen">message不能为空字符串</span>)与<b style="color:red">get</b>方法。</p>
	 *  <p>验证规则不惧怕任何形式的异步，只要你决定进行验证时，执行next方法就行。next 需要传入布尔。</p>
	 *  ```javascript
	 *      async: {
	 message : "异步验证" , 
	 get : function( value , data, next ){
	 setTimeout(function(){
	 next(true)
	 },3000)
	 return value
	 }
	 },
	 *  ```
	 * <p> 另一个例子:</p>
	 *  ```javascript
	 beijing: {
	 message : "当前位置必须是在{{city}}" , 
	 get : function( value ,data, next ){
	 $.ajax({
	 url : "http://ws.qunar.com/ips.jcp" , 
	 dataType : "jsonp" , 
	 jsonpCallback : "callback" , 
	 success : function( data, textStatus, jqXHR  ){
	 data.data.city = "北京"
	 next( data.city == value )
	 }
	 })
	 return value
	 }
	 }
	 *  ```
	 *  <p>注意，本组件是基于<code>avalon1.3.7</code>开发，如果是很旧的版本，可以使用avalon.validation.old.js，它一直兼容到avalon1.2.0。</p>
	 *  <p>注意，本组件只能绑定在<code>form元素</code>上, &lt;form ms-widget="validation"&gt;&lt;/&gt</p>
	 *  <p>验证框架提供了各式各样的回调，满足你最挑剔的需求：</p>
	 *  ```javascript
	 *  onSuccess, onError, onComplete, onValidateAll, onReset, onResetAll
	 *  ```
	 * <p>其中，前面四个是一个系列，它们都有1个参数，是一个对象数组，里面一些<code>验证规则对象</code>（如果成功，数组为空）； onReset是在元素获取焦点做重置工作的，如清理类名，
	 * 清空value值，onResetAll是用于重置整个表单，它会在组件执行它辖下的所有元素的onReset回调后再执行。</p>
	 * <p><b>验证规则对象</b>的结构如下：</p>
	 * ```javascript
	 * {
	 *   element: element, //添加了ms-duplex绑定的元素节点，它应该位于form[ms-widget="validation"]这个元素下
	 *   data: {city: "北京"}，
	 *   message: '当前位置必须是在{{city}}',
	 *   validateRule: "beijing",
	 *   getMessage: function(){}//用户调用到方法即可以拿到完整的错误消息——“当前位置必须是在北京”
	 * }
	 * ```
	 * <p>如果用户指定了<code>norequired</code>验证规则，如果input为空, 那么就会跳过之后的所有验证; 在定义拦截器时,务必将它放在最前面,
	 * 如ms-duplex-norequired-int-gt='xxx'
	 * </p>
	 */
	
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(2), __webpack_require__(13)], __WEBPACK_AMD_DEFINE_RESULT__ = function(avalon) {
	    if (!avalon.duplexHooks) {
	        throw new Error("你的版本少于avalon1.3.7，不支持ms-duplex2.0，请使用avalon.validation.old.js")
	    }
	    //==========================avalon.validation的专有逻辑========================
	
	    function idCard(val) {
	        if ((/^\d{15}$/).test(val)) {
	            return true;
	        } else if ((/^\d{17}[0-9xX]$/).test(val)) {
	            var vs = "1,0,x,9,8,7,6,5,4,3,2".split(","),
	                ps = "7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2".split(","),
	                ss = val.toLowerCase().split(""),
	                r = 0;
	            for (var i = 0; i < 17; i++) {
	                r += ps[i] * ss[i];
	            }
	            return (vs[r % 11] == ss[17]);
	        }
	    }
	    // isCorrectDate("2015-2-21") true
	    // isCorrectDate("2015-2-31") false
	
	    function isCorrectDate(value) {
	        if (typeof value === "string" && value) { //是字符串但不能是空字符
	            var arr = value.split("-") //可以被-切成3份，并且第1个是4个字符
	            if (arr.length === 3 && arr[0].length === 4) {
	                var year = ~~arr[0] //全部转换为非负整数
	                var month = ~~arr[1] - 1
	                var date = ~~arr[2]
	                var d = new Date(year, month, date)
	                return d.getFullYear() === year && d.getMonth() === month && d.getDate() === date
	            }
	        }
	        return false
	    }
	
	    //  var remail = /^[a-zA-Z0-9.!#$%&amp;'*+\-\/=?\^_`{|}~\-]+@[a-zA-Z0-9\-]+(?:\.[a-zA-Z0-9\-]+)*$/
	    var remail = /^([A-Z0-9]+[_|\_|\.]?)*[A-Z0-9]+@([A-Z0-9]+[_|\_|\.]?)*[A-Z0-9]+\.[A-Z]{2,3}$/i
	    var ripv4 = /^(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)\.(25[0-5]|2[0-4]\d|[01]?\d\d?)$/i
	    var ripv6 = /^((([0-9A-Fa-f]{1,4}:){7}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}:[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){5}:([0-9A-Fa-f]{1,4}:)?[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){4}:([0-9A-Fa-f]{1,4}:){0,2}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){3}:([0-9A-Fa-f]{1,4}:){0,3}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){2}:([0-9A-Fa-f]{1,4}:){0,4}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){6}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(([0-9A-Fa-f]{1,4}:){0,5}:((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|(::([0-9A-Fa-f]{1,4}:){0,5}((\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b)\.){3}(\b((25[0-5])|(1\d{2})|(2[0-4]\d)|(\d{1,2}))\b))|([0-9A-Fa-f]{1,4}::([0-9A-Fa-f]{1,4}:){0,5}[0-9A-Fa-f]{1,4})|(::([0-9A-Fa-f]{1,4}:){0,6}[0-9A-Fa-f]{1,4})|(([0-9A-Fa-f]{1,4}:){1,7}:))$/i
	    //规则取自淘宝注册登录模块
	    var phoneOne = {
	        //中国移动
	        cm: /^(?:0?1)((?:3[56789]|5[0124789]|8[278])\d|34[0-8]|47\d)\d{7}$/,
	        //中国联通
	        cu: /^(?:0?1)(?:3[012]|4[5]|5[356]|8[356]\d|349)\d{7}$/,
	        //中国电信
	        ce: /^(?:0?1)(?:33|53|8[079])\d{8}$/,
	        //中国大陆
	        cn: /^(?:0?1)[3458]\d{9}$/
	        //中国香港
	        //   hk: /^(?:0?[1569])(?:\d{7}|\d{8}|\d{12})$/,
	        //澳门
	        // macao: /^6\d{7}$/,
	        //台湾
	        //  tw: /^(?:0?[679])(?:\d{7}|\d{8}|\d{10})$//*,
	        //韩国
	        //  kr:/^(?:0?[17])(?:\d{9}|\d{8})$/,
	        //日本
	        // jp:/^(?:0?[789])(?:\d{9}|\d{8})$/*/
	    }
	    /*
	     * http://login.sdo.com/sdo/PRes/4in1_2/js/login.js
	     * function isPhone(val){
	     var gvPhoneRegExpress=new Array();
	     gvPhoneRegExpress.push(/^14[57]\d{8}$/);
	     gvPhoneRegExpress.push(/^15[012356789]\d{8}$/);
	     gvPhoneRegExpress.push(/^13[0-9]\d{8}$/);
	     gvPhoneRegExpress.push(/^18[012456789]\d{8}$/);
	     var lvCellphoneIsOk=false;
	     for (var i=0;i<gvPhoneRegExpress.length;i++){
	     if(gvPhoneRegExpress[i].test(val)){
	     lvCellphoneIsOk=true;
	     break;
	     }
	     }
	     return lvCellphoneIsOk;
	     }
	     其他手机号码正则
	     /^(13\d\d|15[012356789]\d|18[012356789]\d|14[57]\d|17(0[059]|[78]\d))\d{7}$/
	     /^(?:(?:13|18|15)[0-9]{9}|(?:147|170|176|177|178|199|196)[0-9]{8})$/; 
	     
	     */
	
	    avalon.mix(avalon.duplexHooks, {
	        trim: {
	            get: function(value, data) {
	                if (data.element.type !== "password") {
	                    value = String(value || "").trim()
	                }
	                return value
	            }
	        },
	        required: {
	            message: '该项为必填项',
	            get: function(value, data, next) {
	                next(value !== "")
	                return value
	            }
	        },
	        norequired: {
	            message: '非必填项可以不填',
	            get: function(value, data, next) {
	                next(true)
	                return value
	            }
	        },
	        "int": {
	            message: "必须填入整数",
	            get: function(value, data, next) {
	                next(/^\-?\d+$/.test(value))
	                return value
	            }
	        },
	        phone: {
	            message: "输入的手机号不是正确的手机号码",
	            get: function(value, data, next) {
	                var ok = false
	                value = String(value || "").trim()
	                for (var i in phoneOne) {
	                    if (phoneOne[i].test(value)) {
	                        ok = true;
	                        break
	                    }
	                }
	                next(ok)
	                return value
	            }
	        },
	        decimal: {
	            message: '必须是金额,保留到小数点后两位',
	            get: function(value, data, next) {
	                next(/^([1-9]\d*|0)(\.\d{1,2})?$/.test(value))
	                return value
	            }
	        },
	        alpha: {
	            message: '必须是字母',
	            get: function(value, data, next) {
	                next(/^[a-z]+$/i.test(value))
	                return value
	            }
	        },
	        alpha_numeric: {
	            message: '必须为字母或数字',
	            get: function(value, data, next) {
	                next(/^[a-z0-9]+$/i.test(value))
	                return value
	            }
	        },
	      tele:{
	        message: '请输入正确格式的电话号码',
	        get: function(value, data, next) {
	          next(/^(^0\d{2}-?\d{8}$)|(^0\d{3}-?\d{7}$)|(^\(0\d{2}\)-?\d{8}$)|(^\(0\d{3}\)-?\d{7}$)$/.test(value))
	          return value
	        }
	      },
	        alpha_dash: {
	            message: '必须为字母或数字及下划线等特殊字符',
	            validate: function(value, data, next) {
	                next(/^[a-z0-9_\-]+$/i.test(value))
	                return value
	            }
	        },
	        chs: {
	            message: '必须是中文字符',
	            get: function(value, data, next) {
	                next(/^[\u4e00-\u9fa5]+$/.test(value))
	                return value
	            }
	        },
	        chs_numeric: {
	            message: '必须是中文字符或数字及下划线等特殊字符',
	            get: function(value, data, next) {
	                next(/^[\\u4E00-\\u9FFF0-9_\-]+$/i.test(value))
	                return value
	            }
	        },
	        qq: {
	            message: "腾讯QQ号从10000开始",
	            get: function(value, data, next) {
	                next(/^[1-9]\d{4,10}$/.test(value))
	                return value
	            }
	        },
	        id: {
	            message: "输入的身份证格式不正确",
	            get: function(value, data, next) {
	                next(idCard(value))
	                return value
	            }
	        },
	        ipv4: {
	            message: "ip地址不正确",
	            get: function(value, data, next) {
	                next(ripv4.test(value))
	                return value
	            }
	        },
	        ipv6: {
	            message: "ip地址不正确",
	            get: function(value, data, next) {
	                next(ripv6.test(value))
	                return value
	            }
	        },
	        email: {
	            message: "邮件地址错误",
	            get: function(value, data, next) {
	                next(remail.test(value))
	                return value
	            }
	        },
	      paypsd:{
	        message: "必须为六位数字",
	        get: function(value, data, next) {
	          next(/^[0-9]{6}$/.test(value))
	          return value
	        }
	      },
	        url: {
	            message: "URL格式错误",
	            get: function(value, data, next) {
	                next(/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/.test(value))
	                return value
	            }
	        },
	        repeat: {
	            message: "两次密码输入不一致",
	            get: function(value, data, next) {
	                var id = data.element.getAttribute("data-duplex-repeat") || ""
	                var other = avalon(document.getElementById(id)).val() || ""
	                next(value === other)
	                return value
	            }
	        },
	        date: {
	            message: '必须符合日期格式 YYYY-MM-DD',
	            get: function(value, data, next) {
	                next(isCorrectDate(value))
	                return value
	            }
	        },
	        passport: {
	            message: '护照格式错误或过长',
	            get: function(value, data, next) {
	                next(/^[a-zA-Z0-9]{4,20}$/i.test(value))
	                return value
	            }
	        },
	        minlength: {
	            message: '最少输入{{min}}个字',
	            get: function(value, data, next) {
	                var elem = data.element
	                var a = parseInt(elem.getAttribute("minlength"), 10)
	                if (!isFinite(a)) {
	                    a = parseInt(elem.getAttribute("data-duplex-minlength"), 10)
	                }
	                var num = data.data.min = a
	                next(value.length >= num)
	                return value
	            }
	        },
	        maxlength: {
	            message: '最多输入{{max}}个字',
	            get: function(value, data, next) {
	                var elem = data.element
	                var a = parseInt(elem.getAttribute("maxlength"), 10)
	                if (!isFinite(a)) {
	                    a = parseInt(elem.getAttribute("data-duplex-maxlength"), 10)
	                }
	                var num = data.data.max = a
	                next(value.length <= num)
	                return value
	            }
	        },
	        gt: {
	            message: '必须大于{{max}}',
	            get: function(value, data, next) {
	                var elem = data.element
	                var a = parseInt(elem.getAttribute("max"), 10)
	                if (!isFinite(a)) {
	                    a = parseInt(elem.getAttribute("data-duplex-gt"), 10)
	                }
	                var num = data.data.max = a
	                next(parseFloat(value) > num)
	                return value
	            }
	        },
	        lt: {
	            message: '必须小于{{min}}',
	            get: function(value, data, next) {
	                var elem = data.element
	                var a = parseInt(elem.getAttribute("min"), 10)
	                if (!isFinite(a)) {
	                    a = parseInt(elem.getAttribute("data-duplex-lt"), 10)
	                }
	                var num = data.data.min = a
	                next(parseFloat(value) < num)
	                return value
	            }
	        },
	        //contain
	        eq: {
	            message: '必须等于{{eq}}',
	            get: function(value, data, next) {
	                var elem = data.element
	                var a = parseInt(elem.getAttribute("data-duplex-eq"), 10)
	                var num = data.data.eq = a
	                next(parseFloat(value) == num)
	                return value
	            }
	        },
	        contains: {
	            message: "必须包含{{array}}中的一个",
	            get: function(val, data, next) {
	                var vmValue = [].concat(val).map(String)
	                var domValue = (data.element.getAttribute("data-duplex-contains") || "").split(",")
	                data.data.array = domValue
	                var has = false
	                for (var i = 0, n = vmValue.length; i < n; i++) {
	                    var v = vmValue[i]
	                    if (domValue.indexOf(v) >= 0) {
	                        has = true
	                        break
	                    }
	                }
	                next(has)
	                return val
	            }
	        },
	        contain: {
	            message: "必须包含{{array}}",
	            get: function(val, data, next) {
	                var vmValue = [].concat(val).map(String)
	                var domValue = (data.element.getAttribute("data-duplex-contain") || "").split(",")
	                data.data.array = domValue.join('与')
	                if (!vmValue.length) {
	                    var has = false
	                } else {
	                    has = true
	                    for (var i = 0, n = domValue.length; i < n; i++) {
	                        var v = domValue[i]
	                        if (vmValue.indexOf(v) === -1) {
	                            has = false
	                            break
	                        }
	                    }
	                }
	                next(has)
	                return val
	            }
	        },
	        pattern: {
	            message: '必须匹配/{{pattern}}/这样的格式',
	            get: function(value, data, next) {
	                var elem = data.element
	                var h5pattern = elem.getAttribute("pattern")
	                var mspattern = elem.getAttribute("data-duplex-pattern")
	                var pattern = data.data.pattern = h5pattern || mspattern
	                var re = new RegExp('^(?:' + pattern + ')$')
	                next(re.test(value))
	                return value
	            }
	        }
	    })
	    //<input type="number" max=x min=y step=z/> <input type="range" max=x min=y step=z/>
	    //
	
	        function fixEvent(event) {
	            if (event.target) {
	                return event
	            }
	            var ret = {}
	            for (var i in event) {
	                ret[i] = event[i]
	            }
	            var target = ret.target = event.srcElement
	            if (event.type.indexOf("key") === 0) {
	                ret.which = event.charCode != null ? event.charCode : event.keyCode
	            } else if (/mouse|click/.test(event.type)) {
	                var doc = target.ownerDocument || document
	                var box = doc.compatMode === "BackCompat" ? doc.body : doc.documentElement
	                ret.pageX = event.clientX + (box.scrollLeft >> 0) - (box.clientLeft >> 0)
	                ret.pageY = event.clientY + (box.scrollTop >> 0) - (box.clientTop >> 0)
	                ret.wheelDeltaY = ret.wheelDelta
	                ret.wheelDeltaX = 0
	            }
	            ret.timeStamp = new Date - 0
	            ret.originalEvent = event
	            ret.preventDefault = function() { //阻止默认行为
	                event.returnValue = false
	            }
	            ret.stopPropagation = function() { //阻止事件在DOM树中的传播
	                event.cancelBubble = true
	            }
	            return ret
	        }
	    var widget = avalon.ui.validation = function(element, data, vmodels) {
	        var options = data.validationOptions
	        var onSubmitCallback
	        var vmodel = avalon.define(data.validationId, function(vm) {
	            avalon.mix(vm, options)
	            vm.$skipArray = ["widgetElement", "data", "validationHooks", "validateInKeyup", "validateAllInSubmit", "resetInBlur"]
	            vm.widgetElement = element
	            vm.data = []
	            /**
	             * @interface 为元素绑定submit事件，阻止默认行为
	             */
	            vm.$init = function() {
	                element.setAttribute("novalidate", "novalidate");
	                avalon.scan(element, [vmodel].concat(vmodels))
	                if (vm.validateAllInSubmit) {
	                    onSubmitCallback = avalon.bind(element, "submit", function(e) {
	                        e.preventDefault()
	                        vm.validateAll(vm.onValidateAll)
	                    })
	                }
	                if (typeof options.onInit === "function") { //vmodels是不包括vmodel的
	                    options.onInit.call(element, vmodel, options, vmodels)
	                }
	            }
	            /**
	             * @interface 销毁组件，移除相关回调
	             */
	            vm.$destory = function() {
	                vm.data = []
	                onSubmitCallback && avalon.unbind(element, "submit", onSubmitCallback)
	                element.textContent = element.innerHTML = ""
	            }
	
	            /**
	             * @interface 验证当前元素下的所有非disabled元素
	             * @param callback {Null|Function} 最后执行的回调，如果用户没传就使用vm.onValidateAll
	             */
	
	            vm.validateAll = function(callback) {
	                var fn = typeof callback === "function" ? callback : vm.onValidateAll
	                var promise = vm.data.filter(function(data) {
	                    var el = data.element
	                    return el && !el.disabled && vmodel.widgetElement.contains(el)
	                }).map(function(data) {
	                    return vm.validate(data, true)
	                })
	                Promise.all(promise).then(function(array) {
	                    var reasons = []
	                    for (var i = 0, el; el = array[i++];) {
	                        reasons = reasons.concat(el)
	                    }
	                    if (vm.deduplicateInValidateAll) {
	                        var uniq = {}
	                        reasons = reasons.filter(function(data) {
	                            var el = data.element
	                            var id = el.getAttribute("data-validation-id")
	                            if (!id) {
	                                id = setTimeout("1")
	                                el.setAttribute("data-validation-id", id)
	                            }
	                            if (uniq[id]) {
	                                return false
	                            } else {
	                                uniq[id] = true
	                                return true
	                            }
	                        })
	                    }
	                    fn.call(vm.widgetElement, reasons) //这里只放置未通过验证的组件
	                })
	            }
	
	            /**
	             * @interface 重置当前表单元素
	             * @param callback {Null|Function} 最后执行的回调，如果用户没传就使用vm.onResetAll
	             */
	            vm.resetAll = function(callback) {
	                vm.data.filter(function(el) {
	                    return el.element
	                }).forEach(function(data) {
	                    try {
	                        vm.onReset.call(data.element, {
	                            type: "reset"
	                        }, data)
	                    } catch (e) {}
	                })
	                var fn = typeof callback == "function" ? callback : vm.onResetAll
	                fn.call(vm.widgetElement)
	            }
	            /**
	             * @interface 验证单个元素对应的VM中的属性是否符合格式<br>此方法是框架自己调用
	             * @param data {Object} 绑定对象
	             * @param isValidateAll {Undefined|Boolean} 是否全部验证,是就禁止onSuccess, onError, onComplete触发
	             * @param event {Undefined|Event} 方便用户判定这是由keyup,还是blur等事件触发的
	             */
	            vm.validate = function(data, isValidateAll, event) {
	                var value = data.valueAccessor()
	                var inwardHooks = vmodel.validationHooks
	                var globalHooks = avalon.duplexHooks
	                var promises = []
	                var elem = data.element
	                data.validateParam.replace(/\w+/g, function(name) {
	                    var hook = inwardHooks[name] || globalHooks[name]
	                    if (!elem.disabled) {
	                        var resolve, reject
	                            promises.push(new Promise(function(a, b) {
	                                resolve = a
	                                reject = b
	                            }))
	                            var next = function(a) {
	                                if (data.norequired && value === "") {
	                                    a = true
	                                }
	                                if (a) {
	                                    resolve(true)
	                                } else {
	                                    var reason = {
	                                        element: elem,
	                                        data: data.data,
	                                        message: elem.getAttribute("data-duplex-" + name + "-message") || elem.getAttribute("data-duplex-message") || hook.message,
	                                        validateRule: name,
	                                        getMessage: getMessage
	                                    }
	                                    resolve(reason)
	                                }
	                        }
	                        data.data = {}
	                        hook.get(value, data, next)
	                    }
	                })
	                //如果promises不为空，说明经过验证拦截器
	                var lastPromise = Promise.all(promises).then(function(array) {
	                    var reasons = []
	                    for (var i = 0, el; el = array[i++];) {
	                        if (typeof el === "object") {
	                            reasons.push(el)
	                        }
	                    }
	                    if (!isValidateAll) {
	                        if (reasons.length) {
	                            vm.onError.call(elem, reasons, event)
	                        } else {
	                            vm.onSuccess.call(elem, reasons, event)
	                        }
	                        vm.onComplete.call(elem, reasons, event)
	                    }
	                    return reasons
	                })
	                return lastPromise
	
	            }
	            //收集下方表单元素的数据
	            vm.$watch("avalon-ms-duplex-init", function(data) {
	                var inwardHooks = vmodel.validationHooks
	                data.valueAccessor = data.evaluator.apply(null, data.args)
	
	                switch (avalon.type(data.valueAccessor())) {
	                    case "array":
	                        data.valueResetor = function() {
	                            this.valueAccessor([])
	                        }
	                        break
	                    case "boolean":
	                        data.valueResetor = function() {
	                            this.valueAccessor(false)
	                        }
	                        break
	                    case "number":
	                        data.valueResetor = function() {
	                            this.valueAccessor(0)
	                        }
	                        break
	                    default:
	                        data.valueResetor = function() {
	                            this.valueAccessor("")
	                        }
	                        break
	                }
	
	                var globalHooks = avalon.duplexHooks
	                if (typeof data.pipe !== "function" && avalon.contains(element, data.element)) {
	                    var params = []
	                    var validateParams = []
	                    data.param.replace(/\w+/g, function(name) {
	                        var hook = inwardHooks[name] || globalHooks[name]
	                        if (hook && typeof hook.get === "function" && hook.message) {
	                            validateParams.push(name)
	                        } else {
	                            params.push(name)
	                        }
	                        if (name === "norequired") {
	                            data.norequired = true
	                        }
	                    })
	                    data.validate = vm.validate
	                    data.param = params.join("-")
	                    data.validateParam = validateParams.join("-")
	                    if (validateParams.length) {
	                        if (vm.validateInKeyup) {
	                            data.bound("keyup", function(e) {
	                                var type = data.element && data.element.getAttribute("data-duplex-event")
	                                if (!type || /^(?:key|mouse|click|input)/.test(type)) {
	                                    var ev = fixEvent(e)
	                                    setTimeout(function() {
	                                        vm.validate(data, 0, ev)
	                                    })
	                                }
	                            })
	                        }
	                        if (vm.validateInBlur) {
	                            data.bound("blur", function(e) {
	                                vm.validate(data, 0, fixEvent(e))
	                            })
	                        }
	                        if (vm.resetInFocus) {
	                            data.bound("focus", function(e) {
	                                vm.onReset.call(data.element, fixEvent(e), data)
	                            })
	                        }
	                        var array = vm.data.filter(function(el) {
	                            return el.element
	                        })
	                        avalon.Array.ensure(array, data)
	                        vm.data = array
	                    }
	
	                    return false
	                }
	            })
	        })
	
	        return vmodel
	    }
	    var rformat = /\\?{{([^{}]+)\}}/gm
	
	        function getMessage() {
	            var data = this.data || {}
	            return this.message.replace(rformat, function(_, name) {
	                return data[name] == null ? "" : data[name]
	            })
	        }
	    widget.defaults = {
	        validationHooks: {}, //@config {Object} 空对象，用于放置验证规则
	        onSuccess: avalon.noop, //@config {Function} 空函数，单个验证成功时触发，this指向被验证元素this指向被验证元素，传参为一个对象数组外加一个可能存在的事件对象
	        onError: avalon.noop, //@config {Function} 空函数，单个验证失败时触发，this与传参情况同上
	        onComplete: avalon.noop, //@config {Function} 空函数，单个验证无论成功与否都触发，this与传参情况同上
	        onValidateAll: avalon.noop, //@config {Function} 空函数，整体验证后或调用了validateAll方法后触发；有了这东西你就不需要在form元素上ms-on-submit="submitForm"，直接将提交逻辑写在onValidateAll回调上
	        onReset: avalon.noop, //@config {Function} 空函数，表单元素获取焦点时触发，this指向被验证元素，大家可以在这里清理className、value
	        onResetAll: avalon.noop, //@config {Function} 空函数，当用户调用了resetAll后触发，
	        validateInBlur: true, //@config {Boolean} true，在blur事件中进行验证,触发onSuccess, onError, onComplete回调
	        validateInKeyup: true, //@config {Boolean} true，在keyup事件中进行验证,触发onSuccess, onError, onComplete回调
	        validateAllInSubmit: true, //@config {Boolean} true，在submit事件中执行onValidateAll回调
	        resetInFocus: true, //@config {Boolean} true，在focus事件中执行onReset回调,
	        deduplicateInValidateAll: false //@config {Boolean} false，在validateAll回调中对reason数组根据元素节点进行去重
	    }
	    //http://bootstrapvalidator.com/
	    //https://github.com/rinh/jvalidator/blob/master/src/index.js
	    //http://baike.baidu.com/view/2582.htm?fr=aladdin&qq-pf-to=pcqq.group
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
	/**
	 @other
	 <p>avalon.validation自带了许多<code>验证规则</code>，满足你一般的业务需求。</p>
	 <p>大家可以在onReset的回调里得到第二个参数data, 然后调用data.valueResetor()将VM中的数据也置空,如布尔数据变false, 
	 数值数据变0,数组数据变[],字符串数组变成""
	 
	 </p>
	 
	 <h2>错误提示信息的添加</h2>
	 <p>比如说&lt;input ms-duplex-alpha="aaa"/&lt;要求用户输出的都是字母，如果输入其他类型的内容，
	 它就会报错<b style="color:red">必须是字母</b>。为什么呢，因为alpha为一个内置拦截器，
	 定义在avalon.duplexHooks上，结构为</p>
	 ```javascript
	 alpha: {
	 message: '必须是字母',
	 get: function(value, data, next) {
	 next(/^[a-z]+$/i.test(value))
	 return value
	 }
	 },
	 ```
	 如果想显示别的提示信息有三种办法，一就是重写这个栏截器的message属性；
	 二就是添加data-duplex-message="新提示信息"（不过这个已经不提倡使用了，
	 因为一个表单控制可能使用N个拦截器做验证，如ms-duplex-required-alpha-minlength，
	 这会覆盖其他拦截器的默认提示信息）；三就是使用data-duplex-alpha-message="专门用于alpha提示信息" 
	 ```html
	 <input ms-duplex-required-alpha-minlength="aaa" data-duplex-alpha-message="只能全是英文字母"
	 ```    
	 此外，提示信息里面可以使用插值表达式，虽然不能使用变量，也应该够用，比如说minlength拦截器
	 ```javascript
	 minlength: {
	 message: '最少输入{{min}}个字',
	 get: function(value, data, next) {
	 var elem = data.element
	 var a = parseInt(elem.getAttribute("minlength"), 10)
	 if (!isFinite(a)) {
	 a = parseInt(elem.getAttribute("data-duplex-minlength"), 10)
	 }
	 var num = data.data.min = a
	 next(value.length >= num)
	 return value
	 }
	 },
	 ```          
	 我们必须传入一个min参数,这要在元素上添加
	 ```html
	 <input ms-duplex-minlength="aaa" data-duplex-min="6"
	 ```         
	 这样报错时就提示要<b>最少输入6个字</b>      
	 */
	
	/**
	 @links
	 [自带验证规则required,int,decimal,alpha,chs,ipv4,phone](avalon.validation.ex1.html)
	 [自带验证规则qq,id,email,url,date,passport,pattern](avalon.validation.ex2.html)
	 [自带验证规则maxlength,minlength,lt,gt,eq,repeat](avalon.validation.ex3.html)
	 [自带验证规则contains,contain](avalon.validation.ex4.html)
	 [自带验证规则repeat(重复密码)](avalon.validation.ex5.html)
	 [自定义验证规则](avalon.validation.ex6.html)
	 [自带验证规则norequied](avalon.validation.ex7.html)
	 [禁止获得焦点时的onRest回调 resetInFocus ](avalon.validation.ex8.html)
	 [与textbox组件的混用, ms-duplex-string的使用 ](avalon.validation.ex9.html)
	 [验证表单元素存在disabled的情况 ](avalon.validation.ex10.html)
	 [deduplicateInValidateAll:true对validatieAll回调的reasons数组根据element进行去重 ](avalon.validation.ex13.html)
	 [验证dropdown组件 ](avalon.validation.ex14.html)
	 
	 
	 */

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! jQuery v1.8.3 jquery.com | jquery.org/license */
	(function(e,t){function _(e){var t=M[e]={};return v.each(e.split(y),function(e,n){t[n]=!0}),t}function H(e,n,r){if(r===t&&e.nodeType===1){var i="data-"+n.replace(P,"-$1").toLowerCase();r=e.getAttribute(i);if(typeof r=="string"){try{r=r==="true"?!0:r==="false"?!1:r==="null"?null:+r+""===r?+r:D.test(r)?v.parseJSON(r):r}catch(s){}v.data(e,n,r)}else r=t}return r}function B(e){var t;for(t in e){if(t==="data"&&v.isEmptyObject(e[t]))continue;if(t!=="toJSON")return!1}return!0}function et(){return!1}function tt(){return!0}function ut(e){return!e||!e.parentNode||e.parentNode.nodeType===11}function at(e,t){do e=e[t];while(e&&e.nodeType!==1);return e}function ft(e,t,n){t=t||0;if(v.isFunction(t))return v.grep(e,function(e,r){var i=!!t.call(e,r,e);return i===n});if(t.nodeType)return v.grep(e,function(e,r){return e===t===n});if(typeof t=="string"){var r=v.grep(e,function(e){return e.nodeType===1});if(it.test(t))return v.filter(t,r,!n);t=v.filter(t,r)}return v.grep(e,function(e,r){return v.inArray(e,t)>=0===n})}function lt(e){var t=ct.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}function Lt(e,t){return e.getElementsByTagName(t)[0]||e.appendChild(e.ownerDocument.createElement(t))}function At(e,t){if(t.nodeType!==1||!v.hasData(e))return;var n,r,i,s=v._data(e),o=v._data(t,s),u=s.events;if(u){delete o.handle,o.events={};for(n in u)for(r=0,i=u[n].length;r<i;r++)v.event.add(t,n,u[n][r])}o.data&&(o.data=v.extend({},o.data))}function Ot(e,t){var n;if(t.nodeType!==1)return;t.clearAttributes&&t.clearAttributes(),t.mergeAttributes&&t.mergeAttributes(e),n=t.nodeName.toLowerCase(),n==="object"?(t.parentNode&&(t.outerHTML=e.outerHTML),v.support.html5Clone&&e.innerHTML&&!v.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):n==="input"&&Et.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):n==="option"?t.selected=e.defaultSelected:n==="input"||n==="textarea"?t.defaultValue=e.defaultValue:n==="script"&&t.text!==e.text&&(t.text=e.text),t.removeAttribute(v.expando)}function Mt(e){return typeof e.getElementsByTagName!="undefined"?e.getElementsByTagName("*"):typeof e.querySelectorAll!="undefined"?e.querySelectorAll("*"):[]}function _t(e){Et.test(e.type)&&(e.defaultChecked=e.checked)}function Qt(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=Jt.length;while(i--){t=Jt[i]+n;if(t in e)return t}return r}function Gt(e,t){return e=t||e,v.css(e,"display")==="none"||!v.contains(e.ownerDocument,e)}function Yt(e,t){var n,r,i=[],s=0,o=e.length;for(;s<o;s++){n=e[s];if(!n.style)continue;i[s]=v._data(n,"olddisplay"),t?(!i[s]&&n.style.display==="none"&&(n.style.display=""),n.style.display===""&&Gt(n)&&(i[s]=v._data(n,"olddisplay",nn(n.nodeName)))):(r=Dt(n,"display"),!i[s]&&r!=="none"&&v._data(n,"olddisplay",r))}for(s=0;s<o;s++){n=e[s];if(!n.style)continue;if(!t||n.style.display==="none"||n.style.display==="")n.style.display=t?i[s]||"":"none"}return e}function Zt(e,t,n){var r=Rt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function en(e,t,n,r){var i=n===(r?"border":"content")?4:t==="width"?1:0,s=0;for(;i<4;i+=2)n==="margin"&&(s+=v.css(e,n+$t[i],!0)),r?(n==="content"&&(s-=parseFloat(Dt(e,"padding"+$t[i]))||0),n!=="margin"&&(s-=parseFloat(Dt(e,"border"+$t[i]+"Width"))||0)):(s+=parseFloat(Dt(e,"padding"+$t[i]))||0,n!=="padding"&&(s+=parseFloat(Dt(e,"border"+$t[i]+"Width"))||0));return s}function tn(e,t,n){var r=t==="width"?e.offsetWidth:e.offsetHeight,i=!0,s=v.support.boxSizing&&v.css(e,"boxSizing")==="border-box";if(r<=0||r==null){r=Dt(e,t);if(r<0||r==null)r=e.style[t];if(Ut.test(r))return r;i=s&&(v.support.boxSizingReliable||r===e.style[t]),r=parseFloat(r)||0}return r+en(e,t,n||(s?"border":"content"),i)+"px"}function nn(e){if(Wt[e])return Wt[e];var t=v("<"+e+">").appendTo(i.body),n=t.css("display");t.remove();if(n==="none"||n===""){Pt=i.body.appendChild(Pt||v.extend(i.createElement("iframe"),{frameBorder:0,width:0,height:0}));if(!Ht||!Pt.createElement)Ht=(Pt.contentWindow||Pt.contentDocument).document,Ht.write("<!doctype html><html><body>"),Ht.close();t=Ht.body.appendChild(Ht.createElement(e)),n=Dt(t,"display"),i.body.removeChild(Pt)}return Wt[e]=n,n}function fn(e,t,n,r){var i;if(v.isArray(t))v.each(t,function(t,i){n||sn.test(e)?r(e,i):fn(e+"["+(typeof i=="object"?t:"")+"]",i,n,r)});else if(!n&&v.type(t)==="object")for(i in t)fn(e+"["+i+"]",t[i],n,r);else r(e,t)}function Cn(e){return function(t,n){typeof t!="string"&&(n=t,t="*");var r,i,s,o=t.toLowerCase().split(y),u=0,a=o.length;if(v.isFunction(n))for(;u<a;u++)r=o[u],s=/^\+/.test(r),s&&(r=r.substr(1)||"*"),i=e[r]=e[r]||[],i[s?"unshift":"push"](n)}}function kn(e,n,r,i,s,o){s=s||n.dataTypes[0],o=o||{},o[s]=!0;var u,a=e[s],f=0,l=a?a.length:0,c=e===Sn;for(;f<l&&(c||!u);f++)u=a[f](n,r,i),typeof u=="string"&&(!c||o[u]?u=t:(n.dataTypes.unshift(u),u=kn(e,n,r,i,u,o)));return(c||!u)&&!o["*"]&&(u=kn(e,n,r,i,"*",o)),u}function Ln(e,n){var r,i,s=v.ajaxSettings.flatOptions||{};for(r in n)n[r]!==t&&((s[r]?e:i||(i={}))[r]=n[r]);i&&v.extend(!0,e,i)}function An(e,n,r){var i,s,o,u,a=e.contents,f=e.dataTypes,l=e.responseFields;for(s in l)s in r&&(n[l[s]]=r[s]);while(f[0]==="*")f.shift(),i===t&&(i=e.mimeType||n.getResponseHeader("content-type"));if(i)for(s in a)if(a[s]&&a[s].test(i)){f.unshift(s);break}if(f[0]in r)o=f[0];else{for(s in r){if(!f[0]||e.converters[s+" "+f[0]]){o=s;break}u||(u=s)}o=o||u}if(o)return o!==f[0]&&f.unshift(o),r[o]}function On(e,t){var n,r,i,s,o=e.dataTypes.slice(),u=o[0],a={},f=0;e.dataFilter&&(t=e.dataFilter(t,e.dataType));if(o[1])for(n in e.converters)a[n.toLowerCase()]=e.converters[n];for(;i=o[++f];)if(i!=="*"){if(u!=="*"&&u!==i){n=a[u+" "+i]||a["* "+i];if(!n)for(r in a){s=r.split(" ");if(s[1]===i){n=a[u+" "+s[0]]||a["* "+s[0]];if(n){n===!0?n=a[r]:a[r]!==!0&&(i=s[0],o.splice(f--,0,i));break}}}if(n!==!0)if(n&&e["throws"])t=n(t);else try{t=n(t)}catch(l){return{state:"parsererror",error:n?l:"No conversion from "+u+" to "+i}}}u=i}return{state:"success",data:t}}function Fn(){try{return new e.XMLHttpRequest}catch(t){}}function In(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}function $n(){return setTimeout(function(){qn=t},0),qn=v.now()}function Jn(e,t){v.each(t,function(t,n){var r=(Vn[t]||[]).concat(Vn["*"]),i=0,s=r.length;for(;i<s;i++)if(r[i].call(e,t,n))return})}function Kn(e,t,n){var r,i=0,s=0,o=Xn.length,u=v.Deferred().always(function(){delete a.elem}),a=function(){var t=qn||$n(),n=Math.max(0,f.startTime+f.duration-t),r=n/f.duration||0,i=1-r,s=0,o=f.tweens.length;for(;s<o;s++)f.tweens[s].run(i);return u.notifyWith(e,[f,i,n]),i<1&&o?n:(u.resolveWith(e,[f]),!1)},f=u.promise({elem:e,props:v.extend({},t),opts:v.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:qn||$n(),duration:n.duration,tweens:[],createTween:function(t,n,r){var i=v.Tween(e,f.opts,t,n,f.opts.specialEasing[t]||f.opts.easing);return f.tweens.push(i),i},stop:function(t){var n=0,r=t?f.tweens.length:0;for(;n<r;n++)f.tweens[n].run(1);return t?u.resolveWith(e,[f,t]):u.rejectWith(e,[f,t]),this}}),l=f.props;Qn(l,f.opts.specialEasing);for(;i<o;i++){r=Xn[i].call(f,e,l,f.opts);if(r)return r}return Jn(f,l),v.isFunction(f.opts.start)&&f.opts.start.call(e,f),v.fx.timer(v.extend(a,{anim:f,queue:f.opts.queue,elem:e})),f.progress(f.opts.progress).done(f.opts.done,f.opts.complete).fail(f.opts.fail).always(f.opts.always)}function Qn(e,t){var n,r,i,s,o;for(n in e){r=v.camelCase(n),i=t[r],s=e[n],v.isArray(s)&&(i=s[1],s=e[n]=s[0]),n!==r&&(e[r]=s,delete e[n]),o=v.cssHooks[r];if(o&&"expand"in o){s=o.expand(s),delete e[r];for(n in s)n in e||(e[n]=s[n],t[n]=i)}else t[r]=i}}function Gn(e,t,n){var r,i,s,o,u,a,f,l,c,h=this,p=e.style,d={},m=[],g=e.nodeType&&Gt(e);n.queue||(l=v._queueHooks(e,"fx"),l.unqueued==null&&(l.unqueued=0,c=l.empty.fire,l.empty.fire=function(){l.unqueued||c()}),l.unqueued++,h.always(function(){h.always(function(){l.unqueued--,v.queue(e,"fx").length||l.empty.fire()})})),e.nodeType===1&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],v.css(e,"display")==="inline"&&v.css(e,"float")==="none"&&(!v.support.inlineBlockNeedsLayout||nn(e.nodeName)==="inline"?p.display="inline-block":p.zoom=1)),n.overflow&&(p.overflow="hidden",v.support.shrinkWrapBlocks||h.done(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t){s=t[r];if(Un.exec(s)){delete t[r],a=a||s==="toggle";if(s===(g?"hide":"show"))continue;m.push(r)}}o=m.length;if(o){u=v._data(e,"fxshow")||v._data(e,"fxshow",{}),"hidden"in u&&(g=u.hidden),a&&(u.hidden=!g),g?v(e).show():h.done(function(){v(e).hide()}),h.done(function(){var t;v.removeData(e,"fxshow",!0);for(t in d)v.style(e,t,d[t])});for(r=0;r<o;r++)i=m[r],f=h.createTween(i,g?u[i]:0),d[i]=u[i]||v.style(e,i),i in u||(u[i]=f.start,g&&(f.end=f.start,f.start=i==="width"||i==="height"?1:0))}}function Yn(e,t,n,r,i){return new Yn.prototype.init(e,t,n,r,i)}function Zn(e,t){var n,r={height:e},i=0;t=t?1:0;for(;i<4;i+=2-t)n=$t[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}function tr(e){return v.isWindow(e)?e:e.nodeType===9?e.defaultView||e.parentWindow:!1}var n,r,i=e.document,s=e.location,o=e.navigator,u=e.jQuery,a=e.$,f=Array.prototype.push,l=Array.prototype.slice,c=Array.prototype.indexOf,h=Object.prototype.toString,p=Object.prototype.hasOwnProperty,d=String.prototype.trim,v=function(e,t){return new v.fn.init(e,t,n)},m=/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,g=/\S/,y=/\s+/,b=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,w=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,E=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,S=/^[\],:{}\s]*$/,x=/(?:^|:|,)(?:\s*\[)+/g,T=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,N=/"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,C=/^-ms-/,k=/-([\da-z])/gi,L=function(e,t){return(t+"").toUpperCase()},A=function(){i.addEventListener?(i.removeEventListener("DOMContentLoaded",A,!1),v.ready()):i.readyState==="complete"&&(i.detachEvent("onreadystatechange",A),v.ready())},O={};v.fn=v.prototype={constructor:v,init:function(e,n,r){var s,o,u,a;if(!e)return this;if(e.nodeType)return this.context=this[0]=e,this.length=1,this;if(typeof e=="string"){e.charAt(0)==="<"&&e.charAt(e.length-1)===">"&&e.length>=3?s=[null,e,null]:s=w.exec(e);if(s&&(s[1]||!n)){if(s[1])return n=n instanceof v?n[0]:n,a=n&&n.nodeType?n.ownerDocument||n:i,e=v.parseHTML(s[1],a,!0),E.test(s[1])&&v.isPlainObject(n)&&this.attr.call(e,n,!0),v.merge(this,e);o=i.getElementById(s[2]);if(o&&o.parentNode){if(o.id!==s[2])return r.find(e);this.length=1,this[0]=o}return this.context=i,this.selector=e,this}return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e)}return v.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),v.makeArray(e,this))},selector:"",jquery:"1.8.3",length:0,size:function(){return this.length},toArray:function(){return l.call(this)},get:function(e){return e==null?this.toArray():e<0?this[this.length+e]:this[e]},pushStack:function(e,t,n){var r=v.merge(this.constructor(),e);return r.prevObject=this,r.context=this.context,t==="find"?r.selector=this.selector+(this.selector?" ":"")+n:t&&(r.selector=this.selector+"."+t+"("+n+")"),r},each:function(e,t){return v.each(this,e,t)},ready:function(e){return v.ready.promise().done(e),this},eq:function(e){return e=+e,e===-1?this.slice(e):this.slice(e,e+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(l.apply(this,arguments),"slice",l.call(arguments).join(","))},map:function(e){return this.pushStack(v.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:[].sort,splice:[].splice},v.fn.init.prototype=v.fn,v.extend=v.fn.extend=function(){var e,n,r,i,s,o,u=arguments[0]||{},a=1,f=arguments.length,l=!1;typeof u=="boolean"&&(l=u,u=arguments[1]||{},a=2),typeof u!="object"&&!v.isFunction(u)&&(u={}),f===a&&(u=this,--a);for(;a<f;a++)if((e=arguments[a])!=null)for(n in e){r=u[n],i=e[n];if(u===i)continue;l&&i&&(v.isPlainObject(i)||(s=v.isArray(i)))?(s?(s=!1,o=r&&v.isArray(r)?r:[]):o=r&&v.isPlainObject(r)?r:{},u[n]=v.extend(l,o,i)):i!==t&&(u[n]=i)}return u},v.extend({noConflict:function(t){return e.$===v&&(e.$=a),t&&e.jQuery===v&&(e.jQuery=u),v},isReady:!1,readyWait:1,holdReady:function(e){e?v.readyWait++:v.ready(!0)},ready:function(e){if(e===!0?--v.readyWait:v.isReady)return;if(!i.body)return setTimeout(v.ready,1);v.isReady=!0;if(e!==!0&&--v.readyWait>0)return;r.resolveWith(i,[v]),v.fn.trigger&&v(i).trigger("ready").off("ready")},isFunction:function(e){return v.type(e)==="function"},isArray:Array.isArray||function(e){return v.type(e)==="array"},isWindow:function(e){return e!=null&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return e==null?String(e):O[h.call(e)]||"object"},isPlainObject:function(e){if(!e||v.type(e)!=="object"||e.nodeType||v.isWindow(e))return!1;try{if(e.constructor&&!p.call(e,"constructor")&&!p.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(n){return!1}var r;for(r in e);return r===t||p.call(e,r)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw new Error(e)},parseHTML:function(e,t,n){var r;return!e||typeof e!="string"?null:(typeof t=="boolean"&&(n=t,t=0),t=t||i,(r=E.exec(e))?[t.createElement(r[1])]:(r=v.buildFragment([e],t,n?null:[]),v.merge([],(r.cacheable?v.clone(r.fragment):r.fragment).childNodes)))},parseJSON:function(t){if(!t||typeof t!="string")return null;t=v.trim(t);if(e.JSON&&e.JSON.parse)return e.JSON.parse(t);if(S.test(t.replace(T,"@").replace(N,"]").replace(x,"")))return(new Function("return "+t))();v.error("Invalid JSON: "+t)},parseXML:function(n){var r,i;if(!n||typeof n!="string")return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(s){r=t}return(!r||!r.documentElement||r.getElementsByTagName("parsererror").length)&&v.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&g.test(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(C,"ms-").replace(k,L)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,n,r){var i,s=0,o=e.length,u=o===t||v.isFunction(e);if(r){if(u){for(i in e)if(n.apply(e[i],r)===!1)break}else for(;s<o;)if(n.apply(e[s++],r)===!1)break}else if(u){for(i in e)if(n.call(e[i],i,e[i])===!1)break}else for(;s<o;)if(n.call(e[s],s,e[s++])===!1)break;return e},trim:d&&!d.call("\ufeff\u00a0")?function(e){return e==null?"":d.call(e)}:function(e){return e==null?"":(e+"").replace(b,"")},makeArray:function(e,t){var n,r=t||[];return e!=null&&(n=v.type(e),e.length==null||n==="string"||n==="function"||n==="regexp"||v.isWindow(e)?f.call(r,e):v.merge(r,e)),r},inArray:function(e,t,n){var r;if(t){if(c)return c.call(t,e,n);r=t.length,n=n?n<0?Math.max(0,r+n):n:0;for(;n<r;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,s=0;if(typeof r=="number")for(;s<r;s++)e[i++]=n[s];else while(n[s]!==t)e[i++]=n[s++];return e.length=i,e},grep:function(e,t,n){var r,i=[],s=0,o=e.length;n=!!n;for(;s<o;s++)r=!!t(e[s],s),n!==r&&i.push(e[s]);return i},map:function(e,n,r){var i,s,o=[],u=0,a=e.length,f=e instanceof v||a!==t&&typeof a=="number"&&(a>0&&e[0]&&e[a-1]||a===0||v.isArray(e));if(f)for(;u<a;u++)i=n(e[u],u,r),i!=null&&(o[o.length]=i);else for(s in e)i=n(e[s],s,r),i!=null&&(o[o.length]=i);return o.concat.apply([],o)},guid:1,proxy:function(e,n){var r,i,s;return typeof n=="string"&&(r=e[n],n=e,e=r),v.isFunction(e)?(i=l.call(arguments,2),s=function(){return e.apply(n,i.concat(l.call(arguments)))},s.guid=e.guid=e.guid||v.guid++,s):t},access:function(e,n,r,i,s,o,u){var a,f=r==null,l=0,c=e.length;if(r&&typeof r=="object"){for(l in r)v.access(e,n,l,r[l],1,o,i);s=1}else if(i!==t){a=u===t&&v.isFunction(i),f&&(a?(a=n,n=function(e,t,n){return a.call(v(e),n)}):(n.call(e,i),n=null));if(n)for(;l<c;l++)n(e[l],r,a?i.call(e[l],l,n(e[l],r)):i,u);s=1}return s?e:f?n.call(e):c?n(e[0],r):o},now:function(){return(new Date).getTime()}}),v.ready.promise=function(t){if(!r){r=v.Deferred();if(i.readyState==="complete")setTimeout(v.ready,1);else if(i.addEventListener)i.addEventListener("DOMContentLoaded",A,!1),e.addEventListener("load",v.ready,!1);else{i.attachEvent("onreadystatechange",A),e.attachEvent("onload",v.ready);var n=!1;try{n=e.frameElement==null&&i.documentElement}catch(s){}n&&n.doScroll&&function o(){if(!v.isReady){try{n.doScroll("left")}catch(e){return setTimeout(o,50)}v.ready()}}()}}return r.promise(t)},v.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(e,t){O["[object "+t+"]"]=t.toLowerCase()}),n=v(i);var M={};v.Callbacks=function(e){e=typeof e=="string"?M[e]||_(e):v.extend({},e);var n,r,i,s,o,u,a=[],f=!e.once&&[],l=function(t){n=e.memory&&t,r=!0,u=s||0,s=0,o=a.length,i=!0;for(;a&&u<o;u++)if(a[u].apply(t[0],t[1])===!1&&e.stopOnFalse){n=!1;break}i=!1,a&&(f?f.length&&l(f.shift()):n?a=[]:c.disable())},c={add:function(){if(a){var t=a.length;(function r(t){v.each(t,function(t,n){var i=v.type(n);i==="function"?(!e.unique||!c.has(n))&&a.push(n):n&&n.length&&i!=="string"&&r(n)})})(arguments),i?o=a.length:n&&(s=t,l(n))}return this},remove:function(){return a&&v.each(arguments,function(e,t){var n;while((n=v.inArray(t,a,n))>-1)a.splice(n,1),i&&(n<=o&&o--,n<=u&&u--)}),this},has:function(e){return v.inArray(e,a)>-1},empty:function(){return a=[],this},disable:function(){return a=f=n=t,this},disabled:function(){return!a},lock:function(){return f=t,n||c.disable(),this},locked:function(){return!f},fireWith:function(e,t){return t=t||[],t=[e,t.slice?t.slice():t],a&&(!r||f)&&(i?f.push(t):l(t)),this},fire:function(){return c.fireWith(this,arguments),this},fired:function(){return!!r}};return c},v.extend({Deferred:function(e){var t=[["resolve","done",v.Callbacks("once memory"),"resolved"],["reject","fail",v.Callbacks("once memory"),"rejected"],["notify","progress",v.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return v.Deferred(function(n){v.each(t,function(t,r){var s=r[0],o=e[t];i[r[1]](v.isFunction(o)?function(){var e=o.apply(this,arguments);e&&v.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[s+"With"](this===i?n:this,[e])}:n[s])}),e=null}).promise()},promise:function(e){return e!=null?v.extend(e,r):r}},i={};return r.pipe=r.then,v.each(t,function(e,s){var o=s[2],u=s[3];r[s[1]]=o.add,u&&o.add(function(){n=u},t[e^1][2].disable,t[2][2].lock),i[s[0]]=o.fire,i[s[0]+"With"]=o.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=l.call(arguments),r=n.length,i=r!==1||e&&v.isFunction(e.promise)?r:0,s=i===1?e:v.Deferred(),o=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?l.call(arguments):r,n===u?s.notifyWith(t,n):--i||s.resolveWith(t,n)}},u,a,f;if(r>1){u=new Array(r),a=new Array(r),f=new Array(r);for(;t<r;t++)n[t]&&v.isFunction(n[t].promise)?n[t].promise().done(o(t,f,n)).fail(s.reject).progress(o(t,a,u)):--i}return i||s.resolveWith(f,n),s.promise()}}),v.support=function(){var t,n,r,s,o,u,a,f,l,c,h,p=i.createElement("div");p.setAttribute("className","t"),p.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=p.getElementsByTagName("*"),r=p.getElementsByTagName("a")[0];if(!n||!r||!n.length)return{};s=i.createElement("select"),o=s.appendChild(i.createElement("option")),u=p.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t={leadingWhitespace:p.firstChild.nodeType===3,tbody:!p.getElementsByTagName("tbody").length,htmlSerialize:!!p.getElementsByTagName("link").length,style:/top/.test(r.getAttribute("style")),hrefNormalized:r.getAttribute("href")==="/a",opacity:/^0.5/.test(r.style.opacity),cssFloat:!!r.style.cssFloat,checkOn:u.value==="on",optSelected:o.selected,getSetAttribute:p.className!=="t",enctype:!!i.createElement("form").enctype,html5Clone:i.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",boxModel:i.compatMode==="CSS1Compat",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},u.checked=!0,t.noCloneChecked=u.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!o.disabled;try{delete p.test}catch(d){t.deleteExpando=!1}!p.addEventListener&&p.attachEvent&&p.fireEvent&&(p.attachEvent("onclick",h=function(){t.noCloneEvent=!1}),p.cloneNode(!0).fireEvent("onclick"),p.detachEvent("onclick",h)),u=i.createElement("input"),u.value="t",u.setAttribute("type","radio"),t.radioValue=u.value==="t",u.setAttribute("checked","checked"),u.setAttribute("name","t"),p.appendChild(u),a=i.createDocumentFragment(),a.appendChild(p.lastChild),t.checkClone=a.cloneNode(!0).cloneNode(!0).lastChild.checked,t.appendChecked=u.checked,a.removeChild(u),a.appendChild(p);if(p.attachEvent)for(l in{submit:!0,change:!0,focusin:!0})f="on"+l,c=f in p,c||(p.setAttribute(f,"return;"),c=typeof p[f]=="function"),t[l+"Bubbles"]=c;return v(function(){var n,r,s,o,u="padding:0;margin:0;border:0;display:block;overflow:hidden;",a=i.getElementsByTagName("body")[0];if(!a)return;n=i.createElement("div"),n.style.cssText="visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px",a.insertBefore(n,a.firstChild),r=i.createElement("div"),n.appendChild(r),r.innerHTML="<table><tr><td></td><td>t</td></tr></table>",s=r.getElementsByTagName("td"),s[0].style.cssText="padding:0;margin:0;border:0;display:none",c=s[0].offsetHeight===0,s[0].style.display="",s[1].style.display="none",t.reliableHiddenOffsets=c&&s[0].offsetHeight===0,r.innerHTML="",r.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",t.boxSizing=r.offsetWidth===4,t.doesNotIncludeMarginInBodyOffset=a.offsetTop!==1,e.getComputedStyle&&(t.pixelPosition=(e.getComputedStyle(r,null)||{}).top!=="1%",t.boxSizingReliable=(e.getComputedStyle(r,null)||{width:"4px"}).width==="4px",o=i.createElement("div"),o.style.cssText=r.style.cssText=u,o.style.marginRight=o.style.width="0",r.style.width="1px",r.appendChild(o),t.reliableMarginRight=!parseFloat((e.getComputedStyle(o,null)||{}).marginRight)),typeof r.style.zoom!="undefined"&&(r.innerHTML="",r.style.cssText=u+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=r.offsetWidth===3,r.style.display="block",r.style.overflow="visible",r.innerHTML="<div></div>",r.firstChild.style.width="5px",t.shrinkWrapBlocks=r.offsetWidth!==3,n.style.zoom=1),a.removeChild(n),n=r=s=o=null}),a.removeChild(p),n=r=s=o=u=a=p=null,t}();var D=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,P=/([A-Z])/g;v.extend({cache:{},deletedIds:[],uuid:0,expando:"jQuery"+(v.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(e){return e=e.nodeType?v.cache[e[v.expando]]:e[v.expando],!!e&&!B(e)},data:function(e,n,r,i){if(!v.acceptData(e))return;var s,o,u=v.expando,a=typeof n=="string",f=e.nodeType,l=f?v.cache:e,c=f?e[u]:e[u]&&u;if((!c||!l[c]||!i&&!l[c].data)&&a&&r===t)return;c||(f?e[u]=c=v.deletedIds.pop()||v.guid++:c=u),l[c]||(l[c]={},f||(l[c].toJSON=v.noop));if(typeof n=="object"||typeof n=="function")i?l[c]=v.extend(l[c],n):l[c].data=v.extend(l[c].data,n);return s=l[c],i||(s.data||(s.data={}),s=s.data),r!==t&&(s[v.camelCase(n)]=r),a?(o=s[n],o==null&&(o=s[v.camelCase(n)])):o=s,o},removeData:function(e,t,n){if(!v.acceptData(e))return;var r,i,s,o=e.nodeType,u=o?v.cache:e,a=o?e[v.expando]:v.expando;if(!u[a])return;if(t){r=n?u[a]:u[a].data;if(r){v.isArray(t)||(t in r?t=[t]:(t=v.camelCase(t),t in r?t=[t]:t=t.split(" ")));for(i=0,s=t.length;i<s;i++)delete r[t[i]];if(!(n?B:v.isEmptyObject)(r))return}}if(!n){delete u[a].data;if(!B(u[a]))return}o?v.cleanData([e],!0):v.support.deleteExpando||u!=u.window?delete u[a]:u[a]=null},_data:function(e,t,n){return v.data(e,t,n,!0)},acceptData:function(e){var t=e.nodeName&&v.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),v.fn.extend({data:function(e,n){var r,i,s,o,u,a=this[0],f=0,l=null;if(e===t){if(this.length){l=v.data(a);if(a.nodeType===1&&!v._data(a,"parsedAttrs")){s=a.attributes;for(u=s.length;f<u;f++)o=s[f].name,o.indexOf("data-")||(o=v.camelCase(o.substring(5)),H(a,o,l[o]));v._data(a,"parsedAttrs",!0)}}return l}return typeof e=="object"?this.each(function(){v.data(this,e)}):(r=e.split(".",2),r[1]=r[1]?"."+r[1]:"",i=r[1]+"!",v.access(this,function(n){if(n===t)return l=this.triggerHandler("getData"+i,[r[0]]),l===t&&a&&(l=v.data(a,e),l=H(a,e,l)),l===t&&r[1]?this.data(r[0]):l;r[1]=n,this.each(function(){var t=v(this);t.triggerHandler("setData"+i,r),v.data(this,e,n),t.triggerHandler("changeData"+i,r)})},null,n,arguments.length>1,null,!1))},removeData:function(e){return this.each(function(){v.removeData(this,e)})}}),v.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=v._data(e,t),n&&(!r||v.isArray(n)?r=v._data(e,t,v.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=v.queue(e,t),r=n.length,i=n.shift(),s=v._queueHooks(e,t),o=function(){v.dequeue(e,t)};i==="inprogress"&&(i=n.shift(),r--),i&&(t==="fx"&&n.unshift("inprogress"),delete s.stop,i.call(e,o,s)),!r&&s&&s.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return v._data(e,n)||v._data(e,n,{empty:v.Callbacks("once memory").add(function(){v.removeData(e,t+"queue",!0),v.removeData(e,n,!0)})})}}),v.fn.extend({queue:function(e,n){var r=2;return typeof e!="string"&&(n=e,e="fx",r--),arguments.length<r?v.queue(this[0],e):n===t?this:this.each(function(){var t=v.queue(this,e,n);v._queueHooks(this,e),e==="fx"&&t[0]!=="inprogress"&&v.dequeue(this,e)})},dequeue:function(e){return this.each(function(){v.dequeue(this,e)})},delay:function(e,t){return e=v.fx?v.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,s=v.Deferred(),o=this,u=this.length,a=function(){--i||s.resolveWith(o,[o])};typeof e!="string"&&(n=e,e=t),e=e||"fx";while(u--)r=v._data(o[u],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(a));return a(),s.promise(n)}});var j,F,I,q=/[\t\r\n]/g,R=/\r/g,U=/^(?:button|input)$/i,z=/^(?:button|input|object|select|textarea)$/i,W=/^a(?:rea|)$/i,X=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,V=v.support.getSetAttribute;v.fn.extend({attr:function(e,t){return v.access(this,v.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){v.removeAttr(this,e)})},prop:function(e,t){return v.access(this,v.prop,e,t,arguments.length>1)},removeProp:function(e){return e=v.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,s,o,u;if(v.isFunction(e))return this.each(function(t){v(this).addClass(e.call(this,t,this.className))});if(e&&typeof e=="string"){t=e.split(y);for(n=0,r=this.length;n<r;n++){i=this[n];if(i.nodeType===1)if(!i.className&&t.length===1)i.className=e;else{s=" "+i.className+" ";for(o=0,u=t.length;o<u;o++)s.indexOf(" "+t[o]+" ")<0&&(s+=t[o]+" ");i.className=v.trim(s)}}}return this},removeClass:function(e){var n,r,i,s,o,u,a;if(v.isFunction(e))return this.each(function(t){v(this).removeClass(e.call(this,t,this.className))});if(e&&typeof e=="string"||e===t){n=(e||"").split(y);for(u=0,a=this.length;u<a;u++){i=this[u];if(i.nodeType===1&&i.className){r=(" "+i.className+" ").replace(q," ");for(s=0,o=n.length;s<o;s++)while(r.indexOf(" "+n[s]+" ")>=0)r=r.replace(" "+n[s]+" "," ");i.className=e?v.trim(r):""}}}return this},toggleClass:function(e,t){var n=typeof e,r=typeof t=="boolean";return v.isFunction(e)?this.each(function(n){v(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if(n==="string"){var i,s=0,o=v(this),u=t,a=e.split(y);while(i=a[s++])u=r?u:!o.hasClass(i),o[u?"addClass":"removeClass"](i)}else if(n==="undefined"||n==="boolean")this.className&&v._data(this,"__className__",this.className),this.className=this.className||e===!1?"":v._data(this,"__className__")||""})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;n<r;n++)if(this[n].nodeType===1&&(" "+this[n].className+" ").replace(q," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,s=this[0];if(!arguments.length){if(s)return n=v.valHooks[s.type]||v.valHooks[s.nodeName.toLowerCase()],n&&"get"in n&&(r=n.get(s,"value"))!==t?r:(r=s.value,typeof r=="string"?r.replace(R,""):r==null?"":r);return}return i=v.isFunction(e),this.each(function(r){var s,o=v(this);if(this.nodeType!==1)return;i?s=e.call(this,r,o.val()):s=e,s==null?s="":typeof s=="number"?s+="":v.isArray(s)&&(s=v.map(s,function(e){return e==null?"":e+""})),n=v.valHooks[this.type]||v.valHooks[this.nodeName.toLowerCase()];if(!n||!("set"in n)||n.set(this,s,"value")===t)this.value=s})}}),v.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,s=e.type==="select-one"||i<0,o=s?null:[],u=s?i+1:r.length,a=i<0?u:s?i:0;for(;a<u;a++){n=r[a];if((n.selected||a===i)&&(v.support.optDisabled?!n.disabled:n.getAttribute("disabled")===null)&&(!n.parentNode.disabled||!v.nodeName(n.parentNode,"optgroup"))){t=v(n).val();if(s)return t;o.push(t)}}return o},set:function(e,t){var n=v.makeArray(t);return v(e).find("option").each(function(){this.selected=v.inArray(v(this).val(),n)>=0}),n.length||(e.selectedIndex=-1),n}}},attrFn:{},attr:function(e,n,r,i){var s,o,u,a=e.nodeType;if(!e||a===3||a===8||a===2)return;if(i&&v.isFunction(v.fn[n]))return v(e)[n](r);if(typeof e.getAttribute=="undefined")return v.prop(e,n,r);u=a!==1||!v.isXMLDoc(e),u&&(n=n.toLowerCase(),o=v.attrHooks[n]||(X.test(n)?F:j));if(r!==t){if(r===null){v.removeAttr(e,n);return}return o&&"set"in o&&u&&(s=o.set(e,r,n))!==t?s:(e.setAttribute(n,r+""),r)}return o&&"get"in o&&u&&(s=o.get(e,n))!==null?s:(s=e.getAttribute(n),s===null?t:s)},removeAttr:function(e,t){var n,r,i,s,o=0;if(t&&e.nodeType===1){r=t.split(y);for(;o<r.length;o++)i=r[o],i&&(n=v.propFix[i]||i,s=X.test(i),s||v.attr(e,i,""),e.removeAttribute(V?i:n),s&&n in e&&(e[n]=!1))}},attrHooks:{type:{set:function(e,t){if(U.test(e.nodeName)&&e.parentNode)v.error("type property can't be changed");else if(!v.support.radioValue&&t==="radio"&&v.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}},value:{get:function(e,t){return j&&v.nodeName(e,"button")?j.get(e,t):t in e?e.value:null},set:function(e,t,n){if(j&&v.nodeName(e,"button"))return j.set(e,t,n);e.value=t}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(e,n,r){var i,s,o,u=e.nodeType;if(!e||u===3||u===8||u===2)return;return o=u!==1||!v.isXMLDoc(e),o&&(n=v.propFix[n]||n,s=v.propHooks[n]),r!==t?s&&"set"in s&&(i=s.set(e,r,n))!==t?i:e[n]=r:s&&"get"in s&&(i=s.get(e,n))!==null?i:e[n]},propHooks:{tabIndex:{get:function(e){var n=e.getAttributeNode("tabindex");return n&&n.specified?parseInt(n.value,10):z.test(e.nodeName)||W.test(e.nodeName)&&e.href?0:t}}}}),F={get:function(e,n){var r,i=v.prop(e,n);return i===!0||typeof i!="boolean"&&(r=e.getAttributeNode(n))&&r.nodeValue!==!1?n.toLowerCase():t},set:function(e,t,n){var r;return t===!1?v.removeAttr(e,n):(r=v.propFix[n]||n,r in e&&(e[r]=!0),e.setAttribute(n,n.toLowerCase())),n}},V||(I={name:!0,id:!0,coords:!0},j=v.valHooks.button={get:function(e,n){var r;return r=e.getAttributeNode(n),r&&(I[n]?r.value!=="":r.specified)?r.value:t},set:function(e,t,n){var r=e.getAttributeNode(n);return r||(r=i.createAttribute(n),e.setAttributeNode(r)),r.value=t+""}},v.each(["width","height"],function(e,t){v.attrHooks[t]=v.extend(v.attrHooks[t],{set:function(e,n){if(n==="")return e.setAttribute(t,"auto"),n}})}),v.attrHooks.contenteditable={get:j.get,set:function(e,t,n){t===""&&(t="false"),j.set(e,t,n)}}),v.support.hrefNormalized||v.each(["href","src","width","height"],function(e,n){v.attrHooks[n]=v.extend(v.attrHooks[n],{get:function(e){var r=e.getAttribute(n,2);return r===null?t:r}})}),v.support.style||(v.attrHooks.style={get:function(e){return e.style.cssText.toLowerCase()||t},set:function(e,t){return e.style.cssText=t+""}}),v.support.optSelected||(v.propHooks.selected=v.extend(v.propHooks.selected,{get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}})),v.support.enctype||(v.propFix.enctype="encoding"),v.support.checkOn||v.each(["radio","checkbox"],function(){v.valHooks[this]={get:function(e){return e.getAttribute("value")===null?"on":e.value}}}),v.each(["radio","checkbox"],function(){v.valHooks[this]=v.extend(v.valHooks[this],{set:function(e,t){if(v.isArray(t))return e.checked=v.inArray(v(e).val(),t)>=0}})});var $=/^(?:textarea|input|select)$/i,J=/^([^\.]*|)(?:\.(.+)|)$/,K=/(?:^|\s)hover(\.\S+|)\b/,Q=/^key/,G=/^(?:mouse|contextmenu)|click/,Y=/^(?:focusinfocus|focusoutblur)$/,Z=function(e){return v.event.special.hover?e:e.replace(K,"mouseenter$1 mouseleave$1")};v.event={add:function(e,n,r,i,s){var o,u,a,f,l,c,h,p,d,m,g;if(e.nodeType===3||e.nodeType===8||!n||!r||!(o=v._data(e)))return;r.handler&&(d=r,r=d.handler,s=d.selector),r.guid||(r.guid=v.guid++),a=o.events,a||(o.events=a={}),u=o.handle,u||(o.handle=u=function(e){return typeof v=="undefined"||!!e&&v.event.triggered===e.type?t:v.event.dispatch.apply(u.elem,arguments)},u.elem=e),n=v.trim(Z(n)).split(" ");for(f=0;f<n.length;f++){l=J.exec(n[f])||[],c=l[1],h=(l[2]||"").split(".").sort(),g=v.event.special[c]||{},c=(s?g.delegateType:g.bindType)||c,g=v.event.special[c]||{},p=v.extend({type:c,origType:l[1],data:i,handler:r,guid:r.guid,selector:s,needsContext:s&&v.expr.match.needsContext.test(s),namespace:h.join(".")},d),m=a[c];if(!m){m=a[c]=[],m.delegateCount=0;if(!g.setup||g.setup.call(e,i,h,u)===!1)e.addEventListener?e.addEventListener(c,u,!1):e.attachEvent&&e.attachEvent("on"+c,u)}g.add&&(g.add.call(e,p),p.handler.guid||(p.handler.guid=r.guid)),s?m.splice(m.delegateCount++,0,p):m.push(p),v.event.global[c]=!0}e=null},global:{},remove:function(e,t,n,r,i){var s,o,u,a,f,l,c,h,p,d,m,g=v.hasData(e)&&v._data(e);if(!g||!(h=g.events))return;t=v.trim(Z(t||"")).split(" ");for(s=0;s<t.length;s++){o=J.exec(t[s])||[],u=a=o[1],f=o[2];if(!u){for(u in h)v.event.remove(e,u+t[s],n,r,!0);continue}p=v.event.special[u]||{},u=(r?p.delegateType:p.bindType)||u,d=h[u]||[],l=d.length,f=f?new RegExp("(^|\\.)"+f.split(".").sort().join("\\.(?:.*\\.|)")+"(\\.|$)"):null;for(c=0;c<d.length;c++)m=d[c],(i||a===m.origType)&&(!n||n.guid===m.guid)&&(!f||f.test(m.namespace))&&(!r||r===m.selector||r==="**"&&m.selector)&&(d.splice(c--,1),m.selector&&d.delegateCount--,p.remove&&p.remove.call(e,m));d.length===0&&l!==d.length&&((!p.teardown||p.teardown.call(e,f,g.handle)===!1)&&v.removeEvent(e,u,g.handle),delete h[u])}v.isEmptyObject(h)&&(delete g.handle,v.removeData(e,"events",!0))},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(n,r,s,o){if(!s||s.nodeType!==3&&s.nodeType!==8){var u,a,f,l,c,h,p,d,m,g,y=n.type||n,b=[];if(Y.test(y+v.event.triggered))return;y.indexOf("!")>=0&&(y=y.slice(0,-1),a=!0),y.indexOf(".")>=0&&(b=y.split("."),y=b.shift(),b.sort());if((!s||v.event.customEvent[y])&&!v.event.global[y])return;n=typeof n=="object"?n[v.expando]?n:new v.Event(y,n):new v.Event(y),n.type=y,n.isTrigger=!0,n.exclusive=a,n.namespace=b.join("."),n.namespace_re=n.namespace?new RegExp("(^|\\.)"+b.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,h=y.indexOf(":")<0?"on"+y:"";if(!s){u=v.cache;for(f in u)u[f].events&&u[f].events[y]&&v.event.trigger(n,r,u[f].handle.elem,!0);return}n.result=t,n.target||(n.target=s),r=r!=null?v.makeArray(r):[],r.unshift(n),p=v.event.special[y]||{};if(p.trigger&&p.trigger.apply(s,r)===!1)return;m=[[s,p.bindType||y]];if(!o&&!p.noBubble&&!v.isWindow(s)){g=p.delegateType||y,l=Y.test(g+y)?s:s.parentNode;for(c=s;l;l=l.parentNode)m.push([l,g]),c=l;c===(s.ownerDocument||i)&&m.push([c.defaultView||c.parentWindow||e,g])}for(f=0;f<m.length&&!n.isPropagationStopped();f++)l=m[f][0],n.type=m[f][1],d=(v._data(l,"events")||{})[n.type]&&v._data(l,"handle"),d&&d.apply(l,r),d=h&&l[h],d&&v.acceptData(l)&&d.apply&&d.apply(l,r)===!1&&n.preventDefault();return n.type=y,!o&&!n.isDefaultPrevented()&&(!p._default||p._default.apply(s.ownerDocument,r)===!1)&&(y!=="click"||!v.nodeName(s,"a"))&&v.acceptData(s)&&h&&s[y]&&(y!=="focus"&&y!=="blur"||n.target.offsetWidth!==0)&&!v.isWindow(s)&&(c=s[h],c&&(s[h]=null),v.event.triggered=y,s[y](),v.event.triggered=t,c&&(s[h]=c)),n.result}return},dispatch:function(n){n=v.event.fix(n||e.event);var r,i,s,o,u,a,f,c,h,p,d=(v._data(this,"events")||{})[n.type]||[],m=d.delegateCount,g=l.call(arguments),y=!n.exclusive&&!n.namespace,b=v.event.special[n.type]||{},w=[];g[0]=n,n.delegateTarget=this;if(b.preDispatch&&b.preDispatch.call(this,n)===!1)return;if(m&&(!n.button||n.type!=="click"))for(s=n.target;s!=this;s=s.parentNode||this)if(s.disabled!==!0||n.type!=="click"){u={},f=[];for(r=0;r<m;r++)c=d[r],h=c.selector,u[h]===t&&(u[h]=c.needsContext?v(h,this).index(s)>=0:v.find(h,this,null,[s]).length),u[h]&&f.push(c);f.length&&w.push({elem:s,matches:f})}d.length>m&&w.push({elem:this,matches:d.slice(m)});for(r=0;r<w.length&&!n.isPropagationStopped();r++){a=w[r],n.currentTarget=a.elem;for(i=0;i<a.matches.length&&!n.isImmediatePropagationStopped();i++){c=a.matches[i];if(y||!n.namespace&&!c.namespace||n.namespace_re&&n.namespace_re.test(c.namespace))n.data=c.data,n.handleObj=c,o=((v.event.special[c.origType]||{}).handle||c.handler).apply(a.elem,g),o!==t&&(n.result=o,o===!1&&(n.preventDefault(),n.stopPropagation()))}}return b.postDispatch&&b.postDispatch.call(this,n),n.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return e.which==null&&(e.which=t.charCode!=null?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,s,o,u=n.button,a=n.fromElement;return e.pageX==null&&n.clientX!=null&&(r=e.target.ownerDocument||i,s=r.documentElement,o=r.body,e.pageX=n.clientX+(s&&s.scrollLeft||o&&o.scrollLeft||0)-(s&&s.clientLeft||o&&o.clientLeft||0),e.pageY=n.clientY+(s&&s.scrollTop||o&&o.scrollTop||0)-(s&&s.clientTop||o&&o.clientTop||0)),!e.relatedTarget&&a&&(e.relatedTarget=a===e.target?n.toElement:a),!e.which&&u!==t&&(e.which=u&1?1:u&2?3:u&4?2:0),e}},fix:function(e){if(e[v.expando])return e;var t,n,r=e,s=v.event.fixHooks[e.type]||{},o=s.props?this.props.concat(s.props):this.props;e=v.Event(r);for(t=o.length;t;)n=o[--t],e[n]=r[n];return e.target||(e.target=r.srcElement||i),e.target.nodeType===3&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,r):e},special:{load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(e,t,n){v.isWindow(this)&&(this.onbeforeunload=n)},teardown:function(e,t){this.onbeforeunload===t&&(this.onbeforeunload=null)}}},simulate:function(e,t,n,r){var i=v.extend(new v.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?v.event.trigger(i,null,t):v.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},v.event.handle=v.event.dispatch,v.removeEvent=i.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]=="undefined"&&(e[r]=null),e.detachEvent(r,n))},v.Event=function(e,t){if(!(this instanceof v.Event))return new v.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?tt:et):this.type=e,t&&v.extend(this,t),this.timeStamp=e&&e.timeStamp||v.now(),this[v.expando]=!0},v.Event.prototype={preventDefault:function(){this.isDefaultPrevented=tt;var e=this.originalEvent;if(!e)return;e.preventDefault?e.preventDefault():e.returnValue=!1},stopPropagation:function(){this.isPropagationStopped=tt;var e=this.originalEvent;if(!e)return;e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=tt,this.stopPropagation()},isDefaultPrevented:et,isPropagationStopped:et,isImmediatePropagationStopped:et},v.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){v.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,s=e.handleObj,o=s.selector;if(!i||i!==r&&!v.contains(r,i))e.type=s.origType,n=s.handler.apply(this,arguments),e.type=t;return n}}}),v.support.submitBubbles||(v.event.special.submit={setup:function(){if(v.nodeName(this,"form"))return!1;v.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=v.nodeName(n,"input")||v.nodeName(n,"button")?n.form:t;r&&!v._data(r,"_submit_attached")&&(v.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),v._data(r,"_submit_attached",!0))})},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&v.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){if(v.nodeName(this,"form"))return!1;v.event.remove(this,"._submit")}}),v.support.changeBubbles||(v.event.special.change={setup:function(){if($.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")v.event.add(this,"propertychange._change",function(e){e.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),v.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),v.event.simulate("change",this,e,!0)});return!1}v.event.add(this,"beforeactivate._change",function(e){var t=e.target;$.test(t.nodeName)&&!v._data(t,"_change_attached")&&(v.event.add(t,"change._change",function(e){this.parentNode&&!e.isSimulated&&!e.isTrigger&&v.event.simulate("change",this.parentNode,e,!0)}),v._data(t,"_change_attached",!0))})},handle:function(e){var t=e.target;if(this!==t||e.isSimulated||e.isTrigger||t.type!=="radio"&&t.type!=="checkbox")return e.handleObj.handler.apply(this,arguments)},teardown:function(){return v.event.remove(this,"._change"),!$.test(this.nodeName)}}),v.support.focusinBubbles||v.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){v.event.simulate(t,e.target,v.event.fix(e),!0)};v.event.special[t]={setup:function(){n++===0&&i.addEventListener(e,r,!0)},teardown:function(){--n===0&&i.removeEventListener(e,r,!0)}}}),v.fn.extend({on:function(e,n,r,i,s){var o,u;if(typeof e=="object"){typeof n!="string"&&(r=r||n,n=t);for(u in e)this.on(u,n,r,e[u],s);return this}r==null&&i==null?(i=n,r=n=t):i==null&&(typeof n=="string"?(i=r,r=t):(i=r,r=n,n=t));if(i===!1)i=et;else if(!i)return this;return s===1&&(o=i,i=function(e){return v().off(e),o.apply(this,arguments)},i.guid=o.guid||(o.guid=v.guid++)),this.each(function(){v.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,s;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,v(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if(typeof e=="object"){for(s in e)this.off(s,n,e[s]);return this}if(n===!1||typeof n=="function")r=n,n=t;return r===!1&&(r=et),this.each(function(){v.event.remove(this,e,r,n)})},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},live:function(e,t,n){return v(this.context).on(e,this.selector,t,n),this},die:function(e,t){return v(this.context).off(e,this.selector||"**",t),this},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return arguments.length===1?this.off(e,"**"):this.off(t,e||"**",n)},trigger:function(e,t){return this.each(function(){v.event.trigger(e,t,this)})},triggerHandler:function(e,t){if(this[0])return v.event.trigger(e,t,this[0],!0)},toggle:function(e){var t=arguments,n=e.guid||v.guid++,r=0,i=function(n){var i=(v._data(this,"lastToggle"+e.guid)||0)%r;return v._data(this,"lastToggle"+e.guid,i+1),n.preventDefault(),t[i].apply(this,arguments)||!1};i.guid=n;while(r<t.length)t[r++].guid=n;return this.click(i)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),v.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){v.fn[t]=function(e,n){return n==null&&(n=e,e=null),arguments.length>0?this.on(t,null,e,n):this.trigger(t)},Q.test(t)&&(v.event.fixHooks[t]=v.event.keyHooks),G.test(t)&&(v.event.fixHooks[t]=v.event.mouseHooks)}),function(e,t){function nt(e,t,n,r){n=n||[],t=t||g;var i,s,a,f,l=t.nodeType;if(!e||typeof e!="string")return n;if(l!==1&&l!==9)return[];a=o(t);if(!a&&!r)if(i=R.exec(e))if(f=i[1]){if(l===9){s=t.getElementById(f);if(!s||!s.parentNode)return n;if(s.id===f)return n.push(s),n}else if(t.ownerDocument&&(s=t.ownerDocument.getElementById(f))&&u(t,s)&&s.id===f)return n.push(s),n}else{if(i[2])return S.apply(n,x.call(t.getElementsByTagName(e),0)),n;if((f=i[3])&&Z&&t.getElementsByClassName)return S.apply(n,x.call(t.getElementsByClassName(f),0)),n}return vt(e.replace(j,"$1"),t,n,r,a)}function rt(e){return function(t){var n=t.nodeName.toLowerCase();return n==="input"&&t.type===e}}function it(e){return function(t){var n=t.nodeName.toLowerCase();return(n==="input"||n==="button")&&t.type===e}}function st(e){return N(function(t){return t=+t,N(function(n,r){var i,s=e([],n.length,t),o=s.length;while(o--)n[i=s[o]]&&(n[i]=!(r[i]=n[i]))})})}function ot(e,t,n){if(e===t)return n;var r=e.nextSibling;while(r){if(r===t)return-1;r=r.nextSibling}return 1}function ut(e,t){var n,r,s,o,u,a,f,l=L[d][e+" "];if(l)return t?0:l.slice(0);u=e,a=[],f=i.preFilter;while(u){if(!n||(r=F.exec(u)))r&&(u=u.slice(r[0].length)||u),a.push(s=[]);n=!1;if(r=I.exec(u))s.push(n=new m(r.shift())),u=u.slice(n.length),n.type=r[0].replace(j," ");for(o in i.filter)(r=J[o].exec(u))&&(!f[o]||(r=f[o](r)))&&(s.push(n=new m(r.shift())),u=u.slice(n.length),n.type=o,n.matches=r);if(!n)break}return t?u.length:u?nt.error(e):L(e,a).slice(0)}function at(e,t,r){var i=t.dir,s=r&&t.dir==="parentNode",o=w++;return t.first?function(t,n,r){while(t=t[i])if(s||t.nodeType===1)return e(t,n,r)}:function(t,r,u){if(!u){var a,f=b+" "+o+" ",l=f+n;while(t=t[i])if(s||t.nodeType===1){if((a=t[d])===l)return t.sizset;if(typeof a=="string"&&a.indexOf(f)===0){if(t.sizset)return t}else{t[d]=l;if(e(t,r,u))return t.sizset=!0,t;t.sizset=!1}}}else while(t=t[i])if(s||t.nodeType===1)if(e(t,r,u))return t}}function ft(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function lt(e,t,n,r,i){var s,o=[],u=0,a=e.length,f=t!=null;for(;u<a;u++)if(s=e[u])if(!n||n(s,r,i))o.push(s),f&&t.push(u);return o}function ct(e,t,n,r,i,s){return r&&!r[d]&&(r=ct(r)),i&&!i[d]&&(i=ct(i,s)),N(function(s,o,u,a){var f,l,c,h=[],p=[],d=o.length,v=s||dt(t||"*",u.nodeType?[u]:u,[]),m=e&&(s||!t)?lt(v,h,e,u,a):v,g=n?i||(s?e:d||r)?[]:o:m;n&&n(m,g,u,a);if(r){f=lt(g,p),r(f,[],u,a),l=f.length;while(l--)if(c=f[l])g[p[l]]=!(m[p[l]]=c)}if(s){if(i||e){if(i){f=[],l=g.length;while(l--)(c=g[l])&&f.push(m[l]=c);i(null,g=[],f,a)}l=g.length;while(l--)(c=g[l])&&(f=i?T.call(s,c):h[l])>-1&&(s[f]=!(o[f]=c))}}else g=lt(g===o?g.splice(d,g.length):g),i?i(null,o,g,a):S.apply(o,g)})}function ht(e){var t,n,r,s=e.length,o=i.relative[e[0].type],u=o||i.relative[" "],a=o?1:0,f=at(function(e){return e===t},u,!0),l=at(function(e){return T.call(t,e)>-1},u,!0),h=[function(e,n,r){return!o&&(r||n!==c)||((t=n).nodeType?f(e,n,r):l(e,n,r))}];for(;a<s;a++)if(n=i.relative[e[a].type])h=[at(ft(h),n)];else{n=i.filter[e[a].type].apply(null,e[a].matches);if(n[d]){r=++a;for(;r<s;r++)if(i.relative[e[r].type])break;return ct(a>1&&ft(h),a>1&&e.slice(0,a-1).join("").replace(j,"$1"),n,a<r&&ht(e.slice(a,r)),r<s&&ht(e=e.slice(r)),r<s&&e.join(""))}h.push(n)}return ft(h)}function pt(e,t){var r=t.length>0,s=e.length>0,o=function(u,a,f,l,h){var p,d,v,m=[],y=0,w="0",x=u&&[],T=h!=null,N=c,C=u||s&&i.find.TAG("*",h&&a.parentNode||a),k=b+=N==null?1:Math.E;T&&(c=a!==g&&a,n=o.el);for(;(p=C[w])!=null;w++){if(s&&p){for(d=0;v=e[d];d++)if(v(p,a,f)){l.push(p);break}T&&(b=k,n=++o.el)}r&&((p=!v&&p)&&y--,u&&x.push(p))}y+=w;if(r&&w!==y){for(d=0;v=t[d];d++)v(x,m,a,f);if(u){if(y>0)while(w--)!x[w]&&!m[w]&&(m[w]=E.call(l));m=lt(m)}S.apply(l,m),T&&!u&&m.length>0&&y+t.length>1&&nt.uniqueSort(l)}return T&&(b=k,c=N),x};return o.el=0,r?N(o):o}function dt(e,t,n){var r=0,i=t.length;for(;r<i;r++)nt(e,t[r],n);return n}function vt(e,t,n,r,s){var o,u,f,l,c,h=ut(e),p=h.length;if(!r&&h.length===1){u=h[0]=h[0].slice(0);if(u.length>2&&(f=u[0]).type==="ID"&&t.nodeType===9&&!s&&i.relative[u[1].type]){t=i.find.ID(f.matches[0].replace($,""),t,s)[0];if(!t)return n;e=e.slice(u.shift().length)}for(o=J.POS.test(e)?-1:u.length-1;o>=0;o--){f=u[o];if(i.relative[l=f.type])break;if(c=i.find[l])if(r=c(f.matches[0].replace($,""),z.test(u[0].type)&&t.parentNode||t,s)){u.splice(o,1),e=r.length&&u.join("");if(!e)return S.apply(n,x.call(r,0)),n;break}}}return a(e,h)(r,t,s,n,z.test(e)),n}function mt(){}var n,r,i,s,o,u,a,f,l,c,h=!0,p="undefined",d=("sizcache"+Math.random()).replace(".",""),m=String,g=e.document,y=g.documentElement,b=0,w=0,E=[].pop,S=[].push,x=[].slice,T=[].indexOf||function(e){var t=0,n=this.length;for(;t<n;t++)if(this[t]===e)return t;return-1},N=function(e,t){return e[d]=t==null||t,e},C=function(){var e={},t=[];return N(function(n,r){return t.push(n)>i.cacheLength&&delete e[t.shift()],e[n+" "]=r},e)},k=C(),L=C(),A=C(),O="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",_=M.replace("w","w#"),D="([*^$|!~]?=)",P="\\["+O+"*("+M+")"+O+"*(?:"+D+O+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+_+")|)|)"+O+"*\\]",H=":("+M+")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:"+P+")|[^:]|\\\\.)*|.*))\\)|)",B=":(even|odd|eq|gt|lt|nth|first|last)(?:\\("+O+"*((?:-\\d)?\\d*)"+O+"*\\)|)(?=[^-]|$)",j=new RegExp("^"+O+"+|((?:^|[^\\\\])(?:\\\\.)*)"+O+"+$","g"),F=new RegExp("^"+O+"*,"+O+"*"),I=new RegExp("^"+O+"*([\\x20\\t\\r\\n\\f>+~])"+O+"*"),q=new RegExp(H),R=/^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,U=/^:not/,z=/[\x20\t\r\n\f]*[+~]/,W=/:not\($/,X=/h\d/i,V=/input|select|textarea|button/i,$=/\\(?!\\)/g,J={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),NAME:new RegExp("^\\[name=['\"]?("+M+")['\"]?\\]"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+H),POS:new RegExp(B,"i"),CHILD:new RegExp("^:(only|nth|first|last)-child(?:\\("+O+"*(even|odd|(([+-]|)(\\d*)n|)"+O+"*(?:([+-]|)"+O+"*(\\d+)|))"+O+"*\\)|)","i"),needsContext:new RegExp("^"+O+"*[>+~]|"+B,"i")},K=function(e){var t=g.createElement("div");try{return e(t)}catch(n){return!1}finally{t=null}},Q=K(function(e){return e.appendChild(g.createComment("")),!e.getElementsByTagName("*").length}),G=K(function(e){return e.innerHTML="<a href='#'></a>",e.firstChild&&typeof e.firstChild.getAttribute!==p&&e.firstChild.getAttribute("href")==="#"}),Y=K(function(e){e.innerHTML="<select></select>";var t=typeof e.lastChild.getAttribute("multiple");return t!=="boolean"&&t!=="string"}),Z=K(function(e){return e.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",!e.getElementsByClassName||!e.getElementsByClassName("e").length?!1:(e.lastChild.className="e",e.getElementsByClassName("e").length===2)}),et=K(function(e){e.id=d+0,e.innerHTML="<a name='"+d+"'></a><div name='"+d+"'></div>",y.insertBefore(e,y.firstChild);var t=g.getElementsByName&&g.getElementsByName(d).length===2+g.getElementsByName(d+0).length;return r=!g.getElementById(d),y.removeChild(e),t});try{x.call(y.childNodes,0)[0].nodeType}catch(tt){x=function(e){var t,n=[];for(;t=this[e];e++)n.push(t);return n}}nt.matches=function(e,t){return nt(e,null,null,t)},nt.matchesSelector=function(e,t){return nt(t,null,null,[e]).length>0},s=nt.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(i===1||i===9||i===11){if(typeof e.textContent=="string")return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=s(e)}else if(i===3||i===4)return e.nodeValue}else for(;t=e[r];r++)n+=s(t);return n},o=nt.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?t.nodeName!=="HTML":!1},u=nt.contains=y.contains?function(e,t){var n=e.nodeType===9?e.documentElement:e,r=t&&t.parentNode;return e===r||!!(r&&r.nodeType===1&&n.contains&&n.contains(r))}:y.compareDocumentPosition?function(e,t){return t&&!!(e.compareDocumentPosition(t)&16)}:function(e,t){while(t=t.parentNode)if(t===e)return!0;return!1},nt.attr=function(e,t){var n,r=o(e);return r||(t=t.toLowerCase()),(n=i.attrHandle[t])?n(e):r||Y?e.getAttribute(t):(n=e.getAttributeNode(t),n?typeof e[t]=="boolean"?e[t]?t:null:n.specified?n.value:null:null)},i=nt.selectors={cacheLength:50,createPseudo:N,match:J,attrHandle:G?{}:{href:function(e){return e.getAttribute("href",2)},type:function(e){return e.getAttribute("type")}},find:{ID:r?function(e,t,n){if(typeof t.getElementById!==p&&!n){var r=t.getElementById(e);return r&&r.parentNode?[r]:[]}}:function(e,n,r){if(typeof n.getElementById!==p&&!r){var i=n.getElementById(e);return i?i.id===e||typeof i.getAttributeNode!==p&&i.getAttributeNode("id").value===e?[i]:t:[]}},TAG:Q?function(e,t){if(typeof t.getElementsByTagName!==p)return t.getElementsByTagName(e)}:function(e,t){var n=t.getElementsByTagName(e);if(e==="*"){var r,i=[],s=0;for(;r=n[s];s++)r.nodeType===1&&i.push(r);return i}return n},NAME:et&&function(e,t){if(typeof t.getElementsByName!==p)return t.getElementsByName(name)},CLASS:Z&&function(e,t,n){if(typeof t.getElementsByClassName!==p&&!n)return t.getElementsByClassName(e)}},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace($,""),e[3]=(e[4]||e[5]||"").replace($,""),e[2]==="~="&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),e[1]==="nth"?(e[2]||nt.error(e[0]),e[3]=+(e[3]?e[4]+(e[5]||1):2*(e[2]==="even"||e[2]==="odd")),e[4]=+(e[6]+e[7]||e[2]==="odd")):e[2]&&nt.error(e[0]),e},PSEUDO:function(e){var t,n;if(J.CHILD.test(e[0]))return null;if(e[3])e[2]=e[3];else if(t=e[4])q.test(t)&&(n=ut(t,!0))&&(n=t.indexOf(")",t.length-n)-t.length)&&(t=t.slice(0,n),e[0]=e[0].slice(0,n)),e[2]=t;return e.slice(0,3)}},filter:{ID:r?function(e){return e=e.replace($,""),function(t){return t.getAttribute("id")===e}}:function(e){return e=e.replace($,""),function(t){var n=typeof t.getAttributeNode!==p&&t.getAttributeNode("id");return n&&n.value===e}},TAG:function(e){return e==="*"?function(){return!0}:(e=e.replace($,"").toLowerCase(),function(t){return t.nodeName&&t.nodeName.toLowerCase()===e})},CLASS:function(e){var t=k[d][e+" "];return t||(t=new RegExp("(^|"+O+")"+e+"("+O+"|$)"))&&k(e,function(e){return t.test(e.className||typeof e.getAttribute!==p&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r,i){var s=nt.attr(r,e);return s==null?t==="!=":t?(s+="",t==="="?s===n:t==="!="?s!==n:t==="^="?n&&s.indexOf(n)===0:t==="*="?n&&s.indexOf(n)>-1:t==="$="?n&&s.substr(s.length-n.length)===n:t==="~="?(" "+s+" ").indexOf(n)>-1:t==="|="?s===n||s.substr(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r){return e==="nth"?function(e){var t,i,s=e.parentNode;if(n===1&&r===0)return!0;if(s){i=0;for(t=s.firstChild;t;t=t.nextSibling)if(t.nodeType===1){i++;if(e===t)break}}return i-=r,i===n||i%n===0&&i/n>=0}:function(t){var n=t;switch(e){case"only":case"first":while(n=n.previousSibling)if(n.nodeType===1)return!1;if(e==="first")return!0;n=t;case"last":while(n=n.nextSibling)if(n.nodeType===1)return!1;return!0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||nt.error("unsupported pseudo: "+e);return r[d]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?N(function(e,n){var i,s=r(e,t),o=s.length;while(o--)i=T.call(e,s[o]),e[i]=!(n[i]=s[o])}):function(e){return r(e,0,n)}):r}},pseudos:{not:N(function(e){var t=[],n=[],r=a(e.replace(j,"$1"));return r[d]?N(function(e,t,n,i){var s,o=r(e,null,i,[]),u=e.length;while(u--)if(s=o[u])e[u]=!(t[u]=s)}):function(e,i,s){return t[0]=e,r(t,null,s,n),!n.pop()}}),has:N(function(e){return function(t){return nt(e,t).length>0}}),contains:N(function(e){return function(t){return(t.textContent||t.innerText||s(t)).indexOf(e)>-1}}),enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return t==="input"&&!!e.checked||t==="option"&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},parent:function(e){return!i.pseudos.empty(e)},empty:function(e){var t;e=e.firstChild;while(e){if(e.nodeName>"@"||(t=e.nodeType)===3||t===4)return!1;e=e.nextSibling}return!0},header:function(e){return X.test(e.nodeName)},text:function(e){var t,n;return e.nodeName.toLowerCase()==="input"&&(t=e.type)==="text"&&((n=e.getAttribute("type"))==null||n.toLowerCase()===t)},radio:rt("radio"),checkbox:rt("checkbox"),file:rt("file"),password:rt("password"),image:rt("image"),submit:it("submit"),reset:it("reset"),button:function(e){var t=e.nodeName.toLowerCase();return t==="input"&&e.type==="button"||t==="button"},input:function(e){return V.test(e.nodeName)},focus:function(e){var t=e.ownerDocument;return e===t.activeElement&&(!t.hasFocus||t.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},active:function(e){return e===e.ownerDocument.activeElement},first:st(function(){return[0]}),last:st(function(e,t){return[t-1]}),eq:st(function(e,t,n){return[n<0?n+t:n]}),even:st(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:st(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:st(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:st(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}},f=y.compareDocumentPosition?function(e,t){return e===t?(l=!0,0):(!e.compareDocumentPosition||!t.compareDocumentPosition?e.compareDocumentPosition:e.compareDocumentPosition(t)&4)?-1:1}:function(e,t){if(e===t)return l=!0,0;if(e.sourceIndex&&t.sourceIndex)return e.sourceIndex-t.sourceIndex;var n,r,i=[],s=[],o=e.parentNode,u=t.parentNode,a=o;if(o===u)return ot(e,t);if(!o)return-1;if(!u)return 1;while(a)i.unshift(a),a=a.parentNode;a=u;while(a)s.unshift(a),a=a.parentNode;n=i.length,r=s.length;for(var f=0;f<n&&f<r;f++)if(i[f]!==s[f])return ot(i[f],s[f]);return f===n?ot(e,s[f],-1):ot(i[f],t,1)},[0,0].sort(f),h=!l,nt.uniqueSort=function(e){var t,n=[],r=1,i=0;l=h,e.sort(f);if(l){for(;t=e[r];r++)t===e[r-1]&&(i=n.push(r));while(i--)e.splice(n[i],1)}return e},nt.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},a=nt.compile=function(e,t){var n,r=[],i=[],s=A[d][e+" "];if(!s){t||(t=ut(e)),n=t.length;while(n--)s=ht(t[n]),s[d]?r.push(s):i.push(s);s=A(e,pt(i,r))}return s},g.querySelectorAll&&function(){var e,t=vt,n=/'|\\/g,r=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,i=[":focus"],s=[":active"],u=y.matchesSelector||y.mozMatchesSelector||y.webkitMatchesSelector||y.oMatchesSelector||y.msMatchesSelector;K(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||i.push("\\["+O+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),e.querySelectorAll(":checked").length||i.push(":checked")}),K(function(e){e.innerHTML="<p test=''></p>",e.querySelectorAll("[test^='']").length&&i.push("[*^$]="+O+"*(?:\"\"|'')"),e.innerHTML="<input type='hidden'/>",e.querySelectorAll(":enabled").length||i.push(":enabled",":disabled")}),i=new RegExp(i.join("|")),vt=function(e,r,s,o,u){if(!o&&!u&&!i.test(e)){var a,f,l=!0,c=d,h=r,p=r.nodeType===9&&e;if(r.nodeType===1&&r.nodeName.toLowerCase()!=="object"){a=ut(e),(l=r.getAttribute("id"))?c=l.replace(n,"\\$&"):r.setAttribute("id",c),c="[id='"+c+"'] ",f=a.length;while(f--)a[f]=c+a[f].join("");h=z.test(e)&&r.parentNode||r,p=a.join(",")}if(p)try{return S.apply(s,x.call(h.querySelectorAll(p),0)),s}catch(v){}finally{l||r.removeAttribute("id")}}return t(e,r,s,o,u)},u&&(K(function(t){e=u.call(t,"div");try{u.call(t,"[test!='']:sizzle"),s.push("!=",H)}catch(n){}}),s=new RegExp(s.join("|")),nt.matchesSelector=function(t,n){n=n.replace(r,"='$1']");if(!o(t)&&!s.test(n)&&!i.test(n))try{var a=u.call(t,n);if(a||e||t.document&&t.document.nodeType!==11)return a}catch(f){}return nt(n,null,null,[t]).length>0})}(),i.pseudos.nth=i.pseudos.eq,i.filters=mt.prototype=i.pseudos,i.setFilters=new mt,nt.attr=v.attr,v.find=nt,v.expr=nt.selectors,v.expr[":"]=v.expr.pseudos,v.unique=nt.uniqueSort,v.text=nt.getText,v.isXMLDoc=nt.isXML,v.contains=nt.contains}(e);var nt=/Until$/,rt=/^(?:parents|prev(?:Until|All))/,it=/^.[^:#\[\.,]*$/,st=v.expr.match.needsContext,ot={children:!0,contents:!0,next:!0,prev:!0};v.fn.extend({find:function(e){var t,n,r,i,s,o,u=this;if(typeof e!="string")return v(e).filter(function(){for(t=0,n=u.length;t<n;t++)if(v.contains(u[t],this))return!0});o=this.pushStack("","find",e);for(t=0,n=this.length;t<n;t++){r=o.length,v.find(e,this[t],o);if(t>0)for(i=r;i<o.length;i++)for(s=0;s<r;s++)if(o[s]===o[i]){o.splice(i--,1);break}}return o},has:function(e){var t,n=v(e,this),r=n.length;return this.filter(function(){for(t=0;t<r;t++)if(v.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e,!1),"not",e)},filter:function(e){return this.pushStack(ft(this,e,!0),"filter",e)},is:function(e){return!!e&&(typeof e=="string"?st.test(e)?v(e,this.context).index(this[0])>=0:v.filter(e,this).length>0:this.filter(e).length>0)},closest:function(e,t){var n,r=0,i=this.length,s=[],o=st.test(e)||typeof e!="string"?v(e,t||this.context):0;for(;r<i;r++){n=this[r];while(n&&n.ownerDocument&&n!==t&&n.nodeType!==11){if(o?o.index(n)>-1:v.find.matchesSelector(n,e)){s.push(n);break}n=n.parentNode}}return s=s.length>1?v.unique(s):s,this.pushStack(s,"closest",e)},index:function(e){return e?typeof e=="string"?v.inArray(this[0],v(e)):v.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.prevAll().length:-1},add:function(e,t){var n=typeof e=="string"?v(e,t):v.makeArray(e&&e.nodeType?[e]:e),r=v.merge(this.get(),n);return this.pushStack(ut(n[0])||ut(r[0])?r:v.unique(r))},addBack:function(e){return this.add(e==null?this.prevObject:this.prevObject.filter(e))}}),v.fn.andSelf=v.fn.addBack,v.each({parent:function(e){var t=e.parentNode;return t&&t.nodeType!==11?t:null},parents:function(e){return v.dir(e,"parentNode")},parentsUntil:function(e,t,n){return v.dir(e,"parentNode",n)},next:function(e){return at(e,"nextSibling")},prev:function(e){return at(e,"previousSibling")},nextAll:function(e){return v.dir(e,"nextSibling")},prevAll:function(e){return v.dir(e,"previousSibling")},nextUntil:function(e,t,n){return v.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return v.dir(e,"previousSibling",n)},siblings:function(e){return v.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return v.sibling(e.firstChild)},contents:function(e){return v.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:v.merge([],e.childNodes)}},function(e,t){v.fn[e]=function(n,r){var i=v.map(this,t,n);return nt.test(e)||(r=n),r&&typeof r=="string"&&(i=v.filter(r,i)),i=this.length>1&&!ot[e]?v.unique(i):i,this.length>1&&rt.test(e)&&(i=i.reverse()),this.pushStack(i,e,l.call(arguments).join(","))}}),v.extend({filter:function(e,t,n){return n&&(e=":not("+e+")"),t.length===1?v.find.matchesSelector(t[0],e)?[t[0]]:[]:v.find.matches(e,t)},dir:function(e,n,r){var i=[],s=e[n];while(s&&s.nodeType!==9&&(r===t||s.nodeType!==1||!v(s).is(r)))s.nodeType===1&&i.push(s),s=s[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)e.nodeType===1&&e!==t&&n.push(e);return n}});var ct="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",ht=/ jQuery\d+="(?:null|\d+)"/g,pt=/^\s+/,dt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,vt=/<([\w:]+)/,mt=/<tbody/i,gt=/<|&#?\w+;/,yt=/<(?:script|style|link)/i,bt=/<(?:script|object|embed|option|style)/i,wt=new RegExp("<(?:"+ct+")[\\s/>]","i"),Et=/^(?:checkbox|radio)$/,St=/checked\s*(?:[^=]|=\s*.checked.)/i,xt=/\/(java|ecma)script/i,Tt=/^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,Nt={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},Ct=lt(i),kt=Ct.appendChild(i.createElement("div"));Nt.optgroup=Nt.option,Nt.tbody=Nt.tfoot=Nt.colgroup=Nt.caption=Nt.thead,Nt.th=Nt.td,v.support.htmlSerialize||(Nt._default=[1,"X<div>","</div>"]),v.fn.extend({text:function(e){return v.access(this,function(e){return e===t?v.text(this):this.empty().append((this[0]&&this[0].ownerDocument||i).createTextNode(e))},null,e,arguments.length)},wrapAll:function(e){if(v.isFunction(e))return this.each(function(t){v(this).wrapAll(e.call(this,t))});if(this[0]){var t=v(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&e.firstChild.nodeType===1)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return v.isFunction(e)?this.each(function(t){v(this).wrapInner(e.call(this,t))}):this.each(function(){var t=v(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=v.isFunction(e);return this.each(function(n){v(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){v.nodeName(this,"body")||v(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(e){(this.nodeType===1||this.nodeType===11)&&this.appendChild(e)})},prepend:function(){return this.domManip(arguments,!0,function(e){(this.nodeType===1||this.nodeType===11)&&this.insertBefore(e,this.firstChild)})},before:function(){if(!ut(this[0]))return this.domManip(arguments,!1,function(e){this.parentNode.insertBefore(e,this)});if(arguments.length){var e=v.clean(arguments);return this.pushStack(v.merge(e,this),"before",this.selector)}},after:function(){if(!ut(this[0]))return this.domManip(arguments,!1,function(e){this.parentNode.insertBefore(e,this.nextSibling)});if(arguments.length){var e=v.clean(arguments);return this.pushStack(v.merge(this,e),"after",this.selector)}},remove:function(e,t){var n,r=0;for(;(n=this[r])!=null;r++)if(!e||v.filter(e,[n]).length)!t&&n.nodeType===1&&(v.cleanData(n.getElementsByTagName("*")),v.cleanData([n])),n.parentNode&&n.parentNode.removeChild(n);return this},empty:function(){var e,t=0;for(;(e=this[t])!=null;t++){e.nodeType===1&&v.cleanData(e.getElementsByTagName("*"));while(e.firstChild)e.removeChild(e.firstChild)}return this},clone:function(e,t){return e=e==null?!1:e,t=t==null?e:t,this.map(function(){return v.clone(this,e,t)})},html:function(e){return v.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return n.nodeType===1?n.innerHTML.replace(ht,""):t;if(typeof e=="string"&&!yt.test(e)&&(v.support.htmlSerialize||!wt.test(e))&&(v.support.leadingWhitespace||!pt.test(e))&&!Nt[(vt.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(dt,"<$1></$2>");try{for(;r<i;r++)n=this[r]||{},n.nodeType===1&&(v.cleanData(n.getElementsByTagName("*")),n.innerHTML=e);n=0}catch(s){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(e){return ut(this[0])?this.length?this.pushStack(v(v.isFunction(e)?e():e),"replaceWith",e):this:v.isFunction(e)?this.each(function(t){var n=v(this),r=n.html();n.replaceWith(e.call(this,t,r))}):(typeof e!="string"&&(e=v(e).detach()),this.each(function(){var t=this.nextSibling,n=this.parentNode;v(this).remove(),t?v(t).before(e):v(n).append(e)}))},detach:function(e){return this.remove(e,!0)},domManip:function(e,n,r){e=[].concat.apply([],e);var i,s,o,u,a=0,f=e[0],l=[],c=this.length;if(!v.support.checkClone&&c>1&&typeof f=="string"&&St.test(f))return this.each(function(){v(this).domManip(e,n,r)});if(v.isFunction(f))return this.each(function(i){var s=v(this);e[0]=f.call(this,i,n?s.html():t),s.domManip(e,n,r)});if(this[0]){i=v.buildFragment(e,this,l),o=i.fragment,s=o.firstChild,o.childNodes.length===1&&(o=s);if(s){n=n&&v.nodeName(s,"tr");for(u=i.cacheable||c-1;a<c;a++)r.call(n&&v.nodeName(this[a],"table")?Lt(this[a],"tbody"):this[a],a===u?o:v.clone(o,!0,!0))}o=s=null,l.length&&v.each(l,function(e,t){t.src?v.ajax?v.ajax({url:t.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):v.error("no ajax"):v.globalEval((t.text||t.textContent||t.innerHTML||"").replace(Tt,"")),t.parentNode&&t.parentNode.removeChild(t)})}return this}}),v.buildFragment=function(e,n,r){var s,o,u,a=e[0];return n=n||i,n=!n.nodeType&&n[0]||n,n=n.ownerDocument||n,e.length===1&&typeof a=="string"&&a.length<512&&n===i&&a.charAt(0)==="<"&&!bt.test(a)&&(v.support.checkClone||!St.test(a))&&(v.support.html5Clone||!wt.test(a))&&(o=!0,s=v.fragments[a],u=s!==t),s||(s=n.createDocumentFragment(),v.clean(e,n,s,r),o&&(v.fragments[a]=u&&s)),{fragment:s,cacheable:o}},v.fragments={},v.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){v.fn[e]=function(n){var r,i=0,s=[],o=v(n),u=o.length,a=this.length===1&&this[0].parentNode;if((a==null||a&&a.nodeType===11&&a.childNodes.length===1)&&u===1)return o[t](this[0]),this;for(;i<u;i++)r=(i>0?this.clone(!0):this).get(),v(o[i])[t](r),s=s.concat(r);return this.pushStack(s,e,o.selector)}}),v.extend({clone:function(e,t,n){var r,i,s,o;v.support.html5Clone||v.isXMLDoc(e)||!wt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(kt.innerHTML=e.outerHTML,kt.removeChild(o=kt.firstChild));if((!v.support.noCloneEvent||!v.support.noCloneChecked)&&(e.nodeType===1||e.nodeType===11)&&!v.isXMLDoc(e)){Ot(e,o),r=Mt(e),i=Mt(o);for(s=0;r[s];++s)i[s]&&Ot(r[s],i[s])}if(t){At(e,o);if(n){r=Mt(e),i=Mt(o);for(s=0;r[s];++s)At(r[s],i[s])}}return r=i=null,o},clean:function(e,t,n,r){var s,o,u,a,f,l,c,h,p,d,m,g,y=t===i&&Ct,b=[];if(!t||typeof t.createDocumentFragment=="undefined")t=i;for(s=0;(u=e[s])!=null;s++){typeof u=="number"&&(u+="");if(!u)continue;if(typeof u=="string")if(!gt.test(u))u=t.createTextNode(u);else{y=y||lt(t),c=t.createElement("div"),y.appendChild(c),u=u.replace(dt,"<$1></$2>"),a=(vt.exec(u)||["",""])[1].toLowerCase(),f=Nt[a]||Nt._default,l=f[0],c.innerHTML=f[1]+u+f[2];while(l--)c=c.lastChild;if(!v.support.tbody){h=mt.test(u),p=a==="table"&&!h?c.firstChild&&c.firstChild.childNodes:f[1]==="<table>"&&!h?c.childNodes:[];for(o=p.length-1;o>=0;--o)v.nodeName(p[o],"tbody")&&!p[o].childNodes.length&&p[o].parentNode.removeChild(p[o])}!v.support.leadingWhitespace&&pt.test(u)&&c.insertBefore(t.createTextNode(pt.exec(u)[0]),c.firstChild),u=c.childNodes,c.parentNode.removeChild(c)}u.nodeType?b.push(u):v.merge(b,u)}c&&(u=c=y=null);if(!v.support.appendChecked)for(s=0;(u=b[s])!=null;s++)v.nodeName(u,"input")?_t(u):typeof u.getElementsByTagName!="undefined"&&v.grep(u.getElementsByTagName("input"),_t);if(n){m=function(e){if(!e.type||xt.test(e.type))return r?r.push(e.parentNode?e.parentNode.removeChild(e):e):n.appendChild(e)};for(s=0;(u=b[s])!=null;s++)if(!v.nodeName(u,"script")||!m(u))n.appendChild(u),typeof u.getElementsByTagName!="undefined"&&(g=v.grep(v.merge([],u.getElementsByTagName("script")),m),b.splice.apply(b,[s+1,0].concat(g)),s+=g.length)}return b},cleanData:function(e,t){var n,r,i,s,o=0,u=v.expando,a=v.cache,f=v.support.deleteExpando,l=v.event.special;for(;(i=e[o])!=null;o++)if(t||v.acceptData(i)){r=i[u],n=r&&a[r];if(n){if(n.events)for(s in n.events)l[s]?v.event.remove(i,s):v.removeEvent(i,s,n.handle);a[r]&&(delete a[r],f?delete i[u]:i.removeAttribute?i.removeAttribute(u):i[u]=null,v.deletedIds.push(r))}}}}),function(){var e,t;v.uaMatch=function(e){e=e.toLowerCase();var t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}},e=v.uaMatch(o.userAgent),t={},e.browser&&(t[e.browser]=!0,t.version=e.version),t.chrome?t.webkit=!0:t.webkit&&(t.safari=!0),v.browser=t,v.sub=function(){function e(t,n){return new e.fn.init(t,n)}v.extend(!0,e,this),e.superclass=this,e.fn=e.prototype=this(),e.fn.constructor=e,e.sub=this.sub,e.fn.init=function(r,i){return i&&i instanceof v&&!(i instanceof e)&&(i=e(i)),v.fn.init.call(this,r,i,t)},e.fn.init.prototype=e.fn;var t=e(i);return e}}();var Dt,Pt,Ht,Bt=/alpha\([^)]*\)/i,jt=/opacity=([^)]*)/,Ft=/^(top|right|bottom|left)$/,It=/^(none|table(?!-c[ea]).+)/,qt=/^margin/,Rt=new RegExp("^("+m+")(.*)$","i"),Ut=new RegExp("^("+m+")(?!px)[a-z%]+$","i"),zt=new RegExp("^([-+])=("+m+")","i"),Wt={BODY:"block"},Xt={position:"absolute",visibility:"hidden",display:"block"},Vt={letterSpacing:0,fontWeight:400},$t=["Top","Right","Bottom","Left"],Jt=["Webkit","O","Moz","ms"],Kt=v.fn.toggle;v.fn.extend({css:function(e,n){return v.access(this,function(e,n,r){return r!==t?v.style(e,n,r):v.css(e,n)},e,n,arguments.length>1)},show:function(){return Yt(this,!0)},hide:function(){return Yt(this)},toggle:function(e,t){var n=typeof e=="boolean";return v.isFunction(e)&&v.isFunction(t)?Kt.apply(this,arguments):this.each(function(){(n?e:Gt(this))?v(this).show():v(this).hide()})}}),v.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Dt(e,"opacity");return n===""?"1":n}}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":v.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(!e||e.nodeType===3||e.nodeType===8||!e.style)return;var s,o,u,a=v.camelCase(n),f=e.style;n=v.cssProps[a]||(v.cssProps[a]=Qt(f,a)),u=v.cssHooks[n]||v.cssHooks[a];if(r===t)return u&&"get"in u&&(s=u.get(e,!1,i))!==t?s:f[n];o=typeof r,o==="string"&&(s=zt.exec(r))&&(r=(s[1]+1)*s[2]+parseFloat(v.css(e,n)),o="number");if(r==null||o==="number"&&isNaN(r))return;o==="number"&&!v.cssNumber[a]&&(r+="px");if(!u||!("set"in u)||(r=u.set(e,r,i))!==t)try{f[n]=r}catch(l){}},css:function(e,n,r,i){var s,o,u,a=v.camelCase(n);return n=v.cssProps[a]||(v.cssProps[a]=Qt(e.style,a)),u=v.cssHooks[n]||v.cssHooks[a],u&&"get"in u&&(s=u.get(e,!0,i)),s===t&&(s=Dt(e,n)),s==="normal"&&n in Vt&&(s=Vt[n]),r||i!==t?(o=parseFloat(s),r||v.isNumeric(o)?o||0:s):s},swap:function(e,t,n){var r,i,s={};for(i in t)s[i]=e.style[i],e.style[i]=t[i];r=n.call(e);for(i in t)e.style[i]=s[i];return r}}),e.getComputedStyle?Dt=function(t,n){var r,i,s,o,u=e.getComputedStyle(t,null),a=t.style;return u&&(r=u.getPropertyValue(n)||u[n],r===""&&!v.contains(t.ownerDocument,t)&&(r=v.style(t,n)),Ut.test(r)&&qt.test(n)&&(i=a.width,s=a.minWidth,o=a.maxWidth,a.minWidth=a.maxWidth=a.width=r,r=u.width,a.width=i,a.minWidth=s,a.maxWidth=o)),r}:i.documentElement.currentStyle&&(Dt=function(e,t){var n,r,i=e.currentStyle&&e.currentStyle[t],s=e.style;return i==null&&s&&s[t]&&(i=s[t]),Ut.test(i)&&!Ft.test(t)&&(n=s.left,r=e.runtimeStyle&&e.runtimeStyle.left,r&&(e.runtimeStyle.left=e.currentStyle.left),s.left=t==="fontSize"?"1em":i,i=s.pixelLeft+"px",s.left=n,r&&(e.runtimeStyle.left=r)),i===""?"auto":i}),v.each(["height","width"],function(e,t){v.cssHooks[t]={get:function(e,n,r){if(n)return e.offsetWidth===0&&It.test(Dt(e,"display"))?v.swap(e,Xt,function(){return tn(e,t,r)}):tn(e,t,r)},set:function(e,n,r){return Zt(e,n,r?en(e,t,r,v.support.boxSizing&&v.css(e,"boxSizing")==="border-box"):0)}}}),v.support.opacity||(v.cssHooks.opacity={get:function(e,t){return jt.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=v.isNumeric(t)?"alpha(opacity="+t*100+")":"",s=r&&r.filter||n.filter||"";n.zoom=1;if(t>=1&&v.trim(s.replace(Bt,""))===""&&n.removeAttribute){n.removeAttribute("filter");if(r&&!r.filter)return}n.filter=Bt.test(s)?s.replace(Bt,i):s+" "+i}}),v(function(){v.support.reliableMarginRight||(v.cssHooks.marginRight={get:function(e,t){return v.swap(e,{display:"inline-block"},function(){if(t)return Dt(e,"marginRight")})}}),!v.support.pixelPosition&&v.fn.position&&v.each(["top","left"],function(e,t){v.cssHooks[t]={get:function(e,n){if(n){var r=Dt(e,t);return Ut.test(r)?v(e).position()[t]+"px":r}}}})}),v.expr&&v.expr.filters&&(v.expr.filters.hidden=function(e){return e.offsetWidth===0&&e.offsetHeight===0||!v.support.reliableHiddenOffsets&&(e.style&&e.style.display||Dt(e,"display"))==="none"},v.expr.filters.visible=function(e){return!v.expr.filters.hidden(e)}),v.each({margin:"",padding:"",border:"Width"},function(e,t){v.cssHooks[e+t]={expand:function(n){var r,i=typeof n=="string"?n.split(" "):[n],s={};for(r=0;r<4;r++)s[e+$t[r]+t]=i[r]||i[r-2]||i[0];return s}},qt.test(e)||(v.cssHooks[e+t].set=Zt)});var rn=/%20/g,sn=/\[\]$/,on=/\r?\n/g,un=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,an=/^(?:select|textarea)/i;v.fn.extend({serialize:function(){return v.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?v.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||an.test(this.nodeName)||un.test(this.type))}).map(function(e,t){var n=v(this).val();return n==null?null:v.isArray(n)?v.map(n,function(e,n){return{name:t.name,value:e.replace(on,"\r\n")}}):{name:t.name,value:n.replace(on,"\r\n")}}).get()}}),v.param=function(e,n){var r,i=[],s=function(e,t){t=v.isFunction(t)?t():t==null?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};n===t&&(n=v.ajaxSettings&&v.ajaxSettings.traditional);if(v.isArray(e)||e.jquery&&!v.isPlainObject(e))v.each(e,function(){s(this.name,this.value)});else for(r in e)fn(r,e[r],n,s);return i.join("&").replace(rn,"+")};var ln,cn,hn=/#.*$/,pn=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,dn=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,vn=/^(?:GET|HEAD)$/,mn=/^\/\//,gn=/\?/,yn=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bn=/([?&])_=[^&]*/,wn=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,En=v.fn.load,Sn={},xn={},Tn=["*/"]+["*"];try{cn=s.href}catch(Nn){cn=i.createElement("a"),cn.href="",cn=cn.href}ln=wn.exec(cn.toLowerCase())||[],v.fn.load=function(e,n,r){if(typeof e!="string"&&En)return En.apply(this,arguments);if(!this.length)return this;var i,s,o,u=this,a=e.indexOf(" ");return a>=0&&(i=e.slice(a,e.length),e=e.slice(0,a)),v.isFunction(n)?(r=n,n=t):n&&typeof n=="object"&&(s="POST"),v.ajax({url:e,type:s,dataType:"html",data:n,complete:function(e,t){r&&u.each(r,o||[e.responseText,t,e])}}).done(function(e){o=arguments,u.html(i?v("<div>").append(e.replace(yn,"")).find(i):e)}),this},v.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(e,t){v.fn[t]=function(e){return this.on(t,e)}}),v.each(["get","post"],function(e,n){v[n]=function(e,r,i,s){return v.isFunction(r)&&(s=s||i,i=r,r=t),v.ajax({type:n,url:e,data:r,success:i,dataType:s})}}),v.extend({getScript:function(e,n){return v.get(e,t,n,"script")},getJSON:function(e,t,n){return v.get(e,t,n,"json")},ajaxSetup:function(e,t){return t?Ln(e,v.ajaxSettings):(t=e,e=v.ajaxSettings),Ln(e,t),e},ajaxSettings:{url:cn,isLocal:dn.test(ln[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":Tn},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":e.String,"text html":!0,"text json":v.parseJSON,"text xml":v.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:Cn(Sn),ajaxTransport:Cn(xn),ajax:function(e,n){function T(e,n,s,a){var l,y,b,w,S,T=n;if(E===2)return;E=2,u&&clearTimeout(u),o=t,i=a||"",x.readyState=e>0?4:0,s&&(w=An(c,x,s));if(e>=200&&e<300||e===304)c.ifModified&&(S=x.getResponseHeader("Last-Modified"),S&&(v.lastModified[r]=S),S=x.getResponseHeader("Etag"),S&&(v.etag[r]=S)),e===304?(T="notmodified",l=!0):(l=On(c,w),T=l.state,y=l.data,b=l.error,l=!b);else{b=T;if(!T||e)T="error",e<0&&(e=0)}x.status=e,x.statusText=(n||T)+"",l?d.resolveWith(h,[y,T,x]):d.rejectWith(h,[x,T,b]),x.statusCode(g),g=t,f&&p.trigger("ajax"+(l?"Success":"Error"),[x,c,l?y:b]),m.fireWith(h,[x,T]),f&&(p.trigger("ajaxComplete",[x,c]),--v.active||v.event.trigger("ajaxStop"))}typeof e=="object"&&(n=e,e=t),n=n||{};var r,i,s,o,u,a,f,l,c=v.ajaxSetup({},n),h=c.context||c,p=h!==c&&(h.nodeType||h instanceof v)?v(h):v.event,d=v.Deferred(),m=v.Callbacks("once memory"),g=c.statusCode||{},b={},w={},E=0,S="canceled",x={readyState:0,setRequestHeader:function(e,t){if(!E){var n=e.toLowerCase();e=w[n]=w[n]||e,b[e]=t}return this},getAllResponseHeaders:function(){return E===2?i:null},getResponseHeader:function(e){var n;if(E===2){if(!s){s={};while(n=pn.exec(i))s[n[1].toLowerCase()]=n[2]}n=s[e.toLowerCase()]}return n===t?null:n},overrideMimeType:function(e){return E||(c.mimeType=e),this},abort:function(e){return e=e||S,o&&o.abort(e),T(0,e),this}};d.promise(x),x.success=x.done,x.error=x.fail,x.complete=m.add,x.statusCode=function(e){if(e){var t;if(E<2)for(t in e)g[t]=[g[t],e[t]];else t=e[x.status],x.always(t)}return this},c.url=((e||c.url)+"").replace(hn,"").replace(mn,ln[1]+"//"),c.dataTypes=v.trim(c.dataType||"*").toLowerCase().split(y),c.crossDomain==null&&(a=wn.exec(c.url.toLowerCase()),c.crossDomain=!(!a||a[1]===ln[1]&&a[2]===ln[2]&&(a[3]||(a[1]==="http:"?80:443))==(ln[3]||(ln[1]==="http:"?80:443)))),c.data&&c.processData&&typeof c.data!="string"&&(c.data=v.param(c.data,c.traditional)),kn(Sn,c,n,x);if(E===2)return x;f=c.global,c.type=c.type.toUpperCase(),c.hasContent=!vn.test(c.type),f&&v.active++===0&&v.event.trigger("ajaxStart");if(!c.hasContent){c.data&&(c.url+=(gn.test(c.url)?"&":"?")+c.data,delete c.data),r=c.url;if(c.cache===!1){var N=v.now(),C=c.url.replace(bn,"$1_="+N);c.url=C+(C===c.url?(gn.test(c.url)?"&":"?")+"_="+N:"")}}(c.data&&c.hasContent&&c.contentType!==!1||n.contentType)&&x.setRequestHeader("Content-Type",c.contentType),c.ifModified&&(r=r||c.url,v.lastModified[r]&&x.setRequestHeader("If-Modified-Since",v.lastModified[r]),v.etag[r]&&x.setRequestHeader("If-None-Match",v.etag[r])),x.setRequestHeader("Accept",c.dataTypes[0]&&c.accepts[c.dataTypes[0]]?c.accepts[c.dataTypes[0]]+(c.dataTypes[0]!=="*"?", "+Tn+"; q=0.01":""):c.accepts["*"]);for(l in c.headers)x.setRequestHeader(l,c.headers[l]);if(!c.beforeSend||c.beforeSend.call(h,x,c)!==!1&&E!==2){S="abort";for(l in{success:1,error:1,complete:1})x[l](c[l]);o=kn(xn,c,n,x);if(!o)T(-1,"No Transport");else{x.readyState=1,f&&p.trigger("ajaxSend",[x,c]),c.async&&c.timeout>0&&(u=setTimeout(function(){x.abort("timeout")},c.timeout));try{E=1,o.send(b,T)}catch(k){if(!(E<2))throw k;T(-1,k)}}return x}return x.abort()},active:0,lastModified:{},etag:{}});var Mn=[],_n=/\?/,Dn=/(=)\?(?=&|$)|\?\?/,Pn=v.now();v.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Mn.pop()||v.expando+"_"+Pn++;return this[e]=!0,e}}),v.ajaxPrefilter("json jsonp",function(n,r,i){var s,o,u,a=n.data,f=n.url,l=n.jsonp!==!1,c=l&&Dn.test(f),h=l&&!c&&typeof a=="string"&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Dn.test(a);if(n.dataTypes[0]==="jsonp"||c||h)return s=n.jsonpCallback=v.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,o=e[s],c?n.url=f.replace(Dn,"$1"+s):h?n.data=a.replace(Dn,"$1"+s):l&&(n.url+=(_n.test(f)?"&":"?")+n.jsonp+"="+s),n.converters["script json"]=function(){return u||v.error(s+" was not called"),u[0]},n.dataTypes[0]="json",e[s]=function(){u=arguments},i.always(function(){e[s]=o,n[s]&&(n.jsonpCallback=r.jsonpCallback,Mn.push(s)),u&&v.isFunction(o)&&o(u[0]),u=o=t}),"script"}),v.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(e){return v.globalEval(e),e}}}),v.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),v.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=i.head||i.getElementsByTagName("head")[0]||i.documentElement;return{send:function(s,o){n=i.createElement("script"),n.async="async",e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,i){if(i||!n.readyState||/loaded|complete/.test(n.readyState))n.onload=n.onreadystatechange=null,r&&n.parentNode&&r.removeChild(n),n=t,i||o(200,"success")},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(0,1)}}}});var Hn,Bn=e.ActiveXObject?function(){for(var e in Hn)Hn[e](0,1)}:!1,jn=0;v.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&Fn()||In()}:Fn,function(e){v.extend(v.support,{ajax:!!e,cors:!!e&&"withCredentials"in e})}(v.ajaxSettings.xhr()),v.support.ajax&&v.ajaxTransport(function(n){if(!n.crossDomain||v.support.cors){var r;return{send:function(i,s){var o,u,a=n.xhr();n.username?a.open(n.type,n.url,n.async,n.username,n.password):a.open(n.type,n.url,n.async);if(n.xhrFields)for(u in n.xhrFields)a[u]=n.xhrFields[u];n.mimeType&&a.overrideMimeType&&a.overrideMimeType(n.mimeType),!n.crossDomain&&!i["X-Requested-With"]&&(i["X-Requested-With"]="XMLHttpRequest");try{for(u in i)a.setRequestHeader(u,i[u])}catch(f){}a.send(n.hasContent&&n.data||null),r=function(e,i){var u,f,l,c,h;try{if(r&&(i||a.readyState===4)){r=t,o&&(a.onreadystatechange=v.noop,Bn&&delete Hn[o]);if(i)a.readyState!==4&&a.abort();else{u=a.status,l=a.getAllResponseHeaders(),c={},h=a.responseXML,h&&h.documentElement&&(c.xml=h);try{c.text=a.responseText}catch(p){}try{f=a.statusText}catch(p){f=""}!u&&n.isLocal&&!n.crossDomain?u=c.text?200:404:u===1223&&(u=204)}}}catch(d){i||s(-1,d)}c&&s(u,f,c,l)},n.async?a.readyState===4?setTimeout(r,0):(o=++jn,Bn&&(Hn||(Hn={},v(e).unload(Bn)),Hn[o]=r),a.onreadystatechange=r):r()},abort:function(){r&&r(0,1)}}}});var qn,Rn,Un=/^(?:toggle|show|hide)$/,zn=new RegExp("^(?:([-+])=|)("+m+")([a-z%]*)$","i"),Wn=/queueHooks$/,Xn=[Gn],Vn={"*":[function(e,t){var n,r,i=this.createTween(e,t),s=zn.exec(t),o=i.cur(),u=+o||0,a=1,f=20;if(s){n=+s[2],r=s[3]||(v.cssNumber[e]?"":"px");if(r!=="px"&&u){u=v.css(i.elem,e,!0)||n||1;do a=a||".5",u/=a,v.style(i.elem,e,u+r);while(a!==(a=i.cur()/o)&&a!==1&&--f)}i.unit=r,i.start=u,i.end=s[1]?u+(s[1]+1)*n:n}return i}]};v.Animation=v.extend(Kn,{tweener:function(e,t){v.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;r<i;r++)n=e[r],Vn[n]=Vn[n]||[],Vn[n].unshift(t)},prefilter:function(e,t){t?Xn.unshift(e):Xn.push(e)}}),v.Tween=Yn,Yn.prototype={constructor:Yn,init:function(e,t,n,r,i,s){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=s||(v.cssNumber[n]?"":"px")},cur:function(){var e=Yn.propHooks[this.prop];return e&&e.get?e.get(this):Yn.propHooks._default.get(this)},run:function(e){var t,n=Yn.propHooks[this.prop];return this.options.duration?this.pos=t=v.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Yn.propHooks._default.set(this),this}},Yn.prototype.init.prototype=Yn.prototype,Yn.propHooks={_default:{get:function(e){var t;return e.elem[e.prop]==null||!!e.elem.style&&e.elem.style[e.prop]!=null?(t=v.css(e.elem,e.prop,!1,""),!t||t==="auto"?0:t):e.elem[e.prop]},set:function(e){v.fx.step[e.prop]?v.fx.step[e.prop](e):e.elem.style&&(e.elem.style[v.cssProps[e.prop]]!=null||v.cssHooks[e.prop])?v.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},Yn.propHooks.scrollTop=Yn.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},v.each(["toggle","show","hide"],function(e,t){var n=v.fn[t];v.fn[t]=function(r,i,s){return r==null||typeof r=="boolean"||!e&&v.isFunction(r)&&v.isFunction(i)?n.apply(this,arguments):this.animate(Zn(t,!0),r,i,s)}}),v.fn.extend({fadeTo:function(e,t,n,r){return this.filter(Gt).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=v.isEmptyObject(e),s=v.speed(t,n,r),o=function(){var t=Kn(this,v.extend({},e),s);i&&t.stop(!0)};return i||s.queue===!1?this.each(o):this.queue(s.queue,o)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return typeof e!="string"&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=e!=null&&e+"queueHooks",s=v.timers,o=v._data(this);if(n)o[n]&&o[n].stop&&i(o[n]);else for(n in o)o[n]&&o[n].stop&&Wn.test(n)&&i(o[n]);for(n=s.length;n--;)s[n].elem===this&&(e==null||s[n].queue===e)&&(s[n].anim.stop(r),t=!1,s.splice(n,1));(t||!r)&&v.dequeue(this,e)})}}),v.each({slideDown:Zn("show"),slideUp:Zn("hide"),slideToggle:Zn("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){v.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),v.speed=function(e,t,n){var r=e&&typeof e=="object"?v.extend({},e):{complete:n||!n&&t||v.isFunction(e)&&e,duration:e,easing:n&&t||t&&!v.isFunction(t)&&t};r.duration=v.fx.off?0:typeof r.duration=="number"?r.duration:r.duration in v.fx.speeds?v.fx.speeds[r.duration]:v.fx.speeds._default;if(r.queue==null||r.queue===!0)r.queue="fx";return r.old=r.complete,r.complete=function(){v.isFunction(r.old)&&r.old.call(this),r.queue&&v.dequeue(this,r.queue)},r},v.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},v.timers=[],v.fx=Yn.prototype.init,v.fx.tick=function(){var e,n=v.timers,r=0;qn=v.now();for(;r<n.length;r++)e=n[r],!e()&&n[r]===e&&n.splice(r--,1);n.length||v.fx.stop(),qn=t},v.fx.timer=function(e){e()&&v.timers.push(e)&&!Rn&&(Rn=setInterval(v.fx.tick,v.fx.interval))},v.fx.interval=13,v.fx.stop=function(){clearInterval(Rn),Rn=null},v.fx.speeds={slow:600,fast:200,_default:400},v.fx.step={},v.expr&&v.expr.filters&&(v.expr.filters.animated=function(e){return v.grep(v.timers,function(t){return e===t.elem}).length});var er=/^(?:body|html)$/i;v.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){v.offset.setOffset(this,e,t)});var n,r,i,s,o,u,a,f={top:0,left:0},l=this[0],c=l&&l.ownerDocument;if(!c)return;return(r=c.body)===l?v.offset.bodyOffset(l):(n=c.documentElement,v.contains(n,l)?(typeof l.getBoundingClientRect!="undefined"&&(f=l.getBoundingClientRect()),i=tr(c),s=n.clientTop||r.clientTop||0,o=n.clientLeft||r.clientLeft||0,u=i.pageYOffset||n.scrollTop,a=i.pageXOffset||n.scrollLeft,{top:f.top+u-s,left:f.left+a-o}):f)},v.offset={bodyOffset:function(e){var t=e.offsetTop,n=e.offsetLeft;return v.support.doesNotIncludeMarginInBodyOffset&&(t+=parseFloat(v.css(e,"marginTop"))||0,n+=parseFloat(v.css(e,"marginLeft"))||0),{top:t,left:n}},setOffset:function(e,t,n){var r=v.css(e,"position");r==="static"&&(e.style.position="relative");var i=v(e),s=i.offset(),o=v.css(e,"top"),u=v.css(e,"left"),a=(r==="absolute"||r==="fixed")&&v.inArray("auto",[o,u])>-1,f={},l={},c,h;a?(l=i.position(),c=l.top,h=l.left):(c=parseFloat(o)||0,h=parseFloat(u)||0),v.isFunction(t)&&(t=t.call(e,n,s)),t.top!=null&&(f.top=t.top-s.top+c),t.left!=null&&(f.left=t.left-s.left+h),"using"in t?t.using.call(e,f):i.css(f)}},v.fn.extend({position:function(){if(!this[0])return;var e=this[0],t=this.offsetParent(),n=this.offset(),r=er.test(t[0].nodeName)?{top:0,left:0}:t.offset();return n.top-=parseFloat(v.css(e,"marginTop"))||0,n.left-=parseFloat(v.css(e,"marginLeft"))||0,r.top+=parseFloat(v.css(t[0],"borderTopWidth"))||0,r.left+=parseFloat(v.css(t[0],"borderLeftWidth"))||0,{top:n.top-r.top,left:n.left-r.left}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||i.body;while(e&&!er.test(e.nodeName)&&v.css(e,"position")==="static")e=e.offsetParent;return e||i.body})}}),v.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);v.fn[e]=function(i){return v.access(this,function(e,i,s){var o=tr(e);if(s===t)return o?n in o?o[n]:o.document.documentElement[i]:e[i];o?o.scrollTo(r?v(o).scrollLeft():s,r?s:v(o).scrollTop()):e[i]=s},e,i,arguments.length,null)}}),v.each({Height:"height",Width:"width"},function(e,n){v.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){v.fn[i]=function(i,s){var o=arguments.length&&(r||typeof i!="boolean"),u=r||(i===!0||s===!0?"margin":"border");return v.access(this,function(n,r,i){var s;return v.isWindow(n)?n.document.documentElement["client"+e]:n.nodeType===9?(s=n.documentElement,Math.max(n.body["scroll"+e],s["scroll"+e],n.body["offset"+e],s["offset"+e],s["client"+e])):i===t?v.css(n,r,i,u):v.style(n,r,i,u)},n,o?i:t,o,null)}})}),e.jQuery=e.$=v,"function"=="function"&&__webpack_require__(30)&&__webpack_require__(30).jQuery&&!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function(){return v}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))})(window);

/***/ }),
/* 30 */
/***/ (function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {module.exports = __webpack_amd_options__;
	
	/* WEBPACK VAR INJECTION */}.call(exports, {}))

/***/ }),
/* 31 */
/***/ (function(module, exports) {

	jQuery.cookie=function(key,value,options){if(arguments.length>1&&(value===null||typeof value!=="object")){options=jQuery.extend({},options);if(value===null){options.expires=-1}if(typeof options.expires==='number'){var days=options.expires,t=options.expires=new Date();t.setDate(t.getDate()+days)}return(document.cookie=[encodeURIComponent(key),'=',options.raw?String(value):encodeURIComponent(String(value)),options.expires?'; expires='+options.expires.toUTCString():'',options.path?'; path='+options.path:'',options.domain?'; domain='+options.domain:'',options.secure?'; secure':''].join(''))}options=value||{};var result,decode=options.raw?function(s){return s}:decodeURIComponent;return(result=new RegExp('(?:^|; )'+encodeURIComponent(key)+'=([^;]*)').exec(document.cookie))?decode(result[1]):null};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function($) {!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
	    'use strict';
	    var Typeahead = function(element, options) {
	        this.$element = $(element);
	        this.options = $.extend(true, {}, $.fn.typeahead.defaults, options);
	        this.$menu = $(this.options.menu).appendTo('body');
	        this.shown = false;
	
	        // Method overrides    
	        this.eventSupported = this.options.eventSupported || this.eventSupported;
	        this.grepper = this.options.grepper || this.grepper;
	        this.highlighter = this.options.highlighter || this.highlighter;
	        this.lookup = this.options.lookup || this.lookup;
	        this.matcher = this.options.matcher || this.matcher;
	        this.render = this.options.render || this.render;
	        this.select = this.options.select || this.select;
	        this.sorter = this.options.sorter || this.sorter;
	        this.source = this.options.source || this.source;
	
	        if (!this.source.length) {
	            var ajax = this.options.ajax;
	
	            if (typeof ajax === 'string') {
	                this.ajax = $.extend({}, $.fn.typeahead.defaults.ajax, { url: ajax });
	            } else {
	                this.ajax = $.extend({}, $.fn.typeahead.defaults.ajax, ajax);
	            }
	
	            if (!this.ajax.url) {
	                this.ajax = null;
	            }
	        }
	
	        this.listen();
	    }
	
	    Typeahead.prototype = {
	
	        constructor: Typeahead,
	
	        //=============================================================================================================
	        //
	        //  Utils
	        //
	        //=============================================================================================================
	
	        //------------------------------------------------------------------
	        //
	        //  Check if an event is supported by the browser eg. 'keypress'
	        //  * This was included to handle the "exhaustive deprecation" of jQuery.browser in jQuery 1.8
	        //
	        eventSupported: function(eventName) {
	            var isSupported = (eventName in this.$element);
	
	            if (!isSupported) {
	                this.$element.setAttribute(eventName, 'return;');
	                isSupported = typeof this.$element[eventName] === 'function';
	            }
	
	            return isSupported;
	        },
	
	        //=============================================================================================================
	        //
	        //  AJAX
	        //
	        //=============================================================================================================
	
	        //------------------------------------------------------------------
	        //
	        //  Handle AJAX source 
	        //
	        ajaxer: function() {
	            var that = this,
	                query = that.$element.val();
	
	            if (query === that.query) {
	                return that;
	            }
	
	            // Query changed
	            that.query = query;
	
	            // Cancel last timer if set
	            if (that.ajax.timerId) {
	                clearTimeout(that.ajax.timerId);
	                that.ajax.timerId = null;
	            }
	
	            if (!query || query.length < that.ajax.triggerLength) {
	                // Cancel the ajax callback if in progress
	                if (that.ajax.xhr) {
	                    that.ajax.xhr.abort();
	                    that.ajax.xhr = null;
	                    that.ajaxToggleLoadClass(false);
	                }
	
	                return that.shown ? that.hide() : that;
	            }
	
	            // Query is good to send, set a timer
	            that.ajax.timerId = setTimeout(function() {
	                $.proxy(that.ajaxExecute(query), that)
	            }, that.ajax.timeout);
	
	            return that;
	        },
	
	        //------------------------------------------------------------------
	        //
	        //  Execute an AJAX request
	        //
	        ajaxExecute: function(query) {
	            this.ajaxToggleLoadClass(true);
	
	            // Cancel last call if already in progress
	            if (this.ajax.xhr) this.ajax.xhr.abort();
	
	            var params = this.ajax.preDispatch ? this.ajax.preDispatch(query) : { query: query };
	            var jAjax = (this.ajax.method === "post") ? $.post : $.get;
	            this.ajax.xhr = jAjax(this.ajax.url, params, $.proxy(this.ajaxLookup, this));
	            this.ajax.timerId = null;
	        },
	
	        //------------------------------------------------------------------
	        //
	        //  Perform a lookup in the AJAX results
	        //
	        ajaxLookup: function(data) {
	            var items;
	
	            this.ajaxToggleLoadClass(false);
	
	            if (!this.ajax.xhr) return;
	
	            if (this.ajax.preProcess) {
	                data = this.ajax.preProcess(data);
	            }
	
	            // Save for selection retreival
	            this.ajax.data = data;
	
	            items = this.grepper(this.ajax.data);
	
	            if (!items || !items.length) {
	                return this.shown ? this.hide() : this;
	            }
	
	            this.ajax.xhr = null;
	
	            return this.render(items.slice(0, this.options.items)).show();
	        },
	
	        //------------------------------------------------------------------
	        //
	        //  Toggle the loading class
	        //
	        ajaxToggleLoadClass: function(enable) {
	            if (!this.ajax.loadingClass) return;
	            this.$element.toggleClass(this.ajax.loadingClass, enable);
	        },
	
	        //=============================================================================================================
	        //
	        //  Data manipulation
	        //
	        //=============================================================================================================
	
	        //------------------------------------------------------------------
	        //
	        //  Search source
	        //
	        lookup: function(event) {
	            var that = this,
	                items;
	
	            if (that.ajax) {
	                that.ajaxer();
	            } else {
	                that.query = that.$element.val();
	
	                if (!that.query) {
	                    return that.shown ? that.hide() : that;
	                }
	
	                items = that.grepper(that.source);
	
	                if (!items || !items.length) {
	                    return that.shown ? that.hide() : that;
	                }
	
	                return that.render(items.slice(0, that.options.items)).show();
	            }
	        },
	
	        //------------------------------------------------------------------
	        //
	        //  Filters relevent results 
	        //
	        grepper: function(data) {
	            var that = this,
	                items;
	
	            if (data && data.length && !data[0].hasOwnProperty(that.options.display)) {
	                return null;
	            }
	
	            items = $.grep(data, function(item) {
	                return that.matcher(item[that.options.display], item);
	            });
	
	            return this.sorter(items);
	        },
	
	        //------------------------------------------------------------------
	        //
	        //  Looks for a match in the source
	        //
	        matcher: function(item) {
	            return ~item.toLowerCase().indexOf(this.query.toLowerCase());
	        },
	
	        //------------------------------------------------------------------
	        //
	        //  Sorts the results
	        //
	        sorter: function(items) {
	            var that = this,
	                beginswith = [],
	                caseSensitive = [],
	                caseInsensitive = [],
	                item;
	
	            while (item = items.shift()) {
	                if (!item[that.options.display].toLowerCase().indexOf(this.query.toLowerCase())) {
	                    beginswith.push(item);
	                } else if (~item[that.options.display].indexOf(this.query)) {
	                    caseSensitive.push(item);
	                } else {
	                    caseInsensitive.push(item);
	                }
	            }
	
	            return beginswith.concat(caseSensitive, caseInsensitive);
	        },
	
	        //=============================================================================================================
	        //
	        //  DOM manipulation
	        //
	        //=============================================================================================================
	
	        //------------------------------------------------------------------
	        //
	        //  Shows the results list
	        //
	        show: function() {
	            var pos = $.extend({}, this.$element.offset(), {
	                height: this.$element[0].offsetHeight
	            });
	
	            this.$menu.css({
	                top: pos.top + pos.height,
	                left: pos.left
	            });
	
	            this.$menu.show();
	            this.shown = true;
	
	            return this;
	        },
	
	        //------------------------------------------------------------------
	        //
	        //  Hides the results list
	        //
	        hide: function() {
	            this.$menu.hide();
	            this.shown = false;
	            return this;
	        },
	
	        //------------------------------------------------------------------
	        //
	        //  Highlights the match(es) within the results
	        //
	        highlighter: function(item) {
	            var query = this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&');
	            return item.replace(new RegExp('(' + query + ')', 'ig'), function($1, match) {
	                return match;
	            });
	        },
	
	        //------------------------------------------------------------------
	        //
	        //  Renders the results list
	        //
	        render: function(items) {
	            var that = this;
	
	            items = $(items).map(function(i, item) {
	                i = $(that.options.item).attr('data-value', item[that.options.val]);
	                i.html(that.highlighter(item[that.options.display], item));
	                return i[0];
	            });
	
	            items.first().addClass('active');
	            this.$menu.html(items);
	            return this;
	        },
	
	        //------------------------------------------------------------------
	        //
	        //  Item is selected
	        //
	        select: function() {
	            var $selectedItem = this.$menu.find('.active');
	            this.$element.val("").change();
	            this.options.itemSelected($selectedItem, $selectedItem.attr('data-value'), $selectedItem.text());
	            this.$element.next().append('<div class="tag"><span>' + $selectedItem.text() + '</span><i>×</i></div>');
	            $(".tag").find("i").on("click", function() {
	                $(this).parent().remove();
	            });
	            return this.hide();
	        },
	
	        //------------------------------------------------------------------
	        //
	        //  Selects the next result
	        //
	        next: function(event) {
	            var active = this.$menu.find('.active').removeClass('active');
	            var next = active.next();
	
	            if (!next.length) {
	                next = $(this.$menu.find('li')[0]);
	            }
	
	            next.addClass('active');
	        },
	
	        //------------------------------------------------------------------
	        //
	        //  Selects the previous result
	        //
	        prev: function(event) {
	            var active = this.$menu.find('.active').removeClass('active');
	            var prev = active.prev();
	
	            if (!prev.length) {
	                prev = this.$menu.find('li').last();
	            }
	
	            prev.addClass('active');
	        },
	
	        //=============================================================================================================
	        //
	        //  Events
	        //
	        //=============================================================================================================
	
	        //------------------------------------------------------------------
	        //
	        //  Listens for user events
	        //
	        listen: function() {
	            this.$element.on('blur', $.proxy(this.blur, this))
	                .on('keyup', $.proxy(this.keyup, this));
	
	            if (this.eventSupported('keydown')) {
	                this.$element.on('keydown', $.proxy(this.keypress, this));
	            } else {
	                this.$element.on('keypress', $.proxy(this.keypress, this));
	            }
	
	            this.$menu.on('click', $.proxy(this.click, this))
	                .on('mouseenter', 'li', $.proxy(this.mouseenter, this));
	        },
	
	        //------------------------------------------------------------------
	        //
	        //  Handles a key being raised up
	        //
	        keyup: function(e) {
	            e.stopPropagation();
	            e.preventDefault();
	
	            switch (e.keyCode) {
	                case 40:
	                    // down arrow
	                case 38:
	                    // up arrow
	                    break;
	                case 9:
	                    // tab
	                case 13:
	                    // enter
	                    if (!this.shown) {
	                        return;
	                    }
	                    this.select();
	                    break;
	                case 27:
	                    // escape
	                    this.hide();
	                    break;
	                default:
	                    this.lookup();
	            }
	        },
	
	        //------------------------------------------------------------------
	        //
	        //  Handles a key being pressed
	        //
	        keypress: function(e) {
	            e.stopPropagation();
	            if (!this.shown) {
	                return;
	            }
	
	            switch (e.keyCode) {
	                case 9:
	                    // tab
	                case 13:
	                    // enter
	                case 27:
	                    // escape
	                    e.preventDefault();
	                    break;
	                case 38:
	                    // up arrow
	                    e.preventDefault();
	                    this.prev();
	                    break;
	                case 40:
	                    // down arrow
	                    e.preventDefault();
	                    this.next();
	                    break;
	            }
	        },
	
	        //------------------------------------------------------------------
	        //
	        //  Handles cursor exiting the textbox
	        //
	        blur: function(e) {
	            var that = this;
	            e.stopPropagation();
	            e.preventDefault();
	            setTimeout(function() {
	                if (!that.$menu.is(':focus')) {
	                    that.hide();
	                }
	            }, 150)
	        },
	
	        //------------------------------------------------------------------
	        //
	        //  Handles clicking on the results list
	        //
	        click: function(e) {
	            e.stopPropagation();
	            e.preventDefault();
	            this.select();
	        },
	
	        //------------------------------------------------------------------
	        //
	        //  Handles the mouse entering the results list
	        //
	        mouseenter: function(e) {
	            this.$menu.find('.active').removeClass('active');
	            $(e.currentTarget).addClass('active');
	        }
	    }
	
	    //------------------------------------------------------------------
	    //
	    //  Plugin definition
	    //
	    $.fn.typeahead = function(option) {
	        return this.each(function() {
	            var $this = $(this),
	                data = $this.data('typeahead'),
	                options = typeof option === 'object' && option;
	
	            if (!data) {
	                $this.data('typeahead', (data = new Typeahead(this, options)));
	            }
	
	            if (typeof option === 'string') {
	                data[option]();
	            }
	        });
	    }
	
	    //------------------------------------------------------------------
	    //
	    //  Defaults
	    //
	    $.fn.typeahead.defaults = {
	        source: [],
	        items: 8,
	        menu: '<ul class="typeahead dropdown-menu"></ul>',
	        item: '<li></li>',
	        display: 'name',
	        val: 'id',
	        itemSelected: function() {},
	        ajax: {
	            url: null,
	            timeout: 300,
	            method: 'post',
	            triggerLength: 3,
	            loadingClass: null,
	            displayField: null,
	            preDispatch: null,
	            preProcess: null
	        }
	    }
	
	    $.fn.typeahead.Constructor = Typeahead;
	
	    //------------------------------------------------------------------
	    //
	    //  DOM-ready call for the Data API (no-JS implementation)
	    //    
	    //  Note: As of Bootstrap v2.0 this feature may be disabled using $('body').off('.data-api')    
	    //  More info here: https://github.com/twitter/bootstrap/tree/master/js
	    //
	    $(function() {
	        $('body').on('focus.typeahead.data-api', '[data-provide="typeahead"]', function(e) {
	            var $this = $(this);
	
	            if ($this.data('typeahead')) {
	                return;
	            }
	
	            e.preventDefault();
	            $this.typeahead($this.data());
	        })
	    });
	}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(33)))

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * jQuery JavaScript Library v1.12.4
	 * http://jquery.com/
	 *
	 * Includes Sizzle.js
	 * http://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2016-05-20T17:17Z
	 */
	
	(function( global, factory ) {
	
		if ( typeof module === "object" && typeof module.exports === "object" ) {
			// For CommonJS and CommonJS-like environments where a proper `window`
			// is present, execute the factory and get jQuery.
			// For environments that do not have a `window` with a `document`
			// (such as Node.js), expose a factory as module.exports.
			// This accentuates the need for the creation of a real `window`.
			// e.g. var jQuery = require("jquery")(window);
			// See ticket #14549 for more info.
			module.exports = global.document ?
				factory( global, true ) :
				function( w ) {
					if ( !w.document ) {
						throw new Error( "jQuery requires a window with a document" );
					}
					return factory( w );
				};
		} else {
			factory( global );
		}
	
	// Pass this if window is not defined yet
	}(typeof window !== "undefined" ? window : this, function( window, noGlobal ) {
	
	// Support: Firefox 18+
	// Can't be in strict mode, several libs including ASP.NET trace
	// the stack via arguments.caller.callee and Firefox dies if
	// you try to trace through "use strict" call chains. (#13335)
	//"use strict";
	var deletedIds = [];
	
	var document = window.document;
	
	var slice = deletedIds.slice;
	
	var concat = deletedIds.concat;
	
	var push = deletedIds.push;
	
	var indexOf = deletedIds.indexOf;
	
	var class2type = {};
	
	var toString = class2type.toString;
	
	var hasOwn = class2type.hasOwnProperty;
	
	var support = {};
	
	
	
	var
		version = "1.12.4",
	
		// Define a local copy of jQuery
		jQuery = function( selector, context ) {
	
			// The jQuery object is actually just the init constructor 'enhanced'
			// Need init if jQuery is called (just allow error to be thrown if not included)
			return new jQuery.fn.init( selector, context );
		},
	
		// Support: Android<4.1, IE<9
		// Make sure we trim BOM and NBSP
		rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
	
		// Matches dashed string for camelizing
		rmsPrefix = /^-ms-/,
		rdashAlpha = /-([\da-z])/gi,
	
		// Used by jQuery.camelCase as callback to replace()
		fcamelCase = function( all, letter ) {
			return letter.toUpperCase();
		};
	
	jQuery.fn = jQuery.prototype = {
	
		// The current version of jQuery being used
		jquery: version,
	
		constructor: jQuery,
	
		// Start with an empty selector
		selector: "",
	
		// The default length of a jQuery object is 0
		length: 0,
	
		toArray: function() {
			return slice.call( this );
		},
	
		// Get the Nth element in the matched element set OR
		// Get the whole matched element set as a clean array
		get: function( num ) {
			return num != null ?
	
				// Return just the one element from the set
				( num < 0 ? this[ num + this.length ] : this[ num ] ) :
	
				// Return all the elements in a clean array
				slice.call( this );
		},
	
		// Take an array of elements and push it onto the stack
		// (returning the new matched element set)
		pushStack: function( elems ) {
	
			// Build a new jQuery matched element set
			var ret = jQuery.merge( this.constructor(), elems );
	
			// Add the old object onto the stack (as a reference)
			ret.prevObject = this;
			ret.context = this.context;
	
			// Return the newly-formed element set
			return ret;
		},
	
		// Execute a callback for every element in the matched set.
		each: function( callback ) {
			return jQuery.each( this, callback );
		},
	
		map: function( callback ) {
			return this.pushStack( jQuery.map( this, function( elem, i ) {
				return callback.call( elem, i, elem );
			} ) );
		},
	
		slice: function() {
			return this.pushStack( slice.apply( this, arguments ) );
		},
	
		first: function() {
			return this.eq( 0 );
		},
	
		last: function() {
			return this.eq( -1 );
		},
	
		eq: function( i ) {
			var len = this.length,
				j = +i + ( i < 0 ? len : 0 );
			return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
		},
	
		end: function() {
			return this.prevObject || this.constructor();
		},
	
		// For internal use only.
		// Behaves like an Array's method, not like a jQuery method.
		push: push,
		sort: deletedIds.sort,
		splice: deletedIds.splice
	};
	
	jQuery.extend = jQuery.fn.extend = function() {
		var src, copyIsArray, copy, name, options, clone,
			target = arguments[ 0 ] || {},
			i = 1,
			length = arguments.length,
			deep = false;
	
		// Handle a deep copy situation
		if ( typeof target === "boolean" ) {
			deep = target;
	
			// skip the boolean and the target
			target = arguments[ i ] || {};
			i++;
		}
	
		// Handle case when target is a string or something (possible in deep copy)
		if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
			target = {};
		}
	
		// extend jQuery itself if only one argument is passed
		if ( i === length ) {
			target = this;
			i--;
		}
	
		for ( ; i < length; i++ ) {
	
			// Only deal with non-null/undefined values
			if ( ( options = arguments[ i ] ) != null ) {
	
				// Extend the base object
				for ( name in options ) {
					src = target[ name ];
					copy = options[ name ];
	
					// Prevent never-ending loop
					if ( target === copy ) {
						continue;
					}
	
					// Recurse if we're merging plain objects or arrays
					if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
						( copyIsArray = jQuery.isArray( copy ) ) ) ) {
	
						if ( copyIsArray ) {
							copyIsArray = false;
							clone = src && jQuery.isArray( src ) ? src : [];
	
						} else {
							clone = src && jQuery.isPlainObject( src ) ? src : {};
						}
	
						// Never move original objects, clone them
						target[ name ] = jQuery.extend( deep, clone, copy );
	
					// Don't bring in undefined values
					} else if ( copy !== undefined ) {
						target[ name ] = copy;
					}
				}
			}
		}
	
		// Return the modified object
		return target;
	};
	
	jQuery.extend( {
	
		// Unique for each copy of jQuery on the page
		expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),
	
		// Assume jQuery is ready without the ready module
		isReady: true,
	
		error: function( msg ) {
			throw new Error( msg );
		},
	
		noop: function() {},
	
		// See test/unit/core.js for details concerning isFunction.
		// Since version 1.3, DOM methods and functions like alert
		// aren't supported. They return false on IE (#2968).
		isFunction: function( obj ) {
			return jQuery.type( obj ) === "function";
		},
	
		isArray: Array.isArray || function( obj ) {
			return jQuery.type( obj ) === "array";
		},
	
		isWindow: function( obj ) {
			/* jshint eqeqeq: false */
			return obj != null && obj == obj.window;
		},
	
		isNumeric: function( obj ) {
	
			// parseFloat NaNs numeric-cast false positives (null|true|false|"")
			// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
			// subtraction forces infinities to NaN
			// adding 1 corrects loss of precision from parseFloat (#15100)
			var realStringObj = obj && obj.toString();
			return !jQuery.isArray( obj ) && ( realStringObj - parseFloat( realStringObj ) + 1 ) >= 0;
		},
	
		isEmptyObject: function( obj ) {
			var name;
			for ( name in obj ) {
				return false;
			}
			return true;
		},
	
		isPlainObject: function( obj ) {
			var key;
	
			// Must be an Object.
			// Because of IE, we also have to check the presence of the constructor property.
			// Make sure that DOM nodes and window objects don't pass through, as well
			if ( !obj || jQuery.type( obj ) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
				return false;
			}
	
			try {
	
				// Not own constructor property must be Object
				if ( obj.constructor &&
					!hasOwn.call( obj, "constructor" ) &&
					!hasOwn.call( obj.constructor.prototype, "isPrototypeOf" ) ) {
					return false;
				}
			} catch ( e ) {
	
				// IE8,9 Will throw exceptions on certain host objects #9897
				return false;
			}
	
			// Support: IE<9
			// Handle iteration over inherited properties before own properties.
			if ( !support.ownFirst ) {
				for ( key in obj ) {
					return hasOwn.call( obj, key );
				}
			}
	
			// Own properties are enumerated firstly, so to speed up,
			// if last one is own, then all properties are own.
			for ( key in obj ) {}
	
			return key === undefined || hasOwn.call( obj, key );
		},
	
		type: function( obj ) {
			if ( obj == null ) {
				return obj + "";
			}
			return typeof obj === "object" || typeof obj === "function" ?
				class2type[ toString.call( obj ) ] || "object" :
				typeof obj;
		},
	
		// Workarounds based on findings by Jim Driscoll
		// http://weblogs.java.net/blog/driscoll/archive/2009/09/08/eval-javascript-global-context
		globalEval: function( data ) {
			if ( data && jQuery.trim( data ) ) {
	
				// We use execScript on Internet Explorer
				// We use an anonymous function so that context is window
				// rather than jQuery in Firefox
				( window.execScript || function( data ) {
					window[ "eval" ].call( window, data ); // jscs:ignore requireDotNotation
				} )( data );
			}
		},
	
		// Convert dashed to camelCase; used by the css and data modules
		// Microsoft forgot to hump their vendor prefix (#9572)
		camelCase: function( string ) {
			return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
		},
	
		nodeName: function( elem, name ) {
			return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
		},
	
		each: function( obj, callback ) {
			var length, i = 0;
	
			if ( isArrayLike( obj ) ) {
				length = obj.length;
				for ( ; i < length; i++ ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			}
	
			return obj;
		},
	
		// Support: Android<4.1, IE<9
		trim: function( text ) {
			return text == null ?
				"" :
				( text + "" ).replace( rtrim, "" );
		},
	
		// results is for internal usage only
		makeArray: function( arr, results ) {
			var ret = results || [];
	
			if ( arr != null ) {
				if ( isArrayLike( Object( arr ) ) ) {
					jQuery.merge( ret,
						typeof arr === "string" ?
						[ arr ] : arr
					);
				} else {
					push.call( ret, arr );
				}
			}
	
			return ret;
		},
	
		inArray: function( elem, arr, i ) {
			var len;
	
			if ( arr ) {
				if ( indexOf ) {
					return indexOf.call( arr, elem, i );
				}
	
				len = arr.length;
				i = i ? i < 0 ? Math.max( 0, len + i ) : i : 0;
	
				for ( ; i < len; i++ ) {
	
					// Skip accessing in sparse arrays
					if ( i in arr && arr[ i ] === elem ) {
						return i;
					}
				}
			}
	
			return -1;
		},
	
		merge: function( first, second ) {
			var len = +second.length,
				j = 0,
				i = first.length;
	
			while ( j < len ) {
				first[ i++ ] = second[ j++ ];
			}
	
			// Support: IE<9
			// Workaround casting of .length to NaN on otherwise arraylike objects (e.g., NodeLists)
			if ( len !== len ) {
				while ( second[ j ] !== undefined ) {
					first[ i++ ] = second[ j++ ];
				}
			}
	
			first.length = i;
	
			return first;
		},
	
		grep: function( elems, callback, invert ) {
			var callbackInverse,
				matches = [],
				i = 0,
				length = elems.length,
				callbackExpect = !invert;
	
			// Go through the array, only saving the items
			// that pass the validator function
			for ( ; i < length; i++ ) {
				callbackInverse = !callback( elems[ i ], i );
				if ( callbackInverse !== callbackExpect ) {
					matches.push( elems[ i ] );
				}
			}
	
			return matches;
		},
	
		// arg is for internal usage only
		map: function( elems, callback, arg ) {
			var length, value,
				i = 0,
				ret = [];
	
			// Go through the array, translating each of the items to their new values
			if ( isArrayLike( elems ) ) {
				length = elems.length;
				for ( ; i < length; i++ ) {
					value = callback( elems[ i ], i, arg );
	
					if ( value != null ) {
						ret.push( value );
					}
				}
	
			// Go through every key on the object,
			} else {
				for ( i in elems ) {
					value = callback( elems[ i ], i, arg );
	
					if ( value != null ) {
						ret.push( value );
					}
				}
			}
	
			// Flatten any nested arrays
			return concat.apply( [], ret );
		},
	
		// A global GUID counter for objects
		guid: 1,
	
		// Bind a function to a context, optionally partially applying any
		// arguments.
		proxy: function( fn, context ) {
			var args, proxy, tmp;
	
			if ( typeof context === "string" ) {
				tmp = fn[ context ];
				context = fn;
				fn = tmp;
			}
	
			// Quick check to determine if target is callable, in the spec
			// this throws a TypeError, but we will just return undefined.
			if ( !jQuery.isFunction( fn ) ) {
				return undefined;
			}
	
			// Simulated bind
			args = slice.call( arguments, 2 );
			proxy = function() {
				return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
			};
	
			// Set the guid of unique handler to the same of original handler, so it can be removed
			proxy.guid = fn.guid = fn.guid || jQuery.guid++;
	
			return proxy;
		},
	
		now: function() {
			return +( new Date() );
		},
	
		// jQuery.support is not used in Core but other projects attach their
		// properties to it so it needs to exist.
		support: support
	} );
	
	// JSHint would error on this code due to the Symbol not being defined in ES5.
	// Defining this global in .jshintrc would create a danger of using the global
	// unguarded in another place, it seems safer to just disable JSHint for these
	// three lines.
	/* jshint ignore: start */
	if ( typeof Symbol === "function" ) {
		jQuery.fn[ Symbol.iterator ] = deletedIds[ Symbol.iterator ];
	}
	/* jshint ignore: end */
	
	// Populate the class2type map
	jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
	function( i, name ) {
		class2type[ "[object " + name + "]" ] = name.toLowerCase();
	} );
	
	function isArrayLike( obj ) {
	
		// Support: iOS 8.2 (not reproducible in simulator)
		// `in` check used to prevent JIT error (gh-2145)
		// hasOwn isn't used here due to false negatives
		// regarding Nodelist length in IE
		var length = !!obj && "length" in obj && obj.length,
			type = jQuery.type( obj );
	
		if ( type === "function" || jQuery.isWindow( obj ) ) {
			return false;
		}
	
		return type === "array" || length === 0 ||
			typeof length === "number" && length > 0 && ( length - 1 ) in obj;
	}
	var Sizzle =
	/*!
	 * Sizzle CSS Selector Engine v2.2.1
	 * http://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2015-10-17
	 */
	(function( window ) {
	
	var i,
		support,
		Expr,
		getText,
		isXML,
		tokenize,
		compile,
		select,
		outermostContext,
		sortInput,
		hasDuplicate,
	
		// Local document vars
		setDocument,
		document,
		docElem,
		documentIsHTML,
		rbuggyQSA,
		rbuggyMatches,
		matches,
		contains,
	
		// Instance-specific data
		expando = "sizzle" + 1 * new Date(),
		preferredDoc = window.document,
		dirruns = 0,
		done = 0,
		classCache = createCache(),
		tokenCache = createCache(),
		compilerCache = createCache(),
		sortOrder = function( a, b ) {
			if ( a === b ) {
				hasDuplicate = true;
			}
			return 0;
		},
	
		// General-purpose constants
		MAX_NEGATIVE = 1 << 31,
	
		// Instance methods
		hasOwn = ({}).hasOwnProperty,
		arr = [],
		pop = arr.pop,
		push_native = arr.push,
		push = arr.push,
		slice = arr.slice,
		// Use a stripped-down indexOf as it's faster than native
		// http://jsperf.com/thor-indexof-vs-for/5
		indexOf = function( list, elem ) {
			var i = 0,
				len = list.length;
			for ( ; i < len; i++ ) {
				if ( list[i] === elem ) {
					return i;
				}
			}
			return -1;
		},
	
		booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
	
		// Regular expressions
	
		// http://www.w3.org/TR/css3-selectors/#whitespace
		whitespace = "[\\x20\\t\\r\\n\\f]",
	
		// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
		identifier = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
	
		// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
		attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
			// Operator (capture 2)
			"*([*^$|!~]?=)" + whitespace +
			// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
			"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
			"*\\]",
	
		pseudos = ":(" + identifier + ")(?:\\((" +
			// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
			// 1. quoted (capture 3; capture 4 or capture 5)
			"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
			// 2. simple (capture 6)
			"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
			// 3. anything else (capture 2)
			".*" +
			")\\)|)",
	
		// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
		rwhitespace = new RegExp( whitespace + "+", "g" ),
		rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),
	
		rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
		rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),
	
		rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),
	
		rpseudo = new RegExp( pseudos ),
		ridentifier = new RegExp( "^" + identifier + "$" ),
	
		matchExpr = {
			"ID": new RegExp( "^#(" + identifier + ")" ),
			"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
			"TAG": new RegExp( "^(" + identifier + "|[*])" ),
			"ATTR": new RegExp( "^" + attributes ),
			"PSEUDO": new RegExp( "^" + pseudos ),
			"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
				"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
				"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
			"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
			// For use in libraries implementing .is()
			// We use this for POS matching in `select`
			"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
				whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
		},
	
		rinputs = /^(?:input|select|textarea|button)$/i,
		rheader = /^h\d$/i,
	
		rnative = /^[^{]+\{\s*\[native \w/,
	
		// Easily-parseable/retrievable ID or TAG or CLASS selectors
		rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
	
		rsibling = /[+~]/,
		rescape = /'|\\/g,
	
		// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
		runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
		funescape = function( _, escaped, escapedWhitespace ) {
			var high = "0x" + escaped - 0x10000;
			// NaN means non-codepoint
			// Support: Firefox<24
			// Workaround erroneous numeric interpretation of +"0x"
			return high !== high || escapedWhitespace ?
				escaped :
				high < 0 ?
					// BMP codepoint
					String.fromCharCode( high + 0x10000 ) :
					// Supplemental Plane codepoint (surrogate pair)
					String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
		},
	
		// Used for iframes
		// See setDocument()
		// Removing the function wrapper causes a "Permission Denied"
		// error in IE
		unloadHandler = function() {
			setDocument();
		};
	
	// Optimize for push.apply( _, NodeList )
	try {
		push.apply(
			(arr = slice.call( preferredDoc.childNodes )),
			preferredDoc.childNodes
		);
		// Support: Android<4.0
		// Detect silently failing push.apply
		arr[ preferredDoc.childNodes.length ].nodeType;
	} catch ( e ) {
		push = { apply: arr.length ?
	
			// Leverage slice if possible
			function( target, els ) {
				push_native.apply( target, slice.call(els) );
			} :
	
			// Support: IE<9
			// Otherwise append directly
			function( target, els ) {
				var j = target.length,
					i = 0;
				// Can't trust NodeList.length
				while ( (target[j++] = els[i++]) ) {}
				target.length = j - 1;
			}
		};
	}
	
	function Sizzle( selector, context, results, seed ) {
		var m, i, elem, nid, nidselect, match, groups, newSelector,
			newContext = context && context.ownerDocument,
	
			// nodeType defaults to 9, since context defaults to document
			nodeType = context ? context.nodeType : 9;
	
		results = results || [];
	
		// Return early from calls with invalid selector or context
		if ( typeof selector !== "string" || !selector ||
			nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {
	
			return results;
		}
	
		// Try to shortcut find operations (as opposed to filters) in HTML documents
		if ( !seed ) {
	
			if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
				setDocument( context );
			}
			context = context || document;
	
			if ( documentIsHTML ) {
	
				// If the selector is sufficiently simple, try using a "get*By*" DOM method
				// (excepting DocumentFragment context, where the methods don't exist)
				if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {
	
					// ID selector
					if ( (m = match[1]) ) {
	
						// Document context
						if ( nodeType === 9 ) {
							if ( (elem = context.getElementById( m )) ) {
	
								// Support: IE, Opera, Webkit
								// TODO: identify versions
								// getElementById can match elements by name instead of ID
								if ( elem.id === m ) {
									results.push( elem );
									return results;
								}
							} else {
								return results;
							}
	
						// Element context
						} else {
	
							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( newContext && (elem = newContext.getElementById( m )) &&
								contains( context, elem ) &&
								elem.id === m ) {
	
								results.push( elem );
								return results;
							}
						}
	
					// Type selector
					} else if ( match[2] ) {
						push.apply( results, context.getElementsByTagName( selector ) );
						return results;
	
					// Class selector
					} else if ( (m = match[3]) && support.getElementsByClassName &&
						context.getElementsByClassName ) {
	
						push.apply( results, context.getElementsByClassName( m ) );
						return results;
					}
				}
	
				// Take advantage of querySelectorAll
				if ( support.qsa &&
					!compilerCache[ selector + " " ] &&
					(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {
	
					if ( nodeType !== 1 ) {
						newContext = context;
						newSelector = selector;
	
					// qSA looks outside Element context, which is not what we want
					// Thanks to Andrew Dupont for this workaround technique
					// Support: IE <=8
					// Exclude object elements
					} else if ( context.nodeName.toLowerCase() !== "object" ) {
	
						// Capture the context ID, setting it first if necessary
						if ( (nid = context.getAttribute( "id" )) ) {
							nid = nid.replace( rescape, "\\$&" );
						} else {
							context.setAttribute( "id", (nid = expando) );
						}
	
						// Prefix every selector in the list
						groups = tokenize( selector );
						i = groups.length;
						nidselect = ridentifier.test( nid ) ? "#" + nid : "[id='" + nid + "']";
						while ( i-- ) {
							groups[i] = nidselect + " " + toSelector( groups[i] );
						}
						newSelector = groups.join( "," );
	
						// Expand context for sibling selectors
						newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
							context;
					}
	
					if ( newSelector ) {
						try {
							push.apply( results,
								newContext.querySelectorAll( newSelector )
							);
							return results;
						} catch ( qsaError ) {
						} finally {
							if ( nid === expando ) {
								context.removeAttribute( "id" );
							}
						}
					}
				}
			}
		}
	
		// All others
		return select( selector.replace( rtrim, "$1" ), context, results, seed );
	}
	
	/**
	 * Create key-value caches of limited size
	 * @returns {function(string, object)} Returns the Object data after storing it on itself with
	 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
	 *	deleting the oldest entry
	 */
	function createCache() {
		var keys = [];
	
		function cache( key, value ) {
			// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
			if ( keys.push( key + " " ) > Expr.cacheLength ) {
				// Only keep the most recent entries
				delete cache[ keys.shift() ];
			}
			return (cache[ key + " " ] = value);
		}
		return cache;
	}
	
	/**
	 * Mark a function for special use by Sizzle
	 * @param {Function} fn The function to mark
	 */
	function markFunction( fn ) {
		fn[ expando ] = true;
		return fn;
	}
	
	/**
	 * Support testing using an element
	 * @param {Function} fn Passed the created div and expects a boolean result
	 */
	function assert( fn ) {
		var div = document.createElement("div");
	
		try {
			return !!fn( div );
		} catch (e) {
			return false;
		} finally {
			// Remove from its parent by default
			if ( div.parentNode ) {
				div.parentNode.removeChild( div );
			}
			// release memory in IE
			div = null;
		}
	}
	
	/**
	 * Adds the same handler for all of the specified attrs
	 * @param {String} attrs Pipe-separated list of attributes
	 * @param {Function} handler The method that will be applied
	 */
	function addHandle( attrs, handler ) {
		var arr = attrs.split("|"),
			i = arr.length;
	
		while ( i-- ) {
			Expr.attrHandle[ arr[i] ] = handler;
		}
	}
	
	/**
	 * Checks document order of two siblings
	 * @param {Element} a
	 * @param {Element} b
	 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
	 */
	function siblingCheck( a, b ) {
		var cur = b && a,
			diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
				( ~b.sourceIndex || MAX_NEGATIVE ) -
				( ~a.sourceIndex || MAX_NEGATIVE );
	
		// Use IE sourceIndex if available on both nodes
		if ( diff ) {
			return diff;
		}
	
		// Check if b follows a
		if ( cur ) {
			while ( (cur = cur.nextSibling) ) {
				if ( cur === b ) {
					return -1;
				}
			}
		}
	
		return a ? 1 : -1;
	}
	
	/**
	 * Returns a function to use in pseudos for input types
	 * @param {String} type
	 */
	function createInputPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === type;
		};
	}
	
	/**
	 * Returns a function to use in pseudos for buttons
	 * @param {String} type
	 */
	function createButtonPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return (name === "input" || name === "button") && elem.type === type;
		};
	}
	
	/**
	 * Returns a function to use in pseudos for positionals
	 * @param {Function} fn
	 */
	function createPositionalPseudo( fn ) {
		return markFunction(function( argument ) {
			argument = +argument;
			return markFunction(function( seed, matches ) {
				var j,
					matchIndexes = fn( [], seed.length, argument ),
					i = matchIndexes.length;
	
				// Match elements found at the specified indexes
				while ( i-- ) {
					if ( seed[ (j = matchIndexes[i]) ] ) {
						seed[j] = !(matches[j] = seed[j]);
					}
				}
			});
		});
	}
	
	/**
	 * Checks a node for validity as a Sizzle context
	 * @param {Element|Object=} context
	 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
	 */
	function testContext( context ) {
		return context && typeof context.getElementsByTagName !== "undefined" && context;
	}
	
	// Expose support vars for convenience
	support = Sizzle.support = {};
	
	/**
	 * Detects XML nodes
	 * @param {Element|Object} elem An element or a document
	 * @returns {Boolean} True iff elem is a non-HTML XML node
	 */
	isXML = Sizzle.isXML = function( elem ) {
		// documentElement is verified for cases where it doesn't yet exist
		// (such as loading iframes in IE - #4833)
		var documentElement = elem && (elem.ownerDocument || elem).documentElement;
		return documentElement ? documentElement.nodeName !== "HTML" : false;
	};
	
	/**
	 * Sets document-related variables once based on the current document
	 * @param {Element|Object} [doc] An element or document object to use to set the document
	 * @returns {Object} Returns the current document
	 */
	setDocument = Sizzle.setDocument = function( node ) {
		var hasCompare, parent,
			doc = node ? node.ownerDocument || node : preferredDoc;
	
		// Return early if doc is invalid or already selected
		if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
			return document;
		}
	
		// Update global variables
		document = doc;
		docElem = document.documentElement;
		documentIsHTML = !isXML( document );
	
		// Support: IE 9-11, Edge
		// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
		if ( (parent = document.defaultView) && parent.top !== parent ) {
			// Support: IE 11
			if ( parent.addEventListener ) {
				parent.addEventListener( "unload", unloadHandler, false );
	
			// Support: IE 9 - 10 only
			} else if ( parent.attachEvent ) {
				parent.attachEvent( "onunload", unloadHandler );
			}
		}
	
		/* Attributes
		---------------------------------------------------------------------- */
	
		// Support: IE<8
		// Verify that getAttribute really returns attributes and not properties
		// (excepting IE8 booleans)
		support.attributes = assert(function( div ) {
			div.className = "i";
			return !div.getAttribute("className");
		});
	
		/* getElement(s)By*
		---------------------------------------------------------------------- */
	
		// Check if getElementsByTagName("*") returns only elements
		support.getElementsByTagName = assert(function( div ) {
			div.appendChild( document.createComment("") );
			return !div.getElementsByTagName("*").length;
		});
	
		// Support: IE<9
		support.getElementsByClassName = rnative.test( document.getElementsByClassName );
	
		// Support: IE<10
		// Check if getElementById returns elements by name
		// The broken getElementById methods don't pick up programatically-set names,
		// so use a roundabout getElementsByName test
		support.getById = assert(function( div ) {
			docElem.appendChild( div ).id = expando;
			return !document.getElementsByName || !document.getElementsByName( expando ).length;
		});
	
		// ID find and filter
		if ( support.getById ) {
			Expr.find["ID"] = function( id, context ) {
				if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
					var m = context.getElementById( id );
					return m ? [ m ] : [];
				}
			};
			Expr.filter["ID"] = function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					return elem.getAttribute("id") === attrId;
				};
			};
		} else {
			// Support: IE6/7
			// getElementById is not reliable as a find shortcut
			delete Expr.find["ID"];
	
			Expr.filter["ID"] =  function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					var node = typeof elem.getAttributeNode !== "undefined" &&
						elem.getAttributeNode("id");
					return node && node.value === attrId;
				};
			};
		}
	
		// Tag
		Expr.find["TAG"] = support.getElementsByTagName ?
			function( tag, context ) {
				if ( typeof context.getElementsByTagName !== "undefined" ) {
					return context.getElementsByTagName( tag );
	
				// DocumentFragment nodes don't have gEBTN
				} else if ( support.qsa ) {
					return context.querySelectorAll( tag );
				}
			} :
	
			function( tag, context ) {
				var elem,
					tmp = [],
					i = 0,
					// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
					results = context.getElementsByTagName( tag );
	
				// Filter out possible comments
				if ( tag === "*" ) {
					while ( (elem = results[i++]) ) {
						if ( elem.nodeType === 1 ) {
							tmp.push( elem );
						}
					}
	
					return tmp;
				}
				return results;
			};
	
		// Class
		Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
			if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
				return context.getElementsByClassName( className );
			}
		};
	
		/* QSA/matchesSelector
		---------------------------------------------------------------------- */
	
		// QSA and matchesSelector support
	
		// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
		rbuggyMatches = [];
	
		// qSa(:focus) reports false when true (Chrome 21)
		// We allow this because of a bug in IE8/9 that throws an error
		// whenever `document.activeElement` is accessed on an iframe
		// So, we allow :focus to pass through QSA all the time to avoid the IE error
		// See http://bugs.jquery.com/ticket/13378
		rbuggyQSA = [];
	
		if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
			// Build QSA regex
			// Regex strategy adopted from Diego Perini
			assert(function( div ) {
				// Select is set to empty string on purpose
				// This is to test IE's treatment of not explicitly
				// setting a boolean content attribute,
				// since its presence should be enough
				// http://bugs.jquery.com/ticket/12359
				docElem.appendChild( div ).innerHTML = "<a id='" + expando + "'></a>" +
					"<select id='" + expando + "-\r\\' msallowcapture=''>" +
					"<option selected=''></option></select>";
	
				// Support: IE8, Opera 11-12.16
				// Nothing should be selected when empty strings follow ^= or $= or *=
				// The test attribute must be unknown in Opera but "safe" for WinRT
				// http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
				if ( div.querySelectorAll("[msallowcapture^='']").length ) {
					rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
				}
	
				// Support: IE8
				// Boolean attributes and "value" are not treated correctly
				if ( !div.querySelectorAll("[selected]").length ) {
					rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
				}
	
				// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
				if ( !div.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
					rbuggyQSA.push("~=");
				}
	
				// Webkit/Opera - :checked should return selected option elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				// IE8 throws error here and will not see later tests
				if ( !div.querySelectorAll(":checked").length ) {
					rbuggyQSA.push(":checked");
				}
	
				// Support: Safari 8+, iOS 8+
				// https://bugs.webkit.org/show_bug.cgi?id=136851
				// In-page `selector#id sibing-combinator selector` fails
				if ( !div.querySelectorAll( "a#" + expando + "+*" ).length ) {
					rbuggyQSA.push(".#.+[+~]");
				}
			});
	
			assert(function( div ) {
				// Support: Windows 8 Native Apps
				// The type and name attributes are restricted during .innerHTML assignment
				var input = document.createElement("input");
				input.setAttribute( "type", "hidden" );
				div.appendChild( input ).setAttribute( "name", "D" );
	
				// Support: IE8
				// Enforce case-sensitivity of name attribute
				if ( div.querySelectorAll("[name=d]").length ) {
					rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
				}
	
				// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
				// IE8 throws error here and will not see later tests
				if ( !div.querySelectorAll(":enabled").length ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}
	
				// Opera 10-11 does not throw on post-comma invalid pseudos
				div.querySelectorAll("*,:x");
				rbuggyQSA.push(",.*:");
			});
		}
	
		if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
			docElem.webkitMatchesSelector ||
			docElem.mozMatchesSelector ||
			docElem.oMatchesSelector ||
			docElem.msMatchesSelector) )) ) {
	
			assert(function( div ) {
				// Check to see if it's possible to do matchesSelector
				// on a disconnected node (IE 9)
				support.disconnectedMatch = matches.call( div, "div" );
	
				// This should fail with an exception
				// Gecko does not error, returns false instead
				matches.call( div, "[s!='']:x" );
				rbuggyMatches.push( "!=", pseudos );
			});
		}
	
		rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
		rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );
	
		/* Contains
		---------------------------------------------------------------------- */
		hasCompare = rnative.test( docElem.compareDocumentPosition );
	
		// Element contains another
		// Purposefully self-exclusive
		// As in, an element does not contain itself
		contains = hasCompare || rnative.test( docElem.contains ) ?
			function( a, b ) {
				var adown = a.nodeType === 9 ? a.documentElement : a,
					bup = b && b.parentNode;
				return a === bup || !!( bup && bup.nodeType === 1 && (
					adown.contains ?
						adown.contains( bup ) :
						a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
				));
			} :
			function( a, b ) {
				if ( b ) {
					while ( (b = b.parentNode) ) {
						if ( b === a ) {
							return true;
						}
					}
				}
				return false;
			};
	
		/* Sorting
		---------------------------------------------------------------------- */
	
		// Document order sorting
		sortOrder = hasCompare ?
		function( a, b ) {
	
			// Flag for duplicate removal
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}
	
			// Sort on method existence if only one input has compareDocumentPosition
			var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
			if ( compare ) {
				return compare;
			}
	
			// Calculate position if both inputs belong to the same document
			compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
				a.compareDocumentPosition( b ) :
	
				// Otherwise we know they are disconnected
				1;
	
			// Disconnected nodes
			if ( compare & 1 ||
				(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {
	
				// Choose the first element that is related to our preferred document
				if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
					return -1;
				}
				if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
					return 1;
				}
	
				// Maintain original order
				return sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;
			}
	
			return compare & 4 ? -1 : 1;
		} :
		function( a, b ) {
			// Exit early if the nodes are identical
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}
	
			var cur,
				i = 0,
				aup = a.parentNode,
				bup = b.parentNode,
				ap = [ a ],
				bp = [ b ];
	
			// Parentless nodes are either documents or disconnected
			if ( !aup || !bup ) {
				return a === document ? -1 :
					b === document ? 1 :
					aup ? -1 :
					bup ? 1 :
					sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;
	
			// If the nodes are siblings, we can do a quick check
			} else if ( aup === bup ) {
				return siblingCheck( a, b );
			}
	
			// Otherwise we need full lists of their ancestors for comparison
			cur = a;
			while ( (cur = cur.parentNode) ) {
				ap.unshift( cur );
			}
			cur = b;
			while ( (cur = cur.parentNode) ) {
				bp.unshift( cur );
			}
	
			// Walk down the tree looking for a discrepancy
			while ( ap[i] === bp[i] ) {
				i++;
			}
	
			return i ?
				// Do a sibling check if the nodes have a common ancestor
				siblingCheck( ap[i], bp[i] ) :
	
				// Otherwise nodes in our document sort first
				ap[i] === preferredDoc ? -1 :
				bp[i] === preferredDoc ? 1 :
				0;
		};
	
		return document;
	};
	
	Sizzle.matches = function( expr, elements ) {
		return Sizzle( expr, null, null, elements );
	};
	
	Sizzle.matchesSelector = function( elem, expr ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}
	
		// Make sure that attribute selectors are quoted
		expr = expr.replace( rattributeQuotes, "='$1']" );
	
		if ( support.matchesSelector && documentIsHTML &&
			!compilerCache[ expr + " " ] &&
			( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
			( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {
	
			try {
				var ret = matches.call( elem, expr );
	
				// IE 9's matchesSelector returns false on disconnected nodes
				if ( ret || support.disconnectedMatch ||
						// As well, disconnected nodes are said to be in a document
						// fragment in IE 9
						elem.document && elem.document.nodeType !== 11 ) {
					return ret;
				}
			} catch (e) {}
		}
	
		return Sizzle( expr, document, null, [ elem ] ).length > 0;
	};
	
	Sizzle.contains = function( context, elem ) {
		// Set document vars if needed
		if ( ( context.ownerDocument || context ) !== document ) {
			setDocument( context );
		}
		return contains( context, elem );
	};
	
	Sizzle.attr = function( elem, name ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}
	
		var fn = Expr.attrHandle[ name.toLowerCase() ],
			// Don't get fooled by Object.prototype properties (jQuery #13807)
			val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
				fn( elem, name, !documentIsHTML ) :
				undefined;
	
		return val !== undefined ?
			val :
			support.attributes || !documentIsHTML ?
				elem.getAttribute( name ) :
				(val = elem.getAttributeNode(name)) && val.specified ?
					val.value :
					null;
	};
	
	Sizzle.error = function( msg ) {
		throw new Error( "Syntax error, unrecognized expression: " + msg );
	};
	
	/**
	 * Document sorting and removing duplicates
	 * @param {ArrayLike} results
	 */
	Sizzle.uniqueSort = function( results ) {
		var elem,
			duplicates = [],
			j = 0,
			i = 0;
	
		// Unless we *know* we can detect duplicates, assume their presence
		hasDuplicate = !support.detectDuplicates;
		sortInput = !support.sortStable && results.slice( 0 );
		results.sort( sortOrder );
	
		if ( hasDuplicate ) {
			while ( (elem = results[i++]) ) {
				if ( elem === results[ i ] ) {
					j = duplicates.push( i );
				}
			}
			while ( j-- ) {
				results.splice( duplicates[ j ], 1 );
			}
		}
	
		// Clear input after sorting to release objects
		// See https://github.com/jquery/sizzle/pull/225
		sortInput = null;
	
		return results;
	};
	
	/**
	 * Utility function for retrieving the text value of an array of DOM nodes
	 * @param {Array|Element} elem
	 */
	getText = Sizzle.getText = function( elem ) {
		var node,
			ret = "",
			i = 0,
			nodeType = elem.nodeType;
	
		if ( !nodeType ) {
			// If no nodeType, this is expected to be an array
			while ( (node = elem[i++]) ) {
				// Do not traverse comment nodes
				ret += getText( node );
			}
		} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
			// Use textContent for elements
			// innerText usage removed for consistency of new lines (jQuery #11153)
			if ( typeof elem.textContent === "string" ) {
				return elem.textContent;
			} else {
				// Traverse its children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					ret += getText( elem );
				}
			}
		} else if ( nodeType === 3 || nodeType === 4 ) {
			return elem.nodeValue;
		}
		// Do not include comment or processing instruction nodes
	
		return ret;
	};
	
	Expr = Sizzle.selectors = {
	
		// Can be adjusted by the user
		cacheLength: 50,
	
		createPseudo: markFunction,
	
		match: matchExpr,
	
		attrHandle: {},
	
		find: {},
	
		relative: {
			">": { dir: "parentNode", first: true },
			" ": { dir: "parentNode" },
			"+": { dir: "previousSibling", first: true },
			"~": { dir: "previousSibling" }
		},
	
		preFilter: {
			"ATTR": function( match ) {
				match[1] = match[1].replace( runescape, funescape );
	
				// Move the given value to match[3] whether quoted or unquoted
				match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );
	
				if ( match[2] === "~=" ) {
					match[3] = " " + match[3] + " ";
				}
	
				return match.slice( 0, 4 );
			},
	
			"CHILD": function( match ) {
				/* matches from matchExpr["CHILD"]
					1 type (only|nth|...)
					2 what (child|of-type)
					3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
					4 xn-component of xn+y argument ([+-]?\d*n|)
					5 sign of xn-component
					6 x of xn-component
					7 sign of y-component
					8 y of y-component
				*/
				match[1] = match[1].toLowerCase();
	
				if ( match[1].slice( 0, 3 ) === "nth" ) {
					// nth-* requires argument
					if ( !match[3] ) {
						Sizzle.error( match[0] );
					}
	
					// numeric x and y parameters for Expr.filter.CHILD
					// remember that false/true cast respectively to 0/1
					match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
					match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );
	
				// other types prohibit arguments
				} else if ( match[3] ) {
					Sizzle.error( match[0] );
				}
	
				return match;
			},
	
			"PSEUDO": function( match ) {
				var excess,
					unquoted = !match[6] && match[2];
	
				if ( matchExpr["CHILD"].test( match[0] ) ) {
					return null;
				}
	
				// Accept quoted arguments as-is
				if ( match[3] ) {
					match[2] = match[4] || match[5] || "";
	
				// Strip excess characters from unquoted arguments
				} else if ( unquoted && rpseudo.test( unquoted ) &&
					// Get excess from tokenize (recursively)
					(excess = tokenize( unquoted, true )) &&
					// advance to the next closing parenthesis
					(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {
	
					// excess is a negative index
					match[0] = match[0].slice( 0, excess );
					match[2] = unquoted.slice( 0, excess );
				}
	
				// Return only captures needed by the pseudo filter method (type and argument)
				return match.slice( 0, 3 );
			}
		},
	
		filter: {
	
			"TAG": function( nodeNameSelector ) {
				var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
				return nodeNameSelector === "*" ?
					function() { return true; } :
					function( elem ) {
						return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
					};
			},
	
			"CLASS": function( className ) {
				var pattern = classCache[ className + " " ];
	
				return pattern ||
					(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
					classCache( className, function( elem ) {
						return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
					});
			},
	
			"ATTR": function( name, operator, check ) {
				return function( elem ) {
					var result = Sizzle.attr( elem, name );
	
					if ( result == null ) {
						return operator === "!=";
					}
					if ( !operator ) {
						return true;
					}
	
					result += "";
	
					return operator === "=" ? result === check :
						operator === "!=" ? result !== check :
						operator === "^=" ? check && result.indexOf( check ) === 0 :
						operator === "*=" ? check && result.indexOf( check ) > -1 :
						operator === "$=" ? check && result.slice( -check.length ) === check :
						operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
						operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
						false;
				};
			},
	
			"CHILD": function( type, what, argument, first, last ) {
				var simple = type.slice( 0, 3 ) !== "nth",
					forward = type.slice( -4 ) !== "last",
					ofType = what === "of-type";
	
				return first === 1 && last === 0 ?
	
					// Shortcut for :nth-*(n)
					function( elem ) {
						return !!elem.parentNode;
					} :
	
					function( elem, context, xml ) {
						var cache, uniqueCache, outerCache, node, nodeIndex, start,
							dir = simple !== forward ? "nextSibling" : "previousSibling",
							parent = elem.parentNode,
							name = ofType && elem.nodeName.toLowerCase(),
							useCache = !xml && !ofType,
							diff = false;
	
						if ( parent ) {
	
							// :(first|last|only)-(child|of-type)
							if ( simple ) {
								while ( dir ) {
									node = elem;
									while ( (node = node[ dir ]) ) {
										if ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) {
	
											return false;
										}
									}
									// Reverse direction for :only-* (if we haven't yet done so)
									start = dir = type === "only" && !start && "nextSibling";
								}
								return true;
							}
	
							start = [ forward ? parent.firstChild : parent.lastChild ];
	
							// non-xml :nth-child(...) stores cache data on `parent`
							if ( forward && useCache ) {
	
								// Seek `elem` from a previously-cached index
	
								// ...in a gzip-friendly way
								node = parent;
								outerCache = node[ expando ] || (node[ expando ] = {});
	
								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});
	
								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex && cache[ 2 ];
								node = nodeIndex && parent.childNodes[ nodeIndex ];
	
								while ( (node = ++nodeIndex && node && node[ dir ] ||
	
									// Fallback to seeking `elem` from the start
									(diff = nodeIndex = 0) || start.pop()) ) {
	
									// When found, cache indexes on `parent` and break
									if ( node.nodeType === 1 && ++diff && node === elem ) {
										uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
										break;
									}
								}
	
							} else {
								// Use previously-cached element index if available
								if ( useCache ) {
									// ...in a gzip-friendly way
									node = elem;
									outerCache = node[ expando ] || (node[ expando ] = {});
	
									// Support: IE <9 only
									// Defend against cloned attroperties (jQuery gh-1709)
									uniqueCache = outerCache[ node.uniqueID ] ||
										(outerCache[ node.uniqueID ] = {});
	
									cache = uniqueCache[ type ] || [];
									nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
									diff = nodeIndex;
								}
	
								// xml :nth-child(...)
								// or :nth-last-child(...) or :nth(-last)?-of-type(...)
								if ( diff === false ) {
									// Use the same loop as above to seek `elem` from the start
									while ( (node = ++nodeIndex && node && node[ dir ] ||
										(diff = nodeIndex = 0) || start.pop()) ) {
	
										if ( ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) &&
											++diff ) {
	
											// Cache the index of each encountered element
											if ( useCache ) {
												outerCache = node[ expando ] || (node[ expando ] = {});
	
												// Support: IE <9 only
												// Defend against cloned attroperties (jQuery gh-1709)
												uniqueCache = outerCache[ node.uniqueID ] ||
													(outerCache[ node.uniqueID ] = {});
	
												uniqueCache[ type ] = [ dirruns, diff ];
											}
	
											if ( node === elem ) {
												break;
											}
										}
									}
								}
							}
	
							// Incorporate the offset, then check against cycle size
							diff -= last;
							return diff === first || ( diff % first === 0 && diff / first >= 0 );
						}
					};
			},
	
			"PSEUDO": function( pseudo, argument ) {
				// pseudo-class names are case-insensitive
				// http://www.w3.org/TR/selectors/#pseudo-classes
				// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
				// Remember that setFilters inherits from pseudos
				var args,
					fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
						Sizzle.error( "unsupported pseudo: " + pseudo );
	
				// The user may use createPseudo to indicate that
				// arguments are needed to create the filter function
				// just as Sizzle does
				if ( fn[ expando ] ) {
					return fn( argument );
				}
	
				// But maintain support for old signatures
				if ( fn.length > 1 ) {
					args = [ pseudo, pseudo, "", argument ];
					return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
						markFunction(function( seed, matches ) {
							var idx,
								matched = fn( seed, argument ),
								i = matched.length;
							while ( i-- ) {
								idx = indexOf( seed, matched[i] );
								seed[ idx ] = !( matches[ idx ] = matched[i] );
							}
						}) :
						function( elem ) {
							return fn( elem, 0, args );
						};
				}
	
				return fn;
			}
		},
	
		pseudos: {
			// Potentially complex pseudos
			"not": markFunction(function( selector ) {
				// Trim the selector passed to compile
				// to avoid treating leading and trailing
				// spaces as combinators
				var input = [],
					results = [],
					matcher = compile( selector.replace( rtrim, "$1" ) );
	
				return matcher[ expando ] ?
					markFunction(function( seed, matches, context, xml ) {
						var elem,
							unmatched = matcher( seed, null, xml, [] ),
							i = seed.length;
	
						// Match elements unmatched by `matcher`
						while ( i-- ) {
							if ( (elem = unmatched[i]) ) {
								seed[i] = !(matches[i] = elem);
							}
						}
					}) :
					function( elem, context, xml ) {
						input[0] = elem;
						matcher( input, null, xml, results );
						// Don't keep the element (issue #299)
						input[0] = null;
						return !results.pop();
					};
			}),
	
			"has": markFunction(function( selector ) {
				return function( elem ) {
					return Sizzle( selector, elem ).length > 0;
				};
			}),
	
			"contains": markFunction(function( text ) {
				text = text.replace( runescape, funescape );
				return function( elem ) {
					return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
				};
			}),
	
			// "Whether an element is represented by a :lang() selector
			// is based solely on the element's language value
			// being equal to the identifier C,
			// or beginning with the identifier C immediately followed by "-".
			// The matching of C against the element's language value is performed case-insensitively.
			// The identifier C does not have to be a valid language name."
			// http://www.w3.org/TR/selectors/#lang-pseudo
			"lang": markFunction( function( lang ) {
				// lang value must be a valid identifier
				if ( !ridentifier.test(lang || "") ) {
					Sizzle.error( "unsupported lang: " + lang );
				}
				lang = lang.replace( runescape, funescape ).toLowerCase();
				return function( elem ) {
					var elemLang;
					do {
						if ( (elemLang = documentIsHTML ?
							elem.lang :
							elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {
	
							elemLang = elemLang.toLowerCase();
							return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
						}
					} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
					return false;
				};
			}),
	
			// Miscellaneous
			"target": function( elem ) {
				var hash = window.location && window.location.hash;
				return hash && hash.slice( 1 ) === elem.id;
			},
	
			"root": function( elem ) {
				return elem === docElem;
			},
	
			"focus": function( elem ) {
				return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
			},
	
			// Boolean properties
			"enabled": function( elem ) {
				return elem.disabled === false;
			},
	
			"disabled": function( elem ) {
				return elem.disabled === true;
			},
	
			"checked": function( elem ) {
				// In CSS3, :checked should return both checked and selected elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				var nodeName = elem.nodeName.toLowerCase();
				return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
			},
	
			"selected": function( elem ) {
				// Accessing this property makes selected-by-default
				// options in Safari work properly
				if ( elem.parentNode ) {
					elem.parentNode.selectedIndex;
				}
	
				return elem.selected === true;
			},
	
			// Contents
			"empty": function( elem ) {
				// http://www.w3.org/TR/selectors/#empty-pseudo
				// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
				//   but not by others (comment: 8; processing instruction: 7; etc.)
				// nodeType < 6 works because attributes (2) do not appear as children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					if ( elem.nodeType < 6 ) {
						return false;
					}
				}
				return true;
			},
	
			"parent": function( elem ) {
				return !Expr.pseudos["empty"]( elem );
			},
	
			// Element/input types
			"header": function( elem ) {
				return rheader.test( elem.nodeName );
			},
	
			"input": function( elem ) {
				return rinputs.test( elem.nodeName );
			},
	
			"button": function( elem ) {
				var name = elem.nodeName.toLowerCase();
				return name === "input" && elem.type === "button" || name === "button";
			},
	
			"text": function( elem ) {
				var attr;
				return elem.nodeName.toLowerCase() === "input" &&
					elem.type === "text" &&
	
					// Support: IE<8
					// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
					( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
			},
	
			// Position-in-collection
			"first": createPositionalPseudo(function() {
				return [ 0 ];
			}),
	
			"last": createPositionalPseudo(function( matchIndexes, length ) {
				return [ length - 1 ];
			}),
	
			"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
				return [ argument < 0 ? argument + length : argument ];
			}),
	
			"even": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 0;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),
	
			"odd": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 1;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),
	
			"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; --i >= 0; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),
	
			"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; ++i < length; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			})
		}
	};
	
	Expr.pseudos["nth"] = Expr.pseudos["eq"];
	
	// Add button/input type pseudos
	for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
		Expr.pseudos[ i ] = createInputPseudo( i );
	}
	for ( i in { submit: true, reset: true } ) {
		Expr.pseudos[ i ] = createButtonPseudo( i );
	}
	
	// Easy API for creating new setFilters
	function setFilters() {}
	setFilters.prototype = Expr.filters = Expr.pseudos;
	Expr.setFilters = new setFilters();
	
	tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
		var matched, match, tokens, type,
			soFar, groups, preFilters,
			cached = tokenCache[ selector + " " ];
	
		if ( cached ) {
			return parseOnly ? 0 : cached.slice( 0 );
		}
	
		soFar = selector;
		groups = [];
		preFilters = Expr.preFilter;
	
		while ( soFar ) {
	
			// Comma and first run
			if ( !matched || (match = rcomma.exec( soFar )) ) {
				if ( match ) {
					// Don't consume trailing commas as valid
					soFar = soFar.slice( match[0].length ) || soFar;
				}
				groups.push( (tokens = []) );
			}
	
			matched = false;
	
			// Combinators
			if ( (match = rcombinators.exec( soFar )) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					// Cast descendant combinators to space
					type: match[0].replace( rtrim, " " )
				});
				soFar = soFar.slice( matched.length );
			}
	
			// Filters
			for ( type in Expr.filter ) {
				if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
					(match = preFilters[ type ]( match ))) ) {
					matched = match.shift();
					tokens.push({
						value: matched,
						type: type,
						matches: match
					});
					soFar = soFar.slice( matched.length );
				}
			}
	
			if ( !matched ) {
				break;
			}
		}
	
		// Return the length of the invalid excess
		// if we're just parsing
		// Otherwise, throw an error or return tokens
		return parseOnly ?
			soFar.length :
			soFar ?
				Sizzle.error( selector ) :
				// Cache the tokens
				tokenCache( selector, groups ).slice( 0 );
	};
	
	function toSelector( tokens ) {
		var i = 0,
			len = tokens.length,
			selector = "";
		for ( ; i < len; i++ ) {
			selector += tokens[i].value;
		}
		return selector;
	}
	
	function addCombinator( matcher, combinator, base ) {
		var dir = combinator.dir,
			checkNonElements = base && dir === "parentNode",
			doneName = done++;
	
		return combinator.first ?
			// Check against closest ancestor/preceding element
			function( elem, context, xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						return matcher( elem, context, xml );
					}
				}
			} :
	
			// Check against all ancestor/preceding elements
			function( elem, context, xml ) {
				var oldCache, uniqueCache, outerCache,
					newCache = [ dirruns, doneName ];
	
				// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
				if ( xml ) {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							if ( matcher( elem, context, xml ) ) {
								return true;
							}
						}
					}
				} else {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							outerCache = elem[ expando ] || (elem[ expando ] = {});
	
							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});
	
							if ( (oldCache = uniqueCache[ dir ]) &&
								oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {
	
								// Assign to newCache so results back-propagate to previous elements
								return (newCache[ 2 ] = oldCache[ 2 ]);
							} else {
								// Reuse newcache so results back-propagate to previous elements
								uniqueCache[ dir ] = newCache;
	
								// A match means we're done; a fail means we have to keep checking
								if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
									return true;
								}
							}
						}
					}
				}
			};
	}
	
	function elementMatcher( matchers ) {
		return matchers.length > 1 ?
			function( elem, context, xml ) {
				var i = matchers.length;
				while ( i-- ) {
					if ( !matchers[i]( elem, context, xml ) ) {
						return false;
					}
				}
				return true;
			} :
			matchers[0];
	}
	
	function multipleContexts( selector, contexts, results ) {
		var i = 0,
			len = contexts.length;
		for ( ; i < len; i++ ) {
			Sizzle( selector, contexts[i], results );
		}
		return results;
	}
	
	function condense( unmatched, map, filter, context, xml ) {
		var elem,
			newUnmatched = [],
			i = 0,
			len = unmatched.length,
			mapped = map != null;
	
		for ( ; i < len; i++ ) {
			if ( (elem = unmatched[i]) ) {
				if ( !filter || filter( elem, context, xml ) ) {
					newUnmatched.push( elem );
					if ( mapped ) {
						map.push( i );
					}
				}
			}
		}
	
		return newUnmatched;
	}
	
	function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
		if ( postFilter && !postFilter[ expando ] ) {
			postFilter = setMatcher( postFilter );
		}
		if ( postFinder && !postFinder[ expando ] ) {
			postFinder = setMatcher( postFinder, postSelector );
		}
		return markFunction(function( seed, results, context, xml ) {
			var temp, i, elem,
				preMap = [],
				postMap = [],
				preexisting = results.length,
	
				// Get initial elements from seed or context
				elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),
	
				// Prefilter to get matcher input, preserving a map for seed-results synchronization
				matcherIn = preFilter && ( seed || !selector ) ?
					condense( elems, preMap, preFilter, context, xml ) :
					elems,
	
				matcherOut = matcher ?
					// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
					postFinder || ( seed ? preFilter : preexisting || postFilter ) ?
	
						// ...intermediate processing is necessary
						[] :
	
						// ...otherwise use results directly
						results :
					matcherIn;
	
			// Find primary matches
			if ( matcher ) {
				matcher( matcherIn, matcherOut, context, xml );
			}
	
			// Apply postFilter
			if ( postFilter ) {
				temp = condense( matcherOut, postMap );
				postFilter( temp, [], context, xml );
	
				// Un-match failing elements by moving them back to matcherIn
				i = temp.length;
				while ( i-- ) {
					if ( (elem = temp[i]) ) {
						matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
					}
				}
			}
	
			if ( seed ) {
				if ( postFinder || preFilter ) {
					if ( postFinder ) {
						// Get the final matcherOut by condensing this intermediate into postFinder contexts
						temp = [];
						i = matcherOut.length;
						while ( i-- ) {
							if ( (elem = matcherOut[i]) ) {
								// Restore matcherIn since elem is not yet a final match
								temp.push( (matcherIn[i] = elem) );
							}
						}
						postFinder( null, (matcherOut = []), temp, xml );
					}
	
					// Move matched elements from seed to results to keep them synchronized
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) &&
							(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {
	
							seed[temp] = !(results[temp] = elem);
						}
					}
				}
	
			// Add elements to results, through postFinder if defined
			} else {
				matcherOut = condense(
					matcherOut === results ?
						matcherOut.splice( preexisting, matcherOut.length ) :
						matcherOut
				);
				if ( postFinder ) {
					postFinder( null, results, matcherOut, xml );
				} else {
					push.apply( results, matcherOut );
				}
			}
		});
	}
	
	function matcherFromTokens( tokens ) {
		var checkContext, matcher, j,
			len = tokens.length,
			leadingRelative = Expr.relative[ tokens[0].type ],
			implicitRelative = leadingRelative || Expr.relative[" "],
			i = leadingRelative ? 1 : 0,
	
			// The foundational matcher ensures that elements are reachable from top-level context(s)
			matchContext = addCombinator( function( elem ) {
				return elem === checkContext;
			}, implicitRelative, true ),
			matchAnyContext = addCombinator( function( elem ) {
				return indexOf( checkContext, elem ) > -1;
			}, implicitRelative, true ),
			matchers = [ function( elem, context, xml ) {
				var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
					(checkContext = context).nodeType ?
						matchContext( elem, context, xml ) :
						matchAnyContext( elem, context, xml ) );
				// Avoid hanging onto element (issue #299)
				checkContext = null;
				return ret;
			} ];
	
		for ( ; i < len; i++ ) {
			if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
				matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
			} else {
				matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );
	
				// Return special upon seeing a positional matcher
				if ( matcher[ expando ] ) {
					// Find the next relative operator (if any) for proper handling
					j = ++i;
					for ( ; j < len; j++ ) {
						if ( Expr.relative[ tokens[j].type ] ) {
							break;
						}
					}
					return setMatcher(
						i > 1 && elementMatcher( matchers ),
						i > 1 && toSelector(
							// If the preceding token was a descendant combinator, insert an implicit any-element `*`
							tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
						).replace( rtrim, "$1" ),
						matcher,
						i < j && matcherFromTokens( tokens.slice( i, j ) ),
						j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
						j < len && toSelector( tokens )
					);
				}
				matchers.push( matcher );
			}
		}
	
		return elementMatcher( matchers );
	}
	
	function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
		var bySet = setMatchers.length > 0,
			byElement = elementMatchers.length > 0,
			superMatcher = function( seed, context, xml, results, outermost ) {
				var elem, j, matcher,
					matchedCount = 0,
					i = "0",
					unmatched = seed && [],
					setMatched = [],
					contextBackup = outermostContext,
					// We must always have either seed elements or outermost context
					elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
					// Use integer dirruns iff this is the outermost matcher
					dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
					len = elems.length;
	
				if ( outermost ) {
					outermostContext = context === document || context || outermost;
				}
	
				// Add elements passing elementMatchers directly to results
				// Support: IE<9, Safari
				// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
				for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
					if ( byElement && elem ) {
						j = 0;
						if ( !context && elem.ownerDocument !== document ) {
							setDocument( elem );
							xml = !documentIsHTML;
						}
						while ( (matcher = elementMatchers[j++]) ) {
							if ( matcher( elem, context || document, xml) ) {
								results.push( elem );
								break;
							}
						}
						if ( outermost ) {
							dirruns = dirrunsUnique;
						}
					}
	
					// Track unmatched elements for set filters
					if ( bySet ) {
						// They will have gone through all possible matchers
						if ( (elem = !matcher && elem) ) {
							matchedCount--;
						}
	
						// Lengthen the array for every element, matched or not
						if ( seed ) {
							unmatched.push( elem );
						}
					}
				}
	
				// `i` is now the count of elements visited above, and adding it to `matchedCount`
				// makes the latter nonnegative.
				matchedCount += i;
	
				// Apply set filters to unmatched elements
				// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
				// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
				// no element matchers and no seed.
				// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
				// case, which will result in a "00" `matchedCount` that differs from `i` but is also
				// numerically zero.
				if ( bySet && i !== matchedCount ) {
					j = 0;
					while ( (matcher = setMatchers[j++]) ) {
						matcher( unmatched, setMatched, context, xml );
					}
	
					if ( seed ) {
						// Reintegrate element matches to eliminate the need for sorting
						if ( matchedCount > 0 ) {
							while ( i-- ) {
								if ( !(unmatched[i] || setMatched[i]) ) {
									setMatched[i] = pop.call( results );
								}
							}
						}
	
						// Discard index placeholder values to get only actual matches
						setMatched = condense( setMatched );
					}
	
					// Add matches to results
					push.apply( results, setMatched );
	
					// Seedless set matches succeeding multiple successful matchers stipulate sorting
					if ( outermost && !seed && setMatched.length > 0 &&
						( matchedCount + setMatchers.length ) > 1 ) {
	
						Sizzle.uniqueSort( results );
					}
				}
	
				// Override manipulation of globals by nested matchers
				if ( outermost ) {
					dirruns = dirrunsUnique;
					outermostContext = contextBackup;
				}
	
				return unmatched;
			};
	
		return bySet ?
			markFunction( superMatcher ) :
			superMatcher;
	}
	
	compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
		var i,
			setMatchers = [],
			elementMatchers = [],
			cached = compilerCache[ selector + " " ];
	
		if ( !cached ) {
			// Generate a function of recursive functions that can be used to check each element
			if ( !match ) {
				match = tokenize( selector );
			}
			i = match.length;
			while ( i-- ) {
				cached = matcherFromTokens( match[i] );
				if ( cached[ expando ] ) {
					setMatchers.push( cached );
				} else {
					elementMatchers.push( cached );
				}
			}
	
			// Cache the compiled function
			cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );
	
			// Save selector and tokenization
			cached.selector = selector;
		}
		return cached;
	};
	
	/**
	 * A low-level selection function that works with Sizzle's compiled
	 *  selector functions
	 * @param {String|Function} selector A selector or a pre-compiled
	 *  selector function built with Sizzle.compile
	 * @param {Element} context
	 * @param {Array} [results]
	 * @param {Array} [seed] A set of elements to match against
	 */
	select = Sizzle.select = function( selector, context, results, seed ) {
		var i, tokens, token, type, find,
			compiled = typeof selector === "function" && selector,
			match = !seed && tokenize( (selector = compiled.selector || selector) );
	
		results = results || [];
	
		// Try to minimize operations if there is only one selector in the list and no seed
		// (the latter of which guarantees us context)
		if ( match.length === 1 ) {
	
			// Reduce context if the leading compound selector is an ID
			tokens = match[0] = match[0].slice( 0 );
			if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
					support.getById && context.nodeType === 9 && documentIsHTML &&
					Expr.relative[ tokens[1].type ] ) {
	
				context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
				if ( !context ) {
					return results;
	
				// Precompiled matchers will still verify ancestry, so step up a level
				} else if ( compiled ) {
					context = context.parentNode;
				}
	
				selector = selector.slice( tokens.shift().value.length );
			}
	
			// Fetch a seed set for right-to-left matching
			i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
			while ( i-- ) {
				token = tokens[i];
	
				// Abort if we hit a combinator
				if ( Expr.relative[ (type = token.type) ] ) {
					break;
				}
				if ( (find = Expr.find[ type ]) ) {
					// Search, expanding context for leading sibling combinators
					if ( (seed = find(
						token.matches[0].replace( runescape, funescape ),
						rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
					)) ) {
	
						// If seed is empty or no tokens remain, we can return early
						tokens.splice( i, 1 );
						selector = seed.length && toSelector( tokens );
						if ( !selector ) {
							push.apply( results, seed );
							return results;
						}
	
						break;
					}
				}
			}
		}
	
		// Compile and execute a filtering function if one is not provided
		// Provide `match` to avoid retokenization if we modified the selector above
		( compiled || compile( selector, match ) )(
			seed,
			context,
			!documentIsHTML,
			results,
			!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
		);
		return results;
	};
	
	// One-time assignments
	
	// Sort stability
	support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;
	
	// Support: Chrome 14-35+
	// Always assume duplicates if they aren't passed to the comparison function
	support.detectDuplicates = !!hasDuplicate;
	
	// Initialize against the default document
	setDocument();
	
	// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
	// Detached nodes confoundingly follow *each other*
	support.sortDetached = assert(function( div1 ) {
		// Should return 1, but returns 4 (following)
		return div1.compareDocumentPosition( document.createElement("div") ) & 1;
	});
	
	// Support: IE<8
	// Prevent attribute/property "interpolation"
	// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
	if ( !assert(function( div ) {
		div.innerHTML = "<a href='#'></a>";
		return div.firstChild.getAttribute("href") === "#" ;
	}) ) {
		addHandle( "type|href|height|width", function( elem, name, isXML ) {
			if ( !isXML ) {
				return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
			}
		});
	}
	
	// Support: IE<9
	// Use defaultValue in place of getAttribute("value")
	if ( !support.attributes || !assert(function( div ) {
		div.innerHTML = "<input/>";
		div.firstChild.setAttribute( "value", "" );
		return div.firstChild.getAttribute( "value" ) === "";
	}) ) {
		addHandle( "value", function( elem, name, isXML ) {
			if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
				return elem.defaultValue;
			}
		});
	}
	
	// Support: IE<9
	// Use getAttributeNode to fetch booleans when getAttribute lies
	if ( !assert(function( div ) {
		return div.getAttribute("disabled") == null;
	}) ) {
		addHandle( booleans, function( elem, name, isXML ) {
			var val;
			if ( !isXML ) {
				return elem[ name ] === true ? name.toLowerCase() :
						(val = elem.getAttributeNode( name )) && val.specified ?
						val.value :
					null;
			}
		});
	}
	
	return Sizzle;
	
	})( window );
	
	
	
	jQuery.find = Sizzle;
	jQuery.expr = Sizzle.selectors;
	jQuery.expr[ ":" ] = jQuery.expr.pseudos;
	jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
	jQuery.text = Sizzle.getText;
	jQuery.isXMLDoc = Sizzle.isXML;
	jQuery.contains = Sizzle.contains;
	
	
	
	var dir = function( elem, dir, until ) {
		var matched = [],
			truncate = until !== undefined;
	
		while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
			if ( elem.nodeType === 1 ) {
				if ( truncate && jQuery( elem ).is( until ) ) {
					break;
				}
				matched.push( elem );
			}
		}
		return matched;
	};
	
	
	var siblings = function( n, elem ) {
		var matched = [];
	
		for ( ; n; n = n.nextSibling ) {
			if ( n.nodeType === 1 && n !== elem ) {
				matched.push( n );
			}
		}
	
		return matched;
	};
	
	
	var rneedsContext = jQuery.expr.match.needsContext;
	
	var rsingleTag = ( /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/ );
	
	
	
	var risSimple = /^.[^:#\[\.,]*$/;
	
	// Implement the identical functionality for filter and not
	function winnow( elements, qualifier, not ) {
		if ( jQuery.isFunction( qualifier ) ) {
			return jQuery.grep( elements, function( elem, i ) {
				/* jshint -W018 */
				return !!qualifier.call( elem, i, elem ) !== not;
			} );
	
		}
	
		if ( qualifier.nodeType ) {
			return jQuery.grep( elements, function( elem ) {
				return ( elem === qualifier ) !== not;
			} );
	
		}
	
		if ( typeof qualifier === "string" ) {
			if ( risSimple.test( qualifier ) ) {
				return jQuery.filter( qualifier, elements, not );
			}
	
			qualifier = jQuery.filter( qualifier, elements );
		}
	
		return jQuery.grep( elements, function( elem ) {
			return ( jQuery.inArray( elem, qualifier ) > -1 ) !== not;
		} );
	}
	
	jQuery.filter = function( expr, elems, not ) {
		var elem = elems[ 0 ];
	
		if ( not ) {
			expr = ":not(" + expr + ")";
		}
	
		return elems.length === 1 && elem.nodeType === 1 ?
			jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :
			jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
				return elem.nodeType === 1;
			} ) );
	};
	
	jQuery.fn.extend( {
		find: function( selector ) {
			var i,
				ret = [],
				self = this,
				len = self.length;
	
			if ( typeof selector !== "string" ) {
				return this.pushStack( jQuery( selector ).filter( function() {
					for ( i = 0; i < len; i++ ) {
						if ( jQuery.contains( self[ i ], this ) ) {
							return true;
						}
					}
				} ) );
			}
	
			for ( i = 0; i < len; i++ ) {
				jQuery.find( selector, self[ i ], ret );
			}
	
			// Needed because $( selector, context ) becomes $( context ).find( selector )
			ret = this.pushStack( len > 1 ? jQuery.unique( ret ) : ret );
			ret.selector = this.selector ? this.selector + " " + selector : selector;
			return ret;
		},
		filter: function( selector ) {
			return this.pushStack( winnow( this, selector || [], false ) );
		},
		not: function( selector ) {
			return this.pushStack( winnow( this, selector || [], true ) );
		},
		is: function( selector ) {
			return !!winnow(
				this,
	
				// If this is a positional/relative selector, check membership in the returned set
				// so $("p:first").is("p:last") won't return true for a doc with two "p".
				typeof selector === "string" && rneedsContext.test( selector ) ?
					jQuery( selector ) :
					selector || [],
				false
			).length;
		}
	} );
	
	
	// Initialize a jQuery object
	
	
	// A central reference to the root jQuery(document)
	var rootjQuery,
	
		// A simple way to check for HTML strings
		// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
		// Strict HTML recognition (#11290: must start with <)
		rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
	
		init = jQuery.fn.init = function( selector, context, root ) {
			var match, elem;
	
			// HANDLE: $(""), $(null), $(undefined), $(false)
			if ( !selector ) {
				return this;
			}
	
			// init accepts an alternate rootjQuery
			// so migrate can support jQuery.sub (gh-2101)
			root = root || rootjQuery;
	
			// Handle HTML strings
			if ( typeof selector === "string" ) {
				if ( selector.charAt( 0 ) === "<" &&
					selector.charAt( selector.length - 1 ) === ">" &&
					selector.length >= 3 ) {
	
					// Assume that strings that start and end with <> are HTML and skip the regex check
					match = [ null, selector, null ];
	
				} else {
					match = rquickExpr.exec( selector );
				}
	
				// Match html or make sure no context is specified for #id
				if ( match && ( match[ 1 ] || !context ) ) {
	
					// HANDLE: $(html) -> $(array)
					if ( match[ 1 ] ) {
						context = context instanceof jQuery ? context[ 0 ] : context;
	
						// scripts is true for back-compat
						// Intentionally let the error be thrown if parseHTML is not present
						jQuery.merge( this, jQuery.parseHTML(
							match[ 1 ],
							context && context.nodeType ? context.ownerDocument || context : document,
							true
						) );
	
						// HANDLE: $(html, props)
						if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
							for ( match in context ) {
	
								// Properties of context are called as methods if possible
								if ( jQuery.isFunction( this[ match ] ) ) {
									this[ match ]( context[ match ] );
	
								// ...and otherwise set as attributes
								} else {
									this.attr( match, context[ match ] );
								}
							}
						}
	
						return this;
	
					// HANDLE: $(#id)
					} else {
						elem = document.getElementById( match[ 2 ] );
	
						// Check parentNode to catch when Blackberry 4.6 returns
						// nodes that are no longer in the document #6963
						if ( elem && elem.parentNode ) {
	
							// Handle the case where IE and Opera return items
							// by name instead of ID
							if ( elem.id !== match[ 2 ] ) {
								return rootjQuery.find( selector );
							}
	
							// Otherwise, we inject the element directly into the jQuery object
							this.length = 1;
							this[ 0 ] = elem;
						}
	
						this.context = document;
						this.selector = selector;
						return this;
					}
	
				// HANDLE: $(expr, $(...))
				} else if ( !context || context.jquery ) {
					return ( context || root ).find( selector );
	
				// HANDLE: $(expr, context)
				// (which is just equivalent to: $(context).find(expr)
				} else {
					return this.constructor( context ).find( selector );
				}
	
			// HANDLE: $(DOMElement)
			} else if ( selector.nodeType ) {
				this.context = this[ 0 ] = selector;
				this.length = 1;
				return this;
	
			// HANDLE: $(function)
			// Shortcut for document ready
			} else if ( jQuery.isFunction( selector ) ) {
				return typeof root.ready !== "undefined" ?
					root.ready( selector ) :
	
					// Execute immediately if ready is not present
					selector( jQuery );
			}
	
			if ( selector.selector !== undefined ) {
				this.selector = selector.selector;
				this.context = selector.context;
			}
	
			return jQuery.makeArray( selector, this );
		};
	
	// Give the init function the jQuery prototype for later instantiation
	init.prototype = jQuery.fn;
	
	// Initialize central reference
	rootjQuery = jQuery( document );
	
	
	var rparentsprev = /^(?:parents|prev(?:Until|All))/,
	
		// methods guaranteed to produce a unique set when starting from a unique set
		guaranteedUnique = {
			children: true,
			contents: true,
			next: true,
			prev: true
		};
	
	jQuery.fn.extend( {
		has: function( target ) {
			var i,
				targets = jQuery( target, this ),
				len = targets.length;
	
			return this.filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( this, targets[ i ] ) ) {
						return true;
					}
				}
			} );
		},
	
		closest: function( selectors, context ) {
			var cur,
				i = 0,
				l = this.length,
				matched = [],
				pos = rneedsContext.test( selectors ) || typeof selectors !== "string" ?
					jQuery( selectors, context || this.context ) :
					0;
	
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {
	
					// Always skip document fragments
					if ( cur.nodeType < 11 && ( pos ?
						pos.index( cur ) > -1 :
	
						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {
	
						matched.push( cur );
						break;
					}
				}
			}
	
			return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
		},
	
		// Determine the position of an element within
		// the matched set of elements
		index: function( elem ) {
	
			// No argument, return index in parent
			if ( !elem ) {
				return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
			}
	
			// index in selector
			if ( typeof elem === "string" ) {
				return jQuery.inArray( this[ 0 ], jQuery( elem ) );
			}
	
			// Locate the position of the desired element
			return jQuery.inArray(
	
				// If it receives a jQuery object, the first element is used
				elem.jquery ? elem[ 0 ] : elem, this );
		},
	
		add: function( selector, context ) {
			return this.pushStack(
				jQuery.uniqueSort(
					jQuery.merge( this.get(), jQuery( selector, context ) )
				)
			);
		},
	
		addBack: function( selector ) {
			return this.add( selector == null ?
				this.prevObject : this.prevObject.filter( selector )
			);
		}
	} );
	
	function sibling( cur, dir ) {
		do {
			cur = cur[ dir ];
		} while ( cur && cur.nodeType !== 1 );
	
		return cur;
	}
	
	jQuery.each( {
		parent: function( elem ) {
			var parent = elem.parentNode;
			return parent && parent.nodeType !== 11 ? parent : null;
		},
		parents: function( elem ) {
			return dir( elem, "parentNode" );
		},
		parentsUntil: function( elem, i, until ) {
			return dir( elem, "parentNode", until );
		},
		next: function( elem ) {
			return sibling( elem, "nextSibling" );
		},
		prev: function( elem ) {
			return sibling( elem, "previousSibling" );
		},
		nextAll: function( elem ) {
			return dir( elem, "nextSibling" );
		},
		prevAll: function( elem ) {
			return dir( elem, "previousSibling" );
		},
		nextUntil: function( elem, i, until ) {
			return dir( elem, "nextSibling", until );
		},
		prevUntil: function( elem, i, until ) {
			return dir( elem, "previousSibling", until );
		},
		siblings: function( elem ) {
			return siblings( ( elem.parentNode || {} ).firstChild, elem );
		},
		children: function( elem ) {
			return siblings( elem.firstChild );
		},
		contents: function( elem ) {
			return jQuery.nodeName( elem, "iframe" ) ?
				elem.contentDocument || elem.contentWindow.document :
				jQuery.merge( [], elem.childNodes );
		}
	}, function( name, fn ) {
		jQuery.fn[ name ] = function( until, selector ) {
			var ret = jQuery.map( this, fn, until );
	
			if ( name.slice( -5 ) !== "Until" ) {
				selector = until;
			}
	
			if ( selector && typeof selector === "string" ) {
				ret = jQuery.filter( selector, ret );
			}
	
			if ( this.length > 1 ) {
	
				// Remove duplicates
				if ( !guaranteedUnique[ name ] ) {
					ret = jQuery.uniqueSort( ret );
				}
	
				// Reverse order for parents* and prev-derivatives
				if ( rparentsprev.test( name ) ) {
					ret = ret.reverse();
				}
			}
	
			return this.pushStack( ret );
		};
	} );
	var rnotwhite = ( /\S+/g );
	
	
	
	// Convert String-formatted options into Object-formatted ones
	function createOptions( options ) {
		var object = {};
		jQuery.each( options.match( rnotwhite ) || [], function( _, flag ) {
			object[ flag ] = true;
		} );
		return object;
	}
	
	/*
	 * Create a callback list using the following parameters:
	 *
	 *	options: an optional list of space-separated options that will change how
	 *			the callback list behaves or a more traditional option object
	 *
	 * By default a callback list will act like an event callback list and can be
	 * "fired" multiple times.
	 *
	 * Possible options:
	 *
	 *	once:			will ensure the callback list can only be fired once (like a Deferred)
	 *
	 *	memory:			will keep track of previous values and will call any callback added
	 *					after the list has been fired right away with the latest "memorized"
	 *					values (like a Deferred)
	 *
	 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
	 *
	 *	stopOnFalse:	interrupt callings when a callback returns false
	 *
	 */
	jQuery.Callbacks = function( options ) {
	
		// Convert options from String-formatted to Object-formatted if needed
		// (we check in cache first)
		options = typeof options === "string" ?
			createOptions( options ) :
			jQuery.extend( {}, options );
	
		var // Flag to know if list is currently firing
			firing,
	
			// Last fire value for non-forgettable lists
			memory,
	
			// Flag to know if list was already fired
			fired,
	
			// Flag to prevent firing
			locked,
	
			// Actual callback list
			list = [],
	
			// Queue of execution data for repeatable lists
			queue = [],
	
			// Index of currently firing callback (modified by add/remove as needed)
			firingIndex = -1,
	
			// Fire callbacks
			fire = function() {
	
				// Enforce single-firing
				locked = options.once;
	
				// Execute callbacks for all pending executions,
				// respecting firingIndex overrides and runtime changes
				fired = firing = true;
				for ( ; queue.length; firingIndex = -1 ) {
					memory = queue.shift();
					while ( ++firingIndex < list.length ) {
	
						// Run callback and check for early termination
						if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
							options.stopOnFalse ) {
	
							// Jump to end and forget the data so .add doesn't re-fire
							firingIndex = list.length;
							memory = false;
						}
					}
				}
	
				// Forget the data if we're done with it
				if ( !options.memory ) {
					memory = false;
				}
	
				firing = false;
	
				// Clean up if we're done firing for good
				if ( locked ) {
	
					// Keep an empty list if we have data for future add calls
					if ( memory ) {
						list = [];
	
					// Otherwise, this object is spent
					} else {
						list = "";
					}
				}
			},
	
			// Actual Callbacks object
			self = {
	
				// Add a callback or a collection of callbacks to the list
				add: function() {
					if ( list ) {
	
						// If we have memory from a past run, we should fire after adding
						if ( memory && !firing ) {
							firingIndex = list.length - 1;
							queue.push( memory );
						}
	
						( function add( args ) {
							jQuery.each( args, function( _, arg ) {
								if ( jQuery.isFunction( arg ) ) {
									if ( !options.unique || !self.has( arg ) ) {
										list.push( arg );
									}
								} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {
	
									// Inspect recursively
									add( arg );
								}
							} );
						} )( arguments );
	
						if ( memory && !firing ) {
							fire();
						}
					}
					return this;
				},
	
				// Remove a callback from the list
				remove: function() {
					jQuery.each( arguments, function( _, arg ) {
						var index;
						while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
							list.splice( index, 1 );
	
							// Handle firing indexes
							if ( index <= firingIndex ) {
								firingIndex--;
							}
						}
					} );
					return this;
				},
	
				// Check if a given callback is in the list.
				// If no argument is given, return whether or not list has callbacks attached.
				has: function( fn ) {
					return fn ?
						jQuery.inArray( fn, list ) > -1 :
						list.length > 0;
				},
	
				// Remove all callbacks from the list
				empty: function() {
					if ( list ) {
						list = [];
					}
					return this;
				},
	
				// Disable .fire and .add
				// Abort any current/pending executions
				// Clear all callbacks and values
				disable: function() {
					locked = queue = [];
					list = memory = "";
					return this;
				},
				disabled: function() {
					return !list;
				},
	
				// Disable .fire
				// Also disable .add unless we have memory (since it would have no effect)
				// Abort any pending executions
				lock: function() {
					locked = true;
					if ( !memory ) {
						self.disable();
					}
					return this;
				},
				locked: function() {
					return !!locked;
				},
	
				// Call all callbacks with the given context and arguments
				fireWith: function( context, args ) {
					if ( !locked ) {
						args = args || [];
						args = [ context, args.slice ? args.slice() : args ];
						queue.push( args );
						if ( !firing ) {
							fire();
						}
					}
					return this;
				},
	
				// Call all the callbacks with the given arguments
				fire: function() {
					self.fireWith( this, arguments );
					return this;
				},
	
				// To know if the callbacks have already been called at least once
				fired: function() {
					return !!fired;
				}
			};
	
		return self;
	};
	
	
	jQuery.extend( {
	
		Deferred: function( func ) {
			var tuples = [
	
					// action, add listener, listener list, final state
					[ "resolve", "done", jQuery.Callbacks( "once memory" ), "resolved" ],
					[ "reject", "fail", jQuery.Callbacks( "once memory" ), "rejected" ],
					[ "notify", "progress", jQuery.Callbacks( "memory" ) ]
				],
				state = "pending",
				promise = {
					state: function() {
						return state;
					},
					always: function() {
						deferred.done( arguments ).fail( arguments );
						return this;
					},
					then: function( /* fnDone, fnFail, fnProgress */ ) {
						var fns = arguments;
						return jQuery.Deferred( function( newDefer ) {
							jQuery.each( tuples, function( i, tuple ) {
								var fn = jQuery.isFunction( fns[ i ] ) && fns[ i ];
	
								// deferred[ done | fail | progress ] for forwarding actions to newDefer
								deferred[ tuple[ 1 ] ]( function() {
									var returned = fn && fn.apply( this, arguments );
									if ( returned && jQuery.isFunction( returned.promise ) ) {
										returned.promise()
											.progress( newDefer.notify )
											.done( newDefer.resolve )
											.fail( newDefer.reject );
									} else {
										newDefer[ tuple[ 0 ] + "With" ](
											this === promise ? newDefer.promise() : this,
											fn ? [ returned ] : arguments
										);
									}
								} );
							} );
							fns = null;
						} ).promise();
					},
	
					// Get a promise for this deferred
					// If obj is provided, the promise aspect is added to the object
					promise: function( obj ) {
						return obj != null ? jQuery.extend( obj, promise ) : promise;
					}
				},
				deferred = {};
	
			// Keep pipe for back-compat
			promise.pipe = promise.then;
	
			// Add list-specific methods
			jQuery.each( tuples, function( i, tuple ) {
				var list = tuple[ 2 ],
					stateString = tuple[ 3 ];
	
				// promise[ done | fail | progress ] = list.add
				promise[ tuple[ 1 ] ] = list.add;
	
				// Handle state
				if ( stateString ) {
					list.add( function() {
	
						// state = [ resolved | rejected ]
						state = stateString;
	
					// [ reject_list | resolve_list ].disable; progress_list.lock
					}, tuples[ i ^ 1 ][ 2 ].disable, tuples[ 2 ][ 2 ].lock );
				}
	
				// deferred[ resolve | reject | notify ]
				deferred[ tuple[ 0 ] ] = function() {
					deferred[ tuple[ 0 ] + "With" ]( this === deferred ? promise : this, arguments );
					return this;
				};
				deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
			} );
	
			// Make the deferred a promise
			promise.promise( deferred );
	
			// Call given func if any
			if ( func ) {
				func.call( deferred, deferred );
			}
	
			// All done!
			return deferred;
		},
	
		// Deferred helper
		when: function( subordinate /* , ..., subordinateN */ ) {
			var i = 0,
				resolveValues = slice.call( arguments ),
				length = resolveValues.length,
	
				// the count of uncompleted subordinates
				remaining = length !== 1 ||
					( subordinate && jQuery.isFunction( subordinate.promise ) ) ? length : 0,
	
				// the master Deferred.
				// If resolveValues consist of only a single Deferred, just use that.
				deferred = remaining === 1 ? subordinate : jQuery.Deferred(),
	
				// Update function for both resolve and progress values
				updateFunc = function( i, contexts, values ) {
					return function( value ) {
						contexts[ i ] = this;
						values[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
						if ( values === progressValues ) {
							deferred.notifyWith( contexts, values );
	
						} else if ( !( --remaining ) ) {
							deferred.resolveWith( contexts, values );
						}
					};
				},
	
				progressValues, progressContexts, resolveContexts;
	
			// add listeners to Deferred subordinates; treat others as resolved
			if ( length > 1 ) {
				progressValues = new Array( length );
				progressContexts = new Array( length );
				resolveContexts = new Array( length );
				for ( ; i < length; i++ ) {
					if ( resolveValues[ i ] && jQuery.isFunction( resolveValues[ i ].promise ) ) {
						resolveValues[ i ].promise()
							.progress( updateFunc( i, progressContexts, progressValues ) )
							.done( updateFunc( i, resolveContexts, resolveValues ) )
							.fail( deferred.reject );
					} else {
						--remaining;
					}
				}
			}
	
			// if we're not waiting on anything, resolve the master
			if ( !remaining ) {
				deferred.resolveWith( resolveContexts, resolveValues );
			}
	
			return deferred.promise();
		}
	} );
	
	
	// The deferred used on DOM ready
	var readyList;
	
	jQuery.fn.ready = function( fn ) {
	
		// Add the callback
		jQuery.ready.promise().done( fn );
	
		return this;
	};
	
	jQuery.extend( {
	
		// Is the DOM ready to be used? Set to true once it occurs.
		isReady: false,
	
		// A counter to track how many items to wait for before
		// the ready event fires. See #6781
		readyWait: 1,
	
		// Hold (or release) the ready event
		holdReady: function( hold ) {
			if ( hold ) {
				jQuery.readyWait++;
			} else {
				jQuery.ready( true );
			}
		},
	
		// Handle when the DOM is ready
		ready: function( wait ) {
	
			// Abort if there are pending holds or we're already ready
			if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
				return;
			}
	
			// Remember that the DOM is ready
			jQuery.isReady = true;
	
			// If a normal DOM Ready event fired, decrement, and wait if need be
			if ( wait !== true && --jQuery.readyWait > 0 ) {
				return;
			}
	
			// If there are functions bound, to execute
			readyList.resolveWith( document, [ jQuery ] );
	
			// Trigger any bound ready events
			if ( jQuery.fn.triggerHandler ) {
				jQuery( document ).triggerHandler( "ready" );
				jQuery( document ).off( "ready" );
			}
		}
	} );
	
	/**
	 * Clean-up method for dom ready events
	 */
	function detach() {
		if ( document.addEventListener ) {
			document.removeEventListener( "DOMContentLoaded", completed );
			window.removeEventListener( "load", completed );
	
		} else {
			document.detachEvent( "onreadystatechange", completed );
			window.detachEvent( "onload", completed );
		}
	}
	
	/**
	 * The ready event handler and self cleanup method
	 */
	function completed() {
	
		// readyState === "complete" is good enough for us to call the dom ready in oldIE
		if ( document.addEventListener ||
			window.event.type === "load" ||
			document.readyState === "complete" ) {
	
			detach();
			jQuery.ready();
		}
	}
	
	jQuery.ready.promise = function( obj ) {
		if ( !readyList ) {
	
			readyList = jQuery.Deferred();
	
			// Catch cases where $(document).ready() is called
			// after the browser event has already occurred.
			// Support: IE6-10
			// Older IE sometimes signals "interactive" too soon
			if ( document.readyState === "complete" ||
				( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {
	
				// Handle it asynchronously to allow scripts the opportunity to delay ready
				window.setTimeout( jQuery.ready );
	
			// Standards-based browsers support DOMContentLoaded
			} else if ( document.addEventListener ) {
	
				// Use the handy event callback
				document.addEventListener( "DOMContentLoaded", completed );
	
				// A fallback to window.onload, that will always work
				window.addEventListener( "load", completed );
	
			// If IE event model is used
			} else {
	
				// Ensure firing before onload, maybe late but safe also for iframes
				document.attachEvent( "onreadystatechange", completed );
	
				// A fallback to window.onload, that will always work
				window.attachEvent( "onload", completed );
	
				// If IE and not a frame
				// continually check to see if the document is ready
				var top = false;
	
				try {
					top = window.frameElement == null && document.documentElement;
				} catch ( e ) {}
	
				if ( top && top.doScroll ) {
					( function doScrollCheck() {
						if ( !jQuery.isReady ) {
	
							try {
	
								// Use the trick by Diego Perini
								// http://javascript.nwbox.com/IEContentLoaded/
								top.doScroll( "left" );
							} catch ( e ) {
								return window.setTimeout( doScrollCheck, 50 );
							}
	
							// detach all dom ready events
							detach();
	
							// and execute any waiting functions
							jQuery.ready();
						}
					} )();
				}
			}
		}
		return readyList.promise( obj );
	};
	
	// Kick off the DOM ready check even if the user does not
	jQuery.ready.promise();
	
	
	
	
	// Support: IE<9
	// Iteration over object's inherited properties before its own
	var i;
	for ( i in jQuery( support ) ) {
		break;
	}
	support.ownFirst = i === "0";
	
	// Note: most support tests are defined in their respective modules.
	// false until the test is run
	support.inlineBlockNeedsLayout = false;
	
	// Execute ASAP in case we need to set body.style.zoom
	jQuery( function() {
	
		// Minified: var a,b,c,d
		var val, div, body, container;
	
		body = document.getElementsByTagName( "body" )[ 0 ];
		if ( !body || !body.style ) {
	
			// Return for frameset docs that don't have a body
			return;
		}
	
		// Setup
		div = document.createElement( "div" );
		container = document.createElement( "div" );
		container.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
		body.appendChild( container ).appendChild( div );
	
		if ( typeof div.style.zoom !== "undefined" ) {
	
			// Support: IE<8
			// Check if natively block-level elements act like inline-block
			// elements when setting their display to 'inline' and giving
			// them layout
			div.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1";
	
			support.inlineBlockNeedsLayout = val = div.offsetWidth === 3;
			if ( val ) {
	
				// Prevent IE 6 from affecting layout for positioned elements #11048
				// Prevent IE from shrinking the body in IE 7 mode #12869
				// Support: IE<8
				body.style.zoom = 1;
			}
		}
	
		body.removeChild( container );
	} );
	
	
	( function() {
		var div = document.createElement( "div" );
	
		// Support: IE<9
		support.deleteExpando = true;
		try {
			delete div.test;
		} catch ( e ) {
			support.deleteExpando = false;
		}
	
		// Null elements to avoid leaks in IE.
		div = null;
	} )();
	var acceptData = function( elem ) {
		var noData = jQuery.noData[ ( elem.nodeName + " " ).toLowerCase() ],
			nodeType = +elem.nodeType || 1;
	
		// Do not set data on non-element DOM nodes because it will not be cleared (#8335).
		return nodeType !== 1 && nodeType !== 9 ?
			false :
	
			// Nodes accept data unless otherwise specified; rejection can be conditional
			!noData || noData !== true && elem.getAttribute( "classid" ) === noData;
	};
	
	
	
	
	var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		rmultiDash = /([A-Z])/g;
	
	function dataAttr( elem, key, data ) {
	
		// If nothing was found internally, try to fetch any
		// data from the HTML5 data-* attribute
		if ( data === undefined && elem.nodeType === 1 ) {
	
			var name = "data-" + key.replace( rmultiDash, "-$1" ).toLowerCase();
	
			data = elem.getAttribute( name );
	
			if ( typeof data === "string" ) {
				try {
					data = data === "true" ? true :
						data === "false" ? false :
						data === "null" ? null :
	
						// Only convert to a number if it doesn't change the string
						+data + "" === data ? +data :
						rbrace.test( data ) ? jQuery.parseJSON( data ) :
						data;
				} catch ( e ) {}
	
				// Make sure we set the data so it isn't changed later
				jQuery.data( elem, key, data );
	
			} else {
				data = undefined;
			}
		}
	
		return data;
	}
	
	// checks a cache object for emptiness
	function isEmptyDataObject( obj ) {
		var name;
		for ( name in obj ) {
	
			// if the public data object is empty, the private is still empty
			if ( name === "data" && jQuery.isEmptyObject( obj[ name ] ) ) {
				continue;
			}
			if ( name !== "toJSON" ) {
				return false;
			}
		}
	
		return true;
	}
	
	function internalData( elem, name, data, pvt /* Internal Use Only */ ) {
		if ( !acceptData( elem ) ) {
			return;
		}
	
		var ret, thisCache,
			internalKey = jQuery.expando,
	
			// We have to handle DOM nodes and JS objects differently because IE6-7
			// can't GC object references properly across the DOM-JS boundary
			isNode = elem.nodeType,
	
			// Only DOM nodes need the global jQuery cache; JS object data is
			// attached directly to the object so GC can occur automatically
			cache = isNode ? jQuery.cache : elem,
	
			// Only defining an ID for JS objects if its cache already exists allows
			// the code to shortcut on the same path as a DOM node with no cache
			id = isNode ? elem[ internalKey ] : elem[ internalKey ] && internalKey;
	
		// Avoid doing any more work than we need to when trying to get data on an
		// object that has no data at all
		if ( ( !id || !cache[ id ] || ( !pvt && !cache[ id ].data ) ) &&
			data === undefined && typeof name === "string" ) {
			return;
		}
	
		if ( !id ) {
	
			// Only DOM nodes need a new unique ID for each element since their data
			// ends up in the global cache
			if ( isNode ) {
				id = elem[ internalKey ] = deletedIds.pop() || jQuery.guid++;
			} else {
				id = internalKey;
			}
		}
	
		if ( !cache[ id ] ) {
	
			// Avoid exposing jQuery metadata on plain JS objects when the object
			// is serialized using JSON.stringify
			cache[ id ] = isNode ? {} : { toJSON: jQuery.noop };
		}
	
		// An object can be passed to jQuery.data instead of a key/value pair; this gets
		// shallow copied over onto the existing cache
		if ( typeof name === "object" || typeof name === "function" ) {
			if ( pvt ) {
				cache[ id ] = jQuery.extend( cache[ id ], name );
			} else {
				cache[ id ].data = jQuery.extend( cache[ id ].data, name );
			}
		}
	
		thisCache = cache[ id ];
	
		// jQuery data() is stored in a separate object inside the object's internal data
		// cache in order to avoid key collisions between internal data and user-defined
		// data.
		if ( !pvt ) {
			if ( !thisCache.data ) {
				thisCache.data = {};
			}
	
			thisCache = thisCache.data;
		}
	
		if ( data !== undefined ) {
			thisCache[ jQuery.camelCase( name ) ] = data;
		}
	
		// Check for both converted-to-camel and non-converted data property names
		// If a data property was specified
		if ( typeof name === "string" ) {
	
			// First Try to find as-is property data
			ret = thisCache[ name ];
	
			// Test for null|undefined property data
			if ( ret == null ) {
	
				// Try to find the camelCased property
				ret = thisCache[ jQuery.camelCase( name ) ];
			}
		} else {
			ret = thisCache;
		}
	
		return ret;
	}
	
	function internalRemoveData( elem, name, pvt ) {
		if ( !acceptData( elem ) ) {
			return;
		}
	
		var thisCache, i,
			isNode = elem.nodeType,
	
			// See jQuery.data for more information
			cache = isNode ? jQuery.cache : elem,
			id = isNode ? elem[ jQuery.expando ] : jQuery.expando;
	
		// If there is already no cache entry for this object, there is no
		// purpose in continuing
		if ( !cache[ id ] ) {
			return;
		}
	
		if ( name ) {
	
			thisCache = pvt ? cache[ id ] : cache[ id ].data;
	
			if ( thisCache ) {
	
				// Support array or space separated string names for data keys
				if ( !jQuery.isArray( name ) ) {
	
					// try the string as a key before any manipulation
					if ( name in thisCache ) {
						name = [ name ];
					} else {
	
						// split the camel cased version by spaces unless a key with the spaces exists
						name = jQuery.camelCase( name );
						if ( name in thisCache ) {
							name = [ name ];
						} else {
							name = name.split( " " );
						}
					}
				} else {
	
					// If "name" is an array of keys...
					// When data is initially created, via ("key", "val") signature,
					// keys will be converted to camelCase.
					// Since there is no way to tell _how_ a key was added, remove
					// both plain key and camelCase key. #12786
					// This will only penalize the array argument path.
					name = name.concat( jQuery.map( name, jQuery.camelCase ) );
				}
	
				i = name.length;
				while ( i-- ) {
					delete thisCache[ name[ i ] ];
				}
	
				// If there is no data left in the cache, we want to continue
				// and let the cache object itself get destroyed
				if ( pvt ? !isEmptyDataObject( thisCache ) : !jQuery.isEmptyObject( thisCache ) ) {
					return;
				}
			}
		}
	
		// See jQuery.data for more information
		if ( !pvt ) {
			delete cache[ id ].data;
	
			// Don't destroy the parent cache unless the internal data object
			// had been the only thing left in it
			if ( !isEmptyDataObject( cache[ id ] ) ) {
				return;
			}
		}
	
		// Destroy the cache
		if ( isNode ) {
			jQuery.cleanData( [ elem ], true );
	
		// Use delete when supported for expandos or `cache` is not a window per isWindow (#10080)
		/* jshint eqeqeq: false */
		} else if ( support.deleteExpando || cache != cache.window ) {
			/* jshint eqeqeq: true */
			delete cache[ id ];
	
		// When all else fails, undefined
		} else {
			cache[ id ] = undefined;
		}
	}
	
	jQuery.extend( {
		cache: {},
	
		// The following elements (space-suffixed to avoid Object.prototype collisions)
		// throw uncatchable exceptions if you attempt to set expando properties
		noData: {
			"applet ": true,
			"embed ": true,
	
			// ...but Flash objects (which have this classid) *can* handle expandos
			"object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
		},
	
		hasData: function( elem ) {
			elem = elem.nodeType ? jQuery.cache[ elem[ jQuery.expando ] ] : elem[ jQuery.expando ];
			return !!elem && !isEmptyDataObject( elem );
		},
	
		data: function( elem, name, data ) {
			return internalData( elem, name, data );
		},
	
		removeData: function( elem, name ) {
			return internalRemoveData( elem, name );
		},
	
		// For internal use only.
		_data: function( elem, name, data ) {
			return internalData( elem, name, data, true );
		},
	
		_removeData: function( elem, name ) {
			return internalRemoveData( elem, name, true );
		}
	} );
	
	jQuery.fn.extend( {
		data: function( key, value ) {
			var i, name, data,
				elem = this[ 0 ],
				attrs = elem && elem.attributes;
	
			// Special expections of .data basically thwart jQuery.access,
			// so implement the relevant behavior ourselves
	
			// Gets all values
			if ( key === undefined ) {
				if ( this.length ) {
					data = jQuery.data( elem );
	
					if ( elem.nodeType === 1 && !jQuery._data( elem, "parsedAttrs" ) ) {
						i = attrs.length;
						while ( i-- ) {
	
							// Support: IE11+
							// The attrs elements can be null (#14894)
							if ( attrs[ i ] ) {
								name = attrs[ i ].name;
								if ( name.indexOf( "data-" ) === 0 ) {
									name = jQuery.camelCase( name.slice( 5 ) );
									dataAttr( elem, name, data[ name ] );
								}
							}
						}
						jQuery._data( elem, "parsedAttrs", true );
					}
				}
	
				return data;
			}
	
			// Sets multiple values
			if ( typeof key === "object" ) {
				return this.each( function() {
					jQuery.data( this, key );
				} );
			}
	
			return arguments.length > 1 ?
	
				// Sets one value
				this.each( function() {
					jQuery.data( this, key, value );
				} ) :
	
				// Gets one value
				// Try to fetch any internally stored data first
				elem ? dataAttr( elem, key, jQuery.data( elem, key ) ) : undefined;
		},
	
		removeData: function( key ) {
			return this.each( function() {
				jQuery.removeData( this, key );
			} );
		}
	} );
	
	
	jQuery.extend( {
		queue: function( elem, type, data ) {
			var queue;
	
			if ( elem ) {
				type = ( type || "fx" ) + "queue";
				queue = jQuery._data( elem, type );
	
				// Speed up dequeue by getting out quickly if this is just a lookup
				if ( data ) {
					if ( !queue || jQuery.isArray( data ) ) {
						queue = jQuery._data( elem, type, jQuery.makeArray( data ) );
					} else {
						queue.push( data );
					}
				}
				return queue || [];
			}
		},
	
		dequeue: function( elem, type ) {
			type = type || "fx";
	
			var queue = jQuery.queue( elem, type ),
				startLength = queue.length,
				fn = queue.shift(),
				hooks = jQuery._queueHooks( elem, type ),
				next = function() {
					jQuery.dequeue( elem, type );
				};
	
			// If the fx queue is dequeued, always remove the progress sentinel
			if ( fn === "inprogress" ) {
				fn = queue.shift();
				startLength--;
			}
	
			if ( fn ) {
	
				// Add a progress sentinel to prevent the fx queue from being
				// automatically dequeued
				if ( type === "fx" ) {
					queue.unshift( "inprogress" );
				}
	
				// clear up the last queue stop function
				delete hooks.stop;
				fn.call( elem, next, hooks );
			}
	
			if ( !startLength && hooks ) {
				hooks.empty.fire();
			}
		},
	
		// not intended for public consumption - generates a queueHooks object,
		// or returns the current one
		_queueHooks: function( elem, type ) {
			var key = type + "queueHooks";
			return jQuery._data( elem, key ) || jQuery._data( elem, key, {
				empty: jQuery.Callbacks( "once memory" ).add( function() {
					jQuery._removeData( elem, type + "queue" );
					jQuery._removeData( elem, key );
				} )
			} );
		}
	} );
	
	jQuery.fn.extend( {
		queue: function( type, data ) {
			var setter = 2;
	
			if ( typeof type !== "string" ) {
				data = type;
				type = "fx";
				setter--;
			}
	
			if ( arguments.length < setter ) {
				return jQuery.queue( this[ 0 ], type );
			}
	
			return data === undefined ?
				this :
				this.each( function() {
					var queue = jQuery.queue( this, type, data );
	
					// ensure a hooks for this queue
					jQuery._queueHooks( this, type );
	
					if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
						jQuery.dequeue( this, type );
					}
				} );
		},
		dequeue: function( type ) {
			return this.each( function() {
				jQuery.dequeue( this, type );
			} );
		},
		clearQueue: function( type ) {
			return this.queue( type || "fx", [] );
		},
	
		// Get a promise resolved when queues of a certain type
		// are emptied (fx is the type by default)
		promise: function( type, obj ) {
			var tmp,
				count = 1,
				defer = jQuery.Deferred(),
				elements = this,
				i = this.length,
				resolve = function() {
					if ( !( --count ) ) {
						defer.resolveWith( elements, [ elements ] );
					}
				};
	
			if ( typeof type !== "string" ) {
				obj = type;
				type = undefined;
			}
			type = type || "fx";
	
			while ( i-- ) {
				tmp = jQuery._data( elements[ i ], type + "queueHooks" );
				if ( tmp && tmp.empty ) {
					count++;
					tmp.empty.add( resolve );
				}
			}
			resolve();
			return defer.promise( obj );
		}
	} );
	
	
	( function() {
		var shrinkWrapBlocksVal;
	
		support.shrinkWrapBlocks = function() {
			if ( shrinkWrapBlocksVal != null ) {
				return shrinkWrapBlocksVal;
			}
	
			// Will be changed later if needed.
			shrinkWrapBlocksVal = false;
	
			// Minified: var b,c,d
			var div, body, container;
	
			body = document.getElementsByTagName( "body" )[ 0 ];
			if ( !body || !body.style ) {
	
				// Test fired too early or in an unsupported environment, exit.
				return;
			}
	
			// Setup
			div = document.createElement( "div" );
			container = document.createElement( "div" );
			container.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
			body.appendChild( container ).appendChild( div );
	
			// Support: IE6
			// Check if elements with layout shrink-wrap their children
			if ( typeof div.style.zoom !== "undefined" ) {
	
				// Reset CSS: box-sizing; display; margin; border
				div.style.cssText =
	
					// Support: Firefox<29, Android 2.3
					// Vendor-prefix box-sizing
					"-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" +
					"box-sizing:content-box;display:block;margin:0;border:0;" +
					"padding:1px;width:1px;zoom:1";
				div.appendChild( document.createElement( "div" ) ).style.width = "5px";
				shrinkWrapBlocksVal = div.offsetWidth !== 3;
			}
	
			body.removeChild( container );
	
			return shrinkWrapBlocksVal;
		};
	
	} )();
	var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;
	
	var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );
	
	
	var cssExpand = [ "Top", "Right", "Bottom", "Left" ];
	
	var isHidden = function( elem, el ) {
	
			// isHidden might be called from jQuery#filter function;
			// in that case, element will be second argument
			elem = el || elem;
			return jQuery.css( elem, "display" ) === "none" ||
				!jQuery.contains( elem.ownerDocument, elem );
		};
	
	
	
	function adjustCSS( elem, prop, valueParts, tween ) {
		var adjusted,
			scale = 1,
			maxIterations = 20,
			currentValue = tween ?
				function() { return tween.cur(); } :
				function() { return jQuery.css( elem, prop, "" ); },
			initial = currentValue(),
			unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),
	
			// Starting value computation is required for potential unit mismatches
			initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
				rcssNum.exec( jQuery.css( elem, prop ) );
	
		if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {
	
			// Trust units reported by jQuery.css
			unit = unit || initialInUnit[ 3 ];
	
			// Make sure we update the tween properties later on
			valueParts = valueParts || [];
	
			// Iteratively approximate from a nonzero starting point
			initialInUnit = +initial || 1;
	
			do {
	
				// If previous iteration zeroed out, double until we get *something*.
				// Use string for doubling so we don't accidentally see scale as unchanged below
				scale = scale || ".5";
	
				// Adjust and apply
				initialInUnit = initialInUnit / scale;
				jQuery.style( elem, prop, initialInUnit + unit );
	
			// Update scale, tolerating zero or NaN from tween.cur()
			// Break the loop if scale is unchanged or perfect, or if we've just had enough.
			} while (
				scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
			);
		}
	
		if ( valueParts ) {
			initialInUnit = +initialInUnit || +initial || 0;
	
			// Apply relative offset (+=/-=) if specified
			adjusted = valueParts[ 1 ] ?
				initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
				+valueParts[ 2 ];
			if ( tween ) {
				tween.unit = unit;
				tween.start = initialInUnit;
				tween.end = adjusted;
			}
		}
		return adjusted;
	}
	
	
	// Multifunctional method to get and set values of a collection
	// The value/s can optionally be executed if it's a function
	var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
		var i = 0,
			length = elems.length,
			bulk = key == null;
	
		// Sets many values
		if ( jQuery.type( key ) === "object" ) {
			chainable = true;
			for ( i in key ) {
				access( elems, fn, i, key[ i ], true, emptyGet, raw );
			}
	
		// Sets one value
		} else if ( value !== undefined ) {
			chainable = true;
	
			if ( !jQuery.isFunction( value ) ) {
				raw = true;
			}
	
			if ( bulk ) {
	
				// Bulk operations run against the entire set
				if ( raw ) {
					fn.call( elems, value );
					fn = null;
	
				// ...except when executing function values
				} else {
					bulk = fn;
					fn = function( elem, key, value ) {
						return bulk.call( jQuery( elem ), value );
					};
				}
			}
	
			if ( fn ) {
				for ( ; i < length; i++ ) {
					fn(
						elems[ i ],
						key,
						raw ? value : value.call( elems[ i ], i, fn( elems[ i ], key ) )
					);
				}
			}
		}
	
		return chainable ?
			elems :
	
			// Gets
			bulk ?
				fn.call( elems ) :
				length ? fn( elems[ 0 ], key ) : emptyGet;
	};
	var rcheckableType = ( /^(?:checkbox|radio)$/i );
	
	var rtagName = ( /<([\w:-]+)/ );
	
	var rscriptType = ( /^$|\/(?:java|ecma)script/i );
	
	var rleadingWhitespace = ( /^\s+/ );
	
	var nodeNames = "abbr|article|aside|audio|bdi|canvas|data|datalist|" +
			"details|dialog|figcaption|figure|footer|header|hgroup|main|" +
			"mark|meter|nav|output|picture|progress|section|summary|template|time|video";
	
	
	
	function createSafeFragment( document ) {
		var list = nodeNames.split( "|" ),
			safeFrag = document.createDocumentFragment();
	
		if ( safeFrag.createElement ) {
			while ( list.length ) {
				safeFrag.createElement(
					list.pop()
				);
			}
		}
		return safeFrag;
	}
	
	
	( function() {
		var div = document.createElement( "div" ),
			fragment = document.createDocumentFragment(),
			input = document.createElement( "input" );
	
		// Setup
		div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
	
		// IE strips leading whitespace when .innerHTML is used
		support.leadingWhitespace = div.firstChild.nodeType === 3;
	
		// Make sure that tbody elements aren't automatically inserted
		// IE will insert them into empty tables
		support.tbody = !div.getElementsByTagName( "tbody" ).length;
	
		// Make sure that link elements get serialized correctly by innerHTML
		// This requires a wrapper element in IE
		support.htmlSerialize = !!div.getElementsByTagName( "link" ).length;
	
		// Makes sure cloning an html5 element does not cause problems
		// Where outerHTML is undefined, this still works
		support.html5Clone =
			document.createElement( "nav" ).cloneNode( true ).outerHTML !== "<:nav></:nav>";
	
		// Check if a disconnected checkbox will retain its checked
		// value of true after appended to the DOM (IE6/7)
		input.type = "checkbox";
		input.checked = true;
		fragment.appendChild( input );
		support.appendChecked = input.checked;
	
		// Make sure textarea (and checkbox) defaultValue is properly cloned
		// Support: IE6-IE11+
		div.innerHTML = "<textarea>x</textarea>";
		support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
	
		// #11217 - WebKit loses check when the name is after the checked attribute
		fragment.appendChild( div );
	
		// Support: Windows Web Apps (WWA)
		// `name` and `type` must use .setAttribute for WWA (#14901)
		input = document.createElement( "input" );
		input.setAttribute( "type", "radio" );
		input.setAttribute( "checked", "checked" );
		input.setAttribute( "name", "t" );
	
		div.appendChild( input );
	
		// Support: Safari 5.1, iOS 5.1, Android 4.x, Android 2.3
		// old WebKit doesn't clone checked state correctly in fragments
		support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;
	
		// Support: IE<9
		// Cloned elements keep attachEvent handlers, we use addEventListener on IE9+
		support.noCloneEvent = !!div.addEventListener;
	
		// Support: IE<9
		// Since attributes and properties are the same in IE,
		// cleanData must set properties to undefined rather than use removeAttribute
		div[ jQuery.expando ] = 1;
		support.attributes = !div.getAttribute( jQuery.expando );
	} )();
	
	
	// We have to close these tags to support XHTML (#13200)
	var wrapMap = {
		option: [ 1, "<select multiple='multiple'>", "</select>" ],
		legend: [ 1, "<fieldset>", "</fieldset>" ],
		area: [ 1, "<map>", "</map>" ],
	
		// Support: IE8
		param: [ 1, "<object>", "</object>" ],
		thead: [ 1, "<table>", "</table>" ],
		tr: [ 2, "<table><tbody>", "</tbody></table>" ],
		col: [ 2, "<table><tbody></tbody><colgroup>", "</colgroup></table>" ],
		td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],
	
		// IE6-8 can't serialize link, script, style, or any html5 (NoScope) tags,
		// unless wrapped in a div with non-breaking characters in front of it.
		_default: support.htmlSerialize ? [ 0, "", "" ] : [ 1, "X<div>", "</div>" ]
	};
	
	// Support: IE8-IE9
	wrapMap.optgroup = wrapMap.option;
	
	wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
	wrapMap.th = wrapMap.td;
	
	
	function getAll( context, tag ) {
		var elems, elem,
			i = 0,
			found = typeof context.getElementsByTagName !== "undefined" ?
				context.getElementsByTagName( tag || "*" ) :
				typeof context.querySelectorAll !== "undefined" ?
					context.querySelectorAll( tag || "*" ) :
					undefined;
	
		if ( !found ) {
			for ( found = [], elems = context.childNodes || context;
				( elem = elems[ i ] ) != null;
				i++
			) {
				if ( !tag || jQuery.nodeName( elem, tag ) ) {
					found.push( elem );
				} else {
					jQuery.merge( found, getAll( elem, tag ) );
				}
			}
		}
	
		return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
			jQuery.merge( [ context ], found ) :
			found;
	}
	
	
	// Mark scripts as having already been evaluated
	function setGlobalEval( elems, refElements ) {
		var elem,
			i = 0;
		for ( ; ( elem = elems[ i ] ) != null; i++ ) {
			jQuery._data(
				elem,
				"globalEval",
				!refElements || jQuery._data( refElements[ i ], "globalEval" )
			);
		}
	}
	
	
	var rhtml = /<|&#?\w+;/,
		rtbody = /<tbody/i;
	
	function fixDefaultChecked( elem ) {
		if ( rcheckableType.test( elem.type ) ) {
			elem.defaultChecked = elem.checked;
		}
	}
	
	function buildFragment( elems, context, scripts, selection, ignored ) {
		var j, elem, contains,
			tmp, tag, tbody, wrap,
			l = elems.length,
	
			// Ensure a safe fragment
			safe = createSafeFragment( context ),
	
			nodes = [],
			i = 0;
	
		for ( ; i < l; i++ ) {
			elem = elems[ i ];
	
			if ( elem || elem === 0 ) {
	
				// Add nodes directly
				if ( jQuery.type( elem ) === "object" ) {
					jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );
	
				// Convert non-html into a text node
				} else if ( !rhtml.test( elem ) ) {
					nodes.push( context.createTextNode( elem ) );
	
				// Convert html into DOM nodes
				} else {
					tmp = tmp || safe.appendChild( context.createElement( "div" ) );
	
					// Deserialize a standard representation
					tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
					wrap = wrapMap[ tag ] || wrapMap._default;
	
					tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];
	
					// Descend through wrappers to the right content
					j = wrap[ 0 ];
					while ( j-- ) {
						tmp = tmp.lastChild;
					}
	
					// Manually add leading whitespace removed by IE
					if ( !support.leadingWhitespace && rleadingWhitespace.test( elem ) ) {
						nodes.push( context.createTextNode( rleadingWhitespace.exec( elem )[ 0 ] ) );
					}
	
					// Remove IE's autoinserted <tbody> from table fragments
					if ( !support.tbody ) {
	
						// String was a <table>, *may* have spurious <tbody>
						elem = tag === "table" && !rtbody.test( elem ) ?
							tmp.firstChild :
	
							// String was a bare <thead> or <tfoot>
							wrap[ 1 ] === "<table>" && !rtbody.test( elem ) ?
								tmp :
								0;
	
						j = elem && elem.childNodes.length;
						while ( j-- ) {
							if ( jQuery.nodeName( ( tbody = elem.childNodes[ j ] ), "tbody" ) &&
								!tbody.childNodes.length ) {
	
								elem.removeChild( tbody );
							}
						}
					}
	
					jQuery.merge( nodes, tmp.childNodes );
	
					// Fix #12392 for WebKit and IE > 9
					tmp.textContent = "";
	
					// Fix #12392 for oldIE
					while ( tmp.firstChild ) {
						tmp.removeChild( tmp.firstChild );
					}
	
					// Remember the top-level container for proper cleanup
					tmp = safe.lastChild;
				}
			}
		}
	
		// Fix #11356: Clear elements from fragment
		if ( tmp ) {
			safe.removeChild( tmp );
		}
	
		// Reset defaultChecked for any radios and checkboxes
		// about to be appended to the DOM in IE 6/7 (#8060)
		if ( !support.appendChecked ) {
			jQuery.grep( getAll( nodes, "input" ), fixDefaultChecked );
		}
	
		i = 0;
		while ( ( elem = nodes[ i++ ] ) ) {
	
			// Skip elements already in the context collection (trac-4087)
			if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
				if ( ignored ) {
					ignored.push( elem );
				}
	
				continue;
			}
	
			contains = jQuery.contains( elem.ownerDocument, elem );
	
			// Append to fragment
			tmp = getAll( safe.appendChild( elem ), "script" );
	
			// Preserve script evaluation history
			if ( contains ) {
				setGlobalEval( tmp );
			}
	
			// Capture executables
			if ( scripts ) {
				j = 0;
				while ( ( elem = tmp[ j++ ] ) ) {
					if ( rscriptType.test( elem.type || "" ) ) {
						scripts.push( elem );
					}
				}
			}
		}
	
		tmp = null;
	
		return safe;
	}
	
	
	( function() {
		var i, eventName,
			div = document.createElement( "div" );
	
		// Support: IE<9 (lack submit/change bubble), Firefox (lack focus(in | out) events)
		for ( i in { submit: true, change: true, focusin: true } ) {
			eventName = "on" + i;
	
			if ( !( support[ i ] = eventName in window ) ) {
	
				// Beware of CSP restrictions (https://developer.mozilla.org/en/Security/CSP)
				div.setAttribute( eventName, "t" );
				support[ i ] = div.attributes[ eventName ].expando === false;
			}
		}
	
		// Null elements to avoid leaks in IE.
		div = null;
	} )();
	
	
	var rformElems = /^(?:input|select|textarea)$/i,
		rkeyEvent = /^key/,
		rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
		rtypenamespace = /^([^.]*)(?:\.(.+)|)/;
	
	function returnTrue() {
		return true;
	}
	
	function returnFalse() {
		return false;
	}
	
	// Support: IE9
	// See #13393 for more info
	function safeActiveElement() {
		try {
			return document.activeElement;
		} catch ( err ) { }
	}
	
	function on( elem, types, selector, data, fn, one ) {
		var origFn, type;
	
		// Types can be a map of types/handlers
		if ( typeof types === "object" ) {
	
			// ( types-Object, selector, data )
			if ( typeof selector !== "string" ) {
	
				// ( types-Object, data )
				data = data || selector;
				selector = undefined;
			}
			for ( type in types ) {
				on( elem, type, selector, data, types[ type ], one );
			}
			return elem;
		}
	
		if ( data == null && fn == null ) {
	
			// ( types, fn )
			fn = selector;
			data = selector = undefined;
		} else if ( fn == null ) {
			if ( typeof selector === "string" ) {
	
				// ( types, selector, fn )
				fn = data;
				data = undefined;
			} else {
	
				// ( types, data, fn )
				fn = data;
				data = selector;
				selector = undefined;
			}
		}
		if ( fn === false ) {
			fn = returnFalse;
		} else if ( !fn ) {
			return elem;
		}
	
		if ( one === 1 ) {
			origFn = fn;
			fn = function( event ) {
	
				// Can use an empty set, since event contains the info
				jQuery().off( event );
				return origFn.apply( this, arguments );
			};
	
			// Use same guid so caller can remove using origFn
			fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
		}
		return elem.each( function() {
			jQuery.event.add( this, types, fn, data, selector );
		} );
	}
	
	/*
	 * Helper functions for managing events -- not part of the public interface.
	 * Props to Dean Edwards' addEvent library for many of the ideas.
	 */
	jQuery.event = {
	
		global: {},
	
		add: function( elem, types, handler, data, selector ) {
			var tmp, events, t, handleObjIn,
				special, eventHandle, handleObj,
				handlers, type, namespaces, origType,
				elemData = jQuery._data( elem );
	
			// Don't attach events to noData or text/comment nodes (but allow plain objects)
			if ( !elemData ) {
				return;
			}
	
			// Caller can pass in an object of custom data in lieu of the handler
			if ( handler.handler ) {
				handleObjIn = handler;
				handler = handleObjIn.handler;
				selector = handleObjIn.selector;
			}
	
			// Make sure that the handler has a unique ID, used to find/remove it later
			if ( !handler.guid ) {
				handler.guid = jQuery.guid++;
			}
	
			// Init the element's event structure and main handler, if this is the first
			if ( !( events = elemData.events ) ) {
				events = elemData.events = {};
			}
			if ( !( eventHandle = elemData.handle ) ) {
				eventHandle = elemData.handle = function( e ) {
	
					// Discard the second event of a jQuery.event.trigger() and
					// when an event is called after a page has unloaded
					return typeof jQuery !== "undefined" &&
						( !e || jQuery.event.triggered !== e.type ) ?
						jQuery.event.dispatch.apply( eventHandle.elem, arguments ) :
						undefined;
				};
	
				// Add elem as a property of the handle fn to prevent a memory leak
				// with IE non-native events
				eventHandle.elem = elem;
			}
	
			// Handle multiple events separated by a space
			types = ( types || "" ).match( rnotwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();
	
				// There *must* be a type, no attaching namespace-only handlers
				if ( !type ) {
					continue;
				}
	
				// If event changes its type, use the special event handlers for the changed type
				special = jQuery.event.special[ type ] || {};
	
				// If selector defined, determine special event api type, otherwise given type
				type = ( selector ? special.delegateType : special.bindType ) || type;
	
				// Update special based on newly reset type
				special = jQuery.event.special[ type ] || {};
	
				// handleObj is passed to all event handlers
				handleObj = jQuery.extend( {
					type: type,
					origType: origType,
					data: data,
					handler: handler,
					guid: handler.guid,
					selector: selector,
					needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
					namespace: namespaces.join( "." )
				}, handleObjIn );
	
				// Init the event handler queue if we're the first
				if ( !( handlers = events[ type ] ) ) {
					handlers = events[ type ] = [];
					handlers.delegateCount = 0;
	
					// Only use addEventListener/attachEvent if the special events handler returns false
					if ( !special.setup ||
						special.setup.call( elem, data, namespaces, eventHandle ) === false ) {
	
						// Bind the global event handler to the element
						if ( elem.addEventListener ) {
							elem.addEventListener( type, eventHandle, false );
	
						} else if ( elem.attachEvent ) {
							elem.attachEvent( "on" + type, eventHandle );
						}
					}
				}
	
				if ( special.add ) {
					special.add.call( elem, handleObj );
	
					if ( !handleObj.handler.guid ) {
						handleObj.handler.guid = handler.guid;
					}
				}
	
				// Add to the element's handler list, delegates in front
				if ( selector ) {
					handlers.splice( handlers.delegateCount++, 0, handleObj );
				} else {
					handlers.push( handleObj );
				}
	
				// Keep track of which events have ever been used, for event optimization
				jQuery.event.global[ type ] = true;
			}
	
			// Nullify elem to prevent memory leaks in IE
			elem = null;
		},
	
		// Detach an event or set of events from an element
		remove: function( elem, types, handler, selector, mappedTypes ) {
			var j, handleObj, tmp,
				origCount, t, events,
				special, handlers, type,
				namespaces, origType,
				elemData = jQuery.hasData( elem ) && jQuery._data( elem );
	
			if ( !elemData || !( events = elemData.events ) ) {
				return;
			}
	
			// Once for each type.namespace in types; type may be omitted
			types = ( types || "" ).match( rnotwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();
	
				// Unbind all events (on this namespace, if provided) for the element
				if ( !type ) {
					for ( type in events ) {
						jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
					}
					continue;
				}
	
				special = jQuery.event.special[ type ] || {};
				type = ( selector ? special.delegateType : special.bindType ) || type;
				handlers = events[ type ] || [];
				tmp = tmp[ 2 ] &&
					new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );
	
				// Remove matching events
				origCount = j = handlers.length;
				while ( j-- ) {
					handleObj = handlers[ j ];
	
					if ( ( mappedTypes || origType === handleObj.origType ) &&
						( !handler || handler.guid === handleObj.guid ) &&
						( !tmp || tmp.test( handleObj.namespace ) ) &&
						( !selector || selector === handleObj.selector ||
							selector === "**" && handleObj.selector ) ) {
						handlers.splice( j, 1 );
	
						if ( handleObj.selector ) {
							handlers.delegateCount--;
						}
						if ( special.remove ) {
							special.remove.call( elem, handleObj );
						}
					}
				}
	
				// Remove generic event handler if we removed something and no more handlers exist
				// (avoids potential for endless recursion during removal of special event handlers)
				if ( origCount && !handlers.length ) {
					if ( !special.teardown ||
						special.teardown.call( elem, namespaces, elemData.handle ) === false ) {
	
						jQuery.removeEvent( elem, type, elemData.handle );
					}
	
					delete events[ type ];
				}
			}
	
			// Remove the expando if it's no longer used
			if ( jQuery.isEmptyObject( events ) ) {
				delete elemData.handle;
	
				// removeData also checks for emptiness and clears the expando if empty
				// so use it instead of delete
				jQuery._removeData( elem, "events" );
			}
		},
	
		trigger: function( event, data, elem, onlyHandlers ) {
			var handle, ontype, cur,
				bubbleType, special, tmp, i,
				eventPath = [ elem || document ],
				type = hasOwn.call( event, "type" ) ? event.type : event,
				namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];
	
			cur = tmp = elem = elem || document;
	
			// Don't do events on text and comment nodes
			if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
				return;
			}
	
			// focus/blur morphs to focusin/out; ensure we're not firing them right now
			if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
				return;
			}
	
			if ( type.indexOf( "." ) > -1 ) {
	
				// Namespaced trigger; create a regexp to match event type in handle()
				namespaces = type.split( "." );
				type = namespaces.shift();
				namespaces.sort();
			}
			ontype = type.indexOf( ":" ) < 0 && "on" + type;
	
			// Caller can pass in a jQuery.Event object, Object, or just an event type string
			event = event[ jQuery.expando ] ?
				event :
				new jQuery.Event( type, typeof event === "object" && event );
	
			// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
			event.isTrigger = onlyHandlers ? 2 : 3;
			event.namespace = namespaces.join( "." );
			event.rnamespace = event.namespace ?
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
				null;
	
			// Clean up the event in case it is being reused
			event.result = undefined;
			if ( !event.target ) {
				event.target = elem;
			}
	
			// Clone any incoming data and prepend the event, creating the handler arg list
			data = data == null ?
				[ event ] :
				jQuery.makeArray( data, [ event ] );
	
			// Allow special events to draw outside the lines
			special = jQuery.event.special[ type ] || {};
			if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
				return;
			}
	
			// Determine event propagation path in advance, per W3C events spec (#9951)
			// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
			if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {
	
				bubbleType = special.delegateType || type;
				if ( !rfocusMorph.test( bubbleType + type ) ) {
					cur = cur.parentNode;
				}
				for ( ; cur; cur = cur.parentNode ) {
					eventPath.push( cur );
					tmp = cur;
				}
	
				// Only add window if we got to document (e.g., not plain obj or detached DOM)
				if ( tmp === ( elem.ownerDocument || document ) ) {
					eventPath.push( tmp.defaultView || tmp.parentWindow || window );
				}
			}
	
			// Fire handlers on the event path
			i = 0;
			while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
	
				event.type = i > 1 ?
					bubbleType :
					special.bindType || type;
	
				// jQuery handler
				handle = ( jQuery._data( cur, "events" ) || {} )[ event.type ] &&
					jQuery._data( cur, "handle" );
	
				if ( handle ) {
					handle.apply( cur, data );
				}
	
				// Native handler
				handle = ontype && cur[ ontype ];
				if ( handle && handle.apply && acceptData( cur ) ) {
					event.result = handle.apply( cur, data );
					if ( event.result === false ) {
						event.preventDefault();
					}
				}
			}
			event.type = type;
	
			// If nobody prevented the default action, do it now
			if ( !onlyHandlers && !event.isDefaultPrevented() ) {
	
				if (
					( !special._default ||
					 special._default.apply( eventPath.pop(), data ) === false
					) && acceptData( elem )
				) {
	
					// Call a native DOM method on the target with the same name name as the event.
					// Can't use an .isFunction() check here because IE6/7 fails that test.
					// Don't do default actions on window, that's where global variables be (#6170)
					if ( ontype && elem[ type ] && !jQuery.isWindow( elem ) ) {
	
						// Don't re-trigger an onFOO event when we call its FOO() method
						tmp = elem[ ontype ];
	
						if ( tmp ) {
							elem[ ontype ] = null;
						}
	
						// Prevent re-triggering of the same event, since we already bubbled it above
						jQuery.event.triggered = type;
						try {
							elem[ type ]();
						} catch ( e ) {
	
							// IE<9 dies on focus/blur to hidden element (#1486,#12518)
							// only reproducible on winXP IE8 native, not IE9 in IE8 mode
						}
						jQuery.event.triggered = undefined;
	
						if ( tmp ) {
							elem[ ontype ] = tmp;
						}
					}
				}
			}
	
			return event.result;
		},
	
		dispatch: function( event ) {
	
			// Make a writable jQuery.Event from the native event object
			event = jQuery.event.fix( event );
	
			var i, j, ret, matched, handleObj,
				handlerQueue = [],
				args = slice.call( arguments ),
				handlers = ( jQuery._data( this, "events" ) || {} )[ event.type ] || [],
				special = jQuery.event.special[ event.type ] || {};
	
			// Use the fix-ed jQuery.Event rather than the (read-only) native event
			args[ 0 ] = event;
			event.delegateTarget = this;
	
			// Call the preDispatch hook for the mapped type, and let it bail if desired
			if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
				return;
			}
	
			// Determine handlers
			handlerQueue = jQuery.event.handlers.call( this, event, handlers );
	
			// Run delegates first; they may want to stop propagation beneath us
			i = 0;
			while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
				event.currentTarget = matched.elem;
	
				j = 0;
				while ( ( handleObj = matched.handlers[ j++ ] ) &&
					!event.isImmediatePropagationStopped() ) {
	
					// Triggered event must either 1) have no namespace, or 2) have namespace(s)
					// a subset or equal to those in the bound event (both can have no namespace).
					if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {
	
						event.handleObj = handleObj;
						event.data = handleObj.data;
	
						ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
							handleObj.handler ).apply( matched.elem, args );
	
						if ( ret !== undefined ) {
							if ( ( event.result = ret ) === false ) {
								event.preventDefault();
								event.stopPropagation();
							}
						}
					}
				}
			}
	
			// Call the postDispatch hook for the mapped type
			if ( special.postDispatch ) {
				special.postDispatch.call( this, event );
			}
	
			return event.result;
		},
	
		handlers: function( event, handlers ) {
			var i, matches, sel, handleObj,
				handlerQueue = [],
				delegateCount = handlers.delegateCount,
				cur = event.target;
	
			// Support (at least): Chrome, IE9
			// Find delegate handlers
			// Black-hole SVG <use> instance trees (#13180)
			//
			// Support: Firefox<=42+
			// Avoid non-left-click in FF but don't block IE radio events (#3861, gh-2343)
			if ( delegateCount && cur.nodeType &&
				( event.type !== "click" || isNaN( event.button ) || event.button < 1 ) ) {
	
				/* jshint eqeqeq: false */
				for ( ; cur != this; cur = cur.parentNode || this ) {
					/* jshint eqeqeq: true */
	
					// Don't check non-elements (#13208)
					// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
					if ( cur.nodeType === 1 && ( cur.disabled !== true || event.type !== "click" ) ) {
						matches = [];
						for ( i = 0; i < delegateCount; i++ ) {
							handleObj = handlers[ i ];
	
							// Don't conflict with Object.prototype properties (#13203)
							sel = handleObj.selector + " ";
	
							if ( matches[ sel ] === undefined ) {
								matches[ sel ] = handleObj.needsContext ?
									jQuery( sel, this ).index( cur ) > -1 :
									jQuery.find( sel, this, null, [ cur ] ).length;
							}
							if ( matches[ sel ] ) {
								matches.push( handleObj );
							}
						}
						if ( matches.length ) {
							handlerQueue.push( { elem: cur, handlers: matches } );
						}
					}
				}
			}
	
			// Add the remaining (directly-bound) handlers
			if ( delegateCount < handlers.length ) {
				handlerQueue.push( { elem: this, handlers: handlers.slice( delegateCount ) } );
			}
	
			return handlerQueue;
		},
	
		fix: function( event ) {
			if ( event[ jQuery.expando ] ) {
				return event;
			}
	
			// Create a writable copy of the event object and normalize some properties
			var i, prop, copy,
				type = event.type,
				originalEvent = event,
				fixHook = this.fixHooks[ type ];
	
			if ( !fixHook ) {
				this.fixHooks[ type ] = fixHook =
					rmouseEvent.test( type ) ? this.mouseHooks :
					rkeyEvent.test( type ) ? this.keyHooks :
					{};
			}
			copy = fixHook.props ? this.props.concat( fixHook.props ) : this.props;
	
			event = new jQuery.Event( originalEvent );
	
			i = copy.length;
			while ( i-- ) {
				prop = copy[ i ];
				event[ prop ] = originalEvent[ prop ];
			}
	
			// Support: IE<9
			// Fix target property (#1925)
			if ( !event.target ) {
				event.target = originalEvent.srcElement || document;
			}
	
			// Support: Safari 6-8+
			// Target should not be a text node (#504, #13143)
			if ( event.target.nodeType === 3 ) {
				event.target = event.target.parentNode;
			}
	
			// Support: IE<9
			// For mouse/key events, metaKey==false if it's undefined (#3368, #11328)
			event.metaKey = !!event.metaKey;
	
			return fixHook.filter ? fixHook.filter( event, originalEvent ) : event;
		},
	
		// Includes some event props shared by KeyEvent and MouseEvent
		props: ( "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase " +
			"metaKey relatedTarget shiftKey target timeStamp view which" ).split( " " ),
	
		fixHooks: {},
	
		keyHooks: {
			props: "char charCode key keyCode".split( " " ),
			filter: function( event, original ) {
	
				// Add which for key events
				if ( event.which == null ) {
					event.which = original.charCode != null ? original.charCode : original.keyCode;
				}
	
				return event;
			}
		},
	
		mouseHooks: {
			props: ( "button buttons clientX clientY fromElement offsetX offsetY " +
				"pageX pageY screenX screenY toElement" ).split( " " ),
			filter: function( event, original ) {
				var body, eventDoc, doc,
					button = original.button,
					fromElement = original.fromElement;
	
				// Calculate pageX/Y if missing and clientX/Y available
				if ( event.pageX == null && original.clientX != null ) {
					eventDoc = event.target.ownerDocument || document;
					doc = eventDoc.documentElement;
					body = eventDoc.body;
	
					event.pageX = original.clientX +
						( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) -
						( doc && doc.clientLeft || body && body.clientLeft || 0 );
					event.pageY = original.clientY +
						( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) -
						( doc && doc.clientTop  || body && body.clientTop  || 0 );
				}
	
				// Add relatedTarget, if necessary
				if ( !event.relatedTarget && fromElement ) {
					event.relatedTarget = fromElement === event.target ?
						original.toElement :
						fromElement;
				}
	
				// Add which for click: 1 === left; 2 === middle; 3 === right
				// Note: button is not normalized, so don't use it
				if ( !event.which && button !== undefined ) {
					event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
				}
	
				return event;
			}
		},
	
		special: {
			load: {
	
				// Prevent triggered image.load events from bubbling to window.load
				noBubble: true
			},
			focus: {
	
				// Fire native event if possible so blur/focus sequence is correct
				trigger: function() {
					if ( this !== safeActiveElement() && this.focus ) {
						try {
							this.focus();
							return false;
						} catch ( e ) {
	
							// Support: IE<9
							// If we error on focus to hidden element (#1486, #12518),
							// let .trigger() run the handlers
						}
					}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					if ( this === safeActiveElement() && this.blur ) {
						this.blur();
						return false;
					}
				},
				delegateType: "focusout"
			},
			click: {
	
				// For checkbox, fire native event so checked state will be right
				trigger: function() {
					if ( jQuery.nodeName( this, "input" ) && this.type === "checkbox" && this.click ) {
						this.click();
						return false;
					}
				},
	
				// For cross-browser consistency, don't fire native .click() on links
				_default: function( event ) {
					return jQuery.nodeName( event.target, "a" );
				}
			},
	
			beforeunload: {
				postDispatch: function( event ) {
	
					// Support: Firefox 20+
					// Firefox doesn't alert if the returnValue field is not set.
					if ( event.result !== undefined && event.originalEvent ) {
						event.originalEvent.returnValue = event.result;
					}
				}
			}
		},
	
		// Piggyback on a donor event to simulate a different one
		simulate: function( type, elem, event ) {
			var e = jQuery.extend(
				new jQuery.Event(),
				event,
				{
					type: type,
					isSimulated: true
	
					// Previously, `originalEvent: {}` was set here, so stopPropagation call
					// would not be triggered on donor event, since in our own
					// jQuery.event.stopPropagation function we had a check for existence of
					// originalEvent.stopPropagation method, so, consequently it would be a noop.
					//
					// Guard for simulated events was moved to jQuery.event.stopPropagation function
					// since `originalEvent` should point to the original event for the
					// constancy with other events and for more focused logic
				}
			);
	
			jQuery.event.trigger( e, null, elem );
	
			if ( e.isDefaultPrevented() ) {
				event.preventDefault();
			}
		}
	};
	
	jQuery.removeEvent = document.removeEventListener ?
		function( elem, type, handle ) {
	
			// This "if" is needed for plain objects
			if ( elem.removeEventListener ) {
				elem.removeEventListener( type, handle );
			}
		} :
		function( elem, type, handle ) {
			var name = "on" + type;
	
			if ( elem.detachEvent ) {
	
				// #8545, #7054, preventing memory leaks for custom events in IE6-8
				// detachEvent needed property on element, by name of that event,
				// to properly expose it to GC
				if ( typeof elem[ name ] === "undefined" ) {
					elem[ name ] = null;
				}
	
				elem.detachEvent( name, handle );
			}
		};
	
	jQuery.Event = function( src, props ) {
	
		// Allow instantiation without the 'new' keyword
		if ( !( this instanceof jQuery.Event ) ) {
			return new jQuery.Event( src, props );
		}
	
		// Event object
		if ( src && src.type ) {
			this.originalEvent = src;
			this.type = src.type;
	
			// Events bubbling up the document may have been marked as prevented
			// by a handler lower down the tree; reflect the correct value.
			this.isDefaultPrevented = src.defaultPrevented ||
					src.defaultPrevented === undefined &&
	
					// Support: IE < 9, Android < 4.0
					src.returnValue === false ?
				returnTrue :
				returnFalse;
	
		// Event type
		} else {
			this.type = src;
		}
	
		// Put explicitly provided properties onto the event object
		if ( props ) {
			jQuery.extend( this, props );
		}
	
		// Create a timestamp if incoming event doesn't have one
		this.timeStamp = src && src.timeStamp || jQuery.now();
	
		// Mark it as fixed
		this[ jQuery.expando ] = true;
	};
	
	// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
	// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
	jQuery.Event.prototype = {
		constructor: jQuery.Event,
		isDefaultPrevented: returnFalse,
		isPropagationStopped: returnFalse,
		isImmediatePropagationStopped: returnFalse,
	
		preventDefault: function() {
			var e = this.originalEvent;
	
			this.isDefaultPrevented = returnTrue;
			if ( !e ) {
				return;
			}
	
			// If preventDefault exists, run it on the original event
			if ( e.preventDefault ) {
				e.preventDefault();
	
			// Support: IE
			// Otherwise set the returnValue property of the original event to false
			} else {
				e.returnValue = false;
			}
		},
		stopPropagation: function() {
			var e = this.originalEvent;
	
			this.isPropagationStopped = returnTrue;
	
			if ( !e || this.isSimulated ) {
				return;
			}
	
			// If stopPropagation exists, run it on the original event
			if ( e.stopPropagation ) {
				e.stopPropagation();
			}
	
			// Support: IE
			// Set the cancelBubble property of the original event to true
			e.cancelBubble = true;
		},
		stopImmediatePropagation: function() {
			var e = this.originalEvent;
	
			this.isImmediatePropagationStopped = returnTrue;
	
			if ( e && e.stopImmediatePropagation ) {
				e.stopImmediatePropagation();
			}
	
			this.stopPropagation();
		}
	};
	
	// Create mouseenter/leave events using mouseover/out and event-time checks
	// so that event delegation works in jQuery.
	// Do the same for pointerenter/pointerleave and pointerover/pointerout
	//
	// Support: Safari 7 only
	// Safari sends mouseenter too often; see:
	// https://code.google.com/p/chromium/issues/detail?id=470258
	// for the description of the bug (it existed in older Chrome versions as well).
	jQuery.each( {
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function( orig, fix ) {
		jQuery.event.special[ orig ] = {
			delegateType: fix,
			bindType: fix,
	
			handle: function( event ) {
				var ret,
					target = this,
					related = event.relatedTarget,
					handleObj = event.handleObj;
	
				// For mouseenter/leave call the handler if related is outside the target.
				// NB: No relatedTarget if the mouse left/entered the browser window
				if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
					event.type = handleObj.origType;
					ret = handleObj.handler.apply( this, arguments );
					event.type = fix;
				}
				return ret;
			}
		};
	} );
	
	// IE submit delegation
	if ( !support.submit ) {
	
		jQuery.event.special.submit = {
			setup: function() {
	
				// Only need this for delegated form submit events
				if ( jQuery.nodeName( this, "form" ) ) {
					return false;
				}
	
				// Lazy-add a submit handler when a descendant form may potentially be submitted
				jQuery.event.add( this, "click._submit keypress._submit", function( e ) {
	
					// Node name check avoids a VML-related crash in IE (#9807)
					var elem = e.target,
						form = jQuery.nodeName( elem, "input" ) || jQuery.nodeName( elem, "button" ) ?
	
							// Support: IE <=8
							// We use jQuery.prop instead of elem.form
							// to allow fixing the IE8 delegated submit issue (gh-2332)
							// by 3rd party polyfills/workarounds.
							jQuery.prop( elem, "form" ) :
							undefined;
	
					if ( form && !jQuery._data( form, "submit" ) ) {
						jQuery.event.add( form, "submit._submit", function( event ) {
							event._submitBubble = true;
						} );
						jQuery._data( form, "submit", true );
					}
				} );
	
				// return undefined since we don't need an event listener
			},
	
			postDispatch: function( event ) {
	
				// If form was submitted by the user, bubble the event up the tree
				if ( event._submitBubble ) {
					delete event._submitBubble;
					if ( this.parentNode && !event.isTrigger ) {
						jQuery.event.simulate( "submit", this.parentNode, event );
					}
				}
			},
	
			teardown: function() {
	
				// Only need this for delegated form submit events
				if ( jQuery.nodeName( this, "form" ) ) {
					return false;
				}
	
				// Remove delegated handlers; cleanData eventually reaps submit handlers attached above
				jQuery.event.remove( this, "._submit" );
			}
		};
	}
	
	// IE change delegation and checkbox/radio fix
	if ( !support.change ) {
	
		jQuery.event.special.change = {
	
			setup: function() {
	
				if ( rformElems.test( this.nodeName ) ) {
	
					// IE doesn't fire change on a check/radio until blur; trigger it on click
					// after a propertychange. Eat the blur-change in special.change.handle.
					// This still fires onchange a second time for check/radio after blur.
					if ( this.type === "checkbox" || this.type === "radio" ) {
						jQuery.event.add( this, "propertychange._change", function( event ) {
							if ( event.originalEvent.propertyName === "checked" ) {
								this._justChanged = true;
							}
						} );
						jQuery.event.add( this, "click._change", function( event ) {
							if ( this._justChanged && !event.isTrigger ) {
								this._justChanged = false;
							}
	
							// Allow triggered, simulated change events (#11500)
							jQuery.event.simulate( "change", this, event );
						} );
					}
					return false;
				}
	
				// Delegated event; lazy-add a change handler on descendant inputs
				jQuery.event.add( this, "beforeactivate._change", function( e ) {
					var elem = e.target;
	
					if ( rformElems.test( elem.nodeName ) && !jQuery._data( elem, "change" ) ) {
						jQuery.event.add( elem, "change._change", function( event ) {
							if ( this.parentNode && !event.isSimulated && !event.isTrigger ) {
								jQuery.event.simulate( "change", this.parentNode, event );
							}
						} );
						jQuery._data( elem, "change", true );
					}
				} );
			},
	
			handle: function( event ) {
				var elem = event.target;
	
				// Swallow native change events from checkbox/radio, we already triggered them above
				if ( this !== elem || event.isSimulated || event.isTrigger ||
					( elem.type !== "radio" && elem.type !== "checkbox" ) ) {
	
					return event.handleObj.handler.apply( this, arguments );
				}
			},
	
			teardown: function() {
				jQuery.event.remove( this, "._change" );
	
				return !rformElems.test( this.nodeName );
			}
		};
	}
	
	// Support: Firefox
	// Firefox doesn't have focus(in | out) events
	// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
	//
	// Support: Chrome, Safari
	// focus(in | out) events fire after focus & blur events,
	// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
	// Related ticket - https://code.google.com/p/chromium/issues/detail?id=449857
	if ( !support.focusin ) {
		jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {
	
			// Attach a single capturing handler on the document while someone wants focusin/focusout
			var handler = function( event ) {
				jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
			};
	
			jQuery.event.special[ fix ] = {
				setup: function() {
					var doc = this.ownerDocument || this,
						attaches = jQuery._data( doc, fix );
	
					if ( !attaches ) {
						doc.addEventListener( orig, handler, true );
					}
					jQuery._data( doc, fix, ( attaches || 0 ) + 1 );
				},
				teardown: function() {
					var doc = this.ownerDocument || this,
						attaches = jQuery._data( doc, fix ) - 1;
	
					if ( !attaches ) {
						doc.removeEventListener( orig, handler, true );
						jQuery._removeData( doc, fix );
					} else {
						jQuery._data( doc, fix, attaches );
					}
				}
			};
		} );
	}
	
	jQuery.fn.extend( {
	
		on: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn );
		},
		one: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn, 1 );
		},
		off: function( types, selector, fn ) {
			var handleObj, type;
			if ( types && types.preventDefault && types.handleObj ) {
	
				// ( event )  dispatched jQuery.Event
				handleObj = types.handleObj;
				jQuery( types.delegateTarget ).off(
					handleObj.namespace ?
						handleObj.origType + "." + handleObj.namespace :
						handleObj.origType,
					handleObj.selector,
					handleObj.handler
				);
				return this;
			}
			if ( typeof types === "object" ) {
	
				// ( types-object [, selector] )
				for ( type in types ) {
					this.off( type, selector, types[ type ] );
				}
				return this;
			}
			if ( selector === false || typeof selector === "function" ) {
	
				// ( types [, fn] )
				fn = selector;
				selector = undefined;
			}
			if ( fn === false ) {
				fn = returnFalse;
			}
			return this.each( function() {
				jQuery.event.remove( this, types, fn, selector );
			} );
		},
	
		trigger: function( type, data ) {
			return this.each( function() {
				jQuery.event.trigger( type, data, this );
			} );
		},
		triggerHandler: function( type, data ) {
			var elem = this[ 0 ];
			if ( elem ) {
				return jQuery.event.trigger( type, data, elem, true );
			}
		}
	} );
	
	
	var rinlinejQuery = / jQuery\d+="(?:null|\d+)"/g,
		rnoshimcache = new RegExp( "<(?:" + nodeNames + ")[\\s/>]", "i" ),
		rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
	
		// Support: IE 10-11, Edge 10240+
		// In IE/Edge using regex groups here causes severe slowdowns.
		// See https://connect.microsoft.com/IE/feedback/details/1736512/
		rnoInnerhtml = /<script|<style|<link/i,
	
		// checked="checked" or checked
		rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
		rscriptTypeMasked = /^true\/(.*)/,
		rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
		safeFragment = createSafeFragment( document ),
		fragmentDiv = safeFragment.appendChild( document.createElement( "div" ) );
	
	// Support: IE<8
	// Manipulating tables requires a tbody
	function manipulationTarget( elem, content ) {
		return jQuery.nodeName( elem, "table" ) &&
			jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ?
	
			elem.getElementsByTagName( "tbody" )[ 0 ] ||
				elem.appendChild( elem.ownerDocument.createElement( "tbody" ) ) :
			elem;
	}
	
	// Replace/restore the type attribute of script elements for safe DOM manipulation
	function disableScript( elem ) {
		elem.type = ( jQuery.find.attr( elem, "type" ) !== null ) + "/" + elem.type;
		return elem;
	}
	function restoreScript( elem ) {
		var match = rscriptTypeMasked.exec( elem.type );
		if ( match ) {
			elem.type = match[ 1 ];
		} else {
			elem.removeAttribute( "type" );
		}
		return elem;
	}
	
	function cloneCopyEvent( src, dest ) {
		if ( dest.nodeType !== 1 || !jQuery.hasData( src ) ) {
			return;
		}
	
		var type, i, l,
			oldData = jQuery._data( src ),
			curData = jQuery._data( dest, oldData ),
			events = oldData.events;
	
		if ( events ) {
			delete curData.handle;
			curData.events = {};
	
			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	
		// make the cloned public data object a copy from the original
		if ( curData.data ) {
			curData.data = jQuery.extend( {}, curData.data );
		}
	}
	
	function fixCloneNodeIssues( src, dest ) {
		var nodeName, e, data;
	
		// We do not need to do anything for non-Elements
		if ( dest.nodeType !== 1 ) {
			return;
		}
	
		nodeName = dest.nodeName.toLowerCase();
	
		// IE6-8 copies events bound via attachEvent when using cloneNode.
		if ( !support.noCloneEvent && dest[ jQuery.expando ] ) {
			data = jQuery._data( dest );
	
			for ( e in data.events ) {
				jQuery.removeEvent( dest, e, data.handle );
			}
	
			// Event data gets referenced instead of copied if the expando gets copied too
			dest.removeAttribute( jQuery.expando );
		}
	
		// IE blanks contents when cloning scripts, and tries to evaluate newly-set text
		if ( nodeName === "script" && dest.text !== src.text ) {
			disableScript( dest ).text = src.text;
			restoreScript( dest );
	
		// IE6-10 improperly clones children of object elements using classid.
		// IE10 throws NoModificationAllowedError if parent is null, #12132.
		} else if ( nodeName === "object" ) {
			if ( dest.parentNode ) {
				dest.outerHTML = src.outerHTML;
			}
	
			// This path appears unavoidable for IE9. When cloning an object
			// element in IE9, the outerHTML strategy above is not sufficient.
			// If the src has innerHTML and the destination does not,
			// copy the src.innerHTML into the dest.innerHTML. #10324
			if ( support.html5Clone && ( src.innerHTML && !jQuery.trim( dest.innerHTML ) ) ) {
				dest.innerHTML = src.innerHTML;
			}
	
		} else if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
	
			// IE6-8 fails to persist the checked state of a cloned checkbox
			// or radio button. Worse, IE6-7 fail to give the cloned element
			// a checked appearance if the defaultChecked value isn't also set
	
			dest.defaultChecked = dest.checked = src.checked;
	
			// IE6-7 get confused and end up setting the value of a cloned
			// checkbox/radio button to an empty string instead of "on"
			if ( dest.value !== src.value ) {
				dest.value = src.value;
			}
	
		// IE6-8 fails to return the selected option to the default selected
		// state when cloning options
		} else if ( nodeName === "option" ) {
			dest.defaultSelected = dest.selected = src.defaultSelected;
	
		// IE6-8 fails to set the defaultValue to the correct value when
		// cloning other types of input fields
		} else if ( nodeName === "input" || nodeName === "textarea" ) {
			dest.defaultValue = src.defaultValue;
		}
	}
	
	function domManip( collection, args, callback, ignored ) {
	
		// Flatten any nested arrays
		args = concat.apply( [], args );
	
		var first, node, hasScripts,
			scripts, doc, fragment,
			i = 0,
			l = collection.length,
			iNoClone = l - 1,
			value = args[ 0 ],
			isFunction = jQuery.isFunction( value );
	
		// We can't cloneNode fragments that contain checked, in WebKit
		if ( isFunction ||
				( l > 1 && typeof value === "string" &&
					!support.checkClone && rchecked.test( value ) ) ) {
			return collection.each( function( index ) {
				var self = collection.eq( index );
				if ( isFunction ) {
					args[ 0 ] = value.call( this, index, self.html() );
				}
				domManip( self, args, callback, ignored );
			} );
		}
	
		if ( l ) {
			fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
			first = fragment.firstChild;
	
			if ( fragment.childNodes.length === 1 ) {
				fragment = first;
			}
	
			// Require either new content or an interest in ignored elements to invoke the callback
			if ( first || ignored ) {
				scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
				hasScripts = scripts.length;
	
				// Use the original fragment for the last item
				// instead of the first because it can end up
				// being emptied incorrectly in certain situations (#8070).
				for ( ; i < l; i++ ) {
					node = fragment;
	
					if ( i !== iNoClone ) {
						node = jQuery.clone( node, true, true );
	
						// Keep references to cloned scripts for later restoration
						if ( hasScripts ) {
	
							// Support: Android<4.1, PhantomJS<2
							// push.apply(_, arraylike) throws on ancient WebKit
							jQuery.merge( scripts, getAll( node, "script" ) );
						}
					}
	
					callback.call( collection[ i ], node, i );
				}
	
				if ( hasScripts ) {
					doc = scripts[ scripts.length - 1 ].ownerDocument;
	
					// Reenable scripts
					jQuery.map( scripts, restoreScript );
	
					// Evaluate executable scripts on first document insertion
					for ( i = 0; i < hasScripts; i++ ) {
						node = scripts[ i ];
						if ( rscriptType.test( node.type || "" ) &&
							!jQuery._data( node, "globalEval" ) &&
							jQuery.contains( doc, node ) ) {
	
							if ( node.src ) {
	
								// Optional AJAX dependency, but won't run scripts if not present
								if ( jQuery._evalUrl ) {
									jQuery._evalUrl( node.src );
								}
							} else {
								jQuery.globalEval(
									( node.text || node.textContent || node.innerHTML || "" )
										.replace( rcleanScript, "" )
								);
							}
						}
					}
				}
	
				// Fix #11809: Avoid leaking memory
				fragment = first = null;
			}
		}
	
		return collection;
	}
	
	function remove( elem, selector, keepData ) {
		var node,
			elems = selector ? jQuery.filter( selector, elem ) : elem,
			i = 0;
	
		for ( ; ( node = elems[ i ] ) != null; i++ ) {
	
			if ( !keepData && node.nodeType === 1 ) {
				jQuery.cleanData( getAll( node ) );
			}
	
			if ( node.parentNode ) {
				if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
					setGlobalEval( getAll( node, "script" ) );
				}
				node.parentNode.removeChild( node );
			}
		}
	
		return elem;
	}
	
	jQuery.extend( {
		htmlPrefilter: function( html ) {
			return html.replace( rxhtmlTag, "<$1></$2>" );
		},
	
		clone: function( elem, dataAndEvents, deepDataAndEvents ) {
			var destElements, node, clone, i, srcElements,
				inPage = jQuery.contains( elem.ownerDocument, elem );
	
			if ( support.html5Clone || jQuery.isXMLDoc( elem ) ||
				!rnoshimcache.test( "<" + elem.nodeName + ">" ) ) {
	
				clone = elem.cloneNode( true );
	
			// IE<=8 does not properly clone detached, unknown element nodes
			} else {
				fragmentDiv.innerHTML = elem.outerHTML;
				fragmentDiv.removeChild( clone = fragmentDiv.firstChild );
			}
	
			if ( ( !support.noCloneEvent || !support.noCloneChecked ) &&
					( elem.nodeType === 1 || elem.nodeType === 11 ) && !jQuery.isXMLDoc( elem ) ) {
	
				// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
				destElements = getAll( clone );
				srcElements = getAll( elem );
	
				// Fix all IE cloning issues
				for ( i = 0; ( node = srcElements[ i ] ) != null; ++i ) {
	
					// Ensure that the destination node is not null; Fixes #9587
					if ( destElements[ i ] ) {
						fixCloneNodeIssues( node, destElements[ i ] );
					}
				}
			}
	
			// Copy the events from the original to the clone
			if ( dataAndEvents ) {
				if ( deepDataAndEvents ) {
					srcElements = srcElements || getAll( elem );
					destElements = destElements || getAll( clone );
	
					for ( i = 0; ( node = srcElements[ i ] ) != null; i++ ) {
						cloneCopyEvent( node, destElements[ i ] );
					}
				} else {
					cloneCopyEvent( elem, clone );
				}
			}
	
			// Preserve script evaluation history
			destElements = getAll( clone, "script" );
			if ( destElements.length > 0 ) {
				setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
			}
	
			destElements = srcElements = node = null;
	
			// Return the cloned set
			return clone;
		},
	
		cleanData: function( elems, /* internal */ forceAcceptData ) {
			var elem, type, id, data,
				i = 0,
				internalKey = jQuery.expando,
				cache = jQuery.cache,
				attributes = support.attributes,
				special = jQuery.event.special;
	
			for ( ; ( elem = elems[ i ] ) != null; i++ ) {
				if ( forceAcceptData || acceptData( elem ) ) {
	
					id = elem[ internalKey ];
					data = id && cache[ id ];
	
					if ( data ) {
						if ( data.events ) {
							for ( type in data.events ) {
								if ( special[ type ] ) {
									jQuery.event.remove( elem, type );
	
								// This is a shortcut to avoid jQuery.event.remove's overhead
								} else {
									jQuery.removeEvent( elem, type, data.handle );
								}
							}
						}
	
						// Remove cache only if it was not already removed by jQuery.event.remove
						if ( cache[ id ] ) {
	
							delete cache[ id ];
	
							// Support: IE<9
							// IE does not allow us to delete expando properties from nodes
							// IE creates expando attributes along with the property
							// IE does not have a removeAttribute function on Document nodes
							if ( !attributes && typeof elem.removeAttribute !== "undefined" ) {
								elem.removeAttribute( internalKey );
	
							// Webkit & Blink performance suffers when deleting properties
							// from DOM nodes, so set to undefined instead
							// https://code.google.com/p/chromium/issues/detail?id=378607
							} else {
								elem[ internalKey ] = undefined;
							}
	
							deletedIds.push( id );
						}
					}
				}
			}
		}
	} );
	
	jQuery.fn.extend( {
	
		// Keep domManip exposed until 3.0 (gh-2225)
		domManip: domManip,
	
		detach: function( selector ) {
			return remove( this, selector, true );
		},
	
		remove: function( selector ) {
			return remove( this, selector );
		},
	
		text: function( value ) {
			return access( this, function( value ) {
				return value === undefined ?
					jQuery.text( this ) :
					this.empty().append(
						( this[ 0 ] && this[ 0 ].ownerDocument || document ).createTextNode( value )
					);
			}, null, value, arguments.length );
		},
	
		append: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.appendChild( elem );
				}
			} );
		},
	
		prepend: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.insertBefore( elem, target.firstChild );
				}
			} );
		},
	
		before: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this );
				}
			} );
		},
	
		after: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this.nextSibling );
				}
			} );
		},
	
		empty: function() {
			var elem,
				i = 0;
	
			for ( ; ( elem = this[ i ] ) != null; i++ ) {
	
				// Remove element nodes and prevent memory leaks
				if ( elem.nodeType === 1 ) {
					jQuery.cleanData( getAll( elem, false ) );
				}
	
				// Remove any remaining nodes
				while ( elem.firstChild ) {
					elem.removeChild( elem.firstChild );
				}
	
				// If this is a select, ensure that it displays empty (#12336)
				// Support: IE<9
				if ( elem.options && jQuery.nodeName( elem, "select" ) ) {
					elem.options.length = 0;
				}
			}
	
			return this;
		},
	
		clone: function( dataAndEvents, deepDataAndEvents ) {
			dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
			deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
	
			return this.map( function() {
				return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
			} );
		},
	
		html: function( value ) {
			return access( this, function( value ) {
				var elem = this[ 0 ] || {},
					i = 0,
					l = this.length;
	
				if ( value === undefined ) {
					return elem.nodeType === 1 ?
						elem.innerHTML.replace( rinlinejQuery, "" ) :
						undefined;
				}
	
				// See if we can take a shortcut and just use innerHTML
				if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
					( support.htmlSerialize || !rnoshimcache.test( value )  ) &&
					( support.leadingWhitespace || !rleadingWhitespace.test( value ) ) &&
					!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {
	
					value = jQuery.htmlPrefilter( value );
	
					try {
						for ( ; i < l; i++ ) {
	
							// Remove element nodes and prevent memory leaks
							elem = this[ i ] || {};
							if ( elem.nodeType === 1 ) {
								jQuery.cleanData( getAll( elem, false ) );
								elem.innerHTML = value;
							}
						}
	
						elem = 0;
	
					// If using innerHTML throws an exception, use the fallback method
					} catch ( e ) {}
				}
	
				if ( elem ) {
					this.empty().append( value );
				}
			}, null, value, arguments.length );
		},
	
		replaceWith: function() {
			var ignored = [];
	
			// Make the changes, replacing each non-ignored context element with the new content
			return domManip( this, arguments, function( elem ) {
				var parent = this.parentNode;
	
				if ( jQuery.inArray( this, ignored ) < 0 ) {
					jQuery.cleanData( getAll( this ) );
					if ( parent ) {
						parent.replaceChild( elem, this );
					}
				}
	
			// Force callback invocation
			}, ignored );
		}
	} );
	
	jQuery.each( {
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function( name, original ) {
		jQuery.fn[ name ] = function( selector ) {
			var elems,
				i = 0,
				ret = [],
				insert = jQuery( selector ),
				last = insert.length - 1;
	
			for ( ; i <= last; i++ ) {
				elems = i === last ? this : this.clone( true );
				jQuery( insert[ i ] )[ original ]( elems );
	
				// Modern browsers can apply jQuery collections as arrays, but oldIE needs a .get()
				push.apply( ret, elems.get() );
			}
	
			return this.pushStack( ret );
		};
	} );
	
	
	var iframe,
		elemdisplay = {
	
			// Support: Firefox
			// We have to pre-define these values for FF (#10227)
			HTML: "block",
			BODY: "block"
		};
	
	/**
	 * Retrieve the actual display of a element
	 * @param {String} name nodeName of the element
	 * @param {Object} doc Document object
	 */
	
	// Called only from within defaultDisplay
	function actualDisplay( name, doc ) {
		var elem = jQuery( doc.createElement( name ) ).appendTo( doc.body ),
	
			display = jQuery.css( elem[ 0 ], "display" );
	
		// We don't have any data stored on the element,
		// so use "detach" method as fast way to get rid of the element
		elem.detach();
	
		return display;
	}
	
	/**
	 * Try to determine the default display value of an element
	 * @param {String} nodeName
	 */
	function defaultDisplay( nodeName ) {
		var doc = document,
			display = elemdisplay[ nodeName ];
	
		if ( !display ) {
			display = actualDisplay( nodeName, doc );
	
			// If the simple way fails, read from inside an iframe
			if ( display === "none" || !display ) {
	
				// Use the already-created iframe if possible
				iframe = ( iframe || jQuery( "<iframe frameborder='0' width='0' height='0'/>" ) )
					.appendTo( doc.documentElement );
	
				// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
				doc = ( iframe[ 0 ].contentWindow || iframe[ 0 ].contentDocument ).document;
	
				// Support: IE
				doc.write();
				doc.close();
	
				display = actualDisplay( nodeName, doc );
				iframe.detach();
			}
	
			// Store the correct default display
			elemdisplay[ nodeName ] = display;
		}
	
		return display;
	}
	var rmargin = ( /^margin/ );
	
	var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );
	
	var swap = function( elem, options, callback, args ) {
		var ret, name,
			old = {};
	
		// Remember the old values, and insert the new ones
		for ( name in options ) {
			old[ name ] = elem.style[ name ];
			elem.style[ name ] = options[ name ];
		}
	
		ret = callback.apply( elem, args || [] );
	
		// Revert the old values
		for ( name in options ) {
			elem.style[ name ] = old[ name ];
		}
	
		return ret;
	};
	
	
	var documentElement = document.documentElement;
	
	
	
	( function() {
		var pixelPositionVal, pixelMarginRightVal, boxSizingReliableVal,
			reliableHiddenOffsetsVal, reliableMarginRightVal, reliableMarginLeftVal,
			container = document.createElement( "div" ),
			div = document.createElement( "div" );
	
		// Finish early in limited (non-browser) environments
		if ( !div.style ) {
			return;
		}
	
		div.style.cssText = "float:left;opacity:.5";
	
		// Support: IE<9
		// Make sure that element opacity exists (as opposed to filter)
		support.opacity = div.style.opacity === "0.5";
	
		// Verify style float existence
		// (IE uses styleFloat instead of cssFloat)
		support.cssFloat = !!div.style.cssFloat;
	
		div.style.backgroundClip = "content-box";
		div.cloneNode( true ).style.backgroundClip = "";
		support.clearCloneStyle = div.style.backgroundClip === "content-box";
	
		container = document.createElement( "div" );
		container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
			"padding:0;margin-top:1px;position:absolute";
		div.innerHTML = "";
		container.appendChild( div );
	
		// Support: Firefox<29, Android 2.3
		// Vendor-prefix box-sizing
		support.boxSizing = div.style.boxSizing === "" || div.style.MozBoxSizing === "" ||
			div.style.WebkitBoxSizing === "";
	
		jQuery.extend( support, {
			reliableHiddenOffsets: function() {
				if ( pixelPositionVal == null ) {
					computeStyleTests();
				}
				return reliableHiddenOffsetsVal;
			},
	
			boxSizingReliable: function() {
	
				// We're checking for pixelPositionVal here instead of boxSizingReliableVal
				// since that compresses better and they're computed together anyway.
				if ( pixelPositionVal == null ) {
					computeStyleTests();
				}
				return boxSizingReliableVal;
			},
	
			pixelMarginRight: function() {
	
				// Support: Android 4.0-4.3
				if ( pixelPositionVal == null ) {
					computeStyleTests();
				}
				return pixelMarginRightVal;
			},
	
			pixelPosition: function() {
				if ( pixelPositionVal == null ) {
					computeStyleTests();
				}
				return pixelPositionVal;
			},
	
			reliableMarginRight: function() {
	
				// Support: Android 2.3
				if ( pixelPositionVal == null ) {
					computeStyleTests();
				}
				return reliableMarginRightVal;
			},
	
			reliableMarginLeft: function() {
	
				// Support: IE <=8 only, Android 4.0 - 4.3 only, Firefox <=3 - 37
				if ( pixelPositionVal == null ) {
					computeStyleTests();
				}
				return reliableMarginLeftVal;
			}
		} );
	
		function computeStyleTests() {
			var contents, divStyle,
				documentElement = document.documentElement;
	
			// Setup
			documentElement.appendChild( container );
	
			div.style.cssText =
	
				// Support: Android 2.3
				// Vendor-prefix box-sizing
				"-webkit-box-sizing:border-box;box-sizing:border-box;" +
				"position:relative;display:block;" +
				"margin:auto;border:1px;padding:1px;" +
				"top:1%;width:50%";
	
			// Support: IE<9
			// Assume reasonable values in the absence of getComputedStyle
			pixelPositionVal = boxSizingReliableVal = reliableMarginLeftVal = false;
			pixelMarginRightVal = reliableMarginRightVal = true;
	
			// Check for getComputedStyle so that this code is not run in IE<9.
			if ( window.getComputedStyle ) {
				divStyle = window.getComputedStyle( div );
				pixelPositionVal = ( divStyle || {} ).top !== "1%";
				reliableMarginLeftVal = ( divStyle || {} ).marginLeft === "2px";
				boxSizingReliableVal = ( divStyle || { width: "4px" } ).width === "4px";
	
				// Support: Android 4.0 - 4.3 only
				// Some styles come back with percentage values, even though they shouldn't
				div.style.marginRight = "50%";
				pixelMarginRightVal = ( divStyle || { marginRight: "4px" } ).marginRight === "4px";
	
				// Support: Android 2.3 only
				// Div with explicit width and no margin-right incorrectly
				// gets computed margin-right based on width of container (#3333)
				// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
				contents = div.appendChild( document.createElement( "div" ) );
	
				// Reset CSS: box-sizing; display; margin; border; padding
				contents.style.cssText = div.style.cssText =
	
					// Support: Android 2.3
					// Vendor-prefix box-sizing
					"-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" +
					"box-sizing:content-box;display:block;margin:0;border:0;padding:0";
				contents.style.marginRight = contents.style.width = "0";
				div.style.width = "1px";
	
				reliableMarginRightVal =
					!parseFloat( ( window.getComputedStyle( contents ) || {} ).marginRight );
	
				div.removeChild( contents );
			}
	
			// Support: IE6-8
			// First check that getClientRects works as expected
			// Check if table cells still have offsetWidth/Height when they are set
			// to display:none and there are still other visible table cells in a
			// table row; if so, offsetWidth/Height are not reliable for use when
			// determining if an element has been hidden directly using
			// display:none (it is still safe to use offsets if a parent element is
			// hidden; don safety goggles and see bug #4512 for more information).
			div.style.display = "none";
			reliableHiddenOffsetsVal = div.getClientRects().length === 0;
			if ( reliableHiddenOffsetsVal ) {
				div.style.display = "";
				div.innerHTML = "<table><tr><td></td><td>t</td></tr></table>";
				div.childNodes[ 0 ].style.borderCollapse = "separate";
				contents = div.getElementsByTagName( "td" );
				contents[ 0 ].style.cssText = "margin:0;border:0;padding:0;display:none";
				reliableHiddenOffsetsVal = contents[ 0 ].offsetHeight === 0;
				if ( reliableHiddenOffsetsVal ) {
					contents[ 0 ].style.display = "";
					contents[ 1 ].style.display = "none";
					reliableHiddenOffsetsVal = contents[ 0 ].offsetHeight === 0;
				}
			}
	
			// Teardown
			documentElement.removeChild( container );
		}
	
	} )();
	
	
	var getStyles, curCSS,
		rposition = /^(top|right|bottom|left)$/;
	
	if ( window.getComputedStyle ) {
		getStyles = function( elem ) {
	
			// Support: IE<=11+, Firefox<=30+ (#15098, #14150)
			// IE throws on elements created in popups
			// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
			var view = elem.ownerDocument.defaultView;
	
			if ( !view || !view.opener ) {
				view = window;
			}
	
			return view.getComputedStyle( elem );
		};
	
		curCSS = function( elem, name, computed ) {
			var width, minWidth, maxWidth, ret,
				style = elem.style;
	
			computed = computed || getStyles( elem );
	
			// getPropertyValue is only needed for .css('filter') in IE9, see #12537
			ret = computed ? computed.getPropertyValue( name ) || computed[ name ] : undefined;
	
			// Support: Opera 12.1x only
			// Fall back to style even without computed
			// computed is undefined for elems on document fragments
			if ( ( ret === "" || ret === undefined ) && !jQuery.contains( elem.ownerDocument, elem ) ) {
				ret = jQuery.style( elem, name );
			}
	
			if ( computed ) {
	
				// A tribute to the "awesome hack by Dean Edwards"
				// Chrome < 17 and Safari 5.0 uses "computed value"
				// instead of "used value" for margin-right
				// Safari 5.1.7 (at least) returns percentage for a larger set of values,
				// but width seems to be reliably pixels
				// this is against the CSSOM draft spec:
				// http://dev.w3.org/csswg/cssom/#resolved-values
				if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {
	
					// Remember the original values
					width = style.width;
					minWidth = style.minWidth;
					maxWidth = style.maxWidth;
	
					// Put in the new values to get a computed value out
					style.minWidth = style.maxWidth = style.width = ret;
					ret = computed.width;
	
					// Revert the changed values
					style.width = width;
					style.minWidth = minWidth;
					style.maxWidth = maxWidth;
				}
			}
	
			// Support: IE
			// IE returns zIndex value as an integer.
			return ret === undefined ?
				ret :
				ret + "";
		};
	} else if ( documentElement.currentStyle ) {
		getStyles = function( elem ) {
			return elem.currentStyle;
		};
	
		curCSS = function( elem, name, computed ) {
			var left, rs, rsLeft, ret,
				style = elem.style;
	
			computed = computed || getStyles( elem );
			ret = computed ? computed[ name ] : undefined;
	
			// Avoid setting ret to empty string here
			// so we don't default to auto
			if ( ret == null && style && style[ name ] ) {
				ret = style[ name ];
			}
	
			// From the awesome hack by Dean Edwards
			// http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291
	
			// If we're not dealing with a regular pixel number
			// but a number that has a weird ending, we need to convert it to pixels
			// but not position css attributes, as those are
			// proportional to the parent element instead
			// and we can't measure the parent instead because it
			// might trigger a "stacking dolls" problem
			if ( rnumnonpx.test( ret ) && !rposition.test( name ) ) {
	
				// Remember the original values
				left = style.left;
				rs = elem.runtimeStyle;
				rsLeft = rs && rs.left;
	
				// Put in the new values to get a computed value out
				if ( rsLeft ) {
					rs.left = elem.currentStyle.left;
				}
				style.left = name === "fontSize" ? "1em" : ret;
				ret = style.pixelLeft + "px";
	
				// Revert the changed values
				style.left = left;
				if ( rsLeft ) {
					rs.left = rsLeft;
				}
			}
	
			// Support: IE
			// IE returns zIndex value as an integer.
			return ret === undefined ?
				ret :
				ret + "" || "auto";
		};
	}
	
	
	
	
	function addGetHookIf( conditionFn, hookFn ) {
	
		// Define the hook, we'll check on the first run if it's really needed.
		return {
			get: function() {
				if ( conditionFn() ) {
	
					// Hook not needed (or it's not possible to use it due
					// to missing dependency), remove it.
					delete this.get;
					return;
				}
	
				// Hook needed; redefine it so that the support test is not executed again.
				return ( this.get = hookFn ).apply( this, arguments );
			}
		};
	}
	
	
	var
	
			ralpha = /alpha\([^)]*\)/i,
		ropacity = /opacity\s*=\s*([^)]*)/i,
	
		// swappable if display is none or starts with table except
		// "table", "table-cell", or "table-caption"
		// see here for display values:
		// https://developer.mozilla.org/en-US/docs/CSS/display
		rdisplayswap = /^(none|table(?!-c[ea]).+)/,
		rnumsplit = new RegExp( "^(" + pnum + ")(.*)$", "i" ),
	
		cssShow = { position: "absolute", visibility: "hidden", display: "block" },
		cssNormalTransform = {
			letterSpacing: "0",
			fontWeight: "400"
		},
	
		cssPrefixes = [ "Webkit", "O", "Moz", "ms" ],
		emptyStyle = document.createElement( "div" ).style;
	
	
	// return a css property mapped to a potentially vendor prefixed property
	function vendorPropName( name ) {
	
		// shortcut for names that are not vendor prefixed
		if ( name in emptyStyle ) {
			return name;
		}
	
		// check for vendor prefixed names
		var capName = name.charAt( 0 ).toUpperCase() + name.slice( 1 ),
			i = cssPrefixes.length;
	
		while ( i-- ) {
			name = cssPrefixes[ i ] + capName;
			if ( name in emptyStyle ) {
				return name;
			}
		}
	}
	
	function showHide( elements, show ) {
		var display, elem, hidden,
			values = [],
			index = 0,
			length = elements.length;
	
		for ( ; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}
	
			values[ index ] = jQuery._data( elem, "olddisplay" );
			display = elem.style.display;
			if ( show ) {
	
				// Reset the inline display of this element to learn if it is
				// being hidden by cascaded rules or not
				if ( !values[ index ] && display === "none" ) {
					elem.style.display = "";
				}
	
				// Set elements which have been overridden with display: none
				// in a stylesheet to whatever the default browser style is
				// for such an element
				if ( elem.style.display === "" && isHidden( elem ) ) {
					values[ index ] =
						jQuery._data( elem, "olddisplay", defaultDisplay( elem.nodeName ) );
				}
			} else {
				hidden = isHidden( elem );
	
				if ( display && display !== "none" || !hidden ) {
					jQuery._data(
						elem,
						"olddisplay",
						hidden ? display : jQuery.css( elem, "display" )
					);
				}
			}
		}
	
		// Set the display of most of the elements in a second loop
		// to avoid the constant reflow
		for ( index = 0; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}
			if ( !show || elem.style.display === "none" || elem.style.display === "" ) {
				elem.style.display = show ? values[ index ] || "" : "none";
			}
		}
	
		return elements;
	}
	
	function setPositiveNumber( elem, value, subtract ) {
		var matches = rnumsplit.exec( value );
		return matches ?
	
			// Guard against undefined "subtract", e.g., when used as in cssHooks
			Math.max( 0, matches[ 1 ] - ( subtract || 0 ) ) + ( matches[ 2 ] || "px" ) :
			value;
	}
	
	function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
		var i = extra === ( isBorderBox ? "border" : "content" ) ?
	
			// If we already have the right measurement, avoid augmentation
			4 :
	
			// Otherwise initialize for horizontal or vertical properties
			name === "width" ? 1 : 0,
	
			val = 0;
	
		for ( ; i < 4; i += 2 ) {
	
			// both box models exclude margin, so add it if we want it
			if ( extra === "margin" ) {
				val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
			}
	
			if ( isBorderBox ) {
	
				// border-box includes padding, so remove it if we want content
				if ( extra === "content" ) {
					val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
				}
	
				// at this point, extra isn't border nor margin, so remove border
				if ( extra !== "margin" ) {
					val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			} else {
	
				// at this point, extra isn't content, so add padding
				val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
	
				// at this point, extra isn't content nor padding, so add border
				if ( extra !== "padding" ) {
					val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			}
		}
	
		return val;
	}
	
	function getWidthOrHeight( elem, name, extra ) {
	
		// Start with offset property, which is equivalent to the border-box value
		var valueIsBorderBox = true,
			val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
			styles = getStyles( elem ),
			isBorderBox = support.boxSizing &&
				jQuery.css( elem, "boxSizing", false, styles ) === "border-box";
	
		// some non-html elements return undefined for offsetWidth, so check for null/undefined
		// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
		// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
		if ( val <= 0 || val == null ) {
	
			// Fall back to computed then uncomputed css if necessary
			val = curCSS( elem, name, styles );
			if ( val < 0 || val == null ) {
				val = elem.style[ name ];
			}
	
			// Computed unit is not pixels. Stop here and return.
			if ( rnumnonpx.test( val ) ) {
				return val;
			}
	
			// we need the check for style in case a browser which returns unreliable values
			// for getComputedStyle silently falls back to the reliable elem.style
			valueIsBorderBox = isBorderBox &&
				( support.boxSizingReliable() || val === elem.style[ name ] );
	
			// Normalize "", auto, and prepare for extra
			val = parseFloat( val ) || 0;
		}
	
		// use the active box-sizing model to add/subtract irrelevant styles
		return ( val +
			augmentWidthOrHeight(
				elem,
				name,
				extra || ( isBorderBox ? "border" : "content" ),
				valueIsBorderBox,
				styles
			)
		) + "px";
	}
	
	jQuery.extend( {
	
		// Add in style property hooks for overriding the default
		// behavior of getting and setting a style property
		cssHooks: {
			opacity: {
				get: function( elem, computed ) {
					if ( computed ) {
	
						// We should always get a number back from opacity
						var ret = curCSS( elem, "opacity" );
						return ret === "" ? "1" : ret;
					}
				}
			}
		},
	
		// Don't automatically add "px" to these possibly-unitless properties
		cssNumber: {
			"animationIterationCount": true,
			"columnCount": true,
			"fillOpacity": true,
			"flexGrow": true,
			"flexShrink": true,
			"fontWeight": true,
			"lineHeight": true,
			"opacity": true,
			"order": true,
			"orphans": true,
			"widows": true,
			"zIndex": true,
			"zoom": true
		},
	
		// Add in properties whose names you wish to fix before
		// setting or getting the value
		cssProps: {
	
			// normalize float css property
			"float": support.cssFloat ? "cssFloat" : "styleFloat"
		},
	
		// Get and set the style property on a DOM Node
		style: function( elem, name, value, extra ) {
	
			// Don't set styles on text and comment nodes
			if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
				return;
			}
	
			// Make sure that we're working with the right name
			var ret, type, hooks,
				origName = jQuery.camelCase( name ),
				style = elem.style;
	
			name = jQuery.cssProps[ origName ] ||
				( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );
	
			// gets hook for the prefixed version
			// followed by the unprefixed version
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];
	
			// Check if we're setting a value
			if ( value !== undefined ) {
				type = typeof value;
	
				// Convert "+=" or "-=" to relative numbers (#7345)
				if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
					value = adjustCSS( elem, name, ret );
	
					// Fixes bug #9237
					type = "number";
				}
	
				// Make sure that null and NaN values aren't set. See: #7116
				if ( value == null || value !== value ) {
					return;
				}
	
				// If a number was passed in, add the unit (except for certain CSS properties)
				if ( type === "number" ) {
					value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
				}
	
				// Fixes #8908, it can be done more correctly by specifing setters in cssHooks,
				// but it would mean to define eight
				// (for every problematic property) identical functions
				if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
					style[ name ] = "inherit";
				}
	
				// If a hook was provided, use that value, otherwise just set the specified value
				if ( !hooks || !( "set" in hooks ) ||
					( value = hooks.set( elem, value, extra ) ) !== undefined ) {
	
					// Support: IE
					// Swallow errors from 'invalid' CSS values (#5509)
					try {
						style[ name ] = value;
					} catch ( e ) {}
				}
	
			} else {
	
				// If a hook was provided get the non-computed value from there
				if ( hooks && "get" in hooks &&
					( ret = hooks.get( elem, false, extra ) ) !== undefined ) {
	
					return ret;
				}
	
				// Otherwise just get the value from the style object
				return style[ name ];
			}
		},
	
		css: function( elem, name, extra, styles ) {
			var num, val, hooks,
				origName = jQuery.camelCase( name );
	
			// Make sure that we're working with the right name
			name = jQuery.cssProps[ origName ] ||
				( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );
	
			// gets hook for the prefixed version
			// followed by the unprefixed version
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];
	
			// If a hook was provided get the computed value from there
			if ( hooks && "get" in hooks ) {
				val = hooks.get( elem, true, extra );
			}
	
			// Otherwise, if a way to get the computed value exists, use that
			if ( val === undefined ) {
				val = curCSS( elem, name, styles );
			}
	
			//convert "normal" to computed value
			if ( val === "normal" && name in cssNormalTransform ) {
				val = cssNormalTransform[ name ];
			}
	
			// Return, converting to number if forced or a qualifier was provided and val looks numeric
			if ( extra === "" || extra ) {
				num = parseFloat( val );
				return extra === true || isFinite( num ) ? num || 0 : val;
			}
			return val;
		}
	} );
	
	jQuery.each( [ "height", "width" ], function( i, name ) {
		jQuery.cssHooks[ name ] = {
			get: function( elem, computed, extra ) {
				if ( computed ) {
	
					// certain elements can have dimension info if we invisibly show them
					// however, it must have a current display style that would benefit from this
					return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&
						elem.offsetWidth === 0 ?
							swap( elem, cssShow, function() {
								return getWidthOrHeight( elem, name, extra );
							} ) :
							getWidthOrHeight( elem, name, extra );
				}
			},
	
			set: function( elem, value, extra ) {
				var styles = extra && getStyles( elem );
				return setPositiveNumber( elem, value, extra ?
					augmentWidthOrHeight(
						elem,
						name,
						extra,
						support.boxSizing &&
							jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
						styles
					) : 0
				);
			}
		};
	} );
	
	if ( !support.opacity ) {
		jQuery.cssHooks.opacity = {
			get: function( elem, computed ) {
	
				// IE uses filters for opacity
				return ropacity.test( ( computed && elem.currentStyle ?
					elem.currentStyle.filter :
					elem.style.filter ) || "" ) ?
						( 0.01 * parseFloat( RegExp.$1 ) ) + "" :
						computed ? "1" : "";
			},
	
			set: function( elem, value ) {
				var style = elem.style,
					currentStyle = elem.currentStyle,
					opacity = jQuery.isNumeric( value ) ? "alpha(opacity=" + value * 100 + ")" : "",
					filter = currentStyle && currentStyle.filter || style.filter || "";
	
				// IE has trouble with opacity if it does not have layout
				// Force it by setting the zoom level
				style.zoom = 1;
	
				// if setting opacity to 1, and no other filters exist -
				// attempt to remove filter attribute #6652
				// if value === "", then remove inline opacity #12685
				if ( ( value >= 1 || value === "" ) &&
						jQuery.trim( filter.replace( ralpha, "" ) ) === "" &&
						style.removeAttribute ) {
	
					// Setting style.filter to null, "" & " " still leave "filter:" in the cssText
					// if "filter:" is present at all, clearType is disabled, we want to avoid this
					// style.removeAttribute is IE Only, but so apparently is this code path...
					style.removeAttribute( "filter" );
	
					// if there is no filter style applied in a css rule
					// or unset inline opacity, we are done
					if ( value === "" || currentStyle && !currentStyle.filter ) {
						return;
					}
				}
	
				// otherwise, set new filter values
				style.filter = ralpha.test( filter ) ?
					filter.replace( ralpha, opacity ) :
					filter + " " + opacity;
			}
		};
	}
	
	jQuery.cssHooks.marginRight = addGetHookIf( support.reliableMarginRight,
		function( elem, computed ) {
			if ( computed ) {
				return swap( elem, { "display": "inline-block" },
					curCSS, [ elem, "marginRight" ] );
			}
		}
	);
	
	jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
		function( elem, computed ) {
			if ( computed ) {
				return (
					parseFloat( curCSS( elem, "marginLeft" ) ) ||
	
					// Support: IE<=11+
					// Running getBoundingClientRect on a disconnected node in IE throws an error
					// Support: IE8 only
					// getClientRects() errors on disconnected elems
					( jQuery.contains( elem.ownerDocument, elem ) ?
						elem.getBoundingClientRect().left -
							swap( elem, { marginLeft: 0 }, function() {
								return elem.getBoundingClientRect().left;
							} ) :
						0
					)
				) + "px";
			}
		}
	);
	
	// These hooks are used by animate to expand properties
	jQuery.each( {
		margin: "",
		padding: "",
		border: "Width"
	}, function( prefix, suffix ) {
		jQuery.cssHooks[ prefix + suffix ] = {
			expand: function( value ) {
				var i = 0,
					expanded = {},
	
					// assumes a single number if not a string
					parts = typeof value === "string" ? value.split( " " ) : [ value ];
	
				for ( ; i < 4; i++ ) {
					expanded[ prefix + cssExpand[ i ] + suffix ] =
						parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
				}
	
				return expanded;
			}
		};
	
		if ( !rmargin.test( prefix ) ) {
			jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
		}
	} );
	
	jQuery.fn.extend( {
		css: function( name, value ) {
			return access( this, function( elem, name, value ) {
				var styles, len,
					map = {},
					i = 0;
	
				if ( jQuery.isArray( name ) ) {
					styles = getStyles( elem );
					len = name.length;
	
					for ( ; i < len; i++ ) {
						map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
					}
	
					return map;
				}
	
				return value !== undefined ?
					jQuery.style( elem, name, value ) :
					jQuery.css( elem, name );
			}, name, value, arguments.length > 1 );
		},
		show: function() {
			return showHide( this, true );
		},
		hide: function() {
			return showHide( this );
		},
		toggle: function( state ) {
			if ( typeof state === "boolean" ) {
				return state ? this.show() : this.hide();
			}
	
			return this.each( function() {
				if ( isHidden( this ) ) {
					jQuery( this ).show();
				} else {
					jQuery( this ).hide();
				}
			} );
		}
	} );
	
	
	function Tween( elem, options, prop, end, easing ) {
		return new Tween.prototype.init( elem, options, prop, end, easing );
	}
	jQuery.Tween = Tween;
	
	Tween.prototype = {
		constructor: Tween,
		init: function( elem, options, prop, end, easing, unit ) {
			this.elem = elem;
			this.prop = prop;
			this.easing = easing || jQuery.easing._default;
			this.options = options;
			this.start = this.now = this.cur();
			this.end = end;
			this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
		},
		cur: function() {
			var hooks = Tween.propHooks[ this.prop ];
	
			return hooks && hooks.get ?
				hooks.get( this ) :
				Tween.propHooks._default.get( this );
		},
		run: function( percent ) {
			var eased,
				hooks = Tween.propHooks[ this.prop ];
	
			if ( this.options.duration ) {
				this.pos = eased = jQuery.easing[ this.easing ](
					percent, this.options.duration * percent, 0, 1, this.options.duration
				);
			} else {
				this.pos = eased = percent;
			}
			this.now = ( this.end - this.start ) * eased + this.start;
	
			if ( this.options.step ) {
				this.options.step.call( this.elem, this.now, this );
			}
	
			if ( hooks && hooks.set ) {
				hooks.set( this );
			} else {
				Tween.propHooks._default.set( this );
			}
			return this;
		}
	};
	
	Tween.prototype.init.prototype = Tween.prototype;
	
	Tween.propHooks = {
		_default: {
			get: function( tween ) {
				var result;
	
				// Use a property on the element directly when it is not a DOM element,
				// or when there is no matching style property that exists.
				if ( tween.elem.nodeType !== 1 ||
					tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
					return tween.elem[ tween.prop ];
				}
	
				// passing an empty string as a 3rd parameter to .css will automatically
				// attempt a parseFloat and fallback to a string if the parse fails
				// so, simple values such as "10px" are parsed to Float.
				// complex values such as "rotate(1rad)" are returned as is.
				result = jQuery.css( tween.elem, tween.prop, "" );
	
				// Empty strings, null, undefined and "auto" are converted to 0.
				return !result || result === "auto" ? 0 : result;
			},
			set: function( tween ) {
	
				// use step hook for back compat - use cssHook if its there - use .style if its
				// available and use plain properties where available
				if ( jQuery.fx.step[ tween.prop ] ) {
					jQuery.fx.step[ tween.prop ]( tween );
				} else if ( tween.elem.nodeType === 1 &&
					( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
						jQuery.cssHooks[ tween.prop ] ) ) {
					jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
				} else {
					tween.elem[ tween.prop ] = tween.now;
				}
			}
		}
	};
	
	// Support: IE <=9
	// Panic based approach to setting things on disconnected nodes
	
	Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
		set: function( tween ) {
			if ( tween.elem.nodeType && tween.elem.parentNode ) {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	};
	
	jQuery.easing = {
		linear: function( p ) {
			return p;
		},
		swing: function( p ) {
			return 0.5 - Math.cos( p * Math.PI ) / 2;
		},
		_default: "swing"
	};
	
	jQuery.fx = Tween.prototype.init;
	
	// Back Compat <1.8 extension point
	jQuery.fx.step = {};
	
	
	
	
	var
		fxNow, timerId,
		rfxtypes = /^(?:toggle|show|hide)$/,
		rrun = /queueHooks$/;
	
	// Animations created synchronously will run synchronously
	function createFxNow() {
		window.setTimeout( function() {
			fxNow = undefined;
		} );
		return ( fxNow = jQuery.now() );
	}
	
	// Generate parameters to create a standard animation
	function genFx( type, includeWidth ) {
		var which,
			attrs = { height: type },
			i = 0;
	
		// if we include width, step value is 1 to do all cssExpand values,
		// if we don't include width, step value is 2 to skip over Left and Right
		includeWidth = includeWidth ? 1 : 0;
		for ( ; i < 4 ; i += 2 - includeWidth ) {
			which = cssExpand[ i ];
			attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
		}
	
		if ( includeWidth ) {
			attrs.opacity = attrs.width = type;
		}
	
		return attrs;
	}
	
	function createTween( value, prop, animation ) {
		var tween,
			collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
			index = 0,
			length = collection.length;
		for ( ; index < length; index++ ) {
			if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {
	
				// we're done with this property
				return tween;
			}
		}
	}
	
	function defaultPrefilter( elem, props, opts ) {
		/* jshint validthis: true */
		var prop, value, toggle, tween, hooks, oldfire, display, checkDisplay,
			anim = this,
			orig = {},
			style = elem.style,
			hidden = elem.nodeType && isHidden( elem ),
			dataShow = jQuery._data( elem, "fxshow" );
	
		// handle queue: false promises
		if ( !opts.queue ) {
			hooks = jQuery._queueHooks( elem, "fx" );
			if ( hooks.unqueued == null ) {
				hooks.unqueued = 0;
				oldfire = hooks.empty.fire;
				hooks.empty.fire = function() {
					if ( !hooks.unqueued ) {
						oldfire();
					}
				};
			}
			hooks.unqueued++;
	
			anim.always( function() {
	
				// doing this makes sure that the complete handler will be called
				// before this completes
				anim.always( function() {
					hooks.unqueued--;
					if ( !jQuery.queue( elem, "fx" ).length ) {
						hooks.empty.fire();
					}
				} );
			} );
		}
	
		// height/width overflow pass
		if ( elem.nodeType === 1 && ( "height" in props || "width" in props ) ) {
	
			// Make sure that nothing sneaks out
			// Record all 3 overflow attributes because IE does not
			// change the overflow attribute when overflowX and
			// overflowY are set to the same value
			opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];
	
			// Set display property to inline-block for height/width
			// animations on inline elements that are having width/height animated
			display = jQuery.css( elem, "display" );
	
			// Test default display if display is currently "none"
			checkDisplay = display === "none" ?
				jQuery._data( elem, "olddisplay" ) || defaultDisplay( elem.nodeName ) : display;
	
			if ( checkDisplay === "inline" && jQuery.css( elem, "float" ) === "none" ) {
	
				// inline-level elements accept inline-block;
				// block-level elements need to be inline with layout
				if ( !support.inlineBlockNeedsLayout || defaultDisplay( elem.nodeName ) === "inline" ) {
					style.display = "inline-block";
				} else {
					style.zoom = 1;
				}
			}
		}
	
		if ( opts.overflow ) {
			style.overflow = "hidden";
			if ( !support.shrinkWrapBlocks() ) {
				anim.always( function() {
					style.overflow = opts.overflow[ 0 ];
					style.overflowX = opts.overflow[ 1 ];
					style.overflowY = opts.overflow[ 2 ];
				} );
			}
		}
	
		// show/hide pass
		for ( prop in props ) {
			value = props[ prop ];
			if ( rfxtypes.exec( value ) ) {
				delete props[ prop ];
				toggle = toggle || value === "toggle";
				if ( value === ( hidden ? "hide" : "show" ) ) {
	
					// If there is dataShow left over from a stopped hide or show
					// and we are going to proceed with show, we should pretend to be hidden
					if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
						hidden = true;
					} else {
						continue;
					}
				}
				orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
	
			// Any non-fx value stops us from restoring the original display value
			} else {
				display = undefined;
			}
		}
	
		if ( !jQuery.isEmptyObject( orig ) ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = jQuery._data( elem, "fxshow", {} );
			}
	
			// store state if its toggle - enables .stop().toggle() to "reverse"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}
			if ( hidden ) {
				jQuery( elem ).show();
			} else {
				anim.done( function() {
					jQuery( elem ).hide();
				} );
			}
			anim.done( function() {
				var prop;
				jQuery._removeData( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
			for ( prop in orig ) {
				tween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
	
				if ( !( prop in dataShow ) ) {
					dataShow[ prop ] = tween.start;
					if ( hidden ) {
						tween.end = tween.start;
						tween.start = prop === "width" || prop === "height" ? 1 : 0;
					}
				}
			}
	
		// If this is a noop like .hide().hide(), restore an overwritten display value
		} else if ( ( display === "none" ? defaultDisplay( elem.nodeName ) : display ) === "inline" ) {
			style.display = display;
		}
	}
	
	function propFilter( props, specialEasing ) {
		var index, name, easing, value, hooks;
	
		// camelCase, specialEasing and expand cssHook pass
		for ( index in props ) {
			name = jQuery.camelCase( index );
			easing = specialEasing[ name ];
			value = props[ index ];
			if ( jQuery.isArray( value ) ) {
				easing = value[ 1 ];
				value = props[ index ] = value[ 0 ];
			}
	
			if ( index !== name ) {
				props[ name ] = value;
				delete props[ index ];
			}
	
			hooks = jQuery.cssHooks[ name ];
			if ( hooks && "expand" in hooks ) {
				value = hooks.expand( value );
				delete props[ name ];
	
				// not quite $.extend, this wont overwrite keys already present.
				// also - reusing 'index' from above because we have the correct "name"
				for ( index in value ) {
					if ( !( index in props ) ) {
						props[ index ] = value[ index ];
						specialEasing[ index ] = easing;
					}
				}
			} else {
				specialEasing[ name ] = easing;
			}
		}
	}
	
	function Animation( elem, properties, options ) {
		var result,
			stopped,
			index = 0,
			length = Animation.prefilters.length,
			deferred = jQuery.Deferred().always( function() {
	
				// don't match elem in the :animated selector
				delete tick.elem;
			} ),
			tick = function() {
				if ( stopped ) {
					return false;
				}
				var currentTime = fxNow || createFxNow(),
					remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),
	
					// Support: Android 2.3
					// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
					temp = remaining / animation.duration || 0,
					percent = 1 - temp,
					index = 0,
					length = animation.tweens.length;
	
				for ( ; index < length ; index++ ) {
					animation.tweens[ index ].run( percent );
				}
	
				deferred.notifyWith( elem, [ animation, percent, remaining ] );
	
				if ( percent < 1 && length ) {
					return remaining;
				} else {
					deferred.resolveWith( elem, [ animation ] );
					return false;
				}
			},
			animation = deferred.promise( {
				elem: elem,
				props: jQuery.extend( {}, properties ),
				opts: jQuery.extend( true, {
					specialEasing: {},
					easing: jQuery.easing._default
				}, options ),
				originalProperties: properties,
				originalOptions: options,
				startTime: fxNow || createFxNow(),
				duration: options.duration,
				tweens: [],
				createTween: function( prop, end ) {
					var tween = jQuery.Tween( elem, animation.opts, prop, end,
							animation.opts.specialEasing[ prop ] || animation.opts.easing );
					animation.tweens.push( tween );
					return tween;
				},
				stop: function( gotoEnd ) {
					var index = 0,
	
						// if we are going to the end, we want to run all the tweens
						// otherwise we skip this part
						length = gotoEnd ? animation.tweens.length : 0;
					if ( stopped ) {
						return this;
					}
					stopped = true;
					for ( ; index < length ; index++ ) {
						animation.tweens[ index ].run( 1 );
					}
	
					// resolve when we played the last frame
					// otherwise, reject
					if ( gotoEnd ) {
						deferred.notifyWith( elem, [ animation, 1, 0 ] );
						deferred.resolveWith( elem, [ animation, gotoEnd ] );
					} else {
						deferred.rejectWith( elem, [ animation, gotoEnd ] );
					}
					return this;
				}
			} ),
			props = animation.props;
	
		propFilter( props, animation.opts.specialEasing );
	
		for ( ; index < length ; index++ ) {
			result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
			if ( result ) {
				if ( jQuery.isFunction( result.stop ) ) {
					jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
						jQuery.proxy( result.stop, result );
				}
				return result;
			}
		}
	
		jQuery.map( props, createTween, animation );
	
		if ( jQuery.isFunction( animation.opts.start ) ) {
			animation.opts.start.call( elem, animation );
		}
	
		jQuery.fx.timer(
			jQuery.extend( tick, {
				elem: elem,
				anim: animation,
				queue: animation.opts.queue
			} )
		);
	
		// attach callbacks from options
		return animation.progress( animation.opts.progress )
			.done( animation.opts.done, animation.opts.complete )
			.fail( animation.opts.fail )
			.always( animation.opts.always );
	}
	
	jQuery.Animation = jQuery.extend( Animation, {
	
		tweeners: {
			"*": [ function( prop, value ) {
				var tween = this.createTween( prop, value );
				adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
				return tween;
			} ]
		},
	
		tweener: function( props, callback ) {
			if ( jQuery.isFunction( props ) ) {
				callback = props;
				props = [ "*" ];
			} else {
				props = props.match( rnotwhite );
			}
	
			var prop,
				index = 0,
				length = props.length;
	
			for ( ; index < length ; index++ ) {
				prop = props[ index ];
				Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
				Animation.tweeners[ prop ].unshift( callback );
			}
		},
	
		prefilters: [ defaultPrefilter ],
	
		prefilter: function( callback, prepend ) {
			if ( prepend ) {
				Animation.prefilters.unshift( callback );
			} else {
				Animation.prefilters.push( callback );
			}
		}
	} );
	
	jQuery.speed = function( speed, easing, fn ) {
		var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
			complete: fn || !fn && easing ||
				jQuery.isFunction( speed ) && speed,
			duration: speed,
			easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
		};
	
		opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration :
			opt.duration in jQuery.fx.speeds ?
				jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;
	
		// normalize opt.queue - true/undefined/null -> "fx"
		if ( opt.queue == null || opt.queue === true ) {
			opt.queue = "fx";
		}
	
		// Queueing
		opt.old = opt.complete;
	
		opt.complete = function() {
			if ( jQuery.isFunction( opt.old ) ) {
				opt.old.call( this );
			}
	
			if ( opt.queue ) {
				jQuery.dequeue( this, opt.queue );
			}
		};
	
		return opt;
	};
	
	jQuery.fn.extend( {
		fadeTo: function( speed, to, easing, callback ) {
	
			// show any hidden elements after setting opacity to 0
			return this.filter( isHidden ).css( "opacity", 0 ).show()
	
				// animate to the value specified
				.end().animate( { opacity: to }, speed, easing, callback );
		},
		animate: function( prop, speed, easing, callback ) {
			var empty = jQuery.isEmptyObject( prop ),
				optall = jQuery.speed( speed, easing, callback ),
				doAnimation = function() {
	
					// Operate on a copy of prop so per-property easing won't be lost
					var anim = Animation( this, jQuery.extend( {}, prop ), optall );
	
					// Empty animations, or finishing resolves immediately
					if ( empty || jQuery._data( this, "finish" ) ) {
						anim.stop( true );
					}
				};
				doAnimation.finish = doAnimation;
	
			return empty || optall.queue === false ?
				this.each( doAnimation ) :
				this.queue( optall.queue, doAnimation );
		},
		stop: function( type, clearQueue, gotoEnd ) {
			var stopQueue = function( hooks ) {
				var stop = hooks.stop;
				delete hooks.stop;
				stop( gotoEnd );
			};
	
			if ( typeof type !== "string" ) {
				gotoEnd = clearQueue;
				clearQueue = type;
				type = undefined;
			}
			if ( clearQueue && type !== false ) {
				this.queue( type || "fx", [] );
			}
	
			return this.each( function() {
				var dequeue = true,
					index = type != null && type + "queueHooks",
					timers = jQuery.timers,
					data = jQuery._data( this );
	
				if ( index ) {
					if ( data[ index ] && data[ index ].stop ) {
						stopQueue( data[ index ] );
					}
				} else {
					for ( index in data ) {
						if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
							stopQueue( data[ index ] );
						}
					}
				}
	
				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this &&
						( type == null || timers[ index ].queue === type ) ) {
	
						timers[ index ].anim.stop( gotoEnd );
						dequeue = false;
						timers.splice( index, 1 );
					}
				}
	
				// start the next in the queue if the last step wasn't forced
				// timers currently will call their complete callbacks, which will dequeue
				// but only if they were gotoEnd
				if ( dequeue || !gotoEnd ) {
					jQuery.dequeue( this, type );
				}
			} );
		},
		finish: function( type ) {
			if ( type !== false ) {
				type = type || "fx";
			}
			return this.each( function() {
				var index,
					data = jQuery._data( this ),
					queue = data[ type + "queue" ],
					hooks = data[ type + "queueHooks" ],
					timers = jQuery.timers,
					length = queue ? queue.length : 0;
	
				// enable finishing flag on private data
				data.finish = true;
	
				// empty the queue first
				jQuery.queue( this, type, [] );
	
				if ( hooks && hooks.stop ) {
					hooks.stop.call( this, true );
				}
	
				// look for any active animations, and finish them
				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
						timers[ index ].anim.stop( true );
						timers.splice( index, 1 );
					}
				}
	
				// look for any animations in the old queue and finish them
				for ( index = 0; index < length; index++ ) {
					if ( queue[ index ] && queue[ index ].finish ) {
						queue[ index ].finish.call( this );
					}
				}
	
				// turn off finishing flag
				delete data.finish;
			} );
		}
	} );
	
	jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
		var cssFn = jQuery.fn[ name ];
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return speed == null || typeof speed === "boolean" ?
				cssFn.apply( this, arguments ) :
				this.animate( genFx( name, true ), speed, easing, callback );
		};
	} );
	
	// Generate shortcuts for custom animations
	jQuery.each( {
		slideDown: genFx( "show" ),
		slideUp: genFx( "hide" ),
		slideToggle: genFx( "toggle" ),
		fadeIn: { opacity: "show" },
		fadeOut: { opacity: "hide" },
		fadeToggle: { opacity: "toggle" }
	}, function( name, props ) {
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return this.animate( props, speed, easing, callback );
		};
	} );
	
	jQuery.timers = [];
	jQuery.fx.tick = function() {
		var timer,
			timers = jQuery.timers,
			i = 0;
	
		fxNow = jQuery.now();
	
		for ( ; i < timers.length; i++ ) {
			timer = timers[ i ];
	
			// Checks the timer has not already been removed
			if ( !timer() && timers[ i ] === timer ) {
				timers.splice( i--, 1 );
			}
		}
	
		if ( !timers.length ) {
			jQuery.fx.stop();
		}
		fxNow = undefined;
	};
	
	jQuery.fx.timer = function( timer ) {
		jQuery.timers.push( timer );
		if ( timer() ) {
			jQuery.fx.start();
		} else {
			jQuery.timers.pop();
		}
	};
	
	jQuery.fx.interval = 13;
	
	jQuery.fx.start = function() {
		if ( !timerId ) {
			timerId = window.setInterval( jQuery.fx.tick, jQuery.fx.interval );
		}
	};
	
	jQuery.fx.stop = function() {
		window.clearInterval( timerId );
		timerId = null;
	};
	
	jQuery.fx.speeds = {
		slow: 600,
		fast: 200,
	
		// Default speed
		_default: 400
	};
	
	
	// Based off of the plugin by Clint Helfers, with permission.
	// http://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
	jQuery.fn.delay = function( time, type ) {
		time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
		type = type || "fx";
	
		return this.queue( type, function( next, hooks ) {
			var timeout = window.setTimeout( next, time );
			hooks.stop = function() {
				window.clearTimeout( timeout );
			};
		} );
	};
	
	
	( function() {
		var a,
			input = document.createElement( "input" ),
			div = document.createElement( "div" ),
			select = document.createElement( "select" ),
			opt = select.appendChild( document.createElement( "option" ) );
	
		// Setup
		div = document.createElement( "div" );
		div.setAttribute( "className", "t" );
		div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
		a = div.getElementsByTagName( "a" )[ 0 ];
	
		// Support: Windows Web Apps (WWA)
		// `type` must use .setAttribute for WWA (#14901)
		input.setAttribute( "type", "checkbox" );
		div.appendChild( input );
	
		a = div.getElementsByTagName( "a" )[ 0 ];
	
		// First batch of tests.
		a.style.cssText = "top:1px";
	
		// Test setAttribute on camelCase class.
		// If it works, we need attrFixes when doing get/setAttribute (ie6/7)
		support.getSetAttribute = div.className !== "t";
	
		// Get the style information from getAttribute
		// (IE uses .cssText instead)
		support.style = /top/.test( a.getAttribute( "style" ) );
	
		// Make sure that URLs aren't manipulated
		// (IE normalizes it by default)
		support.hrefNormalized = a.getAttribute( "href" ) === "/a";
	
		// Check the default checkbox/radio value ("" on WebKit; "on" elsewhere)
		support.checkOn = !!input.value;
	
		// Make sure that a selected-by-default option has a working selected property.
		// (WebKit defaults to false instead of true, IE too, if it's in an optgroup)
		support.optSelected = opt.selected;
	
		// Tests for enctype support on a form (#6743)
		support.enctype = !!document.createElement( "form" ).enctype;
	
		// Make sure that the options inside disabled selects aren't marked as disabled
		// (WebKit marks them as disabled)
		select.disabled = true;
		support.optDisabled = !opt.disabled;
	
		// Support: IE8 only
		// Check if we can trust getAttribute("value")
		input = document.createElement( "input" );
		input.setAttribute( "value", "" );
		support.input = input.getAttribute( "value" ) === "";
	
		// Check if an input maintains its value after becoming a radio
		input.value = "t";
		input.setAttribute( "type", "radio" );
		support.radioValue = input.value === "t";
	} )();
	
	
	var rreturn = /\r/g,
		rspaces = /[\x20\t\r\n\f]+/g;
	
	jQuery.fn.extend( {
		val: function( value ) {
			var hooks, ret, isFunction,
				elem = this[ 0 ];
	
			if ( !arguments.length ) {
				if ( elem ) {
					hooks = jQuery.valHooks[ elem.type ] ||
						jQuery.valHooks[ elem.nodeName.toLowerCase() ];
	
					if (
						hooks &&
						"get" in hooks &&
						( ret = hooks.get( elem, "value" ) ) !== undefined
					) {
						return ret;
					}
	
					ret = elem.value;
	
					return typeof ret === "string" ?
	
						// handle most common string cases
						ret.replace( rreturn, "" ) :
	
						// handle cases where value is null/undef or number
						ret == null ? "" : ret;
				}
	
				return;
			}
	
			isFunction = jQuery.isFunction( value );
	
			return this.each( function( i ) {
				var val;
	
				if ( this.nodeType !== 1 ) {
					return;
				}
	
				if ( isFunction ) {
					val = value.call( this, i, jQuery( this ).val() );
				} else {
					val = value;
				}
	
				// Treat null/undefined as ""; convert numbers to string
				if ( val == null ) {
					val = "";
				} else if ( typeof val === "number" ) {
					val += "";
				} else if ( jQuery.isArray( val ) ) {
					val = jQuery.map( val, function( value ) {
						return value == null ? "" : value + "";
					} );
				}
	
				hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];
	
				// If set returns undefined, fall back to normal setting
				if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
					this.value = val;
				}
			} );
		}
	} );
	
	jQuery.extend( {
		valHooks: {
			option: {
				get: function( elem ) {
					var val = jQuery.find.attr( elem, "value" );
					return val != null ?
						val :
	
						// Support: IE10-11+
						// option.text throws exceptions (#14686, #14858)
						// Strip and collapse whitespace
						// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
						jQuery.trim( jQuery.text( elem ) ).replace( rspaces, " " );
				}
			},
			select: {
				get: function( elem ) {
					var value, option,
						options = elem.options,
						index = elem.selectedIndex,
						one = elem.type === "select-one" || index < 0,
						values = one ? null : [],
						max = one ? index + 1 : options.length,
						i = index < 0 ?
							max :
							one ? index : 0;
	
					// Loop through all the selected options
					for ( ; i < max; i++ ) {
						option = options[ i ];
	
						// oldIE doesn't update selected after form reset (#2551)
						if ( ( option.selected || i === index ) &&
	
								// Don't return options that are disabled or in a disabled optgroup
								( support.optDisabled ?
									!option.disabled :
									option.getAttribute( "disabled" ) === null ) &&
								( !option.parentNode.disabled ||
									!jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {
	
							// Get the specific value for the option
							value = jQuery( option ).val();
	
							// We don't need an array for one selects
							if ( one ) {
								return value;
							}
	
							// Multi-Selects return an array
							values.push( value );
						}
					}
	
					return values;
				},
	
				set: function( elem, value ) {
					var optionSet, option,
						options = elem.options,
						values = jQuery.makeArray( value ),
						i = options.length;
	
					while ( i-- ) {
						option = options[ i ];
	
						if ( jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1 ) {
	
							// Support: IE6
							// When new option element is added to select box we need to
							// force reflow of newly added node in order to workaround delay
							// of initialization properties
							try {
								option.selected = optionSet = true;
	
							} catch ( _ ) {
	
								// Will be executed only in IE6
								option.scrollHeight;
							}
	
						} else {
							option.selected = false;
						}
					}
	
					// Force browsers to behave consistently when non-matching value is set
					if ( !optionSet ) {
						elem.selectedIndex = -1;
					}
	
					return options;
				}
			}
		}
	} );
	
	// Radios and checkboxes getter/setter
	jQuery.each( [ "radio", "checkbox" ], function() {
		jQuery.valHooks[ this ] = {
			set: function( elem, value ) {
				if ( jQuery.isArray( value ) ) {
					return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
				}
			}
		};
		if ( !support.checkOn ) {
			jQuery.valHooks[ this ].get = function( elem ) {
				return elem.getAttribute( "value" ) === null ? "on" : elem.value;
			};
		}
	} );
	
	
	
	
	var nodeHook, boolHook,
		attrHandle = jQuery.expr.attrHandle,
		ruseDefault = /^(?:checked|selected)$/i,
		getSetAttribute = support.getSetAttribute,
		getSetInput = support.input;
	
	jQuery.fn.extend( {
		attr: function( name, value ) {
			return access( this, jQuery.attr, name, value, arguments.length > 1 );
		},
	
		removeAttr: function( name ) {
			return this.each( function() {
				jQuery.removeAttr( this, name );
			} );
		}
	} );
	
	jQuery.extend( {
		attr: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;
	
			// Don't get/set attributes on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}
	
			// Fallback to prop when attributes are not supported
			if ( typeof elem.getAttribute === "undefined" ) {
				return jQuery.prop( elem, name, value );
			}
	
			// All attributes are lowercase
			// Grab necessary hook if one is defined
			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
				name = name.toLowerCase();
				hooks = jQuery.attrHooks[ name ] ||
					( jQuery.expr.match.bool.test( name ) ? boolHook : nodeHook );
			}
	
			if ( value !== undefined ) {
				if ( value === null ) {
					jQuery.removeAttr( elem, name );
					return;
				}
	
				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}
	
				elem.setAttribute( name, value + "" );
				return value;
			}
	
			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}
	
			ret = jQuery.find.attr( elem, name );
	
			// Non-existent attributes return null, we normalize to undefined
			return ret == null ? undefined : ret;
		},
	
		attrHooks: {
			type: {
				set: function( elem, value ) {
					if ( !support.radioValue && value === "radio" &&
						jQuery.nodeName( elem, "input" ) ) {
	
						// Setting the type on a radio button after the value resets the value in IE8-9
						// Reset value to default in case type is set after value during creation
						var val = elem.value;
						elem.setAttribute( "type", value );
						if ( val ) {
							elem.value = val;
						}
						return value;
					}
				}
			}
		},
	
		removeAttr: function( elem, value ) {
			var name, propName,
				i = 0,
				attrNames = value && value.match( rnotwhite );
	
			if ( attrNames && elem.nodeType === 1 ) {
				while ( ( name = attrNames[ i++ ] ) ) {
					propName = jQuery.propFix[ name ] || name;
	
					// Boolean attributes get special treatment (#10870)
					if ( jQuery.expr.match.bool.test( name ) ) {
	
						// Set corresponding property to false
						if ( getSetInput && getSetAttribute || !ruseDefault.test( name ) ) {
							elem[ propName ] = false;
	
						// Support: IE<9
						// Also clear defaultChecked/defaultSelected (if appropriate)
						} else {
							elem[ jQuery.camelCase( "default-" + name ) ] =
								elem[ propName ] = false;
						}
	
					// See #9699 for explanation of this approach (setting first, then removal)
					} else {
						jQuery.attr( elem, name, "" );
					}
	
					elem.removeAttribute( getSetAttribute ? name : propName );
				}
			}
		}
	} );
	
	// Hooks for boolean attributes
	boolHook = {
		set: function( elem, value, name ) {
			if ( value === false ) {
	
				// Remove boolean attributes when set to false
				jQuery.removeAttr( elem, name );
			} else if ( getSetInput && getSetAttribute || !ruseDefault.test( name ) ) {
	
				// IE<8 needs the *property* name
				elem.setAttribute( !getSetAttribute && jQuery.propFix[ name ] || name, name );
	
			} else {
	
				// Support: IE<9
				// Use defaultChecked and defaultSelected for oldIE
				elem[ jQuery.camelCase( "default-" + name ) ] = elem[ name ] = true;
			}
			return name;
		}
	};
	
	jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
		var getter = attrHandle[ name ] || jQuery.find.attr;
	
		if ( getSetInput && getSetAttribute || !ruseDefault.test( name ) ) {
			attrHandle[ name ] = function( elem, name, isXML ) {
				var ret, handle;
				if ( !isXML ) {
	
					// Avoid an infinite loop by temporarily removing this function from the getter
					handle = attrHandle[ name ];
					attrHandle[ name ] = ret;
					ret = getter( elem, name, isXML ) != null ?
						name.toLowerCase() :
						null;
					attrHandle[ name ] = handle;
				}
				return ret;
			};
		} else {
			attrHandle[ name ] = function( elem, name, isXML ) {
				if ( !isXML ) {
					return elem[ jQuery.camelCase( "default-" + name ) ] ?
						name.toLowerCase() :
						null;
				}
			};
		}
	} );
	
	// fix oldIE attroperties
	if ( !getSetInput || !getSetAttribute ) {
		jQuery.attrHooks.value = {
			set: function( elem, value, name ) {
				if ( jQuery.nodeName( elem, "input" ) ) {
	
					// Does not return so that setAttribute is also used
					elem.defaultValue = value;
				} else {
	
					// Use nodeHook if defined (#1954); otherwise setAttribute is fine
					return nodeHook && nodeHook.set( elem, value, name );
				}
			}
		};
	}
	
	// IE6/7 do not support getting/setting some attributes with get/setAttribute
	if ( !getSetAttribute ) {
	
		// Use this for any attribute in IE6/7
		// This fixes almost every IE6/7 issue
		nodeHook = {
			set: function( elem, value, name ) {
	
				// Set the existing or create a new attribute node
				var ret = elem.getAttributeNode( name );
				if ( !ret ) {
					elem.setAttributeNode(
						( ret = elem.ownerDocument.createAttribute( name ) )
					);
				}
	
				ret.value = value += "";
	
				// Break association with cloned elements by also using setAttribute (#9646)
				if ( name === "value" || value === elem.getAttribute( name ) ) {
					return value;
				}
			}
		};
	
		// Some attributes are constructed with empty-string values when not defined
		attrHandle.id = attrHandle.name = attrHandle.coords =
			function( elem, name, isXML ) {
				var ret;
				if ( !isXML ) {
					return ( ret = elem.getAttributeNode( name ) ) && ret.value !== "" ?
						ret.value :
						null;
				}
			};
	
		// Fixing value retrieval on a button requires this module
		jQuery.valHooks.button = {
			get: function( elem, name ) {
				var ret = elem.getAttributeNode( name );
				if ( ret && ret.specified ) {
					return ret.value;
				}
			},
			set: nodeHook.set
		};
	
		// Set contenteditable to false on removals(#10429)
		// Setting to empty string throws an error as an invalid value
		jQuery.attrHooks.contenteditable = {
			set: function( elem, value, name ) {
				nodeHook.set( elem, value === "" ? false : value, name );
			}
		};
	
		// Set width and height to auto instead of 0 on empty string( Bug #8150 )
		// This is for removals
		jQuery.each( [ "width", "height" ], function( i, name ) {
			jQuery.attrHooks[ name ] = {
				set: function( elem, value ) {
					if ( value === "" ) {
						elem.setAttribute( name, "auto" );
						return value;
					}
				}
			};
		} );
	}
	
	if ( !support.style ) {
		jQuery.attrHooks.style = {
			get: function( elem ) {
	
				// Return undefined in the case of empty string
				// Note: IE uppercases css property names, but if we were to .toLowerCase()
				// .cssText, that would destroy case sensitivity in URL's, like in "background"
				return elem.style.cssText || undefined;
			},
			set: function( elem, value ) {
				return ( elem.style.cssText = value + "" );
			}
		};
	}
	
	
	
	
	var rfocusable = /^(?:input|select|textarea|button|object)$/i,
		rclickable = /^(?:a|area)$/i;
	
	jQuery.fn.extend( {
		prop: function( name, value ) {
			return access( this, jQuery.prop, name, value, arguments.length > 1 );
		},
	
		removeProp: function( name ) {
			name = jQuery.propFix[ name ] || name;
			return this.each( function() {
	
				// try/catch handles cases where IE balks (such as removing a property on window)
				try {
					this[ name ] = undefined;
					delete this[ name ];
				} catch ( e ) {}
			} );
		}
	} );
	
	jQuery.extend( {
		prop: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;
	
			// Don't get/set properties on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}
	
			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
	
				// Fix name and attach hooks
				name = jQuery.propFix[ name ] || name;
				hooks = jQuery.propHooks[ name ];
			}
	
			if ( value !== undefined ) {
				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}
	
				return ( elem[ name ] = value );
			}
	
			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}
	
			return elem[ name ];
		},
	
		propHooks: {
			tabIndex: {
				get: function( elem ) {
	
					// elem.tabIndex doesn't always return the
					// correct value when it hasn't been explicitly set
					// http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
					// Use proper attribute retrieval(#12072)
					var tabindex = jQuery.find.attr( elem, "tabindex" );
	
					return tabindex ?
						parseInt( tabindex, 10 ) :
						rfocusable.test( elem.nodeName ) ||
							rclickable.test( elem.nodeName ) && elem.href ?
								0 :
								-1;
				}
			}
		},
	
		propFix: {
			"for": "htmlFor",
			"class": "className"
		}
	} );
	
	// Some attributes require a special call on IE
	// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
	if ( !support.hrefNormalized ) {
	
		// href/src property should get the full normalized URL (#10299/#12915)
		jQuery.each( [ "href", "src" ], function( i, name ) {
			jQuery.propHooks[ name ] = {
				get: function( elem ) {
					return elem.getAttribute( name, 4 );
				}
			};
		} );
	}
	
	// Support: Safari, IE9+
	// Accessing the selectedIndex property
	// forces the browser to respect setting selected
	// on the option
	// The getter ensures a default option is selected
	// when in an optgroup
	if ( !support.optSelected ) {
		jQuery.propHooks.selected = {
			get: function( elem ) {
				var parent = elem.parentNode;
	
				if ( parent ) {
					parent.selectedIndex;
	
					// Make sure that it also works with optgroups, see #5701
					if ( parent.parentNode ) {
						parent.parentNode.selectedIndex;
					}
				}
				return null;
			},
			set: function( elem ) {
				var parent = elem.parentNode;
				if ( parent ) {
					parent.selectedIndex;
	
					if ( parent.parentNode ) {
						parent.parentNode.selectedIndex;
					}
				}
			}
		};
	}
	
	jQuery.each( [
		"tabIndex",
		"readOnly",
		"maxLength",
		"cellSpacing",
		"cellPadding",
		"rowSpan",
		"colSpan",
		"useMap",
		"frameBorder",
		"contentEditable"
	], function() {
		jQuery.propFix[ this.toLowerCase() ] = this;
	} );
	
	// IE6/7 call enctype encoding
	if ( !support.enctype ) {
		jQuery.propFix.enctype = "encoding";
	}
	
	
	
	
	var rclass = /[\t\r\n\f]/g;
	
	function getClass( elem ) {
		return jQuery.attr( elem, "class" ) || "";
	}
	
	jQuery.fn.extend( {
		addClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;
	
			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
				} );
			}
	
			if ( typeof value === "string" && value ) {
				classes = value.match( rnotwhite ) || [];
	
				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );
					cur = elem.nodeType === 1 &&
						( " " + curValue + " " ).replace( rclass, " " );
	
					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {
							if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
								cur += clazz + " ";
							}
						}
	
						// only assign if different to avoid unneeded rendering.
						finalValue = jQuery.trim( cur );
						if ( curValue !== finalValue ) {
							jQuery.attr( elem, "class", finalValue );
						}
					}
				}
			}
	
			return this;
		},
	
		removeClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;
	
			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
				} );
			}
	
			if ( !arguments.length ) {
				return this.attr( "class", "" );
			}
	
			if ( typeof value === "string" && value ) {
				classes = value.match( rnotwhite ) || [];
	
				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );
	
					// This expression is here for better compressibility (see addClass)
					cur = elem.nodeType === 1 &&
						( " " + curValue + " " ).replace( rclass, " " );
	
					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {
	
							// Remove *all* instances
							while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
								cur = cur.replace( " " + clazz + " ", " " );
							}
						}
	
						// Only assign if different to avoid unneeded rendering.
						finalValue = jQuery.trim( cur );
						if ( curValue !== finalValue ) {
							jQuery.attr( elem, "class", finalValue );
						}
					}
				}
			}
	
			return this;
		},
	
		toggleClass: function( value, stateVal ) {
			var type = typeof value;
	
			if ( typeof stateVal === "boolean" && type === "string" ) {
				return stateVal ? this.addClass( value ) : this.removeClass( value );
			}
	
			if ( jQuery.isFunction( value ) ) {
				return this.each( function( i ) {
					jQuery( this ).toggleClass(
						value.call( this, i, getClass( this ), stateVal ),
						stateVal
					);
				} );
			}
	
			return this.each( function() {
				var className, i, self, classNames;
	
				if ( type === "string" ) {
	
					// Toggle individual class names
					i = 0;
					self = jQuery( this );
					classNames = value.match( rnotwhite ) || [];
	
					while ( ( className = classNames[ i++ ] ) ) {
	
						// Check each className given, space separated list
						if ( self.hasClass( className ) ) {
							self.removeClass( className );
						} else {
							self.addClass( className );
						}
					}
	
				// Toggle whole class name
				} else if ( value === undefined || type === "boolean" ) {
					className = getClass( this );
					if ( className ) {
	
						// store className if set
						jQuery._data( this, "__className__", className );
					}
	
					// If the element has a class name or if we're passed "false",
					// then remove the whole classname (if there was one, the above saved it).
					// Otherwise bring back whatever was previously saved (if anything),
					// falling back to the empty string if nothing was stored.
					jQuery.attr( this, "class",
						className || value === false ?
						"" :
						jQuery._data( this, "__className__" ) || ""
					);
				}
			} );
		},
	
		hasClass: function( selector ) {
			var className, elem,
				i = 0;
	
			className = " " + selector + " ";
			while ( ( elem = this[ i++ ] ) ) {
				if ( elem.nodeType === 1 &&
					( " " + getClass( elem ) + " " ).replace( rclass, " " )
						.indexOf( className ) > -1
				) {
					return true;
				}
			}
	
			return false;
		}
	} );
	
	
	
	
	// Return jQuery for attributes-only inclusion
	
	
	jQuery.each( ( "blur focus focusin focusout load resize scroll unload click dblclick " +
		"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
		"change select submit keydown keypress keyup error contextmenu" ).split( " " ),
		function( i, name ) {
	
		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	} );
	
	jQuery.fn.extend( {
		hover: function( fnOver, fnOut ) {
			return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
		}
	} );
	
	
	var location = window.location;
	
	var nonce = jQuery.now();
	
	var rquery = ( /\?/ );
	
	
	
	var rvalidtokens = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
	
	jQuery.parseJSON = function( data ) {
	
		// Attempt to parse using the native JSON parser first
		if ( window.JSON && window.JSON.parse ) {
	
			// Support: Android 2.3
			// Workaround failure to string-cast null input
			return window.JSON.parse( data + "" );
		}
	
		var requireNonComma,
			depth = null,
			str = jQuery.trim( data + "" );
	
		// Guard against invalid (and possibly dangerous) input by ensuring that nothing remains
		// after removing valid tokens
		return str && !jQuery.trim( str.replace( rvalidtokens, function( token, comma, open, close ) {
	
			// Force termination if we see a misplaced comma
			if ( requireNonComma && comma ) {
				depth = 0;
			}
	
			// Perform no more replacements after returning to outermost depth
			if ( depth === 0 ) {
				return token;
			}
	
			// Commas must not follow "[", "{", or ","
			requireNonComma = open || comma;
	
			// Determine new depth
			// array/object open ("[" or "{"): depth += true - false (increment)
			// array/object close ("]" or "}"): depth += false - true (decrement)
			// other cases ("," or primitive): depth += true - true (numeric cast)
			depth += !close - !open;
	
			// Remove this token
			return "";
		} ) ) ?
			( Function( "return " + str ) )() :
			jQuery.error( "Invalid JSON: " + data );
	};
	
	
	// Cross-browser xml parsing
	jQuery.parseXML = function( data ) {
		var xml, tmp;
		if ( !data || typeof data !== "string" ) {
			return null;
		}
		try {
			if ( window.DOMParser ) { // Standard
				tmp = new window.DOMParser();
				xml = tmp.parseFromString( data, "text/xml" );
			} else { // IE
				xml = new window.ActiveXObject( "Microsoft.XMLDOM" );
				xml.async = "false";
				xml.loadXML( data );
			}
		} catch ( e ) {
			xml = undefined;
		}
		if ( !xml || !xml.documentElement || xml.getElementsByTagName( "parsererror" ).length ) {
			jQuery.error( "Invalid XML: " + data );
		}
		return xml;
	};
	
	
	var
		rhash = /#.*$/,
		rts = /([?&])_=[^&]*/,
	
		// IE leaves an \r character at EOL
		rheaders = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,
	
		// #7653, #8125, #8152: local protocol detection
		rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		rnoContent = /^(?:GET|HEAD)$/,
		rprotocol = /^\/\//,
		rurl = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
	
		/* Prefilters
		 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
		 * 2) These are called:
		 *    - BEFORE asking for a transport
		 *    - AFTER param serialization (s.data is a string if s.processData is true)
		 * 3) key is the dataType
		 * 4) the catchall symbol "*" can be used
		 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
		 */
		prefilters = {},
	
		/* Transports bindings
		 * 1) key is the dataType
		 * 2) the catchall symbol "*" can be used
		 * 3) selection will start with transport dataType and THEN go to "*" if needed
		 */
		transports = {},
	
		// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
		allTypes = "*/".concat( "*" ),
	
		// Document location
		ajaxLocation = location.href,
	
		// Segment location into parts
		ajaxLocParts = rurl.exec( ajaxLocation.toLowerCase() ) || [];
	
	// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
	function addToPrefiltersOrTransports( structure ) {
	
		// dataTypeExpression is optional and defaults to "*"
		return function( dataTypeExpression, func ) {
	
			if ( typeof dataTypeExpression !== "string" ) {
				func = dataTypeExpression;
				dataTypeExpression = "*";
			}
	
			var dataType,
				i = 0,
				dataTypes = dataTypeExpression.toLowerCase().match( rnotwhite ) || [];
	
			if ( jQuery.isFunction( func ) ) {
	
				// For each dataType in the dataTypeExpression
				while ( ( dataType = dataTypes[ i++ ] ) ) {
	
					// Prepend if requested
					if ( dataType.charAt( 0 ) === "+" ) {
						dataType = dataType.slice( 1 ) || "*";
						( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );
	
					// Otherwise append
					} else {
						( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
					}
				}
			}
		};
	}
	
	// Base inspection function for prefilters and transports
	function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {
	
		var inspected = {},
			seekingTransport = ( structure === transports );
	
		function inspect( dataType ) {
			var selected;
			inspected[ dataType ] = true;
			jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
				var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
				if ( typeof dataTypeOrTransport === "string" &&
					!seekingTransport && !inspected[ dataTypeOrTransport ] ) {
	
					options.dataTypes.unshift( dataTypeOrTransport );
					inspect( dataTypeOrTransport );
					return false;
				} else if ( seekingTransport ) {
					return !( selected = dataTypeOrTransport );
				}
			} );
			return selected;
		}
	
		return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
	}
	
	// A special extend for ajax options
	// that takes "flat" options (not to be deep extended)
	// Fixes #9887
	function ajaxExtend( target, src ) {
		var deep, key,
			flatOptions = jQuery.ajaxSettings.flatOptions || {};
	
		for ( key in src ) {
			if ( src[ key ] !== undefined ) {
				( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
			}
		}
		if ( deep ) {
			jQuery.extend( true, target, deep );
		}
	
		return target;
	}
	
	/* Handles responses to an ajax request:
	 * - finds the right dataType (mediates between content-type and expected dataType)
	 * - returns the corresponding response
	 */
	function ajaxHandleResponses( s, jqXHR, responses ) {
		var firstDataType, ct, finalDataType, type,
			contents = s.contents,
			dataTypes = s.dataTypes;
	
		// Remove auto dataType and get content-type in the process
		while ( dataTypes[ 0 ] === "*" ) {
			dataTypes.shift();
			if ( ct === undefined ) {
				ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
			}
		}
	
		// Check if we're dealing with a known content-type
		if ( ct ) {
			for ( type in contents ) {
				if ( contents[ type ] && contents[ type ].test( ct ) ) {
					dataTypes.unshift( type );
					break;
				}
			}
		}
	
		// Check to see if we have a response for the expected dataType
		if ( dataTypes[ 0 ] in responses ) {
			finalDataType = dataTypes[ 0 ];
		} else {
	
			// Try convertible dataTypes
			for ( type in responses ) {
				if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
					finalDataType = type;
					break;
				}
				if ( !firstDataType ) {
					firstDataType = type;
				}
			}
	
			// Or just use first one
			finalDataType = finalDataType || firstDataType;
		}
	
		// If we found a dataType
		// We add the dataType to the list if needed
		// and return the corresponding response
		if ( finalDataType ) {
			if ( finalDataType !== dataTypes[ 0 ] ) {
				dataTypes.unshift( finalDataType );
			}
			return responses[ finalDataType ];
		}
	}
	
	/* Chain conversions given the request and the original response
	 * Also sets the responseXXX fields on the jqXHR instance
	 */
	function ajaxConvert( s, response, jqXHR, isSuccess ) {
		var conv2, current, conv, tmp, prev,
			converters = {},
	
			// Work with a copy of dataTypes in case we need to modify it for conversion
			dataTypes = s.dataTypes.slice();
	
		// Create converters map with lowercased keys
		if ( dataTypes[ 1 ] ) {
			for ( conv in s.converters ) {
				converters[ conv.toLowerCase() ] = s.converters[ conv ];
			}
		}
	
		current = dataTypes.shift();
	
		// Convert to each sequential dataType
		while ( current ) {
	
			if ( s.responseFields[ current ] ) {
				jqXHR[ s.responseFields[ current ] ] = response;
			}
	
			// Apply the dataFilter if provided
			if ( !prev && isSuccess && s.dataFilter ) {
				response = s.dataFilter( response, s.dataType );
			}
	
			prev = current;
			current = dataTypes.shift();
	
			if ( current ) {
	
				// There's only work to do if current dataType is non-auto
				if ( current === "*" ) {
	
					current = prev;
	
				// Convert response if prev dataType is non-auto and differs from current
				} else if ( prev !== "*" && prev !== current ) {
	
					// Seek a direct converter
					conv = converters[ prev + " " + current ] || converters[ "* " + current ];
	
					// If none found, seek a pair
					if ( !conv ) {
						for ( conv2 in converters ) {
	
							// If conv2 outputs current
							tmp = conv2.split( " " );
							if ( tmp[ 1 ] === current ) {
	
								// If prev can be converted to accepted input
								conv = converters[ prev + " " + tmp[ 0 ] ] ||
									converters[ "* " + tmp[ 0 ] ];
								if ( conv ) {
	
									// Condense equivalence converters
									if ( conv === true ) {
										conv = converters[ conv2 ];
	
									// Otherwise, insert the intermediate dataType
									} else if ( converters[ conv2 ] !== true ) {
										current = tmp[ 0 ];
										dataTypes.unshift( tmp[ 1 ] );
									}
									break;
								}
							}
						}
					}
	
					// Apply converter (if not an equivalence)
					if ( conv !== true ) {
	
						// Unless errors are allowed to bubble, catch and return them
						if ( conv && s[ "throws" ] ) { // jscs:ignore requireDotNotation
							response = conv( response );
						} else {
							try {
								response = conv( response );
							} catch ( e ) {
								return {
									state: "parsererror",
									error: conv ? e : "No conversion from " + prev + " to " + current
								};
							}
						}
					}
				}
			}
		}
	
		return { state: "success", data: response };
	}
	
	jQuery.extend( {
	
		// Counter for holding the number of active queries
		active: 0,
	
		// Last-Modified header cache for next request
		lastModified: {},
		etag: {},
	
		ajaxSettings: {
			url: ajaxLocation,
			type: "GET",
			isLocal: rlocalProtocol.test( ajaxLocParts[ 1 ] ),
			global: true,
			processData: true,
			async: true,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			/*
			timeout: 0,
			data: null,
			dataType: null,
			username: null,
			password: null,
			cache: null,
			throws: false,
			traditional: false,
			headers: {},
			*/
	
			accepts: {
				"*": allTypes,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},
	
			contents: {
				xml: /\bxml\b/,
				html: /\bhtml/,
				json: /\bjson\b/
			},
	
			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},
	
			// Data converters
			// Keys separate source (or catchall "*") and destination types with a single space
			converters: {
	
				// Convert anything to text
				"* text": String,
	
				// Text to html (true = no transformation)
				"text html": true,
	
				// Evaluate text as a json expression
				"text json": jQuery.parseJSON,
	
				// Parse text as xml
				"text xml": jQuery.parseXML
			},
	
			// For options that shouldn't be deep extended:
			// you can add your own custom options here if
			// and when you create one that shouldn't be
			// deep extended (see ajaxExtend)
			flatOptions: {
				url: true,
				context: true
			}
		},
	
		// Creates a full fledged settings object into target
		// with both ajaxSettings and settings fields.
		// If target is omitted, writes into ajaxSettings.
		ajaxSetup: function( target, settings ) {
			return settings ?
	
				// Building a settings object
				ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :
	
				// Extending ajaxSettings
				ajaxExtend( jQuery.ajaxSettings, target );
		},
	
		ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
		ajaxTransport: addToPrefiltersOrTransports( transports ),
	
		// Main method
		ajax: function( url, options ) {
	
			// If url is an object, simulate pre-1.5 signature
			if ( typeof url === "object" ) {
				options = url;
				url = undefined;
			}
	
			// Force options to be an object
			options = options || {};
	
			var
	
				// Cross-domain detection vars
				parts,
	
				// Loop variable
				i,
	
				// URL without anti-cache param
				cacheURL,
	
				// Response headers as string
				responseHeadersString,
	
				// timeout handle
				timeoutTimer,
	
				// To know if global events are to be dispatched
				fireGlobals,
	
				transport,
	
				// Response headers
				responseHeaders,
	
				// Create the final options object
				s = jQuery.ajaxSetup( {}, options ),
	
				// Callbacks context
				callbackContext = s.context || s,
	
				// Context for global events is callbackContext if it is a DOM node or jQuery collection
				globalEventContext = s.context &&
					( callbackContext.nodeType || callbackContext.jquery ) ?
						jQuery( callbackContext ) :
						jQuery.event,
	
				// Deferreds
				deferred = jQuery.Deferred(),
				completeDeferred = jQuery.Callbacks( "once memory" ),
	
				// Status-dependent callbacks
				statusCode = s.statusCode || {},
	
				// Headers (they are sent all at once)
				requestHeaders = {},
				requestHeadersNames = {},
	
				// The jqXHR state
				state = 0,
	
				// Default abort message
				strAbort = "canceled",
	
				// Fake xhr
				jqXHR = {
					readyState: 0,
	
					// Builds headers hashtable if needed
					getResponseHeader: function( key ) {
						var match;
						if ( state === 2 ) {
							if ( !responseHeaders ) {
								responseHeaders = {};
								while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
									responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
								}
							}
							match = responseHeaders[ key.toLowerCase() ];
						}
						return match == null ? null : match;
					},
	
					// Raw string
					getAllResponseHeaders: function() {
						return state === 2 ? responseHeadersString : null;
					},
	
					// Caches the header
					setRequestHeader: function( name, value ) {
						var lname = name.toLowerCase();
						if ( !state ) {
							name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;
							requestHeaders[ name ] = value;
						}
						return this;
					},
	
					// Overrides response content-type header
					overrideMimeType: function( type ) {
						if ( !state ) {
							s.mimeType = type;
						}
						return this;
					},
	
					// Status-dependent callbacks
					statusCode: function( map ) {
						var code;
						if ( map ) {
							if ( state < 2 ) {
								for ( code in map ) {
	
									// Lazy-add the new callback in a way that preserves old ones
									statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
								}
							} else {
	
								// Execute the appropriate callbacks
								jqXHR.always( map[ jqXHR.status ] );
							}
						}
						return this;
					},
	
					// Cancel the request
					abort: function( statusText ) {
						var finalText = statusText || strAbort;
						if ( transport ) {
							transport.abort( finalText );
						}
						done( 0, finalText );
						return this;
					}
				};
	
			// Attach deferreds
			deferred.promise( jqXHR ).complete = completeDeferred.add;
			jqXHR.success = jqXHR.done;
			jqXHR.error = jqXHR.fail;
	
			// Remove hash character (#7531: and string promotion)
			// Add protocol if not provided (#5866: IE7 issue with protocol-less urls)
			// Handle falsy url in the settings object (#10093: consistency with old signature)
			// We also use the url parameter if available
			s.url = ( ( url || s.url || ajaxLocation ) + "" )
				.replace( rhash, "" )
				.replace( rprotocol, ajaxLocParts[ 1 ] + "//" );
	
			// Alias method option to type as per ticket #12004
			s.type = options.method || options.type || s.method || s.type;
	
			// Extract dataTypes list
			s.dataTypes = jQuery.trim( s.dataType || "*" ).toLowerCase().match( rnotwhite ) || [ "" ];
	
			// A cross-domain request is in order when we have a protocol:host:port mismatch
			if ( s.crossDomain == null ) {
				parts = rurl.exec( s.url.toLowerCase() );
				s.crossDomain = !!( parts &&
					( parts[ 1 ] !== ajaxLocParts[ 1 ] || parts[ 2 ] !== ajaxLocParts[ 2 ] ||
						( parts[ 3 ] || ( parts[ 1 ] === "http:" ? "80" : "443" ) ) !==
							( ajaxLocParts[ 3 ] || ( ajaxLocParts[ 1 ] === "http:" ? "80" : "443" ) ) )
				);
			}
	
			// Convert data if not already a string
			if ( s.data && s.processData && typeof s.data !== "string" ) {
				s.data = jQuery.param( s.data, s.traditional );
			}
	
			// Apply prefilters
			inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );
	
			// If request was aborted inside a prefilter, stop there
			if ( state === 2 ) {
				return jqXHR;
			}
	
			// We can fire global events as of now if asked to
			// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
			fireGlobals = jQuery.event && s.global;
	
			// Watch for a new set of requests
			if ( fireGlobals && jQuery.active++ === 0 ) {
				jQuery.event.trigger( "ajaxStart" );
			}
	
			// Uppercase the type
			s.type = s.type.toUpperCase();
	
			// Determine if request has content
			s.hasContent = !rnoContent.test( s.type );
	
			// Save the URL in case we're toying with the If-Modified-Since
			// and/or If-None-Match header later on
			cacheURL = s.url;
	
			// More options handling for requests with no content
			if ( !s.hasContent ) {
	
				// If data is available, append data to url
				if ( s.data ) {
					cacheURL = ( s.url += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data );
	
					// #9682: remove data so that it's not used in an eventual retry
					delete s.data;
				}
	
				// Add anti-cache in url if needed
				if ( s.cache === false ) {
					s.url = rts.test( cacheURL ) ?
	
						// If there is already a '_' parameter, set its value
						cacheURL.replace( rts, "$1_=" + nonce++ ) :
	
						// Otherwise add one to the end
						cacheURL + ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + nonce++;
				}
			}
	
			// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
			if ( s.ifModified ) {
				if ( jQuery.lastModified[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
				}
				if ( jQuery.etag[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
				}
			}
	
			// Set the correct header, if data is being sent
			if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
				jqXHR.setRequestHeader( "Content-Type", s.contentType );
			}
	
			// Set the Accepts header for the server, depending on the dataType
			jqXHR.setRequestHeader(
				"Accept",
				s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
					s.accepts[ s.dataTypes[ 0 ] ] +
						( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
					s.accepts[ "*" ]
			);
	
			// Check for headers option
			for ( i in s.headers ) {
				jqXHR.setRequestHeader( i, s.headers[ i ] );
			}
	
			// Allow custom headers/mimetypes and early abort
			if ( s.beforeSend &&
				( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {
	
				// Abort if not done already and return
				return jqXHR.abort();
			}
	
			// aborting is no longer a cancellation
			strAbort = "abort";
	
			// Install callbacks on deferreds
			for ( i in { success: 1, error: 1, complete: 1 } ) {
				jqXHR[ i ]( s[ i ] );
			}
	
			// Get transport
			transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );
	
			// If no transport, we auto-abort
			if ( !transport ) {
				done( -1, "No Transport" );
			} else {
				jqXHR.readyState = 1;
	
				// Send global event
				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
				}
	
				// If request was aborted inside ajaxSend, stop there
				if ( state === 2 ) {
					return jqXHR;
				}
	
				// Timeout
				if ( s.async && s.timeout > 0 ) {
					timeoutTimer = window.setTimeout( function() {
						jqXHR.abort( "timeout" );
					}, s.timeout );
				}
	
				try {
					state = 1;
					transport.send( requestHeaders, done );
				} catch ( e ) {
	
					// Propagate exception as error if not done
					if ( state < 2 ) {
						done( -1, e );
	
					// Simply rethrow otherwise
					} else {
						throw e;
					}
				}
			}
	
			// Callback for when everything is done
			function done( status, nativeStatusText, responses, headers ) {
				var isSuccess, success, error, response, modified,
					statusText = nativeStatusText;
	
				// Called once
				if ( state === 2 ) {
					return;
				}
	
				// State is "done" now
				state = 2;
	
				// Clear timeout if it exists
				if ( timeoutTimer ) {
					window.clearTimeout( timeoutTimer );
				}
	
				// Dereference transport for early garbage collection
				// (no matter how long the jqXHR object will be used)
				transport = undefined;
	
				// Cache response headers
				responseHeadersString = headers || "";
	
				// Set readyState
				jqXHR.readyState = status > 0 ? 4 : 0;
	
				// Determine if successful
				isSuccess = status >= 200 && status < 300 || status === 304;
	
				// Get response data
				if ( responses ) {
					response = ajaxHandleResponses( s, jqXHR, responses );
				}
	
				// Convert no matter what (that way responseXXX fields are always set)
				response = ajaxConvert( s, response, jqXHR, isSuccess );
	
				// If successful, handle type chaining
				if ( isSuccess ) {
	
					// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
					if ( s.ifModified ) {
						modified = jqXHR.getResponseHeader( "Last-Modified" );
						if ( modified ) {
							jQuery.lastModified[ cacheURL ] = modified;
						}
						modified = jqXHR.getResponseHeader( "etag" );
						if ( modified ) {
							jQuery.etag[ cacheURL ] = modified;
						}
					}
	
					// if no content
					if ( status === 204 || s.type === "HEAD" ) {
						statusText = "nocontent";
	
					// if not modified
					} else if ( status === 304 ) {
						statusText = "notmodified";
	
					// If we have data, let's convert it
					} else {
						statusText = response.state;
						success = response.data;
						error = response.error;
						isSuccess = !error;
					}
				} else {
	
					// We extract error from statusText
					// then normalize statusText and status for non-aborts
					error = statusText;
					if ( status || !statusText ) {
						statusText = "error";
						if ( status < 0 ) {
							status = 0;
						}
					}
				}
	
				// Set data for the fake xhr object
				jqXHR.status = status;
				jqXHR.statusText = ( nativeStatusText || statusText ) + "";
	
				// Success/Error
				if ( isSuccess ) {
					deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
				} else {
					deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
				}
	
				// Status-dependent callbacks
				jqXHR.statusCode( statusCode );
				statusCode = undefined;
	
				if ( fireGlobals ) {
					globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
						[ jqXHR, s, isSuccess ? success : error ] );
				}
	
				// Complete
				completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );
	
				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );
	
					// Handle the global AJAX counter
					if ( !( --jQuery.active ) ) {
						jQuery.event.trigger( "ajaxStop" );
					}
				}
			}
	
			return jqXHR;
		},
	
		getJSON: function( url, data, callback ) {
			return jQuery.get( url, data, callback, "json" );
		},
	
		getScript: function( url, callback ) {
			return jQuery.get( url, undefined, callback, "script" );
		}
	} );
	
	jQuery.each( [ "get", "post" ], function( i, method ) {
		jQuery[ method ] = function( url, data, callback, type ) {
	
			// shift arguments if data argument was omitted
			if ( jQuery.isFunction( data ) ) {
				type = type || callback;
				callback = data;
				data = undefined;
			}
	
			// The url can be an options object (which then must have .url)
			return jQuery.ajax( jQuery.extend( {
				url: url,
				type: method,
				dataType: type,
				data: data,
				success: callback
			}, jQuery.isPlainObject( url ) && url ) );
		};
	} );
	
	
	jQuery._evalUrl = function( url ) {
		return jQuery.ajax( {
			url: url,
	
			// Make this explicit, since user can override this through ajaxSetup (#11264)
			type: "GET",
			dataType: "script",
			cache: true,
			async: false,
			global: false,
			"throws": true
		} );
	};
	
	
	jQuery.fn.extend( {
		wrapAll: function( html ) {
			if ( jQuery.isFunction( html ) ) {
				return this.each( function( i ) {
					jQuery( this ).wrapAll( html.call( this, i ) );
				} );
			}
	
			if ( this[ 0 ] ) {
	
				// The elements to wrap the target around
				var wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );
	
				if ( this[ 0 ].parentNode ) {
					wrap.insertBefore( this[ 0 ] );
				}
	
				wrap.map( function() {
					var elem = this;
	
					while ( elem.firstChild && elem.firstChild.nodeType === 1 ) {
						elem = elem.firstChild;
					}
	
					return elem;
				} ).append( this );
			}
	
			return this;
		},
	
		wrapInner: function( html ) {
			if ( jQuery.isFunction( html ) ) {
				return this.each( function( i ) {
					jQuery( this ).wrapInner( html.call( this, i ) );
				} );
			}
	
			return this.each( function() {
				var self = jQuery( this ),
					contents = self.contents();
	
				if ( contents.length ) {
					contents.wrapAll( html );
	
				} else {
					self.append( html );
				}
			} );
		},
	
		wrap: function( html ) {
			var isFunction = jQuery.isFunction( html );
	
			return this.each( function( i ) {
				jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
			} );
		},
	
		unwrap: function() {
			return this.parent().each( function() {
				if ( !jQuery.nodeName( this, "body" ) ) {
					jQuery( this ).replaceWith( this.childNodes );
				}
			} ).end();
		}
	} );
	
	
	function getDisplay( elem ) {
		return elem.style && elem.style.display || jQuery.css( elem, "display" );
	}
	
	function filterHidden( elem ) {
	
		// Disconnected elements are considered hidden
		if ( !jQuery.contains( elem.ownerDocument || document, elem ) ) {
			return true;
		}
		while ( elem && elem.nodeType === 1 ) {
			if ( getDisplay( elem ) === "none" || elem.type === "hidden" ) {
				return true;
			}
			elem = elem.parentNode;
		}
		return false;
	}
	
	jQuery.expr.filters.hidden = function( elem ) {
	
		// Support: Opera <= 12.12
		// Opera reports offsetWidths and offsetHeights less than zero on some elements
		return support.reliableHiddenOffsets() ?
			( elem.offsetWidth <= 0 && elem.offsetHeight <= 0 &&
				!elem.getClientRects().length ) :
				filterHidden( elem );
	};
	
	jQuery.expr.filters.visible = function( elem ) {
		return !jQuery.expr.filters.hidden( elem );
	};
	
	
	
	
	var r20 = /%20/g,
		rbracket = /\[\]$/,
		rCRLF = /\r?\n/g,
		rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
		rsubmittable = /^(?:input|select|textarea|keygen)/i;
	
	function buildParams( prefix, obj, traditional, add ) {
		var name;
	
		if ( jQuery.isArray( obj ) ) {
	
			// Serialize array item.
			jQuery.each( obj, function( i, v ) {
				if ( traditional || rbracket.test( prefix ) ) {
	
					// Treat each array item as a scalar.
					add( prefix, v );
	
				} else {
	
					// Item is non-scalar (array or object), encode its numeric index.
					buildParams(
						prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
						v,
						traditional,
						add
					);
				}
			} );
	
		} else if ( !traditional && jQuery.type( obj ) === "object" ) {
	
			// Serialize object item.
			for ( name in obj ) {
				buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
			}
	
		} else {
	
			// Serialize scalar item.
			add( prefix, obj );
		}
	}
	
	// Serialize an array of form elements or a set of
	// key/values into a query string
	jQuery.param = function( a, traditional ) {
		var prefix,
			s = [],
			add = function( key, value ) {
	
				// If value is a function, invoke it and return its value
				value = jQuery.isFunction( value ) ? value() : ( value == null ? "" : value );
				s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
			};
	
		// Set traditional to true for jQuery <= 1.3.2 behavior.
		if ( traditional === undefined ) {
			traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
		}
	
		// If an array was passed in, assume that it is an array of form elements.
		if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {
	
			// Serialize the form elements
			jQuery.each( a, function() {
				add( this.name, this.value );
			} );
	
		} else {
	
			// If traditional, encode the "old" way (the way 1.3.2 or older
			// did it), otherwise encode params recursively.
			for ( prefix in a ) {
				buildParams( prefix, a[ prefix ], traditional, add );
			}
		}
	
		// Return the resulting serialization
		return s.join( "&" ).replace( r20, "+" );
	};
	
	jQuery.fn.extend( {
		serialize: function() {
			return jQuery.param( this.serializeArray() );
		},
		serializeArray: function() {
			return this.map( function() {
	
				// Can add propHook for "elements" to filter or add form elements
				var elements = jQuery.prop( this, "elements" );
				return elements ? jQuery.makeArray( elements ) : this;
			} )
			.filter( function() {
				var type = this.type;
	
				// Use .is(":disabled") so that fieldset[disabled] works
				return this.name && !jQuery( this ).is( ":disabled" ) &&
					rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
					( this.checked || !rcheckableType.test( type ) );
			} )
			.map( function( i, elem ) {
				var val = jQuery( this ).val();
	
				return val == null ?
					null :
					jQuery.isArray( val ) ?
						jQuery.map( val, function( val ) {
							return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
						} ) :
						{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
			} ).get();
		}
	} );
	
	
	// Create the request object
	// (This is still attached to ajaxSettings for backward compatibility)
	jQuery.ajaxSettings.xhr = window.ActiveXObject !== undefined ?
	
		// Support: IE6-IE8
		function() {
	
			// XHR cannot access local files, always use ActiveX for that case
			if ( this.isLocal ) {
				return createActiveXHR();
			}
	
			// Support: IE 9-11
			// IE seems to error on cross-domain PATCH requests when ActiveX XHR
			// is used. In IE 9+ always use the native XHR.
			// Note: this condition won't catch Edge as it doesn't define
			// document.documentMode but it also doesn't support ActiveX so it won't
			// reach this code.
			if ( document.documentMode > 8 ) {
				return createStandardXHR();
			}
	
			// Support: IE<9
			// oldIE XHR does not support non-RFC2616 methods (#13240)
			// See http://msdn.microsoft.com/en-us/library/ie/ms536648(v=vs.85).aspx
			// and http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9
			// Although this check for six methods instead of eight
			// since IE also does not support "trace" and "connect"
			return /^(get|post|head|put|delete|options)$/i.test( this.type ) &&
				createStandardXHR() || createActiveXHR();
		} :
	
		// For all other browsers, use the standard XMLHttpRequest object
		createStandardXHR;
	
	var xhrId = 0,
		xhrCallbacks = {},
		xhrSupported = jQuery.ajaxSettings.xhr();
	
	// Support: IE<10
	// Open requests must be manually aborted on unload (#5280)
	// See https://support.microsoft.com/kb/2856746 for more info
	if ( window.attachEvent ) {
		window.attachEvent( "onunload", function() {
			for ( var key in xhrCallbacks ) {
				xhrCallbacks[ key ]( undefined, true );
			}
		} );
	}
	
	// Determine support properties
	support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
	xhrSupported = support.ajax = !!xhrSupported;
	
	// Create transport if the browser can provide an xhr
	if ( xhrSupported ) {
	
		jQuery.ajaxTransport( function( options ) {
	
			// Cross domain only allowed if supported through XMLHttpRequest
			if ( !options.crossDomain || support.cors ) {
	
				var callback;
	
				return {
					send: function( headers, complete ) {
						var i,
							xhr = options.xhr(),
							id = ++xhrId;
	
						// Open the socket
						xhr.open(
							options.type,
							options.url,
							options.async,
							options.username,
							options.password
						);
	
						// Apply custom fields if provided
						if ( options.xhrFields ) {
							for ( i in options.xhrFields ) {
								xhr[ i ] = options.xhrFields[ i ];
							}
						}
	
						// Override mime type if needed
						if ( options.mimeType && xhr.overrideMimeType ) {
							xhr.overrideMimeType( options.mimeType );
						}
	
						// X-Requested-With header
						// For cross-domain requests, seeing as conditions for a preflight are
						// akin to a jigsaw puzzle, we simply never set it to be sure.
						// (it can always be set on a per-request basis or even using ajaxSetup)
						// For same-domain requests, won't change header if already provided.
						if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
							headers[ "X-Requested-With" ] = "XMLHttpRequest";
						}
	
						// Set headers
						for ( i in headers ) {
	
							// Support: IE<9
							// IE's ActiveXObject throws a 'Type Mismatch' exception when setting
							// request header to a null-value.
							//
							// To keep consistent with other XHR implementations, cast the value
							// to string and ignore `undefined`.
							if ( headers[ i ] !== undefined ) {
								xhr.setRequestHeader( i, headers[ i ] + "" );
							}
						}
	
						// Do send the request
						// This may raise an exception which is actually
						// handled in jQuery.ajax (so no try/catch here)
						xhr.send( ( options.hasContent && options.data ) || null );
	
						// Listener
						callback = function( _, isAbort ) {
							var status, statusText, responses;
	
							// Was never called and is aborted or complete
							if ( callback && ( isAbort || xhr.readyState === 4 ) ) {
	
								// Clean up
								delete xhrCallbacks[ id ];
								callback = undefined;
								xhr.onreadystatechange = jQuery.noop;
	
								// Abort manually if needed
								if ( isAbort ) {
									if ( xhr.readyState !== 4 ) {
										xhr.abort();
									}
								} else {
									responses = {};
									status = xhr.status;
	
									// Support: IE<10
									// Accessing binary-data responseText throws an exception
									// (#11426)
									if ( typeof xhr.responseText === "string" ) {
										responses.text = xhr.responseText;
									}
	
									// Firefox throws an exception when accessing
									// statusText for faulty cross-domain requests
									try {
										statusText = xhr.statusText;
									} catch ( e ) {
	
										// We normalize with Webkit giving an empty statusText
										statusText = "";
									}
	
									// Filter status for non standard behaviors
	
									// If the request is local and we have data: assume a success
									// (success with no data won't get notified, that's the best we
									// can do given current implementations)
									if ( !status && options.isLocal && !options.crossDomain ) {
										status = responses.text ? 200 : 404;
	
									// IE - #1450: sometimes returns 1223 when it should be 204
									} else if ( status === 1223 ) {
										status = 204;
									}
								}
							}
	
							// Call complete if needed
							if ( responses ) {
								complete( status, statusText, responses, xhr.getAllResponseHeaders() );
							}
						};
	
						// Do send the request
						// `xhr.send` may raise an exception, but it will be
						// handled in jQuery.ajax (so no try/catch here)
						if ( !options.async ) {
	
							// If we're in sync mode we fire the callback
							callback();
						} else if ( xhr.readyState === 4 ) {
	
							// (IE6 & IE7) if it's in cache and has been
							// retrieved directly we need to fire the callback
							window.setTimeout( callback );
						} else {
	
							// Register the callback, but delay it in case `xhr.send` throws
							// Add to the list of active xhr callbacks
							xhr.onreadystatechange = xhrCallbacks[ id ] = callback;
						}
					},
	
					abort: function() {
						if ( callback ) {
							callback( undefined, true );
						}
					}
				};
			}
		} );
	}
	
	// Functions to create xhrs
	function createStandardXHR() {
		try {
			return new window.XMLHttpRequest();
		} catch ( e ) {}
	}
	
	function createActiveXHR() {
		try {
			return new window.ActiveXObject( "Microsoft.XMLHTTP" );
		} catch ( e ) {}
	}
	
	
	
	
	// Install script dataType
	jQuery.ajaxSetup( {
		accepts: {
			script: "text/javascript, application/javascript, " +
				"application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /\b(?:java|ecma)script\b/
		},
		converters: {
			"text script": function( text ) {
				jQuery.globalEval( text );
				return text;
			}
		}
	} );
	
	// Handle cache's special case and global
	jQuery.ajaxPrefilter( "script", function( s ) {
		if ( s.cache === undefined ) {
			s.cache = false;
		}
		if ( s.crossDomain ) {
			s.type = "GET";
			s.global = false;
		}
	} );
	
	// Bind script tag hack transport
	jQuery.ajaxTransport( "script", function( s ) {
	
		// This transport only deals with cross domain requests
		if ( s.crossDomain ) {
	
			var script,
				head = document.head || jQuery( "head" )[ 0 ] || document.documentElement;
	
			return {
	
				send: function( _, callback ) {
	
					script = document.createElement( "script" );
	
					script.async = true;
	
					if ( s.scriptCharset ) {
						script.charset = s.scriptCharset;
					}
	
					script.src = s.url;
	
					// Attach handlers for all browsers
					script.onload = script.onreadystatechange = function( _, isAbort ) {
	
						if ( isAbort || !script.readyState || /loaded|complete/.test( script.readyState ) ) {
	
							// Handle memory leak in IE
							script.onload = script.onreadystatechange = null;
	
							// Remove the script
							if ( script.parentNode ) {
								script.parentNode.removeChild( script );
							}
	
							// Dereference the script
							script = null;
	
							// Callback if not abort
							if ( !isAbort ) {
								callback( 200, "success" );
							}
						}
					};
	
					// Circumvent IE6 bugs with base elements (#2709 and #4378) by prepending
					// Use native DOM manipulation to avoid our domManip AJAX trickery
					head.insertBefore( script, head.firstChild );
				},
	
				abort: function() {
					if ( script ) {
						script.onload( undefined, true );
					}
				}
			};
		}
	} );
	
	
	
	
	var oldCallbacks = [],
		rjsonp = /(=)\?(?=&|$)|\?\?/;
	
	// Default jsonp settings
	jQuery.ajaxSetup( {
		jsonp: "callback",
		jsonpCallback: function() {
			var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
			this[ callback ] = true;
			return callback;
		}
	} );
	
	// Detect, normalize options and install callbacks for jsonp requests
	jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {
	
		var callbackName, overwritten, responseContainer,
			jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
				"url" :
				typeof s.data === "string" &&
					( s.contentType || "" )
						.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
					rjsonp.test( s.data ) && "data"
			);
	
		// Handle iff the expected data type is "jsonp" or we have a parameter to set
		if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {
	
			// Get callback name, remembering preexisting value associated with it
			callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
				s.jsonpCallback() :
				s.jsonpCallback;
	
			// Insert callback into url or form data
			if ( jsonProp ) {
				s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
			} else if ( s.jsonp !== false ) {
				s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
			}
	
			// Use data converter to retrieve json after script execution
			s.converters[ "script json" ] = function() {
				if ( !responseContainer ) {
					jQuery.error( callbackName + " was not called" );
				}
				return responseContainer[ 0 ];
			};
	
			// force json dataType
			s.dataTypes[ 0 ] = "json";
	
			// Install callback
			overwritten = window[ callbackName ];
			window[ callbackName ] = function() {
				responseContainer = arguments;
			};
	
			// Clean-up function (fires after converters)
			jqXHR.always( function() {
	
				// If previous value didn't exist - remove it
				if ( overwritten === undefined ) {
					jQuery( window ).removeProp( callbackName );
	
				// Otherwise restore preexisting value
				} else {
					window[ callbackName ] = overwritten;
				}
	
				// Save back as free
				if ( s[ callbackName ] ) {
	
					// make sure that re-using the options doesn't screw things around
					s.jsonpCallback = originalSettings.jsonpCallback;
	
					// save the callback name for future use
					oldCallbacks.push( callbackName );
				}
	
				// Call if it was a function and we have a response
				if ( responseContainer && jQuery.isFunction( overwritten ) ) {
					overwritten( responseContainer[ 0 ] );
				}
	
				responseContainer = overwritten = undefined;
			} );
	
			// Delegate to script
			return "script";
		}
	} );
	
	
	
	
	// data: string of html
	// context (optional): If specified, the fragment will be created in this context,
	// defaults to document
	// keepScripts (optional): If true, will include scripts passed in the html string
	jQuery.parseHTML = function( data, context, keepScripts ) {
		if ( !data || typeof data !== "string" ) {
			return null;
		}
		if ( typeof context === "boolean" ) {
			keepScripts = context;
			context = false;
		}
		context = context || document;
	
		var parsed = rsingleTag.exec( data ),
			scripts = !keepScripts && [];
	
		// Single tag
		if ( parsed ) {
			return [ context.createElement( parsed[ 1 ] ) ];
		}
	
		parsed = buildFragment( [ data ], context, scripts );
	
		if ( scripts && scripts.length ) {
			jQuery( scripts ).remove();
		}
	
		return jQuery.merge( [], parsed.childNodes );
	};
	
	
	// Keep a copy of the old load method
	var _load = jQuery.fn.load;
	
	/**
	 * Load a url into a page
	 */
	jQuery.fn.load = function( url, params, callback ) {
		if ( typeof url !== "string" && _load ) {
			return _load.apply( this, arguments );
		}
	
		var selector, type, response,
			self = this,
			off = url.indexOf( " " );
	
		if ( off > -1 ) {
			selector = jQuery.trim( url.slice( off, url.length ) );
			url = url.slice( 0, off );
		}
	
		// If it's a function
		if ( jQuery.isFunction( params ) ) {
	
			// We assume that it's the callback
			callback = params;
			params = undefined;
	
		// Otherwise, build a param string
		} else if ( params && typeof params === "object" ) {
			type = "POST";
		}
	
		// If we have elements to modify, make the request
		if ( self.length > 0 ) {
			jQuery.ajax( {
				url: url,
	
				// If "type" variable is undefined, then "GET" method will be used.
				// Make value of this field explicit since
				// user can override it through ajaxSetup method
				type: type || "GET",
				dataType: "html",
				data: params
			} ).done( function( responseText ) {
	
				// Save response for use in complete callback
				response = arguments;
	
				self.html( selector ?
	
					// If a selector was specified, locate the right elements in a dummy div
					// Exclude scripts to avoid IE 'Permission Denied' errors
					jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :
	
					// Otherwise use the full result
					responseText );
	
			// If the request succeeds, this function gets "data", "status", "jqXHR"
			// but they are ignored because response was set above.
			// If it fails, this function gets "jqXHR", "status", "error"
			} ).always( callback && function( jqXHR, status ) {
				self.each( function() {
					callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
				} );
			} );
		}
	
		return this;
	};
	
	
	
	
	// Attach a bunch of functions for handling common AJAX events
	jQuery.each( [
		"ajaxStart",
		"ajaxStop",
		"ajaxComplete",
		"ajaxError",
		"ajaxSuccess",
		"ajaxSend"
	], function( i, type ) {
		jQuery.fn[ type ] = function( fn ) {
			return this.on( type, fn );
		};
	} );
	
	
	
	
	jQuery.expr.filters.animated = function( elem ) {
		return jQuery.grep( jQuery.timers, function( fn ) {
			return elem === fn.elem;
		} ).length;
	};
	
	
	
	
	
	/**
	 * Gets a window from an element
	 */
	function getWindow( elem ) {
		return jQuery.isWindow( elem ) ?
			elem :
			elem.nodeType === 9 ?
				elem.defaultView || elem.parentWindow :
				false;
	}
	
	jQuery.offset = {
		setOffset: function( elem, options, i ) {
			var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
				position = jQuery.css( elem, "position" ),
				curElem = jQuery( elem ),
				props = {};
	
			// set position first, in-case top/left are set even on static elem
			if ( position === "static" ) {
				elem.style.position = "relative";
			}
	
			curOffset = curElem.offset();
			curCSSTop = jQuery.css( elem, "top" );
			curCSSLeft = jQuery.css( elem, "left" );
			calculatePosition = ( position === "absolute" || position === "fixed" ) &&
				jQuery.inArray( "auto", [ curCSSTop, curCSSLeft ] ) > -1;
	
			// need to be able to calculate position if either top or left
			// is auto and position is either absolute or fixed
			if ( calculatePosition ) {
				curPosition = curElem.position();
				curTop = curPosition.top;
				curLeft = curPosition.left;
			} else {
				curTop = parseFloat( curCSSTop ) || 0;
				curLeft = parseFloat( curCSSLeft ) || 0;
			}
	
			if ( jQuery.isFunction( options ) ) {
	
				// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
				options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
			}
	
			if ( options.top != null ) {
				props.top = ( options.top - curOffset.top ) + curTop;
			}
			if ( options.left != null ) {
				props.left = ( options.left - curOffset.left ) + curLeft;
			}
	
			if ( "using" in options ) {
				options.using.call( elem, props );
			} else {
				curElem.css( props );
			}
		}
	};
	
	jQuery.fn.extend( {
		offset: function( options ) {
			if ( arguments.length ) {
				return options === undefined ?
					this :
					this.each( function( i ) {
						jQuery.offset.setOffset( this, options, i );
					} );
			}
	
			var docElem, win,
				box = { top: 0, left: 0 },
				elem = this[ 0 ],
				doc = elem && elem.ownerDocument;
	
			if ( !doc ) {
				return;
			}
	
			docElem = doc.documentElement;
	
			// Make sure it's not a disconnected DOM node
			if ( !jQuery.contains( docElem, elem ) ) {
				return box;
			}
	
			// If we don't have gBCR, just use 0,0 rather than error
			// BlackBerry 5, iOS 3 (original iPhone)
			if ( typeof elem.getBoundingClientRect !== "undefined" ) {
				box = elem.getBoundingClientRect();
			}
			win = getWindow( doc );
			return {
				top: box.top  + ( win.pageYOffset || docElem.scrollTop )  - ( docElem.clientTop  || 0 ),
				left: box.left + ( win.pageXOffset || docElem.scrollLeft ) - ( docElem.clientLeft || 0 )
			};
		},
	
		position: function() {
			if ( !this[ 0 ] ) {
				return;
			}
	
			var offsetParent, offset,
				parentOffset = { top: 0, left: 0 },
				elem = this[ 0 ];
	
			// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
			// because it is its only offset parent
			if ( jQuery.css( elem, "position" ) === "fixed" ) {
	
				// we assume that getBoundingClientRect is available when computed position is fixed
				offset = elem.getBoundingClientRect();
			} else {
	
				// Get *real* offsetParent
				offsetParent = this.offsetParent();
	
				// Get correct offsets
				offset = this.offset();
				if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
					parentOffset = offsetParent.offset();
				}
	
				// Add offsetParent borders
				parentOffset.top  += jQuery.css( offsetParent[ 0 ], "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true );
			}
	
			// Subtract parent offsets and element margins
			// note: when an element has margin: auto the offsetLeft and marginLeft
			// are the same in Safari causing offset.left to incorrectly be 0
			return {
				top:  offset.top  - parentOffset.top - jQuery.css( elem, "marginTop", true ),
				left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
			};
		},
	
		offsetParent: function() {
			return this.map( function() {
				var offsetParent = this.offsetParent;
	
				while ( offsetParent && ( !jQuery.nodeName( offsetParent, "html" ) &&
					jQuery.css( offsetParent, "position" ) === "static" ) ) {
					offsetParent = offsetParent.offsetParent;
				}
				return offsetParent || documentElement;
			} );
		}
	} );
	
	// Create scrollLeft and scrollTop methods
	jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
		var top = /Y/.test( prop );
	
		jQuery.fn[ method ] = function( val ) {
			return access( this, function( elem, method, val ) {
				var win = getWindow( elem );
	
				if ( val === undefined ) {
					return win ? ( prop in win ) ? win[ prop ] :
						win.document.documentElement[ method ] :
						elem[ method ];
				}
	
				if ( win ) {
					win.scrollTo(
						!top ? val : jQuery( win ).scrollLeft(),
						top ? val : jQuery( win ).scrollTop()
					);
	
				} else {
					elem[ method ] = val;
				}
			}, method, val, arguments.length, null );
		};
	} );
	
	// Support: Safari<7-8+, Chrome<37-44+
	// Add the top/left cssHooks using jQuery.fn.position
	// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
	// getComputedStyle returns percent when specified for top/left/bottom/right
	// rather than make the css module depend on the offset module, we just check for it here
	jQuery.each( [ "top", "left" ], function( i, prop ) {
		jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
			function( elem, computed ) {
				if ( computed ) {
					computed = curCSS( elem, prop );
	
					// if curCSS returns percentage, fallback to offset
					return rnumnonpx.test( computed ) ?
						jQuery( elem ).position()[ prop ] + "px" :
						computed;
				}
			}
		);
	} );
	
	
	// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
	jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
		jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {
	
			// margin is only for outerHeight, outerWidth
			jQuery.fn[ funcName ] = function( margin, value ) {
				var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
					extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );
	
				return access( this, function( elem, type, value ) {
					var doc;
	
					if ( jQuery.isWindow( elem ) ) {
	
						// As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
						// isn't a whole lot we can do. See pull request at this URL for discussion:
						// https://github.com/jquery/jquery/pull/764
						return elem.document.documentElement[ "client" + name ];
					}
	
					// Get document width or height
					if ( elem.nodeType === 9 ) {
						doc = elem.documentElement;
	
						// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
						// whichever is greatest
						// unfortunately, this causes bug #3838 in IE6/8 only,
						// but there is currently no good, small way to fix it.
						return Math.max(
							elem.body[ "scroll" + name ], doc[ "scroll" + name ],
							elem.body[ "offset" + name ], doc[ "offset" + name ],
							doc[ "client" + name ]
						);
					}
	
					return value === undefined ?
	
						// Get width or height on the element, requesting but not forcing parseFloat
						jQuery.css( elem, type, extra ) :
	
						// Set width or height on the element
						jQuery.style( elem, type, value, extra );
				}, type, chainable ? margin : undefined, chainable, null );
			};
		} );
	} );
	
	
	jQuery.fn.extend( {
	
		bind: function( types, data, fn ) {
			return this.on( types, null, data, fn );
		},
		unbind: function( types, fn ) {
			return this.off( types, null, fn );
		},
	
		delegate: function( selector, types, data, fn ) {
			return this.on( types, selector, data, fn );
		},
		undelegate: function( selector, types, fn ) {
	
			// ( namespace ) or ( selector, types [, fn] )
			return arguments.length === 1 ?
				this.off( selector, "**" ) :
				this.off( types, selector || "**", fn );
		}
	} );
	
	// The number of elements contained in the matched element set
	jQuery.fn.size = function() {
		return this.length;
	};
	
	jQuery.fn.andSelf = jQuery.fn.addBack;
	
	
	
	
	// Register as a named AMD module, since jQuery can be concatenated with other
	// files that may use define, but not via a proper concatenation script that
	// understands anonymous AMD modules. A named AMD is safest and most robust
	// way to register. Lowercase jquery is used because AMD module names are
	// derived from file names, and jQuery is normally delivered in a lowercase
	// file name. Do this after creating the global so that if an AMD module wants
	// to call noConflict to hide this version of jQuery, it will work.
	
	// Note that for maximum portability, libraries that are not jQuery should
	// declare themselves as anonymous modules, and avoid setting a global if an
	// AMD loader is present. jQuery is a special case. For more information, see
	// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon
	
	if ( true ) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
			return jQuery;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}
	
	
	
	var
	
		// Map over jQuery in case of overwrite
		_jQuery = window.jQuery,
	
		// Map over the $ in case of overwrite
		_$ = window.$;
	
	jQuery.noConflict = function( deep ) {
		if ( window.$ === jQuery ) {
			window.$ = _$;
		}
	
		if ( deep && window.jQuery === jQuery ) {
			window.jQuery = _jQuery;
		}
	
		return jQuery;
	};
	
	// Expose jQuery and $ identifiers, even in
	// AMD (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
	// and CommonJS for browser emulators (#13566)
	if ( !noGlobal ) {
		window.jQuery = window.$ = jQuery;
	}
	
	return jQuery;
	}));


/***/ })
]);
//# sourceMappingURL=build.js.map