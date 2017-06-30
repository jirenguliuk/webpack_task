var $ = require('./jquery-3.2.0.min')
var GoTop = (function() {
    function GoTop($ct) {
        this.ct = $ct;
        this.target = $('<span class="gotop">回到顶部</span>');
        this.init();
    };
    GoTop.prototype.init = function() {
        this.createNode();
        this.bindEvent();
    }
    GoTop.prototype.createNode = function() {
        var self = this;
        self.target.hide();
        $('body').append(self.target);
        $(window).on('scroll', function() {
            if ($(window).scrollTop() > 300) {
                self.target.show();
            } else {
                self.target.hide();
            }
        });
    }
    GoTop.prototype.bindEvent = function() {
        var self = this;
        self.target.on('click', function() {
            $(window).scrollTop(0);
        })
    }
    return {
        init: function($ct) {
            new GoTop($ct);
        }
    }
})()
module.exports = GoTop