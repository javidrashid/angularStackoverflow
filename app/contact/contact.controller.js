(function() {
  'use strict';

  angular
    .module('improvedAngularStackoveflow')
    .controller('ContactController', ContactController);

  /** @ngInject */
  function ContactController($timeout, webDevTec, toastr) {
    var vm = this;

    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1437764404930;
    vm.showToastr = showToastr;


    function showToastr() {
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
      vm.classAnimation = '';
    }


  }
})();
