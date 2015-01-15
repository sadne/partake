var fs = require('fs');
var angular = require('angular');

angular.module('defaultApp.directive').directive('projectItem', function($state) {
 return {
    restrict: 'E',
    replace: true,
    scope : {project: '=project'},
    template: fs.readFileSync(__dirname + '/../../../templates/default/partials/project_item.html', 'utf8'),
    link: function (scope, element, attrs) {
      element.on('click', function () {
        $state.go('project.details', {id: scope.project.id});
      });

      element.find('a.title').on('click', function (event) {
        event.stopPropagation();
      });
    }
  };
});