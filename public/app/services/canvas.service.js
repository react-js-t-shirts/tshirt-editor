(function(angular) {
  'use strict';

  var app = angular.module('tshirt');

  // service to interact with canvas REST API
  app.factory('canvasservice', function($resource) {
    return $resource('/api/canvases/:id', { id: '@_id' });
  });
})(angular);
