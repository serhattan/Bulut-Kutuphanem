// Ionic Starter App
// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js

angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})
.config(function($stateProvider, $urlRouterProvider) {
  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
  .state('main', {
    url: '/main',
    templateUrl: 'templates/main.html',
    controller: 'MainCtrl'
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'LoginCtrl'
  })

  $stateProvider
  .state('anasayfa', {
    url: '/anasayfa',
    templateUrl: 'templates/anasayfa.html',
    controller: 'AnasayfaCtrl'
  })

  // setup an abstract state for the tabs directive
  .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html"
  })

  // Each tab has its own nav history stack:
  .state('tab.anasayfa', {
    url: '/?a=get&func=kitaplarim',
    views: {
      'tab-anasayfa': {
        templateUrl: 'templates/books/tab-kitaplarim.html',
        controller: 'KitaplarimCtrl'
      }
    }
  })
  .state('tab.kitaplarim-detail', {
    url: '/kitaplarim/?a=detail&id=:bookId',
    views: {
      'tab-anasayfa': {
        templateUrl: 'templates/books/kitaplarim-detail.html',
        controller: 'KitaplarimDetailCtrl'
      }
    }
  })
  .state('tab.kitaplarim-more-detail', {
    url: '/kitaplarim/more/?a=moredetail&id=:cbId',
    views: {
      'tab-anasayfa': {
        templateUrl: 'templates/books/kitaplarim-more-detail.html',
        controller: 'KitaplarimMoreDetailCtrl'
      }
    }
  }) 
  .state('tab.kitaplarim-edit', {
    url: '/kitaplarim/edit/?id=:cid',
    views: {
      'tab-anasayfa': {
        templateUrl: 'templates/books/kitaplarim-edit.html',
        controller: 'KitaplarimEditCtrl'
      }
    }
  })  
  .state('tab.raflarim', {
    url: '/raflarim/?a=get&func=raflarim',
    views: {
      'tab-anasayfa': {
        templateUrl: 'templates/shelfs/raflarim.html',
        controller: 'RaflarimCtrl'
      }
    }
  })  
  .state('tab.raflarim-detail', {
    url: '/raflarim/detail/?a=shelfInfo&id=:shelfId',
    views: {
      'tab-anasayfa': {
        templateUrl: 'templates/shelfs/raflarim-detail.html',
        controller: 'RaflarimDetailCtrl'
      }
    }
  })
  .state('tab.raflarim-ekle', {
    url: '/raflarim/new',
    views: {
      'tab-anasayfa': {
        templateUrl: 'templates/shelfs/raflarim-ekle.html',
        controller: 'RaflarimEkleCtrl'
      }
    }
  })
  .state('tab.raflarim-checkbox', {
    url: '/raflarim/checkbox',
    views: {
      'tab-anasayfa': {
        templateUrl: 'templates/shelfs/raflarim-checkbox.html',
        controller: 'RaflarimCheckboxCtrl'
      }
    }
  })
  .state('tab.kategorilerim', {
    url: '/kategorilerim',
    views: {
      'tab-anasayfa': {
        templateUrl: 'templates/categories/kategorilerim.html',
        controller: 'KategorilerimCtrl'
      }
    }
  })
  .state('tab.kategorilerim-lendto', {
    url: '/kategorilerim/lendto/?a=getinfo&info=lendto',
    views: {
      'tab-anasayfa': {
        templateUrl: 'templates/categories/kategorilerim-lend-to.html',
        controller: 'KategorilerimLendToCtrl'
      }
    }
  })
  .state('tab.kategorilerim-borrowfrom', {
    url: '/kategorilerim/borrowfrom/?a=getinfo&info=borrowfrom',
    views: {
      'tab-anasayfa': {
        templateUrl: 'templates/categories/kategorilerim-borrow-from.html',
        controller: 'KategorilerimBorrowFromCtrl'
      }
    }
  })
  .state('tab.kategorilerim-notes', {
    url: '/kategorilerim/notes/?a=getinfo&info=notes',
    views: {
      'tab-anasayfa': {
        templateUrl: 'templates/categories/kategorilerim-notes.html',
        controller: 'KategorilerimNotesCtrl'
      }
    }
  })
  .state('tab.kategorilerim-read', {
    url: '/kategorilerim/read/?a=getinfo&info=read',
    views: {
      'tab-anasayfa': {
        templateUrl: 'templates/categories/kategorilerim-read.html',
        controller: 'KategorilerimReadCtrl'
      }
    }
  })
  .state('tab.kategorilerim-willread', {
    url: '/kategorilerim/willread/?a=getinfo&info=willread',
    views: {
      'tab-anasayfa': {
        templateUrl: 'templates/categories/kategorilerim-willread.html',
        controller: 'KategorilerimWillReadCtrl'
      }
    }
  })
  .state('tab.kategorilerim-reading', {
    url: '/kategorilerim/reading/?a=getinfo&info=reading',
    views: {
      'tab-anasayfa': {
        templateUrl: 'templates/categories/kategorilerim-reading.html',
        controller: 'KategorilerimReadingCtrl'
      }
    }
  })
  .state('tab.ekle', {
    url: '/ekle',
    views: {
      'tab-ekle': {
        templateUrl: 'templates/tab-ekle.html',
        controller: 'EkleCtrl'
      }
    }
  })
  .state('tab.profil', {
    url: '/profil',
    views: {
      'tab-profil': {
        templateUrl: 'templates/tab-profil.html',
        controller: 'ProfilCtrl'
      }
    }
  })
  .state('tab.favorilerim', {
    url: '/favorite/?a=get&func=fav',
    views: {
      'tab-anasayfa': {
        templateUrl: 'templates/favorilerim.html',
        controller: 'FavorilerimCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/main');
});