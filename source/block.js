(function () {
  if (typeof Breakout === "undefined") {
    window.Breakout = {};
  }

  var Block = Breakout.Block = function (pos, width, height) {
    this.pos = pos;
    this.height = height;
    this.width = width;
    this.color = "#B8A59A"
  };

  Block.prototype.draw = function(ctx) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.pos[0] - (this.width/2), this.pos[1] - (this.height/2), this.width, this.height);
  }

})();