var Athlete = function() {
  this.hydration = 100;
  this.distance = 0;
};

Athlete.prototype.run = function(distance) {
  if (distance < this.hydration) {
  this.distance += distance;
  this.hydration -= distance;  
  }
  else {
    return ("sorry, no can run.");
  }
};

module.exports = Athlete;