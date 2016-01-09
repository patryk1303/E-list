angular.module('elist.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal) {
  $ionicModal.fromTemplateUrl('templates/modal-about.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });
  
  $scope.openModal = function() {
    $scope.modal.show();
  };
  $scope.closeModal = function() {
    $scope.modal.hide();
  };
  
  $scope.$on('$destroy', function() {
    $scope.modal.remove();
  });
})