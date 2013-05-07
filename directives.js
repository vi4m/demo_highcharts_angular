'use strict';

angular.module('charts')
.directive('chart', function () {
  return {
    restrict: 'E',
    template: '<div></div>',
    transclude:true,
    replace: true,

    link: function (scope, element, attrs) {
      var chartsDefaults = {
        chart: {
          renderTo: element[0],
          type: attrs.type || null,
          height: attrs.height || 100,
          width: attrs.width || 100,
        }
      };

        //Update when charts data changes
        scope.$watch(function(){ return attrs.value; } ,function() {
    		if (!attrs.value) return;
            var newSettings = {};
            angular.extend(newSettings, chartsDefaults, JSON.parse(attrs.value));
            $(element[0]).highcharts(newSettings);
	    });
      }
    }

});
