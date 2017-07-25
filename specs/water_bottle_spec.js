var assert = require("assert");
var WaterBottle = require("../water_bottle");

describe("Water Bottle", function() {

  var bottle;

  beforeEach(function() {
    bottle = new WaterBottle();
  });

  it("should be empty at start", function() {
    assert.strictEqual(bottle.volume, 0);
  });

  it("should go to 100 when filled", function() {
    bottle.fillBottle();
    assert.strictEqual(bottle.volume, 100);
  });

  it("should go down by 10 when drank", function() {
    bottle.fillBottle();
    bottle.drinkFromBottle();
    assert.strictEqual(bottle.volume, 90);
  });

  it("should go to zero when emptied", function () {
    bottle.fillBottle();
    bottle.emptyBottle();
    assert.strictEqual(bottle.volume, 0);
  })

  it("should not be able to go below 0_false", function() {
    bottle.drinkFromBottle();
    assert.strictEqual(bottle.volume, 0);
  });

  it("should not be able to go below 0_true", function() {
    bottle.fillBottle();
    bottle.drinkFromBottle();
    assert.strictEqual(bottle.volume, 90);
  });

});