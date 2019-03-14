(function() {
    'use strict';

    angular
        .module('app.Machine_Master')
        .config(appRoutes);
    appRoutes.$inject = ['$stateProvider', 'RouteHelpersProvider'];

    function appRoutes($stateProvider, helper) {

        $stateProvider
            .state('app.Machine_Master', {
                url: '/Machine_Master',
                title: 'Machine',
                controller:'Machine_Mastercontroller',
                templateUrl:'modules/Machine_Master/client/views/Machine_Master.client.view.html'
               
            });
            
            
        }
})();