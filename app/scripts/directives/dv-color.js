'use strict';

angular.module('teamTmntApp')
  .directive('dvColor', function () {
    return {
      restrict: 'A',
      link: function postLink(scope, element, attrs) {
	  

		  element.hover(
			  function(){
			  	element.css('color', attrs.dvColor);
			  },

			  function(){
			  	element.css('color', 'black');
			  }
		);
	  }
	};	
  });
