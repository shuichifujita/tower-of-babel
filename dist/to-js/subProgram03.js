// EX.03 Extends

"use strict";

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var util = require('util');

var Character = (function () {
	function Character(x, y) {
		_classCallCheck(this, Character);

		this.x = x;
		this.y = y;
		this.health_ = 100;
	}

	_createClass(Character, [{
		key: "damage",
		value: function damage() {
			this.health_ = this.health_ - 10;
		}
	}, {
		key: "getHealth",
		value: function getHealth() {
			return this.health_;
		}
	}, {
		key: "toString",
		value: function toString() {
			return "x: " + this.x + " y: " + this.y + " health: " + this.getHealth();
		}
	}]);

	return Character;
})();

var Player = (function (_Character) {
	_inherits(Player, _Character);

	function Player(x, y, name) {
		_classCallCheck(this, Player);

		_get(Object.getPrototypeOf(Player.prototype), "constructor", this).call(this, x, y);
		this.name = name;
	}

	_createClass(Player, [{
		key: "move",
		value: function move(dx, dy) {
			this.x += dx;
			this.y += dy;
		}
	}, {
		key: "toString",
		value: function toString() {
			return "name: " + this.name + " " + _get(Object.getPrototypeOf(Player.prototype), "toString", this).call(this);
		}
	}]);

	return Player;
})(Character);

var x = process.argv[2];
var y = process.argv[3];
var name = process.argv[4];
var character = new Character(+x, +y);
character.damage();
console.log(character.toString());
var player = new Player(+x, +y, name);
player.damage();
player.move(7, 8);
console.log(player.toString());