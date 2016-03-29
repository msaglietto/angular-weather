
(function() {
  'use strict';

  angular.module('app')
    .factory('weatherSvc', weatherSvc);

  /** @ngInject */
  function weatherSvc($http, $q, weatherImgUrl, weatherSvcUrl, countryFlagImgUrl) {
    var findByLocation = function(location) {
        var url = weatherSvcUrl + 'find?q=' + location + '&APPID=f27c7fe2670bd4d110558d5003c93194';

        var defer = $q.defer();

        $http.get(url)
          .success(function(response) {
            defer.resolve(response);
          })
          .error(function(err) {
            defer.reject(err);
          });

        return defer.promise;
      },
      getCurrentWeather = function(id) {
        var defer = $q.defer();

        var url = weatherSvcUrl + 'weather?id=' + id + '&APPID=f27c7fe2670bd4d110558d5003c93194';

        $http.get(url)
          .success(function(response) {
            defer.resolve(response);
          })
          .error(function(err) {
            defer.reject(err);
          });

        return defer.promise;
      },
      getForecast = function(id) {
        var defer = $q.defer();

        var url = weatherSvcUrl + 'forecast/daily?id=' + id + '&APPID=f27c7fe2670bd4d110558d5003c93194';

        $http.get(url)
          .success(function(response) {
            defer.resolve(response);
          })
          .error(function(err) {
            defer.reject(err);
          });

        return defer.promise;
      },
      getWeatherImgUrl = function(imgStr) {
        return weatherImgUrl + imgStr + '.png';
      },
      getCountryFlagImgUrl = function(imgStr) {
        return countryFlagImgUrl + imgStr.toLowerCase() + '.png';
      },
      getTime = function(dt) {
        return new Date(dt * 1000);
      };

    return {
      find: findByLocation,
      getCurrent: getCurrentWeather,
      getForecast: getForecast,
      getWeatherImgUrl: getWeatherImgUrl,
      getCountryFlagImgUrl: getCountryFlagImgUrl,
      getTime: getTime
    };
  }
}());
