angular.module('starter.controllers', [])

.controller('MainCtrl', function($scope) {})
.controller('AnasayfaCtrl', function($scope) {})
.controller('BooksCtrl', function($scope) {})


.controller('LoginCtrl', function($scope, LoginService, $ionicPopup, $state) {
  $scope.data = {};
  $scope.login = function() {
    LoginService.loginUser($scope.data.username, $scope.data.password).success(function(data) {
      $state.go('anasayfa');
    }).error(function(data) {
      var alertPopup = $ionicPopup.alert({
        title: 'Giriş Başarısız!',
        template: 'Lütfen bilgilerinizi kontrol ediniz!'
      });
    });
  }
})


.controller('KitaplarimCtrl', function($scope, Books) {
  $scope.books = Books.all();
  $scope.remove = function(book) {
    Books.remove(book);
  }
})

.controller('KitaplarimDetailCtrl', function($scope, $stateParams, Books) {
  $scope.bookdetail = Books.get($stateParams.bookId);
})

.controller('EkleCtrl', function($scope, Books) {

})

.controller('ProfilCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});