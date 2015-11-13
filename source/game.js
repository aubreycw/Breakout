(function () {
  if (typeof Breakout === "undefined") {
    window.Breakout = {};
  }

  var Game = Breakout.Game = function () {
    this.paddle = new Breakout.Paddle(this);
    this.ball = new Breakout.Ball(this);
    this.blocks = [];
    this.addBlocks();
    this.done = false;
  };

  Game.BG_COLOR = "#660033";
  Game.FPS = 1;

  Game.prototype.step = function() {
    this.ball.move();
  }

  Game.prototype.finish = function() {
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    ctx.fillStyle = "#669900";
    ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);
    this.done = true;
  }

  Game.prototype.movePaddle = function(diff) {
    this.paddle.move(diff);
  }

  Game.prototype.addBlocks = function(){

  }


  Game.prototype.draw = function(ctx) {
    if (this.done){
      this.finish();
      return true;
    }
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    ctx.fillStyle = Game.BG_COLOR;
    ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);
    this.paddle.draw(ctx);
    this.ball.draw(ctx);
    this.blocks.forEach(function(block) {
      block.draw(ctx)
    });
  }

})();