var expect = require('expect.js');

var GrabBag = require('./index');

describe('GrabBag', function () {
	var Foo = function (name) {
		this._name = name;
	};

	var foo;

	beforeEach(function () {
		foo = new Foo('Rip');
	});

	describe('.reader()', function () {
		it('adds a getter', function () {
			expect(foo).to.not.have.property('name');

			GrabBag.reader(Foo, 'name');

			expect(foo).to.have.property('name');
			expect(foo.name()).to.equal('Rip');
		});
	});

	describe('.writer()', function () {
		it('adds a setter', function () {
			expect(foo).to.not.have.property('setName');
			expect(foo._name).to.equal('Rip');

			GrabBag.writer(Foo, 'name');
			expect(foo).to.have.property('setName');

			foo.setName('JavaScript');
			expect(foo._name).to.equal('JavaScript');
		});
	});

	describe('.accessor()', function () {
		it('adds a getter and a setter', function () {
			GrabBag.accessor(Foo, 'name');

			expect(foo.name()).to.equal('Rip');

			foo.setName('JavaScript');
			expect(foo.name()).to.equal('JavaScript');
		});
	});
});
