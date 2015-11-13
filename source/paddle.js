(function () {
  if (typeof Breakout === "undefined") {
    window.Breakout = {};
  }

  var Paddle = Breakout.Paddle = function (game) {
    this.game = game;
    this.pos = [Math.round(Breakout.Game.DIM_X/2), Breakout.Game.DIM_Y - 20];
    this.vel = [1, 0];
    this.color = "#e67200";
    this.width = 100;
    this.height = 10;
  };

  Paddle.prototype.move = function(diff) {
    this.pos = [this.pos[0] + diff[0], this.pos[1] + diff[1]]
    if (this.pos[0] + this.width/2 > Breakout.Game.DIM_X){
      this.pos[0] = Breakout.Game.DIM_X - this.width/2;
    } else if (this.pos[0] - this.width/2 < 0){
      this.pos[0] = this.width/2;
    }

    if (this.pos[1] + this.height/2 > Breakout.Game.DIM_Y){
      this.pos[1] = Breakout.Game.DIM_Y - this.height/2;
    } else if (this.pos[1] - this.height/2 < 0){
      this.pos[1] = this.height/2;
    }
  }

  Paddle.prototype.draw = function(ctx) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.pos[0] - (this.width/2), this.pos[1] - (this.height/2), this.width, this.height);
  }

})();