(function ($, w, d) {
    var win = $(w),
        docu = $(d),
        _body = d.body,
        b = $(_body);
    //    var win = $(window), docu = $(document), _body = document.body, b = $(_body);

    $.extend({

        /**
         * Object 转 JSON String
         * @param {Object} c
         * @return {String}
         */
        toJSON: function (c) {
            var JSON = w.JSON;
            if (typeof (JSON) == "object" && JSON.stringify) {
                return JSON.stringify(c)
            }
            var m = typeof (c);
            if (c === null) {
                return "null";
            }
            if (m == "undefined") {
                return undefined;
            }
            if (m == "number" || m == "boolean") {
                return c + "";
            }
            if (m == "string") {
                return $.quoteString(c);
            }
            if (m == "object") {
                if (typeof c.toJSON == "function") {
                    return $.toJSON(c.toJSON());
                }
                if (c.constructor === Date) {
                    var l = c.getUTCMonth() + 1;
                    if (l < 10) {
                        l = "0" + l;
                    }
                    var p = c.getUTCDate();
                    if (p < 10) {
                        p = "0" + p;
                    }
                    var n = c.getUTCFullYear();
                    var q = c.getUTCHours();
                    if (q < 10) {
                        q = "0" + q;
                    }
                    var f = c.getUTCMinutes();
                    if (f < 10) {
                        f = "0" + f;
                    }
                    var r = c.getUTCSeconds();
                    if (r < 10) {
                        r = "0" + r;
                    }
                    var h = c.getUTCMilliseconds();
                    if (h < 100) {
                        h = "0" + h;
                    }
                    if (h < 10) {
                        h = "0" + h;
                    }
                    return '"' + n + "-" + l + "-" + p + "T" + q + ":" + f + ":" + r + "." + h + 'Z"';
                }
                if (c.constructor === Array) {
                    var j = [];
                    for (var g = 0; g < c.length; g++) {
                        j.push($.toJSON(c[g]) || "null");
                    }
                    return "[" + j.join(",") + "]";
                }
                var b = [];
                for (var e in c) {
                    var a;
                    var m = typeof e;
                    if (m == "number") {
                        a = '"' + e + '"';
                    } else {
                        if (m == "string") {
                            a = $.quoteString(e);
                        } else {
                            continue;
                        }
                    }
                    if (typeof c[e] == "function") {
                        continue;
                    }
                    var d = $.toJSON(c[e]);
                    b.push(a + ":" + d);
                }
                return "{" + b.join(", ") + "}";
            }
        },
        /**
         * 非访问函数
         */
        quoteString: function (a) {
            return '"' + a + '"';
        },
        /**
         * JSON String 转 Object
         * 不建议使用
         * @param {String} src
         * @return {Object}
         */
        evalJSON: function (src) {
            var JSON = w.JSON;
            if (typeof (JSON) == "object" && JSON.parse) {
                return JSON.parse(src);
            }
            return eval("(" + src + ")");
        },
        /**
         * JSON String 转 Object
         * @param {String} src
         * @return {Object}
         */
        secureEvalJSON: function (src) {
            var JSON = w.JSON;
            if (typeof (JSON) == "object" && JSON.parse) {
                return JSON.parse(src);
            }
            var filtered = src;
            filtered = filtered.replace(/\\["\\\/bfnrtu]/g, "@");
            filtered = filtered.replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]");
            filtered = filtered.replace(/(?:^|:|,)(?:\s*\[)+/g, "");
            if (/^[\],:{}\s]*$/.test(filtered)) {
                return eval("(" + src + ")");
            } else {
                throw new SyntaxError("Error parsing JSON, source is not valid.");
            }
        },
        /**
         * 替换字符串
         * 支持原生
         * @param {String} template
         * @param {Object} map
         */
        substitute: function (template, map) {
            return template.replace(/\$\{([^\s\:\}]+)(?:\:([^\s\:\}]+))?\}/g, function (match, key, format) {
                if (map[key]) {
                    return map[key];
                } else if (map[key] === 0) {
                    return "0";
                } else {
                    return "";
                }
            });
        },
        /**
         * 获取GET参数
         * @param {String/null} query
         */
        getArgs: function (query) {
            if (!query) {
                query = w.location.search.substring(1);
            } else {
                query = query.split("?");
                query = query[query.length - 1];
            }
            var pairs = query.split("&"),
                args = {};
            for (var i = 0; i < pairs.length; i++) {
                var pos = pairs[i].indexOf('=');
                if (pos == -1) {
                    continue;
                }
                var argname = pairs[i].substring(0, pos),
                    value = pairs[i].substring(pos + 1);
                value = $.decodeURI(value);
                if (!args[argname]) {
                    args[argname] = value;
                } else {
                    if ($.isArray(args[argname])) {
                        args[argname].push(value);
                    } else {
                        var val = args[argname];
                        args[argname] = [];
                        args[argname].push(val);
                        args[argname].push(value);
                    }
                }
            }
            return args;
        },
        /**
         * 转换UTF编码[%40到@]
         * @param {String} str
         */
        decodeURI: function (str) {
            return w.decodeURIComponent(str);
        },
        /**
         * 转换到UTF编码[@到%40]
         * @param {String} str
         */
        encodeURI: function (str) {
            return w.encodeURIComponent(str);
        },
        /**
         * 获取/设置 cookie
         * @param {String} name
         * @param {String} value
         * @param {Object} options
         */
        cookie: function (name, value, options) {
            if (typeof value != 'undefined') { // name and value given, set
                // cookie
                options = options || ({});
                if (value === null) {
                    value = '';
                    options.expires = -1;
                }
                var expires = '';
                if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
                    var date;
                    if (typeof options.expires == 'number') {
                        date = new Date();
                        date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
                    } else {
                        date = options.expires;
                    }
                    expires = '; expires=' + date.toUTCString();
                    // use
                    // expires
                    // attribute,
                    // max-age
                    // is
                    // not
                    // supported
                    // by IE
                }
                var path = options.path ? '; path=' + options.path : '; path=/';
                var domain = options.domain ? '; domain=' + options.domain : '';
                var secure = options.secure ? '; secure' : '';
                d.cookie = [name, '=', w.encodeURIComponent(value), expires, path, domain, secure].join('');
            } else {
                var cookieValue = null;
                if (d.cookie && d.cookie != '') {
                    var cookies = d.cookie.split(';');
                    for (var i = 0; i < cookies.length; i++) {
                        var cookie = $.trim(cookies[i]);
                        if (cookie.substring(0, name.length + 1) == (name + '=')) {
                            cookieValue = w.decodeURIComponent(cookie.substring(name.length + 1));
                            break;
                        }
                    }
                }
                return cookieValue;
            }
        },
        /**
         * Date到String
         * @param {Date/null} value yyyy mm dd HH:MM:SS w?
         * @param {String} type
         */
        format: function (value, type) {
            if (!type) {
                type = value;
                value = new Date();
            }
            if ($.type(value) !== "date") {
                value = new Date();
            }
            return type.replace(/yyyy/g, value.getFullYear()).replace(/mm/g, ("0" + (value.getMonth() + 1)).slice(-2)).replace(/dd/g, ("0" + value.getDate()).slice(-2)).replace(/HH/g, function (match, key, format) {
                return ("00" + value.getHours()).substr(-2, 2);
            }).replace(/MM/g, ("00" + value.getMinutes()).substr(-2, 2)).replace(/SS/g, ("00" + value.getSeconds()).substr(-2, 2)).replace(/W/g, value.getDay());
        },
        timestampToTime: function(timestamp) {
            var date = new Date(timestamp * 1000);//时间戳为10位需*1000，时间戳为13位的话不需乘1000
            var Y = date.getFullYear() + '-';
            var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
            var D = (date.getDate() < 10 ? '0'+date.getDate() : date.getDate()) + ' ';
            var h = (date.getHours() < 10 ? '0'+date.getHours() : date.getHours()) + ':';
            var m = (date.getMinutes() < 10 ? '0'+date.getMinutes() : date.getMinutes()) + ':';
            var s = (date.getSeconds() < 10 ? '0'+date.getSeconds() : date.getSeconds());
            return Y+M+D+h+m+s;
        },
        /**
         * AJAX包装方法
         */
        service: function (key, islogin) {
            if (!(key && key.url)) {
                console && console.log ? alert("未填写URL") : console.log("未填写URL");
                return !1;
            }
            var k = {
                type: 'POST',
                contentType: "application/x-www-form-urlencoded",
                dataType: "json",
                timeout: 5000,
                action: "post", //
                //                jsonp: 'callback',
                data: {},
                error: function (err) {
                    //console.error("error");
                    //console.error(err);
                    // console.error(key);
                }
            };
            var empty = {};
            var solf = this;
            $.extend(empty, k, key);
            //empty.data.date = new Date().getTime();
            empty.url = $.urlmap[key.url];
            empty.action == "get" ? empty.data = {
                data: $.toJSON({
                    "header": {},
                    "req": key.data
                })
            } : null;
            empty.data.date = new Date().getTime();
            empty.success = function (json) {
                try {
                    empty.action == "get" ? (json.resp ? key.success(json.resp) : key.success(json)) : (key.success(json));
                } catch (e) {
                    empty.error(e);
                }
            };
            if (islogin) {
                $.publish("mop.passport.islogin", function (d) {
                    if (d) {
                        $.ajax(empty);
                    } else {
                        $.publish("mop.passport.login", [function () {
                            $.publish("mop.passport.userinfo", [function () {
                                $(".m-topbar-left-login").show();
                                $(".m-topbar-left").hide();
                                if ($("body").attr("flush") == "1") {
                                    location.reload();
                                }
                            }]);
                            $.ajax(empty);
                        }]);
                    }
                });
            } else {
                $.ajax(empty);
            }
        },
        /**
         * 动画定时器方法~
         * {int} frame 帧数
         * {function} call 回调方法 foot 回调参数 步数
         */
        ani: function (args) {
            var arg = {
                frame: 25
                //duration: 1000,
                //            call: function(foot){
                //                return !0;
                //            }
            };
            args = $.extend(args, arg);
            var f = (1000 / args.frame) | 0;
            var dt = 0,
                d = (args.duration / f) > (args.duration / f) | 0 ? ((args.duration / f) | 0) + 1 : (args.duration / f) | 0;
            var index = w.setInterval(function () {
                dt++;
                //console.log(args.call(dt))
                if (dt > d || !(args.call(dt, d))) {
                    w.clearInterval(index);
                    args.end && args.end();
                }
            }, f);
        },
        /**
         * 弹出框
         * @param {Object} args
         */
        pop: function (args) {
            args.bullet ? args.bullet = $(args.bullet) : ((function () {
                throw new Error("大虾你要弹出个虾米东西??偶么知道!");
            })());
            var arg = {
                    //  bullet: "",
                    //  mask: "",
                    target: win

                },
                empty = {},
                position = "absolute",
                offset = {
                    top: 0,
                    left: 0
                };
            $.extend(empty, arg, args);
            empty.target == win || empty.target == w ? (position = "fixed", empty.target = win) : (empty.target = $(empty.target), offset = empty.target.offset());
            //if ($.browser.msie && $.browser.version == "6.0") {
            //    position = "absolute";
            //}
            var that = function () {
                var top = offset.top + empty.target.height() / 2 - empty.bullet.height() / 2;
                var left = offset.left + empty.target.width() / 2 - empty.bullet.width() / 2;
                if (empty.mask) {
                    empty.mask = $(empty.mask).hide().css({
                        position: position,
                        top: offset.top,
                        left: offset.left,
                        width: 0,
                        height: 0
                    }).appendTo(b);
                    empty.mask.css({
                        width: empty.target.width(),
                        height: empty.target.height()
                    });
                }
                empty.bullet.css({
                    position: position,
                    top: top,
                    left: left
                }).appendTo(b);
                return that.show();
            };
            that.show = function () {
                empty.bullet.show();
                empty.mask ? empty.mask.show() : null;
                empty.mask.css({
                    width: empty.target.width(),
                    height: empty.target.height()
                });
                var top = offset.top + empty.target.height() / 2 - empty.bullet.height() / 2;
                var left = offset.left + empty.target.width() / 2 - empty.bullet.width() / 2;
                empty.bullet.css({
                    top: top,
                    left: left
                })
                //if ($.browser.msie && $.browser.version == "6.0") {
                //    $("select").css("visibility", "hidden");
                //}
                return that;
            };
            that.hide = function () {
                empty.bullet.hide();
                empty.mask ? empty.mask.hide() : null;
                //if ($.browser.msie && $.browser.version == "6.0") {
                //    $("select").css("visibility", "inherit");
                //}
                win.off("resize");
                return that;
            };
            win.on("resize", function () {
                if ($(empty.mask).is(":visible")) {
                    that.show();
                } else {
                    win.off("resize");
                }
            });
            return that();
        },
        mousePos: function (e) {
            var x, y;
            var e = e || win.event;
            return {
                x: e.clientX + _body.scrollLeft + d.documentElement.scrollLeft,
                y: e.clientY + _body.scrollTop + d.documentElement.scrollTop
            };
        },
        /**
         *tab切换方法
         *@param {String} tab 要切换的tab的选择器
         *@param {String} con 要切换的对应内容的选择器，可选
         *@param {String} onClass 当前tab要添加的类名
         *@param {String} evt 要触发切换的事件
         *@param {Function} callback 切换完成后执行的函数, 参数：当前tab,切换到的con
         */
        switchTab: function (args) {
            if (!args.tab) throw new Error("没定义要切换的tab的选择器！");
            var opt = {
                onClass: "on",
                evt: "click"
            };
            $.extend(opt, args);
            var tab = $(opt.tab),
                con = opt.con ? $(opt.con) : null;
            tab.eq(0).addClass(opt.onClass);
            con.hide();
            con.eq(0).show();
            tab.on(opt.evt, function () {
                tab.removeClass(opt.onClass);
                $(this).addClass(opt.onClass);
                if (con && con.length > 0) {
                    con.hide();
                    con.eq(tab.index($(this))).show();
                }
                opt.callback && opt.callback($(this), con.eq(tab.index($(this))));
                return false;
            });
        },
        /**
         * 复选框全选
         * @param allObj
         * @param obj
         * @param objOut
         */
        selectAll: function (allObj, obj, objOut) {
            var all = $(allObj);
            var items = $(obj);
            all.click(function () {
                if ($(this).attr("checked")) {
                    items.each(function () {
                        $(this).attr("checked", true);
                        $(this).parents(objOut).addClass('on');
                    });
                } else {
                    items.each(function () {
                        $(this).attr("checked", false);
                        $(this).parents(objOut).removeClass('on');
                    });
                }
            });
            items.click(function () {
                all.attr("checked", false);
                if ($(this).attr("checked")) {
                    $(this).parents(objOut).addClass('on');
                } else {
                    $(this).parents(objOut).removeClass('on');
                }
            });
        },
        total: function () {
            var t = 0,
                that = function () {
                    return Number(t).toFixed(2);
                },
                a = function (n) {
                    if ($.isNumeric(n)) {
                        t = (Number(t) + Number(n)).toFixed(2);
                    }
                },
                b = function (n) {
                    if ($.isNumeric(n)) {
                        t = (Number(t) - Number(n)).toFixed(2);
                    }
                },
                c = function (n) {
                    if ($.isNumeric(n)) {
                        t = (Number(t) * Number(n)).toFixed(2);
                    }
                },
                d = function (n) {
                    if (n == 0) {
                        alert("除数是零吗??");
                        throw new Error("除数是零吗??");
                    }
                    if ($.isNumeric(n)) {
                        t = (Number(t) / Number(n)).toFixed(2);
                    }
                },
                tostring = function () {
                    return Number(t).toFixed(2);
                },
                add = function () {
                    $.each(arguments, function (i, n) {
                        if ($.isArray(n)) {
                            $.each(n, function (x, y) {
                                add(y);
                            });
                        } else {
                            a(n);
                        }
                    });
                    return that;
                },
                red = function () {
                    $.each(arguments, function (i, n) {
                        if ($.isArray(n)) {
                            $.each(n, function (x, y) {
                                red(y);
                            });
                        } else {
                            b(n);
                        }
                    });
                    return that;
                },
                mul = function () {
                    $.each(arguments, function (i, n) {
                        if ($.isArray(n)) {
                            $.each(n, function (x, y) {
                                red(y);
                            });
                        } else {
                            c(n);
                        }
                    });
                    return that;
                },
                exc = function () {
                    $.each(arguments, function (i, n) {
                        if ($.isArray(n)) {
                            $.each(n, function (x, y) {
                                exc(y);
                            });
                        } else {
                            d(n);
                        }
                    });
                    return that;
                },
                arr = [];
            $.each(arguments, function (i, n) {
                arr.push(n);
            });
            add(arr);
            that.toString = tostring;
            that["+"] = that.add = add;
            that["-"] = that.red = red;
            that["x"] = that.mul = mul;
            that["/"] = that.exc = exc;
            return that;
        },
        dialog: function (value, call, args) {
            // window.$.dialog = (window.parent != window) ?  : $.dialog ;
            if (window.parent != window) {
                window.parent.$.dialog(value, call, args);
            } else {
                var arg = {
                        // icon:"",//check，mistake，warning
                        confirm: {
                            literal: "确认",
                            isShow: true
                        },
                        cancel: {
                            literal: "取消",
                            isShow: true
                        }
                    },
                    empty = {},
                    txt = {};
                if (typeof call == "object") {
                    args = call;
                    call = undefined;
                }
                $.extend(empty, arg, args);
                txt.confirmtxt = empty.confirm.literal || "确认";
                txt.canceltxt = empty.cancel.literal || "取消";
                $(".mop-dialog-pop").is(":visible") ? $(".mop-dialog-pop").hide() : null;
                var mask = $(".mop-dialog-mask").size() ? $(".mop-dialog-mask") : $('<div class="mop-dialog-mask"></div>').appendTo("body");
                var bullet = $(".mop-dialog-pop").size() ? $(".mop-dialog-pop").empty().css({
                    "width": "inherit",
                    "height": "inherit"
                }).attr("class", "mop-dialog-pop pos-a oh br4") : $('<div class="mop-dialog-pop pos-a oh br4"> </div>').appendTo("body").hide();
                bullet.html($.substitute('<div class="mop-dialog-border"></div> <div class="mop-dialog-bullet clearfix"> <a href="#" class="fr mop-dialog-close"></a> <div class="tc mop-dialog-main"></div> <div class="mt20 tc mop-dialog-but"> <input type="button" class="mop-dialog-confirm br4" value="${confirmtxt}"><input type="button" class="mop-dialog-cancel br4 hide" value="${canceltxt}"> </div> </div> ', txt));
                var dia = bullet.find(".mop-dialog-main");
                if (typeof value == "string" && empty.icon) {
                    value = '<i class="mop-icon mop-icon-' + empty.icon + '"></i>' + value;
                }
                dia.html(value);
                var close = bullet.find(".mop-dialog-close").add(bullet.find(".mop-dialog-confirm"));
                if (!empty.confirm.isShow) {
                    $('.mop-dialog-confirm').hide();
                } else {
                    $('.mop-dialog-confirm').show();
                    bullet.find(".mop-dialog-confirm").one("click", function () {
                        (typeof call == "function") ? call(true): null;
                    });
                }
                if (typeof call == "function") {
                    if (empty.cancel.isShow) {
                        var cancel = $('.mop-dialog-cancel').show();
                        cancel.add(bullet.find(".mop-dialog-close")).one("click", function () {
                            call(false);
                        });
                        close = close.add(cancel);
                    }
                } else {
                    $('.mop-dialog-cancel').hide();
                }
                var dialog = $.pop({
                    bullet: bullet,
                    //target: ".aa",
                    mask: mask
                });
                close.one("click", function () {
                    dialog.hide()
                });
                // return  dialog;
            };
        }
    });
    $.fn.extend({
        /**
         * 幻灯
         */
        slide: function (args) {
            var arg = {
                    auto: !0,
                    autotime: 5000,
                    item: ".item",
                    grope: ".grope",
                    indexmain: ".indexmain",
                    l: "",
                    r: "",
                    indexdom: '<li></li>',
                    thatindexClass: "on",
                    callback: function () {
                        return true;
                    },
                    end: function (index, that) {}
                },
                empty = {};
            $.extend(empty, arg, args);
            var that = $(this);
            that.find(empty.grope).addClass("slide-grope");
            that.find(empty.item).addClass("slide-item").find("a").on("click", function () {
                return false
            });
            that.find(empty.indexmain).addClass("slide-index");
            if ($(this).size()) {
                $("head").append('<style type="text/css" class="slidestyle">.slide-item{float:left;}.slide-main .slide-item,.slide-main .slides{transition:margin ease 0.3s;-webkit-transition:margin ease 0.3s;}' +
                    (function () {
                        var thw = that.width();
                        var style = "";
                        if (that.size() > 1) {
                            that.each(function (i, n) {
                                n = $(n).addClass("slide-main" + i);
                                // var itemw = n.find(".slide-item").width();
                                var itemw = thw;
                                if (n.find(".slide-item").size() < 2) {
                                    style += '.slide-main' + i + ' .slide-item{-webkit-transform: translateX(' + ((thw - itemw) / 2) + 'px); transform: translateX(' + ((thw - itemw) / 2) + 'px);}';
                                } else {
                                    style += '.slide-main' + i + ' .slide-item:first-of-type{ margin-left: -' + itemw + 'px; } .slide-main' + i + ' .slide-grope{-webkit-transform: translateX(-' + (n.find(".slide-item").size() > 3 ? itemw : 0) + 'px); transform: translateX(-' + (n.find(".slide-item").size() > 3 ? itemw : 0) + 'px);}.slide-main' + i + ' .slide-item{-webkit-transform: translateX(' + ((thw - itemw) / 2) + 'px); transform: translateX(' + ((thw - itemw) / 2) + 'px);}';
                                }
                            });
                        } else {
                            style += (function () {
                                // var itemw = that.find(".slide-item").width();
                                var itemw = thw;
                                if (that.find(".slide-item").size() < 2) {
                                    return empty.grope+" "+empty.item+'{-webkit-transform: translateX(' + ((thw - itemw) / 2) + 'px); transform: translateX(' + ((thw - itemw) / 2) + 'px);}';
                                }
                                return empty.grope+" "+empty.item+':first-of-type{ margin-left: -' + itemw + 'px; } .slide-main '+empty.grope+'{-webkit-transform: translateX(-' + (that.find(".slide-item").size() > 3 ? itemw : 0) + 'px); transform: translateX(-' + (that.find(".slide-item").size() > 3 ? itemw : 0) + 'px);} '+empty.grope+" "+empty.item+'{-webkit-transform: translateX(' + ((thw - itemw) / 2) + 'px); transform: translateX(' + ((thw - itemw) / 2) + 'px);}';
                            })();
                        }
                        return style;
                    })() +
                    '</style>');
            }
            that.map(function (i, n) {
                var slide = $(n),
                    offset = slide.offset(),
                    grope = slide.find(".slide-grope"),
                    item = slide.find(".slide-item"),
                    width = that.width()
                    /*
                     * width =
                     * item.width()
                     */
                    ,
                    size = item.size(),
                    index = slide.find(".slide-index");
                if (slide.is(".slide-main")) {
                    return false;
                }
                slide.addClass("slide-main");
                grope.width(width * size).addClass("slides");
                index.empty();
                //if (item.size() <= 1) {
                    item.on("mouseup", function (ev) {
                        (empty.callback($(this), ev) && that.find("a").size()) && ((window.location.href = $(this).find("a").attr("href")));
                    });
                    //return;
                //}
                item.each(function (x, y) {
                    $($.type(empty.indexdom) =="function"?empty.indexdom(x):empty.indexdom).appendTo(index).attr("item", x).addClass("slide-indexitem");
                    $(y).attr("item", x);
                });
                var indexitem = index.find(".slide-indexitem").filter("[item=0]").addClass(empty.thatindexClass).end();
                slide.find(".slide-item").last().prependTo(grope);
                if (that.find(".slide-item").size() > 3) {
                    slide.find(".slide-item").last().prependTo(grope);
                    // slide.find(".slide-item").last().prependTo(grope);
                }
                item.on("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function () {
                    var t = slide.find(".slide-item").eq(1);
                    empty.end && empty.end(t.attr("item"), t);
                });
                // swipe
                item.on("vmousedown", function (event) {
                    event.stopPropagation();
                    event.preventDefault();
                    var x = event.pageX - offset.left,
                        y = event.pageY - offset.top,
                        l = 0,
                        t = 0,
                        px = event.pageX;
                    var that = $(this),
                        derail = false;
                    $(document).on("vmousemove", function (evt) {
                        l = evt.pageX - offset.left;
                        if (Math.abs(x - l) > 15) {
                            derail = true;
                        }
                        if (derail) {
                            evt.stopPropagation();
                            evt.preventDefault();
                            grope.removeClass("slides").first().css({
                                "margin-left": (x - l) * -1
                            });
                        } else {
                            // evt.init
                        }
                        // return false;
                    }).on("vmouseup", function (ev) {
                        ev.stopPropagation();
                        ev.preventDefault();
                        t = ev.pageY - offset.top;
                        grope.addClass("slides");
                        slide.find(".slide-item").eq(1).css({
                            "margin-left": grope.css("margin-left")
                        });
                        if (!derail && (function () {
                                if (that.parents(".slide-grope").find(".slide-item").size() < 3) {
                                    return that.is(that.parents(".slide-grope").find(".slide-item").last());
                                }
                                if (that.parents(".slide-grope").find(".slide-item").size() == 3) {
                                    return that.is(that.parents(".slide-grope").find(".slide-item").eq(1));
                                }
                                return that.is(that.parents(".slide-grope").find(".slide-item").eq(2));
                            })()) {
                            if (Math.abs(y - t) < 5) {
                                (empty.callback(that, ev) && that.find("a").size()) && ( /* $.mobile.changePage(that.find("a").attr("href")) */ (window.location.href = that.find("a").attr("href")));
                                return false;
                            }
                        }
                        if (px > ev.pageX
                            /*
                             * ||
                             * that.is(that.parents(".slide-grope").find(".slide-item").eq(3))
                             */
                        ) {
                            slide.find(".slide-item").first().appendTo(grope);
                        } else if (px < ev.pageX
                            /*
                             * ||
                             * that.is(that.parents(".slide-grope").find(".slide-item").eq(1))
                             */
                        ) {
                            slide.find(".slide-item").last().prependTo(grope);
                        }
                        grope.css({
                            "margin-left": 0
                        });
                        if (that.parents(".slide-grope").find(".slide-item").size() < 4) {
                            indexitem.removeClass(empty.thatindexClass).filter("[item=" + slide.find(".slide-item").eq(1).attr("item") + "]").addClass(empty.thatindexClass);
                        } else {
                            indexitem.removeClass(empty.thatindexClass).filter("[item=" + slide.find(".slide-item").eq(2).attr("item") + "]").addClass(empty.thatindexClass);
                        }
                        slide.find(".slide-item").css({
                            "margin-left": 0
                        }).eq(0).css({
                            "margin-left": width * -1
                        });
                        $(document).off("vmousemove").off("vmouseup");
                        return false;
                    });
                });

                index.on("click",".slide-indexitem",function(evt){
                    var _this=$(this),_i=_this.attr("item");
                    var _ant=function(){
                        var slides=slide.find(".slide-item");
                        if(!slides.eq(1).is("[item="+_i+"]")){
                            slide.find(".slide-item").first().appendTo(grope);
                            _ant();
                        }
                    };
                    _ant();
                    indexitem.removeClass(empty.thatindexClass);
                    _this.addClass(empty.thatindexClass);
                });
                if (empty.auto) {
                    var z, auto = function () {
                        if (empty.auto) {
                            z = setTimeout(function () {
                                slide.find(".slide-item").first().appendTo(grope);
                                slide.find(".slide-item").css({
                                    "margin-left": 0
                                }).eq(0).css({
                                    "margin-left": width * -1
                                });
                                indexitem.removeClass(empty.thatindexClass);
                                indexitem.filter("[item=" + slide.find(".slide-item").eq(1).attr("item") + "]").addClass(empty.thatindexClass);
                                auto();
                            }, empty.autotime);
                        }
                    }
                    slide.bind("vmouseover mouseover", function () {
                        clearTimeout(z);
                        empty.auto = !1;
                    }).bind("vmouseout mouseout", function () {
                        empty.auto = !0;
                        auto();
                    });
                    auto();
                }
            });
            $(window).on("resize", function () {
                $(".slidestyle").html(function () {
                    var style = ".slide-item{float:left;width:" + that.width() + "px;}.slide-main .slide-item,.slide-main .slides{transition:margin ease 0.3s;-webkit-transition:margin ease 0.3s;}";
                    var thw = that.width();
                    that.find(".slide-grope").width(thw * that.find(".slide-item").size());
                    if (that.size() > 1) {
                        that.each(function (i, n) {
                            n = $(n).addClass("slide-main" + i);
                            // var itemw = n.find(".slide-item").width();
                            var itemw = thw;
                            if (n.find(".slide-item").size() < 2) {
                                style += '.slide-main' + i + ' .slide-item{-webkit-transform: translateX(' + ((thw - itemw) / 2) + 'px); transform: translateX(' + ((thw - itemw) / 2) + 'px);}';
                            } else {
                                style += '.slide-main' + i + ' .slide-item:first-of-type{ margin-left: -' + itemw + 'px; } .slide-main' + i + ' .slide-grope{-webkit-transform: translateX(-' + (n.find(".slide-item").size() > 3 ? itemw : 0) + 'px); transform: translateX(-' + (n.find(".slide-item").size() > 3 ? itemw : 0) + 'px);}.slide-main' + i + ' .slide-item{-webkit-transform: translateX(' + ((thw - itemw) / 2) + 'px); transform: translateX(' + ((thw - itemw) / 2) + 'px);}';
                            }
                        });
                        // return style;
                    } else {
                        style += (function () {
                            // var itemw = that.find(".slide-item").width();
                            var itemw = thw;
                            if (that.find(".slide-item").size() < 2) {
                                return ' .slide-main .slide-item{-webkit-transform: translateX(' + ((thw - itemw) / 2) + 'px); transform: translateX(' + ((thw - itemw) / 2) + 'px);}';
                            }
                            return '.slide-main .slide-item:first-of-type{ margin-left: -' + itemw + 'px; } .slide-main .slide-grope{-webkit-transform: translateX(-' + (that.find(".slide-item").size() > 3 ? itemw : 0) + 'px); transform: translateX(-' + (that.find(".slide-item").size() > 3 ? itemw : 0) + 'px);} .slide-main .slide-item{-webkit-transform: translateX(' + ((thw - itemw) / 2) + 'px); transform: translateX(' + ((thw - itemw) / 2) + 'px);}';
                        })();
                    }
                    return style;
                });
            });
            that.css({
                height: "auto"
            })
        },
        getPage: function (age) {
            //初始值//
            var ages = {
                size: 1,
                index: 0,
                diffe: 2,
                pageDom: '<a class="m-page-i fl" href="#${i}">${i}</a>',
                slur: ' <span class="m-page-omi fl">...</span>',
                thatClass: "on",
                call: function (i) {},
                pageUp: {
                    dom: '<a href="#" class="m-page-up fl"><i class="fl"></i>上一页</a>',
                    readClass: "read"
                },
                pageDown: {
                    dom: '<a href="#" class="m-page-down fl">下一页<i class="fr"></i></a>',
                    readClass: "read"
                },
                goPage: {
                    inputdom: '<i class="fl">到第</i><input type="text" class="m-page-to fl" value="${i}"><i class="fl">页</i>',
                    submitdom: '<input type="button" value="确定" class="m-page-jump fl">'
                },
                sizeerror: function () {},
                init: false
            };
            $(this).each(function () {
                var that = $(this).addClass("m-page");
                age = age || ({});
                var e = {};
                var init = e.init;
                var gopage;
                //格式化初始数据//
                $.extend(e, ages, age);
                e.size = Number(e.size);
                e.size < 1 ? e.size = 1 : null;
                // e.index = Number(e.index);
                if (e.size == 1) {
                    e.sizeerror();
                    return false;
                }
                var call = function (i) {
                    fn(i);
                    return false;
                };
                var fn = function (index) {
                    index = Number(index);
                    //if(){return false;}
                    !index ? index = 1 : null;
                    index < 1 ? index = 1 : null;
                    index >= e.size ? index = e.size : null;
                    var begin = 0,
                        end = 0;
                    that.empty();
                    ////////
                    init ? e.call(index) : null;
                    init = true;
                    ////////
                    index <= e.diffe + 1 ? begin = 1 : begin = index - e.diffe - 1;
                    index >= e.size - e.diffe - 1 ? end = e.size - 1 : end = index + e.diffe;
                    //e.size < 3 ? begin = 1 : begin = e.size - 2;
                    var pageUp = $(e.pageUp.dom).appendTo(that).on("click", function () {
                        if ($(this).is("." + e.pageUp.readClass)) {
                            return false;
                        }
                        return call(Number(that.find("." + e.thatClass).attr("name")) - 1);
                    });
                    var beginPage = $($.substitute(e.pageDom, {
                        i: 1
                    })).attr("name", 1).appendTo(that).on("click", function () {
                        return call(1);
                    });
                    index == 1 ? (pageUp.addClass(e.pageUp.readClass), beginPage.addClass(e.thatClass)) : null;
                    index <= e.diffe + 2 ? null : that.append(e.slur);
                    for (var i = begin + 1; i <= end; i++) {
                        var p = $($.substitute(e.pageDom, {
                            i: i
                        })).attr("name", i).appendTo(that).on("click", function () {
                            return call($(this).attr("name"));
                        });
                        if (i == index) {
                            p.addClass(e.thatClass);
                        }
                    }
                    index >= e.size - e.diffe - 1 ? null : that.append(e.slur);
                    var endPage = $($.substitute(e.pageDom, {
                        i: e.size
                    })).attr("name", e.size).appendTo(that).on("click", function () {
                        return call(e.size);
                    });
                    var pageDown = $(e.pageDown.dom).appendTo(that).on("click", function () {
                        if ($(this).is("." + e.pageUp.readClass)) {
                            return false;
                        }
                        return call(Number(that.find("." + e.thatClass).attr("name")) + 1);
                    });
                    index == e.size ? (pageDown.addClass(e.pageDown.readClass), endPage.addClass(e.thatClass)) : null;
                    if (e.goPage) {
                        gopage = $($.substitute(e.goPage.inputdom, {
                            i: index
                        })).appendTo(that);
                        var jump = $($.substitute(e.goPage.submitdom, {
                            i: e.index
                        })).appendTo(that).on("click", function () {
                            return call(gopage.filter("input[type='text']").val());
                        });
                    }
                };
                that.setSize = function (num) {
                    e.size = Number(num);
                };
                fn(e.index);
                return that;
            });
        },
        dialog: function (call, args) {
            $.dialog(this, call, args);
        },
        gotop: function (ages) {
            var win = $(window);
            var that = $(this),
                age = {
                    //偏差量
                    //                devi: 100,
                    call: function (t) {
                        //                    if (win.scrollTop() < ages.devi) {
                        //                        t.hide();
                        //                    } else {
                        //                        t.show();
                        //                    }
                        win.scroll(function (evt) {
                            if (win.scrollTop() < ages.devi) {
                                t.hide();
                            } else {
                                t.show();
                            }
                        });
                    },
                    //移动动画
                    ani: function () {
                        var top = win.scrollTop();
                        $.ani({
                            duration: 500,
                            call: function (foot, d) {
                                var f = top / d | 0;
                                if (foot == d) {
                                    win.scrollTop(0);
                                } else {
                                    win.scrollTop(top - f * foot);
                                }
                                return !0;
                            }
                        });
                    }
                };
            ages = ages || ({});
            var e = {};
            $.extend(e, age, ages);
            that.each(function (x, y) {
                var t = $(y);
                e.call(t);
                t.bind("click", function () {
                    e.ani();
                    return !1;
                });
            });
        },
        score: function (num, args, random) {
            random = random || false;
            var _this = $(this);
            var arg = {
                //index:3,
                groupdom: "<ul></ul>",
                itemdom: '<li>${i}</li>',
                //space:3,
                spacedom: '<div style="float: left">,</div>',
                //decimal:2,
                decimaldom: '<div>.</div>',
            };
            $.type(args) == "boolean" && (random = args, args = {});
            var e = {};
            args = args || ({});
            $.extend(e, arg, args);
            var nn = "0123456789".split("");
            var arr = [],
                decimalarr = [];
            var addDigit = function (n, decimal) {
                var numarrdom = !decimal ? $(e.groupdom).prependTo(n).addClass("scoregroup") : $(e.groupdom).appendTo(n).addClass("decimalgroup");
                !decimal ? arr.push(numarrdom) : decimalarr.push(numarrdom)
                $.each(nn, function (b, i) {
                    $($.substitute(e.itemdom, {
                        i: i
                    })).appendTo(numarrdom).addClass("scoreitem").data("scoreitem", b);
                });
                return !decimal ? arr : decimalarr;
            }
            var toPlace = function (index, group) {
                //var items= group.find(".scoreitem");
                var itemh = group.find(".scoreitem").outerHeight();
                var s1 = Number(group.find(".scoreitem").first().data("scoreitem")),
                    s2 = Number(index);
                var speed = 1000 / (s1 > s2 ? (9 - Math.abs(s1 - s2)) : (s2 - s1));
                if (!(speed < Number.POSITIVE_INFINITY)) {
                    if (!random) {
                        return;
                    } else {
                        speed = 1000 / ((Math.random() * 5 + 5) | 0)
                    }
                }
                var to = function () {
                    group.animate({
                        "margin-top": itemh * -1
                    }, speed, "linear", function () {
                        group.css({
                            "margin-top": 0
                        });
                        group.find(".scoreitem").first().appendTo(group);
                        if (group.find(".scoreitem").first().data("scoreitem") != index) {
                            to();
                        }
                    });
                }
                to();
            };

            _this.map(function (a, n) {
                //$(n).data("score")
                n = $(n);
                if (n.data("score")) {
                    var scoredata = n.data("score");
                    e = scoredata.e, arr = scoredata.arr, decimalarr = scoredata.decimalarr;
                    num = e.decimal ? Number(num).toFixed(e.decimal) : ((Math.round(Number(num)) + "") || "0");
                    var numarr = num.split(".")[0].split("").reverse();
                    if (e.index && (numarr.length - e.index) > 0) {
                        numarr = num.split(".")[0].substr(numarr.length - e.index, e.index).split("").reverse();
                    }
                    if (numarr.length > arr.length) {
                        var a = arr.length;
                        var m = numarr.length - a;
                        for (var k = 0; k < m; k++) {
                            (e.space && ((k + a) < numarr.length) && (((k + a) % e.space) == 0)) && $(e.spacedom).addClass("scorespace").prependTo(n);
                            addDigit(n);
                        }
                    } else {
                        var m = arr.length - numarr.length;
                        for (var k = 0; k < m; k++) {
                            numarr.push("0");
                        }
                    }
                    $.each(numarr, function (x, y) {
                        toPlace(y, arr[x]);
                    });
                    if (e.decimal) {
                        $.each(num.split(".")[1].split(""), function (x, y) {
                            toPlace(y, decimalarr[x]);
                        });
                    }
                } else {
                    n.addClass("score");
                    num = e.decimal ? Number(num).toFixed(e.decimal) : ((Math.round(Number(num)) + "") || "0");
                    var numarr = num.split(".")[0].split("").reverse();
                    if (e.index) {
                        for (var k = 0; k < e.index; k++) {
                            addDigit(n);
                            (e.space && (k < numarr.length - 1) && (((k + 1) % e.space) == 0)) && $(e.spacedom).addClass("scorespace").prependTo(n);
                        }
                    } else {
                        $.each(numarr, function (x, y) {
                            addDigit(n);
                            (e.space && (x < numarr.length - 1) && (((x + 1) % e.space) == 0)) && $(e.spacedom).addClass("scorespace").prependTo(n);
                        });
                    }
                    $.each(numarr, function (x, y) {
                        toPlace(y, arr[x]);
                    });
                    if (e.decimal) {
                        $(e.decimaldom).addClass("decimalspace").appendTo(n);
                        for (var k = 0; k < e.decimal; k++) {
                            addDigit(n, !0);
                        }
                        $.each(num.split(".")[1].split(""), function (x, y) {
                            toPlace(y, decimalarr[x]);
                        });
                    }
                    n.data("score", {
                        decimalarr: decimalarr,
                        arr: arr,
                        e: e
                    });
                }
            });
            return _this;
        }
    });
})(jQuery, window, document);
