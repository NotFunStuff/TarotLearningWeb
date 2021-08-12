var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope, $http) {
    $http.get("cardData.json")
        .then(function (response) {
            const json = response.data
            var carList = document.getElementById("cardList")
            var toAdd = '<div class="row">';
            for (var i = 0; i < json.length; i++) {
                if (json[i].type !== 'major'){
                    toAdd += '</div>'
                    break;
                } 
                var link = json[i].name.toLowerCase().replaceAll(' ', '')
                toAdd += `<div class="col"> <div class="cardHolder"> <a href="/card${json[i].cid}"><img class="cardofList" src="card/${json[i].img}"><div class="cardLink">${json[i].name}</div></a></div></div>`
                if ((i+1)%6 == 0){
                    toAdd += '</div> <div class="row">'
                }                
            }
            carList.innerHTML = toAdd
        });
});