(function() {
    'use strict';

    angular
        .module('app.Machine_Master')
        .run(coreMenu);

    coreMenu.$inject = ['Menus'];
    function coreMenu(Menus){

        Menus.addMenuItem('sidebar', {
            title: 'Machine Master',
            state: 'app.Machine_Master',
            iconClass:'icon-energy',
            position: 12,
            roles: ['*']
        });
        

     }

})();