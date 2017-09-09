const Object2Array = function() {
	return function(input) {
		var out = [];
		for (let i in input) {
			out.push(input[i]);
		}
		return out;
	}
};

export { Object2Array };
