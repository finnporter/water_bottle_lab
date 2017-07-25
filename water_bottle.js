var WaterBottle = function() {
  this.volume = 0;
};

WaterBottle.prototype.fillBottle = function() {
  this.volume = 100;
}

WaterBottle.prototype.drinkFromBottle = function() {
  return this.volume > 10 ? this.volume -= 10 : "Sorry, can't drink from this.";
}

WaterBottle.prototype.emptyBottle = function() {
  this.volume = 0;
}

module.exports = WaterBottle;

