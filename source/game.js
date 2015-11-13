(function () {
  if (typeof Breakout === "undefined") {
    window.Breakout = {};
  }

  var Game = Breakout.Game = function () {
    this.paddle = new Breakout.Paddle(this);
    this.ball = new Breakout.Ball(this);
    this.blocks = [];
    this.addBlocks();
  };

  Game.BG_COLOR = "#660033";
  Game.FPS = 1;

  Game.prototype.step = function() {
    this.ball.move();
  }

  Game.prototype.setView = function(view) {
    this.view = view;
  }

  Game.prototype.finish = function() {
    this.view.stop()
  }

  Game.prototype.movePaddle = function(diff) {
    this.paddle.move(diff);
  }

  Game.prototype.addBlocks = function(){

  }


  Game.prototype.draw = function(ctx) {
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