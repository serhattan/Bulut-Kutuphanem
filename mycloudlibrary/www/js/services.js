angular.module('starter.services', [])

.service('LoginService', function(Books, $q, $ionicPopup) {
    return {
        loginUser: function(email, pw) {
            var deferred = $q.defer();
            var promise = deferred.promise;

            if (email!=undefined) {
                Books.getinf('login',email).then(function(data){
                    if (email == data.email && pw == data.password) {
                        deferred.resolve('Hoşgeldin ' + data.name + '!');
                        console.log(data);
                        sessionStorage.setItem("id",data.id);
                        sessionStorage.setItem("name",data.name);
                    } else {
                        deferred.reject('Bilgiler yanlış!');
                    }
                })
            }else{
                var alertPopup = $ionicPopup.alert({
                    title: 'Lütfen Bir Email Adresi Giriniz :)',
                });
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

.service('Categories', function(Books,$q){
    return {
        get: function(url){
            var booksinfo = [];
            Books.getinf(String(url)).then(function(data){
                for (var i = 0; i < data.length; i++) {
                    Books.get(data[i]).then(function(response){
                        booksinfo.push(response);
                    });
                }
            })
            return booksinfo;
        }
    };
})

.factory('Books', function($http, $q, $ionicPopup, $state) {
//başka bir dosyada bir sabit olarak bu url leri tanımlayacağım ve burada o diğer dosyadaki sabitleri çekeceğim.
//başka bir dosyada ise bu sabitleri tanımladığım dosyanın example sini oluşturarak yanlış bilgileri yazacağım
//git e ise bu yanlış bilgili olan kısımı yollayacağım
return {
    all: function(path) {
        var defer = $q.defer();
        $http.get('http://localhost/webservice/server/?a=get&func='+path+'&userId='+sessionStorage.id).success(function(response){
            defer.resolve(response);
        }).error(function(response){
            console.log(response);
        });
        return defer.promise;
    },
    get: function(customerBookId) {
        var defer = $q.defer();
        $http.get('http://localhost/webservice/server/?a=detail&id='+customerBookId+'&userId='+sessionStorage.id).success(function(response){
            defer.resolve(response);
        }).error(function(response){
            console.log(response);
        });
        return defer.promise;
    },
    getinf: function(userscase,email){
        var defer= $q.defer();
        var id=[];
        $http.get('http://localhost/webservice/server/?a=getinfo&info='+userscase+'&email='+email+'&userId='+sessionStorage.id).success(function(response){
            if (email!=undefined) {
                defer.resolve(response);
                return defer.promise;
            }
            for (var i = 0; i < response.length; i++) {
                id.push(response[i].id);
            }
            defer.resolve(id)
        });
        return defer.promise;
    },
    getprofil: function(){
        var defer = $q.defer();
        $http.get('http://localhost/webservice/server/?a=get&func=kitaplarim&userId='+sessionStorage.id).success(function(data){
            var profil=[],read=[], reading=[], willread=[],c1=0,c2=0,c3=0;
            for (var i=0; i<data.length; i++) {
                if (data[i].statu==="1") {
                    if (c1<3) {
                        read.push(data[i]);
                        c1++;
                    }else{continue;}
                }else if (data[i].statu==="2") {
                    if (c2<3) {
                        reading.push(data[i]);
                        c2++;
                    }else{continue;}
                }else if (data[i].statu==="3") {
                    if (c3<3) {
                        willread.push(data[i]);
                        c3++;
                    }else{continue;}
                }
            }
            profil.push(read,reading,willread);
            defer.resolve(profil);
        });
        return defer.promise;
    },
    update: function(data){
        console.log(data);
        $http({
          method: 'POST', 
          url: 'http://localhost/webservice/server/?a=update2', 
          data: data, 
          headers:{'Content-Type': 'application/x-www-form-urlencoded'}})
        .success(function(data){
            console.log(data);
        })
        .error(function(data){
            console.log(data);
            alert("Bilgileriniz Güncellenemedi!!!"); });
    },
    save: function(data,path){
        $http({
          method: 'POST',
          url: 'http://localhost/webservice/server/?a=newpost&path='+path+'&userId='+sessionStorage.id,
          data: data,
          headers:{'Content-Type': 'application/x-www-form-urlencoded'}
      }).success(function(data){
        console.log(data);
        if (path=="newbook") {
            var alertPopup = $ionicPopup.alert({
                title: 'Kitabını Başarıyla Eklendi :)',
            });
        }else{
            var alertPopup = $ionicPopup.alert({
                title: 'Kitabın Başarıyla Güncellendi :)',
            });                
        }
        $state.go('tab.anasayfa');
        window.location.reload(true);
    }).error(function(data){
        console.log(data);
        var alertPopup = $ionicPopup.alert({
            title: 'Malesef kitabınızı ekleyemedik :(' 
        });
    });
},
getshelf: function(shelfId){
    var defer = $q.defer();
    $http.get('http://localhost/webservice/server/?a=shelf&ab=getshelf&id='+shelfId).success(function(response){
        defer.resolve(response);
    });
    return defer.promise;
},
saveshelf: function(data){
    console.log(data);
    $http({
      method: 'POST',
      url: 'http://localhost/webservice/server/?a=newshelf&userId='+sessionStorage.id,
      data: data,
      headers:{'Content-Type': 'application/x-www-form-urlencoded'}
  }).success(function(data){
    var alertPopup = $ionicPopup.alert({
        title: 'Raf Başarıyla Eklendi :)',
    });
    $state.go('tab.raflarim');
}).error(function(data){
    console.log(data)
    var alertPopup = $ionicPopup.alert({
        title: 'Malesef raf eklenemedi.',
    });
});
},
addtoshelf: function(data,id){
    console.log(data);
    $http({
      method: 'POST',
      url: 'http://localhost/webservice/server/?a=shelf&ab=addtoshelf&id='+id,
      data: data,
      headers:{'Content-Type': 'application/x-www-form-urlencoded'}
  }).success(function(data){
    console.log(data);
    var alertPopup = $ionicPopup.alert({
        title: 'Kitaplar Rafınıza Başarıyla Eklendi :)',
    });
    $state.go('tab.raflarim');
    window.location.reload(true);
}).error(function(data){
    console.log(data);
    var alertPopup = $ionicPopup.alert({
        title: 'Malesef kitaplar rafa eklenemedi.',
    });
});
},
insertbooks: function(data){
    $http({
      method: 'POST',
      url: 'http://localhost/webservice/server/?a=insert&userId='+sessionStorage.id,
      data: data,
      headers:{'Content-Type': 'application/x-www-form-urlencoded'}
  }).success(function(data){})
},
newuser: function(data){
    $http({
          method: 'POST',
          url: 'http://localhost/webservice/server/?a=newUser',
          data: data,
          headers:{'Content-Type': 'application/x-www-form-urlencoded'}
      }).success(function(data){
        console.log(data);
        var alertPopup = $ionicPopup.alert({
            title: 'Bilgileriniz Başarıyla Eklendi :)',
        });
        $state.go('login');
        window.location.reload(true);
    }).error(function(data){
        console.log(data);
        var alertPopup = $ionicPopup.alert({
            title: 'Malesef Bilgilerinizi Kayıt Edemedik :(' 
        });
    });
},
remove: function(id,path,bsid){
    $http.get('http://localhost/webservice/server/?a=remove&id='+id+'&path='+path+'&bsid='+bsid).success(function(response){
        console.log(response);
    });
}
}
});