function is_param(p) {
	return p.length > 1 && p[0] === '{'
}

angular

.module('ApiDoc', [])

.controller('MainCtrl', function($http) {

	this.doc = {};

	$http({
		method: 'GET',
		url: 'json',
	}).then(
		function ok(response) {
			that.doc = response.data;

			var endpoints = that.doc.endpoints;
			for (var url in endpoints) {
				var endpoint = endpoints[url];

				endpoint.url = [];
				var parts = url.split("/");
				parts.shift();
				for (var i in parts) {
					var part = parts[i];
					endpoint.url.push({
						name: part,
						isparam: is_param(part), 
					});
				}
			}
		},
		function error(response) {

		}
	);

	this.request = function(method, url, item){
		$http({
			method: method,
			url: url,
		}).then(
			function ok(response) {
				console.log(response);
				item.response = response.data;
			},
			function error(response) {
				console.log(response);
				item.response = response.data;
			}
		);
	};

	var that = this;

})

.directive('marked', function() {
	return {
		restrict: 'E',
		scope: {
			content: '=',
		},
		link: function(scope, element, attrs) {
			var div = element[0];
			div.innerHTML = marked(scope.content);
			// TODO: colorize code
		},
	};
})

