'use strict';

/**
 * @ngdoc function
 * @name codefiddleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the codefiddleApp
 */
angular.module('codefiddleApp')
  .controller('MainCtrl', function ($scope) {

    $scope.html ="";
    $scope.css="";
    $scope.javascript="";

    $scope.aceChanged = function(){
      console.log('changed');
      $scope.run();
    };

    $scope.run = function(){
      var result ='<!DOCTYPE html>' +
        '<html>' +
        '<head lang="en"> <meta charset="UTF-8"> <title></title><style>'+$scope.css+'</style> </head> <body>'+
        $scope.html +
          '<script type="text/javascript">' +
          $scope.javascript+
          '</script>'
        '</body></html>';



      var iframe = document.getElementById('result');
      var doc;

      if(iframe.contentDocument) doc = iframe.contentDocument;
      else if(iframe.contentWindow) doc = iframe.contentWindow.document;
      else doc = iframe.document;

      doc.open();
      doc.writeln(result);
      doc.close();
    }

  });
