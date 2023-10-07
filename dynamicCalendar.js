/*!
 * dyCalendar is a JavaScript library for creating Calendar.
 *
 * Author: Yusuf Shakeel
 * https://github.com/yusufshakeel
 *
 * GitHub Link: https://github.com/yusufshakeel/dyCalendarJS
 *
 * MIT license
 * Copyright (c) 2016 Yusuf Shakeel
 *

 */
/*! dyCalendarJS | (c) 2016 Yusuf Shakeel | https://github.com/yusufshakeel/dyCalendarJS */

(function (global) {
    "use strict";
  
    var //this will be used by the user.
      dycalendar = {},
      //window document
      document = global.document,
      //starting year
      START_YEAR = 1900,
      //end year
      END_YEAR = 9999,
      //name of the months
      monthName = {
        full: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
        mmm: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
      //name of the days
      dayName = {
        full: [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        d: ["S", "M", "T", "W", "T", "F", "S"],
        dd: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
        ddd: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      };
    })  