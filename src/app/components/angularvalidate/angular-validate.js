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
				    //var inputTextType = $('.form-control[type="text"]').val() === '';
				   $('#submit').on('click', function() {
				    	var noOfErrorMessages = $('span.error').length;
			   			$('.form-control').each(function() {
							
							if(noOfErrorMessages === 1 || noOfErrorMessages === 0) {
								$(this).parent().after('<span class="error">This Field is Required</san>');
							}
			       				if($(this).val() === '') {
			       					$(this).parent().addClass('has-error');
			       					
			       				}
			       				else {
			       					$(this).parent().addClass('has-success');	
			       					$(this).parent().removeClass('has-error');
			       					$(this).parent().next().remove();
			       				}


			       			})
					var allFormFields  = $('.form-control').length;
				    var allValidFields  = $('.has-success').length;
				    var allInValidFields  = $('.has-error').length;

				    if(allInValidFields === 0) {
				    	$('#submit').submit();
				    	alert('submitting form...');
				    }

	          })
			 

			}

	};
});

})();