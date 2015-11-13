(function () {
  if (typeof Breakout === "undefined") {
    window.Breakout = {};
  }

  var Ball = Breakout.Ball = function (game) {
    this.game = game;
    this.pos = [Math.round(Breakout.Game.DIM_X/2), Math.round(Breakout.Game.DIM_Y/2)];
    this.vel = [0, -10];
    this.color = "#e5ccff";
    this.radius = 20;
  };

  Ball.prototype.move = function() {
    this.pos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]]
    this.maybeBouncePaddle(this.game.paddle)
    this.maybeBounceBlock(this.game.blocks)

    if ((this.pos[0] + this.radius/2 > Breakout.Game.DIM_X) || (this.pos[0] - this.radius/2 < 0)){
      this.vel[0] = -this.vel[0]
    } 

    if (this.pos[1] + this.radius/2 > Breakout.Game.DIM_Y){
      this.game.finish()
    } else if (this.pos[1] - this.radius/2 < 0){
      this.vel[1] = -this.vel[1]
    }
  }

  Ball.prototype.maybeBouncePaddle = function(paddle){
    if (this.pos[0] + this.radius/2 > paddle.pos[0] - paddle.width){
      if (this.pos[0] - this.radius/2 < paddle.pos[0] + paddle.width){
        if (this.pos[1] + this.radius/2 > paddle.pos[1] - paddle.height){
          this.vel[1] = -this.vel[1]
        }
      }
    } 
  }

  Ball.prototype.maybeBounceBlock = function(blocks){
    var newBlocks = [];
    var changeVel = false;
    blocks.forEach(function(block){
      if (this.pos[0] + this.radius/2 > block.pos[0] - block.width){
        if (this.pos[0] - this.radius/2 < block.pos[0] + block.width){
          if (this.pos[1] - this.radius/2 < block.pos[1] + block.height){
            changeVel = true;
          } else {
            newBlocks.push(block);
          }
        }
      }
    });
    if (changeVel){
      this.vel[1] = -this.vel[1] 
    }
    this.game.blocks = newBlocks
  }

  Ball.prototype.draw = function(ctx) {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.pos[0],this.pos[1],this.radius,0, 2*Math.PI);
    ctx.fill();
  }

})();