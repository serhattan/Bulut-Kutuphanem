angular.module('starter.controllers', [])

.controller('MainCtrl', function($scope) {})

.controller('LoginCtrl', function($scope, LoginService, $ionicPopup, $state) {
  $scope.data = {};
  $scope.login = function() {
    LoginService.loginUser($scope.data.username, $scope.data.password).success(function(data) {
      $state.go('tab.anasayfa');
    }).error(function(data) {
      var alertPopup = $ionicPopup.alert({
        title: 'Giriş Başarısız!',
        template: 'Lütfen bilgilerinizi kontrol ediniz!'
      });
    });
  }
})


.controller('DashCtrl', function($scope) {})

.controller('EkleCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('ProfilCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});