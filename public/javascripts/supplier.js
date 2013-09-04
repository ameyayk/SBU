var app=angular.module("Supplier",{})
angular.module('Supplier',['ui.bootstrap','jm.i18next']);
angular.module('jm.i18next').config(function ($i18nextProvider) {

    $i18nextProvider.options = {
        useCookie: false,
        useLocalStorage: false,
        resGetPath: '../locales/__lng__/__ns__.json'
    };

});

angular.module('Supplier', ['jm.i18next']).controller('LanguageController', function ($rootScope, $scope, $timeout, $i18next) {

    $scope.changeLanguage = function (lng) {
         $i18next.options.lng = lng;
    };
    //have a static data set of locales defined.Might have to populate it from the Backend
    $scope.languages=   [
        { id: "en" ,name: 'English' },
        { id: "de", name: 'German' },
        { id: "fr", name: 'French' }
    ];
    //set the default language
    $scope.language=$scope.languages[0].id;

    //handle the language switch
    $scope.languageChanged=function(){
       $scope.changeLanguage(($scope.language));
    }

});


function FormController($scope) {

}

