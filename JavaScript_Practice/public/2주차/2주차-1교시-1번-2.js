//캡술화 게터,세터
function Rectangle(width, height) {
	this.width = width;
	this.height = height;
	this.setWidth = function(value) {
		if(value<=0) {
			return "0보다 큰값 입력";
		}
		this.width = value;
	}
	this.setHeight = function(value) {
		if(value<=0) {
			return "0보다 큰값 입력";
		}
		this.width = value;
	}
	this.getWidth = function() {
		return this.width;
	}
	this.getHeight = function() {
		return this.height;
	}
}

Rectangle.prototype.getArea = function() {
	return this.width * this.height;
}

var rec = new Rectangle(5,7);
rec.setWidth(10);
console.log(rec.getArea());