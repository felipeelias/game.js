function Starfield ( game, params ) {
	var self = this, 
	    params = params || {};
	
	self.xLimit = game.canvas.offsetWidth/2;
	self.yLimit = game.canvas.offsetHeight/2;
	self.zLimit = params.depth || 255;
	self.starCount = params.starCount || 100;
	self.zoomLimit = params.zoomLimit || 2;
	self.zoomFactor = params.zoomFactor || .035;
	
	$.extend(self, {
	  init: function() {
    	game.paper.translate(self.xLimit, self.yLimit);
    	self.stars = [];
    	
    	for(var i = 0; i < self.starCount; i++) {
    		self.stars.push({
    			x: self.newX(),
    			y: self.newY(),
    			z: self.newZ(),
    			acc: self.newAcc(),
    			color: self.newColor()
    		});
    		game.paper.fillStyle = rgb(self.stars[i].color, self.stars[i].color, self.stars[i].color);
    	}
    },
    
    oneStepForward: function() {
    	game.paper.clearRect(-self.xLimit, -self.yLimit, self.xLimit*2, self.yLimit*2);
    	
    	for(var i = 0; i < self.starCount; i++) {
    		var star = self.stars[i];

    		if ( Math.abs(star.x) > self.xLimit ) {
    			self.recycleStar(star);
    		} else {
    			star.x += (star.x * star.acc) / 200;
    		}

    		if ( Math.abs(star.y) > self.yLimit ) {
    			self.recycleStar(star);
    		} else {
    			star.y += (star.y * star.acc) / 200;
    		}

    		star.z = (star.z < self.zoomLimit) ? star.z + self.zoomFactor : star.z;
    		star.color += (star.color < 255) ? star.acc : 0;

    		self.drawStar(star);
    	}
    },
    
    drawStar: function ( star ) {
    	game.paper.fillStyle = rgb(star.color, star.color, star.color);
      game.paper.beginPath();
    	game.paper.arc(star.x, star.y, star.z, 0, Math.PI*2, true);
    	game.paper.fill();
    },
    
    recycleStar: function ( star ) {
    	star.x    = self.newX();
    	star.y    = self.newY();
    	star.z    = self.newZ();
    	star.acc  = self.newAcc();
    	star.color = self.newColor();
    },
    
    newX: function() {
    	return random(-self.xLimit, self.xLimit);
    },
    
    newY: function() {
    	return random(-self.yLimit, self.yLimit);
    },
    
    newZ: function() {
    	return .1;
    },
    
    newAcc: function() {
    	return random(5, 25);
    },
    
    newColor: function() {
    	return 0;
    },
    
	  toString: function() {
    	return "Starfield#" + game.canvas.id;
    }
	});
	
	self.init();
};

function random(lower, upper){
  return Math.floor(Math.random() * (upper-lower) + lower);
}

function rgb (r, g, b) {
  return "rgb(" + r + "," + g + "," + b + ")";
}