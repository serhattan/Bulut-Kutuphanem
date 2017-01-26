angular.module('starter.services', [])

.service('LoginService', function($q) {
    return {
        loginUser: function(name, pw) {
            var deferred = $q.defer();
            var promise = deferred.promise;

            if (name == 'user' && pw == '1234') {
                deferred.resolve('Hoşgeldin ' + name + '!');
            } else {
                deferred.reject('Bilgiler yanlış!');
            }
            promise.success = function(fn) {
                promise.then(fn);
                return promise;
            }
            promise.error = function(fn) {
                promise.then(null, fn);
                return promise;
            }
            return promise;
        }
    }
})

.factory('Books', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var books = [{
    id: 0,
    name: 'Mahalleden Arkadaşlar',
    publisher: 'Sayfa 6',
    author: 'Selçuk Aydemir',
    img: 'img/mahalledenarkadaslar.png',
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at mi est. Sed mi sapien, laoreet in congue eget, elementum tincidunt libero. Vestibulum gravida posuere lorem, sed interdum ex maximus eu. Morbi ultrices iaculis dui non facilisis. Suspendisse consectetur felis nibh, vitae feugiat odio malesuada sit amet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse fermentum ex sollicitudin risus tincidunt porta. Nullam pharetra condimentum ante non hendrerit. Vivamus sed velit diam. Proin id velit vitae tellus sagittis ultrices. Vivamus sed nulla vel risus tristique suscipit nec at ipsum. Proin cursus lacinia augue, vitae dignissim mauris pellentesque eget. Quisque leo neque, placerat at tincidunt vitae, sagittis sed libero. Integer volutpat, odio sed porttitor venenatis, leo quam ornare justo, ut tempus leo quam quis ex. Donec facilisis est purus, vel volutpat metus ultrices eget.Nullam nec ipsum pulvinar, rutrum arcu sagittis, sollicitudin felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse consectetur viverra dui, id porttitor tellus imperdiet sed. Sed convallis sodales ligula, quis malesuada libero gravida ut. Mauris sodales mollis odio vitae porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed faucibus mauris. Praesent dolor eros, imperdiet vitae congue vel, ornare ac nisl. Nam vel consectetur purus, non fringilla velit. Maecenas malesuada, justo eget tempus tempor, nunc orci egestas purus, at varius mauris tellus et odio. Nam nec enim ac mi rhoncus interdum. Duis sit amet lectus eleifend, consectetur metus sed, semper purus. Ut faucibus est malesuada fermentum tincidunt. Donec non nibh laoreet, varius diam sed, fermentum massa. Aenean elit augue, ornare sit amet tempus sed, blandit vel nunc.',
    kalp: "0",
    raf: "3",
    genre:'Kurgu Roman' ,
    isbn: '9789750807145',
}, {
    id: 1,
    name: 'Kafamda Bir Tuhaflık',
    publisher: 'Yapı Kredi Yayınları',
    author: 'Orhan Pamuk',
    img: 'img/kafamdabirtuhaflik.png',
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at mi est. Sed mi sapien, laoreet in congue eget, elementum tincidunt libero. Vestibulum gravida posuere lorem, sed interdum ex maximus eu. Morbi ultrices iaculis dui non facilisis. Suspendisse consectetur felis nibh, vitae feugiat odio malesuada sit amet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse fermentum ex sollicitudin risus tincidunt porta. Nullam pharetra condimentum ante non hendrerit. Vivamus sed velit diam. Proin id velit vitae tellus sagittis ultrices. Vivamus sed nulla vel risus tristique suscipit nec at ipsum. Proin cursus lacinia augue, vitae dignissim mauris pellentesque eget. Quisque leo neque, placerat at tincidunt vitae, sagittis sed libero. Integer volutpat, odio sed porttitor venenatis, leo quam ornare justo, ut tempus leo quam quis ex. Donec facilisis est purus, vel volutpat metus ultrices eget.Nullam nec ipsum pulvinar, rutrum arcu sagittis, sollicitudin felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse consectetur viverra dui, id porttitor tellus imperdiet sed. Sed convallis sodales ligula, quis malesuada libero gravida ut. Mauris sodales mollis odio vitae porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed faucibus mauris. Praesent dolor eros, imperdiet vitae congue vel, ornare ac nisl. Nam vel consectetur purus, non fringilla velit. Maecenas malesuada, justo eget tempus tempor, nunc orci egestas purus, at varius mauris tellus et odio. Nam nec enim ac mi rhoncus interdum. Duis sit amet lectus eleifend, consectetur metus sed, semper purus. Ut faucibus est malesuada fermentum tincidunt. Donec non nibh laoreet, varius diam sed, fermentum massa. Aenean elit augue, ornare sit amet tempus sed, blandit vel nunc.',
    kalp: "1",
    raf: "1",
    genre:'Deneme' ,
    isbn: '9789750807153',
}, {
    id: 2,
    name: 'Yağmurcuk Kuşu',
    publisher: 'Yapı Kredi Yayınları',
    author: 'Yaşar Kemal',
    img: 'img/kimsecik.png',
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at mi est. Sed mi sapien, laoreet in congue eget, elementum tincidunt libero. Vestibulum gravida posuere lorem, sed interdum ex maximus eu. Morbi ultrices iaculis dui non facilisis. Suspendisse consectetur felis nibh, vitae feugiat odio malesuada sit amet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse fermentum ex sollicitudin risus tincidunt porta. Nullam pharetra condimentum ante non hendrerit. Vivamus sed velit diam. Proin id velit vitae tellus sagittis ultrices. Vivamus sed nulla vel risus tristique suscipit nec at ipsum. Proin cursus lacinia augue, vitae dignissim mauris pellentesque eget. Quisque leo neque, placerat at tincidunt vitae, sagittis sed libero. Integer volutpat, odio sed porttitor venenatis, leo quam ornare justo, ut tempus leo quam quis ex. Donec facilisis est purus, vel volutpat metus ultrices eget.Nullam nec ipsum pulvinar, rutrum arcu sagittis, sollicitudin felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse consectetur viverra dui, id porttitor tellus imperdiet sed. Sed convallis sodales ligula, quis malesuada libero gravida ut. Mauris sodales mollis odio vitae porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed faucibus mauris. Praesent dolor eros, imperdiet vitae congue vel, ornare ac nisl. Nam vel consectetur purus, non fringilla velit. Maecenas malesuada, justo eget tempus tempor, nunc orci egestas purus, at varius mauris tellus et odio. Nam nec enim ac mi rhoncus interdum. Duis sit amet lectus eleifend, consectetur metus sed, semper purus. Ut faucibus est malesuada fermentum tincidunt. Donec non nibh laoreet, varius diam sed, fermentum massa. Aenean elit augue, ornare sit amet tempus sed, blandit vel nunc.',
    kalp: "0",
    raf: "1",
    genre:'Şiir' ,
    isbn: '9789750807268',
}, {
    id: 3,
    name: 'Momo',
    publisher: 'Kabalcı',
    author: 'Micheal Ende',
    img: 'img/momo.png',
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at mi est. Sed mi sapien, laoreet in congue eget, elementum tincidunt libero. Vestibulum gravida posuere lorem, sed interdum ex maximus eu. Morbi ultrices iaculis dui non facilisis. Suspendisse consectetur felis nibh, vitae feugiat odio malesuada sit amet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse fermentum ex sollicitudin risus tincidunt porta. Nullam pharetra condimentum ante non hendrerit. Vivamus sed velit diam. Proin id velit vitae tellus sagittis ultrices. Vivamus sed nulla vel risus tristique suscipit nec at ipsum. Proin cursus lacinia augue, vitae dignissim mauris pellentesque eget. Quisque leo neque, placerat at tincidunt vitae, sagittis sed libero. Integer volutpat, odio sed porttitor venenatis, leo quam ornare justo, ut tempus leo quam quis ex. Donec facilisis est purus, vel volutpat metus ultrices eget.Nullam nec ipsum pulvinar, rutrum arcu sagittis, sollicitudin felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse consectetur viverra dui, id porttitor tellus imperdiet sed. Sed convallis sodales ligula, quis malesuada libero gravida ut. Mauris sodales mollis odio vitae porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed faucibus mauris. Praesent dolor eros, imperdiet vitae congue vel, ornare ac nisl. Nam vel consectetur purus, non fringilla velit. Maecenas malesuada, justo eget tempus tempor, nunc orci egestas purus, at varius mauris tellus et odio. Nam nec enim ac mi rhoncus interdum. Duis sit amet lectus eleifend, consectetur metus sed, semper purus. Ut faucibus est malesuada fermentum tincidunt. Donec non nibh laoreet, varius diam sed, fermentum massa. Aenean elit augue, ornare sit amet tempus sed, blandit vel nunc.',
    kalp: "1",
    raf: "2",
    genre:'Bilimsel Roman' ,
    isbn: '9789750807978',
}, {
    id: 4,
    name: 'Hayal Kahramanları',
    publisher: 'Türkiye İş Bankası Kültür Yayınları',
    author: 'Sunay Akın',
    img: 'img/hayalkahramanlari.png',
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at mi est. Sed mi sapien, laoreet in congue eget, elementum tincidunt libero. Vestibulum gravida posuere lorem, sed interdum ex maximus eu. Morbi ultrices iaculis dui non facilisis. Suspendisse consectetur felis nibh, vitae feugiat odio malesuada sit amet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse fermentum ex sollicitudin risus tincidunt porta. Nullam pharetra condimentum ante non hendrerit. Vivamus sed velit diam. Proin id velit vitae tellus sagittis ultrices. Vivamus sed nulla vel risus tristique suscipit nec at ipsum. Proin cursus lacinia augue, vitae dignissim mauris pellentesque eget. Quisque leo neque, placerat at tincidunt vitae, sagittis sed libero. Integer volutpat, odio sed porttitor venenatis, leo quam ornare justo, ut tempus leo quam quis ex. Donec facilisis est purus, vel volutpat metus ultrices eget.Nullam nec ipsum pulvinar, rutrum arcu sagittis, sollicitudin felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse consectetur viverra dui, id porttitor tellus imperdiet sed. Sed convallis sodales ligula, quis malesuada libero gravida ut. Mauris sodales mollis odio vitae porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed faucibus mauris. Praesent dolor eros, imperdiet vitae congue vel, ornare ac nisl. Nam vel consectetur purus, non fringilla velit. Maecenas malesuada, justo eget tempus tempor, nunc orci egestas purus, at varius mauris tellus et odio. Nam nec enim ac mi rhoncus interdum. Duis sit amet lectus eleifend, consectetur metus sed, semper purus. Ut faucibus est malesuada fermentum tincidunt. Donec non nibh laoreet, varius diam sed, fermentum massa. Aenean elit augue, ornare sit amet tempus sed, blandit vel nunc.',
    kalp: "1",
    raf: "3",
    genre:'Fantastik Roman' ,
    isbn: '9789750807364',
}];

return {
    all: function() {
      return books;
  },
  get: function(bookId) {
      for (var i = 0; i < books.length; i++) {
        if (books[i].id === parseInt(bookId)) {
          return books[i];
      }
  }
  return null;
},
getfavor: function(){
    var myFavorites =new Array();
    for (var i = 0; i < books.length; i++){
        if(books[i].kalp === "1" ){
            myFavorites.push(books[i]);
        }
    }
    return myFavorites;
},
getshelf: function(shelfId){
    var myShelfs =new Array();
    for (var i = 0; i < books.length; i++){
        if(books[i].raf == parseInt(shelfId) ){
            myShelfs.push(books[i]);
        }
    }
    return myShelfs;
}
}
});