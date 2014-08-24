var GrabBag = function () {
};

GrabBag.reader = function (klass, attrName) {
	klass.prototype[attrName] = function () {
		return this['_' + attrName];
	};
};

GrabBag.writer = function (klass, attrName) {
	var setAttrName = 'set' + attrName[0].toUpperCase() + attrName.slice(1);

	klass.prototype[setAttrName] = function (value) {
		this['_' + attrName] = value;
	};
};

GrabBag.accessor = function (klass, attrName) {
	this.reader(klass, attrName);
	this.writer(klass, attrName);
};

module.exports = GrabBag;
