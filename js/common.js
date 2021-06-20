export default {
    currentTime() {
        let nowtime = new Date();
        let year = nowtime.getFullYear();
        let month = nowtime.getMonth() + 1;
        let date = nowtime.getDate();
        let hour = nowtime.getHours();
        let min = nowtime.getMinutes();
        let sec = nowtime.getSeconds();
        return `${year}-${month > 9 ? month : '0' + month}-${date > 9 ? date : '0' + date} ${hour > 9 ? hour : '0' + hour}:${min > 9 ? min : '0' + min}:${sec > 9 ? sec : '0' + sec}`;
    },

    dateFormat(fmt, date) {
        let ret;
        const opt = {
            "Y+": date.getFullYear().toString(),        // 年
            "m+": (date.getMonth() + 1).toString(),     // 月
            "d+": date.getDate().toString(),            // 日
            "H+": date.getHours().toString(),           // 时
            "M+": date.getMinutes().toString(),         // 分
            "S+": date.getSeconds().toString()          // 秒
            // 有其他格式化字符需求可以继续添加，必须转化成字符串
        };
        for (let k in opt) {
            ret = new RegExp("(" + k + ")").exec(fmt);
            if (ret) {
                fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
            };
        };
        return fmt;
    },

    getDay(days, fmt='mm-dd') {
        let today = new Date();
        let resDay = today.getTime() + days * 24 * 60 * 60 * 1000;
        today.setTime(resDay);
        return this.dateFormat(fmt, today);
    },

    headerTime() {
        let curTime = this.currentTime();
        $('#J_header_time').text(curTime);
        let currentDateTimer = setInterval(function () {
            $('#J_header_time').text(curTime);
        }, 1000);
    },

    initMenu() {
        $('#J_menu_icon').on('click', function(e){
            e.stopPropagation();
            e.preventDefault();
            $('#J_menu').animate({width: 200}, 'fast');
        });
        $(document).on('click', function() {
            $('#J_menu').animate({width: 0});
        });
    },
    getDays() {
        let today = new Date().getDate();
        let res = [];
        for (let i = 1; i <= today; i++) {
            res.push(i);
        }
        return res;
    },
    getMonth() {
        let thisMonth = new Date().getMonth() + 1;
        let res = [];
        for (let i = 1; i <= thisMonth; i++) {
            res.push(i);
        }
        return res;
    }


}


