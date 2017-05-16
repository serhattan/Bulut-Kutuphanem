angular.module('starter.controllers', [])
.controller('MainCtrl', function($scope, $http) {})
.controller('AnasayfaCtrl', function($scope) {})

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


.controller('KitaplarimCtrl', function($scope, $state, Books) {
  Books.all().then(function(books){
    console.log(books);
    $scope.books = books;
    $scope.hideremoved=function(book){
      $scope.books.splice($scope.books.indexOf(book),1);
    };
  })

  $scope.data = {
    showDelete: false
  };

  $scope.edit = function(book, id) {
    $state.go('tab.kitaplarim-edit',{cid: book.id});
  };
  $scope.share = function(item) {
    console.log(item);
    alert('Share Item: ' + item.id);
  };
  $scope.onItemDelete = function(item) {
    Books.remove(item.id,'bookremove');
  };
  $scope.doRefresh = function() {
    Books.all('kitaplarim').then(function(books){
      $scope.books = books;
      $scope.$broadcast('scroll.refreshComplete');
    }) 
  }
})


.controller('KitaplarimDetailCtrl', function($scope, $location, Books) {
  var absUrl = $location.search();
  $scope.cb_id=absUrl.id;

  Books.get(absUrl.id).then(function(books){
    $scope.bookdetail = books;
    $scope.myFavorite=$scope.bookdetail.favorite;
    $scope.myRate=$scope.bookdetail.rate;
    $scope.myStatu=$scope.bookdetail.statu;
    $scope.showSelectValue=function(myFavorite,myRate,myStatu){
      if((myFavorite!=$scope.bookdetail.favorite) || (myRate!=$scope.bookdetail.rate) || (myStatu!=$scope.bookdetail.statu) ){
        var postData = [];
        postData.push(encodeURIComponent("customer_books_id") + "=" + encodeURIComponent(absUrl.id));
        postData.push(encodeURIComponent("favorite") + "=" + encodeURIComponent(myFavorite));
        postData.push(encodeURIComponent("rate") + "=" + encodeURIComponent(myRate));
        postData.push(encodeURIComponent("statu") + "=" + encodeURIComponent(myStatu));
        var data = postData.join("&");
        Books.update(data);
      }
    }
  })
})

.controller('KitaplarimMoreDetailCtrl', function($scope, $location, Books) {
  Books.get($location.search().id).then(function(books){
    $scope.bookmoredetail = books;
  })
})

.controller('KitaplarimEditCtrl', function($scope, $location, Books) {
  Books.get($location.search().cid).then(function(books){
    $scope.add={};
    $scope.add.book_id=books.id;
    $scope.add.img=books.img;
    $scope.add.name=books.name;
    $scope.add.publisher=books.publisher;
    $scope.add.author=books.author;
    $scope.add.subtitle=books.subtitle;
    $scope.add.isbn=Number(books.isbn);
    $scope.add.genre=books.genre;
    $scope.add.favorite=books.favorite;
    $scope.add.statu=books.statu;
    $scope.add.translator=books.translator;
    $scope.add.series=books.series;
    $scope.add.edition=Number(books.edition);
    $scope.add.pagenumber=Number(books.pagenumber);
    $scope.add.lend_to=books.lend_to;
    $scope.add.borrow_from=books.borrow_from;
    $scope.add.note=books.note;
    $scope.add.shelf=books.shelf;
    $scope.add.rate=books.rate;
    if (books.book_id>12212) {
      $scope.statement = {
        bigger: true,
        smaller: false,
      }
    }else{
      $scope.statement = {
        bigger: false,
        smaller: true,
      }
    }
  })
  $scope.adding = function(){
    var postData = [];
    postData.push(encodeURIComponent("book_id") + "=" + encodeURIComponent($scope.add.book_id));
    postData.push(encodeURIComponent("img") + "=" + encodeURIComponent($scope.add.img));
    postData.push(encodeURIComponent("name") + "=" + encodeURIComponent($scope.add.name));
    postData.push(encodeURIComponent("publisher") + "=" + encodeURIComponent($scope.add.publisher));
    postData.push(encodeURIComponent("author") + "=" + encodeURIComponent($scope.add.author));
    postData.push(encodeURIComponent("subtitle") + "=" + encodeURIComponent($scope.add.subtitle));
    postData.push(encodeURIComponent("isbn") + "=" + encodeURIComponent($scope.add.isbn));
    postData.push(encodeURIComponent("genre") + "=" + encodeURIComponent($scope.add.genre));
    postData.push(encodeURIComponent("favorite") + "=" + encodeURIComponent($scope.add.favorite));
    postData.push(encodeURIComponent("statu") + "=" + encodeURIComponent($scope.add.statu));
    postData.push(encodeURIComponent("translator") + "=" + encodeURIComponent($scope.add.translator));
    postData.push(encodeURIComponent("series") + "=" + encodeURIComponent($scope.add.series));
    postData.push(encodeURIComponent("edition") + "=" + encodeURIComponent($scope.add.edition));
    postData.push(encodeURIComponent("note") + "=" + encodeURIComponent($scope.add.note));
    postData.push(encodeURIComponent("lend_to") + "=" + encodeURIComponent($scope.add.lend_to));
    postData.push(encodeURIComponent("borrow_from") + "=" + encodeURIComponent($scope.add.borrow_from));
    postData.push(encodeURIComponent("pagenumber") + "=" + encodeURIComponent($scope.add.pagenumber));
    postData.push(encodeURIComponent("shelf") + "=" + encodeURIComponent($scope.add.shelf));
    postData.push(encodeURIComponent("rate") + "=" + encodeURIComponent($scope.add.rate));

    var data = postData.join("&");
    Books.save(data,"updatebook");
  }
  
})

.controller('EkleCtrl', function($scope, Books) {
  Books.all('raflarim').then(function(data){
    $scope.shelfs = data;
  })
  $scope.add={};
  console.log($scope.add)
  $scope.add.favorite ="1";
  $scope.add.statu ="1";
  $scope.add.rate ="1";

  $scope.doRefresh = function() {
    Books.all('raflarim').then(function(data){
      $scope.shelfs = data;
    })
    $scope.add={};
    $scope.add.favorite ="1";
    $scope.add.statu ="1";
    $scope.add.rate ="1";
    $scope.$broadcast('scroll.refreshComplete');
  } 

  $scope.adding = function(){
    var postData = [];
    postData.push(encodeURIComponent("img") + "=" + encodeURIComponent($scope.add.img));
    postData.push(encodeURIComponent("name") + "=" + encodeURIComponent($scope.add.name));
    postData.push(encodeURIComponent("publisher") + "=" + encodeURIComponent($scope.add.publisher));
    postData.push(encodeURIComponent("author") + "=" + encodeURIComponent($scope.add.author));
    postData.push(encodeURIComponent("subtitle") + "=" + encodeURIComponent($scope.add.subtitle));
    postData.push(encodeURIComponent("isbn") + "=" + encodeURIComponent($scope.add.isbn));
    postData.push(encodeURIComponent("genre") + "=" + encodeURIComponent($scope.add.genre));
    postData.push(encodeURIComponent("favorite") + "=" + encodeURIComponent($scope.add.favorite));
    postData.push(encodeURIComponent("statu") + "=" + encodeURIComponent($scope.add.statu));
    postData.push(encodeURIComponent("translator") + "=" + encodeURIComponent($scope.add.translator));
    postData.push(encodeURIComponent("edition") + "=" + encodeURIComponent($scope.add.edition));
    postData.push(encodeURIComponent("note") + "=" + encodeURIComponent($scope.add.note));
    postData.push(encodeURIComponent("lend_to") + "=" + encodeURIComponent($scope.add.lend_to));
    postData.push(encodeURIComponent("borrow_from") + "=" + encodeURIComponent($scope.add.borrow_from));
    postData.push(encodeURIComponent("pagenumber") + "=" + encodeURIComponent($scope.add.pagenumber));
    postData.push(encodeURIComponent("shelf") + "=" + encodeURIComponent($scope.add.shelf));
    postData.push(encodeURIComponent("rate") + "=" + encodeURIComponent($scope.add.rate));
    postData.push(encodeURIComponent("series") + "=" + encodeURIComponent($scope.add.series));

    var data = postData.join("&");
    Books.save(data,"newbook");
    $scope.add={};
    $scope.add.favorite ="1";
    $scope.add.statu ="1";
    $scope.add.rate ="1";
  };
})

.controller('ProfilCtrl', function($scope, $state, Books) {
  $scope.doRefresh = function() {
    window.location.reload(true);
  } 
  Books.getprofil().then(function(data){
    $scope.readbooks = data[0];
    $scope.readingbooks = data[1];
    $scope.willreadbooks = data[2];
  })
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

})




.controller('KategorilerimCtrl', function() {})

.controller('KategorilerimBorrowFromCtrl', function(Categories, $scope, $location){
  $scope.doRefresh = function() {
    $scope.getinfos = Categories.get($location.search().info);
    $scope.$broadcast('scroll.refreshComplete');
  }
  $scope.getinfos = Categories.get($location.search().info);
})
.controller('KategorilerimLendToCtrl', function(Categories, $scope, $location){
  $scope.doRefresh = function() {
    $scope.getinfos = Categories.get($location.search().info);
    $scope.$broadcast('scroll.refreshComplete');
  }
  $scope.getinfos = Categories.get($location.search().info);
})
.controller('KategorilerimNotesCtrl', function(Categories, $scope, $location){
  $scope.doRefresh = function() {
    $scope.getinfos = Categories.get($location.search().info);
    $scope.$broadcast('scroll.refreshComplete');
  }
  $scope.getinfos = Categories.get($location.search().info);
})
.controller('KategorilerimReadCtrl', function(Categories, $scope, $location){
  $scope.doRefresh = function() {
    $scope.getinfos = Categories.get($location.search().info);
    $scope.$broadcast('scroll.refreshComplete');
  }
  $scope.getinfos = Categories.get($location.search().info);
})
.controller('KategorilerimWillReadCtrl', function(Categories, $scope, $location){
  $scope.doRefresh = function() {
    $scope.getinfos = Categories.get($location.search().info);
    $scope.$broadcast('scroll.refreshComplete');
  }
  $scope.getinfos = Categories.get($location.search().info);
})
.controller('KategorilerimReadingCtrl', function(Categories, $scope, $location){
  $scope.doRefresh = function() {
    $scope.getinfos = Categories.get($location.search().info);
    $scope.$broadcast('scroll.refreshComplete');
  }
  $scope.getinfos = Categories.get($location.search().info);
})


.controller('RaflarimCtrl', function(Books, $scope) {
  Books.all('raflarim').then(function(data){
    $scope.shelfs = data;
    console.log($scope.shelfs);
    $scope.hideremoved=function(shelf){
      $scope.shelfs.splice($scope.shelfs.indexOf(shelf),1);
    };
  })

  $scope.data = {
    showDelete: false
  };

  $scope.onItemDelete = function(itemId) {
    Books.remove(itemId,'shelfremove');
  };

  $scope.doRefresh = function() {
    Books.all('raflarim').then(function(data){
      $scope.shelfs = data;
      $scope.$broadcast('scroll.refreshComplete');
    }) 
  }

  $scope.colors = function(data){
    $number=$scope.shelfs.indexOf(data)%5;
    if ($number=='0') {
      $scope.definedcolor="#a8dbc9";
      $scope.definedcolor2='#c2e5d9'
    }else if($number=='1'){
      $scope.definedcolor="#f85d0e";
      $scope.definedcolor2='#fa8d56'
    }else if ($number=='2') {
      $scope.definedcolor="#b0b717";
      $scope.definedcolor2='#c7cc5c'
    }else if ($number=='3') {
      $scope.definedcolor="#41c2de";
      $scope.definedcolor2='#7ad4e7'
    }else if ($number=='4') {
      $scope.definedcolor="#c81e18";
      $scope.definedcolor2='#d34a46'
    }
  }

})
.controller('RaflarimDetailCtrl', function($scope, $location, Books) {
  $scope.shelfid=$location.search().id;
  Books.getshelf($scope.shelfid).then(function(data){
    $scope.shelfBooks = data;
    $scope.hideremoved=function(data){
      $scope.shelfBooks.splice($scope.shelfBooks.indexOf(data),1);
    };
  })


  $scope.data = {
    showDelete: false
  };
  $scope.onItemDelete = function(item) {
    Books.remove(item.id,'bookremoveinshelf',item.customerShelf_id);
  };
})
.controller('RaflarimEkleCtrl', function($scope, Books){
  $scope.add={};
  $scope.createShelf=function(data){
    var postData = [];
    postData.push(encodeURIComponent("name") + "=" + encodeURIComponent(data.shelfname));
    postData.push(encodeURIComponent("statement") + "=" + encodeURIComponent(data.shelfstatement));
    var post = postData.join("&");
    Books.saveshelf(post);
    $scope.add={};
  }
})
.controller('RaflarimCheckboxCtrl',function($scope, $location, Books){
  Books.all().then(function(books){
    $scope.books = books;
  })
  var postData = [];
  var counter=0;
  $scope.addshelf = function(id){
    postData.push(encodeURIComponent(counter) + "=" +encodeURIComponent(id));      
    counter++;
  }
  $scope.savebook = function(){
    var post = postData.join("&");
    Books.addtoshelf(post,$location.search().id);
    postData=[];
  }
})


.controller('FavorilerimCtrl', function($scope, Books) {
  Books.all('fav').then(function(books){
    $scope.books = books;
  })
  $scope.doRefresh = function() {
    Books.all('fav').then(function(books){
      $scope.books = books;
      $scope.$broadcast('scroll.refreshComplete');
    }) 
  }
});