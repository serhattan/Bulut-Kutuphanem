angular.module('starter.controllers', [])

.controller('MainCtrl', function($scope) {})
.controller('AnasayfaCtrl', function($scope) {})
.controller('RaflarimCtrl', function($scope) {})
.controller('RaflarimDetailCtrl', function($scope, $stateParams, Books) {
    $scope.booksShelf = Books.getshelf($stateParams.shelfId);
})
.controller('KategorilerimCtrl', function($scope) {})
.controller('FavorilerimCtrl', function($scope, Books) {
  //Books daki objelerin kalp değerleri 1 olanları getkalp fonksiyonu ile çağırıyoruz
  $scope.booksFavor = Books.getfavor();
})


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


//books değişkenine tüm kitapları atıyoruz ve herhangi bir sayfada {{book}} şeklinde ulaşabiliyoruz
.controller('KitaplarimCtrl', function($scope, Books) {
  $scope.books = Books.all();
})

.controller('KitaplarimDetailCtrl', function($scope, $stateParams, Books) {
  $scope.bookdetail = Books.get($stateParams.bookId);
})

.controller('KitaplarimMoreDetailCtrl', function($scope, $stateParams, Books) {
  $scope.bookmoredetail = Books.get($stateParams.bookId);
})

.controller('EkleCtrl', function($scope, Books) {

})

.controller('ProfilCtrl', function($scope, $stateParams, Books) {
  $scope.books = Books.all();

  $scope.bookdetail = Books.get($stateParams.bookId);

  //tab değeri 1 e eşitlenerek ilk seçeneğin default olarak seçilmesini sağlıyoruz
  this.tab = 1;
  //kullanıcının ng-click ile yolladığı değer this.tab a eşitleniyor
  this.selectTab = function(setTab){
    this.tab = setTab;
  };
  //tab-profil sayfasında tıklanan <a> taginin sınıfı isSelected fonksiyonu aracılığyla kontrol ediliyor. 
  //Eğer kullanıcının tıkladığı (this.tab) ile seçilen tabın değerleri aynı ise sınıf aktif oluyor 
  this.isSelected = function(checkTab){
    return this.tab === checkTab;
  };

});