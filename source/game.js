(function () {
  if (typeof Breakout === "undefined") {
    window.Breakout = {};
  }

  var Game = Breakout.Game = function () {
    this.paddle = new Breakout.Paddle(this);
    this.ball = new Breakout.Ball(this);
    this.blocks = [];
    this.blockWidth = 40;
    this.blockHeight = 20;
    this.addBlocks();
    // debugger;
  };

  Game.BG_COLOR = "#660033";
  Game.FPS = 1;

  Game.prototype.step = function() {
    // debugger;
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
    var pos = [this.blockWidth/2,this.blockHeight/2];
    // debugger;
    while (pos[0] < (Game.DIM_X - this.blockWidth/2)){
      this.blocks.push(new Breakout.Block([pos[0], pos[1]], this.blockWidth, this.blockHeight));
      // console.log(pos)
      pos[0] = pos[0] + this.blockWidth;
    }
  }


  Game.prototype.draw = function(ctx) {
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    ctx.fillStyle = Game.BG_COLOR;
    ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);
    this.paddle.draw(ctx);
    this.ball.draw(ctx);
    // debugger;
    this.blocks.forEach(function(block) {
      // debugger;
      block.draw(ctx)
    });
  }

})();