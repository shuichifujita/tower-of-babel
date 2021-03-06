// ES6 

// クラス
// コンストラクタもメソッドも同時に定義できる
// 見やすい
class Character { // クラス定義
	constructor(x, y) { // コンストラクタ
		this.x = x;
		this.y = y;
		this.health_ = 100; 
	}

	damage() { // メソッドも関数内で定義できるよ
		this.health_ = this.health_ - 10;
	}

	getHealth() {
		return this.health_;
	}

	toString() {
		return "x: " + this.x + " y: " + this.y + " health: " + this.getHealth();
	}

}

var x = process.argv[2];
var y = process.argv[3];
var character = new Character(+x, +y);
character.damage();
console.log(character.toString())
