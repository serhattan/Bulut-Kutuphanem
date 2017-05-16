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

    return {
        all: function(path) {
            var defer = $q.defer();
            $http.get('http://localhost/webservice/server/?a=get&func='+path).success(function(response){
                defer.resolve(response);
            });
            return defer.promise;
        },
        get: function(customerBookId) {
            var defer = $q.defer();
            $http.get('http://localhost/webservice/server/?a=detail&id='+customerBookId).success(function(response){
                defer.resolve(response);
            }).error(function(response){
                console.log("Get Service Errors");
                console.log(response);
            });
            return defer.promise;
        },
        getinf: function(userscase){
            var defer= $q.defer();
            var id=[];
            $http.get('http://localhost/webservice/server/?a=getinfo&info='+userscase).success(function(response){
                for (var i = 0; i < response.length; i++) {
                    id.push(response[i].id);
                }
                defer.resolve(id)
            });
            return defer.promise;
        },
        getprofil: function(){
            var defer = $q.defer();
            $http.get('http://localhost/webservice/server/?a=get&func=kitaplarim').success(function(data){
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
              url: 'http://localhost/webservice/server/?a=newpost&path='+path,
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
        }).error(function(data){var alertPopup = $ionicPopup.alert({title: 'Malesef kitabınızı ekleyemedik :(' }); });
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
              url: 'http://localhost/webservice/server/?a=newshelf',
              data: data,
              headers:{'Content-Type': 'application/x-www-form-urlencoded'}
            }).success(function(data){
                var alertPopup = $ionicPopup.alert({
                    title: 'Raf Başarıyla Eklendi :)',
                });
                $state.go('tab.raflarim');
            }).error(function(data){
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
        remove: function(id,path,bsid){
            $http.get('http://localhost/webservice/server/?a=remove&id='+id+'&path='+path+'&bsid='+bsid).success(function(response){
                console.log(response);
            });
        }
    }
});