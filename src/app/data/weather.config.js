(function() {
  'use strict';

  angular.module("app")
    .value("weatherImgUrl", "http://openweathermap.org/img/w/")
    .value("weatherSvcUrl", "http://api.openweathermap.org/data/2.5/")
    .value("countryFlagImgUrl", "http://openweathermap.org/images/flags/");
}());
