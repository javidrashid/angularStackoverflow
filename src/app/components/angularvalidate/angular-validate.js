(function() {
    
angular.module('improvedAngularStackoveflow').directive('angularValidate', function(){
	// Runs during compile
	return {
		// name: '',
		// priority: 1,
		// terminal: true,
		// scope: {}, // {} = isolate, true = child, false/undefined = no change
		// controller: function($scope, $element, $attrs, $transclude) {},
		// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
		// restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
		// template: '',
		// templateUrl: '',
		// replace: true,
		// transclude: true,
		// compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),

		// compile:function($scope, iElm, iAttrs, controller) {
		// 	//$('.form-control').attr('ng-model','iElm');
		// },
			link: function($scope, iElm, iAttrs, controller) {
			    var $invalid = $('.form-control').val().replace(/\s/);
			    //var $valid = $('.form-control').hasClass('ng-valid');

			    
			        $('.form-control').each(function() {
			            $(this).keyup(function(e) {
			            	if($invalid) {
			            		$(this).parent().addClass('has-error');
			            	}
			            	else {
			            		$(this).parent().addClass('has-success');	
			            	}
			            })
			            
			        
			    })

			}

	};
});

})();