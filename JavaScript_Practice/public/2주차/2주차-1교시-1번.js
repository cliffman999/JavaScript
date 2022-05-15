//음수가 입력됐을때 잘못됐다고 출력
function Rectangle(width, height) {
	this._width = width;
	this._height = height;
}

Rectangle.prototype.getArea = function() {
	if(this._width<0) {
		return "잘못된 입력"
	}
	if(this._height<0) {
		return "잘못된 입력"
	}
	return this._width * this._height;
}

var rectangle = new Rectangle(-5,7);
console.log("넓이 = ",rectangle.getArea());
