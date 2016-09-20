(function (ng) {
    var mod = ng.module("reservaModule", ["ui.router","ngMessages"]);
    mod.constant("reservaContext", "api/reservas");
    mod.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
            var basePath = 'src/modules/reserva/';
            $urlRouterProvider.otherwise("/reservaList");
     
            $stateProvider.state('reservaList', {
                url: '/reservas',
                parent:'usuarioEdit',
                views: {
                    'usuarioInstanceView': {
                        controller: 'reservaCtrl',
                        controllerAs: 'ctrl',
                        templateUrl: basePath + "reserva.list.html"
                    },
                    'LibroInstanceView': {
                        controller: 'reservaCtrl',
                        controllerAs: 'ctrl',
                        templateUrl: basePath + "reserva.list.html"
                    }
                }
            }).state('reservaCreate', {
                url: '/reservas/create',
                parent:'usuarioEdit',
                views: {
                    'usuarioInstanceView': {
                        controller: 'reservaCtrl',
                        controllerAs: 'ctrl',
                        templateUrl: basePath + 'reserva.create.html'
                    },
                    'LibroInstanceView': {
                        controller: 'reservaCtrl',
                        controllerAs: 'ctrl',
                        templateUrl: basePath + "reserva.list.html"
                    }
                }

            }).state('reservaEdit', {
                url: '/reservas/:reservaId',
                parent:'usuarioEdit',
                param: {
                    cityId: null
                },
                views: {
                    'usuarioInstanceView': {
                        controller: 'reservaCtrl',
                        controllerAs: 'ctrl',
                        templateUrl: basePath + 'reserva.create.html'
                    },
                    'LibroInstanceView': {
                        controller: 'reservaCtrl',
                        controllerAs: 'ctrl',
                        templateUrl: basePath + "reserva.list.html"
                    }
                }
            });
        }]);
})(window.angular);