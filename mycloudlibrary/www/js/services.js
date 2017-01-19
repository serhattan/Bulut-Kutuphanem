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
    name: 'Kitabın Adı',
    publisher: 'Yayın Evi',
    author: 'Kitabın Yazarı',
    img: 'img/mahalledenarkadaslar.png',
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at mi est. Sed mi sapien, laoreet in congue eget, elementum tincidunt libero. Vestibulum gravida posuere lorem, sed interdum ex maximus eu. Morbi ultrices iaculis dui non facilisis. Suspendisse consectetur felis nibh, vitae feugiat odio malesuada sit amet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse fermentum ex sollicitudin risus tincidunt porta. Nullam pharetra condimentum ante non hendrerit. Vivamus sed velit diam. Proin id velit vitae tellus sagittis ultrices. Vivamus sed nulla vel risus tristique suscipit nec at ipsum. Proin cursus lacinia augue, vitae dignissim mauris pellentesque eget. Quisque leo neque, placerat at tincidunt vitae, sagittis sed libero. Integer volutpat, odio sed porttitor venenatis, leo quam ornare justo, ut tempus leo quam quis ex. Donec facilisis est purus, vel volutpat metus ultrices eget.Nullam nec ipsum pulvinar, rutrum arcu sagittis, sollicitudin felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse consectetur viverra dui, id porttitor tellus imperdiet sed. Sed convallis sodales ligula, quis malesuada libero gravida ut. Mauris sodales mollis odio vitae porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed faucibus mauris. Praesent dolor eros, imperdiet vitae congue vel, ornare ac nisl. Nam vel consectetur purus, non fringilla velit. Maecenas malesuada, justo eget tempus tempor, nunc orci egestas purus, at varius mauris tellus et odio. Nam nec enim ac mi rhoncus interdum. Duis sit amet lectus eleifend, consectetur metus sed, semper purus. Ut faucibus est malesuada fermentum tincidunt. Donec non nibh laoreet, varius diam sed, fermentum massa. Aenean elit augue, ornare sit amet tempus sed, blandit vel nunc.',
  }, {
    id: 1,
    name: 'Kitabın Adı',
    publisher: 'Yayın Evi',
    author: 'Kitabın Yazarı',
    img: 'img/kafamdabirtuhaflik.png',
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at mi est. Sed mi sapien, laoreet in congue eget, elementum tincidunt libero. Vestibulum gravida posuere lorem, sed interdum ex maximus eu. Morbi ultrices iaculis dui non facilisis. Suspendisse consectetur felis nibh, vitae feugiat odio malesuada sit amet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse fermentum ex sollicitudin risus tincidunt porta. Nullam pharetra condimentum ante non hendrerit. Vivamus sed velit diam. Proin id velit vitae tellus sagittis ultrices. Vivamus sed nulla vel risus tristique suscipit nec at ipsum. Proin cursus lacinia augue, vitae dignissim mauris pellentesque eget. Quisque leo neque, placerat at tincidunt vitae, sagittis sed libero. Integer volutpat, odio sed porttitor venenatis, leo quam ornare justo, ut tempus leo quam quis ex. Donec facilisis est purus, vel volutpat metus ultrices eget.Nullam nec ipsum pulvinar, rutrum arcu sagittis, sollicitudin felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse consectetur viverra dui, id porttitor tellus imperdiet sed. Sed convallis sodales ligula, quis malesuada libero gravida ut. Mauris sodales mollis odio vitae porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed faucibus mauris. Praesent dolor eros, imperdiet vitae congue vel, ornare ac nisl. Nam vel consectetur purus, non fringilla velit. Maecenas malesuada, justo eget tempus tempor, nunc orci egestas purus, at varius mauris tellus et odio. Nam nec enim ac mi rhoncus interdum. Duis sit amet lectus eleifend, consectetur metus sed, semper purus. Ut faucibus est malesuada fermentum tincidunt. Donec non nibh laoreet, varius diam sed, fermentum massa. Aenean elit augue, ornare sit amet tempus sed, blandit vel nunc.',
  }, {
    id: 2,
    name: 'Kitabın Adı',
    publisher: 'Yayın Evi',
    author: 'Kitabın Yazarı',
    img: 'img/kimsecik.png',
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at mi est. Sed mi sapien, laoreet in congue eget, elementum tincidunt libero. Vestibulum gravida posuere lorem, sed interdum ex maximus eu. Morbi ultrices iaculis dui non facilisis. Suspendisse consectetur felis nibh, vitae feugiat odio malesuada sit amet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse fermentum ex sollicitudin risus tincidunt porta. Nullam pharetra condimentum ante non hendrerit. Vivamus sed velit diam. Proin id velit vitae tellus sagittis ultrices. Vivamus sed nulla vel risus tristique suscipit nec at ipsum. Proin cursus lacinia augue, vitae dignissim mauris pellentesque eget. Quisque leo neque, placerat at tincidunt vitae, sagittis sed libero. Integer volutpat, odio sed porttitor venenatis, leo quam ornare justo, ut tempus leo quam quis ex. Donec facilisis est purus, vel volutpat metus ultrices eget.Nullam nec ipsum pulvinar, rutrum arcu sagittis, sollicitudin felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse consectetur viverra dui, id porttitor tellus imperdiet sed. Sed convallis sodales ligula, quis malesuada libero gravida ut. Mauris sodales mollis odio vitae porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed faucibus mauris. Praesent dolor eros, imperdiet vitae congue vel, ornare ac nisl. Nam vel consectetur purus, non fringilla velit. Maecenas malesuada, justo eget tempus tempor, nunc orci egestas purus, at varius mauris tellus et odio. Nam nec enim ac mi rhoncus interdum. Duis sit amet lectus eleifend, consectetur metus sed, semper purus. Ut faucibus est malesuada fermentum tincidunt. Donec non nibh laoreet, varius diam sed, fermentum massa. Aenean elit augue, ornare sit amet tempus sed, blandit vel nunc.',
  }, {
    id: 3,
    name: 'Kitabın Adı',
    publisher: 'Yayın Evi',
    author: 'Kitabın Yazarı',
    img: 'img/momo.png',
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at mi est. Sed mi sapien, laoreet in congue eget, elementum tincidunt libero. Vestibulum gravida posuere lorem, sed interdum ex maximus eu. Morbi ultrices iaculis dui non facilisis. Suspendisse consectetur felis nibh, vitae feugiat odio malesuada sit amet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse fermentum ex sollicitudin risus tincidunt porta. Nullam pharetra condimentum ante non hendrerit. Vivamus sed velit diam. Proin id velit vitae tellus sagittis ultrices. Vivamus sed nulla vel risus tristique suscipit nec at ipsum. Proin cursus lacinia augue, vitae dignissim mauris pellentesque eget. Quisque leo neque, placerat at tincidunt vitae, sagittis sed libero. Integer volutpat, odio sed porttitor venenatis, leo quam ornare justo, ut tempus leo quam quis ex. Donec facilisis est purus, vel volutpat metus ultrices eget.Nullam nec ipsum pulvinar, rutrum arcu sagittis, sollicitudin felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse consectetur viverra dui, id porttitor tellus imperdiet sed. Sed convallis sodales ligula, quis malesuada libero gravida ut. Mauris sodales mollis odio vitae porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed faucibus mauris. Praesent dolor eros, imperdiet vitae congue vel, ornare ac nisl. Nam vel consectetur purus, non fringilla velit. Maecenas malesuada, justo eget tempus tempor, nunc orci egestas purus, at varius mauris tellus et odio. Nam nec enim ac mi rhoncus interdum. Duis sit amet lectus eleifend, consectetur metus sed, semper purus. Ut faucibus est malesuada fermentum tincidunt. Donec non nibh laoreet, varius diam sed, fermentum massa. Aenean elit augue, ornare sit amet tempus sed, blandit vel nunc.',
  }, {
    id: 4,
    name: 'Kitabın Adı',
    publisher: 'Yayın Evi',
    author: 'Kitabın Yazarı',
    img: 'img/hayalkahramanlari.png',
    summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at mi est. Sed mi sapien, laoreet in congue eget, elementum tincidunt libero. Vestibulum gravida posuere lorem, sed interdum ex maximus eu. Morbi ultrices iaculis dui non facilisis. Suspendisse consectetur felis nibh, vitae feugiat odio malesuada sit amet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Suspendisse fermentum ex sollicitudin risus tincidunt porta. Nullam pharetra condimentum ante non hendrerit. Vivamus sed velit diam. Proin id velit vitae tellus sagittis ultrices. Vivamus sed nulla vel risus tristique suscipit nec at ipsum. Proin cursus lacinia augue, vitae dignissim mauris pellentesque eget. Quisque leo neque, placerat at tincidunt vitae, sagittis sed libero. Integer volutpat, odio sed porttitor venenatis, leo quam ornare justo, ut tempus leo quam quis ex. Donec facilisis est purus, vel volutpat metus ultrices eget.Nullam nec ipsum pulvinar, rutrum arcu sagittis, sollicitudin felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse consectetur viverra dui, id porttitor tellus imperdiet sed. Sed convallis sodales ligula, quis malesuada libero gravida ut. Mauris sodales mollis odio vitae porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed faucibus mauris. Praesent dolor eros, imperdiet vitae congue vel, ornare ac nisl. Nam vel consectetur purus, non fringilla velit. Maecenas malesuada, justo eget tempus tempor, nunc orci egestas purus, at varius mauris tellus et odio. Nam nec enim ac mi rhoncus interdum. Duis sit amet lectus eleifend, consectetur metus sed, semper purus. Ut faucibus est malesuada fermentum tincidunt. Donec non nibh laoreet, varius diam sed, fermentum massa. Aenean elit augue, ornare sit amet tempus sed, blandit vel nunc.',
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
    }
  }
});