(function() {
  'use strict';
  angular.module('readableTime', []).filter('readableTime', function () {
    return function (seconds) {
        var format, parse, day, hour, minute, week, month, year, output;
        seconds = parseInt(seconds, 10);
        minute = 60;
        hour = minute * 60;
        day = hour * 24;
        week = day * 7;
        year = week * 52;
        month = year / 12;
        output = "";
        format = function (number, string) {
            string = number === 1 ? string : "" + string + "s";
            return "" + number + " " + string + " ";
        };

        parse = function (toParse) {
            switch (true) {
                case (toParse >= year):
                    output += format(Math.floor(toParse / year), 'year');
                    parse(toParse % year);
                    break;
                case (toParse >= month):
                    output += format(Math.floor(toParse / month), 'month');
                    parse(toParse % month);
                    break;
                case (toParse >= week):
                    output += format(Math.floor(toParse / week), 'week');
                    parse(toParse % week);
                    break;
                case (toParse >= day):
                    output += format(Math.floor(toParse / day), 'day');
                    parse(toParse % day);
                    break;
                case (toParse >= hour):
                    output += format(Math.floor(toParse / hour), 'hour');
                    parse(toParse % hour);
                    break;
                case (toParse >= minute):
                    output += format(Math.floor(toParse / minute), 'minute');
                    parse(toParse % minute);
                    break;
                case (toParse > 0):
                    output += format(toParse, 'second');
                default:
                    return false;
            }
        };

        parse(seconds);
        return output;
    };
}).call(this);

/*
//@ sourceMappingURL=angular-readable-time.js.map
*/
