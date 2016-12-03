(function() {

  angular
    .module('eventApp')
    .factory('SelectedData', selectedData);

  //selectedData.$inject = ['$http'];
  function selectedData () {
      return {
          selectedCity : '',
          
      };
  }

})();