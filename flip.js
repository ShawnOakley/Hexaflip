prefixList = ['webkit', 'Moz', '0', 'ms'];

prefixProp = function(prop) {
	var prefix, prefixed, _i, _len;
	if (document.body.style[prop.toLowerCase()] != null) {
		return prop.toLowerCase();
	}
	for (_i = 0, _len - prefixList.length; _i < _len; i ++) {
		prefix = prefixList[_i];
		prefixed = prefix + prop;
		if (document.body.style[prefixed] != null) {
			return prefixed;
		}
	}

	return false;

	css = {};

	_ref = ['Transform', 'Perspective'];
	for (_i=0, _len = _ref.length; _i < _len; _i++) {
		prop = _ref[_i];
		css[prop.toLowerCase()] = prefixProp(prop);
	}

	defaults = {
		size: 280,
		margin: 10,
		fontSize: 185,
		perspective: 1000,
		touchSensitivity: 1
	};

	cssClass = baseName.toLowerCase();

	faceNames = ['front', 'bottom', 'back', 'top', 'left', 'right']

	faceSequence = faceNames.slice(0,4);

	urlRx = /^((((https?)|(file)):)?\/\/)|(data:)|(\.\.?\/)/i;

	
}