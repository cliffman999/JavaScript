//캡술화 게터,세터
function Rectangle(width, height) {
	this.width = width;
	this.height = height;
}

Rectangle.prototype.getWidth = function() {
	return this.width;
}

Rectangle.prototype.getHeight = function() {
	return this.height;
}

Rectangle.prototype.setWidth = function(value) {
	if(value<=0) {
			return "0보다 큰값 입력";
		}
		this.width = value;
}

Rectangle.prototype.setHeight = function(value) {
	if(value<=0) {
			return "0보다 큰값 입력";
		}
		this.height = value;
}

Rectangle.prototype.getArea = function() {
	return this.getWidth() * this.getHeight();
}

var rec = new Rectangle(5,7);
rec.setWidth(7);
console.log(rec.getArea());