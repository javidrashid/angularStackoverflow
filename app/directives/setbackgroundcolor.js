(function() {
	angular
    .module('improvedAngularStackoveflow')
    .directive('setBackgroundColor', setBackgroundColor);

function setBackgroundColor () {


	return {
		restrict: 'A',
		link: function (scope, iElement, iAttrs) {
			iElement.on('click', function() {
				$('li').removeClass('changeColor');
				$(this).addClass('changeColor');	
			})
		}
	};

	
}

})();