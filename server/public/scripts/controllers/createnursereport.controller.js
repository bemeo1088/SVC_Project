myApp.controller('CreateNurseReportController', function (UserService, ReportService, $http) {
    var vm = this;
    vm.reportService = ReportService;
    
    vm.nurseReportHospital = "";
    vm.nurseReportId = "";
    vm.newNurseReport = {
        nurse_was_adv_dispatched: false
    };

    vm.submitNurseReport = function (objectTosend) {
        console.log(objectTosend);
        $http.post('/report/new/nursereport', objectTosend).then(function (response) {
            console.log('success adding new nurse report');
            vm.viewNurseReport();    
        }).catch(function (err) {
            console.log('failure', error);
        });
    }
})