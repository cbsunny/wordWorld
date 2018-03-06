// 产生随机位置
SearchX.PosUtil = function (parameters) {
    this.width = parameters.width || 1000;
    this.height = parameters.height || 500;
    this.depth = parameters.depth || 500;
    this.perLength = parameters.perLength || 50;
    this.size = parameters.size || 100;
    this.xSize = parseInt(this.width / this.perLength)
    this.ySize = parseInt(this.height / this.perLength);
    this.zSize = parseInt(this.depth / this.perLength);
    this.maxNumber= this.xSize * this.ySize * this.zSize;
    this.space = parseInt(this.maxNumber / this.size);
}

SearchX.PosUtil.prototype.getPosition = function (index) {
    var num = parseInt(Math.random() * this.space) + this.space * index;

    var _xSize = num % this.xSize;
    var _ySize = parseInt(num / this.xSize) % this.ySize;
    var _zSize = parseInt(num / this.xSize / this.ySize) % this.zSize;
    return new THREE.Vector3(this.perLength * (_xSize - this.xSize / 2), this.perLength * (_ySize - this.ySize / 2), this.perLength * (_zSize - this.zSize / 2));
}

SearchX.PosUtil.prototype.setSize = function(size) {
    this.size = size;
    this.space =  parseInt(this.maxNumber / this.size);
}




