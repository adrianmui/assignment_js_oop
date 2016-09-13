var APP = APP || {};

APP.View = {
  cacheDOM: function() {
    this.$document = $(document);
    this.gameBox = $('#game-box')[0];
    this.gameBox.width = 300;
    this.gameBox.height = 200;
    this.context = this.gameBox.getContext('2d');
    // this.context = document.getElementById("game-box");
    //.getContext('2d');
    // this.context.stroke();
  },

  clearCanvas: function() {
    this.context.clearRect(0,0,APP.View.gameBox.width,APP.View.gameBox.height);
  },

  handleMovement: function() {
    this.$document.on("keydown", function(e) {
        APP.View.keypress = e.which;
    });
  },

  rotateSpaceShip: function(degrees) {
    this.context.rotate(toRadians(degrees));
  },

  drawAsteroids: function(asteroids, size) {
    asteroids.forEach( function(el) {
      var x = el.coordX;
      var y = el.coordY;
      APP.View.context.beginPath();
      // APP.View.context.fillRect(10,10,100,100);
      // APP.View.context.fillStyle = 'green';
      APP.View.context.arc(x, y, size, 0, Math.PI * 2, false);
      // APP.View.context.closePath();
      APP.View.context.strokeStyle = "#ff0000";
      APP.View.context.stroke();
    });
  },

  drawSpaceShip: function(spaceship) {
      var x = spaceship.coordX;
      var y = spaceship.coordY;
      var deg = spaceship.degrees;

      // the triangle
      APP.View.context.beginPath();
      // size of spaceship
      APP.View.context.moveTo(x - 4, y + 4);
      APP.View.context.lineTo(x + 4, y + 4);
      APP.View.context.lineTo(x, y - 7);
      APP.View.context.closePath();

      // the outline
      APP.View.context.lineWidth = 1;
      APP.View.context.strokeStyle = '#666666';
      APP.View.context.stroke();

      // the fill color
      APP.View.context.fillStyle = "#FFCC00";
      APP.View.context.fill();
    },
    // For rotating around spaceship
    drawImageRot: function (img,x,y,width,height,deg) {
      //Convert degrees to radian
      var rad = deg * Math.PI / 180;

      //Set the origin to the center of the image
      ctx.translate(x + width / 2, y + height / 2);

      //Rotate the canvas around the origin
      ctx.rotate(rad);

      //draw the image
      ctx.drawImage(img,width / 2 * (-1),height / 2 * (-1),width,height);

      //reset the canvas
      ctx.rotate(rad * ( -1 ) );
      ctx.translate((x + width / 2) * (-1), (y + height / 2) * (-1));
    }
};
