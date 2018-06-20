var app=angular.module('mainApp',[]);
app.filter('startsWithA', function () {
    return function (items) {
      var var1 = [];
//console.log(items.length);
      for (var i = 0; i < items.length; i++) {
         
        var item = items[i];
        if (/a/i.test(item.name.substring(0, 1))) {
          var1.push(item);
        }
      }
      return var1;
      };
   });
  app.controller('Controller', function ($scope) {
    $scope.data1 = [{
        name: 'Aman'        
    }, {
        name: 'Vivek'
    }, {
        name: 'Mahir'
    }, {
        name: 'Ajay'
    }, {
        name: 'Tanmai'
    }];
    
});