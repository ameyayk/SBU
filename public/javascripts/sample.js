angular.module("Supplier",{})
angular.module('Supplier',['ui.bootstrap','jm.i18next']);

//code below this is to gtry differenet things out.Upwards is the real deal

//angular.module('Supplier', ['ui.bootstrap']);
function AlertDemoCtrl($scope) {
    $scope.alerts = [
        { type: 'error', msg: 'Oh snap! Change a few things up and try submitting again.' },
        { type: 'success', msg: 'Well done! You successfully read this important alert message.' }
    ];

    $scope.addAlert = function() {
        $scope.alerts.push({msg: "Another alert!"});
    };

    $scope.closeAlert = function(index) {
        $scope.alerts.splice(index, 1);
    };

}


angular.module('jm.i18next').config(function ($i18nextProvider) {

    $i18nextProvider.options = {
        useCookie: false,
        useLocalStorage: false,
        resGetPath: '../locales/__lng__/__ns__.json'
    };

});

angular.module('Supplier').controller('LanguageController', function ($rootScope, $scope, $timeout, $i18next) {

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

/*
var TabsDemoCtrl = function ($scope) {
    $scope.tabs = [
        { title:"Dynamic Title 1", content:"Dynamic content 1" },
        { title:"Dynamic Title 2", content:"Dynamic content 2", disabled: true }
    ];

    $scope.alertMe = function() {
        setTimeout(function() {
            alert("You've selected the alert tab!");
        });
    };

    $scope.navType = '';
};
               */

var FormController=function($scope){

    $scope.contactInfoController=function($scope){
        $scope.usage="scope bound to yourDetailsController";
        $scope.contactInfoValid=true;
        //use this method to validate the contactInfotab
    }
    $scope.companyInfoController=function($scope){
        //use this method to validate the contactInfotab                                 su
        $scope.usage="scope bound to companyInfoController";
        $scope.companyInfoValid=true;

    }

    $scope.businessDetailController=function($scope){
        //use this method to validate the contactInfotab
        $scope.usage="bound to business Details controller";
        $scope.businessDetailsValid=true;
    }


    $scope.serviceDetailContoller=function($scope){
        //use this method to validate the contactInfotab
        $scope.usage="bound to business Details controller";
        $scope.serviceDetailsValid=true;

        $scope.user={first :'ameya',last:'kulkarni'};
    }

    $scope.toggleState=function(){

         $scope.contactInfoValid=!$scope.contactInfoValid;
    }

    $scope.toggleState2=function(){

        $scope.companyInfoValid=!$scope.companyInfoValid;
    }




    $scope.register=function(){
        //stub to make persist the data to the server
        alert('clcik');
    }

    //model to toggle th form submit button
    $scope.isDisabled=false;

    //method to watch if each of the sub form are passing in the validity
    $scope.$watchCollection('[contactInfoValid,companyInfoValid,businessDetailsValid,serviceDetailsValid]', function(newValues) {
    var flag=true;
        for(var i=0;i<newValues.length;i++){
               flag=flag && newValues[i];
        }
        $scope.isDisabled=flag;
    });
}